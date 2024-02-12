
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(config);
