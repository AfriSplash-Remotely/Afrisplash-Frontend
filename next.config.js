/* eslint @typescript-eslint/no-var-requires: "off" */
/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");
const { i18n } = require("./next-i18next.config");

const isProduction = process.env.NODE_ENV === "production";

const config = {
  // here goes your Next.js configuration
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
};

const nextConfig = withPWA({
  dest: "public",
  disable: !isProduction,
})(config);

module.exports = nextConfig;
