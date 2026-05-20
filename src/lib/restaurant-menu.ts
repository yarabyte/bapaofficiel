export type MenuItem = {
  id: string;
  name: string;
  description: string;
  priceFcfa: number;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

/** Carte indicative — à valider par l’équipe du Restaurant Patrimonial. */
export const restaurantMenuCategories: MenuCategory[] = [
  {
    id: 'entrees',
    title: 'Entrées',
    subtitle: 'Pour commencer le repas',
    items: [
      {
        id: 'soupe-legumes',
        name: 'Soupe de légumes du terroir',
        description: 'Légumes de saison, épices douces et bouillon maison.',
        priceFcfa: 1500,
        tags: ['végétarien'],
      },
      {
        id: 'beignets-igname',
        name: 'Beignets d’igname',
        description: 'Croustillants, servis avec sauce pimentée ou miel local.',
        priceFcfa: 2000,
      },
    ],
  },
  {
    id: 'plats',
    title: 'Plats traditionnels',
    subtitle: 'Cuisine bamiléké et produits locaux',
    items: [
      {
        id: 'ndole-poisson',
        name: 'Ndolé au poisson fumé',
        description: 'Feuilles de ndolé, arachides, poisson fumé et plantains.',
        priceFcfa: 4500,
      },
      {
        id: 'poulet-braise',
        name: 'Poulet braisé aux épices',
        description: 'Marinade aux herbes, accompagné de riz ou de tubercules.',
        priceFcfa: 5000,
      },
      {
        id: 'mbongo-tchobi',
        name: 'Mbongo tchobi',
        description: 'Sauce noire épicée, viande ou poisson selon disponibilité.',
        priceFcfa: 5500,
      },
    ],
  },
  {
    id: 'menus',
    title: 'Menus complets',
    subtitle: 'Formules pour déjeuner ou dîner — commande en ligne',
    items: [
      {
        id: 'menu-decouverte',
        name: 'Menu Découverte',
        description: 'Entrée + plat du jour + boisson locale (jus de fruit ou thé).',
        priceFcfa: 7500,
        tags: ['recommandé'],
      },
      {
        id: 'menu-patrimoine',
        name: 'Menu Patrimoine',
        description: 'Entrée, plat traditionnel, dessert et boisson — expérience complète.',
        priceFcfa: 12000,
        tags: ['recommandé'],
      },
      {
        id: 'menu-groupe',
        name: 'Menu Groupe (8 pers. min.)',
        description: 'Buffet ou service à table pour visites, cérémonies ou séminaires.',
        priceFcfa: 85000,
        tags: ['sur réservation'],
      },
    ],
  },
  {
    id: 'boissons',
    title: 'Boissons',
    items: [
      {
        id: 'jus-ananas',
        name: 'Jus d’ananas frais',
        description: 'Pressé sur place.',
        priceFcfa: 1000,
      },
      {
        id: 'cafe-cacao',
        name: 'Café ou cacao local',
        description: 'Boisson chaude, torréfaction régionale.',
        priceFcfa: 800,
      },
    ],
  },
];

export const restaurantMenuFormOptions = restaurantMenuCategories
  .flatMap((cat) => cat.items)
  .map((item) => ({ value: item.id, label: `${item.name} — ${formatPriceFcfa(item.priceFcfa)}` }));

export function formatPriceFcfa(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XAF',
    maximumFractionDigits: 0,
  }).format(amount);
}
