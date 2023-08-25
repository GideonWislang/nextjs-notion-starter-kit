// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://substackapi.com/docs',
        permanent: true
      },
      {
        source: '/:path*',
        destination: 'https://substackapi.com/docs/:path*',
        permanent: true
      }
    ]
  },
  future: {
    webpack5: true
  }
})
