import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bapa Officiel | Bienvenue au Royaume de Bapa',
  description:
    'Portail officiel du Village Royal de Bapa, niché dans les montagnes de l\'Ouest Cameroun, terre ancestrale des Bamiléké.',
  keywords: ['Bapa', 'Cameroun', 'Bamiléké', 'Royaume', 'Village', 'Tourisme', 'Culture'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-surface text-stone-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
