/** Données extraites de la plaque « Dynastie » — Chefferie supérieure du Royaume Bapa. */
export const DYNASTIE_PLAQUE_IMAGE = '/images/royaume-dynastie-plaque.png' as const;

export interface DynastieSouche {
  ordre: number;
  nom: string;
  debut: number;
  fin: number;
}

export const dynastieBapa: DynastieSouche[] = [
  { ordre: 1, nom: 'FETCHOUANMEGNE', debut: 1682, fin: 1709 },
  { ordre: 2, nom: 'FANMEGNE', debut: 1709, fin: 1727 },
  { ordre: 3, nom: 'DOMKOU', debut: 1727, fin: 1745 },
  { ordre: 4, nom: 'BOUWAC', debut: 1745, fin: 1817 },
  { ordre: 5, nom: 'FANYANDOM', debut: 1817, fin: 1835 },
  { ordre: 6, nom: 'BOUTCHOUANG', debut: 1835, fin: 1853 },
  { ordre: 7, nom: 'FANKEMBOU', debut: 1853, fin: 1871 },
  { ordre: 8, nom: 'FANKEM NGUIYIM', debut: 1871, fin: 1931 },
  { ordre: 9, nom: 'FANKEM DJUKEM', debut: 1931, fin: 1949 },
  { ordre: 10, nom: 'NOUKIMI DAVID', debut: 1949, fin: 1993 },
];

/** Souverain actuel — hors plaque (à confirmer / compléter par le palais). */
export const souverainActuel = {
  nom: 'SIMEU David II',
  titre: 'Roi des BAPA',
  note: 'Succession après l’ère NOUKIMI DAVID (1949 – 1993).',
} as const;

export function formatReignPeriod(debut: number, fin: number): string {
  return `${debut} – ${fin}`;
}
