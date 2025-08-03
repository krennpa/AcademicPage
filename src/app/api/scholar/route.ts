import { NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

export async function GET() {
  try {
    const response = await fetch('https://scholar.google.com/citations?hl=de&user=1NgPLREAAAAJ', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      next: { revalidate: 3600 } // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch Google Scholar profile')
    }

    const html = await response.text()
    const $ = cheerio.load(html)

    const stats = {
      citations: parseInt($('td.gsc_rsb_std').eq(0).text()) || 0,
      hIndex: parseInt($('td.gsc_rsb_std').eq(2).text()) || 0,
      i10Index: parseInt($('td.gsc_rsb_std').eq(4).text()) || 0,
    }

    const publications = $('.gsc_a_tr').map((_, el) => {
      const $el = $(el)
      return {
        title: $el.find('a.gsc_a_at').text(),
        authors: $el.find('.gsc_a_at + .gs_gray').text(),
        venue: $el.find('.gs_gray').eq(1).text(),
        citedBy: parseInt($el.find('.gsc_a_ac').text()) || 0,
        year: $el.find('.gsc_a_h.gsc_a_hc').text(),
      }
    }).get()

    return NextResponse.json({ stats, publications })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
