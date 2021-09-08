import { NextApiRequest, NextApiResponse } from 'next'

import { SiteMap } from '../lib/types'
import { host } from '../lib/config'
import { getSiteMaps } from '../lib/get-site-maps'

export default function Sitemap() {}

export const getServerSideProps = async ({ res }) => {
  const siteMaps = await getSiteMaps()
  // cache sitemap for up to one hour
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, max-age=3600, stale-while-revalidate=3600'
  )
  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(siteMaps[0]))
  res.end()
  return {
    props: {}
  }
}

const createSitemap = (
  siteMap: SiteMap
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${host}</loc>
      </url>

      <url>
        <loc>${host}/</loc>
      </url>

      ${Object.keys(siteMap.canonicalPageMap)
        .filter((canonicalPagePath) => {
          try {
            console.log(
              siteMap.site.rootNotionPageId +
                ':\n' +
                siteMap.canonicalPageMap[canonicalPagePath] +
                ':\n' +
                siteMap.canonicalPageMap +
                ':\n' +
                canonicalPagePath
            )
            return (
              siteMap.site.rootNotionPageId !==
              siteMap.canonicalPageMap[canonicalPagePath]?.replaceAll('-', '')
            )
          } catch (error) {
            return true
          }
        })
        .map((canonicalPagePath) =>
          `
            <url>
              <loc>${host}/${canonicalPagePath}</loc>
            </url>
          `.trim()
        )
        .join('')}
    </urlset>
    `
