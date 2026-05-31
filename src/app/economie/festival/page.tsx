import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeroPremium from '@/components/layout/PageHeroPremium';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import Button from '@/components/ui/Button';
import {
  FESTIVAL_SECTION_LABELS,
  FESTIVAL_YEARS,
  festivalEditionHubMeta,
  festivalEditions,
  festivalYearPath,
  FESTIVAL_THEMES,
  type FestivalYear,
} from '@/lib/festival-editions';

export const metadata: Metadata = {
  title: "Festival Pa'a Ngouo'ok | Économie & culture | Bapa",
  description:
    "Présentation des éditions du festival biennal Pa'a Ngouo'ok : thème, programme, comité, réalisations et médiathèque.",
};

const hubGallery = [
  {
    src: '/images/festival-ngouook-procession.png',
    caption: 'Procession & danses',
  },
  {
    src: '/images/hero-slide-cortege-traditionnel.png',
    caption: 'Cortège royal',
  },
  {
    src: '/images/paa-ngouook-2028.jpg',
    caption: 'Édition 2028',
  },
] as const;

export default function FestivalHubPage() {
  const yearsNewestFirst = [...FESTIVAL_YEARS].reverse();

  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="gold" />

      <PageHeroPremium
        imageSrc="/images/festival-ngouook-procession.png"
        imageClassName="object-cover object-[center_38%] scale-105 select-none"
        label="Économie & culture"
        title="Pa'a Ngouo'ok"
        description="Le grand festival biennal du Royaume de Bapa — danses, rituels, gastronomie et rassemblement communautaire autour de l'identité Bamiléké."
        descriptionClassName="mx-auto max-w-2xl text-lg leading-relaxed text-white/88 md:mx-0"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: "Pa'a Ngouo'ok" },
        ]}
      >
        <dl className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3 sm:gap-4 md:mx-0 md:max-w-xl">
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-xl font-bold text-gold-light">{FESTIVAL_YEARS.length}</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Éditions
            </dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-lg font-bold leading-tight text-gold-light">Biennal</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Rythme
            </dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-lg font-bold leading-tight text-gold-light">
              {FESTIVAL_SECTION_LABELS.length}
            </dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Rubriques / édition
            </dd>
          </div>
        </dl>
      </PageHeroPremium>

      <section
        aria-label="Le festival en images"
        className="relative z-[1] -mt-5 mx-auto max-w-6xl px-4 sm:px-6 lg:-mt-8 lg:px-10"
      >
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {hubGallery.map(({ src, caption }) => (
            <figure
              key={src}
              className="overflow-hidden rounded-xl shadow-md ring-1 ring-stone-200/90 sm:rounded-2xl"
            >
              <div className="relative aspect-[4/3] w-full bg-stone-200">
                <Image src={src} alt="" fill className="object-cover object-center" sizes="33vw" />
              </div>
              <figcaption className="border-t border-stone-100 bg-white/95 px-2 py-1.5 text-center text-[11px] font-medium text-stone-600 sm:text-xs">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <main className="relative z-[1] mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-10">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(100%,44rem)] -translate-x-1/2 bg-gradient-to-b from-gold-dark/[0.08] to-transparent blur-3xl"
          aria-hidden
        />

        <div className="relative mb-12 rounded-2xl border border-white/80 bg-white/85 px-6 py-8 shadow-[0_16px_48px_-28px_rgba(89,52,20,0.25)] backdrop-blur-[2px] md:px-9 md:py-10">
          <p className="mx-auto max-w-3xl text-center text-[1.0625rem] leading-[1.88] text-stone-700 md:text-left">
            Chaque édition dispose d&apos;une page structurée :{' '}
            <strong className="text-brand">{FESTIVAL_SECTION_LABELS.slice(0, 4).join(', ')}</strong>
            … jusqu&apos;au <strong className="text-brand">mot du PCO</strong>. Choisissez une édition
            pour consulter le détail, le programme et la mémoire communautaire.
          </p>
        </div>

        <header className="mb-8 border-l-[3px] border-gold-dark/50 pl-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">Éditions</p>
          <h2 className="font-heading mt-2 text-2xl font-bold text-brand md:text-3xl">
            Choisir une édition
          </h2>
          <p className="mt-2 text-sm text-stone-500">
            De 2018 à 2028 — bilans passés et préparation de la prochaine rencontre.
          </p>
        </header>

        <ul className="flex flex-col gap-6">
          {yearsNewestFirst.map((year) => {
            const edition = festivalEditions[year];
            const meta = festivalEditionHubMeta[year as FestivalYear];
            const isUpcoming = year === 2028;
            const isFeatured = meta.featured;

            return (
              <li key={year}>
                <Link
                  href={festivalYearPath(year)}
                  className={`group flex flex-col overflow-hidden rounded-3xl border shadow-sm ring-1 transition-all card-lift hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2 sm:flex-row sm:items-stretch ${
                    isFeatured
                      ? 'border-gold-dark/35 bg-white ring-gold-dark/15 hover:border-gold-dark/50'
                      : 'border-stone-200/80 bg-white ring-stone-100/80 hover:border-gold-dark/25'
                  }`}
                >
                  <div className="relative h-48 w-full shrink-0 overflow-hidden bg-stone-200 sm:h-auto sm:w-[38%] md:w-[42%]">
                    <Image
                      src={meta.image}
                      alt={meta.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-transparent sm:bg-gradient-to-r sm:from-brand-dark/60" />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
                        isUpcoming
                          ? 'bg-gold-dark text-white shadow-sm'
                          : 'bg-white/92 text-brand shadow-sm'
                      }`}
                    >
                      {isUpcoming ? 'À venir' : 'Réalisé'}
                    </span>
                    <span className="font-heading absolute bottom-4 left-4 text-4xl font-bold text-white drop-shadow-md sm:bottom-auto sm:left-auto sm:right-4 sm:top-1/2 sm:-translate-y-1/2 sm:text-5xl">
                      {year}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-center p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                      {edition.statusLabel}
                    </p>
                    <h3 className="font-heading mt-1 text-xl font-bold text-brand transition-colors group-hover:text-gold-dark sm:text-2xl">
                      {edition.label}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-stone-600">
                      <span className="font-semibold text-brand">Thème :</span>{' '}
                      {FESTIVAL_THEMES[year as FestivalYear]}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-stone-500">{edition.heroLead}</p>
                    <span className="mt-5 inline-flex w-fit items-center gap-1 text-xs font-bold uppercase tracking-wide text-gold-dark group-hover:text-brand">
                      Consulter l&apos;édition →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <section
          aria-label="Structure d'une page édition"
          className="mt-12 rounded-3xl border border-stone-200/70 bg-gradient-to-br from-cream/90 to-white p-6 md:p-8"
        >
          <h2 className="font-heading text-lg font-bold text-brand md:text-xl">
            Contenu de chaque page édition
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {FESTIVAL_SECTION_LABELS.map((label) => (
              <li
                key={label}
                className="rounded-full border border-stone-200/90 bg-white px-3 py-1.5 text-xs font-semibold text-stone-600"
              >
                {label}
              </li>
            ))}
          </ul>
        </section>

        <aside className="mt-12 overflow-hidden rounded-3xl border border-gold-dark/25 bg-gradient-to-br from-brand/[0.06] via-white to-gold/[0.08] p-6 shadow-sm sm:p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">
                Mémoire & médias
              </p>
              <h2 className="font-heading mt-2 text-2xl font-bold text-brand">
                Photos, vidéos et archives
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Retrouvez les documents officiels dans la médiathèque et les actualités dans les Échos
                de Bapa.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/mediatheque" variant="secondary" size="md">
                Médiathèque
              </Button>
              <Button href="/communaute/echos?categorie=Festival" size="md">
                Échos · Festival
              </Button>
            </div>
          </div>
        </aside>

        <div className="mt-16 md:mt-20">
          <PageFooterNav
            links={[
              { href: '/economie/festival/2028', label: "Édition 2028" },
              { href: '/economie/festival/2023', label: 'Édition 2023' },
              { href: '/', label: '← Accueil' },
            ]}
          />
        </div>
      </main>
    </PageShell>
  );
}
