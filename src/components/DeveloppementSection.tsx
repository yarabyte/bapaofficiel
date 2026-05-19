import Image from 'next/image';
import Link from 'next/link';

const CORNER_MOTIFS = ['/images/dev-card-motif-a.png', '/images/dev-card-motif-b.png'] as const;

const HOME_DEVELOPPEMENT_COUNT = 3;

export const developpementInitiatives = [
  {
    name: 'ADEVIPA',
    tagline: 'Santé · Éducation · Projets',
    desc: 'Santé communautaire, infrastructure scolaire et grands projets structurants pour le village.',
    href: '/developpement/adevipa',
    image: '/images/mot-du-roi-header-palais.png',
    accent: '#2A5F3A',
  },
  {
    name: 'Forum Bapa H2050',
    tagline: 'Vision · Stratégie · Futur',
    desc: "Réflexion prospective pour orienter le Bapa de demain jusqu'à l'horizon 2050.",
    href: '/developpement/forum-h2050',
    image: '/images/hero-slide-architecture-patrimoine.png',
    accent: '#593414',
  },
  {
    name: 'Grassfield Research',
    tagline: 'Eau · Électricité · Environnement',
    desc: 'Recherche et action pour les ressources vitales et la protection des Grassfields.',
    href: '/developpement/grassfield',
    image: '/images/festival-ngouook-procession.png',
    accent: '#1D4E72',
  },
  {
    name: 'Bapa Connect',
    tagline: 'Numérique · Diaspora · Réseau',
    desc: 'Relier la communauté Bapa au Cameroun et dans le monde entier.',
    href: '/developpement/bapa-connect',
    image: '/images/musee-celebration-culturelle.png',
    accent: '#7A4E2D',
  },
] as const;

function DevCard({
  init,
  cornerMotif,
}: {
  init: (typeof developpementInitiatives)[number];
  cornerMotif: string;
}) {
  return (
    <Link
      href={init.href}
      className="dev-card group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl bg-white/96
        border border-stone-200/45 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset,0_4px_24px_rgba(89,52,20,0.045)]
        transition-[transform,box-shadow,border-color] duration-[340ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]
        hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(89,52,20,0.08),0_1px_0_rgba(255,255,255,0.6)_inset]
        hover:border-stone-200/70 motion-reduce:transform-none motion-reduce:transition-none"
    >
      {/* Motif décoratif — bas droite, contain (pas de déformation ni tuile) */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-2 z-[0] h-[8.75rem] w-[9.75rem] sm:h-[11rem] sm:w-[min(52%,13rem)] max-sm:w-[8.75rem]"
        style={{
          backgroundImage: `url("${cornerMotif}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: 'contain',
          opacity: 0.14,
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-[1] aspect-[5/3] w-full shrink-0 overflow-hidden">
        <Image
          src={init.image}
          alt={init.name}
          fill
          className="object-cover transition-transform duration-[680ms] ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 1023px) 100vw, 33vw"
        />
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-transparent to-black/[0.1]"
          aria-hidden
        />
        <div
          className="absolute inset-0 mix-blend-multiply opacity-[0.14] pointer-events-none"
          style={{ backgroundColor: init.accent }}
          aria-hidden
        />
      </div>

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        <p
          className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1.5 text-stone-500"
          style={{ color: `${init.accent}d9` }}
        >
          {init.tagline}
        </p>
        <h3
          className="font-heading text-lg font-bold text-brand mb-2 leading-snug tracking-tight line-clamp-2 group-hover:text-brand-light transition-colors duration-300"
          
        >
          {init.name}
        </h3>
        <p className="text-stone-500 text-[0.9rem] sm:text-[0.9375rem] leading-[1.62] flex-1 line-clamp-3">
          {init.desc}
        </p>
        <span
          className="mt-4 pt-4 border-t border-stone-200/55 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide w-fit px-3 py-1.5 rounded-full bg-white/60 border border-stone-200/45 text-stone-600 shadow-sm shadow-stone-200/25 group-hover:border-stone-200/60 group-hover:bg-white transition-colors duration-300"
          style={{ color: init.accent }}
        >
          En savoir plus
          <span aria-hidden className="opacity-70 group-hover:translate-x-px transition-transform duration-300">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function DeveloppementSection() {
  return (
    <section className="dev-section relative bg-cream overflow-hidden">
      <Image
        src="/images/developpement-bg.png"
        alt=""
        fill
        className="object-cover object-left pointer-events-none select-none"
        sizes="100vw"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-cream/25 via-white/82 to-cream pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -right-28 top-24 h-72 w-72 rounded-full bg-gold/[0.04] blur-[100px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -left-20 bottom-36 h-64 w-64 rounded-full bg-forest/[0.035] blur-[88px] pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-[4.75rem] lg:py-[5.75rem]">
        <header className="mx-auto mb-10 flex max-w-2xl flex-col gap-6 text-center md:mx-0 md:max-w-none md:flex-row md:items-end md:justify-between md:text-left lg:mb-12">
          <div>
            <span className="section-label mb-3 inline-flex">Avenir</span>
            <h2
              className="font-heading mt-2 mb-3 text-4xl font-bold leading-[1.12] tracking-tight text-brand sm:text-[2.625rem] md:text-5xl"
              
            >
              Développement
            </h2>
            <p className="text-[0.95rem] leading-relaxed text-stone-500 sm:text-base md:ml-px md:border-l md:border-gold/30 md:pl-5">
              Trois priorités d&apos;action — la liste complète des projets est disponible sur la page dédiée.
            </p>
          </div>
          <Link
            href="/developpement"
            className="mx-auto shrink-0 rounded-full border border-brand/25 bg-white/55 px-6 py-3 text-sm font-medium text-brand transition-colors hover:border-gold-dark/55 hover:bg-white hover:text-brand-light md:mx-0"
          >
            Voir tous les projets<span className="ml-2">→</span>
          </Link>
        </header>

        <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:gap-6 md:grid-cols-3 md:items-stretch md:gap-7 lg:min-h-0">
          {developpementInitiatives.slice(0, HOME_DEVELOPPEMENT_COUNT).map((init, index) => (
            <li key={init.name} className="flex min-h-0 h-full">
              <DevCard init={init} cornerMotif={CORNER_MOTIFS[index % 2]} />
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
