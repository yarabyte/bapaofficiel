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
    <section className="heritage-section relative overflow-hidden">
      <SectionDivider fill="cream" position="top" className="relative z-10" />

      <Image
        src="/images/royaume-heritage-bg.png"
        alt=""
        fill
        className="pointer-events-none scale-105 object-cover object-center select-none"
        sizes="100vw"
        aria-hidden
      />
      {/* Voile équilibré : paysage lisible + texte blanc confortable */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_70%_20%,rgba(28,18,8,0.45),transparent_50%),linear-gradient(180deg,rgba(21,14,8,0.52)_0%,rgba(61,34,16,0.38)_42%,rgba(18,11,6,0.78)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-[7.25rem]">
        <header className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/45 bg-brand-dark/40 px-5 py-2.5 text-[10px] font-bold tracking-[0.24em] text-gold-light uppercase">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_10px_rgba(192,120,48,0.6)]" aria-hidden />
            Héritage royal
          </p>
          <h2
            className="mb-4 text-4xl leading-[1.06] font-bold text-white sm:text-5xl md:text-6xl lg:text-[3.35rem]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Le Royaume{' '}
            <span className="mt-1 block text-gold-light italic font-medium sm:mt-0 sm:inline">
              de Bapa
            </span>
          </h2>
          <div
            className="mx-auto mb-6 h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent opacity-90"
            aria-hidden
          />
          <p
            className="mx-auto max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Une chefferie millénaire aux racines profondes, gardienne d&apos;un patrimoine culturel vivant.
          </p>
        </header>

        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Carte Souverain */}
          <div className="lg:col-span-5">
            <Link
              href="/royaume/mot-du-roi"
              className="heritage-king-card group relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/20 transition-all duration-500 card-lift hover:ring-gold/45 sm:min-h-[440px] sm:rounded-[2rem]"
            >
              <Image
                src="/images/roi-trone.jpg"
                alt="Sa Majesté SIMEU David II, Roi des BAPA"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/55 to-brand-dark/10 opacity-95" />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />

              <div className="absolute top-5 left-5 sm:top-6 sm:left-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/55 bg-brand-dark/90 text-xl shadow-lg sm:h-14 sm:w-14 sm:text-2xl">
                  👑
                </div>
              </div>

              <div className="relative p-6 sm:p-8 lg:p-9">
                <div className="mb-5 max-w-sm border-l-2 border-gold/70 pl-4">
                  <p className="mb-1 text-[10px] font-bold tracking-[0.2em] text-gold uppercase">Sa Majesté</p>
                  <p
                    className="text-2xl leading-tight font-bold text-white sm:text-3xl lg:text-[2rem]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    SIMEU David II
                  </p>
                  <p
                    className="mt-0.5 text-lg text-gold-light italic sm:text-xl"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    le Roi des BAPA
                  </p>
                </div>
                <p className="mb-6 max-w-[280px] text-sm leading-relaxed text-white/72">
                  Gardien des traditions ancestrales et de l&apos;unité du peuple.
                </p>
                <span className="inline-flex items-center gap-3 text-sm font-semibold text-gold-light transition-all group-hover:gap-4">
                  Lire le message royal
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-gold/20 text-base transition-colors group-hover:bg-gold group-hover:text-brand-dark">
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
                className="heritage-pillar group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-white/35 bg-cream/97 p-5 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.45)] transition-all duration-300 card-lift hover:border-gold/50 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5)] sm:rounded-[1.35rem] sm:p-6"
              >
                <span
                  className="pointer-events-none absolute top-5 right-5 text-5xl leading-none font-bold text-brand/[0.07] select-none sm:text-[3rem]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                  aria-hidden
                >
                  {p.num}
                </span>

                <div className="absolute top-0 left-6 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent opacity-70 transition-opacity group-hover:opacity-100 group-hover:via-gold" />

                <div className="relative flex flex-1 flex-col gap-4 pl-4 sm:pl-5">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-dark/25 bg-white text-xl shadow-sm ring-1 ring-stone-200/80 transition-transform duration-300 group-hover:scale-105">
                      {p.icon}
                    </div>
                  </div>
                  <div className="min-w-0 pr-10">
                    <h3
                      className="mb-2 text-[1.05rem] leading-snug font-bold text-brand transition-colors group-hover:text-brand-light sm:text-lg"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-600">{p.desc}</p>
                  </div>
                  <span className="mt-auto inline-flex w-fit items-center gap-2 border-t border-stone-200/80 pt-3 text-[11px] font-bold tracking-[0.12em] text-gold-dark uppercase transition-colors group-hover:text-gold">
                    Explorer
                    <span aria-hidden className="text-gold-dark transition-transform group-hover:translate-x-0.5 group-hover:text-gold">
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
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-brand-dark shadow-lg shadow-black/30 transition hover:bg-gold-light hover:shadow-xl"
          >
            Découvrir le royaume
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/royaume/culture"
            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition hover:border-gold-light/80 hover:bg-white/10 hover:text-white"
          >
            Culture & traditions
          </Link>
        </div>
      </div>

      <SectionDivider fill="cream" position="bottom" className="relative z-10" />
    </section>
  );
}
