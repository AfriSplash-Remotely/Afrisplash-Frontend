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
  swcMinify: true,
};

const nextConfig = withPWA({
  dest: "public",
  disable: !isProduction,
})(config);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});



module.exports = nextConfig

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
