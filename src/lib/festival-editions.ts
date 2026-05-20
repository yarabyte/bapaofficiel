/**
 * Structure commune des pages d’édition du Festival Pa’a Ngouo'ok
 * (ordre imposé : Introduction → … → Mot du PCO).
 */

export type FestivalSlug =
  | 'introduction'
  | 'theme'
  | 'presentation'
  | 'programme'
  | 'comite-organisation'
  | 'realisation'
  | 'partenaire'
  | 'mediatheque'
  | 'pco';

export interface FestivalBlock {
  slug: FestivalSlug;
  /** Titre affiché tel que sur la maquette */
  title: string;
  paragraphs: string[];
}

export interface FestivalEdition {
  year: number;
  label: string;
  /** Court libellé d’état (édition réalisée / à venir) */
  statusLabel: string;
  heroLead: string;
  blocks: FestivalBlock[];
}

const sectionOrder = [
  {
    slug: 'introduction',
    title: 'Introduction',
    draft: (
      edition: Pick<FestivalEdition, 'year'>
    ): string[] => [
      `Le Festival Pa’a Ngouo'ok est le grand rassemblement biennal qui célèbre l’identité bamiléké au Royaume de Bapa. L’édition ${edition.year} s’inscrit dans cette continuité vivante où se mêlent culture, développement local et lien avec la diaspora.`,
      `Cette page recense les grands chantiers préparatoires et le déroulé prévu ou accompli : thème officiel, activités majeures et documents de mémoire.`,
    ],
  },
  {
    slug: 'theme',
    title: 'Thème',
    draft: (edition: Pick<FestivalEdition, 'year'>): string[] => {
      const themes: Record<number, string> = {
        2018: 'Transmission et jeunesse : les lignées culturelles face aux défis du présent.',
        2023: 'Solidarités renouvelées : Bapa ouvert sur ses réseaux et ses territoires d’émigration.',
        2028: 'Horizon commun : mémoire, économie culturelle et investissement localement ancré.',
      };
      return [
        `Thème officiel retenu pour l’édition ${edition.year} : « ${themes[edition.year] ?? themes[2028]} »`,
        `Le thème irrigue interventions des notables, ateliers de réflexion et scènes festives pour donner une cohérence symbolique aux journées.`,
      ];
    },
  },
  {
    slug: 'presentation',
    title: 'Présentation',
    draft: (): string[] => [
      'Les journées conjuguent cérémonials royaux, prestations dansées, exposition des savoir-faire gastronomiques et rencontres autour du patrimoine bâti et immatériel de Bapa.',
      'Une attention particulière est portée au confort du public et à la visibilité des symboles communautaires, dans le respect du droit coutumier et du calendrier local.',
    ],
  },
  {
    slug: 'programme',
    title: 'Programme',
    draft: (edition: Pick<FestivalEdition, 'year' | 'label'>): string[] => {
      if (edition.year === 2028) {
        return [
          `Le programme définitif de ${edition.label} sera publié après validation hiérarchique et concertation communautaire. Les axes envisagés : veillée inaugurale, défilés de sociétés traditionnelles, tables rondes sur le tourisme et la jeunesse.`,
          `Des créneaux de visite au musée-case patrimoniale et aux sites emblématiques du royaume seront également proposés sur réservation.`,
        ];
      }
      return [
        'Le programme officiel a articulé cérémonies matinales, temps forts après-midis et animations nocturnes. Une attention particulière a été donnée aux femmes dignitaires et aux représentants de la diaspora invités sur place.',
        'Les grandes familles rituelles se sont relayées lors des présentations symboliques au palais tout en garantissant sécurité des déplacements et accueil des invités officiels.',
      ];
    },
  },
  {
    slug: 'comite-organisation',
    title: "Comité d'organisation",
    draft: (): string[] => [
      'Le comité est composé du secrétariat exécutif, des représentants de quartiers et d’associations de jeunes ainsi que du service des usages au palais royal.',
      'Il prépare budgets provisoires, plan de médiation et lignes rouges relatives au protocole. Les décisions stratégiques restent sous l’égide hiérarchique du conseil royal.',
    ],
  },
  {
    slug: 'realisation',
    title: 'Réalisation',
    draft: (edition: Pick<FestivalEdition, 'year'>): string[] => {
      if (edition.year === 2028) {
        return [
          'Pour l’instant, la chaîne logistique (hébergement, routes d’accès, sanitaires) est en cours d’affinage avec les administrations locales.',
          'Les chantiers communautaires (nettoyage symbolique et sécurité des lieu(x) rituel(le)s) suivent une feuille de route validée lors des assises précédentes.',
        ];
      }
      return [
        'Le bilan fait état du déroulé effectif selon prévisions : infrastructures temporaires, sécurité, sanitaires, couvert médiatique et retours des groupements invités.',
        'Une documentation photos et vidéos d’étape a été produite dans le prolongement médiathèque du portal officiel.',
      ];
    },
  },
  {
    slug: 'partenaire',
    title: 'Partenaire',
    draft: (): string[] => [
      'Les soutiens financiers ou en nature peuvent associer organismes territoriaux, entreprises camarades de la diaspora et fondations ayant vocation culturelle.',
      'Chaque contrepartie (visibilité, stands, messages institutionnels) est encadrée par une charte d’expression respectueuse de la parole royale.',
    ],
  },
  {
    slug: 'mediatheque',
    title: 'Médiathèque',
    draft: (): string[] => [
      'La Médiathèque du portal regroupe clichés officiels et bandes anonymisées des moments forts après accord des personnes filmées lorsque la loi l’exige.',
      `Les documents produits peuvent également nourrir les contenus Échos · communautés et préparer une base patrimoine « Pa’a Ngouo'ok ».`,
    ],
  },
  {
    slug: 'pco',
    title: 'Mot du PCO — Président du comité d’organisation',
    draft: (edition: Pick<FestivalEdition, 'year'>): string[] => [
      `Le PCO (Président du Comité d’Organisation) de l’édition ${edition.year} adresse ici sa parole à la communauté : remerciements, priorités logistiques et appel à la mobilisation collective.`,
      'Le message officiel du président sera publié après validation par le comité et la chefferie. Il rappellera le sens du festival, le rôle des partenaires et l’engagement attendu de chaque quartier et de la diaspora.',
    ],
  },
] as const;

function buildEdition(year: 2018 | 2023 | 2028): FestivalEdition {
  const edition: FestivalEdition = {
    year,
    label: `Pa’a Ngouo'ok ${year}`,
    statusLabel: year === 2028 ? 'Édition à venir · préparation' : 'Édition réalisée · bilan communautaire',
    heroLead:
      year === 2028
        ? 'Une édition en préparation avec la même exigence d’organisation et les mêmes symboles d’union autour du trône de Bapa.'
        : `Retour structuré sur l’organisation et la mémoire de l’édition ${year}.`,
    blocks: [],
  };

  edition.blocks = sectionOrder.map((def) => ({
    slug: def.slug as FestivalSlug,
    title: def.title,
    paragraphs: def.draft(edition),
  }));

  return edition;
}

export const FESTIVAL_YEARS = [2018, 2023, 2028] as const;
export type FestivalYear = (typeof FESTIVAL_YEARS)[number];

export const festivalEditions: Record<number, FestivalEdition> = {
  2018: buildEdition(2018),
  2023: buildEdition(2023),
  2028: buildEdition(2028),
};

export function getFestivalEdition(yearStr: string): FestivalEdition | null {
  const y = Number.parseInt(yearStr, 10);
  if (!FESTIVAL_YEARS.includes(y as FestivalYear)) return null;
  return festivalEditions[y];
}
