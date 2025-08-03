import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

// Helper to fetch with retry logic to improve reliability
async function fetchWithRetry(url: string, retries = 3, delay = 1500) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        next: { revalidate: 3600 } 
      });
      if (response.ok) return response;
      console.warn(`Attempt ${i + 1} for ${url} failed with status: ${response.status}`);
    } catch (error) {
      console.error(`Attempt ${i + 1} for ${url} failed with error:`, error);
      if (i === retries - 1) throw error;
      await new Promise(res => setTimeout(res, delay));
    }
  }
  throw new Error(`Failed to fetch ${url} after multiple retries`);
}

export async function GET() {
  try {
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
        console.log(`\n--- Fetching details for: ${title} ---`);
        console.log(`URL: ${scholarUrl}`);
        
        const detailResponse = await fetchWithRetry(scholarUrl);
        const detailHtml = await detailResponse.text();
        const $detail = cheerio.load(detailHtml);

        // --- DIAGNOSTIC LOG ---
        // Log the entire HTML to see what the scraper is actually getting.
        console.log('--- Full Page HTML Received ---');
        console.log(detailHtml);
        console.log('--- End of HTML ---');

        // Reverting to the simpler, original logic for the abstract
        const abstractDiv = $detail('.gsh_csp');
        if (abstractDiv.length > 0) {
            const abstractText = abstractDiv.text().trim();
            if (abstractText) {
                abstract = abstractText;
            }
        }
        
        console.log(`Extracted Abstract: ${abstract}`);

        // Logic for direct link
        const titleLink = $detail('#gsc_vcd_title_link').attr('href');
        if (titleLink) {
          directUrl = titleLink;
        }
        
        console.log(`Extracted Direct URL: ${directUrl}`);


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

    return NextResponse.json({ stats, publications });

  } catch (error) {
    console.error('Failed to scrape Google Scholar profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}