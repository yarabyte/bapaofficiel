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
      { label: 'Santé', href: '/developpement/adevipa/sante' },
      { label: 'Éducation', href: '/developpement/adevipa/education' },
      { label: 'Économie', href: '/tourisme/introductionenjeux' },
      {
        label: 'Projets',
        children: [
          { label: 'Rock Futura Finance', href: '/developpement/rock-futura' },
          { label: 'Forum Bapa H2050', href: '/developpement/forum-h2050' },
          { label: 'Bapa Connect', href: '/developpement/bapa-connect' },
          { label: 'Grassfield Research Institute', href: '/developpement/grassfield' },
          { label: 'Gestion environnement', href: '/developpement/grassfield/programme' },
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
      { label: 'CREMEPA', href: '/developpement/cremepa' },
      { label: 'AJEEPA', href: '/developpement/ajeepa' },
    ],
  },
  {
    label: "Festival Pa'a Ngouo'ok",
    children: [
      { label: 'Présentation', href: '/economie/festival' },
      { label: "Pa'a Ngouo'ok 2018", href: '/economie/festival/2018' },
      { label: "Pa'a Ngouo'ok 2023", href: '/economie/festival/2023' },
      { label: "Pa'a Ngouo'ok 2028", href: '/economie/festival/2028' },
    ],
  },
  {
    label: 'Tourisme',
    children: [
      { label: 'Introduction et Enjeux', href: '/tourisme/introductionenjeux' },
      { label: 'Organisation et promotion', href: '/tourisme/organisation' },
      { label: 'Le Musée Case Patrimoniale', href: '/tourisme/musee' },
      { label: 'Les Saveurs du Palais', href: '/tourisme/restaurant' },
      { label: 'Les Sites Touristiques', href: '/tourisme/sites' },
      { label: 'Visitez Bapa', href: '/tourisme/visitez-bapa' },
    ],
  },
  { label: 'Les Communautés', href: '/communaute' },
];
