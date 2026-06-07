import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import MuseeBoutiqueFocus from '@/components/musee/MuseeBoutiqueFocus';
import MuseeEspaceIcon from '@/components/musee/MuseeEspaceIcon';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import {
  museeCasePatrimoniale,
  museeEquipe,
  museeEspaces,
  museeGalleryImages,
  museeNavSections,
} from '@/lib/musee-case-patrimoniale';

export const metadata: Metadata = {
  title: 'Musée Case Patrimoniale | Tourisme | Bapa',
  description:
    'Musée Case Patrimoniale de Bapa — thème Homme, Nature et Croyances : grotte aux 07 espaces, boutique, bibliothèque et salle multimédia.',
};

const scrollMt = 'scroll-mt-[calc(var(--navbar-offset)+5rem)]';

const sidebarLinkClass =
  'flex w-full items-center gap-2 rounded-xl border border-transparent px-3.5 py-2.5 text-sm font-semibold text-stone-600 transition-all hover:border-stone-200/90 hover:bg-white/80';

function SectionTitle({ id, kicker, title, subtitle }: { id: string; kicker: string; title: string; subtitle?: string }) {
  return (
    <header className="mb-6 border-l-[3px] border-gold-dark/50 pl-5 md:mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">{kicker}</p>
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

function EmptySectionPlaceholder({ label }: { label: string }) {
  return (
    <p className="rounded-2xl border border-dashed border-stone-300/90 bg-cream/40 px-5 py-8 text-center text-sm leading-relaxed text-stone-500">
      {label} — contenu à compléter prochainement.
    </p>
  );
}

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
  const heroImage = museeGalleryImages[2];

  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="gold" />

      <header className="relative isolate z-[1] overflow-hidden border-b border-stone-200/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={heroImage.src}
            alt=""
            fill
            priority
            className="scale-[1.02] object-cover object-[center_42%]"
            sizes="100vw"
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(168deg,rgba(14,9,6,0.55)_0%,rgba(61,34,16,0.45)_45%,rgba(8,5,3,0.82)_100%)]"
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

          <nav
            aria-label="Sections du musée"
            className="mt-10 flex flex-wrap gap-2 border-t border-white/15 pt-8"
          >
            {museeNavSections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white/95 backdrop-blur-sm transition-colors hover:border-gold-light/45 hover:bg-white/15"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        aria-label="Aperçu du musée en images"
        className="relative z-[1] -mt-4 mx-auto max-w-6xl px-4 sm:px-6 lg:-mt-6 lg:px-8"
      >
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {museeGalleryImages.map((item) => (
            <figure key={item.src} className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200/90">
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

      <main className="relative z-[1] mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-10">
        <div className="lg:grid lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-x-10 xl:grid-cols-[minmax(0,17rem)_1fr] xl:gap-x-12">
          <aside className="mb-10 lg:sticky lg:top-[calc(var(--navbar-offset)+1rem)] lg:mb-0 lg:self-start">
            <div className="rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm ring-1 ring-stone-100/60 md:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Sur cette page</p>
              <nav aria-label="Navigation des sections" className="mt-4 hidden space-y-1 lg:block">
                {museeNavSections.map(({ id, label }) => (
                  <a key={id} href={`#${id}`} className={sidebarLinkClass}>
                    {label}
                  </a>
                ))}
              </nav>
              <nav aria-label="Navigation des sections" className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
                {museeNavSections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="inline-flex shrink-0 rounded-full border border-stone-200/90 bg-cream/50 px-3.5 py-2 text-xs font-semibold text-brand"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0 space-y-10 md:space-y-12">
            <SectionPanel id="description" variant="cream">
              <SectionTitle
                id="description-title"
                kicker="Patrimoine"
                title="Description du musée"
                subtitle="Homme, Nature et Croyances — boutique, espaces et équipements."
              />

              <div className="space-y-8">
                <p className="text-[1.0625rem] leading-[1.88] text-stone-700">{intro}</p>

                <ol className="space-y-3">
                  {pillars.map((pillar, i) => (
                    <li
                      key={pillar}
                      className="flex gap-4 rounded-xl border border-gold-dark/15 bg-white px-4 py-3"
                    >
                      <span className="font-heading flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="pt-1 font-semibold leading-relaxed text-brand">{pillar}</span>
                    </li>
                  ))}
                </ol>

                <div className="rounded-2xl border border-brand/15 bg-gradient-to-br from-brand/5 via-white to-cream-dark/40 p-6">
                  <h3 className="font-heading text-xl font-bold text-brand">{experience.question}</h3>
                  <p className="mt-3 text-[1.0625rem] leading-relaxed text-stone-700">{experience.answer}</p>
                </div>

                <div>
                  <h3 className="font-heading mb-5 text-xl font-bold text-brand">Les espaces</h3>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {museeEspaces.map((espace) => (
                      <li
                        key={espace.label}
                        className="flex gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm transition-[border-color,box-shadow] hover:border-gold-dark/25 hover:shadow-md"
                      >
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark ring-1 ring-gold-dark/20">
                          <MuseeEspaceIcon id={espace.icon} className="size-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold text-brand">{espace.label}</p>
                          <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{espace.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="rounded-2xl border border-stone-200/80 bg-white px-5 py-4 text-[1.0625rem] leading-[1.85] text-stone-700 shadow-sm ring-1 ring-stone-100">
                  {facilities}
                </p>
              </div>
            </SectionPanel>

            <SectionPanel id="boutique">
              <MuseeBoutiqueFocus />
            </SectionPanel>

            <SectionPanel id="equipe">
              <SectionTitle
                id="equipe-title"
                kicker="Accueil & médiation"
                title="Équipe"
                subtitle="Direction, médiation et conservation du musée."
              />
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {museeEquipe.map((member, i) => (
                  <li
                    key={member.role}
                    className="flex flex-col rounded-2xl border border-stone-200/80 bg-gradient-to-br from-cream/50 to-white p-5 shadow-sm ring-1 ring-stone-100/80"
                  >
                    <div className="relative mb-4 size-14 overflow-hidden rounded-2xl bg-gradient-to-br from-forest/20 to-brand/15 ring-2 ring-stone-200/80">
                      <Image
                        src="/images/musee-costumes-ndop.png"
                        alt=""
                        fill
                        className="object-cover opacity-35"
                        sizes="56px"
                      />
                      <span className="absolute inset-0 flex items-center justify-center font-heading text-lg font-bold text-brand/60">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">{member.role}</p>
                    <p className="font-heading mt-2 text-lg font-bold text-brand">{member.name}</p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{member.note}</p>
                  </li>
                ))}
              </ul>
            </SectionPanel>

            <SectionPanel id="partenaires" variant="cream">
              <SectionTitle id="partenaires-title" kicker="Réseau" title="Partenaires" />
              <EmptySectionPlaceholder label="Partenaires du musée" />
            </SectionPanel>

            <SectionPanel id="interview">
              <SectionTitle
                id="interview-title"
                kicker="Parole du directeur"
                title="Interview du Directeur"
              />
              <EmptySectionPlaceholder label="Interview du directeur du musée" />
            </SectionPanel>

            <SectionPanel id="mediatheque" variant="cream">
              <SectionTitle id="mediatheque-title" kicker="Archives" title="Médiathèque" />
              <EmptySectionPlaceholder label="Galerie photos, vidéos et documents du musée" />
            </SectionPanel>

            <section id="infos-pratiques" className={`${scrollMt} rounded-3xl border border-stone-200/70 bg-white p-6 shadow-sm ring-1 ring-stone-100/60 md:p-8`}>
              <SectionTitle id="infos-pratiques-title" kicker="Visite" title="Infos pratiques" />
              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-stone-200/80 bg-cream/30 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-forest/10 text-forest">
                      <IconClock />
                    </span>
                    <h3 className="font-heading font-bold text-brand">Horaires</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-600">{practical.hours}</p>
                </div>

                <div className="rounded-2xl border border-stone-200/80 bg-cream/30 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-gold-dark/15 text-gold-dark">
                      <IconPhone />
                    </span>
                    <h3 className="font-heading font-bold text-brand">Contacts utiles</h3>
                  </div>
                  <ul className="space-y-2">
                    {practical.phones.map((phone) => (
                      <li key={phone.tel}>
                        <a
                          href={`tel:${phone.tel}`}
                          className="block rounded-xl border border-stone-200/90 bg-white px-3 py-2 text-sm font-semibold text-brand transition-colors hover:border-gold-dark/40"
                        >
                          +237 {phone.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-stone-200/80 bg-cream/30 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-forest/15 text-forest">
                      <IconWhatsApp />
                    </span>
                    <h3 className="font-heading font-bold text-brand">WhatsApp</h3>
                  </div>
                  <a
                    href={`https://wa.me/${practical.whatsapp.tel.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-stone-200/90 bg-white px-3 py-2 text-sm font-semibold text-brand transition-colors hover:border-gold-dark/40"
                  >
                    +237 {practical.whatsapp.display}
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        <PageFooterNav
          links={[
            { href: '/tourisme/introductionenjeux', label: '← Enjeux' },
            { href: '/tourisme/restaurant', label: 'Les Saveurs du Palais' },
            { href: '/tourisme/visitez-bapa', label: 'Visitez Bapa' },
          ]}
        />
      </main>
    </PageShell>
  );
}
