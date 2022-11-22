/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.my-file$/i,
      loader: "postcss-loader",
    });
    return config
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
