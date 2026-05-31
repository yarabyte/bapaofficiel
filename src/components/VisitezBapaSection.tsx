import Image from 'next/image';
import Link from 'next/link';
import SectionDivider from '@/components/SectionDivider';
import { CARTE_TOURISTIQUE_IMAGE, VISITEZ_BAPA_PATH } from '@/lib/visitez-bapa';

const VISITEZ_BAPA_HREF = VISITEZ_BAPA_PATH;

/** Aperçu accueil — contenu complet sur la page Tourisme « Visitez Bapa ». */
export default function VisitezBapaSection() {
  return (
    <section
      id="visitez-bapa"
      className="visite-bapa-section relative overflow-hidden bg-gradient-to-b from-cream via-white to-cream-dark/25 scroll-mt-[calc(2.5rem+7rem)]"
    >
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
        <Image
          src="/images/hero-slide-architecture-patrimoine.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.07]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-white/75 to-cream/88" />
        <div className="absolute inset-0 pattern-geo opacity-[0.04]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mb-10 flex flex-col gap-8 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className="max-w-2xl">
            <span className="section-label mx-auto mb-4 md:mx-0">Tourisme</span>
            <h2 className="font-heading mb-4 text-4xl font-bold leading-[1.1] text-brand md:text-5xl">
              Visitez Bapa
            </h2>
            <div className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent md:mx-0 md:from-gold md:via-gold-dark md:to-transparent" />
            <p className="mx-auto max-w-lg text-base leading-relaxed text-stone-600 md:mx-0 md:text-[1.0625rem]">
              Explorez la carte touristique du Royaume : six quartiers, Palais Royal, sites naturels et
              équipements — Hauts-Plateaux, région de l&apos;Ouest.
            </p>
          </div>
          <Link
            href={VISITEZ_BAPA_HREF}
            className="inline-flex shrink-0 items-center justify-center gap-2 self-center rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand-dark md:self-auto"
          >
            Carte & guide complet
            <span aria-hidden>→</span>
          </Link>
        </div>

        <Link
          href={VISITEZ_BAPA_HREF}
          className="group relative block overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_20px_50px_-24px_rgba(61,34,16,0.3)] ring-1 ring-stone-200/60 transition-shadow hover:shadow-[0_24px_56px_-20px_rgba(61,34,16,0.4)]"
        >
          <div className="relative aspect-[16/10] w-full max-h-[28rem] bg-stone-100 sm:aspect-[2/1]">
            <Image
              src={CARTE_TOURISTIQUE_IMAGE}
              alt="Aperçu de la carte touristique du Royaume Bapa"
              fill
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.01]"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200/80 bg-cream/70 px-5 py-4">
            <p className="text-sm font-semibold text-brand">Carte Touristique du Royaume Bapa</p>
            <span className="text-xs font-bold uppercase tracking-wide text-gold-dark group-hover:text-brand">
              Ouvrir la page Visitez Bapa →
            </span>
          </div>
        </Link>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Musée', href: '/tourisme/musee' },
            { label: 'Restaurant', href: '/tourisme/restaurant' },
            { label: 'Sites touristiques', href: '/tourisme/sites' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-stone-200/80 bg-white/90 px-4 py-3 text-center text-sm font-semibold text-brand transition-colors hover:border-gold-dark/35 hover:bg-cream"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <SectionDivider fill="cream" position="bottom" className="relative z-10" />
    </section>
  );
}
