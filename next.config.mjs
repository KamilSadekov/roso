import nextTranslate from 'next-translate-plugin';
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  defaultLocale: 'en',
  basePath,
  assetPrefix,
  output: {
    // Set the directory where the exported files will be generated
    // Adjust the path as per your project structure
    path: '/out',
  },
};

export default nextTranslate(withBundleAnalyzer(config));
