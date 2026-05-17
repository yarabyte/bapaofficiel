import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { developpementInitiatives } from '@/components/DeveloppementSection';

export const metadata: Metadata = {
  title: 'Projets de développement | Bapa',
  description:
    'Initiatives pour bâtir le Bapa de demain : santé, éducation, prospective, environnement, numérique et communauté.',
};

/** Projets hors hero d’accueil (liste complète avec Cremepa). */
const developpementMore = {
  name: 'Cremepa',
  tagline: 'Communauté · Solidarité',
  desc: "Projet d'appoint au service de la cohésion et du développement local.",
  href: '/developpement/cremepa',
  image: '/images/bapa-01.jpg',
  accent: '#5c4a38',
} as const;

export default function DeveloppementPage() {
  const projects = [...developpementInitiatives, developpementMore];

  return (
    <div className="min-h-screen bg-cream">
      <section className="relative border-b border-stone-200/60 bg-white/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center px-6">
          <span className="section-label mx-auto mb-4 inline-flex">Avenir</span>
          <h1
            className="mb-5 text-4xl font-bold text-brand md:text-5xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Tous les projets
          </h1>
          <p className="text-[0.95rem] leading-relaxed text-stone-500 md:text-base">
            Trois priorités présentées en page d&apos;accueil ; la liste ci-dessous regroupe tous les projets,
            avec les initiatives annexes et la poursuite du chantier commun.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl grid grid-cols-1 gap-6 px-4 py-14 md:grid-cols-2 md:gap-8 md:py-20 lg:grid-cols-3 lg:px-8 lg:gap-10">
        {projects.map((p) => (
          <article key={p.name}>
            <Link
              href={p.href}
              className="group flex h-full min-h-[18rem] flex-col overflow-hidden rounded-2xl border border-stone-200/55 bg-white/90 shadow-sm transition-[box-shadow,border-color] hover:border-stone-300/80 hover:shadow-[0_8px_32px_-8px_rgba(89,52,20,0.1)]"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 340px"
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.12]"
                  style={{ backgroundColor: p.accent }}
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p
                  className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: `${p.accent}` }}
                >
                  {p.tagline}
                </p>
                <h2
                  className="mb-3 text-xl font-bold text-brand group-hover:text-brand-light"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {p.name}
                </h2>
                <p className="flex-1 text-sm leading-relaxed text-stone-600">{p.desc}</p>
                <span
                  className="mt-4 inline-flex w-fit items-center gap-2 text-[11px] font-medium"
                  style={{ color: p.accent }}
                >
                  Voir la fiche projet <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </section>

      <div className="border-t border-stone-200/50 pb-24 text-center">
        <Link
          href="/"
          className="text-sm font-medium text-stone-500 underline-offset-4 transition-colors hover:text-brand hover:underline"
        >
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
