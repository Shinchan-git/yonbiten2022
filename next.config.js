const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const { resolve } = require('path');

const nextConfig = {
  experimental: { esmExternals: true },
  webpack: (config) => {
    config.resolve.alias['@public'] = resolve(__dirname, 'public')
    return config
  },
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    disableStaticImages: true
  }
}

const imgConfig = {
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  removeOriginalExtension: false,
  optimizeImages: true,
  mozjpeg: {
    quality: 80
  },
  optipng: {
    optimizationLevel: 3
  },
  pngquant: false,
  gifsicle: {
    interlaced: false,
    optimizationLevel: 3
  },
  svgo: {
  }
}

module.exports = withPlugins([[optimizedImages, imgConfig]], nextConfig)