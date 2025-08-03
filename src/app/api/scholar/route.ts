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
    } catch (error) {
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
        const detailResponse = await fetchWithRetry(scholarUrl);
        const detailHtml = await detailResponse.text();
        const $detail = cheerio.load(detailHtml);

        // --- Final, Multi-Step Abstract Extraction Logic ---
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

        // --- Final, Multi-Step Link Extraction Logic ---
        let link = '';
        // Priority 1: The class you just provided
        link = $detail('a.gsc_oci_title_link').attr('href') || '';
        
        // Priority 2: The PDF link container
        if (!link) {
          link = $detail('.gsc_oci_title_ggi a').attr('href') || '';
        }
        
        // Priority 3: The main title link ID
        if (!link) {
          link = $detail('#gsc_vcd_title_link').attr('href') || '';
        }
        
        // Priority 4: The Journal field link
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

    return NextResponse.json({ stats, publications });

  } catch (error) {
    console.error('Failed to scrape Google Scholar profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
