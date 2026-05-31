import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VisitezBapaIcon, { SectionHeading } from '@/components/visitez-bapa/VisitezBapaIcon';
import {
  bapaLocalisation,
  bapaPaysages,
  bapaQuartiers,
  bapaSitesCulturels,
  bapaSitesNaturels,
  CARTE_TOURISTIQUE_IMAGE,
  carteCredits,
  visitezBapaNavSections,
  visitezBapaQuickLinks,
} from '@/lib/visitez-bapa';

const scrollMt = 'scroll-mt-[calc(var(--navbar-offset)+5rem)]';

function SiteCard({
  title,
  detail,
  image,
  icon,
  href,
  category,
}: {
  title: string;
  detail: string;
  image: string;
  icon: (typeof bapaSitesCulturels)[number]['icon'];
  href?: string;
  category: 'culture' | 'nature';
}) {
  const cardClass = `group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm ring-1 ring-stone-100/80${
    href
      ? ' transition-all card-lift hover:border-gold-dark/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark'
      : ''
  }`;

  const inner = (
    <>
      <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden bg-stone-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, 360px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/10 to-transparent" />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
            category === 'culture'
              ? 'bg-gold-dark/90 text-white'
              : 'bg-forest/90 text-white'
          }`}
        >
          {category === 'culture' ? 'Patrimoine' : 'Nature'}
        </span>
        <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-xl bg-white/92 text-brand shadow-sm backdrop-blur-sm">
          <VisitezBapaIcon id={icon} className="size-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold text-brand">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{detail}</p>
        {href && (
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-gold-dark group-hover:text-brand">
            Découvrir
            <span aria-hidden>→</span>
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClass}>
        {inner}
      </Link>
    );
  }

  return <article className={cardClass}>{inner}</article>;
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

export default function VisitezBapaContent() {
  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,13rem)_1fr] lg:gap-x-10 xl:grid-cols-[minmax(0,15rem)_1fr] xl:gap-x-12">
      <aside className="mb-8 lg:sticky lg:top-[calc(var(--navbar-offset)+1rem)] lg:mb-0 lg:self-start">
        <p className="mb-3 hidden text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 lg:block">
          Sur cette page
        </p>
        <nav
          aria-label="Navigation des sections"
          className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {visitezBapaNavSections.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#visitez-${id}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-stone-200/90 bg-white px-3.5 py-2.5 text-sm font-semibold text-brand shadow-sm transition-colors hover:border-gold-dark/35 hover:bg-cream/80 lg:w-full lg:rounded-2xl lg:px-4"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/8 text-brand">
                <VisitezBapaIcon id={icon} className="size-4" />
              </span>
              <span className="whitespace-nowrap lg:whitespace-normal">{label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <div className="min-w-0 space-y-10 md:space-y-12">
        <SectionPanel id="visitez-carte" variant="cream">
          <SectionHeading
            icon="carte"
            title="Carte touristique officielle"
            subtitle="Royaume de Bapa — repères, routes, quartiers et légende paysagère (WGS 84, UTM 32N)."
          />

          <figure className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_24px_60px_-28px_rgba(61,34,16,0.4)] ring-1 ring-gold-dark/10">
            <div className="border-b border-stone-100 bg-gradient-to-r from-brand/5 via-cream/40 to-forest/5 px-5 py-3">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand/80">
                Royaume de Bapa · Carte touristique
              </p>
            </div>
            <div className="relative bg-[#f4efe6] p-3 sm:p-5 md:p-6">
              <div className="pointer-events-none absolute inset-3 rounded-xl border border-gold-dark/15 sm:inset-5 md:inset-6" aria-hidden />
              <Image
                src={CARTE_TOURISTIQUE_IMAGE}
                alt="Carte touristique du Royaume Bapa — quartiers, sites culturels et naturels, routes et légende"
                width={2400}
                height={1600}
                className="relative z-[1] h-auto w-full rounded-lg object-contain"
                sizes="(max-width: 1280px) 100vw, 1100px"
                priority
              />
            </div>
            <figcaption className="flex flex-col gap-4 border-t border-stone-200/80 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-6">
              <p className="text-sm text-stone-600">
                <span className="font-heading font-bold text-brand">Carte Touristique du Royaume Bapa</span>
                <span className="mt-1 block text-xs text-stone-500">{carteCredits.version}</span>
              </p>
              <p className="inline-flex items-center gap-2 rounded-full bg-forest/8 px-4 py-2 text-xs font-semibold text-forest">
                <VisitezBapaIcon id="carte" className="size-4" />
                Légende complète sur le document
              </p>
            </figcaption>
          </figure>

          <div className="mt-6 rounded-2xl border border-stone-200/70 bg-white/80 p-5 md:p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-stone-500">
              Légende paysages
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {bapaPaysages.map((p) => (
                <li
                  key={p.label}
                  className="flex items-center gap-3 rounded-xl border border-stone-100 bg-cream/40 px-4 py-3"
                >
                  <span
                    className="size-4 shrink-0 rounded-md ring-2 ring-white shadow-sm"
                    style={{ backgroundColor: p.color }}
                    aria-hidden
                  />
                  <VisitezBapaIcon id={p.icon} className="size-4 shrink-0 text-brand" />
                  <span className="text-sm font-medium text-stone-700">{p.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionPanel>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
          <SectionPanel id="visitez-localisation">
            <SectionHeading icon="localisation" title="Localisation géographique" />
            <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-stone-200/80">
              <Image
                src={bapaLocalisation.image}
                alt="Paysage des Hauts-Plateaux autour de Bapa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-brand-dark/15 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-heading text-lg font-bold text-white drop-shadow-md">
                Département des {bapaLocalisation.departement}
              </p>
              <p className="absolute bottom-12 left-4 text-sm text-white/85">
                Région de l&apos;{bapaLocalisation.region}
              </p>
            </div>
            <ul className="space-y-2">
              {bapaLocalisation.voisins.map((v) => (
                <li
                  key={v.name}
                  className="flex items-center gap-3 rounded-xl border border-stone-100 bg-cream/30 px-4 py-3 transition-colors hover:border-gold-dark/20 hover:bg-cream/60"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-forest/10 text-forest">
                    <VisitezBapaIcon id={v.icon} className="size-4" />
                  </span>
                  <span className="flex-1 font-semibold text-brand">{v.name}</span>
                  <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600">
                    {v.position}
                  </span>
                </li>
              ))}
            </ul>
          </SectionPanel>

          <SectionPanel id="visitez-quartiers" variant="cream">
            <SectionHeading
              icon="quartiers"
              title="Six quartiers du royaume"
              subtitle="Organisation coutumière repérée sur la carte."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {bapaQuartiers.map((q, i) => {
                const isPalais = q.name === 'Top';
                return (
                  <li
                    key={q.name}
                    className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-md ${
                      isPalais
                        ? 'border-gold-dark/35 ring-2 ring-gold-dark/15 sm:col-span-2'
                        : 'border-stone-200/80 ring-1 ring-stone-100/80'
                    }`}
                  >
                    {'image' in q && q.image && (
                      <div className="relative aspect-[21/9] w-full">
                        <Image src={q.image} alt={q.name} fill className="object-cover object-center" sizes="400px" />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 to-transparent" />
                        {isPalais && (
                          <span className="absolute left-4 top-4 rounded-full bg-gold-dark px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                            Palais Royal
                          </span>
                        )}
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <span
                          className={`font-heading flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                            isPalais ? 'bg-gold-dark text-white' : 'bg-brand/10 text-brand'
                          }`}
                        >
                          {i + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="flex items-center gap-2 font-bold text-brand">
                            <VisitezBapaIcon id={q.icon} className="size-4 shrink-0" />
                            {q.name}
                          </p>
                          <p className="text-xs font-medium uppercase tracking-wide text-stone-500">{q.zone}</p>
                          {q.note && <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{q.note}</p>}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </SectionPanel>
        </div>

        <SectionPanel id="visitez-sites">
          <SectionHeading
            icon="sites"
            title="Sites touristiques majeurs"
            subtitle="Patrimoine culturel et sites naturels identifiés sur la carte."
          />
          <div className="mb-8">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
              <span className="h-px flex-1 max-w-[2rem] bg-gold-dark/40" aria-hidden />
              Patrimoine culturel
            </p>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {bapaSitesCulturels.map((site) => (
                <SiteCard key={site.title} {...site} category="culture" />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-forest">
              <span className="h-px flex-1 max-w-[2rem] bg-forest/30" aria-hidden />
              Sites naturels
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {bapaSitesNaturels.map((site) => (
                <SiteCard key={site.title} {...site} category="nature" />
              ))}
            </div>
          </div>
        </SectionPanel>

        <SectionPanel id="visitez-credits" variant="cream">
          <div className="overflow-hidden rounded-2xl border border-gold-dark/20 bg-white">
            <div className="grid md:grid-cols-5">
              <div className="relative min-h-[14rem] md:col-span-2 md:min-h-full">
                <Image
                  src={carteCredits.festivalImage}
                  alt="Festival Pa'a Ngouo'ok"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/90" />
                <p className="absolute bottom-4 left-4 right-4 font-heading text-lg font-bold text-white md:hidden">
                  Crédits & contexte
                </p>
              </div>
              <div className="p-6 md:col-span-3 md:p-8">
                <SectionHeading icon="credits" title="Crédits & contexte" />
                <dl className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-xl border border-stone-100 bg-cream/30 p-4 sm:col-span-2">
                    <dt className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand">
                      <VisitezBapaIcon id="culture" className="size-4" />
                      Festival
                    </dt>
                    <dd className="text-sm leading-relaxed text-stone-600">{carteCredits.festival}</dd>
                  </div>
                  {(
                    [
                      ['Conception', carteCredits.conception],
                      ['Contribution', carteCredits.contribution],
                    ] as const
                  ).map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-stone-100 bg-white p-4">
                      <dt className="text-xs font-bold uppercase tracking-wide text-brand">{label}</dt>
                      <dd className="mt-1 text-sm text-stone-600">{value}</dd>
                    </div>
                  ))}
                  <div className="rounded-xl border border-stone-100 bg-white p-4 sm:col-span-2">
                    <dt className="text-xs font-bold uppercase tracking-wide text-brand">Supervision</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-stone-600">
                      {carteCredits.supervisionTechnique}
                      <br />
                      <span className="font-medium text-brand">{carteCredits.supervisionGenerale}</span>
                    </dd>
                  </div>
                  <div className="rounded-xl border border-stone-100 bg-white p-4 sm:col-span-2">
                    <dt className="text-xs font-bold uppercase tracking-wide text-brand">Technique & sources</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-stone-600">
                      {carteCredits.coordonnees} · {carteCredits.echelle} · {carteCredits.version}
                      <br />
                      <span className="text-stone-500">Sources : {carteCredits.sources}</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </SectionPanel>

        <section aria-label="Poursuivre la visite" className={scrollMt}>
          <div className="mb-6 text-center md:mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">Tourisme</p>
            <h2 className="font-heading mt-2 text-2xl font-bold text-brand md:text-3xl">
              Poursuivre votre visite
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visitezBapaQuickLinks.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/70 bg-white shadow-sm transition-all card-lift hover:border-gold-dark/35 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full shrink-0">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 to-transparent" />
                  <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl bg-white/92 text-brand shadow-sm">
                    <VisitezBapaIcon id={s.icon} className="size-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-base font-bold text-brand">{s.title}</h3>
                  <p className="mt-1 flex-1 text-sm text-stone-600">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-gold-dark group-hover:text-brand">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
