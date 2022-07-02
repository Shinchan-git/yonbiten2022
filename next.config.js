const withImageLoader = require('next-image-loader')

module.exports = withImageLoader({
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
  env: {
    NEXT_PUBLIC_IMAGE_DOMAIN: 'https://yonbiten2022.pages.dev'
  }
})
