import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import VisitezBapaContent from '@/components/VisitezBapaContent';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import VisitezBapaIcon from '@/components/visitez-bapa/VisitezBapaIcon';
import { visitezBapaNavSections } from '@/lib/visitez-bapa';

export const metadata: Metadata = {
  title: 'Visitez Bapa | Tourisme | Bapa',
  description:
    'Carte touristique du Royaume Bapa : localisation, quartiers, sites patrimoniaux, nature et équipements des Hauts-Plateaux.',
};

export default function VisitezBapaPage() {
  return (
    <PageShell>
      <header className="relative isolate overflow-hidden border-b border-stone-200/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-slide-palais-bapa.png"
            alt=""
            fill
            className="object-cover object-[center_35%] opacity-45"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-dark/88 via-forest/75 to-brand/80"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.06]" aria-hidden />

        <div className="relative mx-auto max-w-4xl px-4 pb-14 page-top page-top-md text-center text-white md:pb-18">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light/95">
            Tourisme
          </p>
          <h1 className="font-heading mb-4 text-4xl font-bold tracking-tight drop-shadow-sm md:text-5xl">
            Visitez Bapa
          </h1>
          <p className="mx-auto max-w-2xl text-[1.05rem] leading-relaxed text-white/88">
            Carte touristique du Royaume Bapa — découvrez les quartiers, le patrimoine royal, les sites
            naturels et les équipements du territoire.
          </p>
          <nav
            aria-label="Sections de la page"
            className="mt-10 flex flex-wrap justify-center gap-2 border-t border-white/15 pt-8"
          >
            {visitezBapaNavSections.map(({ id, label, icon }) => (
              <a
                key={id}
                href={`#visitez-${id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-gold-light/50 hover:bg-white/15"
              >
                <VisitezBapaIcon id={icon} className="size-3.5 text-gold-light" />
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <VisitezBapaContent />

        <PageFooterNav
          links={[
            { href: '/developpement/tourisme', label: '← Introduction et Enjeux' },
            { href: '/tourisme/musee', label: 'Musée Case Patrimoniale' },
            { href: '/developpement/tourisme/restaurant', label: 'Restaurant Patrimonial' },
          ]}
        />
      </div>
    </PageShell>
  );
}
