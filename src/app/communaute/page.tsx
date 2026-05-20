import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell from '@/components/layout/PageShell';
import EchoCard from '@/components/EchoCard';
import { echoArticles } from '@/lib/echos';

export const metadata: Metadata = {
  title: 'Les Communautés | Bapa Officiel',
  description:
    'Communautés du Royaume de Bapa au Cameroun et dans la diaspora : rôles, activités, actualités et contacts.',
};

type HubIconId =
  | 'roles'
  | 'cameroun'
  | 'diaspora'
  | 'activites'
  | 'echos'
  | 'partenaires'
  | 'contacts'
  | 'village'
  | 'lien';

function HubIcon({ id, className }: { id: HubIconId; className?: string }) {
  const cn = className ?? 'size-6';
  switch (id) {
    case 'roles':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="8" r="2.5" />
          <path strokeLinecap="round" d="M4 20c0-2.5 2.2-4 5-4M14 20c0-2-1.8-3.5-4-3.5" />
        </svg>
      );
    case 'cameroun':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-7-11a7 7 0 1 1 14 0c0 6.5-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 'diaspora':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    case 'activites':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="4" y="5" width="16" height="14" rx="1.5" />
          <path strokeLinecap="round" d="M8 3v4M16 3v4M4 10h16" />
        </svg>
      );
    case 'echos':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8.5h12M6 12h8M6 15.5h10" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      );
    case 'partenaires':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11h10M7 15h6M5 5h14v14H5V5Z" />
          <path strokeLinecap="round" d="M9 5V3h6v2" />
        </svg>
      );
    case 'contacts':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4V6Z" />
          <path strokeLinecap="round" d="m4 7 8 6 8-6" />
        </svg>
      );
    case 'village':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V21H8v-7H6v7H3v-10.5Z" />
        </svg>
      );
    case 'lien':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10.5 5.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 0 0 7.07 7.07L13.5 18.5" />
        </svg>
      );
  }
}

const hubSections = [
  {
    id: 'roles',
    title: 'Rôles de communautés',
    subtitle: 'Missions, responsabilités et organisation des groupes au sein du royaume.',
    items: [
      {
        label: 'Rôles de communautés',
        href: '/communaute/roles',
        icon: 'roles' as HubIconId,
        description: 'Fonctions, mandats et articulation entre village, diaspora et institutions.',
      },
    ],
  },
  {
    id: 'communautes',
    title: 'Les communautés',
    subtitle: 'Royaume de Bapa et diaspora — deux piliers de la solidarité Bapa.',
    items: [
      {
        label: 'Communauté Bapa du Cameroun',
        href: '/communaute/cameroun',
        icon: 'cameroun' as HubIconId,
        description: 'Vie locale, initiatives et ancrage au Royaume de Bapa.',
      },
      {
        label: 'Communauté Bapa de la diaspora',
        href: '/communaute/diaspora',
        icon: 'diaspora' as HubIconId,
        description: 'Réseau mondial, solidarité et projets à distance.',
      },
    ],
  },
  {
    id: 'vivre',
    title: 'Vivre la communauté',
    subtitle: 'Actualités, événements et engagement au quotidien.',
    items: [
      {
        label: 'Activités des communautés',
        href: '/communaute/activites',
        icon: 'activites' as HubIconId,
        description: 'Agenda, chantiers et rencontres à Bapa et ailleurs.',
      },
      {
        label: 'Échos de Bapa',
        href: '/communaute/echos',
        icon: 'echos' as HubIconId,
        description: 'Actualités du royaume : culture, festival, développement.',
        featured: true,
      },
    ],
  },
  {
    id: 'engager',
    title: 'S’engager',
    subtitle: 'Partenariats et prise de contact.',
    items: [
      {
        label: 'Partenaires',
        href: '/communaute/partenaires',
        icon: 'partenaires' as HubIconId,
        description: 'Institutions et acteurs qui accompagnent Bapa.',
      },
      {
        label: 'Contacts',
        href: '/contacts',
        icon: 'contacts' as HubIconId,
        description: 'Écrire au secrétariat, rejoindre ou poser une question.',
        featured: true,
      },
    ],
  },
] as const;

const pillars = [
  { label: 'Royaume de Bapa', icon: 'village' as HubIconId },
  { label: 'Diaspora', icon: 'diaspora' as HubIconId },
  { label: 'Solidarité', icon: 'lien' as HubIconId },
] as const;

