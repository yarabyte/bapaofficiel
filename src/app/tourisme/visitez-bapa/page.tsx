import type { Metadata } from 'next';
import Image from 'next/image';
import VisitezBapaContent from '@/components/VisitezBapaContent';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import VisitezBapaIcon from '@/components/visitez-bapa/VisitezBapaIcon';
import { bapaGaleriePhotos, carteCredits, visitezBapaNavSections } from '@/lib/visitez-bapa';

export const metadata: Metadata = {
  title: 'Visitez Bapa | Tourisme | Bapa',
  description:
    'Carte touristique du Royaume Bapa : localisation, quartiers, sites patrimoniaux et paysages des Hauts-Plateaux.',
};

const heroStats = [
  { value: '6', label: 'Quartiers du royaume' },
  { value: carteCredits.version, label: 'Carte officielle' },
  { value: 'Hauts-Plateaux', label: 'Département' },
] as const;

export default function VisitezBapaPage() {
  const previewPhotos = bapaGaleriePhotos.slice(0, 4);

  return (
    <PageShell>
      <header className="relative isolate overflow-hidden border-b border-stone-200/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-slide-palais-bapa.png"
            alt=""
            fill
            className="object-cover object-[center_35%] scale-105"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(61,34,16,0.5)_0%,rgba(45,90,58,0.35)_40%,rgba(14,9,6,0.9)_100%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.05]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cream to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-4 pb-10 page-top page-top-md md:pb-14">
          <span className="section-label mb-6 inline-flex border-white/20 bg-white/10 text-gold-light backdrop-blur-sm">
            Carte touristique
          </span>
          <h1 className="font-heading max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-[3.25rem]">
            Visitez Bapa
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/88">
            Explorez le Royaume de Bapa — quartiers, patrimoine royal, sites naturels et légende
            paysagère de la carte officielle.
          </p>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
            {heroStats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm sm:px-4"
              >
                <dt className="font-heading text-lg font-bold text-gold-light sm:text-xl">{value}</dt>
                <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75 sm:text-xs">
                  {label}
                </dd>
              </div>
            ))}
          </dl>

          <nav
            aria-label="Sections de la page"
            className="mt-10 flex flex-wrap gap-2 border-t border-white/15 pt-8"
          >
            {visitezBapaNavSections.map(({ id, label, icon }) => (
              <a
                key={id}
                href={`#visitez-${id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white/95 backdrop-blur-sm transition-colors hover:border-gold-light/45 hover:bg-white/15"
              >
                <VisitezBapaIcon id={icon} className="size-3.5 text-gold-light" />
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        aria-label="Aperçu du territoire"
        className="relative z-[1] -mt-5 mx-auto max-w-6xl px-4 sm:px-6 lg:-mt-8 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {previewPhotos.map((photo, i) => (
            <figure
              key={photo.src}
              className={`overflow-hidden rounded-xl shadow-md ring-1 ring-stone-200/90 ${
                i === 0 ? 'col-span-2 row-span-2 sm:col-span-1 sm:row-span-1' : ''
              }`}
            >
              <div
                className={`relative w-full bg-stone-200 ${
                  i === 0 ? 'aspect-[16/10] sm:aspect-[4/3]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? '(max-width:640px) 100vw, 25vw' : '25vw'}
                />
              </div>
              <figcaption className="border-t border-stone-100 bg-white/95 px-2.5 py-1.5 text-center text-[11px] font-medium text-stone-600 sm:text-xs">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <VisitezBapaContent />

          <PageFooterNav
            links={[
              { href: '/tourisme/introductionenjeux', label: '← Enjeux' },
              { href: '/tourisme/musee', label: 'Musée Case Patrimoniale' },
              { href: '/tourisme/restaurant', label: 'Les Saveurs du Palais' },
            ]}
          />
        </div>
      </div>
    </PageShell>
  );
}
