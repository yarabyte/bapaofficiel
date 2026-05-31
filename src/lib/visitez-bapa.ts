export const VISITEZ_BAPA_PATH = '/tourisme/visitez-bapa' as const;
export const CARTE_TOURISTIQUE_IMAGE = '/images/carte-touristique-royaume-bapa.png' as const;

export type VisitezSectionIconId =
  | 'carte'
  | 'localisation'
  | 'quartiers'
  | 'sites'
  | 'credits'
  | 'culture'
  | 'nature'
  | 'hotel'
  | 'route'
  | 'marche'
  | 'sante'
  | 'ecole'
  | 'eglise';

export const visitezBapaNavSections = [
  { id: 'carte', label: 'La carte', icon: 'carte' as VisitezSectionIconId },
  { id: 'localisation', label: 'Localisation', icon: 'localisation' as VisitezSectionIconId },
  { id: 'quartiers', label: 'Quartiers', icon: 'quartiers' as VisitezSectionIconId },
  { id: 'sites', label: 'Sites', icon: 'sites' as VisitezSectionIconId },
  { id: 'credits', label: 'Crédits', icon: 'credits' as VisitezSectionIconId },
] as const;

export const bapaGaleriePhotos = [
  {
    src: '/images/hero-slide-palais-bapa.png',
    alt: 'Entrée et architecture du palais royal de Bapa',
    caption: 'Palais Royal — Top',
  },
  {
    src: '/images/musee-costumes-ndop.png',
    alt: 'Costumes cérémoniels et masques traditionnels',
    caption: 'Patrimoine culturel',
  },
  {
    src: '/images/hero-slide-architecture-patrimoine.png',
    alt: 'Formations rocheuses et paysage des Hauts-Plateaux',
    caption: 'Lieu sacré & roches',
  },
  {
    src: '/images/festival-ngouook-procession.png',
    alt: 'Procession du Festival Pa’a Ngouo’ok',
    caption: 'Festival & traditions',
  },
  {
    src: '/images/musee-exposition-artefacts.png',
    alt: 'Exposition au musée case patrimoniale',
    caption: 'Musée Case Patrimoniale',
  },
  {
    src: '/images/hero-slide-cortege-traditionnel.png',
    alt: 'Cortège traditionnel bamiléké',
    caption: 'Vie communautaire',
  },
] as const;

export const bapaLocalisation = {
  departement: 'Hauts-Plateaux',
  region: "Ouest, Cameroun",
  image: '/images/hero-slide-architecture-patrimoine.png',
  voisins: [
    { name: 'Batié', position: 'Nord-Ouest', icon: 'localisation' as VisitezSectionIconId },
    { name: 'Baham', position: 'Est', icon: 'localisation' as VisitezSectionIconId },
    { name: 'Bandenkop', position: 'Sud', icon: 'localisation' as VisitezSectionIconId },
    { name: 'Bamendjou', position: 'Nord (proximité)', icon: 'localisation' as VisitezSectionIconId },
    { name: "Bameka / Bafoussam (Pa' Batié)", position: 'Ouest', icon: 'localisation' as VisitezSectionIconId },
  ],
} as const;

export const bapaQuartiers = [
  { name: 'Djeukou', zone: 'Nord', note: 'avec Famtouh', icon: 'quartiers' as VisitezSectionIconId },
  { name: 'Ndenpa', zone: 'Ouest', note: undefined, icon: 'nature' as VisitezSectionIconId },
  { name: 'Djeuwang', zone: 'Centre-Nord', note: undefined, icon: 'quartiers' as VisitezSectionIconId },
  { name: "La'agou", zone: 'Est', note: 'avec Nkem-Tsala', icon: 'quartiers' as VisitezSectionIconId },
  {
    name: 'Top',
    zone: 'Sud-Centre',
    note: 'Palais Royal',
    icon: 'culture' as VisitezSectionIconId,
    image: '/images/mot-du-roi-header-palais.png',
  },
  { name: "Lou'g", zone: 'Sud-Est', note: undefined, icon: 'quartiers' as VisitezSectionIconId },
] as const;

