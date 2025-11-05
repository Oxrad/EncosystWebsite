import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Gardez vos configurations existantes
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  // ... autres configs
};

export default withNextIntlConfig(nextConfig);