/** Images présentes dans public/images — fallback pour chemins historiques du dépôt. */
export const IMAGE_FALLBACK = '/images/hero-slide-architecture-patrimoine.png' as const;

const KNOWN_IMAGES: Record<string, string> = {
  '/images/bapa-01.jpg': '/images/musee-celebration-culturelle.png',
  '/images/bapa-02.jpg': '/images/hero-slide-architecture-patrimoine.png',
  '/images/bapa-03.jpg': '/images/mot-du-roi-header-palais.png',
  '/images/bapa-04.jpg': '/images/festival-ngouook-procession.png',
  '/images/apropos.jpg': '/images/musee-exposition-artefacts.png',
  '/images/tourisme-01.png': '/images/hero-slide-architecture-patrimoine.png',
  '/images/echos-featured.png': '/images/hero-slide-cortege-traditionnel.png',
  '/images/paa-ngouook-2028.jpg': '/images/festival-ngouook-procession.png',
};

/** Portrait officiel du Fon — page Mot du Roi et section Royaume. */
export const ROI_PORTRAIT_IMAGE = '/images/roi-trone.jpg' as const;

/** Résout un chemin d’image ; renvoie un fallback si le fichier n’est pas mappé localement. */
export function resolveImage(src: string): string {
  return KNOWN_IMAGES[src] ?? src;
}
