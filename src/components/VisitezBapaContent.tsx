import Image from 'next/image';
import Link from 'next/link';
import VisitezBapaIcon, { SectionHeading } from '@/components/visitez-bapa/VisitezBapaIcon';
import {
  bapaGaleriePhotos,
  bapaInfrastructure,
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

function SiteCard({
  title,
  detail,
  image,
  icon,
  href,
}: {
  title: string;
  detail: string;
  image: string;
  icon: (typeof bapaSitesCulturels)[number]['icon'];
  href?: string;
}) {
  const cardClass = `group overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm ring-1 ring-stone-100${
    href
      ? ' transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark'
      : ''
  }`;

  const inner = (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 flex size-9 items-center justify-center rounded-xl bg-white/90 text-brand shadow-sm backdrop-blur-sm">
          <VisitezBapaIcon id={icon} className="size-5" />
        </span>
      </div>
      <div className="p-4">
        <p className="font-bold text-brand">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-stone-600">{detail}</p>
        {href && (
          <p className="mt-3 text-xs font-semibold text-gold-dark group-hover:text-brand">Visiter →</p>
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

  return <div className={cardClass}>{inner}</div>;
}

export default function VisitezBapaContent() {
  return (
    <div className="mx-auto max-w-7xl">
      <nav
        aria-label="Sections carte touristique"
        className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start"
      >
        {visitezBapaNavSections.map(({ id, label, icon }) => (
          <a
            key={id}
            href={`#visitez-${id}`}
            className="inline-flex items-center gap-2 rounded-full border border-stone-200/90 bg-white/90 px-4 py-2 text-xs font-semibold text-brand transition-colors hover:border-gold-dark/40 hover:bg-cream"
          >
            <VisitezBapaIcon id={icon} className="size-4" />
            {label}
          </a>
        ))}
      </nav>

      <figure
        id="visitez-carte"
        className="scroll-mt-[calc(var(--navbar-offset)+6rem)] overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_20px_50px_-24px_rgba(61,34,16,0.35)] ring-1 ring-stone-200/60"
      >
        <div className="relative w-full bg-stone-100">
          <Image
            src={CARTE_TOURISTIQUE_IMAGE}
            alt="Carte touristique du Royaume Bapa — quartiers, sites culturels et naturels, routes et légende"
            width={2400}
            height={1600}
            className="h-auto w-full object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
        <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200/80 bg-cream/60 px-5 py-4">
          <p className="text-sm text-stone-600">
            <span className="font-semibold text-brand">Carte Touristique du Royaume Bapa</span>
            {' — '}
            {carteCredits.version}
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest">
            <VisitezBapaIcon id="carte" className="size-4" />
            Légende détaillée sur la carte
          </span>
        </figcaption>
      </figure>

      {/* Galerie — photos de la carte */}
      <section aria-label="Galerie du territoire" className="mt-12">
        <SectionHeading
          icon="sites"
          title="En images"
          subtitle="Aperçu des lieux repérés sur la carte touristique officielle."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bapaGaleriePhotos.map((photo, i) => (
            <figure
              key={photo.src}
              className={`relative overflow-hidden rounded-2xl ring-1 ring-stone-200/70 ${
                i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <div className={`relative w-full bg-stone-200 ${i === 0 ? 'aspect-[4/3] min-h-[14rem]' : 'aspect-[4/3]'}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? '(max-width:640px) 100vw, 66vw' : '(max-width:640px) 50vw, 33vw'}
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/90 to-transparent px-4 py-3 text-sm font-semibold text-white">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-14">
        <section id="visitez-localisation" className="scroll-mt-[calc(var(--navbar-offset)+6rem)]">
          <SectionHeading icon="localisation" title="Localisation géographique" />
          <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-stone-200/80">
            <Image
              src={bapaLocalisation.image}
              alt="Paysage des Hauts-Plateaux autour de Bapa"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white drop-shadow">
              Département des {bapaLocalisation.departement} — Région de l&apos;{bapaLocalisation.region}
            </p>
          </div>
          <ul className="space-y-2">
            {bapaLocalisation.voisins.map((v) => (
              <li
                key={v.name}
                className="flex items-center gap-3 rounded-xl border border-stone-200/80 bg-white/90 px-4 py-3 text-sm"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-forest/10 text-forest">
                  <VisitezBapaIcon id={v.icon} className="size-4" />
                </span>
                <span className="flex-1 font-semibold text-brand">{v.name}</span>
                <span className="text-stone-500">{v.position}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="visitez-quartiers" className="scroll-mt-[calc(var(--navbar-offset)+6rem)]">
          <SectionHeading icon="quartiers" title="Organisation — 6 quartiers" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {bapaQuartiers.map((q, i) => (
              <li
                key={q.name}
                className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm ring-1 ring-stone-100"
              >
                {'image' in q && q.image && (
                  <div className="relative aspect-[2/1] w-full">
                    <Image src={q.image} alt={q.name} fill className="object-cover object-center" sizes="200px" />
                    <div className="absolute inset-0 bg-brand-dark/25" />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gold-dark/15 text-gold-dark text-sm font-bold">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-2 font-bold text-brand">
                        <VisitezBapaIcon id={q.icon} className="size-4 shrink-0" />
                        {q.name}
                      </p>
                      <p className="text-xs text-stone-500">{q.zone}</p>
                      {q.note && <p className="mt-1 text-sm text-stone-600">{q.note}</p>}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section id="visitez-sites" className="mt-16 scroll-mt-[calc(var(--navbar-offset)+6rem)]">
        <SectionHeading
          icon="sites"
          title="Sites touristiques majeurs"
          subtitle="Patrimoine culturel et sites naturels repérés sur la carte."
        />
        <p className="mb-6 text-sm font-bold uppercase tracking-wide text-forest">Patrimoine culturel</p>
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bapaSitesCulturels.map((site) => (
            <SiteCard key={site.title} {...site} />
          ))}
        </div>
        <p className="mb-6 text-sm font-bold uppercase tracking-wide text-brand">Sites naturels</p>
        <div className="grid gap-5 sm:grid-cols-2">
          {bapaSitesNaturels.map((site) => (
            <SiteCard key={site.title} {...site} />
          ))}
        </div>
      </section>

      <section
        id="visitez-infrastructure"
        className="mt-16 scroll-mt-[calc(var(--navbar-offset)+6rem)] rounded-3xl border border-stone-200/80 bg-gradient-to-br from-cream/80 to-white p-6 md:p-8"
      >
        <SectionHeading icon="infrastructure" title="Infrastructure & équipements" />
        <ul className="mb-8 grid gap-3 sm:grid-cols-2">
          {bapaInfrastructure.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/95 px-4 py-3 text-sm text-stone-700 shadow-sm"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/8 text-brand">
                <VisitezBapaIcon id={item.icon} className="size-5" />
              </span>
              {item.label}
            </li>
          ))}
        </ul>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-stone-500">Légende paysages (carte)</p>
        <div className="flex flex-wrap gap-3">
          {bapaPaysages.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200/90 bg-white px-4 py-2 text-xs font-semibold text-stone-700"
            >
              <span
                className="size-3 rounded-full ring-1 ring-stone-300/80"
                style={{ backgroundColor: p.color }}
                aria-hidden
              />
              <VisitezBapaIcon id={p.icon} className="size-3.5 text-brand" />
              {p.label}
            </span>
          ))}
        </div>
      </section>

      <section
        id="visitez-credits"
        className="mt-16 scroll-mt-[calc(var(--navbar-offset)+6rem)] overflow-hidden rounded-2xl border border-gold-dark/25 bg-brand/5"
      >
        <div className="grid md:grid-cols-5">
          <div className="relative min-h-[12rem] md:col-span-2 md:min-h-full">
            <Image
              src={carteCredits.festivalImage}
              alt="Festival Pa'a Ngouo'ok"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-brand-dark/40 md:bg-gradient-to-r md:from-transparent md:to-brand/5" />
          </div>
          <div className="p-6 md:col-span-3 md:p-8">
            <SectionHeading icon="credits" title="Crédits & contexte" />
            <dl className="space-y-4 text-sm text-stone-600">
              <div>
                <dt className="mb-1 flex items-center gap-2 font-semibold text-brand">
                  <VisitezBapaIcon id="culture" className="size-4" />
                  Festival
                </dt>
                <dd>{carteCredits.festival}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand">Conception</dt>
                <dd>{carteCredits.conception}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand">Contribution</dt>
                <dd>{carteCredits.contribution}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand">Supervision</dt>
                <dd>
                  {carteCredits.supervisionTechnique}
                  <br />
                  {carteCredits.supervisionGenerale}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-brand">Technique</dt>
                <dd>
                  {carteCredits.coordonnees} · {carteCredits.echelle} · {carteCredits.version}
                  <br />
                  Sources : {carteCredits.sources}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visitezBapaQuickLinks.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group overflow-hidden rounded-2xl border border-stone-200/70 bg-white shadow-sm transition-all card-lift hover:border-gold-dark/35 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={s.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 to-transparent" />
              <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl bg-white/90 text-brand">
                <VisitezBapaIcon id={s.icon} className="size-5" />
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-base font-bold text-brand">{s.title}</h3>
              <p className="mt-1 text-sm text-stone-600">{s.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-gold-dark">
                En savoir plus →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
