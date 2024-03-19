const withBundleAnalyzer = require('@next/bundle-analyzer');
const nextTranslate = require('next-translate-plugin');

/** @type {import('next').NextConfig} */
//
// const isGithubActions = process.env.GITHUB_ACTIONS || false;
//
// let assetPrefix = '';
// let basePath = '/';
//
// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
//
//   assetPrefix = `/${repo}/`;
//   basePath = `/${repo}`;
// }
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

module.exports = nextTranslate(withBundleAnalyzer(config));
