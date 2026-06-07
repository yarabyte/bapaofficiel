export type EchoCategory =
  | 'Culture et traditions'
  | 'Sport et loisir'
  | 'Tourisme'
  | 'Développement'
  | 'Festival'
  | 'Échos du palais'
  | 'Annonces'
  | 'Communautés'
  | 'Diaspora';

export const ECHO_CATEGORIES: EchoCategory[] = [
  'Culture et traditions',
  'Sport et loisir',
  'Tourisme',
  'Développement',
  'Festival',
  'Échos du palais',
  'Annonces',
  'Communautés',
  'Diaspora',
];

/** Anciennes valeurs d’URL (?categorie=Culture, Institution…) */
const CATEGORY_ALIASES: Record<string, EchoCategory> = {
  Culture: 'Culture et traditions',
  Institution: 'Communautés',
};

export function normalizeEchoCategory(value: string): EchoCategory | undefined {
  const trimmed = value.trim();
  if ((ECHO_CATEGORIES as readonly string[]).includes(trimmed)) {
    return trimmed as EchoCategory;
  }
  return CATEGORY_ALIASES[trimmed];
}

export function isEchoCategory(value: string): value is EchoCategory {
  return normalizeEchoCategory(value) !== undefined;
}

/** Image de fond : bandeau « Echos » et texture du bloc actualités (accueil + liste). */
export const ECHOS_BACKDROP_IMAGE = '/images/hero-slide-cortege-traditionnel.png';

/** Rochers / paysage Grassfields sous le dégradé du bandeau Echos (liste + article). */
export const ECHOS_HEADER_ROCKS_IMAGE = '/images/hero-slide-architecture-patrimoine.png';

export interface EchoRelatedLink {
  href: string;
  label: string;
  description?: string;
}

export interface EchoArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: EchoCategory;
  image: string;
  /** Points clés affichés sous le chapô (optionnel). */
  highlights?: readonly string[];
  /** Liens utiles en fin d’article (optionnel). */
  relatedLinks?: readonly EchoRelatedLink[];
}

export const ECHOS_LIST_PATH = '/echos' as const;

export function echoArticlePath(slug: string): string {
  return `${ECHOS_LIST_PATH}/${slug}`;
}

export function echosListHashHref(hash = 'liste-echos'): string {
  return `${ECHOS_LIST_PATH}#${hash}`;
}

export function echosCategoryFilterHref(category: EchoCategory): string {
  return `${ECHOS_LIST_PATH}?categorie=${encodeURIComponent(category)}#liste-echos`;
}

