import './globals.css';  // Ajoutez cette ligne en premier
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// ... reste du code
export const metadata = {
  title: 'ENCOSYST - Control Systems for Hydroelectric Power Plants',
  description: 'Specialist in control and command systems for hydroelectric power plants since 2011.',
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  // Utiliser getMessages() de next-intl
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
        `}} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}