import Link from 'next/link';
import Image from 'next/image';
import SectionDivider from '@/components/SectionDivider';

const links = {
  'Le Royaume': [
    { label: 'Histoire', href: '/royaume/histoire' },
    { label: 'Traditions', href: '/royaume/traditions' },
    { label: 'Culture', href: '/royaume/culture' },
    { label: 'Mot du Roi', href: '/royaume/mot-du-roi' },
    { label: 'Dynastie Royale', href: '/royaume/dynastie' },
  ],
  Développement: [
    { label: 'ADEVIPA', href: '/developpement/adevipa' },
    { label: 'Forum Bapa H2050', href: '/developpement/forum-h2050' },
    { label: 'Bapa Connect', href: '/developpement/bapa-connect' },
    { label: 'Grassfield Research', href: '/developpement/grassfield' },
    { label: 'Cremepa', href: '/developpement/cremepa' },
    { label: 'Tourisme', href: '/economie/tourisme' },
    { label: 'Le Musée Case Patrimoniale', href: '/economie/tourisme/musee' },
    { label: 'Sites Touristiques', href: '/economie/tourisme/sites' },
  ],
  "Festival Pa'a Ngouook": [
    { label: 'Présentation', href: '/economie/festival' },
    { label: "Pa'a Ngouook 2018", href: '/economie/festival/2018' },
    { label: "Pa'a Ngouook 2023", href: '/economie/festival/2023' },
    { label: "Pa'a Ngouook 2028", href: '/economie/festival/2028' },
  ],
  Liens: [
    { label: 'La Communauté', href: '/communaute' },
    { label: 'Médiathèque', href: '/mediatheque' },
    { label: 'Partenaires', href: '/communaute/partenaires' },
    { label: 'Contacts', href: '/communaute/contacts' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <SectionDivider fill="cream" position="top" />

      <div className="max-w-7xl mx-auto px-6 pt-4 pb-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Bapa Logo"
                  width={766}
                  height={780}
                  className="max-h-10 max-w-10 object-contain"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <div>
                <p className="text-xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-playfair)' }}>
                  BAPA
                </p>
                <p className="text-white/50 text-xs tracking-widest uppercase">Officiel</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Portail officiel du Village Royal de Bapa, niché dans les montagnes de l&apos;Ouest Cameroun.
              Terre ancestrale, culture vivante, avenir partagé.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: 'Facebook', icon: 'f', href: '#' },
                { label: 'YouTube', icon: '▶', href: '#' },
                { label: 'WhatsApp', icon: '✆', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold transition-colors flex items-center justify-center text-sm font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4 pb-2 border-b border-white/10">
                {section}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-gold text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Bapa Officiel. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            <span>🗺️</span>
            <span>Bapa, Département du Ndé, Région de l&apos;Ouest Cameroun</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
