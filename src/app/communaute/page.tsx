import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CommunauteHubIcon from '@/components/communaute/CommunauteHubIcon';
import PageHeroPremium from '@/components/layout/PageHeroPremium';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import {
  communauteHubGallery,
  communauteHubSidebarNavItems,
  communauteHubPillars,
  communauteHubSections,
} from '@/lib/communaute-hub';
import { ECHOS_LIST_PATH } from '@/lib/echos';

export const metadata: Metadata = {
  title: 'Les Communautés | Bapa Officiel',
  description:
    'Communautés du Royaume de Bapa au Cameroun et dans la diaspora : rôles, activités, actualités et contacts.',
};

const scrollMt = 'scroll-mt-[calc(var(--navbar-offset)+5rem)]';

const sidebarLinkClass =
  'flex w-full items-center gap-2.5 rounded-xl border border-transparent px-3.5 py-2.5 text-sm font-semibold text-stone-600 transition-all hover:border-stone-200/90 hover:bg-white/80 md:px-4';

function HubSectionHeader({ id, kicker, title, subtitle }: { id: string; kicker: string; title: string; subtitle: string }) {
  return (
    <header className="mb-6 border-l-[3px] border-forest/50 pl-5 md:mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-forest">{kicker}</p>
      <h2 id={id} className="font-heading mt-2 text-2xl font-bold text-brand md:text-[1.75rem]">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-stone-500">{subtitle}</p>
    </header>
  );
}

