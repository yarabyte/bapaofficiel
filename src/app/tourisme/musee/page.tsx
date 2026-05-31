import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import { museeCasePatrimoniale, museeGalleryImages } from '@/lib/musee-case-patrimoniale';

export const metadata: Metadata = {
  title: 'Musée Case Patrimoniale | Tourisme | Bapa',
  description:
    'Musée Case Patrimoniale de Bapa — thème Homme, Nature et Croyances : grotte aux 07 espaces, bibliothèque et salle multimédia.',
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

function IconWhatsApp({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.239-.375a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function MuseePage() {
  const { title, tagline, intro, pillars, experience, facilities, practical } = museeCasePatrimoniale;
  const heroImage = museeGalleryImages[0];

  return (
    <PageShell>
      <header className="relative isolate overflow-hidden border-b border-stone-200/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={heroImage.src}
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
          <p className="mt-4 max-w-2xl text-lg text-white/88">
            Joyau architectural du Royaume de Bapa — visite guidée à travers la grotte aux{' '}
            <span className="font-semibold text-gold-light">07 espaces</span>.
          </p>
        </div>
      </header>

      <section
        aria-label="Aperçu du musée en images"
        className="relative z-[1] -mt-4 mx-auto max-w-6xl px-4 sm:px-6 lg:-mt-6 lg:px-8"
      >
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {museeGalleryImages.map((item, i) => (
            <figure
              key={item.src}
              className={`overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200/90 ${
                i === 0 ? 'sm:col-span-1' : ''
              }`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src={item.src} alt={item.alt} fill className="object-cover object-center" sizes="33vw" />
              </div>
              <figcaption className="border-t border-stone-100 bg-white/95 px-3 py-2 text-center text-xs text-stone-600">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
          <div className="space-y-10">
            <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100 md:p-8">
              <p className="text-[1.0625rem] leading-[1.88] text-stone-700">{intro}</p>
              <ol className="mt-6 space-y-3">
                {pillars.map((pillar, i) => (
                  <li
                    key={pillar}
                    className="flex gap-4 rounded-xl border border-gold-dark/15 bg-gradient-to-r from-cream/80 to-white px-4 py-3"
                  >
                    <span className="font-heading flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-1 font-semibold leading-relaxed text-brand">{pillar}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-brand/15 bg-gradient-to-br from-brand/5 via-white to-cream-dark/40 p-6 shadow-sm md:p-8">
              <h2 className="font-heading mb-3 text-xl font-bold text-brand md:text-2xl">{experience.question}</h2>
              <p className="text-[1.0625rem] leading-relaxed text-stone-700">{experience.answer}</p>
            </div>

            <p className="rounded-2xl border border-stone-200/80 bg-white/95 px-6 py-5 text-[1.0625rem] leading-[1.85] text-stone-700 shadow-sm ring-1 ring-stone-100 md:px-8">
              {facilities}
            </p>
          </div>

          <section aria-labelledby="infos-pratiques" className="mt-14 md:mt-16">
            <div className="mb-8 text-center md:text-left">
              <h2 id="infos-pratiques" className="font-heading text-2xl font-bold text-brand md:text-3xl">
                Infos pratiques
              </h2>
              <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-gold-dark to-transparent md:mx-0" />
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <IconClock />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-brand">Horaires</h3>
                </div>
                <p className="leading-relaxed text-stone-600">{practical.hours}</p>
              </div>

              <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100 md:col-span-1">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gold-dark/15 text-gold-dark">
                    <IconPhone />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-brand">Contacts utiles</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {practical.phones.map((phone) => (
                    <li key={phone.tel}>
                      <a
                        href={`tel:${phone.tel}`}
                        className="inline-flex w-full items-center justify-between rounded-xl border border-stone-200/90 bg-cream/40 px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:border-gold-dark/40 hover:bg-cream"
                      >
                        +237 {phone.display}
                        <span className="text-gold-dark" aria-hidden>
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-forest/15 text-forest">
                    <IconWhatsApp />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-brand">WhatsApp</h3>
                </div>
                <a
                  href={`https://wa.me/${practical.whatsapp.tel.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-xl border border-stone-200/90 bg-cream/40 px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:border-gold-dark/40 hover:bg-cream"
                >
                  +237 {practical.whatsapp.display}
                  <span className="text-gold-dark" aria-hidden>
                    →
                  </span>
                </a>
              </div>
            </div>
          </section>

          <div className="mt-12 rounded-2xl border border-stone-200/80 bg-white/90 p-6 text-center shadow-sm md:p-8">
            <p className="mb-4 text-stone-600">Photos, vidéos et archives du musée</p>
            <Link
              href="/mediatheque"
              className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Explorer la médiathèque →
            </Link>
          </div>

          <PageFooterNav
            links={[
              { href: '/tourisme/introductionenjeux', label: '← Introduction et Enjeux' },
              { href: '/tourisme/restaurant', label: 'Les Saveurs du Palais' },
              { href: '/tourisme/visitez-bapa', label: 'Visitez Bapa' },
            ]}
          />
        </div>
      </div>
    </PageShell>
  );
}
