import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: 'Musée Case Patrimoniale | Tourisme | Bapa',
  description:
    'Musée case patrimoniale de Bapa : espaces, boutique, équipe, partenaires, médiathèque et patrimoine Bamiléké.',
};

const navSections = [
  { id: 'description', label: 'Le musée' },
  { id: 'equipe', label: 'Équipe' },
  { id: 'partenaires', label: 'Partenaires' },
  { id: 'interview', label: 'Interview' },
  { id: 'mediatheque', label: 'Médiathèque' },
] as const;

type EspaceIconId =
  | 'accueil'
  | 'exposition'
  | 'temporaire'
  | 'bibliotheque'
  | 'reserve'
  | 'reunion'
  | 'patio'
  | 'plan';

const espaces: ReadonlyArray<{
  label: string;
  detail: string;
  icon: EspaceIconId;
}> = [
  {
    label: 'Hall d’accueil & boutique',
    detail: 'Accueil des visiteurs, billetterie et vente d’articles artisanaux.',
    icon: 'accueil',
  },
  {
    label: '6 salles d’exposition permanente',
    detail: 'Parcours thématique à médiation immersive (groupes de 1 à 15 personnes).',
    icon: 'exposition',
  },
  {
    label: 'Salle d’exposition temporaire',
    detail: 'Programmation événementielle et expositions ponctuelles.',
    icon: 'temporaire',
  },
  {
    label: 'Bibliothèque',
    detail: 'Documentation et ressources sur l’histoire et les cultures Bamiléké.',
    icon: 'bibliotheque',
  },
  {
    label: 'Réserve & bureau',
    detail: 'Conservation des collections et coordination administrative.',
    icon: 'reserve',
  },
  {
    label: 'Salle de réunion',
    detail: 'Rencontres, ateliers et activités pédagogiques.',
    icon: 'reunion',
  },
  {
    label: 'Patio central',
    detail: 'Espace ouvert au cœur du bâtiment, respiration entre les salles.',
    icon: 'patio',
  },
];

function EspaceIcon({ id, className }: { id: EspaceIconId; className?: string }) {
  const cn = className ?? 'size-6';
  switch (id) {
    case 'accueil':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z" />
          <path strokeLinecap="round" d="M9 14h6" />
        </svg>
      );
    case 'exposition':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="3" y="4" width="18" height="14" rx="1.5" />
          <path strokeLinecap="round" d="M8 21h8M12 18v3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m8 12 3-3 3 3 3-3 3 3" />
        </svg>
      );
    case 'temporaire':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="4" y="5" width="16" height="15" rx="1.5" />
          <path strokeLinecap="round" d="M8 3v4M16 3v4M4 10h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v3M10.5 15.5H13.5" />
        </svg>
      );
    case 'bibliotheque':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5.5h5v14H5a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 5 5.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5.5h5v14H9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5.5h5v14h-5a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 13 5.5Z" />
        </svg>
      );
    case 'reserve':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7 7 4h10l3 3" />
          <path strokeLinecap="round" d="M9 12h6M9 15h4" />
        </svg>
      );
    case 'reunion':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <ellipse cx="12" cy="8" rx="7" ry="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8v3c0 1.66 3.13 3 7 3s7-1.34 7-3V8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 14v3c0 1.66 3.13 3 7 3s7-1.34 7-3v-3" />
        </svg>
      );
    case 'patio':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h8M6 20v-2h12v2" />
        </svg>
      );
    case 'plan':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="3" y="3" width="8" height="8" rx="1" />
          <rect x="13" y="3" width="8" height="8" rx="1" />
          <rect x="3" y="13" width="8" height="8" rx="1" />
          <rect x="13" y="13" width="8" height="8" rx="1" />
        </svg>
      );
  }
}

const equipePlaceholders = [
  { role: 'Direction', name: 'À compléter', note: 'Directeur du musée — voir interview ci-dessous.' },
  { role: 'Médiation & accueil', name: 'À compléter', note: 'Stagiaires et équipe d’accueil au hall.' },
  { role: 'Conservation', name: 'À compléter', note: 'Gestion des collections et de la réserve.' },
] as const;

const partenairesPlaceholders = [
  { name: 'Chefferie de Bapa', type: 'Institution coutumière' },
  { name: 'ADEVIPA / PA’CTA', type: 'Développement culturel & touristique' },
  { name: 'À compléter', type: 'Partenaires institutionnels, académiques ou internationaux' },
] as const;

