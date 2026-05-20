import {
  bapaContactEmail,
  bapaContactLocation,
  bapaContactPhones,
  bapaContactPostalAddress,
} from '@/lib/contacts';
import { siteConcepteursPath, siteCopyrightHolder } from '@/lib/site-credits';

export const legalLastUpdated = '19 mai 2026';
export const legalLastUpdatedIso = '2026-05-19';

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export const mentionsLegalesSections: LegalSection[] = [
  {
    id: 'editeur',
    title: 'Éditeur du site',
    paragraphs: [
      'Le présent site bapa-officiel.com (ci-après « le Site ») est édité par Bapa Officiel, portail institutionnel du Royaume de Bapa.',
      `Siège et localisation : ${bapaContactLocation}. Adresse postale : ${bapaContactPostalAddress}.`,
      `Contact : ${bapaContactEmail.display} — ${bapaContactPhones.map((p) => p.display).join(' / ')}.`,
    ],
  },
  {
    id: 'directeur',
    title: 'Direction de la publication',
    paragraphs: [
      'La direction de la publication est assurée par le secrétariat du Royaume de Bapa, représentant la chefferie traditionnelle et les structures communautaires habilitées à communiquer au nom du village.',
      'Pour toute demande relative au contenu publié, utilisez la page Contacts ou l’adresse e-mail indiquée ci-dessus.',
    ],
  },
  {
    id: 'hebergement',
    title: 'Hébergement',
    paragraphs: [
      'Le Site est hébergé par un prestataire technique choisi pour assurer disponibilité, sécurité et performances. Les informations détaillées sur l’hébergeur peuvent être communiquées sur demande auprès du secrétariat.',
    ],
  },
  {
    id: 'propriete',
    title: 'Propriété intellectuelle',
    paragraphs: [
      'L’ensemble des éléments du Site (textes, images, vidéos, logos, charte graphique, structure, bases de données) est protégé par le droit de la propriété intellectuelle.',
      `Le copyright © est détenu par ${siteCopyrightHolder}. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite, sauf usage privé et non commercial dans le respect de l’intégrité des œuvres.`,
      `Les crédits de design et de réalisation technique sont présentés sur la page dédiée (${siteConcepteursPath}).`,
    ],
  },
  {
    id: 'responsabilite',
    title: 'Responsabilité',
    paragraphs: [
      'Bapa Officiel s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées. Toutefois, des erreurs ou omissions peuvent subsister ; le Site peut être modifié à tout moment.',
      'L’éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l’accès au Site, de son utilisation ou de l’impossibilité d’y accéder, ni des contenus de sites tiers accessibles via des liens hypertextes.',
    ],
  },
  {
    id: 'liens',
    title: 'Liens hypertextes',
    paragraphs: [
      'La création de liens vers le Site est autorisée sous réserve qu’ils ne portent pas atteinte à l’image du Royaume de Bapa et qu’ils ouvrent le Site dans une fenêtre dédiée lorsque le contexte l’exige.',
      'Les liens sortants vers des sites partenaires ou institutionnels ne engagent pas Bapa Officiel sur le contenu de ces sites externes.',
    ],
  },
  {
    id: 'droit',
    title: 'Droit applicable',
    paragraphs: [
      'Les présentes mentions légales sont régies par le droit en vigueur au Cameroun. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents du ressort camerounais pourront être saisis.',
    ],
  },
];

export const politiqueConfidentialiteSections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      'Bapa Officiel accorde une importance particulière à la protection des données personnelles des visiteurs et des personnes qui nous contactent via le Site.',
      'La présente politique de confidentialité décrit quelles données sont collectées, pour quelles finalités, pendant combien de temps, et quels sont vos droits.',
    ],
  },
  {
    id: 'responsable',
    title: 'Responsable du traitement',
    paragraphs: [
      'Le responsable du traitement est Bapa Officiel — secrétariat du Royaume de Bapa.',
      `Contact dédié : ${bapaContactEmail.display} — ${bapaContactLocation}.`,
    ],
  },
  {
    id: 'donnees',
    title: 'Données collectées',
    paragraphs: ['Nous pouvons traiter les catégories de données suivantes :'],
    list: [
      'Données transmises via le formulaire de contact : nom, adresse e-mail, objet et contenu du message.',
      'Données techniques de navigation : adresse IP, type de navigateur, pages consultées, horodatage (cookies et journaux serveur le cas échéant).',
      'Données liées aux réseaux sociaux lorsque vous accédez à nos pages externes via les liens du Site (sous la politique de chaque plateforme).',
    ],
  },
  {
    id: 'finalites',
    title: 'Finalités et bases légales',
    paragraphs: ['Les données sont traitées pour :'],
    list: [
      'Répondre à vos demandes d’information, de visite, de partenariat ou de contact diaspora.',
      'Assurer la sécurité, la maintenance et l’amélioration du Site.',
      'Produire des statistiques d’audience agrégées et anonymisées, lorsque des outils de mesure sont activés.',
    ],
  },
  {
    id: 'duree',
    title: 'Durée de conservation',
    paragraphs: [
      'Les messages envoyés via le formulaire sont conservés le temps nécessaire au traitement de la demande, puis archivés ou supprimés selon les obligations légales et les besoins administratifs du secrétariat (durée indicative : trois ans maximum sauf obligation contraire).',
      'Les données techniques sont conservées pour une durée limitée compatible avec la sécurité du Site.',
    ],
  },
  {
    id: 'destinataires',
    title: 'Destinataires et sous-traitants',
    paragraphs: [
      'Les données sont accessibles aux membres habilités du secrétariat et, le cas échéant, à des prestataires techniques (hébergement, messagerie, maintenance) liés par des obligations de confidentialité.',
      'Aucune vente de données personnelles à des tiers n’est effectuée.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies et traceurs',
    paragraphs: [
      'Le Site peut utiliser des cookies strictement nécessaires au fonctionnement (session, préférences d’affichage).',
      'Des cookies de mesure d’audience ou de réseaux sociaux ne sont déposés qu’avec votre consentement lorsque la réglementation applicable l’exige. Vous pouvez configurer votre navigateur pour refuser les cookies non essentiels.',
    ],
  },
  {
    id: 'droits',
    title: 'Vos droits',
    paragraphs: [
      'Conformément à la réglementation applicable au Cameroun et, le cas échéant, aux principes inspirés du RGPD pour les résidents concernés, vous disposez des droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité lorsque applicable.',
      `Pour exercer vos droits, écrivez à ${bapaContactEmail.display} en précisant l’objet de votre demande et une pièce permettant de vous identifier si nécessaire.`,
    ],
  },
  {
    id: 'securite',
    title: 'Sécurité',
    paragraphs: [
      'Des mesures techniques et organisationnelles raisonnables sont mises en œuvre pour protéger vos données contre l’accès non autorisé, la perte ou l’altération.',
      'Aucune transmission sur Internet n’est totalement inviolable ; nous vous invitons à ne pas transmettre d’informations sensibles non indispensables via le formulaire public.',
    ],
  },
  {
    id: 'modifications',
    title: 'Modifications',
    paragraphs: [
      'Cette politique peut être mise à jour pour refléter l’évolution du Site ou du cadre légal. La date de dernière mise à jour figure en tête de page.',
    ],
  },
];
