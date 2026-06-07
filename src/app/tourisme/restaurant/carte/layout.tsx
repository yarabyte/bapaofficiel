import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carte du menu | Les Saveurs du Palais | Bapa',
  description: 'Carte des mets traditionnels — Les Saveurs du Palais, restaurant du Royaume de Bapa.',
};

export default function RestaurantCarteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
