import { NextApiRequest, NextApiResponse } from 'next'
import { host } from '../lib/config'

export default function Robots() {}

export const getServerSideProps = async ({ res }) => {
  // cache robots.txt for up to 60 seconds
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, max-age=60, stale-while-revalidate=60'
  )
  res.setHeader('Content-Type', 'text/plain')
  res.write(`User-agent: *
Sitemap: ${host}/sitemap.xml
`)
  res.end()
  return {
    props: {}
  }
}
