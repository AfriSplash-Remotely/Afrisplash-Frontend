/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  // here goes your Next.js configuration
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
  }
};

const nextConfig = withPWA({
  dest: 'public',
  disable: !isProduction,
})(
  config
);


module.exports = nextConfig
