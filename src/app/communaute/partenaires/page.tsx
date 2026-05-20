import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PartenairesBrowser from '@/components/partenaires/PartenairesBrowser';
import PageShell from '@/components/layout/PageShell';
import { partenaireThemes } from '@/lib/partenaires';

export const metadata: Metadata = {
  title: 'Partenaires | Les Communautés | Bapa',
  description:
    'Partenaires du Royaume de Bapa : institutions, entreprises, médias et associations au service du territoire et de la diaspora.',
};

const navSections = partenaireThemes.filter((t) => t.id !== 'all');

export default function PartenairesPage() {
  return (
    <PageShell>
      <header className="relative isolate overflow-hidden border-b border-stone-200/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-slide-palais-bapa.png"
            alt=""
            fill
            className="object-cover object-[center_40%]"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-dark/88 via-brand/80 to-forest/85"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.06]" aria-hidden />

        <div className="relative mx-auto max-w-4xl px-4 pb-14 page-top page-top-md text-center text-white md:pb-18">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light/95">Les Communautés</p>
          <h1 className="font-heading mb-4 text-4xl font-bold tracking-tight drop-shadow-sm md:text-5xl">
            Partenaires
          </h1>
          <p className="mx-auto max-w-2xl text-[1.05rem] leading-relaxed text-white/88">
            Institutions, entreprises, médias et associations qui accompagnent le Royaume de Bapa — classés par thème
            pour faciliter la lecture.
          </p>
          <nav
            aria-label="Thèmes partenaires"
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
          Cette page recense les partenaires qui soutiennent le développement, la culture et la visibilité du village
          royal. Les logos s&apos;affichent dès qu&apos;ils sont déposés dans{' '}
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs text-brand">public/images/partenaires/</code>{' '}
          (fichiers <code className="text-xs">canal2.png</code>, <code className="text-xs">unesco.png</code>, etc.).
        </p>

        <PartenairesBrowser />

        <div className="mt-16 rounded-2xl border border-gold-dark/25 bg-gradient-to-br from-cream to-cream-dark/50 p-8 text-center md:text-left">
          <h2 className="font-heading mb-2 text-xl font-bold text-brand">Devenir partenaire</h2>
          <p className="text-sm leading-relaxed text-stone-600">
            Institution, entreprise ou média&nbsp;: contactez le secrétariat pour explorer un partenariat avec le
            Royaume de Bapa (événements, patrimoine, développement local).
          </p>
          <Link
            href="/contacts"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-brand-dark"
          >
            Nous contacter
          </Link>
        </div>

        <nav className="mt-14 flex flex-col items-center gap-4 border-t border-stone-200/70 pt-12 text-center sm:flex-row sm:justify-center sm:gap-10">
          <Link href="/contacts" className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline">
            Contacts
          </Link>
          <Link
            href="/communaute/echos"
            className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
          >
            Échos de Bapa
          </Link>
          <Link href="/communaute" className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline">
            ← Les Communautés
          </Link>
        </nav>
      </div>
    </PageShell>
  );
}
