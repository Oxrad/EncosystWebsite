import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./i18n.js');

const nextConfig = {
  // Gardez vos configurations existantes
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  // ... autres configs
};

export default withNextIntlConfig(nextConfig);
