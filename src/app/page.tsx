import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import DeveloppementSection from '@/components/DeveloppementSection';
import EchosSection from '@/components/EchosSection';
import RoyaumeSection from '@/components/RoyaumeSection';
import SectionDivider from '@/components/SectionDivider';


/* ════════════════════════════════════════
   INTRO — À propos du village
═══════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28 px-6 -mt-px">
      <Image
        src="/images/notre-village-bg.png"
        alt=""
        fill
        className="object-contain object-right pointer-events-none select-none"
        sizes="100vw"
        unoptimized
      />
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        {/* Texte */}
        <div className="order-2 lg:order-1">
          <span className="section-label mb-5">Notre village</span>
          <h2
            className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold text-brand mt-3 mb-6 leading-[1.1]"
            
          >
            Bapa, entre<br />ciel et granite
          </h2>
          <p className="text-stone-600 leading-[1.85] mb-9 text-[1.0625rem]">
            Bapa est un village de l&apos;Ouest-Cameroun situé dans le département des Hauts-Plateaux et rattaché à la commune de Bangou. Fondé dans les années 1600, ce groupement traditionnel est célèbre pour son riche patrimoine culturel et ses paysages vallonnés abritant des grottes et de grands rochers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/royaume/histoire"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand-dark transition-colors shadow-md shadow-brand/20"
            >
              Notre histoire →
            </Link>
            <Link
              href="/royaume/traditions"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand/30 text-brand text-sm font-semibold rounded-full hover:border-brand hover:bg-brand hover:text-white transition-all"
            >
              Nos traditions
            </Link>
          </div>
        </div>

        {/* Grille photo décalée */}
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 md:gap-4">
          <div className="space-y-3 md:space-y-4">
            <div className="relative rounded-2xl overflow-hidden h-52 md:h-60 shadow-lg">
              <Image src="/images/musee-celebration-culturelle.png" alt="Vie à Bapa" fill className="object-cover" sizes="300px" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-36 md:h-40 shadow-md">
              <Image src="/images/festival-ngouook-procession.png" alt="Paysage rocheux" fill className="object-cover" sizes="300px" />
            </div>
          </div>
          <div className="space-y-3 md:space-y-4 pt-8 md:pt-10">
            <div className="relative rounded-2xl overflow-hidden h-36 md:h-40 shadow-md">
              <Image src="/images/mot-du-roi-header-palais.png" alt="Village de Bapa" fill className="object-cover" sizes="300px" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-52 md:h-60 shadow-lg">
              <Image src="/images/hero-slide-architecture-patrimoine.png" alt="Montagne de Bapa" fill className="object-cover" sizes="300px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ════════════════════════════════════════
   ÉCONOMIE & CULTURE — Festival Pa'a Ngouook
