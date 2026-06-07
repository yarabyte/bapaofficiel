import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AdevipaNavIcon from '@/components/adevipa/AdevipaNavIcon';
import PageHeroPremium from '@/components/layout/PageHeroPremium';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import Button from '@/components/ui/Button';
import {
  adevipaGalleryImages,
  adevipaInterviewPlaceholders,
  adevipaNavSections,
  adevipaPartenairesPlaceholders,
  adevipaPresidentsPlaceholders,
  adevipaRealisationsPlaceholders,
} from '@/lib/adevipa';

export const metadata: Metadata = {
  title: 'ADEVIPA | Développement | Bapa',
  description:
    'ADEVIPA — association pour le développement du Royaume de Bapa : présidence, projets, réalisations et partenaires.',
};

const scrollMt = 'scroll-mt-[calc(var(--navbar-offset)+5rem)]';

function SectionTitle({ id, kicker, title, subtitle }: { id: string; kicker: string; title: string; subtitle?: string }) {
  return (
    <header className="mb-6 border-l-[3px] border-forest/50 pl-5 md:mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-forest">{kicker}</p>
      <h2 id={id} className="font-heading mt-2 text-2xl font-bold text-brand md:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-sm leading-relaxed text-stone-500">{subtitle}</p>}
    </header>
  );
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

const filterLinkClass = (active: boolean) =>
  `flex w-full items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-all md:px-4 ${
    active
      ? 'border-forest/35 bg-white text-brand shadow-sm ring-1 ring-forest/15'
      : 'border-transparent text-stone-600 hover:border-stone-200/90 hover:bg-white/80'
  }`;

