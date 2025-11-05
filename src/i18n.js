import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Langues supportées
export const locales = ['fr', 'en', 'es'];
export const defaultLocale = 'fr';

// Labels des langues pour le sélecteur
export const localeLabels = {
  fr: 'Français',
  en: 'English',
  es: 'Español'
};

// Drapeaux pour le sélecteur
export const localeFlags = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸'
};

// Configuration pour next-intl
export default getRequestConfig(async ({ locale }) => {
  // Valider que la locale est supportée
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});