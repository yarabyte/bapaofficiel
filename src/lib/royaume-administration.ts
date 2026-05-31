export const WIKI_BAPA_URL = 'https://fr.wikipedia.org/wiki/Bapa' as const;

export const adminTerritoryFacts = [
  { id: 'pays', label: 'Pays', value: 'Cameroun' },
  { id: 'region', label: 'Région', value: 'Ouest' },
  { id: 'departement', label: 'Département', value: 'Hauts-Plateaux' },
  { id: 'commune', label: 'Commune', value: 'Bangou' },
  {
    id: 'population',
    label: 'Population recensée',
    value: '2\u00a0518 habitants',
    detail: '3ᵉ RGPH, 2005 — source Wikipédia',
    wide: true,
  },
  {
    id: 'coords',
    label: 'Coordonnées',
    value: '5° 17′ 20″ N, 10° 20′ 14″ E',
    wide: true,
  },
] as const;

export const adminGalleryImages = [
  {
    src: '/images/mot-du-roi-header-palais.png',
    alt: 'Architecture traditionnelle du site royal à Bapa',
    caption: 'Site royal',
  },
  {
    src: '/images/hero-slide-cortege-traditionnel.png',
    alt: 'Cortège traditionnel en habits royaux à Bapa',
    caption: 'Traditions royales',
  },
  {
    src: '/images/festival-ngouook-procession.png',
    alt: 'Procession du festival Pa’a Ngouo’ok',
    caption: 'Festival Pa’a Ngouo’ok',
  },
] as const;