const mediathequeItems = [
  {
    src: '/images/musee-costumes-ndop.png',
    alt: 'Salle d’exposition : costumes cérémoniels, masques et fond mural aux motifs ndop',
    caption: 'Salles permanentes — costumes et masques royaux',
    featured: true,
  },
  {
    src: '/images/musee-exposition-artefacts.png',
    alt: 'Vitrines : masques, poteries et panneaux sur les savoir-faire traditionnels de Bapa',
    caption: 'Collections — masques, poteries et savoir-faire',
    featured: true,
  },
  {
    src: '/images/musee-celebration-culturelle.png',
    alt: 'Célébration culturelle en tenues traditionnelles toghu à Bapa',
    caption: 'Vie culturelle et traditions vivantes',
    featured: false,
  },
] as const;

export default function MuseePage() {
  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="gold" />

      {/* Hero */}
      <header className="relative isolate z-[1] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/musee-costumes-ndop.png"
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
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_100%,rgba(242,240,233,0.15),transparent_50%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.05]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-[#f2f0e9] sm:h-40"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-14 page-top page-top-md text-center text-white sm:px-6 md:pb-18">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light/95">Tourisme</p>
          <h1
            className="font-heading mb-4 text-3xl font-bold tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)] sm:text-4xl md:text-5xl"
            
          >
            Musée Case Patrimoniale
          </h1>
          <p className="mx-auto max-w-xl text-[1.05rem] leading-relaxed text-white/90">
            Mémoire vivante du Royaume de Bapa — collections, espaces de visite, boutique et médiation culturelle.
          </p>
          <nav
            aria-label="Sections de la page"
            className="mt-10 flex flex-wrap justify-center gap-2 border-t border-white/15 pt-8"
          >
            {navSections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-gold-light/50 hover:bg-white/15"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Bandeau visuel — 3 photos */}
      <section
        aria-label="Aperçu du musée en images"
        className="relative z-[1] -mt-6 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-3 sm:grid-cols-12 sm:gap-4">
          <figure className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_-24px_rgba(61,34,16,0.45)] ring-1 ring-stone-300/60 sm:col-span-7 sm:row-span-2">
            <div className="relative aspect-[4/3] w-full sm:aspect-auto sm:min-h-[18rem] sm:h-full">
              <Image
                src="/images/musee-exposition-artefacts.png"
                alt="Exposition : masques, poteries et panneaux pédagogiques"
                fill
                className="object-cover object-center"
                sizes="(max-width:640px) 100vw, 58vw"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/90 to-transparent px-4 py-3 text-left text-sm text-white/95">
              Savoir-faire et collections
            </figcaption>
          </figure>
          <figure className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-300/60 sm:col-span-5">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/musee-celebration-culturelle.png"
                alt="Célébration en tenues traditionnelles"
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width:640px) 100vw, 42vw"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/85 to-transparent px-3 py-2.5 text-xs text-white/95">
              Traditions vivantes
            </figcaption>
          </figure>
          <figure className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-300/60 sm:col-span-5">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/musee-costumes-ndop.png"
                alt="Costumes cérémoniels et motifs ndop"
                fill
                className="object-cover object-[center_38%]"
                sizes="(max-width:640px) 100vw, 42vw"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/85 to-transparent px-3 py-2.5 text-xs text-white/95">
              Salles permanentes
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="relative z-[1] mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-18 lg:max-w-4xl">
        <section id="description" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2
            className="font-heading mb-6 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Description du musée
          </h2>

          <div className="mb-10 overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm ring-1 ring-stone-100 lg:flex lg:items-stretch">
            <div className="relative aspect-[16/11] w-full shrink-0 lg:aspect-auto lg:w-[min(48%,22rem)] lg:min-h-[16rem]">
              <Image
                src="/images/musee-exposition-artefacts.png"
                alt="Vitrine du musée : masques rituelles et artisanat"
                fill
                className="object-cover object-center"
                sizes="(max-width:1024px) 100vw, 400px"
              />
            </div>
            <div className="prose-bapa flex flex-col justify-center space-y-4 p-6 text-stone-600 md:p-8">
              <p>
                Le <strong>musée case patrimoniale de Bapa</strong> est une institution permanente à vocation culturelle
                et éducative. Inaugurée le <strong>3 mars 2018</strong>, elle présente le patrimoine Bamiléké autour du
                thème <em>«&nbsp;Homme, Nature et Croyances&nbsp;»</em>.
              </p>
              <p>
                Plus de <strong>500 objets</strong> — bois, métal, céramique, textile — dont masques, trônes et tabourets
                royaux, sont exposés dans un parcours pensé pour la médiation et la découverte.
              </p>
            </div>
          </div>

          <h3
            className="font-heading mb-4 text-xl font-bold text-brand"
            
          >
            Boutique
          </h3>
          <p className="mb-4 text-stone-600">
            La <strong>boutique</strong> est intégrée au hall d’accueil&nbsp;: articles artisanaux et supports
            patrimoniaux, prolongement de la visite et soutien aux métiers locaux.
          </p>

          <h3
            className="font-heading mb-4 mt-10 text-xl font-bold text-brand"
            
          >
            Espaces
          </h3>

          <div className="mb-8 grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { value: '16', label: 'Espaces', icon: 'plan' as EspaceIconId },
              { value: '6', label: 'Salles permanentes', icon: 'exposition' as EspaceIconId },
              { value: '1', label: 'Patio central', icon: 'patio' as EspaceIconId },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-xl border border-gold-dark/15 bg-gradient-to-b from-white to-cream-dark/50 px-3 py-4 text-center shadow-sm ring-1 ring-stone-100"
              >
                <span className="mb-2 flex size-10 items-center justify-center rounded-full bg-brand/10 text-gold-dark">
                  <EspaceIcon id={stat.icon} className="size-5" />
                </span>
                <span className="font-heading text-2xl font-bold text-brand md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-0.5 text-[11px] font-semibold leading-tight text-stone-600 sm:text-xs">{stat.label}</span>
              </div>
            ))}
          </div>

          <p className="mb-6 text-sm leading-relaxed text-stone-600">
            <strong className="text-brand">16 espaces</strong> fonctionnels organisés autour d’un{' '}
            <strong className="text-brand">patio central</strong> — dont{' '}
            <strong className="text-brand">six salles d’exposition permanente</strong> à muséographie immersive.
          </p>

          <ul className="grid gap-4 sm:grid-cols-2">
            {espaces.map((e) => (
              <li
                key={e.label}
                className="group flex gap-4 rounded-xl border border-stone-200/80 bg-white/95 p-4 shadow-sm ring-1 ring-stone-100 transition-[border-color,box-shadow] hover:border-gold-dark/25 hover:shadow-md sm:p-5"
              >
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand/12 to-gold-dark/15 text-gold-dark ring-1 ring-gold-dark/20 transition-colors group-hover:bg-brand/15 group-hover:text-brand"
                  aria-hidden
                >
                  <EspaceIcon id={e.icon} className="size-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-brand">{e.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{e.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <figure className="mt-10 overflow-hidden rounded-2xl border border-stone-200/80 shadow-md ring-1 ring-stone-200/50">
            <div className="relative aspect-[21/9] min-h-[10rem] w-full">
              <Image
                src="/images/musee-costumes-ndop.png"
                alt="Salle d’exposition permanente : mannequins en costumes et fond ndop"
                fill
                className="object-cover object-[center_40%]"
                sizes="(max-width:1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="border-t border-stone-100 bg-white/95 px-4 py-3 text-center text-sm text-stone-600">
              Une des salles permanentes — costumes cérémoniels et motifs ndop des Grassfields.
            </figcaption>
          </figure>

          <p className="mt-8 rounded-lg border border-gold-dark/20 bg-white/80 px-4 py-3 text-sm text-stone-600">
            <strong>Horaires indicatifs</strong>&nbsp;: mardi–vendredi 9h–17h ; samedi–dimanche 8h–17h. Visites guidées
            selon catégories de public. Confirmer auprès du musée avant votre venue.
          </p>
        </section>

        <section id="equipe" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2
            className="font-heading mb-2 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Équipe
          </h2>
          <p className="mb-8 text-sm text-stone-500">
            Portraits et coordonnées à compléter par la direction du musée.
          </p>
          <ul className="space-y-5">
            {equipePlaceholders.map((m) => (
              <li
                key={m.role}
                className="flex gap-4 rounded-xl border border-stone-200/80 bg-white/95 p-5 shadow-sm"
              >
                <div
                  className="relative size-16 shrink-0 overflow-hidden rounded-full bg-brand/10 ring-2 ring-stone-200/80"
                  aria-hidden
                >
                  <Image
                    src="/images/musee-celebration-culturelle.png"
                    alt=""
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-dark">{m.role}</p>
                  <p className="mt-1 font-bold text-brand">{m.name}</p>
                  <p className="mt-1 text-sm text-stone-600">{m.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="partenaires" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2
            className="font-heading mb-5 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Partenaires
          </h2>
          <p className="mb-8 text-stone-600">
            Le musée s’inscrit dans la dynamique du Royaume de Bapa et collabore avec des acteurs du développement
            culturel et touristique.
          </p>
          <ul className="grid gap-4 sm:grid-cols-3">
            {partenairesPlaceholders.map((p) => (
              <li
                key={p.name}
                className="flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-300/90 bg-white/80 px-4 py-8 text-center"
              >
                <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-brand/8 text-lg text-brand/40">
                  ◆
                </span>
                <p className="font-semibold text-brand">{p.name}</p>
                <p className="mt-1 text-xs text-stone-500">{p.type}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="interview" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2
            className="font-heading mb-5 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Interview du directeur
          </h2>
          <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white/95 shadow-sm">
            <div className="relative aspect-[21/8] min-h-[7rem] w-full border-b border-stone-200/60">
              <Image
                src="/images/musee-exposition-artefacts.png"
                alt=""
                fill
                className="object-cover object-[center_35%] opacity-90"
                sizes="(max-width:1024px) 100vw, 896px"
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/75 via-brand-dark/50 to-transparent" />
              <p
                className="font-heading absolute bottom-4 left-6 max-w-md text-lg font-bold text-white drop-shadow-sm md:text-xl"
                
              >
                La parole du directeur
              </p>
            </div>
            <div className="p-6 md:p-8">
              <p className="mb-8 text-sm text-stone-500">
                Entretien à publier — remplacer les réponses entre crochets par le texte validé.
              </p>
              <dl className="space-y-8">
                <div>
                  <dt className="mb-2 font-bold text-brand">
                    Quelle est la mission du musée case patrimoniale aujourd’hui&nbsp;?
                  </dt>
                  <dd className="border-l-2 border-gold-dark/35 pl-4 leading-relaxed text-stone-600">
                    [Réponse du directeur — transmission, recherche, accueil du public…]
                  </dd>
                </div>
                <div>
                  <dt className="mb-2 font-bold text-brand">
                    Comment la boutique et les espaces d’exposition servent-ils les visiteurs&nbsp;?
                  </dt>
                  <dd className="border-l-2 border-gold-dark/35 pl-4 leading-relaxed text-stone-600">
                    [Réponse du directeur — parcours, médiation, groupes scolaires…]
                  </dd>
                </div>
                <div>
                  <dt className="mb-2 font-bold text-brand">
                    Quels projets ou partenariats souhaitez-vous développer&nbsp;?
                  </dt>
                  <dd className="border-l-2 border-gold-dark/35 pl-4 leading-relaxed text-stone-600">
                    [Réponse du directeur — coopérations, numérique, médiathèque…]
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="mediatheque" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2
            className="font-heading mb-2 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Médiathèque
          </h2>
          <p className="mb-8 text-stone-600">
            Visite en images — collections, expositions et vie culturelle du musée case patrimoniale de Bapa.
          </p>

          <div className="mb-6">
            <figure className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-md ring-1 ring-stone-200/50">
              <div className="relative aspect-[16/10] w-full min-h-[14rem]">
                <Image
                  src="/images/musee-costumes-ndop.png"
                  alt="Vue d’ensemble d’une salle d’exposition permanente"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:1024px) 100vw, 896px"
                />
              </div>
              <figcaption className="border-t border-stone-100 px-4 py-3 text-center text-sm font-medium text-brand">
                {mediathequeItems[0].caption}
              </figcaption>
            </figure>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {mediathequeItems.slice(1).map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-xl border border-stone-200/80 bg-white shadow-sm ring-1 ring-stone-100"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image src={item.src} alt={item.alt} fill className="object-cover object-center" sizes="(max-width:640px) 100vw, 50vw" />
                </div>
                <figcaption className="border-t border-stone-100 px-4 py-3 text-center text-sm text-stone-600">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-stone-500">
            Vidéos et albums complets — à déposer par l’équipe du musée.
          </p>
        </section>

        <nav className="flex flex-col items-center gap-4 border-t border-stone-200/70 pt-12 text-center sm:flex-row sm:justify-center sm:gap-10">
          <Link
            href="/tourisme"
            className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
          >
            ← Tourisme
          </Link>
          <Link href="/" className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline">
            Accueil
          </Link>
        </nav>
      </div>
    </PageShell>
  );
}
