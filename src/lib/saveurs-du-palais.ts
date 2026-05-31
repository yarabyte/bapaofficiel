export const SAVEURS_DU_PALAIS_PATH = '/tourisme/restaurant' as const;
export const SAVEURS_DU_PALAIS_IMAGE = '/images/saveurs-du-palais.png' as const;

export const saveursDuPalais = {
  title: 'Les Saveurs du Palais',
  tagline: 'Espace SAVOURER · Visite guidée',
  quote: {
    text: 'Que ta nourriture soit ton médicament et que ton médicament se trouve dans ta nourriture',
    author: 'Hyppocrate',
  },
  description:
    "L'espace « SAVOURER » de la visite guidée prépare vos papilles gustatives à la découverte des grandes vertus de nos principaux mets traditionnels. Dégustez les mets traditionnels et authentiques qui vous ont fait saliver pendant la visite. Très bonne dégustation.",
  practical: {
    hours: 'Ouvert de mardi à dimanche de 9h à 17h. Les lundis sur réservation.',
    phones: [
      { display: '699 135 602', tel: '+237699135602' },
      { display: '656 642 956', tel: '+237656642956' },
      { display: '656 998 509', tel: '+237656998509' },
    ],
  },
} as const;