═══════════════════════════════════════ */
function FestivalSection() {
  return (
    <section className="economie-culture-section relative overflow-hidden bg-brand-dark min-h-[min(560px,92vh)] md:min-h-[620px]">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src="/images/paa-ngouook-2028.jpg"
          alt=""
          fill
          quality={92}
          className="pointer-events-none scale-[1.06] select-none object-cover object-[center_42%] festival-bg-crossfade-a"
          sizes="100vw"
        />
        <Image
          src="/images/festival-ngouook-procession.png"
          alt=""
          fill
          quality={92}
          className="pointer-events-none scale-[1.05] select-none object-cover object-[center_38%] festival-bg-crossfade-b"
          sizes="100vw"
        />

        {/* Texte lisible à gauche, photo plus préservée à droite */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(45,26,14,0.94)_0%,rgba(45,26,14,0.82)_43%,rgba(89,52,20,0.42)_73%,transparent_99%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_92%_32%,transparent_40%,rgba(12,9,8,0.5)_92%)]" />
        <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.065]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent md:h-44" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(560px,92vh)] max-w-6xl flex-col justify-center px-6 py-20 md:min-h-[620px] md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-light/60 bg-brand-dark/55 px-4 py-1.5 text-[10px] font-bold tracking-[0.21em] text-gold-light uppercase shadow-sm">
              Économie & Culture
            </span>
            <h2
              className="font-heading mb-6 mt-3 text-4xl leading-[1.08] font-bold text-white md:text-5xl xl:text-[3.25rem]"
              
            >
              Festival
              <br />
              Pa&apos;a Ngouook
            </h2>
            <div className="mb-6 h-px w-16 bg-gradient-to-r from-gold to-transparent opacity-90" aria-hidden />
            <p className="mb-10 max-w-md text-base leading-relaxed text-white/74 md:text-[1.0625rem]">
              Le grand festival biennal de Bapa — explosions de danses traditionnelles, rituels
              sacrés, gastronomie et rassemblement communautaire. L&apos;identité Bamiléké dans sa
              ferveur collective.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/economie/festival/2023"
                className="inline-flex justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand shadow-lg shadow-black/25 transition-colors hover:bg-cream hover:shadow-xl"
              >
                Édition 2023
              </Link>
              <Link
                href="/economie/festival/2028"
                className="inline-flex justify-center rounded-full border-2 border-gold-dark/60 bg-brand-dark/30 px-7 py-3.5 text-sm font-semibold text-gold-light transition-colors hover:border-gold-light hover:bg-gold-dark/35"
              >
                Pa&apos;a Ngouook 2028 <span aria-hidden className="ml-1">→</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:gap-3.5">
            {[
              { year: '2018', status: 'Réalisé', featured: false },
              { year: '2023', status: 'Réalisé', featured: false },
              { year: '2028', status: 'À venir', featured: true },
            ].map((ed) => (
              <Link
                key={ed.year}
                href={`/economie/festival/${ed.year}`}
                className={`group flex items-center gap-5 rounded-2xl border px-6 py-4 transition-colors lg:rounded-[1.2rem] lg:py-[1.125rem] ${
                  ed.featured
                    ? 'border-gold-dark/70 bg-brand-dark/60 shadow-[inset_0_1px_0_rgba(255,217,178,0.1)] hover:border-gold-light/85 hover:bg-brand-dark/75'
                    : 'border-white/18 bg-brand-dark/45 hover:border-white/35 hover:bg-brand-dark/58'
                }`}
              >
                <span
                  className="font-heading w-[4.75rem] shrink-0 text-3xl font-bold tracking-tight text-white md:w-24 md:text-[2rem]"
                  
                >
                  {ed.year}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">Pa&apos;a Ngouook</p>
                  <p
                    className={
                      ed.featured
                        ? 'text-xs font-medium text-gold-light/90'
                        : 'text-xs text-white/45'
                    }
                  >
                    {ed.status}
                  </p>
                </div>
                <svg
                  className="size-5 shrink-0 text-gold-dark/50 transition-colors group-hover:text-gold-light"
                  width={20}
                  height={20}
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   TOURISME
═══════════════════════════════════════ */
function TourismeSection() {
  const sites = [
    {
      title: 'Le Musée Case Patrimoniale',
      desc: 'Espaces culturels, boutique, archives vivantes de l\'histoire Bamiléké.',
      href: '/tourisme/musee',
      icon: '🏛️',
    },
    {
      title: 'Les Roches de Bapa',
      desc: 'Formations granitiques monumentales, emblèmes du paysage de Bapa.',
      href: '/economie/tourisme/sites',
      icon: '🗿',
    },
    {
      title: 'Le Restaurant Patrimoniale',
      desc: 'Cuisine Bamiléké authentique avec vue panoramique sur les montagnes.',
      href: '/economie/tourisme/restaurant',
      icon: '🍽️',
    },
  ];

  return (
    <section id="visitez-bapa" className="visite-bapa-section relative overflow-hidden bg-gradient-to-b from-cream via-white to-cream-dark/25 scroll-mt-[calc(2.5rem+7rem)]">
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
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between lg:mb-[4.25rem]">
          <div className="max-w-2xl text-center md:text-left">
            <span className="section-label mx-auto mb-4 md:mx-0">Visitez Bapa</span>
            <h2
              className="font-heading mb-4 text-4xl font-bold leading-[1.1] text-brand md:text-5xl lg:text-[3.25rem]"
              
            >
              Tourisme & Découverte
            </h2>
            <div className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent md:mx-0 md:from-gold md:via-gold-dark md:to-transparent" />
            <p className="mx-auto max-w-lg text-base leading-relaxed text-stone-600 md:mx-0 md:max-w-xl md:text-[1.0625rem]">
              Un territoire entre roches ancestrales et prairies des Grassfields — paysages à couper le
              souffle, patrimoine vivant et hospitalité.
            </p>
          </div>
          <Link
            href="/economie/tourisme"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-center rounded-full border-2 border-brand/20 bg-white/80 px-6 py-3 text-sm font-semibold text-brand shadow-sm transition-all hover:border-gold-dark/45 hover:bg-white hover:shadow-md md:self-auto"
          >
            Tout le tourisme
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mb-12 grid gap-4 sm:gap-5 lg:mb-14 lg:grid-cols-3">
          <Link
            href="/economie/tourisme/sites"
            className="group relative flex min-h-[17rem] overflow-hidden rounded-[1.35rem] shadow-[0_12px_40px_-12px_rgba(89,52,20,0.25)] ring-1 ring-stone-200/60 transition-shadow hover:shadow-[0_20px_50px_-12px_rgba(89,52,20,0.35)] sm:min-h-[19rem] lg:col-span-2 lg:min-h-[22rem]"
          >
            <Image
              src="/images/hero-slide-architecture-patrimoine.png"
              alt="Montagnes et paysage autour du village royal de Bapa"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/88 via-brand-dark/15 to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="mb-1 text-[10px] font-bold tracking-[0.2em] text-gold-light uppercase">Nature</p>
              <p className="font-heading mb-1 text-2xl font-bold text-white">
                Les sites naturels
              </p>
              <p className="mb-4 max-w-md text-sm text-white/70">Roches, forêts & panoramas des hauts plateaux.</p>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-gold-light uppercase">
                Explorer
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </span>
            </div>
          </Link>

          <Link
            href="/tourisme/musee"
            className="group relative flex min-h-[17rem] overflow-hidden rounded-[1.35rem] shadow-[0_12px_40px_-12px_rgba(89,52,20,0.25)] ring-1 ring-stone-200/60 transition-shadow hover:shadow-[0_20px_50px_-12px_rgba(89,52,20,0.35)] sm:min-h-[19rem] lg:min-h-[22rem]"
          >
            <Image
              src="/images/musee-exposition-artefacts.png"
              alt="Patrimoine culturel de Bapa"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 34vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/88 via-brand-dark/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="mb-1 text-[10px] font-bold tracking-[0.2em] text-gold-light uppercase">Culture</p>
              <p className="font-heading mb-1 text-2xl font-bold text-white">
                Patrimoine
              </p>
              <p className="mb-4 text-sm text-white/70">Musée, mémoire & traditions.</p>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-gold-light uppercase">
                Découvrir
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </span>
            </div>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {sites.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex min-h-full flex-col rounded-2xl border border-stone-200/70 bg-white/90 p-6 shadow-sm transition-all card-lift hover:border-gold-dark/35 hover:shadow-[0_12px_36px_-14px_rgba(89,52,20,0.18)] sm:p-7"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-dark/20 bg-gradient-to-br from-cream to-parchment/80 text-2xl shadow-sm transition-transform group-hover:scale-105">
                {s.icon}
              </div>
              <h3
                className="font-heading mb-2 text-base font-bold leading-snug text-brand transition-colors group-hover:text-brand-light"
                
              >
                {s.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-stone-600">{s.desc}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] text-gold-dark uppercase transition-colors group-hover:text-gold">
                En savoir plus
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <SectionDivider fill="cream" position="bottom" className="relative z-10" />
    </section>
  );
}

/* ════════════════════════════════════════
   COMMUNAUTÉ
═══════════════════════════════════════ */
function CommunauteSection() {
  return (
    <section className="communaute-section relative isolate overflow-hidden">
      {/* Fond communautaire discret */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
        <Image
          src="/images/musee-celebration-culturelle.png"
          alt=""
          fill
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(165deg,var(--color-cream)_0%,rgba(247,242,234,0.94)_38%,rgba(237,227,210,0.88)_68%,rgba(232,218,198,0.42)_92%,rgba(89,52,20,0.06)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-transparent to-cream-dark/25" />
        <div className="absolute inset-0 pattern-geo opacity-[0.035]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-[7.25rem]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="max-w-xl lg:max-w-none">
            <span className="section-label mx-auto mb-4 md:mx-0">Solidarité</span>
            <h2
              className="font-heading mb-6 mt-3 text-4xl font-bold leading-[1.1] text-brand md:text-5xl lg:text-[3rem]"
              
            >
              La Communauté
              <br />
              Bapa
            </h2>
            <div
              className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-gold-dark to-transparent md:mx-0 md:from-gold-dark md:to-transparent"
              aria-hidden
            />
            <p className="mb-3 text-[1.0625rem] leading-[1.85] text-stone-700">
              La force de Bapa réside dans la cohésion de ses communautés — ceux qui habitent le
              village et ceux qui, dispersés aux quatre coins du monde, continuent de porter le
              flambeau de leur identité.
            </p>
            <p className="mb-0 text-[1.0625rem] leading-[1.85] text-stone-600">
              La diaspora demeure un pilier du développement : elle soutient les initiatives locales
              et entretient le lien avec les valeurs ancestrales.
            </p>
          </div>

          <div className="relative lg:justify-self-end">
            <div
              className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-[1.65rem] bg-brand-dark/15 sm:translate-x-4 sm:translate-y-4"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-brand shadow-[0_20px_48px_-16px_rgba(61,34,16,0.45)] ring-1 ring-white/15 sm:rounded-[1.65rem]">
              <Image
                src="/images/musee-celebration-culturelle.png"
                alt=""
                fill
                aria-hidden
                className="object-cover opacity-15 mix-blend-overlay"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="pattern-geo absolute inset-0 opacity-[0.18]" />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/15" />

              {/* Cercles décoratifs */}
              <div className="pointer-events-none absolute -top-14 -right-14 h-52 w-52 rounded-full border border-white/[0.08]" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-white/[0.06]" />

              <div className="relative z-10 p-8 md:p-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl">
                  🤝
                </div>
                <h3
                  className="font-heading mb-4 text-2xl font-bold text-white md:text-3xl"
                  
                >
                  Rejoignez la communauté
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-white/65 md:text-[0.9375rem]">
                  Que vous soyez enfant du village ou passionné par la culture Bamiléké, les portes vous
                  sont ouvertes.
                </p>
                <ul className="mb-9 space-y-3">
                  {[
                    'Actualités et annonces du village',
                    'Participation aux événements',
                    "Réseau d'entraide et de solidarité",
                    'Projets de développement',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/78">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/communaute/contacts"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand shadow-lg shadow-black/20 transition-colors hover:bg-cream"
                >
                  Nous rejoindre <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider blend position="bottom" className="relative z-10" />
    </section>
  );
}

/* ════════════════════════════════════════
   MÉDIATHÈQUE
═══════════════════════════════════════ */
function MediathequeSection() {
  const photos = [
    { src: '/images/musee-celebration-culturelle.png', label: 'Vie communautaire' },
    { src: '/images/hero-slide-architecture-patrimoine.png', label: 'Montagne & sites' },
    { src: '/images/mot-du-roi-header-palais.png', label: 'Architecture' },
    { src: '/images/festival-ngouook-procession.png', label: 'Paysages' },
    { src: '/images/roi-trone.jpg', label: 'Royaume & traditions' },
  ];

  const [featured, ...rest] = photos;
  const mosaic = rest.slice(0, 4);

  const tileRing =
    'ring-1 ring-white/12 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.45)] transition-[transform,box-shadow,ring-color] duration-500 ease-out hover:ring-gold-light/45 hover:shadow-[0_20px_50px_-14px_rgba(0,0,0,0.55)]';

  return (
    <section className="relative isolate overflow-hidden bg-brand-dark pb-0 pt-20 md:pt-28">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-12%,rgba(192,120,48,0.11),transparent_62%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/[0.08] via-transparent to-black/[0.34]" />
        <div className="absolute inset-0 pattern-geo opacity-[0.055]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
        <div className="mb-10 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="section-label mx-auto mb-4 text-gold-light/90 before:bg-gold-light/65 lg:mx-0">
              Photos & Vidéos
            </span>
            <h2
              className="font-heading mt-2 text-4xl font-bold leading-[1.08] text-white md:text-5xl lg:text-[3.15rem]"
              
            >
              Médiathèque
            </h2>
            <div
              className="mx-auto mb-5 mt-5 h-px w-16 bg-gradient-to-r from-transparent via-gold-light to-transparent lg:mx-0 lg:from-gold-light lg:via-gold-dark lg:to-transparent"
              aria-hidden
            />
            <p className="text-[1.0625rem] leading-relaxed text-white/72 md:text-[1.075rem]">
              Regards sur le village royal — archives visuelles, moments du quotidien et du patrimoine
              pour documenter et transmettre Bapa au-delà des frontières.
            </p>
          </div>
          <Link
            href="/mediatheque"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5 hover:bg-cream hover:shadow-xl lg:self-auto"
          >
            Explorer la médiathèque
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5 lg:items-stretch">
            <Link
              href="/mediatheque"
              aria-label={`Voir la médiathèque — ${featured.label}`}
              className={`group relative isolate block min-h-[min(260px,52vw)] overflow-hidden rounded-[1.35rem] lg:col-span-7 lg:min-h-[400px] ${tileRing}`}
            >
              <Image
                src={featured.src}
                alt=""
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/35 to-transparent opacity-[0.92]" />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-6 md:p-8">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light/95">
                    Sélection
                  </p>
                  <p
                    className="font-heading text-2xl font-bold text-white md:text-3xl"
                    
                  >
                    {featured.label}
                  </p>
                </div>
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-white/90 uppercase backdrop-blur-[2px]">
                  Voir plus
                </span>
              </div>
            </Link>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5 lg:grid-cols-2 lg:gap-4">
              {mosaic.map((photo) => (
                <Link
                  key={photo.src}
                  href="/mediatheque"
                  aria-label={`Médiathèque — ${photo.label}`}
                  className={`group relative aspect-square overflow-hidden rounded-2xl ${tileRing}`}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-80" />
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
                  <span className="absolute inset-x-0 bottom-0 p-3 text-left text-[11px] font-semibold leading-tight text-white/95 drop-shadow-sm sm:p-3.5 sm:text-xs">
                    {photo.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
      </div>
      <SectionDivider fill="cream" position="bottom" className="relative z-10" />
    </section>
  );
}

/* ════════════════════════════════════════
   CTA CONTACT
═══════════════════════════════════════ */
function CTASection() {
  return (
    <section className="bg-cream py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Déco */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
        <span className="section-label mb-5 justify-center">Contact</span>
        <h2
          className="font-heading text-4xl md:text-5xl font-bold text-brand mt-3 mb-5"
          
        >
          Vous avez des<br />questions ?
        </h2>
        <p className="text-stone-500 leading-relaxed mb-10 text-base">
          Notre équipe est disponible pour répondre à vos questions sur le village, les
          événements, les partenariats et les opportunités de visite.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/communaute/contacts"
            className="px-8 py-4 bg-brand text-white font-bold rounded-full hover:bg-brand-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-brand/25 text-sm"
          >
            Contactez-nous
          </Link>
          <Link
            href="/communaute/partenaires"
            className="px-8 py-4 border-2 border-brand/25 text-brand font-bold rounded-full hover:border-brand hover:bg-brand hover:text-white transition-all text-sm"
          >
            Devenir partenaire
          </Link>
        </div>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12" />
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   PAGE
═══════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EchosSection />
      <IntroSection />
      <RoyaumeSection />
      <DeveloppementSection />
      <FestivalSection />
      <TourismeSection />
      <CommunauteSection />
      <MediathequeSection />
      <CTASection />
    </>
  );
}
