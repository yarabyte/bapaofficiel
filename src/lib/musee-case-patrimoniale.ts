export const MUSEE_PATH = '/tourisme/musee' as const;

export const museeCasePatrimoniale = {
  title: 'Musée Case Patrimoniale',
  tagline: 'Homme, Nature et Croyances',
  theme: 'Homme, Nature et Croyances',
  intro:
    "Bâti autour du thème « Homme, Nature et Croyances », ce joyau architectural, pensé et mis en œuvre par Sa Majesté SIMEU David II, avec l'accompagnement de sa population et de divers partenaires nationaux et internationaux, est une triple interpellation culturelle :",
  pillars: [
    'Le devoir de résistance.',
    "L'urgence d'une prise de conscience.",
    "La nécessité de conserver le naturel de notre environnement afin d'en tirer le meilleur de son énorme potentiel.",
  ] as const,
  experience: {
    question: 'Et comment vivre cette interpellation ?',
    answer:
      'Tout simplement en vous laissant guider à travers les 07 espaces de cette grotte.',
  },
  facilities:
    "En plus de sa bibliothèque, le Musée met à votre disposition une salle multimédia d'une capacité de 30 places pour vos réunions ou séances de travail dans un cadre exceptionnel.",
  practical: {
    hours: 'Ouvert de mardi à dimanche.',
    phones: [
      { display: '656 642 956', tel: '+237656642956' },
      { display: '656 998 509', tel: '+237656998509' },
    ],
    whatsapp: { display: '693 858 271', tel: '+237693858271' },
  },
} as const;

export const museeGalleryImages = [
  {
    src: '/images/musee-exposition-artefacts.png',
    alt: 'Exposition : masques, poteries et panneaux pédagogiques',
    caption: 'Savoir-faire et collections',
  },
  {
    src: '/images/musee-celebration-culturelle.png',
    alt: 'Célébration en tenues traditionnelles',
    caption: 'Traditions vivantes',
  },
  {
    src: '/images/musee-costumes-ndop.png',
    alt: 'Costumes cérémoniels et motifs ndop',
    caption: 'Salles permanentes — costumes et masques royaux',
  },
] as const;
