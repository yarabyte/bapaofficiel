import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionDivider from '@/components/SectionDivider';
import {
  bapaContactEmail,
  bapaContactLocation,
  bapaContactPhones,
  bapaContactPostalAddress,
} from '@/lib/contacts';
import { footerSocialHref } from '@/lib/footer-social';
import { BAPA_LOGO, BAPA_LOGO_SIZE } from '@/lib/images';
import {
  siteConcepteursPath,
  siteCopyrightHolder,
  siteCopyrightTerritory,
} from '@/lib/site-credits';

function IconPhone({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 4h3l2 5-2.2 1.4a12 12 0 0 0 5.3 5.3L14 13.5l5 2v3a1.5 1.5 0 0 1-1.5 1.5A15 15 0 0 1 4 6.5 1.5 1.5 0 0 1 5.5 5Z"
      />
    </svg>
  );
}

function IconMail({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4V6Z" />
      <path strokeLinecap="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

function IconMap({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

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

function FooterBlockTitle({
  icon: Icon,
  children,
}: {
  icon: typeof IconPhone;
  children: ReactNode;
}) {
  return (
    <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-light">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-gold-dark/20 text-gold-light ring-1 ring-gold-light/25">
        <Icon className="size-3.5" />
      </span>
      {children}
    </p>
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
    <footer className="relative isolate overflow-hidden bg-brand-dark text-white">
      <SectionDivider fill="cream" position="top" />

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(89,52,20,0.35)_0%,transparent_42%,rgba(14,9,6,0.5)_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.04]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Marque */}
          <div className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">
            <Link href="/" className="group mb-5 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-xl">
              <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/20 transition group-hover:ring-gold-light/40">
                <Image
                  src={BAPA_LOGO}
                  alt="Logo officiel du Royaume de Bapa"
                  width={BAPA_LOGO_SIZE}
                  height={BAPA_LOGO_SIZE}
                  className="size-16 object-cover"
                />
              </div>
              <div>
                <p className="font-heading text-xl font-bold tracking-[0.12em] text-white">BAPA</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light/80">
                  Officiel
                </p>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Portail officiel du Royaume de Bapa — culture vivante, avenir partagé.
            </p>
            <div
              className="mt-6 hidden h-px w-16 bg-gradient-to-r from-gold-light/60 to-transparent lg:block"
              aria-hidden
            />
          </div>

          {/* Coordonnées */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-gold-light/20 hover:bg-white/[0.06]">
                <FooterBlockTitle icon={IconPhone}>Téléphone</FooterBlockTitle>
                <ul className="space-y-2">
                  {bapaContactPhones.map((phone) => (
                    <li key={phone.tel}>
                      <a
                        href={`tel:${phone.tel}`}
                        className="block text-sm font-semibold text-white transition-colors hover:text-gold-light"
                      >
                        {phone.display}
                      </a>
                      <span className="text-[11px] text-white/45">{phone.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-gold-light/20 hover:bg-white/[0.06]">
                <FooterBlockTitle icon={IconMail}>E-mail</FooterBlockTitle>
                <a
                  href={bapaContactEmail.href}
                  className="break-all text-sm font-semibold text-white transition-colors hover:text-gold-light"
                >
                  {bapaContactEmail.display}
                </a>
                <Link
                  href="/contacts"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-gold-light transition-colors hover:text-white"
                >
                  Écrire un message
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-gold-light/20 hover:bg-white/[0.06] sm:col-span-1">
                <FooterBlockTitle icon={IconMap}>Localisation</FooterBlockTitle>
                <p className="text-sm leading-relaxed text-white/75">{bapaContactLocation}</p>
                <p className="mt-2 text-xs text-white/50">
                  <span className="font-semibold text-white/60">Adresse</span>
                  <br />
                  {bapaContactPostalAddress}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-light/90">
                Suivez-nous
              </span>
              {socialEntries.length > 0 ? (
                <ul className="flex flex-wrap justify-center gap-2">
                  {socialEntries.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} — nouvelle fenêtre`}
                        className="flex size-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-white/80 transition-all hover:-translate-y-0.5 hover:border-gold-light/45 hover:bg-gold-dark/30 hover:text-white hover:shadow-[0_4px_20px_-4px_rgba(212,148,62,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
                      >
                        <Icon className="size-[18px]" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-white/45">
                  Réseaux à configurer —{' '}
                  <code className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px]">.env.example</code>
                </p>
              )}
            </div>

            <nav
              aria-label="Liens du site"
              className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-xs"
            >
              {(
                [
                  { href: '/mediatheque', label: 'Médiathèque' },
                  { href: '/communaute/partenaires', label: 'Partenaires' },
                  { href: '/contacts', label: 'Nous contacter' },
                  { href: '/mentions-legales', label: 'Mentions légales' },
                  { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
                ] as const
              ).map((link, i) => (
                <span key={link.href} className="inline-flex items-center">
                  {i > 0 && (
                    <span className="mx-0.5 text-white/20" aria-hidden>
                      |
                    </span>
                  )}
                  <Link
                    href={link.href}
                    className="rounded-lg px-2.5 py-1 text-white/60 transition-colors hover:bg-white/5 hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-white/75">
              © {year}{' '}
              <span className="font-heading font-semibold text-white">{siteCopyrightHolder}</span>
              <span className="text-white/40"> · </span>
              {siteCopyrightTerritory}
              <span className="text-white/40"> · </span>
              Tous droits réservés
            </p>
            <p className="text-[11px] text-white/45">
              Design et réalisation du site —{' '}
              <Link
                href={siteConcepteursPath}
                className="font-semibold text-gold-light/90 underline-offset-2 transition-colors hover:text-gold-light hover:underline"
                aria-label="En savoir plus sur le design et la réalisation du site"
              >
                en savoir plus
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