export default function CommunauteHubPage() {
  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="green" />

      <PageHeroPremium
        imageSrc="/images/festival-ngouook-procession.png"
        imageClassName="scale-[1.03] object-cover object-[center_40%] select-none"
        label="Solidarité"
        title="Les Communautés"
        description="Cohésion du Royaume de Bapa et de la diaspora — actualités, entraide et projets communs pour le territoire et ses fils dispersés."
        descriptionClassName="mx-auto max-w-2xl text-lg leading-relaxed text-white/88 md:mx-0"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Les Communautés' }]}
      >
        <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2 md:mx-0 md:justify-start">
          {communauteHubPillars.map((p) => (
            <li
              key={p.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/95 backdrop-blur-sm"
            >
              <CommunauteHubIcon id={p.icon} className="size-4 text-gold-light" />
              {p.label}
            </li>
          ))}
        </ul>

        <nav
          aria-label="Sections du hub"
          className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2 border-t border-white/15 pt-8 md:mx-0 md:justify-start"
        >
          {communauteHubSections.map((section) => (
            <a
              key={section.id}
              href={`#hub-${section.id}`}
              className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white/95 backdrop-blur-sm transition-colors hover:border-gold-light/45 hover:bg-white/15"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </PageHeroPremium>

      <section
        aria-label="Communautés en images"
        className="relative z-[1] -mt-5 mx-auto max-w-6xl px-4 sm:px-6 lg:-mt-8 lg:px-10"
      >
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {communauteHubGallery.map(({ src, alt, caption }) => (
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
          <aside className="mb-10 lg:sticky lg:top-[calc(var(--navbar-offset)+1rem)] lg:mb-0 lg:self-start">
            <div className="rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm ring-1 ring-stone-100/60 md:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Explorer</p>
              <nav aria-label="Rubriques des communautés" className="mt-4 hidden space-y-1 lg:block">
                {communauteHubSidebarNavItems.map((item) => (
                  <Link key={item.href} href={item.href} className={sidebarLinkClass}>
                    <CommunauteHubIcon id={item.icon} className="size-4 shrink-0 text-forest" />
                    <span className="min-w-0 truncate">{item.label}</span>
                  </Link>
                ))}
              </nav>
              <nav aria-label="Rubriques des communautés" className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
                {communauteHubSidebarNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-stone-200/90 bg-cream/50 px-3.5 py-2 text-xs font-semibold text-brand"
                  >
                    <CommunauteHubIcon id={item.icon} className="size-3.5 text-forest" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0 space-y-12 md:space-y-14">
            {/* Accès prioritaires */}
            <section aria-labelledby="hub-prioritaires">
              <HubSectionHeader
                id="hub-prioritaires"
                kicker="À la une"
                title="Accès prioritaires"
                subtitle="Actualités du royaume et prise de contact avec le secrétariat."
              />
              <div className="grid gap-4 lg:grid-cols-5 lg:gap-5">
                <Link
                  href={ECHOS_LIST_PATH}
                  className="group relative overflow-hidden rounded-3xl bg-brand p-7 text-white shadow-[0_20px_56px_-24px_rgba(61,34,16,0.55)] ring-1 ring-brand-dark/30 transition-transform hover:-translate-y-0.5 lg:col-span-3 lg:p-9"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-gold/25 blur-3xl"
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden>
                    <Image
                      src="/images/hero-slide-cortege-traditionnel.png"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="600px"
                    />
                  </div>
                  <div className="relative">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
                      <CommunauteHubIcon id="echos" className="size-6 text-gold-light" />
                    </span>
                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light/90">
                      À ne pas manquer
                    </p>
                    <p className="font-heading mt-2 text-2xl font-bold sm:text-3xl">Échos de Bapa</p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                      Dernières nouvelles du royaume — culture, festival, diaspora et développement.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-gold-light ring-1 ring-white/20 transition-colors group-hover:bg-white/20">
                      Lire les actualités
                      <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                        →
                      </span>
                    </span>
                  </div>
                </Link>

                <div className="flex flex-col gap-4 lg:col-span-2">
                  <Link
                    href="/contacts"
                    className="group flex flex-1 flex-col justify-between rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-gold-dark/30 hover:shadow-md"
                  >
                    <div>
                      <span className="flex size-11 items-center justify-center rounded-xl bg-forest/10 text-forest ring-1 ring-forest/20">
                        <CommunauteHubIcon id="contacts" className="size-5" />
                      </span>
                      <p className="font-heading mt-4 text-xl font-bold text-brand">Nous rejoindre</p>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">
                        Enfant du royaume, membre de la diaspora ou ami de Bapa — le secrétariat vous accueille.
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                      Prendre contact
                      <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                        →
                      </span>
                    </span>
                  </Link>

                  <div className="grid grid-cols-2 gap-3">
                    {communauteHubSections[1].items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group rounded-2xl border border-stone-200/80 bg-gradient-to-br from-cream/80 to-white p-4 shadow-sm ring-1 ring-stone-100 transition-all hover:border-forest/25 hover:shadow-md"
                      >
                        <CommunauteHubIcon id={item.icon} className="size-5 text-forest" />
                        <p className="mt-3 text-xs font-bold leading-snug text-brand group-hover:text-forest">
                          {item.label.replace('Communauté Bapa ', '')}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Rubriques */}
            {communauteHubSections.map((section, sectionIndex) => (
              <section
                key={section.id}
                id={`hub-${section.id}`}
                className={`${scrollMt} rounded-3xl border border-stone-200/70 bg-white p-6 shadow-sm ring-1 ring-stone-100/60 md:p-8`}
                aria-labelledby={`hub-title-${section.id}`}
              >
                <HubSectionHeader
                  id={`hub-title-${section.id}`}
                  kicker={`Rubrique ${String(sectionIndex + 1).padStart(2, '0')}`}
                  title={section.title}
                  subtitle={section.subtitle}
                />

                <ul className={`grid gap-4 ${section.items.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                  {section.items.map((item, itemIndex) => {
                    const isFeatured = Boolean(item.featured);
                    const num = String(itemIndex + 1).padStart(2, '0');
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`group flex h-full gap-4 rounded-2xl border p-5 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2 ${
                            isFeatured
                              ? 'border-gold-dark/25 bg-gradient-to-br from-cream/40 to-white ring-1 ring-gold-dark/15'
                              : 'border-stone-200/80 bg-cream/30 ring-1 ring-stone-100/80 hover:border-gold-dark/25'
                          }`}
                        >
                          <span
                            className={`flex size-12 shrink-0 flex-col items-center justify-center rounded-xl ring-1 ${
                              isFeatured
                                ? 'bg-brand/10 text-brand ring-brand/15'
                                : 'bg-white text-gold-dark ring-stone-200/80'
                            }`}
                            aria-hidden
                          >
                            <span className="font-heading text-[10px] font-bold text-stone-400">{num}</span>
                            <CommunauteHubIcon id={item.icon} className="size-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-brand group-hover:text-forest">{item.label}</p>
                            <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{item.description}</p>
                          </div>
                          <span
                            className="mt-1 shrink-0 self-start text-gold-dark opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                            aria-hidden
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <PageFooterNav
          links={[
            { href: '/', label: '← Accueil' },
            { href: ECHOS_LIST_PATH, label: 'Échos de Bapa' },
            { href: '/contacts', label: 'Contacts' },
          ]}
        />
      </main>
    </PageShell>
  );
}
