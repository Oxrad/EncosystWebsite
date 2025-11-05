import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n';

export default createMiddleware({
  // Liste des langues supportées
  locales,
  
  // Langue par défaut
  defaultLocale,
  
  // Toujours afficher la langue dans l'URL
  localePrefix: 'always'
});

export const config = {
  // Matcher pour toutes les routes sauf les fichiers statiques
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};