import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeroPremium from '@/components/layout/PageHeroPremium';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import Button from '@/components/ui/Button';
import { echosCategoryFilterHref } from '@/lib/echos';
import {
  FESTIVAL_HUB_PATH,
  FESTIVAL_THEMES,
  FESTIVAL_YEARS,
  festivalEditionHubMeta,
  festivalYearPath,
  getAdjacentFestivalYears,
  getFestivalEdition,
  isFestivalYearUpcoming,
  type FestivalYear,
} from '@/lib/festival-editions';

type Params = Promise<{ year: string }>;

const scrollMt = 'scroll-mt-[calc(var(--navbar-offset)+5rem)]';

export function generateStaticParams() {
  return FESTIVAL_YEARS.map((year) => ({ year: String(year) }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { year: y } = await params;
  const edition = getFestivalEdition(y);
  if (!edition) return { title: 'Édition introuvable | Bapa' };
  return {
    title: `${edition.label} | Festival Pa'a Ngouo'ok | Bapa`,
    description: edition.heroLead,
  };
}

function SectionPanel({
  id,
  children,
  variant = 'white',
}: {
  id: string;
  children: ReactNode;
  variant?: 'white' | 'cream';
}) {
  return (
    <section
      id={id}
      className={`${scrollMt} rounded-3xl border border-stone-200/70 p-6 shadow-sm ring-1 ring-stone-100/60 md:p-8 ${
        variant === 'white' ? 'bg-white' : 'bg-gradient-to-br from-cream/90 to-white'
      }`}
    >
      {children}
    </section>
  );
}

function BlockHeading({ title, index }: { title: string; index: number }) {
  return (
    <header className="mb-6 flex items-start gap-4 border-l-[3px] border-gold-dark/50 pl-5 md:mb-7">
      <span className="font-heading flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-sm">
        {index + 1}
      </span>
      <h2 className="font-heading min-w-0 flex-1 text-xl font-bold text-brand md:text-2xl">{title}</h2>
    </header>
  );
}

const tocLinkClass =
  'flex w-full items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-stone-600 transition-all hover:border-stone-200/90 hover:bg-white/90 lg:px-3.5 lg:py-2.5';

export default async function FestivalYearPage({ params }: { params: Params }) {
  const { year: yearStr } = await params;
  const edition = getFestivalEdition(yearStr);
  if (!edition) notFound();

  const year = edition.year as FestivalYear;
  const meta = festivalEditionHubMeta[year];
  const upcoming = isFestivalYearUpcoming(year);
  const { prev, next } = getAdjacentFestivalYears(year);
  const theme = FESTIVAL_THEMES[year];
  const toc = edition.blocks.map((b) => ({ slug: b.slug, title: b.title }));

  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="gold" />

      <PageHeroPremium
        imageSrc={meta.image}
        imageAlt={meta.imageAlt}
        imageClassName="object-cover object-[center_38%] scale-105 select-none"
        label={edition.statusLabel}
        title={edition.label}
        description={edition.heroLead}
        descriptionClassName="mx-auto max-w-2xl text-lg leading-relaxed text-white/88 md:mx-0"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: "Pa'a Ngouo'ok", href: FESTIVAL_HUB_PATH },
          { label: String(edition.year) },
        ]}
      >
        <dl className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3 sm:gap-4 md:mx-0 md:max-w-xl">
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-2xl font-bold text-gold-light">{edition.year}</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Édition
            </dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-sm font-bold leading-tight text-gold-light">
              {upcoming ? 'Préparation' : 'Bilan'}
            </dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              {upcoming ? 'En cours' : 'Archivé'}
            </dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-lg font-bold leading-tight text-gold-light">
              {edition.blocks.length}
            </dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Rubriques
            </dd>
          </div>
        </dl>
      </PageHeroPremium>

      <section
        aria-label="Visuel de l'édition"
        className="relative z-[1] -mt-5 mx-auto max-w-4xl px-4 sm:px-6 lg:-mt-8 lg:px-10"
      >
        <figure className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gold-dark/20">
          <div className="relative aspect-[21/9] w-full bg-stone-900 sm:aspect-[2.4/1]">
            <Image
              src={meta.image}
              alt={meta.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
            {upcoming && (
              <span className="absolute left-4 top-4 rounded-full bg-gold-dark px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
                Édition à venir
              </span>
            )}
          </div>
          <figcaption className="border-t border-stone-200/80 bg-white px-5 py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-dark">Thème officiel</p>
            <p className="mt-1 font-heading text-base font-semibold leading-snug text-brand md:text-lg">
              {theme}
            </p>
          </figcaption>
        </figure>
      </section>

      <main className="relative z-[1] mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-10">
        {upcoming && (
          <div
            className="relative mb-10 overflow-hidden rounded-2xl border border-gold-dark/30 bg-gradient-to-r from-gold/[0.12] via-cream to-white px-5 py-4 shadow-sm md:px-7 md:py-5"
            role="status"
          >
            <p className="text-sm leading-relaxed text-stone-700">
              <strong className="text-brand">Édition en préparation.</strong> Les contenus ci-dessous décrivent les
              axes envisagés ; le programme définitif et le mot du PCO seront publiés après validation par le comité
              et la chefferie.
            </p>
          </div>
        )}

        <div className="lg:grid lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-x-10 xl:grid-cols-[minmax(0,17rem)_1fr] xl:gap-x-12">
          <aside className="mb-8 lg:sticky lg:top-[calc(var(--navbar-offset)+1rem)] lg:mb-0 lg:self-start">
            <div className="rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm ring-1 ring-stone-100/60 md:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Sommaire</p>
              <nav aria-label="Sections de la page" className="mt-4 hidden space-y-0.5 lg:block">
                {toc.map((item, i) => (
                  <a key={item.slug} href={`#${item.slug}`} className={tocLinkClass}>
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand/8 text-[11px] font-bold text-brand">
                      {i + 1}
                    </span>
                    <span className="min-w-0 leading-snug">{item.title}</span>
                  </a>
                ))}
              </nav>
              <nav
                aria-label="Sections de la page (mobile)"
                className="-mx-1 mt-4 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden"
              >
                {toc.map((item) => (
                  <a
                    key={item.slug}
                    href={`#${item.slug}`}
                    className="shrink-0 rounded-full border border-stone-200/90 bg-cream/50 px-3 py-1.5 text-xs font-semibold text-brand"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="mt-5 space-y-2 border-t border-stone-100 pt-4">
                <Button href={FESTIVAL_HUB_PATH} variant="ghost" size="sm" className="w-full justify-start">
                  ← Toutes les éditions
                </Button>
                {(prev || next) && (
                  <div className="flex flex-col gap-2">
                    {prev && (
                      <Button href={festivalYearPath(prev)} variant="secondary" size="sm" className="justify-start">
                        Édition {prev}
                      </Button>
                    )}
                    {next && (
                      <Button href={festivalYearPath(next)} variant="secondary" size="sm" className="justify-start">
                        Édition {next} →
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-8 md:space-y-10">
            {edition.blocks.map((block, i) => (
              <SectionPanel
                key={block.slug}
                id={block.slug}
                variant={i % 2 === 0 ? 'white' : 'cream'}
              >
                <BlockHeading title={block.title} index={i} />
                <div className="space-y-4 text-[1.0625rem] leading-[1.88] text-stone-700">
                  {block.paragraphs.map((para, pi) => (
                    <p key={pi}>{para}</p>
                  ))}
                </div>
              </SectionPanel>
            ))}
          </div>
        </div>

        <aside className="mt-12 overflow-hidden rounded-3xl border border-gold-dark/25 bg-gradient-to-br from-brand/[0.06] via-white to-gold/[0.08] p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">
                {upcoming ? 'Suivre la préparation' : 'Explorer davantage'}
              </p>
              <h2 className="font-heading mt-2 text-xl font-bold text-brand md:text-2xl">
                {upcoming
                  ? 'Restez informés de Pa’a Ngouo’ok 2028'
                  : 'Mémoire du festival et actualités'}
              </h2>
              <p className="mt-2 max-w-lg text-sm text-stone-600">
                {upcoming
                  ? 'Consultez les Échos de Bapa et la médiathèque pour les annonces du comité d’organisation.'
                  : 'Photos, archives et articles de presse communautaire.'}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={echosCategoryFilterHref('Festival')} variant="secondary" size="md">
                Échos · Festival
              </Button>
              <Button href="/mediatheque" size="md">
                Médiathèque
              </Button>
            </div>
          </div>
        </aside>

        <div className="mt-16 md:mt-20">
          <PageFooterNav
            links={[
              ...(prev ? [{ href: festivalYearPath(prev), label: `← Édition ${prev}` }] : []),
              { href: FESTIVAL_HUB_PATH, label: "Toutes les éditions" },
              ...(next ? [{ href: festivalYearPath(next), label: `Édition ${next} →` }] : []),
            ]}
          />
        </div>
      </main>
    </PageShell>
  );
}