export default function CommunauteHubPage() {
  const latestEcho = echoArticles[0];

  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="green" />

      {/* Hero */}
      <header className="relative isolate z-[1] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/festival-ngouook-procession.png"
            alt=""
            fill
            priority
            className="scale-[1.03] object-cover object-[center_40%]"
            sizes="100vw"
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(14,9,6,0.72)_0%,rgba(42,95,58,0.55)_42%,rgba(61,34,16,0.82)_100%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.06]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-36 bg-gradient-to-b from-transparent to-[#f2f0e9] sm:h-44"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-14 page-top page-top-md text-center text-white sm:px-6 md:pb-18 md:text-left">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light/95">Solidarité</p>
          <h1
            className="font-heading mb-4 text-4xl font-bold tracking-tight drop-shadow-sm sm:text-5xl md:text-[3.15rem]"
            
          >
            Les Communautés
          </h1>
          <p className="mx-auto max-w-2xl text-[1.05rem] leading-relaxed text-white/90 md:mx-0">
            Cohésion du Royaume de Bapa et de la diaspora — actualités, entraide et projets communs pour le Royaume de
            Bapa.
          </p>

          <ul className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
            {pillars.map((p) => (
              <li
                key={p.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm"
              >
                <HubIcon id={p.icon} className="size-4 text-gold-light" />
                {p.label}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="relative z-[1] mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16 lg:max-w-6xl">
        {/* Accès rapide */}
        <div className="mb-14 grid gap-4 sm:grid-cols-2">
          <Link
            href="/communaute/echos"
            className="group relative overflow-hidden rounded-2xl bg-brand p-6 text-white shadow-[0_16px_48px_-20px_rgba(61,34,16,0.5)] ring-1 ring-brand-dark/30 transition-transform hover:-translate-y-0.5 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 size-32 rounded-full bg-gold/20 blur-2xl" aria-hidden />
            <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
              <HubIcon id="echos" className="size-6 text-gold-light" />
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light/90">À ne pas manquer</p>
            <p className="font-heading mt-2 text-xl font-bold sm:text-2xl">
              Échos de Bapa
            </p>
            <p className="mt-2 max-w-sm text-sm text-white/75">Dernières nouvelles du village — culture, festival, diaspora.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light">
              Lire les actualités <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
            </span>
          </Link>

          <Link
            href="/contacts"
            className="group flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white/95 p-6 shadow-sm ring-1 ring-stone-100 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-gold-dark/30 hover:shadow-md sm:p-8"
          >
            <div>
              <span className="flex size-12 items-center justify-center rounded-xl bg-forest/10 text-forest ring-1 ring-forest/20">
                <HubIcon id="contacts" className="size-6" />
              </span>
              <p className="font-heading mt-4 text-xl font-bold text-brand">
                Nous rejoindre
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Enfant du village, membre de la diaspora ou ami de Bapa — les portes vous sont ouvertes.
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
              Prendre contact <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
            </span>
          </Link>
        </div>

        {/* Rubriques par thème */}
        <div className="space-y-14">
          {hubSections.map((section) => (
            <section key={section.id} aria-labelledby={`hub-${section.id}`}>
              <div className="mb-6 border-b border-stone-200/70 pb-4">
                <h2
                  id={`hub-${section.id}`}
                  className="font-heading text-2xl font-bold text-brand md:text-[1.75rem]"
                  
                >
                  {section.title}
                </h2>
                <p className="mt-1 text-sm text-stone-500">{section.subtitle}</p>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item) => {
                  const isFeatured = 'featured' in item && item.featured;
                  return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group flex h-full gap-4 rounded-2xl border p-5 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2 ${
                        isFeatured
                          ? 'border-gold-dark/25 bg-gradient-to-br from-white to-cream-dark/40 ring-1 ring-gold-dark/15'
                          : 'border-stone-200/80 bg-white/95 shadow-sm ring-1 ring-stone-100 hover:border-gold-dark/25'
                      }`}
                    >
                      <span
                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl ring-1 transition-colors ${
                          isFeatured
                            ? 'bg-brand/10 text-brand ring-brand/15 group-hover:bg-brand/15'
                            : 'bg-stone-100 text-gold-dark ring-stone-200/80 group-hover:bg-gold/10 group-hover:text-brand'
                        }`}
                        aria-hidden
                      >
                        <HubIcon id={item.icon} className="size-6" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-brand group-hover:text-brand-light">{item.label}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{item.description}</p>
                      </div>
                      <span
                        className="mt-1 shrink-0 self-start text-gold-dark opacity-60 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
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

        {/* À la une — Échos */}
        {latestEcho && (
          <section className="mt-16 border-t border-stone-200/70 pt-14" aria-labelledby="hub-echos-une">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="hub-echos-une"
                  className="font-heading text-2xl font-bold text-brand md:text-3xl"
                  
                >
                  Dernier écho
                </h2>
                <p className="mt-1 text-sm text-stone-500">Un aperçu des actualités — parcourez toute la rubrique.</p>
              </div>
              <Link
                href="/communaute/echos"
                className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-brand/20 bg-white px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:border-gold-dark/40 hover:bg-cream"
              >
                Tous les échos →
              </Link>
            </div>
            <EchoCard article={latestEcho} variant="featured" />
          </section>
        )}

        <nav className="mt-16 flex flex-col items-center gap-4 border-t border-stone-200/70 pt-12 text-center sm:flex-row sm:justify-center sm:gap-10">
          <Link href="/" className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline">
            ← Accueil
          </Link>
          <Link href="/contacts" className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline">
            Contacts
          </Link>
        </nav>
      </main>
    </PageShell>
  );
}
