import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeroPremium from '@/components/layout/PageHeroPremium';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import ChevronRight from '@/components/ui/ChevronRight';

export const metadata: Metadata = {
  title: 'Administration | Le Royaume | Bapa',
  description:
    'Cadre administratif de Bapa : région de l’Ouest, Hauts-Plateaux, commune de Bangou. Données issues de sources publiques.',
};

const wikiArticleUrl = 'https://fr.wikipedia.org/wiki/Bapa';

const headerImageSrc = '/images/hero-slide-architecture-patrimoine.png';

const galleryImages = [
  {
    src: '/images/mot-du-roi-header-palais.png',
    alt: 'Architecture traditionnelle du site royal à Bapa, toits et allée d’accès',
    caption: 'Site royal — paysage architectural du village',
  },
  {
    src: '/images/hero-slide-cortege-traditionnel.png',
    alt: 'Cortège traditionnel en habits royaux à Bapa',
    caption: 'Cortège et traditions royales',
  },
  {
    src: '/images/festival-ngouook-procession.png',
    alt: 'Procession lors du festival Pa’a Ngouo’ok à Bapa',
    caption: 'Festival Pa’a Ngouo’ok — vie collective',
  },
] as const;

export default function RoyaumeAdministrationPage() {
  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="warm" />

      <header className="relative isolate z-[1] overflow-hidden px-4 pb-14 page-top page-top-md sm:px-6 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={headerImageSrc}
            alt=""
            fill
            priority
            className="scale-[1.03] object-cover object-[center_42%] select-none saturate-[1.05]"
            sizes="100vw"
            aria-hidden
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(108deg,rgba(61,34,16,0.44)_0%,transparent_44%,rgba(89,52,20,0.34)_94%)] mix-blend-soft-light"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_94%_56%_at_50%_12%,rgba(0,0,0,0.36),transparent_58%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(168deg,rgba(14,9,6,0.55)_0%,rgba(45,28,14,0.3)_40%,rgba(8,5,3,0.78)_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_102%_96%_at_50%_52%,transparent_38%,rgba(0,0,0,0.36)_100%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.055]" aria-hidden />

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[min(56%,24rem)] bg-[linear-gradient(to_bottom,transparent_0%,rgba(242,240,233,0.52)_42%,#f2f0e9_88%,#f2f0e9_100%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <nav aria-label="Fil d'Ariane" className="mb-8 flex justify-center md:justify-start">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-[12px] text-white/85 md:text-[13px]">
              <li>
                <Link
                  href="/"
                  className="rounded-md px-1.5 py-1 transition-colors hover:text-gold-light hover:underline"
                >
                  Accueil
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="text-gold-light/55" />
                <span className="rounded-md px-1.5 py-1 font-medium text-gold-light/95">Le Royaume</span>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="text-gold-light/55" />
                <span className="px-1.5 py-1 font-semibold text-white">Administration</span>
              </li>
            </ol>
          </nav>

          <div className="text-center md:text-left">
            <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-light/40 bg-brand-dark/48 px-5 py-2.5 text-[10px] font-bold tracking-[0.22em] text-gold-light uppercase shadow-[0_10px_36px_-14px_rgba(0,0,0,0.55)] backdrop-blur-md mx-auto md:mx-0">
              <span className="size-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_10px_rgba(212,148,62,0.7)]" aria-hidden />
              Territoire &amp; institutions
            </p>
            <h1
              className="font-heading mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.45)] md:text-5xl lg:text-[3.05rem]"
              
            >
              Administration
            </h1>
            <div className="mx-auto mb-7 flex items-center justify-center gap-4 md:mx-0 md:justify-start" aria-hidden>
              <span className="h-px w-[4.25rem] shrink-0 bg-gradient-to-r from-transparent via-gold-light/85 to-gold-light sm:w-24 md:w-28" />
              <span className="flex items-center gap-2">
                <span className="h-px w-4 bg-gold-dark/55 sm:w-5" />
                <span className="size-2 shrink-0 rotate-45 rounded-[2px] bg-gold-light shadow-sm ring-2 ring-white/30" />
                <span className="h-px w-4 bg-gold-dark/55 sm:w-5" />
              </span>
              <span className="h-px w-[4.25rem] shrink-0 bg-gradient-to-l from-transparent via-gold-light/85 to-gold-light sm:w-24 md:w-28" />
            </div>
            <p
              className="font-heading mx-auto max-w-2xl text-[1.0625rem] leading-relaxed text-white/90 md:mx-0"
              
            >
              État camerounais et chefferie traditionnelle à Bapa — cadre territorial et données encyclopédiques ci-dessous
              (Wikipédia).
            </p>
          </div>
        </div>
      </header>

      <section
        aria-label="Illustrations du territoire et du patrimoine"
        className="relative z-[1] border-b border-stone-200/45 bg-[#f2f0e9]/95 px-4 py-10 md:py-14"
      >
        <div className="mx-auto max-w-5xl">
          <h2
            className="font-heading mb-2 text-center text-xl font-bold text-brand md:text-2xl"
            
          >
            Le Royaume en images
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-stone-600">
            Patrimoine architectural, vie royale et grand rassemblement du village.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {galleryImages.map(({ src, alt, caption }) => (
              <figure
                key={src}
                className="overflow-hidden rounded-xl border border-stone-200/80 bg-white shadow-sm ring-1 ring-stone-200/40"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image src={src} alt={alt} fill className="object-cover object-center" sizes="(max-width:640px) 100vw, 50vw" />
                </div>
                <figcaption className="border-t border-stone-100 px-4 py-3 text-center text-sm text-stone-600">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-[1] mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <section className="mb-14" aria-labelledby="cadre-admin">
          <h2
            id="cadre-admin"
            className="font-heading mb-6 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Cadre administratif
          </h2>
          <p className="mb-8 text-stone-600">
            D&apos;après l&apos;article encyclopédique consacré au village, Bapa est situé dans le département des{' '}
            <strong>Hauts-Plateaux</strong>, au sein de la <strong>région de l&apos;Ouest</strong> (Cameroun), et fait
            partie de la <strong>commune de Bangou</strong>.
          </p>

          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-stone-200/80 bg-white/90 px-5 py-4 shadow-sm">
              <dt className="text-xs font-bold uppercase tracking-wider text-gold-dark">Pays</dt>
              <dd className="mt-1 text-lg font-semibold text-brand">Cameroun</dd>
            </div>
            <div className="rounded-xl border border-stone-200/80 bg-white/90 px-5 py-4 shadow-sm">
              <dt className="text-xs font-bold uppercase tracking-wider text-gold-dark">Région</dt>
              <dd className="mt-1 text-lg font-semibold text-brand">Ouest</dd>
            </div>
            <div className="rounded-xl border border-stone-200/80 bg-white/90 px-5 py-4 shadow-sm">
              <dt className="text-xs font-bold uppercase tracking-wider text-gold-dark">Département</dt>
              <dd className="mt-1 text-lg font-semibold text-brand">Hauts-Plateaux</dd>
            </div>
            <div className="rounded-xl border border-stone-200/80 bg-white/90 px-5 py-4 shadow-sm">
              <dt className="text-xs font-bold uppercase tracking-wider text-gold-dark">Commune</dt>
              <dd className="mt-1 text-lg font-semibold text-brand">Bangou</dd>
            </div>
            <div className="rounded-xl border border-stone-200/80 bg-white/90 px-5 py-4 shadow-sm sm:col-span-2">
              <dt className="text-xs font-bold uppercase tracking-wider text-gold-dark">Population recensée</dt>
              <dd className="mt-1 text-lg font-semibold text-brand">
                2&nbsp;518 habitants{' '}
                <span className="block text-sm font-normal text-stone-500">(3ᵉ RGPH, 2005 — chiffre cité sur Wikipédia)</span>
              </dd>
            </div>
            <div className="rounded-xl border border-stone-200/80 bg-white/90 px-5 py-4 shadow-sm sm:col-span-2">
              <dt className="text-xs font-bold uppercase tracking-wider text-gold-dark">Coordonnées géographiques</dt>
              <dd className="mt-1 font-medium text-brand">5° 17′ 20″ N, 10° 20′ 14″ E</dd>
            </div>
          </dl>
        </section>

        <section className="mb-14" aria-labelledby="chefferie-projets">
          <h2
            id="chefferie-projets"
            className="font-heading mb-6 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Chefferie et projets locaux
          </h2>
          <div className="prose-bapa max-w-none space-y-5 text-stone-600">
            <p>
              La vie du village inclut des institutions culturelles et de développement auxquelles participe la chefferie.
              Selon la description donnée dans l&apos;article Wikipédia sur Bapa — en particulier à propos du musée case
              patrimoniale —, l&apos;organisation fait référence à la{' '}
              <strong>coordination générale assurée par le chef supérieur</strong>, le musée servant de pôle au sein
              d&apos;<strong>ADEVIPA&apos;A</strong> (appui au développement du village) et s&apos;inscrivant dans une
              section de <strong>PA&apos;CTA</strong>, présentée comme une association à caractère culturel et touristique.
            </p>
            <p className="text-sm text-stone-500">
              Ces précisions décrivent un maillage entre autorité coutumière et initiatives de valorisation du patrimoine ;
              elles ne remplacent pas les textes officiels de l&apos;administration d&apos;État ou du conseil municipal.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-stone-200/80 bg-white/80 px-5 py-6 text-sm text-stone-600 md:px-7">
          <h2 className="mb-3 text-base font-bold text-brand">Sources</h2>
          <p>
            Les informations administratives (région, département, commune, population 2005, coordonnées) et le passage sur
            le fonctionnement du musée relatif au chef supérieur, ADEVIPA&apos;A et PA&apos;CTA sont synthétisées à partir
            de l&apos;article{' '}
            <a
              href={wikiArticleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-dark underline-offset-2 hover:text-brand hover:underline"
            >
              «&nbsp;Bapa&nbsp;»
            </a>{' '}
            sur <span className="whitespace-nowrap">Wikipédia en français</span> (consultation des contenus disponibles en
            ligne). Wikipédia est une marque déposée de la Wikimedia Foundation.
          </p>
        </section>

        <nav className="mt-14 flex flex-col items-center gap-4 border-t border-stone-200/80 pt-10 text-center sm:flex-row sm:justify-center sm:gap-8">
          <Link
            href="/royaume/chefferie"
            className="text-sm font-semibold text-gold-dark underline-offset-4 transition-colors hover:text-brand hover:underline"
          >
            La Chefferie
          </Link>
          <Link
            href="/royaume/histoire"
            className="text-sm font-semibold text-gold-dark underline-offset-4 transition-colors hover:text-brand hover:underline"
          >
            Histoire &amp; Dynasties
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-gold-dark underline-offset-4 transition-colors hover:text-brand hover:underline"
          >
            Retour à l&apos;accueil
          </Link>
        </nav>
      </div>
    </PageShell>
  );
}
