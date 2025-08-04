import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';

// Path for the cache file
const cachePath = path.resolve(process.cwd(), 'data', 'scholar_cache.json');
// Cache duration in seconds (e.g., 24 hours)
const CACHE_DURATION = 24 * 60 * 60;

// Helper to fetch with retry logic to improve reliability
async function fetchWithRetry(url: string, retries = 3, delay = 1500) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        // Disable Next.js fetch caching, we are implementing our own
        cache: 'no-store' 
      });
      if (response.ok) return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(res => setTimeout(res, delay));
    }
  }
  throw new Error(`Failed to fetch ${url} after multiple retries`);
}

async function getFreshScholarData() {
  const response = await fetchWithRetry('https://scholar.google.com/citations?hl=de&user=1NgPLREAAAAJ');
  const html = await response.text();
  const $ = cheerio.load(html);

  const stats = {
    citations: parseInt($('td.gsc_rsb_std').eq(0).text()) || 0,
    hIndex: parseInt($('td.gsc_rsb_std').eq(2).text()) || 0,
    i10Index: parseInt($('td.gsc_rsb_std').eq(4).text()) || 0,
  };

  const publicationPromises = $('.gsc_a_tr').map(async (_, el) => {
    const $el = $(el);
    const title = $el.find('a.gsc_a_at').text();
    const authors = $el.find('.gsc_a_at + .gs_gray').text();
    const venue = $el.find('.gs_gray').eq(1).text();
    const citedBy = parseInt($el.find('a.gsc_a_ac').text()) || 0;
    const year = $el.find('.gsc_a_h.gsc_a_hc').text();
    const scholarUrl = 'https://scholar.google.com' + $el.find('a.gsc_a_at').attr('href');

    let abstract = 'No abstract available for this publication.';
    let directUrl = '';

    try {
      const detailResponse = await fetchWithRetry(scholarUrl);
      const detailHtml = await detailResponse.text();
      const $detail = cheerio.load(detailHtml);

      let abstractText = '';
      abstractText = $detail('#gsc_oci_descr.gsc_oci_value').text().trim();
      if (!abstractText) {
        abstractText = $detail('.gsh_small .gsh_csp').text().trim();
      }
      if (!abstractText) {
        const beschreibungDiv = $detail('.gsc_vcd_field:contains("Beschreibung")');
        if (beschreibungDiv.length > 0) {
          abstractText = beschreibungDiv.next('.gsc_vcd_value').text().trim();
        }
      }
      if (abstractText) {
          abstract = abstractText;
      }

      let link = '';
      link = $detail('a.gsc_oci_title_link').attr('href') || '';
      if (!link) {
        link = $detail('.gsc_oci_title_ggi a').attr('href') || '';
      }
      if (!link) {
        link = $detail('#gsc_vcd_title_link').attr('href') || '';
      }
      if (!link) {
        const journalDiv = $detail('.gsc_vcd_field:contains("Journal")');
        if (journalDiv.length > 0) {
          link = journalDiv.next('.gsc_vcd_value').find('a').attr('href') || '';
        }
      }
      if(link) {
          directUrl = link;
      }

    } catch (e) {
      console.error(`Failed to fetch or parse details for "${title}":`, e);
    }

    return {
      title,
      authors,
      venue,
      citedBy,
      year,
      publicationUrl: scholarUrl,
      directUrl: directUrl,
      abstract,
    };
  }).get();

  const publications = await Promise.all(publicationPromises);
  
  const data = { stats, publications };
  
  // Save the fresh data to the cache file
  try {
    await fs.writeFile(cachePath, JSON.stringify({ timestamp: Date.now(), data }));
  } catch (err) {
    console.error('Failed to write cache file:', err);
  }

  return data;
}

export async function GET() {
  try {
    // Try to read from cache first
    const stats = await fs.stat(cachePath).catch(() => null);
    
    if (stats) {
      const age = (Date.now() - stats.mtimeMs) / 1000;
      if (age < CACHE_DURATION) {
        const cachedData = JSON.parse(await fs.readFile(cachePath, 'utf-8'));
        return NextResponse.json(cachedData.data);
      }
    }

    // If cache is old or doesn't exist, fetch fresh data
    const freshData = await getFreshScholarData();
    return NextResponse.json(freshData);

  } catch (error) {
    console.error('Failed to scrape or cache Google Scholar profile:', error);
    // As a fallback, try to return stale cache if fetching fails
    try {
      const cachedData = JSON.parse(await fs.readFile(cachePath, 'utf-8'));
      if (cachedData && cachedData.data) {
        console.warn('Serving stale cache due to fetch error.');
        return NextResponse.json(cachedData.data);
      }
    } catch (cacheError) {
      console.error('Failed to read fallback cache:', cacheError);
    }
    
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