export default function AdevipaPage() {
  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="green" />

      <PageHeroPremium
        imageSrc="/images/musee-celebration-culturelle.png"
        imageClassName="object-cover object-center scale-105 select-none"
        label="Développement"
        title="ADEVIPA"
        description="Association pour le développement du Royaume de Bapa — santé, éducation, patrimoine et projets structurants au service du territoire."
        descriptionClassName="mx-auto max-w-2xl text-lg leading-relaxed text-white/88 md:mx-0"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Développement', href: '/developpement/adevipa' },
          { label: 'ADEVIPA' },
        ]}
      >
        <dl className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3 sm:gap-4 md:mx-0 md:max-w-xl">
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-lg font-bold text-gold-light">4</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Axes d&apos;action
            </dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-sm font-bold leading-tight text-gold-light">Chefferie</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Partenaire clé
            </dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-sm font-bold leading-tight text-gold-light">Diaspora</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Solidarité
            </dd>
          </div>
        </dl>

        <nav
          aria-label="Sections de la page"
          className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2 border-t border-white/15 pt-8 md:mx-0 md:justify-start"
        >
          {adevipaNavSections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white/95 backdrop-blur-sm transition-colors hover:border-gold-light/45 hover:bg-white/15"
            >
              {label}
            </a>
          ))}
        </nav>
      </PageHeroPremium>

      <section
        aria-label="ADEVIPA en images"
        className="relative z-[1] -mt-5 mx-auto max-w-6xl px-4 sm:px-6 lg:-mt-8 lg:px-10"
      >
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {adevipaGalleryImages.map(({ src, alt, caption }) => (
            <figure
              key={src}
              className="overflow-hidden rounded-xl shadow-md ring-1 ring-stone-200/90 sm:rounded-2xl"
            >
              <div className="relative aspect-[4/3] w-full bg-stone-200">
                <Image src={src} alt={alt} fill className="object-cover object-center" sizes="33vw" />
              </div>
              <figcaption className="border-t border-stone-100 bg-white/95 px-2 py-1.5 text-center text-[11px] font-medium text-stone-600 sm:text-xs">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <main className="relative z-[1] mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-10">
        <div className="lg:grid lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-x-10 xl:grid-cols-[minmax(0,17rem)_1fr] xl:gap-x-12">
          <aside className="mb-8 lg:sticky lg:top-[calc(var(--navbar-offset)+1rem)] lg:mb-0 lg:self-start">
            <div className="rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm ring-1 ring-stone-100/60 md:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Sur cette page</p>
              <nav aria-label="Navigation des sections" className="mt-4 hidden space-y-1 lg:block">
                {adevipaNavSections.map(({ id, label, icon }) => (
                  <a key={id} href={`#${id}`} className={filterLinkClass(false)}>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-forest/10 text-forest">
                      <AdevipaNavIcon id={icon} />
                    </span>
                    <span>{label}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-5 border-t border-stone-100 pt-4">
                <p className="text-[10px] font-bold uppercase tracking-wide text-stone-500">Pôles</p>
                <div className="mt-2 flex flex-col gap-2">
                  <Button href="/developpement/adevipa/sante" variant="ghost" size="sm" className="justify-start">
                    Santé →
                  </Button>
                  <Button href="/developpement/adevipa/education" variant="ghost" size="sm" className="justify-start">
                    Éducation →
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-10 md:space-y-12">
            <SectionPanel id="a-propos" variant="cream">
              <SectionTitle
                id="a-propos-title"
                kicker="Association"
                title="À propos de l'ADEVIPA"
                subtitle="Appui au développement du Royaume de Bapa."
              />
              <div className="space-y-4 text-[1.0625rem] leading-[1.88] text-stone-700">
                <p>
                  <strong className="text-brand">ADEVIPA</strong> regroupe une dynamique associative tournée vers la
                  santé, l&apos;éducation, le patrimoine et les projets structurants. Elle travaille en lien avec la{' '}
                  <strong className="text-brand">chefferie traditionnelle</strong>, les habitants et les partenaires
                  pour prioriser les besoins du territoire et suivre les réalisations dans la durée.
                </p>
                <p className="rounded-xl border border-stone-200/70 bg-white/70 px-4 py-3 text-sm text-stone-600">
                  Ce contenu d&apos;introduction sera affiné par le bureau de l&apos;association (missions officielles,
                  statuts, contact).
                </p>
              </div>
            </SectionPanel>

            <SectionPanel id="presidents" variant="cream">
              <SectionTitle
                id="presidents-title"
                kicker="Gouvernance"
                title="Portrait des présidents successifs"
                subtitle="Photographie officielle et biographie par mandat — à compléter."
              />
              <ul className="grid gap-5 sm:grid-cols-2">
                {adevipaPresidentsPlaceholders.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-4 rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm ring-1 ring-stone-100/80 transition-shadow hover:shadow-md"
                  >
                    <div className="relative size-[5.5rem] shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-forest/20 to-brand/15 ring-2 ring-stone-200/80">
                      <Image
                        src="/images/hero-slide-cortege-traditionnel.png"
                        alt=""
                        fill
                        className="object-cover opacity-40"
                        sizes="88px"
                      />
                      <span className="absolute inset-0 flex items-center justify-center font-heading text-xl font-bold text-brand/50">
                        {i + 1}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-heading text-lg font-bold text-brand">{p.name}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-gold-dark">{p.mandat}</p>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{p.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </SectionPanel>

            <SectionPanel id="interview">
              <SectionTitle
                id="interview-title"
                kicker="Parole du président"
                title="Interview du président actuel"
                subtitle="Format Q/R — à remplacer par l'entretien validé."
              />
              <div className="space-y-8">
                {adevipaInterviewPlaceholders.map((item, i) => (
                  <blockquote
                    key={i}
                    className="relative rounded-2xl border border-stone-100 bg-cream/40 px-5 py-5 pl-6 sm:px-7 sm:py-6"
                  >
                    <span
                      className="font-heading absolute -left-1 top-3 text-4xl leading-none text-forest/20"
                      aria-hidden
                    >
                      “
                    </span>
                    <p className="relative font-semibold text-brand">{item.question}</p>
                    <p className="relative mt-3 border-l-2 border-forest/30 pl-4 text-sm leading-relaxed text-stone-600 sm:text-base">
                      {item.answer}
                    </p>
                  </blockquote>
                ))}
              </div>
            </SectionPanel>

            <SectionPanel id="realisations" variant="cream">
              <SectionTitle
                id="realisations-title"
                kicker="Actions"
                title="Réalisations"
                subtitle="Axes d'intervention — à détailler avec dates et partenaires."
              />
              <ul className="grid gap-5 sm:grid-cols-2">
                {adevipaRealisationsPlaceholders.map((r) => {
                  const inner = (
                    <>
                      <p className="font-heading text-lg font-bold text-forest">{r.titre}</p>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{r.detail}</p>
                      {'href' in r && r.href && (
                        <span className="mt-4 inline-flex text-xs font-bold uppercase tracking-wide text-gold-dark group-hover:text-brand">
                          En savoir plus →
                        </span>
                      )}
                    </>
                  );

                  const className =
                    'group rounded-2xl border border-forest/15 bg-white p-5 shadow-sm ring-1 ring-stone-100/60 transition-all hover:border-forest/30 hover:shadow-md';

                  return (
                    <li key={r.titre}>
                      {'href' in r && r.href ? (
                        <Link href={r.href} className={`block h-full ${className}`}>
                          {inner}
                        </Link>
                      ) : (
                        <div className={className}>{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </SectionPanel>

            <SectionPanel id="partenaires">
              <SectionTitle
                id="partenaires-title"
                kicker="Réseau"
                title="Partenaires"
                subtitle="Synergie avec la chefferie, les autorités locales et la diaspora."
              />
              <ul className="grid gap-4 sm:grid-cols-2">
                {adevipaPartenairesPlaceholders.map((p) => (
                  <li
                    key={p.name}
                    className="flex flex-col rounded-2xl border border-stone-200/80 bg-gradient-to-br from-white to-cream/50 px-5 py-6 text-center shadow-sm ring-1 ring-stone-100/60 sm:text-left"
                  >
                    <span
                      className="mx-auto mb-3 flex size-11 items-center justify-center rounded-xl bg-forest/10 text-forest sm:mx-0"
                      aria-hidden
                    >
                      <AdevipaNavIcon id="partners" className="size-5" />
                    </span>
                    <p className="font-heading font-bold text-brand">{p.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{p.type}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-xl border border-gold-dark/20 bg-gold/[0.06] px-5 py-4 text-center text-sm text-stone-600 sm:text-left">
                Vous souhaitez devenir partenaire ?{' '}
                <Link href="/contacts" className="font-semibold text-gold-dark hover:text-brand hover:underline">
                  Contactez le secrétariat
                </Link>
                {' '}ou consultez la page{' '}
                <Link
                  href="/communaute/partenaires"
                  className="font-semibold text-gold-dark hover:text-brand hover:underline"
                >
                  Partenaires du Royaume
                </Link>
                .
              </p>
            </SectionPanel>

            <aside className="overflow-hidden rounded-3xl border border-forest/25 bg-gradient-to-br from-forest/[0.08] via-white to-brand/[0.05] p-6 shadow-sm sm:p-8 md:p-10">
              <div className="mx-auto max-w-lg text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-forest">Soutenir ADEVIPA</p>
                <h2 className="font-heading mt-2 text-2xl font-bold text-brand md:text-[1.65rem]">
                  Rejoindre la dynamique de développement
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Diaspora, partenaires et habitants : contactez-nous pour contribuer aux chantiers santé, éducation et
                  patrimoine.
                </p>
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
                  <Button href="/contacts" size="md">
                    Nous contacter
                  </Button>
                  <Button href="/communaute/partenaires" variant="secondary" size="md">
                    Nos partenaires
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <PageFooterNav
            links={[
              { href: '/developpement/adevipa/sante', label: 'Santé' },
              { href: '/developpement/adevipa/education', label: 'Éducation' },
              { href: '/', label: '← Accueil' },
            ]}
          />
        </div>
      </main>
    </PageShell>
  );
}
