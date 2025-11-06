import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr', 'en', 'es'],
  defaultLocale: 'fr'
  // Pas de localePrefix du tout
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};