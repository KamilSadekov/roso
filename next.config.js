const withBundleAnalyzer = require('@next/bundle-analyzer');
const nextTranslate = require('next-translate-plugin');

const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  defaultLocale: 'en',
  experimental: {
    webpackBuildWorker: true,
  },
  reactStrictMode: true,
};

module.exports = nextTranslate({
  webpack: (config) => {
    return withBundleAnalyzer(config);
  },
});
