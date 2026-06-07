export const MUSEE_PATH = '/tourisme/musee' as const;

export const museeNavSections = [
  { id: 'description', label: 'Le musée' },
  { id: 'boutique', label: 'Boutique' },
  { id: 'equipe', label: 'Équipe' },
  { id: 'partenaires', label: 'Partenaires' },
  { id: 'interview', label: 'Interview du Directeur' },
  { id: 'mediatheque', label: 'Médiathèque' },
] as const;

export type MuseeEspaceIconId =
  | 'accueil'
  | 'exposition'
  | 'temporaire'
  | 'bibliotheque'
  | 'reserve'
  | 'reunion'
  | 'patio';

export const museeCasePatrimoniale = {
  title: 'Musée Case Patrimoniale',
  tagline: 'Homme, Nature et Croyances',
  theme: 'Homme, Nature et Croyances',
  intro:
    "Bâti autour du thème « Homme, Nature et Croyances », ce joyau architectural, pensé et mis en œuvre par Sa Majesté SIMEU David II, avec l'accompagnement de sa population et de divers partenaires nationaux et internationaux, est une triple interpellation culturelle :",
  pillars: [
    'Le devoir de résistance.',
    "L'urgence d'une prise de conscience.",
    "La nécessité de conserver le naturel de notre environnement afin d'en tirer le meilleur de son énorme potentiel.",
  ] as const,
  experience: {
    question: 'Et comment vivre cette interpellation ?',
    answer:
      'Tout simplement en vous laissant guider à travers les 07 espaces de cette grotte.',
  },
  boutique: {
    title: 'Boutique artisanale',
    description:
      "Le hall d'accueil accueille les visiteurs, la billetterie et une boutique proposant des articles artisanaux. Visites guidées et ateliers culturels pour les groupes scolaires complètent l'offre du musée.",
  },
  facilities:
    "En plus de sa bibliothèque, le Musée met à votre disposition une salle multimédia d'une capacité de 30 places pour vos réunions ou séances de travail dans un cadre exceptionnel.",
  practical: {
    hours: 'Ouvert de mardi à dimanche.',
    phones: [
      { display: '656 642 956', tel: '+237656642956' },
      { display: '656 998 509', tel: '+237656998509' },
    ],
    whatsapp: { display: '693 858 271', tel: '+237693858271' },
  },
} as const;

export const museeEspaces: ReadonlyArray<{
  label: string;
  detail: string;
  icon: MuseeEspaceIconId;
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

export const museeEquipe = [
  { role: 'Direction', name: 'À compléter', note: 'Directeur du musée — voir interview ci-dessous.' },
  { role: 'Médiation & accueil', name: 'À compléter', note: 'Stagiaires et équipe d’accueil au hall.' },
  { role: 'Conservation', name: 'À compléter', note: 'Gestion des collections et de la réserve.' },
] as const;

/** Articles de la boutique — visuels à remplacer par les photos officielles des produits. */
export const museeBoutiqueArticles = [
  {
    id: 'masques',
    title: 'Masques & statuaires',
    description: 'Reproductions et pièces inspirées des masques des Grassfields.',
    src: '/images/musee-exposition-artefacts.png',
    alt: 'Masques et artefacts traditionnels exposés au musée',
  },
  {
    id: 'poteries',
    title: 'Poteries & céramiques',
    description: 'Objets façonnés selon les savoir-faire bamiléké du Royaume de Bapa.',
    src: '/images/musee-exposition-artefacts.png',
    alt: 'Poteries et panneaux sur les savoir-faire traditionnels',
  },
  {
    id: 'ndop',
    title: 'Textiles ndop',
    description: 'Tissus aux motifs ndop, emblématiques de l’identité culturelle locale.',
    src: '/images/musee-costumes-ndop.png',
    alt: 'Costumes et tissus aux motifs ndop',
  },
  {
    id: 'toghu',
    title: 'Tenues toghu',
    description: 'Étoffes et accessoires inspirés des célébrations coutumières.',
    src: '/images/musee-celebration-culturelle.png',
    alt: 'Tenues traditionnelles toghu',
  },
  {
    id: 'artisanat',
    title: 'Artisanat du terroir',
    description: 'Pièces issues des métiers d’art et de la vie communautaire bapa.',
    src: '/images/hero-slide-cortege-traditionnel.png',
    alt: 'Artisanat et cortège traditionnel',
  },
  {
    id: 'souvenirs',
    title: 'Souvenirs du patrimoine',
    description: 'Cartes postales, ouvrages et objets commémoratifs du musée.',
    src: '/images/hero-slide-architecture-patrimoine.png',
    alt: 'Architecture patrimoniale du Royaume de Bapa',
  },
] as const;

export const museeGalleryImages = [
  {
    src: '/images/musee-exposition-artefacts.png',
    alt: 'Exposition : masques, poteries et panneaux pédagogiques',
    caption: 'Savoir-faire et collections',
  },
  {
    src: '/images/musee-celebration-culturelle.png',
    alt: 'Célébration en tenues traditionnelles',
    caption: 'Traditions vivantes',
  },
  {
    src: '/images/musee-costumes-ndop.png',
    alt: 'Costumes cérémoniels et motifs ndop',
    caption: 'Salles permanentes — costumes et masques royaux',
  },
] as const;
