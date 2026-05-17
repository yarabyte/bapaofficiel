export type EchoCategory = 'Culture' | 'Développement' | 'Festival' | 'Institution' | 'Diaspora';

export interface EchoArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: EchoCategory;
  image: string;
}

export const echoArticles: EchoArticle[] = [
  {
    slug: 'preparatifs-paa-ngouook-2028',
    title: "Les préparatifs du Pa'a Ngouook 2028 sont lancés",
    excerpt:
      "Le comité d'organisation du festival biennal réunit chefs traditionnels, associations et diaspora pour une édition ambitieuse.",
    content: [
      "Le village royal de Bapa a officiellement lancé les préparatifs de la prochaine édition du festival Pa'a Ngouook, prévue en 2028. Une réunion plénière a réuni le conseil des notables, les responsables des associations culturelles et des représentants de la diaspora.",
      "Au programme : renforcement des infrastructures d'accueil, coordination des troupes de danse traditionnelle et valorisation de la gastronomie locale. Les habitants et visiteurs sont invités à contribuer aux chantiers communautaires annoncés dès le printemps.",
    ],
    date: '2026-04-12',
    category: 'Festival',
    image: '/images/paa-ngouook-2028.jpg',
  },
  {
    slug: 'ouverture-musee-case-patrimoniale',
    title: 'Inauguration du Musée Case Patrimoniale',
    excerpt:
      "Un nouveau lieu de mémoire ouvre ses portes pour présenter l'histoire Bamiléké et les trésors du royaume de Bapa.",
    content: [
      "La Case Patrimoniale accueille désormais collections d'objets royaux, archives photographiques et espaces pédagogiques dédiés aux jeunes générations. L'inauguration s'est tenue en présence du Fon et des autorités du département du Ndé.",
      "Le musée s'inscrit dans la stratégie touristique du village et propose boutique artisanale, visites guidées et ateliers culturels pour les groupes scolaires.",
    ],
    date: '2026-03-05',
    category: 'Culture',
    image: '/images/apropos.jpg',
  },
  {
    slug: 'forum-diaspora-solidarite',
    title: 'Forum de la diaspora : solidarité et projets structurants',
    excerpt:
      'Des membres de la communauté Bapa résidant en Europe et en Amérique se mobilisent pour soutenir la santé et l\'éducation.',
    content: [
      "Le forum annuel de la diaspora Bapa a permis de dresser le bilan des contributions à ADEVIPA et de définir les priorités pour l'année : équipements scolaires, campagnes de santé communautaire et accompagnement des jeunes entrepreneurs locaux.",
      "Les participants ont salué la dynamique du Forum Bapa H2050 et réaffirmé leur engagement à maintenir le lien avec les traditions et le développement du village.",
    ],
    date: '2026-02-18',
    category: 'Diaspora',
    image: '/images/bapa-02.jpg',
  },
  {
    slug: 'projet-eau-grassfield',
    title: "Grassfield Research : avancées sur l'accès à l'eau",
    excerpt:
      "Les travaux du réseau d'adduction progressent dans les quartiers en hauteur du village.",
    content: [
      "L'initiative Grassfield Research annonce une nouvelle phase de déploiement des points d'eau potable dans les zones les plus élevées de Bapa. Les équipes techniques travaillent en concertation avec les comités de quartier.",
      "Ce projet s'inscrit dans la vision environnementale du village : préserver les sources naturelles tout en garantissant un accès équitable à l'eau pour toutes les familles.",
    ],
    date: '2026-01-22',
    category: 'Développement',
    image: '/images/bapa-03.jpg',
  },
  {
    slug: 'message-fon-nouvelle-annee',
    title: 'Message du Fon pour la nouvelle saison',
    excerpt:
      "Sa Majesté appelle à l'unité, au respect des traditions et à la participation citoyenne aux initiatives locales.",
    content: [
      "Dans son message à la communauté, le Fon de Bapa a souligné l'importance de la cohésion sociale et du travail collectif pour porter les projets de développement. Il a remercié la diaspora pour son soutien constant.",
      "Le souverain a invité les fils et filles du royaume à honorer les valeurs ancestrales tout en embrassant les opportunités offertes par l'éducation et l'innovation.",
    ],
    date: '2025-12-30',
    category: 'Institution',
    image: '/images/roi-trone.jpg',
  },
  {
    slug: 'nkeng-festival-culturel',
    title: 'Spectacle Nkeng : la jeunesse célèbre les danses royales',
    excerpt:
      "Une soirée culturelle a réuni troupes locales et visiteurs autour des rythmes traditionnels des Grassfields.",
    content: [
      "Les troupes de danse Nkeng ont animé une soirée exceptionnelle sur la place du village, mêlant masques sacrés, chants d'initiation et démonstrations par les plus jeunes.",
      "Cet événement confirme le rôle central de la culture vivante dans l'identité de Bapa et annonce une programmation riche en vue du prochain festival.",
    ],
    date: '2025-11-08',
    category: 'Culture',
    image: '/images/bapa-01.jpg',
  },
];

export function getEchoBySlug(slug: string): EchoArticle | undefined {
  return echoArticles.find((a) => a.slug === slug);
}

export function formatEchoDate(isoDate: string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(isoDate));
}

const categoryStyles: Record<EchoCategory, string> = {
  Culture: 'bg-forest/10 text-forest',
  Développement: 'bg-blue-100 text-blue-800',
  Festival: 'bg-gold/15 text-gold-dark',
  Institution: 'bg-brand/10 text-brand',
  Diaspora: 'bg-purple-100 text-purple-800',
};

export function getCategoryStyle(category: EchoCategory): string {
  return categoryStyles[category];
}
