import type { Metadata } from 'next';
import Image from 'next/image';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import { saveursDuPalais, SAVEURS_DU_PALAIS_IMAGE } from '@/lib/saveurs-du-palais';

export const metadata: Metadata = {
  title: 'Les Saveurs du Palais | Tourisme | Bapa',
  description:
    "Les Saveurs du Palais — espace SAVOURER de la visite guidée à Bapa : mets traditionnels, panoramas et infos pratiques.",
};

function IconClock({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 2" />
    </svg>
  );
}

function IconPhone({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 4h3l2 5-2.2 1.4a12 12 0 0 0 5.3 5.3L14 13.5l5 2v3a1.5 1.5 0 0 1-1.5 1.5A15 15 0 0 1 4 6.5 1.5 1.5 0 0 1 5.5 5Z"
      />
    </svg>
  );
}

export default function SaveursDuPalaisPage() {
  const { title, tagline, quote, description, practical } = saveursDuPalais;

  return (
    <PageShell>
      <header className="relative isolate overflow-hidden border-b border-stone-200/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={SAVEURS_DU_PALAIS_IMAGE}
            alt=""
            fill
            className="object-cover object-center scale-105"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(61,34,16,0.55)_0%,rgba(45,28,14,0.4)_45%,rgba(14,9,6,0.88)_100%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.05]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-4 pb-14 page-top page-top-md md:pb-18">
          <span className="section-label mb-6 inline-flex border-white/20 bg-white/10 text-gold-light backdrop-blur-sm">
            {tagline}
          </span>
          <h1 className="font-heading max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
        </div>
      </header>

      <div className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
            <figure className="order-1 overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(61,34,16,0.35)] ring-1 ring-stone-200/90 lg:order-2 lg:sticky lg:top-[calc(var(--announcement-bar)+7rem)]">
              <div className="relative aspect-[4/3] w-full bg-stone-200">
                <Image
                  src={SAVEURS_DU_PALAIS_IMAGE}
                  alt="Les Saveurs du Palais — bâtiment patrimonial du restaurant à Bapa"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                />
              </div>
              <figcaption className="border-t border-stone-200/80 bg-white/90 px-5 py-3 text-center text-xs text-stone-500">
                Restaurant patrimonial — visite guidée du Royaume de Bapa
              </figcaption>
            </figure>

            <div className="order-2 space-y-8 lg:order-1">
              <blockquote className="relative rounded-2xl border border-gold-dark/25 bg-gradient-to-br from-white to-cream-dark/50 p-6 shadow-sm ring-1 ring-stone-100 md:p-8">
                <span
                  className="font-heading pointer-events-none absolute -top-3 left-5 text-5xl leading-none text-gold-dark/25"
                  aria-hidden
                >
                  «
                </span>
                <p className="relative font-heading text-lg italic leading-relaxed text-brand md:text-xl">
                  {quote.text}
                </p>
                <footer className="mt-4 text-sm font-semibold text-gold-dark">— {quote.author}</footer>
              </blockquote>

              <div className="prose-bapa rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100 md:p-8">
                <p className="m-0 text-[1.0625rem] leading-[1.88] text-stone-700">{description}</p>
              </div>
            </div>
          </div>

          <section aria-labelledby="infos-pratiques" className="mt-14 md:mt-16">
            <div className="mb-8 text-center md:text-left">
              <h2
                id="infos-pratiques"
                className="font-heading text-2xl font-bold text-brand md:text-3xl"
              >
                Infos pratiques
              </h2>
              <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-gold-dark to-transparent md:mx-0" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <IconClock />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-brand">Horaires</h3>
                </div>
                <p className="leading-relaxed text-stone-600">{practical.hours}</p>
              </div>

              <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gold-dark/15 text-gold-dark">
                    <IconPhone />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-brand">Contacts</h3>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {practical.phones.map((phone) => (
                    <li key={phone.tel}>
                      <a
                        href={`tel:${phone.tel}`}
                        className="inline-flex w-full items-center justify-between rounded-xl border border-stone-200/90 bg-cream/40 px-4 py-3 text-sm font-semibold text-brand transition-colors hover:border-gold-dark/40 hover:bg-cream hover:text-gold-dark sm:w-auto sm:min-w-[12rem]"
                      >
                        {phone.display}
                        <span className="text-gold-dark" aria-hidden>
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <PageFooterNav
            links={[
              { href: '/tourisme/introductionenjeux', label: '← Introduction et Enjeux' },
              { href: '/tourisme/visitez-bapa', label: 'Visitez Bapa' },
              { href: '/tourisme/musee', label: 'Musée Case Patrimoniale' },
            ]}
          />
        </div>
      </div>
    </PageShell>
  );
}
