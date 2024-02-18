const nextTranslate = require('next-translate-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  defaultLocale: 'en',
  basePath: '/roso',
};

module.exports = nextTranslate(withBundleAnalyzer(config));
