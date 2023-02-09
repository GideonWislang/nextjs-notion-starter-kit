// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  },
  redirects: [
    {
      source: '/add-your-substack-signup-form-to-your-website',
      destination: '/how-to-add-a-substack-signup-form-to-your-website',
      permanent: true
    }
  ],
  future: {
    webpack5: true
  }
})
