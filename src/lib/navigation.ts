/** Entrée de menu : lien seul ou nœud avec sous-menus. */
export interface NavChild {
  label: string;
  href?: string;
  children?: NavChild[];
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Échos de Bapa', href: '/communaute/echos' },
  {
    label: 'Le Royaume',
    children: [
      { label: 'Mot du Roi', href: '/royaume/mot-du-roi' },
      { label: 'Histoire', href: '/royaume/histoire' },
      { label: 'Organisation de la Chefferie', href: '/royaume/chefferie' },
      { label: 'Administration', href: '/royaume/administration' },
      { label: 'Traditions', href: '/royaume/traditions' },
      { label: 'Langues et Cultures', href: '/royaume/langues-et-cultures' },
    ],
  },
  {
    label: 'Développement',
    children: [
      { label: 'ADEVIPA', href: '/developpement/adevipa' },
      { label: 'Santé et éducation', href: '/developpement/adevipa/sante' },
      {
        label: 'Projets',
        children: [
          { label: 'Rock Futura Finance', href: '/developpement/rock-futura' },
          { label: 'Forum Bapa H2050', href: '/developpement/forum-h2050' },
          { label: 'Bapa Connect', href: '/developpement/bapa-connect' },
          { label: 'Grassfield Research I.', href: '/developpement/grassfield' },
          { label: 'Programme env.', href: '/developpement/grassfield/programme' },
          {
            label: 'Développement Réseau électrique',
            href: '/developpement/grassfield/electricite',
          },
          {
            label: "Amélioration de l'accès à l'eau",
            href: '/developpement/grassfield/eau',
          },
        ],
      },
      { label: 'Économie', href: '/economie/tourisme' },
    ],
  },
  {
    label: "Festival Pa'a Ngouook",
    children: [
      { label: 'Présentation', href: '/economie/festival' },
      { label: "Pa'a Ngouook 2018", href: '/economie/festival/2018' },
      { label: "Pa'a Ngouook 2023", href: '/economie/festival/2023' },
      { label: "Pa'a Ngouook 2028", href: '/economie/festival/2028' },
    ],
  },
  {
    label: 'Tourisme',
    children: [
      { label: 'Introduction et enjeux', href: '/economie/tourisme' },
      { label: 'Organisation et promotion', href: '/economie/tourisme/organisation' },
      { label: 'Le Musée Case Patrimoniale', href: '/tourisme/musee' },
      { label: 'Le Restaurant Patrimoniale', href: '/economie/tourisme/restaurant' },
      { label: 'Les Sites Touristiques', href: '/economie/tourisme/sites' },
      { label: 'Visitez Bapa', href: '/#visitez-bapa' },
    ],
  },
  { label: 'La Communauté', href: '/communaute' },
];
