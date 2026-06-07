export const ADEVIPA_PATH = '/developpement/adevipa' as const;

export const adevipaNavSections = [
  { id: 'a-propos', label: "À propos", icon: 'about' as const },
  { id: 'presidents', label: 'Présidents', icon: 'people' as const },
  { id: 'interview', label: 'Interview', icon: 'interview' as const },
  { id: 'realisations', label: 'Réalisations', icon: 'projects' as const },
  { id: 'partenaires', label: 'Partenaires', icon: 'partners' as const },
] as const;

export type AdevipaNavIcon = (typeof adevipaNavSections)[number]['icon'];

export const adevipaGalleryImages = [
  {
    src: '/images/musee-exposition-artefacts.png',
    alt: 'Valorisation du patrimoine et actions culturelles',
    caption: 'Patrimoine & culture',
  },
  {
    src: '/images/hero-slide-cortege-traditionnel.png',
    alt: 'Vie communautaire et chefferie',
    caption: 'Communauté & chefferie',
  },
  {
    src: '/images/festival-ngouook-procession.png',
    alt: 'Rassemblement et solidarité du territoire',
    caption: 'Solidarité territoriale',
  },
] as const;

/** Données provisoires — à remplacer par les informations validées par l’association. */
export const adevipaPresidentsPlaceholders = [
  {
    name: 'À compléter',
    mandat: '… — …',
    note: 'Portrait et biographie courte seront ajoutés ici.',
  },
  {
    name: 'À compléter',
    mandat: '… — …',
    note: 'Deuxième mandat ou président historique.',
  },
  {
    name: 'À compléter',
    mandat: 'Présidence actuelle',
    note: 'Nom du président en exercice — voir aussi la section interview.',
  },
] as const;

export const adevipaRealisationsPlaceholders = [
  {
    titre: 'Santé communautaire',
    detail: 'Campagnes, sensibilisation et appui aux infrastructures de proximité (texte à préciser).',
    href: '/developpement/adevipa/sante',
  },
  {
    titre: 'Éducation & jeunesse',
    detail: 'Équipements scolaires, bourses ou partenariats (texte à préciser).',
    href: '/developpement/adevipa/education',
  },
  {
    titre: 'Patrimoine & culture',
    detail: 'Valorisation du musée case patrimoniale et des initiatives culturelles du Royaume de Bapa.',
    href: '/tourisme/musee',
  },
  {
    titre: 'Infrastructures & projets structurants',
    detail: 'Chantiers prioritaires validés avec la chefferie et la commune (liste à détailler).',
  },
] as const;

export const adevipaPartenairesPlaceholders = [
  { name: 'Chefferie de Bapa', type: 'Institution coutumière — appui et légitimité des actions' },
  { name: 'Commune de Bangou', type: 'Collectivité territoriale — coordination locale' },
  { name: 'Diaspora Bapa', type: 'Solidarité et financement des projets structurants' },
  { name: 'À compléter', type: 'Partenaires institutionnels, ONG, entreprises ou mécènes' },
] as const;

export const adevipaInterviewPlaceholders = [
  {
    question: "Quelles sont les priorités d'ADEVIPA pour les mois à venir ?",
    answer: "[Réponse du président — à rédiger ou à transcrire depuis l'enregistrement.]",
  },
  {
    question: 'Comment la diaspora et les partenaires peuvent-ils soutenir concrètement le territoire ?',
    answer: '[Réponse du président — appels à projet, cotisations, chantiers, mise en réseau…]',
  },
  {
    question: 'Quel message souhaitez-vous adresser aux habitants de Bapa ?',
    answer: '[Citation ou paragraphe de clôture — à compléter.]',
  },
] as const;
