import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeroPremium from '@/components/layout/PageHeroPremium';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import Button from '@/components/ui/Button';
import {
  adminGalleryImages,
  adminTerritoryFacts,
  WIKI_BAPA_URL,
} from '@/lib/royaume-administration';

export const metadata: Metadata = {
  title: 'Administration | Le Royaume | Bapa',
  description:
    'Cadre administratif du Royaume de Bapa : région de l’Ouest, Hauts-Plateaux, commune de Bangou.',
};

function SectionTitle({ id, kicker, title, subtitle }: { id: string; kicker: string; title: string; subtitle?: string }) {
  return (
    <header className="mb-8 border-l-[3px] border-gold-dark/50 pl-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">{kicker}</p>
      <h2 id={id} className="font-heading mt-2 text-2xl font-bold text-brand md:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-sm leading-relaxed text-stone-500">{subtitle}</p>}
    </header>
  );
}

export default function RoyaumeAdministrationPage() {
  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="warm" />

      <PageHeroPremium
        imageSrc="/images/hero-slide-architecture-patrimoine.png"
        imageClassName="object-cover object-[center_42%] scale-105 select-none"
        label="Le Royaume"
        title="Administration"
        description="État camerounais et chefferie traditionnelle — cadre territorial du Royaume de Bapa dans les Hauts-Plateaux."
        descriptionClassName="mx-auto max-w-2xl text-lg leading-relaxed text-white/88 md:mx-0"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Le Royaume', href: '/royaume/mot-du-roi' },
          { label: 'Administration' },
        ]}
      >
        <dl className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3 sm:gap-4 md:mx-0 md:max-w-xl">
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-lg font-bold text-gold-light">Ouest</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">Région</dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-sm font-bold leading-tight text-gold-light">Hauts-Plateaux</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Département
            </dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-lg font-bold text-gold-light">Bangou</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">Commune</dd>
          </div>
        </dl>
      </PageHeroPremium>

      <section
        aria-label="Le Royaume en images"
        className="relative z-[1] -mt-5 mx-auto max-w-6xl px-4 sm:px-6 lg:-mt-8 lg:px-10"
      >
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {adminGalleryImages.map(({ src, alt, caption }) => (
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

      <main className="relative z-[1] mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(100%,44rem)] -translate-x-1/2 bg-gradient-to-b from-brand/[0.05] to-transparent blur-3xl"
          aria-hidden
        />

        <div className="relative mb-12 rounded-2xl border border-white/80 bg-white/80 px-6 py-8 shadow-[0_16px_48px_-28px_rgba(89,52,20,0.22)] backdrop-blur-[2px] md:px-9 md:py-10">
          <p className="mx-auto max-w-3xl text-center text-[1.0625rem] leading-[1.88] text-stone-700 md:text-left">
            Le Royaume de Bapa s&apos;inscrit dans le découpage administratif de la{' '}
            <strong className="text-brand">république du Cameroun</strong>, tout en conservant une{' '}
            <strong className="text-brand">chefferie supérieure</strong> et des institutions coutumières
            au service du territoire et de sa diaspora.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <section className="lg:col-span-7" aria-labelledby="cadre-admin">
            <SectionTitle
              id="cadre-admin"
              kicker="Territoire"
              title="Cadre administratif"
              subtitle="Repères géographiques et administratifs (synthèse encyclopédique)."
            />

            <dl className="grid gap-4 sm:grid-cols-2">
              {adminTerritoryFacts.map((fact) => (
                <div
                  key={fact.id}
                  className={`rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm ring-1 ring-stone-100/60 transition-colors hover:border-gold-dark/25 hover:shadow-md ${
                    'wide' in fact && fact.wide ? 'sm:col-span-2' : ''
                  }`}
                >
                  <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">
                    {fact.label}
                  </dt>
                  <dd className="font-heading mt-2 text-xl font-semibold text-brand">{fact.value}</dd>
                  {'detail' in fact && fact.detail && (
                    <p className="mt-1 text-sm text-stone-500">{fact.detail}</p>
                  )}
                </div>
              ))}
            </dl>
          </section>

          <section className="lg:col-span-5" aria-labelledby="chefferie-projets">
            <div className="rounded-3xl border border-stone-200/80 bg-gradient-to-br from-cream/90 via-white to-forest/[0.04] p-6 shadow-sm ring-1 ring-stone-100/80 sm:p-8 lg:sticky lg:top-[calc(2.5rem+8rem)]">
              <SectionTitle
                id="chefferie-projets"
                kicker="Institutions"
                title="Chefferie & projets"
                subtitle="Maillage entre autorité coutumière et initiatives locales."
              />

              <div className="space-y-5 text-[1.0625rem] leading-[1.88] text-stone-700">
                <p>
                  La vie du Royaume de Bapa s&apos;appuie sur des structures culturelles et de
                  développement auxquelles participe la chefferie. L&apos;organisation fait référence à
                  la <strong className="text-brand">coordination générale assurée par le chef supérieur</strong>
                  , le musée case patrimoniale servant de pôle au sein d&apos;
                  <strong className="text-brand"> ADEVIPA</strong> et s&apos;inscrivant dans une section de{' '}
                  <strong className="text-brand">PA&apos;CTA</strong>, association à caractère culturel et
                  touristique.
                </p>
                <p className="rounded-xl border border-stone-200/70 bg-white/70 px-4 py-3 text-sm leading-relaxed text-stone-600">
                  Ces éléments décrivent le lien entre autorité coutumière et valorisation du patrimoine ;
                  ils ne remplacent pas les textes officiels de l&apos;État ou du conseil municipal.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/royaume/chefferie" variant="secondary" size="sm">
                  La Chefferie
                </Button>
                <Button href="/developpement/adevipa" variant="ghost" size="sm">
                  ADEVIPA →
                </Button>
                <Button href="/tourisme/musee" variant="ghost" size="sm">
                  Musée →
                </Button>
              </div>
            </div>
          </section>
        </div>

        <aside className="mt-12 overflow-hidden rounded-2xl border border-stone-200/80 bg-white/90 p-6 shadow-sm md:p-8">
          <h2 className="font-heading text-lg font-bold text-brand">Sources</h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Les informations administratives et le passage sur le musée, ADEVIPA et PA&apos;CTA sont
            synthétisés à partir de l&apos;article{' '}
            <a
              href={WIKI_BAPA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-dark underline-offset-2 hover:text-brand hover:underline"
            >
              «&nbsp;Bapa&nbsp;»
            </a>{' '}
            sur Wikipédia en français. Wikipédia est une marque déposée de la Wikimedia Foundation.
          </p>
        </aside>

        <div className="mt-16 md:mt-20">
          <PageFooterNav
            links={[
              { href: '/royaume/chefferie', label: 'La Chefferie' },
              { href: '/royaume/histoire', label: 'Histoire & Dynasties' },
              { href: '/royaume/mot-du-roi', label: '← Mot du Roi' },
            ]}
          />
        </div>
      </main>
    </PageShell>
  );
}
