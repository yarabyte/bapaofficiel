import { ECHO_CATEGORIES, type EchoCategory } from '@/lib/echos';

export type MediathequeCategoryId = 'photos' | 'pdf' | 'videos' | 'audio';

/** Thématiques de classement (alignées sur les Échos + Royaume). */
export type MediathequeTopic = EchoCategory | 'Royaume';

export type MediathequeTopicFilterId = MediathequeTopic | 'all';

export const mediathequeTopicFilters: { id: MediathequeTopicFilterId; label: string }[] = [
  { id: 'all', label: 'Toutes les catégories' },
  { id: 'Royaume', label: 'Royaume' },
  ...ECHO_CATEGORIES.map((c) => ({ id: c as MediathequeTopicFilterId, label: c })),
];

export type MediathequeCategory = {
  id: MediathequeCategoryId | 'all';
  label: string;
  description: string;
  sectionId: string;
};

export const mediathequeCategories: MediathequeCategory[] = [
  {
    id: 'all',
    label: 'Tout',
    description: 'Parcourir l’ensemble des ressources publiées.',
    sectionId: 'ressources',
  },
  {
    id: 'photos',
    label: 'Photos',
    description: 'Archives photographiques du Royaume, du musée et des grands événements.',
    sectionId: 'photos',
  },
  {
    id: 'pdf',
    label: 'Documentation PDF',
    description: 'Brochures, rapports et documents officiels téléchargeables.',
    sectionId: 'pdf',
  },
  {
    id: 'videos',
    label: 'Vidéos',
    description: 'Reportages, cérémonies et capsules patrimoniales.',
    sectionId: 'videos',
  },
  {
    id: 'audio',
    label: 'Audio',
    description: 'Témoignages, musiques et enregistrements sonores.',
    sectionId: 'audio',
  },
];

type MediathequeItemBase = {
  topics: MediathequeTopic[];
};

export type MediathequePhoto = MediathequeItemBase & {
  kind: 'photo';
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  date?: string;
};

export type MediathequePdf = MediathequeItemBase & {
  kind: 'pdf';
  id: string;
  title: string;
  description: string;
  date?: string;
  pages?: number;
  fileSize?: string;
  /** Lien vers /public/… — absent tant que le fichier n’est pas publié */
  href?: string;
};

export type MediathequeVideo = MediathequeItemBase & {
  kind: 'video';
  id: string;
  title: string;
  description: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  duration?: string;
  date?: string;
  /** URL YouTube, Vimeo ou fichier mp4 */
  href?: string;
};

export type MediathequeAudio = MediathequeItemBase & {
  kind: 'audio';
  id: string;
  title: string;
  description: string;
  duration?: string;
  date?: string;
  href?: string;
};

export type MediathequeItem = MediathequePhoto | MediathequePdf | MediathequeVideo | MediathequeAudio;

