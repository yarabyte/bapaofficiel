import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MediathequeBrowser from '@/components/mediatheque/MediathequeBrowser';
import PageShell from '@/components/layout/PageShell';
import { mediathequeCategories } from '@/lib/mediatheque';

export const metadata: Metadata = {
  title: 'Médiathèque | Bapa Officiel',
  description:
    'Médiathèque du Royaume de Bapa : photos, documentation PDF, vidéos et enregistrements audio classés par thème.',
};

const navSections = mediathequeCategories.filter((c) => c.id !== 'all');

export default function MediathequePage() {
  return (
    <PageShell>
      <header className="relative isolate overflow-hidden border-b border-stone-200/60 bg-brand-dark">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/musee-celebration-culturelle.png"
            alt=""
            fill
            className="object-cover object-[center_30%] opacity-50"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/85 to-brand-dark"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.06]" aria-hidden />

        <div className="relative mx-auto max-w-4xl px-4 pb-14 page-top page-top-md text-center text-white md:pb-18">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light/95">
            Archives & ressources
          </p>
          <h1 className="font-heading mb-4 text-4xl font-bold tracking-tight drop-shadow-sm md:text-5xl">
            Médiathèque
          </h1>
          <p className="mx-auto max-w-2xl text-[1.05rem] leading-relaxed text-white/88">
            Regards sur le Royaume de Bapa — filtrez par type de média et par catégorie (Royaume, Festival, Tourisme,
            Culture, etc.).
          </p>
          <nav
            aria-label="Catégories de la médiathèque"
            className="mt-10 flex flex-wrap justify-center gap-2 border-t border-white/15 pt-8"
          >
            {navSections.map(({ sectionId, label }) => (
              <a
                key={sectionId}
                href={`#${sectionId}`}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-gold-light/50 hover:bg-white/15"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <p className="mx-auto mb-2 max-w-2xl text-center text-sm leading-relaxed text-stone-600 md:text-left">
          Utilisez les filtres <strong className="font-semibold text-brand">Type de média</strong> et{' '}
          <strong className="font-semibold text-brand">Catégorie</strong> pour affiner la liste. Les documents PDF et
          certaines vidéos seront téléchargeables dès publication officielle.
        </p>

        <MediathequeBrowser />

        <nav className="mt-16 flex flex-col items-center gap-4 border-t border-stone-200/70 pt-12 text-center sm:flex-row sm:justify-center sm:gap-10">
          <Link
            href="/echos"
            className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
          >
            Échos de Bapa
          </Link>
          <Link
            href="/tourisme/musee"
            className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
          >
            Musée Case Patrimoniale
          </Link>
          <Link href="/" className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline">
            Accueil
          </Link>
        </nav>
      </div>
    </PageShell>
  );
}