export const echoArticles: EchoArticle[] = [
  {
    slug: 'ajeepa-congres-jeunesse-bapa-sponsoring',
    title: "Congrès de la Jeunesse Bapa : l'AJEEPA lance son appel au sponsoring",
    excerpt:
      "L'Association des Jeunes Élèves et Étudiants Bapa (AJEEPA) mobilise entreprises et partenaires pour soutenir le Congrès de la Jeunesse Bapa et renforcer l'engagement des jeunes du royaume.",
    highlights: [
      'AJEEPA — Association des Jeunes Élèves et Étudiants Bapa',
      'Congrès de la Jeunesse Bapa : appel au sponsoring ouvert',
      'Visibilité accrue sur les supports de l’association',
      'Réseautage avec les acteurs clés du territoire',
      'Engagement citoyen et valorisation du patrimoine bapa',
    ],
    content: [
      "L'Association des Jeunes Élèves et Étudiants Bapa (AJEEPA) porte la voix de la jeunesse scolarisée et universitaire du Royaume de Bapa. Dans cette dynamique, elle présente le Congrès de la Jeunesse Bapa, un rendez-vous fédérateur destiné à rassembler les jeunes autour des enjeux éducatifs, culturels et communautaires du territoire.",
      "Pour mener à bien cette initiative, l'AJEEPA lance un appel au sponsoring auprès des entreprises, institutions, associations et mécènes sensibles à l'avenir de la jeunesse bapa. Chaque contribution permet d'amplifier la portée du congrès et de garantir des conditions d'organisation à la hauteur des ambitions affichées.",
      "Les partenaires qui répondent à cet appel bénéficient d'une visibilité accrue sur les supports de communication de l'association, d'opportunités de réseautage avec les acteurs clés du royaume et d'une participation concrète à un projet d'engagement citoyen au service du patrimoine et de la cohésion communautaire.",
      "Le Congrès de la Jeunesse Bapa s'inscrit dans la continuité des valeurs transmises par la chefferie et les structures locales : respect des traditions, excellence scolaire, solidarité intergénérationnelle et responsabilité citoyenne. L'AJEEPA entend en faire un espace de dialogue, de formation et de projection collective pour les générations à venir.",
      "Les personnes et structures intéressées par le sponsoring peuvent contacter l'AJEEPA aux numéros +237 695 697 269 et +237 652 042 545. Les modalités de partenariat et le dossier de présentation du congrès seront communiqués directement aux sponsors potentiels.",
    ],
    relatedLinks: [
      {
        href: '/communaute',
        label: 'Les Communautés',
        description: 'Royaume de Bapa, diaspora, activités et engagement citoyen.',
      },
      {
        href: '/contacts',
        label: 'Contacts du secrétariat',
        description: 'Coordonnées officielles du Royaume de Bapa pour toute démarche institutionnelle.',
      },
      {
        href: '/royaume/traditions',
        label: 'Traditions du royaume',
        description: 'Patrimoine culturel et valeurs transmises aux jeunes générations.',
      },
    ],
    date: '2026-05-19',
    category: 'Annonces',
    image: '/images/ajeepa-congres-jeunesse-bapa.png',
  },
  {
    slug: 'preparatifs-paa-ngouook-2028',
    title: "Les préparatifs du Pa'a Ngouo'ok 2028 sont lancés",
    excerpt:
      "Le comité d'organisation du festival biennal réunit chefs traditionnels, associations et diaspora pour une édition ambitieuse au Royaume de Bapa.",
    highlights: [
      'Lancement officiel des préparatifs pour l’édition 2028',
      'Concertation chefferie, quartiers, associations et diaspora',
      'Priorités : accueil des visiteurs, troupes de danse et gastronomie locale',
      'Chantiers communautaires annoncés dès le printemps',
    ],
    content: [
      "Le Royaume de Bapa a officiellement lancé les préparatifs de la prochaine édition du festival Pa'a Ngouo'ok, prévue en 2028. Ce grand rassemblement biennal célèbre l'identité bamiléké à travers les danses, les rituels, la gastronomie et la solidarité communautaire.",
      "Une réunion plénière du comité d'organisation a réuni le conseil des notables, les responsables des associations culturelles, les représentants de quartier et des membres de la diaspora venus soutenir la dynamique du territoire. La coordination générale s'appuie sur la légitimité de la chefferie et sur les structures locales déjà engagées dans la valorisation du patrimoine.",
      "Les axes de travail retenus pour les mois à venir couvrent le renforcement des infrastructures d'accueil (hébergement, accès, sanitaires), la programmation des troupes de danse traditionnelle et des sociétés initiatiques, ainsi que la mise en avant de la gastronomie locale et des savoir-faire artisanaux.",
      "Le musée case patrimoniale, les sites touristiques du royaume et les espaces du palais royal seront intégrés au parcours proposé aux visiteurs. Une attention particulière sera portée à la sécurité des déplacements, au protocole coutumier et à la visibilité des symboles communautaires.",
      "Les habitants, la diaspora et les partenaires sont invités à contribuer aux chantiers communautaires annoncés dès le printemps. Les annonces officielles (programme détaillé, calendrier des répétitions, appels à partenariat) seront publiées sur le portail et dans la rubrique Échos de Bapa au fil de l'organisation.",
    ],
    relatedLinks: [
      {
        href: '/economie/festival/2028',
        label: "Page de l'édition 2028",
        description: 'Thème, programme, comité et mot du PCO — dossier structuré du festival.',
      },
      {
        href: '/economie/festival',
        label: "Toutes les éditions Pa'a Ngouo'ok",
        description: 'Retrouvez les éditions 2018, 2023 et la préparation 2028.',
      },
      {
        href: '/tourisme/visitez-bapa',
        label: 'Visitez Bapa',
        description: 'Carte touristique et sites à découvrir pendant le festival.',
      },
    ],
    date: '2026-04-12',
    category: 'Festival',
    image: '/images/festival-ngouook-procession.png',
  },
  {
    slug: 'ouverture-musee-case-patrimoniale',
    title: 'Inauguration du Musée Case Patrimoniale',
    excerpt:
      "Un nouveau lieu de mémoire ouvre ses portes pour présenter l'histoire Bamiléké et les trésors du royaume de Bapa.",
    content: [
      "La Case Patrimoniale accueille désormais collections d'objets royaux, archives photographiques et espaces pédagogiques dédiés aux jeunes générations. L'inauguration s'est tenue en présence du Fon et des autorités du département des Hauts-Plateaux.",
      "Le musée s'inscrit dans la stratégie touristique du village et propose boutique artisanale, visites guidées et ateliers culturels pour les groupes scolaires.",
    ],
    date: '2026-03-05',
    category: 'Tourisme',
    image: '/images/musee-exposition-artefacts.png',
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
    image: '/images/hero-slide-architecture-patrimoine.png',
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
    image: '/images/mot-du-roi-header-palais.png',
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
    category: 'Échos du palais',
    image: '/images/hero-slide-cortege-traditionnel.png',
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
    category: 'Culture et traditions',
    image: '/images/musee-celebration-culturelle.png',
  },
];

export function getEchoBySlug(slug: string): EchoArticle | undefined {
  return echoArticles.find((a) => a.slug === slug);
}

/** Articles connexes : même rubrique en priorité, puis les autres (ordre du fil). */
export function getRelatedEchoes(slug: string, limit = 3): EchoArticle[] {
  const current = getEchoBySlug(slug);
  if (!current) return [];
  const others = echoArticles.filter((a) => a.slug !== slug);
  const sameCat = others.filter((a) => a.category === current.category);
  const diffCat = others.filter((a) => a.category !== current.category);
  return [...sameCat, ...diffCat].slice(0, limit);
}

export function estimateEchoReadingMinutes(article: EchoArticle): number {
  const text = `${article.excerpt} ${article.content.join(' ')}`;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatEchoDate(isoDate: string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(isoDate));
}

const categoryStyles: Record<EchoCategory, string> = {
  'Culture et traditions': 'bg-forest/10 text-forest',
  'Sport et loisir': 'bg-teal-100 text-teal-900',
  Tourisme: 'bg-sky-100 text-sky-900',
  Développement: 'bg-blue-100 text-blue-800',
  Festival: 'bg-gold/15 text-gold-dark',
  'Échos du palais': 'bg-gold/20 text-brand',
  Annonces: 'bg-rose-100 text-rose-900',
  Communautés: 'bg-brand/10 text-brand',
  Diaspora: 'bg-purple-100 text-purple-800',
};

export function getCategoryStyle(category: EchoCategory): string {
  return categoryStyles[category];
}