export const mediathequePhotos: MediathequePhoto[] = [
  {
    kind: 'photo',
    id: 'photo-palais',
    title: 'Palais royal de Bapa',
    caption: 'Architecture et cour royale — vue du palais.',
    src: '/images/hero-slide-palais-bapa.png',
    alt: 'Palais royal de Bapa sur les hautes terres',
    date: '2024',
    topics: ['Royaume', 'Tourisme'],
  },
  {
    kind: 'photo',
    id: 'photo-cortege',
    title: 'Cortège traditionnel',
    caption: 'Procession et tenues cérémonielles du village.',
    src: '/images/hero-slide-cortege-traditionnel.png',
    alt: 'Cortège traditionnel bamiléké à Bapa',
    topics: ['Culture et traditions', 'Festival'],
  },
  {
    kind: 'photo',
    id: 'photo-festival',
    title: 'Festival Pa’a Ngouo’ok',
    caption: 'Moment fort de la procession culturelle.',
    src: '/images/festival-ngouook-procession.png',
    alt: 'Procession du festival Pa’a Ngouo’ok',
    topics: ['Festival', 'Culture et traditions'],
  },
  {
    kind: 'photo',
    id: 'photo-musee-costumes',
    title: 'Costumes et masques royaux',
    caption: 'Salle permanente du musée case patrimoniale.',
    src: '/images/musee-costumes-ndop.png',
    alt: 'Exposition de costumes cérémoniels et masques',
    topics: ['Culture et traditions', 'Tourisme'],
  },
  {
    kind: 'photo',
    id: 'photo-musee-artefacts',
    title: 'Collections du musée',
    caption: 'Masques, poteries et panneaux pédagogiques.',
    src: '/images/musee-exposition-artefacts.png',
    alt: 'Vitrines d’artefacts traditionnels',
    topics: ['Culture et traditions', 'Tourisme'],
  },
  {
    kind: 'photo',
    id: 'photo-celebration',
    title: 'Vie culturelle',
    caption: 'Célébration en tenues toghu — traditions vivantes.',
    src: '/images/musee-celebration-culturelle.png',
    alt: 'Célébration culturelle en tenues traditionnelles',
    topics: ['Communautés', 'Culture et traditions'],
  },
  {
    kind: 'photo',
    id: 'photo-architecture',
    title: 'Montagne & patrimoine bâti',
    caption: 'Paysages et architecture des Hauts-Plateaux.',
    src: '/images/hero-slide-architecture-patrimoine.png',
    alt: 'Architecture patrimoniale et paysage montagneux',
    topics: ['Tourisme', 'Sport et loisir'],
  },
  {
    kind: 'photo',
    id: 'photo-dynastie',
    title: 'Plaque dynastique',
    caption: 'Mémoire des souverains du Royaume de Bapa.',
    src: '/images/royaume-dynastie-plaque.png',
    alt: 'Plaque commémorative de la dynastie royale',
    topics: ['Royaume', 'Culture et traditions'],
  },
];

export const mediathequePdfs: MediathequePdf[] = [
  {
    kind: 'pdf',
    id: 'pdf-guide-visite',
    title: 'Guide de visite — Musée Case Patrimoniale',
    description: 'Parcours des salles, horaires et tarifs indicatifs.',
    pages: 12,
    fileSize: '2,4 Mo',
    topics: ['Tourisme', 'Culture et traditions'],
  },
  {
    kind: 'pdf',
    id: 'pdf-festival-programme',
    title: 'Programme Festival Pa’a Ngouo’ok',
    description: 'Édition récente — cérémonies, animations et contacts organisateurs.',
    pages: 24,
    fileSize: '5,1 Mo',
    topics: ['Festival'],
  },
  {
    kind: 'pdf',
    id: 'pdf-chefferie',
    title: 'Présentation de la chefferie de Bapa',
    description: 'Organisation coutumière, attributs et rôle institutionnel.',
    pages: 8,
    fileSize: '1,8 Mo',
    topics: ['Royaume', 'Communautés'],
  },
  {
    kind: 'pdf',
    id: 'pdf-adevipa',
    title: 'ADEVIPA — Projets & réalisations',
    description: 'Synthèse des actions de développement du village (texte à valider).',
    pages: 16,
    fileSize: '3,2 Mo',
    topics: ['Développement'],
  },
];

