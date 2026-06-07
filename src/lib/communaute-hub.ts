export type CommunauteHubIconId =
  | 'roles'
  | 'cameroun'
  | 'diaspora'
  | 'activites'
  | 'echos'
  | 'partenaires'
  | 'contacts'
  | 'royaume'
  | 'lien';

export type CommunauteHubLink = {
  label: string;
  href: string;
  icon: CommunauteHubIconId;
  description: string;
  featured?: boolean;
};

export type CommunauteHubSection = {
  id: string;
  title: string;
  subtitle: string;
  items: CommunauteHubLink[];
};

export const communauteHubPillars = [
  { label: 'Royaume de Bapa', icon: 'royaume' as const },
  { label: 'Diaspora', icon: 'diaspora' as const },
  { label: 'Solidarité', icon: 'lien' as const },
] as const;

export const communauteHubSections: CommunauteHubSection[] = [
  {
    id: 'roles',
    title: 'Rôles de communautés',
    subtitle: 'Missions, responsabilités et organisation des groupes au sein du royaume.',
    items: [
      {
        label: 'Rôles de communautés',
        href: '/communaute/roles',
        icon: 'roles',
        description: 'Fonctions, mandats et articulation entre territoire, diaspora et institutions.',
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
        icon: 'cameroun',
        description: 'Vie locale, initiatives et ancrage au Royaume de Bapa.',
      },
      {
        label: 'Communauté Bapa de la diaspora',
        href: '/communaute/diaspora',
        icon: 'diaspora',
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
        icon: 'activites',
        description: 'Agenda, chantiers et rencontres à Bapa et ailleurs.',
      },
      {
        label: 'Échos de Bapa',
        href: '/echos',
        icon: 'echos',
        description: 'Actualités du royaume : culture, festival, développement.',
        featured: true,
      },
    ],
  },
  {
    id: 'engager',
    title: "S'engager",
    subtitle: 'Partenariats et prise de contact.',
    items: [
      {
        label: 'Partenaires',
        href: '/communaute/partenaires',
        icon: 'partenaires',
        description: 'Institutions et acteurs qui accompagnent Bapa.',
      },
      {
        label: 'Contacts',
        href: '/contacts',
        icon: 'contacts',
        description: 'Écrire au secrétariat, rejoindre ou poser une question.',
        featured: true,
      },
    ],
  },
];

export const communauteHubGallery = [
  {
    src: '/images/festival-ngouook-procession.png',
    alt: 'Procession culturelle au Royaume de Bapa',
    caption: 'Festival & traditions',
  },
  {
    src: '/images/hero-slide-cortege-traditionnel.png',
    alt: 'Cortège traditionnel',
    caption: 'Vie communautaire',
  },
  {
    src: '/images/musee-celebration-culturelle.png',
    alt: 'Célébration culturelle',
    caption: 'Patrimoine vivant',
  },
] as const;

export const communauteHubNavItems = communauteHubSections.flatMap((section) =>
  section.items.map((item) => ({
    ...item,
    sectionId: section.id,
    sectionTitle: section.title,
  })),
);

/** Liens exclus de la sous-navigation « Explorer » du hub communauté. */
const communauteHubSidebarExcludedHrefs = new Set([
  '/echos',
  '/communaute/partenaires',
  '/contacts',
]);

export const communauteHubSidebarNavItems = communauteHubNavItems.filter(
  (item) => !communauteHubSidebarExcludedHrefs.has(item.href),
);

export const COMMUNAUTE_HUB_LINK_COUNT = communauteHubNavItems.length;
