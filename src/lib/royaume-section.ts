/** Contenu de la section « Le Royaume de Bapa » sur l’accueil. */
export const ROYAUME_HERITAGE_BG = '/images/hero-slide-palais-bapa.png' as const;

export type RoyaumePillarIcon = 'histoire' | 'traditions' | 'roi' | 'chefferie' | 'administration' | 'langues';

export const royaumePillars = [
  {
    num: '01',
    icon: 'histoire' as RoyaumePillarIcon,
    title: 'Histoire & Dynasties',
    desc: 'La lignée des souverains et la chefferie supérieure, de 1682 à nos jours.',
    href: '/royaume/histoire',
    image: '/images/royaume-dynastie-plaque.png',
  },
  {
    num: '02',
    icon: 'traditions' as RoyaumePillarIcon,
    title: 'Traditions',
    desc: "Danses Nkeng, masques sacrés et rites d'initiation bamiléké.",
    href: '/royaume/traditions',
    image: '/images/hero-slide-cortege-traditionnel.png',
  },
  {
    num: '03',
    icon: 'roi' as RoyaumePillarIcon,
    title: 'Mot du Roi',
    desc: 'La parole de Sa Majesté SIMEU David II pour le peuple et la diaspora.',
    href: '/royaume/mot-du-roi',
    image: '/images/mot-du-roi-header-palais.png',
  },
  {
    num: '04',
    icon: 'chefferie' as RoyaumePillarIcon,
    title: 'La Chefferie',
    desc: 'Organisation coutumière et institutions du Royaume de Bapa.',
    href: '/royaume/chefferie',
    image: '/images/festival-ngouook-procession.png',
  },
  {
    num: '05',
    icon: 'administration' as RoyaumePillarIcon,
    title: 'Administration',
    desc: 'Cadre territorial : Hauts-Plateaux, commune de Bangou.',
    href: '/royaume/administration',
    image: '/images/hero-slide-architecture-patrimoine.png',
  },
  {
    num: '06',
    icon: 'langues' as RoyaumePillarIcon,
    title: 'Langues & Cultures',
    desc: 'Diversité linguistique et patrimoine immatériel des Grassfields.',
    href: '/royaume/langues-et-cultures',
    image: '/images/musee-costumes-ndop.png',
  },
] as const;
