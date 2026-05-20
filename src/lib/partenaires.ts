export type PartenaireThemeId = 'institutionnel' | 'entreprises' | 'medias' | 'associatif';

export type PartenaireTheme = {
  id: PartenaireThemeId | 'all';
  label: string;
  description: string;
  sectionId: string;
};

export const partenaireThemes: PartenaireTheme[] = [
  {
    id: 'all',
    label: 'Tous les partenaires',
    description: 'Ensemble des partenaires du Royaume de Bapa, classés par type d’acteur.',
    sectionId: 'partenaires',
  },
  {
    id: 'institutionnel',
    label: 'Institutionnel',
    description: 'Ambassades, organisations internationales et institutions publiques.',
    sectionId: 'institutionnel',
  },
  {
    id: 'entreprises',
    label: 'Entreprises',
    description: 'Secteur privé et mécénat d’entreprise au service du développement local.',
    sectionId: 'entreprises',
  },
  {
    id: 'medias',
    label: 'Médias',
    description: 'Chaînes, presse et partenaires de communication.',
    sectionId: 'medias',
  },
  {
    id: 'associatif',
    label: 'Associatif & ONG',
    description: 'Associations, fondations et acteurs de la solidarité.',
    sectionId: 'associatif',
  },
];

/** Dossier public des logos — déposer un fichier `{id}.png` ou `{id}.webp` par partenaire. */
export const PARTENAIRE_LOGO_DIR = '/images/partenaires' as const;

export const PARTENAIRE_LOGO_PLACEHOLDER = `${PARTENAIRE_LOGO_DIR}/placeholder.svg` as const;

export type Partenaire = {
  id: string;
  name: string;
  role: string;
  theme: PartenaireThemeId;
  /**
   * Logo (sous `public/`), ex. `/images/partenaires/unesco.png`.
   * Par défaut : `/images/partenaires/{id}.png`
   */
  logoSrc?: string;
  logoAlt?: string;
  /** Lien externe — à renseigner lorsque disponible */
  href?: string;
};

/** Chemin du logo attendu pour un partenaire. */
export function partenaireLogoSrc(partner: Pick<Partenaire, 'id' | 'logoSrc'>): string {
  return partner.logoSrc ?? `${PARTENAIRE_LOGO_DIR}/${partner.id}.png`;
}

/** Liste des fichiers logo à fournir (convention `{id}.png`). */
export const partenaireLogoFilenames = [
  'ambassade-suisse.png',
  'banque-mondiale.png',
  'unesco.png',
  'chefferie-bapa.png',
  'commune-bangou.png',
  'congelcam.png',
  'royal-des-jeux.png',
  'canal2.png',
  'adevipa.png',
  'diaspora-bapa.png',
] as const;

export const partenaires: Partenaire[] = [
  {
    id: 'ambassade-suisse',
    name: 'Ambassade de Suisse',
    role: 'Coopération bilatérale et appui aux projets de développement local.',
    theme: 'institutionnel',
  },
  {
    id: 'banque-mondiale',
    name: 'Banque mondiale',
    role: 'Financement et expertise pour les programmes structurants du territoire.',
    theme: 'institutionnel',
  },
  {
    id: 'unesco',
    name: 'UNESCO',
    role: 'Patrimoine culturel, éducation et sauvegarde des traditions bamiléké.',
    theme: 'institutionnel',
  },
  {
    id: 'chefferie-bapa',
    name: 'Chefferie de Bapa',
    role: 'Institution coutumière — légitimité et coordination des initiatives du Royaume de Bapa.',
    theme: 'institutionnel',
  },
  {
    id: 'commune-bangou',
    name: 'Commune de Bangou',
    role: 'Collectivité territoriale — concertation administrative et aménagement local.',
    theme: 'institutionnel',
  },
  {
    id: 'congelcam',
    name: 'Congelcam',
    role: 'Partenaire économique — soutien aux filières et à la vie économique du territoire.',
    theme: 'entreprises',
  },
  {
    id: 'royal-des-jeux',
    name: 'Royal des jeux',
    role: 'Mécénat et visibilité lors des grands événements culturels du Royaume.',
    theme: 'entreprises',
  },
  {
    id: 'canal2',
    name: 'Canal2 International',
    role: 'Couverture médiatique et promotion des manifestations (Festival Pa’a Ngouo’ok, cérémonies royales).',
    theme: 'medias',
  },
  {
    id: 'adevipa',
    name: 'ADEVIPA',
    role: 'Association pour le développement du village BAPA — santé, éducation, patrimoine.',
    theme: 'associatif',
  },
  {
    id: 'diaspora-bapa',
    name: 'Diaspora Bapa',
    role: 'Solidarité, financement de chantiers et relais international de la communauté.',
    theme: 'associatif',
  },
];

export function filterPartenaires(theme: PartenaireTheme['id']): Partenaire[] {
  if (theme === 'all') return partenaires;
  return partenaires.filter((p) => p.theme === theme);
}

export function countPartenairesByTheme(theme: PartenaireThemeId): number {
  return partenaires.filter((p) => p.theme === theme).length;
}
