const withImageLoader = require('next-image-loader')

module.exports = withImageLoader({
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
})
