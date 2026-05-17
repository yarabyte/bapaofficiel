export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavLink[];
}

export const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Le Royaume',
    children: [
      { label: 'Histoire', href: '/royaume/histoire' },
      { label: 'Traditions', href: '/royaume/traditions' },
      { label: 'Culture', href: '/royaume/culture' },
      { label: 'Mot du Roi', href: '/royaume/mot-du-roi' },
      { label: 'Dynastie Royale', href: '/royaume/dynastie' },
      { label: 'Administration', href: '/royaume/administration' },
      { label: 'Organisation de la Chefferie', href: '/royaume/chefferie' },
    ],
  },
  {
    label: 'Développement',
    children: [
      { label: 'ADEVIPA · Introduction', href: '/developpement/adevipa' },
      { label: 'ADEVIPA · Santé et éducation', href: '/developpement/adevipa/sante' },
      { label: 'ADEVIPA · Projets', href: '/developpement/adevipa/projets' },
      { label: 'Rock Futura Finance', href: '/developpement/rock-futura' },
      { label: 'Forum Bapa H2050', href: '/developpement/forum-h2050' },
      { label: 'Bapa Connect', href: '/developpement/bapa-connect' },
      { label: 'Grassfield · Introduction', href: '/developpement/grassfield' },
      { label: 'Grassfield · Programme environnemental', href: '/developpement/grassfield/programme' },
      { label: 'Grassfield · Réseau électrique', href: '/developpement/grassfield/electricite' },
      { label: "Grassfield · Accès à l'eau", href: '/developpement/grassfield/eau' },
      { label: "Grassfield · Associations d'appui", href: '/developpement/grassfield/associations' },
      { label: 'Cremepa', href: '/developpement/cremepa' },
      { label: 'Tourisme · Introduction & enjeux', href: '/economie/tourisme' },
      { label: 'Tourisme · Organisation et promotion', href: '/economie/tourisme/organisation' },
      { label: 'Tourisme · Musée Case Patrimoniale', href: '/economie/tourisme/musee' },
      { label: 'Tourisme · Restaurant Patrimoniale', href: '/economie/tourisme/restaurant' },
      { label: 'Tourisme · Sites touristiques', href: '/economie/tourisme/sites' },
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
    label: 'La Communauté',
    children: [
      { label: 'Rôles de communautés', href: '/communaute/roles' },
      { label: 'Communauté Bapa du Cameroun', href: '/communaute/cameroun' },
      { label: 'Communauté de la diaspora', href: '/communaute/diaspora' },
      { label: 'Activités des communautés', href: '/communaute/activites' },
      { label: 'Echos de Bapa', href: '/communaute/echos' },
      { label: 'Partenaires', href: '/communaute/partenaires' },
      { label: 'Contacts', href: '/communaute/contacts' },
    ],
  },
  { label: 'Médiathèque', href: '/mediatheque' },
];
