'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { formatPriceFcfa, restaurantMenuCategories } from '@/lib/restaurant-menu';
import { saveursDuPalais } from '@/lib/saveurs-du-palais';

function CarteContent() {
  const searchParams = useSearchParams();
  const shouldPrint = searchParams.get('print') === '1';

  useEffect(() => {
    if (shouldPrint) {
      const t = window.setTimeout(() => window.print(), 400);
      return () => window.clearTimeout(t);
    }
  }, [shouldPrint]);

  return (
    <div className="min-h-screen bg-white px-6 py-10 text-stone-800 print:px-8 print:py-6">
      <header className="mb-8 border-b border-stone-200 pb-6 text-center print:mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">{saveursDuPalais.tagline}</p>
        <h1 className="font-heading mt-2 text-3xl font-bold text-brand">{saveursDuPalais.title}</h1>
        <p className="mt-2 text-sm text-stone-500">Carte des mets — Royaume de Bapa</p>
      </header>

      <div className="mx-auto max-w-2xl space-y-10">
        {restaurantMenuCategories.map((category) => (
          <section key={category.id}>
            <h2 className="font-heading border-b border-gold-dark/30 pb-2 text-xl font-bold text-brand">
              {category.title}
            </h2>
            {category.subtitle && <p className="mt-1 text-sm text-stone-500">{category.subtitle}</p>}
            <ul className="mt-4 space-y-4">
              {category.items.map((item) => (
                <li key={item.id} className="flex items-start justify-between gap-4 border-b border-stone-100 pb-3 last:border-0">
                  <div className="min-w-0">
                    <p className="font-semibold text-brand">{item.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-stone-600">{item.description}</p>
                    {item.tags && item.tags.length > 0 && (
                      <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wide text-gold-dark">
                        {item.tags.join(' · ')}
                      </p>
                    )}
                  </div>
                  <p className="shrink-0 text-sm font-bold text-gold-dark">{formatPriceFcfa(item.priceFcfa)}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <footer className="mx-auto mt-12 max-w-2xl border-t border-stone-200 pt-6 text-center text-xs text-stone-500 print:mt-8">
        <p>{saveursDuPalais.practical.hours}</p>
        <p className="mt-2">Tarifs indicatifs — carte à valider par l&apos;équipe du restaurant.</p>
      </footer>
    </div>
  );
}

export default function RestaurantCartePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CarteContent />
    </Suspense>
  );
}
