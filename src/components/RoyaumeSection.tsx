import Image from 'next/image';
import Link from 'next/link';
import SectionDivider from '@/components/SectionDivider';

const pillars = [
  {
    num: '01',
    icon: '📜',
    title: 'Histoire & Dynasties',
    desc: 'Les origines royales de Bapa et les récits de ses souverains à travers les âges.',
    href: '/royaume/histoire',
  },
  {
    num: '02',
    icon: '🥁',
    title: 'Culture & Traditions',
    desc: "Danses Nkeng, masques sacrés et rites d'initiation de l'ethnie Bamiléké.",
    href: '/royaume/culture',
  },
  {
    num: '03',
    icon: '👑',
    title: 'Mot du Roi',
    desc: 'Le message et la vision du Fon de Bapa pour son peuple et sa terre.',
    href: '/royaume/mot-du-roi',
  },
  {
    num: '04',
    icon: '🏛️',
    title: 'La Chefferie',
    desc: "Organisation et fonctionnement de l'administration traditionnelle royale.",
    href: '/royaume/chefferie',
  },
];

export default function RoyaumeSection() {
  return (
    <section className="heritage-section relative isolate overflow-hidden">
      <SectionDivider fill="cream" position="top" className="relative z-10" />

      <Image
        src="/images/royaume-heritage-bg.png"
        alt=""
        fill
        className="pointer-events-none scale-[1.07] object-cover object-[center_42%] select-none saturate-[1.06]"
        sizes="100vw"
        aria-hidden
      />

      {/* Grade chaude — harmonise la photo avec la palette brand */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(89,52,20,0.26)_0%,transparent_42%,rgba(61,34,16,0.2)_92%)] mix-blend-soft-light"
        aria-hidden
      />

      {/* Halo doré en tête de section */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_52%_at_50%_-8%,rgba(212,148,62,0.2),transparent_58%)]"
        aria-hidden
      />

      {/* Voile principal + direction lumineuse */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_86%_74%_at_58%_24%,rgba(22,13,7,0.55),transparent_56%),linear-gradient(168deg,rgba(16,10,6,0.66)_0%,rgba(72,42,22,0.22)_38%,rgba(10,6,4,0.9)_100%)]"
        aria-hidden
      />

      {/* Vignette pour focaliser le centre */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_102%_96%_at_50%_48%,transparent_38%,rgba(0,0,0,0.42)_100%)]"
        aria-hidden
      />

      {/* Lisibilité bas de section + léger voile haut */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.62] via-transparent to-black/[0.26]"
        aria-hidden
      />

      {/* Texture géométrique + grain léger */}
      <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.048]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-[7.25rem]">
        <header className="mx-auto mb-16 max-w-3xl text-center md:mb-[5.25rem]">
          <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold-light/35 bg-brand-dark/55 px-5 py-2.5 text-[10px] font-bold tracking-[0.24em] text-gold-light uppercase shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_12px_rgba(212,148,62,0.75)]" aria-hidden />
            Héritage royal
          </p>
          <h2
            className="font-heading mb-5 text-4xl leading-[1.06] font-bold tracking-tight text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.42)] sm:text-5xl md:text-6xl lg:text-[3.35rem]"
            
          >
            Le Royaume{' '}
            <span className="mt-1 block bg-gradient-to-r from-gold-light via-[#e8b060] to-gold-light bg-clip-text italic font-medium text-transparent sm:mt-0 sm:inline">
              de Bapa
            </span>
          </h2>
          <div className="mx-auto mb-7 flex items-center justify-center gap-3 opacity-95" aria-hidden>
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold/85 sm:w-16" />
            <span className="size-2 rotate-45 rounded-[2px] bg-gold-light shadow-[0_0_14px_rgba(212,148,62,0.65)] ring-2 ring-gold-dark/40" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold/85 sm:w-16" />
          </div>
          <p
            className="font-heading mx-auto max-w-2xl text-base leading-relaxed text-white/[0.92] sm:text-[1.0625rem]"
            
          >
            Une chefferie millénaire aux racines profondes, gardienne d&apos;un patrimoine culturel vivant.
          </p>
        </header>

        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Carte Souverain */}
          <div className="lg:col-span-5">
            <Link
              href="/royaume/mot-du-roi"
              className="heritage-king-card group relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-[1.5rem] shadow-[0_28px_72px_-16px_rgba(0,0,0,0.62)] ring-2 ring-white/[0.14] transition-all duration-500 card-lift hover:shadow-[0_32px_80px_-14px_rgba(212,148,62,0.22)] hover:ring-gold-light/40 sm:min-h-[440px] sm:rounded-[2rem]"
            >
              <Image
                src="/images/roi-trone.jpg"
                alt="Sa Majesté SIMEU David II, Roi des BAPA"
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/65 to-brand-dark/15 opacity-[0.97]" />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_42%,transparent_58%,rgba(0,0,0,0.12)_100%)]" />
              <div className="pointer-events-none absolute inset-[1px] rounded-[inherit] ring-1 ring-inset ring-white/15" />

              <div className="absolute top-5 left-5 sm:top-6 sm:left-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-light/45 bg-brand-dark/85 text-xl shadow-[0_10px_28px_-6px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:h-14 sm:w-14 sm:text-2xl">
                  👑
                </div>
              </div>

              <div className="relative p-6 sm:p-8 lg:p-9">
                <div className="mb-5 max-w-sm border-l-[3px] border-gold-light/85 bg-brand-dark/25 py-2 pl-4 backdrop-blur-[2px]">
                  <p className="mb-1 text-[10px] font-bold tracking-[0.2em] text-gold uppercase">Sa Majesté</p>
                  <p
                    className="font-heading text-2xl leading-tight font-bold text-white sm:text-3xl lg:text-[2rem]"
                    
                  >
                    SIMEU David II
                  </p>
                  <p
                    className="font-heading mt-0.5 text-lg text-gold-light italic sm:text-xl"
                    
                  >
                    le Roi des BAPA
                  </p>
                </div>
                <p className="mb-6 max-w-[280px] text-sm leading-relaxed text-white/78">
                  Gardien des traditions ancestrales et de l&apos;unité du peuple.
                </p>
                <span className="inline-flex items-center gap-3 text-sm font-semibold text-gold-light transition-all group-hover:gap-4">
                  Lire le message royal
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-light/55 bg-gold/25 text-base shadow-inner shadow-black/20 transition-colors group-hover:bg-gold group-hover:text-brand-dark">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </div>

          {/* Grille piliers */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7">
            {pillars.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="heritage-pillar group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-white/45 bg-gradient-to-br from-white/[0.96] via-cream/[0.94] to-cream-dark/[0.92] p-5 shadow-[0_14px_44px_-18px_rgba(45,26,14,0.55)] backdrop-blur-md transition-all duration-300 card-lift hover:border-gold-light/45 hover:shadow-[0_22px_52px_-14px_rgba(212,148,62,0.28)] sm:rounded-[1.35rem] sm:p-6"
              >
                <span
                  className="font-heading pointer-events-none absolute top-4 right-4 select-none text-5xl font-bold leading-none text-brand/[0.065] sm:right-5 sm:text-[3rem]"
                  
                  aria-hidden
                >
                  {p.num}
                </span>

                <span
                  className="pointer-events-none absolute top-8 bottom-8 left-[18px] w-[4px] rounded-full bg-gradient-to-b from-gold-light via-gold to-gold-dark opacity-95 shadow-[0_0_16px_rgba(212,148,62,0.35)] transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(212,148,62,0.55)] sm:left-[22px]"
                  aria-hidden
                />

                <div className="relative flex flex-1 flex-col gap-4 pl-8 sm:pl-10">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-dark/20 bg-gradient-to-br from-white to-cream-dark/90 text-xl shadow-[0_6px_16px_-4px_rgba(89,52,20,0.2)] ring-1 ring-white transition-all duration-300 group-hover:border-gold/35 group-hover:shadow-[0_10px_22px_-6px_rgba(212,148,62,0.35)]">
                      {p.icon}
                    </div>
                  </div>
                  <div className="min-w-0 pr-10">
                    <h3
                      className="font-heading mb-2 text-[1.05rem] leading-snug font-bold text-brand transition-colors group-hover:text-brand-light sm:text-lg"
                      
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-600">{p.desc}</p>
                  </div>
                  <span className="mt-auto inline-flex w-fit items-center gap-2 border-t border-stone-300/70 pt-3 text-[11px] font-bold tracking-[0.12em] text-gold-dark uppercase transition-colors group-hover:text-gold">
                    Explorer
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:mt-20 sm:flex-row sm:gap-5">
          <Link
            href="/royaume/histoire"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-dark px-8 py-3.5 text-sm font-bold text-brand-dark shadow-[0_14px_36px_-8px_rgba(192,120,48,0.55)] ring-1 ring-white/15 transition hover:from-gold-light hover:to-gold hover:shadow-[0_18px_44px_-8px_rgba(212,148,62,0.45)]"
          >
            Découvrir le royaume
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/royaume/culture"
            className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/[0.06] px-8 py-3.5 text-sm font-semibold text-white shadow-inner shadow-black/20 backdrop-blur-sm transition hover:border-gold-light/85 hover:bg-white/12 hover:text-white"
          >
            Culture & traditions
          </Link>
        </div>
      </div>

      <SectionDivider fill="cream" position="bottom" className="relative z-10" />
    </section>
  );
}
