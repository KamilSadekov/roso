const nextTranslate = require('next-translate-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  images: {
    formats: ['image/avif', 'image/webp', 'image/jpeg', 'image/svg'],
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  reactStrictMode: true,
  defaultLocale: 'en',
  basePath: '/roso',
  output: {
    // Set the directory where the exported files will be generated
    // Adjust the path as per your project structure
    path: '/public',
  },
};

module.exports = nextTranslate(withBundleAnalyzer(config));
