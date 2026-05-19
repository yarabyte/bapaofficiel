import Link from 'next/link';
import Image from 'next/image';
import SectionDivider from '@/components/SectionDivider';
import { footerSocialHref } from '@/lib/footer-social';

const links = {
  'Le Royaume': [
    { label: 'Mot du Roi', href: '/royaume/mot-du-roi' },
    { label: 'Histoire', href: '/royaume/histoire' },
    { label: 'Organisation de la Chefferie', href: '/royaume/chefferie' },
    { label: 'Administration', href: '/royaume/administration' },
    { label: 'Traditions', href: '/royaume/traditions' },
    { label: 'Langues et Cultures', href: '/royaume/langues-et-cultures' },
  ],
  Développement: [
    { label: 'ADEVIPA', href: '/developpement/adevipa' },
    { label: 'Santé et éducation', href: '/developpement/adevipa/sante' },
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
    { label: 'Économie', href: '/economie/tourisme' },
  ],
  "Festival Pa'a Ngouook": [
    { label: 'Présentation', href: '/economie/festival' },
    { label: "Pa'a Ngouook 2018", href: '/economie/festival/2018' },
    { label: "Pa'a Ngouook 2023", href: '/economie/festival/2023' },
    { label: "Pa'a Ngouook 2028", href: '/economie/festival/2028' },
  ],
  Tourisme: [
    { label: 'Introduction et enjeux', href: '/economie/tourisme' },
    { label: 'Organisation et promotion', href: '/economie/tourisme/organisation' },
    { label: 'Le Musée Case Patrimoniale', href: '/tourisme/musee' },
    { label: 'Le Restaurant Patrimoniale', href: '/economie/tourisme/restaurant' },
    { label: 'Les Sites Touristiques', href: '/economie/tourisme/sites' },
    { label: 'Visitez Bapa', href: '/#visitez-bapa' },
  ],
  Liens: [
    { label: 'La Communauté', href: '/communaute' },
    { label: 'Médiathèque', href: '/mediatheque' },
    { label: 'Partenaires', href: '/communaute/partenaires' },
    { label: 'Contacts', href: '/communaute/contacts' },
  ],
};

function IconFacebook({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.06C22 6.486 17.523 2 11.96 2 6.396 2 1.92 6.487 1.92 12.06c0 5.022 3.656 9.184 8.438 9.94v-7.03h-2.54v-2.91h2.54V9.41c0-2.508 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563v1.875h2.773l-.443 2.91h-2.33v7.029c4.782-.755 8.438-4.917 8.438-9.939z" />
    </svg>
  );
}

function IconInstagram({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.25" strokeWidth="1.75" />
      <circle cx="17.25" cy="6.75" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconYouTube({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.593 7.203a2.977 2.977 0 0 0-.994-1.09 3.052 3.052 0 0 0-1.214-.578C17.874 5 12 5 12 5s-5.874 0-7.385.535a3.053 3.053 0 0 0-1.214.579 2.977 2.977 0 0 0-.994 1.09A8.879 8.879 0 0 0 2 11.482v1.036c0 .883.096 1.757.397 2.595a2.977 2.977 0 0 0 .994 1.09 3.052 3.052 0 0 0 1.214.579C6.126 17 12 17 12 17s5.874 0 7.385-.535a3.052 3.052 0 0 0 1.214-.579 2.977 2.977 0 0 0 .994-1.09 8.879 8.879 0 0 0 .397-2.595v-1.036a8.879 8.879 0 0 0-.397-2.596zM10 14.958v-6.92l5.546 3.46L10 14.957z" />
    </svg>
  );
}

function IconWhatsApp({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.239-.375a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const socialEntries = [
    { label: 'Facebook', href: footerSocialHref('facebook'), Icon: IconFacebook },
    { label: 'Instagram', href: footerSocialHref('instagram'), Icon: IconInstagram },
    { label: 'YouTube', href: footerSocialHref('youtube'), Icon: IconYouTube },
    { label: 'WhatsApp', href: footerSocialHref('whatsapp'), Icon: IconWhatsApp },
  ].filter((s): s is typeof s & { href: string } => Boolean(s.href));

  return (
    <footer className="bg-brand-dark text-white">
      <SectionDivider fill="cream" position="top" />

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-14 lg:pt-12">
        {/* Grille détaillée + marque */}
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-7 lg:gap-10 xl:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <Image
                  src="/images/logo.png"
                  alt="Logo Bapa Officiel"
                  width={766}
                  height={780}
                  className="max-h-10 max-w-10 object-contain"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <div>
                <p className="font-heading text-xl font-bold tracking-wider">
                  BAPA
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Officiel</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/72">
              Portail officiel du Village Royal de Bapa — montagnes de l&apos;Ouest Cameroun. Terre
              ancestrale, culture vivante, avenir partagé.
            </p>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h3 className="mb-4 border-b border-white/10 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/95">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center py-1 text-sm text-white/60 transition-colors hover:text-gold-light"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Réseaux sociaux + copyright */}
        <div className="flex flex-col gap-8 border-t border-white/12 pt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light/85 whitespace-nowrap">
              Suivez-nous
            </p>
            {socialEntries.length > 0 ? (
              <ul className="flex flex-wrap gap-3">
                {socialEntries.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} — nouvelle fenêtre`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/[0.07] text-white/85 transition-all hover:border-gold-light/55 hover:bg-gold-dark/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="max-w-md text-xs leading-relaxed text-white/45">
                Les liens vers les réseaux officiels seront affichés ici une fois configurés (voir{' '}
                <code className="rounded bg-white/10 px-1 py-0.5 text-[10px] text-white/70">
                  .env.example
                </code>{' '}
                — variables{' '}
                <span className="text-white/55">NEXT_PUBLIC_FOOTER_SOCIAL_*</span>).
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 text-center lg:max-w-xl lg:text-right">
            <p className="text-sm font-medium leading-snug text-white/88">
              © {year}{' '}
              <span className="font-heading text-white">
                Bapa Officiel
              </span>
              {' — '}
              Village royal de Bapa.
            </p>
            <p className="flex items-center justify-center gap-2 text-xs text-white/42 lg:justify-end">
              <span aria-hidden className="text-base opacity-70">
                📍
              </span>
              <span>Bapa — Département des Hauts-Plateaux, commune de Bangou, région de l&apos;Ouest, Cameroun</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
