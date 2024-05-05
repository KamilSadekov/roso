// const withBundleAnalyzer = require('@next/bundle-analyzer');
// const nextTranslate = require('next-translate-plugin');
// const i18nConfig = require('./i18n.json');

const config = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:lang(en|ru|ar)/:path*',
  //       destination: '/:path*',
  //       locale: false,
  //     },
  //   ];
  // },
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  // experimental: {
  //   webpackBuildWorker: true,
  // },
  reactStrictMode: true,
  // i18n: { ...i18nConfig, localeDetection: false },
};

module.exports = config;
