/**
 * URLs des réseaux sociaux du pied de page.
 * Renommez `.env.example` en `.env.local` et renseignez les liens officiels.
 * Une entrée vide ou absente masque l’icône correspondante.
 */
export function footerSocialHref(platform: 'facebook' | 'instagram' | 'youtube' | 'whatsapp'): string | undefined {
  const envMap = {
    facebook: process.env.NEXT_PUBLIC_FOOTER_SOCIAL_FACEBOOK,
    instagram: process.env.NEXT_PUBLIC_FOOTER_SOCIAL_INSTAGRAM,
    youtube: process.env.NEXT_PUBLIC_FOOTER_SOCIAL_YOUTUBE,
    whatsapp: process.env.NEXT_PUBLIC_FOOTER_SOCIAL_WHATSAPP,
  } as const;
  const raw = envMap[platform]?.trim();
  return raw && raw.length > 0 ? raw : undefined;
}
