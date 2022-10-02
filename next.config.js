/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
