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

export const siteSupervisionGeneral = {
  title: 'Supervision générale',
  name: 'Dr Joseph Kemmegne',
} as const;

export const siteRealisationTeam: RealisationMember[] = [
  { id: 'jasmine-mabe', name: 'Jasmine Mabe' },
  { id: 'narcisse-noumegni', name: 'Narcisse Noumegni' },
  { id: 'henri-mill-fetchouang', name: 'Henri-Mill Fetchouang' },
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
