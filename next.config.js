const nextTranslate = require('next-translate-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'false',
});

/** @type {{defaultLocale: string, output: {path: string}, images: {path: string, formats: (string)[], loader: string}, assetPrefix: string, basePath: string, reactStrictMode: boolean}} */
const config = {
  images: {
    loader: 'akamai',
    path: '',
    formats: ['image/avif', 'image/webp'],
  },
  assetPrefix: './',
  reactStrictMode: true,
  defaultLocale: 'en',
};
module.exports = nextTranslate(withBundleAnalyzer(config));
