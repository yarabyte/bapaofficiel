/** Chemin de la page présentant les concepteurs du portail. */
export const siteConcepteursPath = '/concepteurs' as const;

export const siteCopyrightHolder = 'Bapa Officiel';
export const siteCopyrightTerritory = 'Royaume de Bapa';

export type RealisationMember = {
  id: string;
  name: string;
};

export const siteConcepteursIntro =
  'Le portail bapa-officiel.com valorise le patrimoine, les institutions et les dynamiques de développement du Royaume de Bapa. Cette page rend hommage à l’équipe qui en assure la supervision et la réalisation technique.';

export type SiteLeadershipRole = {
  title: string;
  name: string;
  description: string;
  initials?: string;
};

export const siteSupervisionGeneral: SiteLeadershipRole = {
  title: 'Supervision générale',
  name: 'Sa Majesté SIMEU David II, Roi des Bapas',
  description: 'Haute autorité du Royaume et parrainage institutionnel du portail officiel.',
  initials: 'SD',
};

export const siteCoordination: SiteLeadershipRole = {
  title: 'Coordination',
  name: 'Dr Joseph Kemmegne',
  description: 'Coordination éditoriale et validation des orientations du portail au service du Royaume de Bapa.',
};

export const siteRealisationTeam: RealisationMember[] = [
  { id: 'henri-mill-fetchouang', name: 'Henri-Mill Fetchouang' },
  { id: 'jasmine-mabe', name: 'Jasmine Mabe' },
  { id: 'narcisse-noumegni', name: 'Narcisse Noumegni' },
];

export const siteConcepteursMission = [
  'Offrir une vitrine institutionnelle claire, accessible sur mobile et desktop.',
  'Structurer les contenus du royaume, du développement, du tourisme et de la communauté.',
  'Préparer l’évolution vers une médiathèque et des formulaires de contact opérationnels.',
] as const;

export const siteTechnologies = [
  'Next.js (App Router)',
  'React & TypeScript',
  'Tailwind CSS',
  'Hébergement web moderne (CI/CD)',
] as const;

/** Initiales pour l’avatar décoratif (prénom + nom de famille). */
export function memberInitials(fullName: string): string {
  const parts = fullName.replace(/^Dr\s+/i, '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
