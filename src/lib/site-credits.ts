/** Chemin de la page présentant les concepteurs du portail. */
export const siteConcepteursPath = '/concepteurs' as const;

export const siteCopyrightHolder = 'Bapa Officiel';
export const siteCopyrightTerritory = 'Royaume de Bapa';

export type ConcepteurMember = {
  id: string;
  name: string;
  role: string;
  contribution: string;
  href?: string;
};

export const siteConcepteursIntro =
  'Le portail bapa-officiel.com a été conçu pour valoriser le patrimoine, les institutions et les dynamiques de développement du Royaume de Bapa. Cette page rend hommage aux personnes et structures qui ont participé à sa conception, à sa réalisation technique et à la coordination éditoriale.';

export const siteConcepteursMission = [
  'Offrir une vitrine institutionnelle claire, accessible sur mobile et desktop.',
  'Structurer les contenus du royaume, du développement, du tourisme et de la communauté.',
  'Préparer l’évolution vers une médiathèque et des formulaires de contact opérationnels.',
] as const;

/** Membres et rôles — à compléter avec les noms validés par la chefferie. */
export const siteConcepteurs: ConcepteurMember[] = [
  {
    id: 'direction',
    name: 'Secrétariat du Royaume de Bapa',
    role: 'Direction éditoriale & validation des contenus',
    contribution:
      'Cadrage institutionnel, relecture des textes officiels et validation des messages du portail.',
  },
  {
    id: 'design',
    name: 'Équipe design & identité visuelle',
    role: 'Conception graphique, UX et charte',
    contribution:
      'Architecture de l’information, maquettes, palette patrimoniale, iconographie et expérience utilisateur.',
  },
  {
    id: 'dev',
    name: 'Équipe développement web',
    role: 'Réalisation technique',
    contribution:
      'Développement Next.js, intégration des pages, performances, accessibilité et déploiement.',
  },
  {
    id: 'contenus',
    name: 'Contributions communautaires',
    role: 'Textes, médias & partenariats',
    contribution:
      'Échos du village, médiathèque, partenaires et ressources touristiques — en co-construction avec les structures locales.',
  },
];

export const siteTechnologies = [
  'Next.js (App Router)',
  'React & TypeScript',
  'Tailwind CSS',
  'Hébergement web moderne (CI/CD)',
] as const;