export const bapaSitesCulturels = [
  {
    title: 'Palais Royal',
    detail: 'Siège de Sa Majesté SIMEU David II, Roi des Bapas — quartier Top.',
    image: '/images/hero-slide-palais-bapa.png',
    icon: 'culture' as VisitezSectionIconId,
  },
  {
    title: 'Chefferies de quartier',
    detail: 'Institutions coutumières dans chaque village du royaume.',
    image: '/images/hero-slide-cortege-traditionnel.png',
    icon: 'culture' as VisitezSectionIconId,
  },
  {
    title: 'Cases traditionnelles',
    detail: 'Architecture Bamiléké d’intérêt patrimonial.',
    image: '/images/musee-costumes-ndop.png',
    icon: 'culture' as VisitezSectionIconId,
  },
  {
    title: 'Musée Case Patrimoniale',
    detail: 'Collections, médiation et boutique artisanale.',
    image: '/images/musee-exposition-artefacts.png',
    icon: 'culture' as VisitezSectionIconId,
    href: '/tourisme/musee',
  },
  {
    title: 'Foyer communautaire',
    detail: 'Accueil et activités collectives du village.',
    image: '/images/musee-celebration-culturelle.png',
    icon: 'culture' as VisitezSectionIconId,
  },
] as const;

export const bapaSitesNaturels = [
  {
    title: 'Chute de Ntui',
    detail: 'Cascade emblématique du territoire — visible sur la carte touristique.',
    image: '/images/hero-slide-architecture-patrimoine.png',
    icon: 'nature' as VisitezSectionIconId,
  },
  {
    title: 'Lieu Sacré',
    detail: 'Formation rocheuse impressionnante, haut lieu symbolique.',
    image: '/images/hero-slide-architecture-patrimoine.png',
    icon: 'nature' as VisitezSectionIconId,
  },
  {
    title: 'Grottes & rocher attractif',
    detail: 'Sites géologiques repérés sur la carte officielle.',
    image: '/images/royaume-dynastie-plaque.png',
    icon: 'nature' as VisitezSectionIconId,
  },
  {
    title: 'Forêt sacrée',
    detail: 'Espace protégé au cœur de la mosaïque paysagère.',
    image: '/images/festival-ngouook-procession.png',
    icon: 'nature' as VisitezSectionIconId,
  },
] as const;

export const bapaPaysages = [
  { label: 'Zones agricoles', color: '#c5e1a5', icon: 'nature' as VisitezSectionIconId },
  { label: 'Forêts', color: '#2d5a3d', icon: 'nature' as VisitezSectionIconId },
  { label: 'Bâtis', color: '#d4a5a5', icon: 'culture' as VisitezSectionIconId },
  { label: 'Savane arbustive & herbeuse', color: '#e8dcc8', icon: 'nature' as VisitezSectionIconId },
] as const;

export const carteCredits = {
  festival: "Festival Pa'a Ngouo'ok — Arts, Culture et Traditions",
  festivalImage: '/images/festival-ngouook-procession.png',
  conception: 'GHOMSI Hervis, ingénieur géomaticien',
  contribution: 'DADJE Jordan, étudiant géomaticien',
  supervisionTechnique: 'Dr KEMMEGNE Joseph, Président de la Coordination du Festival PA\'A NGOUO\'OK 2023',
  supervisionGenerale: 'Sa Majesté SIMEU David II, Roi des Bapas',
  coordonnees: 'WGS 84 — UTM Zone 32 Nord',
  echelle: '1 km (barre d’échelle sur la carte)',
  version: 'V3.2 — 24/10/2023',
  sources: 'OpenStreetMap, Google Earth, données de terrain (août 2023 et mars 2023)',
} as const;

export const visitezBapaQuickLinks = [
  {
    title: 'Musée Case Patrimoniale',
    desc: 'Espaces culturels, boutique et archives Bamiléké.',
    href: '/tourisme/musee',
    image: '/images/musee-exposition-artefacts.png',
    icon: 'culture' as VisitezSectionIconId,
  },
  {
    title: 'Les Saveurs du Palais',
    desc: 'Cuisine locale et hospitalité bamiléké.',
    href: '/tourisme/restaurant',
    image: '/images/musee-celebration-culturelle.png',
    icon: 'hotel' as VisitezSectionIconId,
  },
  {
    title: 'Introduction tourisme',
    desc: 'Enjeux et stratégie de développement touristique.',
    href: '/tourisme/introductionenjeux',
    image: '/images/hero-slide-architecture-patrimoine.png',
    icon: 'carte' as VisitezSectionIconId,
  },
] as const;