export const mediathequeVideos: MediathequeVideo[] = [
  {
    kind: 'video',
    id: 'video-festival',
    title: 'Festival Pa’a Ngouo’ok — extraits',
    description: 'Procession, danses et moments forts de l’édition.',
    thumbnailSrc: '/images/festival-ngouook-procession.png',
    thumbnailAlt: 'Aperçu vidéo festival',
    duration: '12 min',
    topics: ['Festival'],
  },
  {
    kind: 'video',
    id: 'video-musee',
    title: 'Visite du musée case patrimoniale',
    description: 'Découverte des espaces d’exposition et de la médiathèque.',
    thumbnailSrc: '/images/musee-exposition-artefacts.png',
    thumbnailAlt: 'Aperçu visite musée',
    duration: '8 min',
    topics: ['Tourisme', 'Culture et traditions'],
  },
  {
    kind: 'video',
    id: 'video-mot-du-roi',
    title: 'Message du Fon',
    description: 'Allocution ou entretien officiel — à publier après validation.',
    thumbnailSrc: '/images/mot-du-roi-header-palais.png',
    thumbnailAlt: 'Aperçu message du Fon',
    duration: '5 min',
    topics: ['Royaume'],
  },
  {
    kind: 'video',
    id: 'video-sites',
    title: 'Sites touristiques de Bapa',
    description: 'Panorama des lieux à découvrir sur le territoire royal.',
    thumbnailSrc: '/images/hero-slide-architecture-patrimoine.png',
    thumbnailAlt: 'Aperçu sites touristiques',
    duration: '10 min',
    topics: ['Tourisme'],
  },
  {
    kind: 'video',
    id: 'video-canal2',
    title: 'Canal2 International',
    description:
      'Reportages et retransmissions — Festival Pa’a Ngouo’ok, cérémonies du Royaume et vie culturelle de Bapa.',
    thumbnailSrc: '/images/festival-ngouook-procession.png',
    thumbnailAlt: 'Couverture médiatique Canal2 International à Bapa',
    duration: 'Reportage',
    topics: ['Festival', 'Culture et traditions', 'Communautés'],
  },
];

export const mediathequeAudios: MediathequeAudio[] = [
  {
    kind: 'audio',
    id: 'audio-traditions',
    title: 'Musiques et chants traditionnels',
    description: 'Enregistrements de cérémonies et répertoires locaux.',
    duration: '18 min',
    topics: ['Culture et traditions'],
  },
  {
    kind: 'audio',
    id: 'audio-temoignage',
    title: 'Témoignage — mémoire du village',
    description: 'Entretien avec un notable du Royaume (à transcrire et publier).',
    duration: '22 min',
    topics: ['Royaume', 'Communautés'],
  },
  {
    kind: 'audio',
    id: 'audio-diaspora',
    title: 'Voix de la diaspora',
    description: 'Message ou témoignage depuis l’étranger — à publier.',
    duration: '15 min',
    topics: ['Diaspora'],
  },
];

export const mediathequeItems: MediathequeItem[] = [
  ...mediathequePhotos,
  ...mediathequePdfs,
  ...mediathequeVideos,
  ...mediathequeAudios,
];

export function countByCategory(category: MediathequeCategoryId): number {
  switch (category) {
    case 'photos':
      return mediathequePhotos.length;
    case 'pdf':
      return mediathequePdfs.length;
    case 'videos':
      return mediathequeVideos.length;
    case 'audio':
      return mediathequeAudios.length;
  }
}

const kindToCategory: Record<MediathequeItem['kind'], MediathequeCategoryId> = {
  photo: 'photos',
  pdf: 'pdf',
  video: 'videos',
  audio: 'audio',
};

export function itemCategoryId(item: MediathequeItem): MediathequeCategoryId {
  return kindToCategory[item.kind];
}

export function itemMatchesTopic(item: MediathequeItem, topic: MediathequeTopicFilterId): boolean {
  if (topic === 'all') return true;
  return item.topics.includes(topic);
}

export function filterMediathequeItems(
  mediaType: MediathequeCategory['id'],
  topic: MediathequeTopicFilterId = 'all',
): MediathequeItem[] {
  const byType =
    mediaType === 'all'
      ? mediathequeItems
      : mediathequeItems.filter((item) => kindToCategory[item.kind] === mediaType);
  return byType.filter((item) => itemMatchesTopic(item, topic));
}

export function countByTopic(
  topic: MediathequeTopicFilterId,
  mediaType: MediathequeCategory['id'] = 'all',
): number {
  return filterMediathequeItems(mediaType, topic).length;
}
