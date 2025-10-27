import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ENCOSYST - Spécialiste en Contrôle Commande pour Centrales Hydroélectriques',
  description: 'Conception et réalisation de systèmes de contrôle commande pour centrales hydroélectriques de petite et moyenne capacité. 14 ans d\'expérience, 12 pays, 320 MW. Solutions innovantes : automatisme, SCADA, régulations, excitation statique.',
  keywords: 'contrôle commande, centrale hydroélectrique, SCADA, automatisme, régulation vitesse, excitation statique, petit hydro, moyenne capacité',
  authors: [{ name: 'ENCOSYST' }],
  openGraph: {
    title: 'ENCOSYST - Expert en Contrôle Commande Hydroélectrique',
    description: 'Solutions innovantes pour centrales hydroélectriques. 14 ans d\'expérience internationale.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}