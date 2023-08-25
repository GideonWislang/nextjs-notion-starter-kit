// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },

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
}
