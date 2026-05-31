import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactMessageForm from '@/components/contacts/ContactMessageForm';
import PageHeroPremium from '@/components/layout/PageHeroPremium';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import {
  bapaContactEmail,
  bapaContactLocation,
  bapaContactPhones,
  bapaContactPostalAddress,
} from '@/lib/contacts';
import { footerSocialHref } from '@/lib/footer-social';

export const metadata: Metadata = {
  title: 'Contacts | Bapa Officiel',
  description:
    'Contactez le secrétariat du Royaume de Bapa : téléphones, e-mail, adresse postale et formulaire de message.',
};

function PhoneIcon({ className = 'size-6' }: { className?: string }) {
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

function MailIcon({ className = 'size-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4V6Z" />
      <path strokeLinecap="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

function MapIcon({ className = 'size-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'size-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.239-.375a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function ContactsPage() {
  const whatsapp = footerSocialHref('whatsapp');

  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="warm" />

      <PageHeroPremium
        imageSrc="/images/mot-du-roi-header-palais.png"
        imageClassName="object-cover object-[center_35%] scale-105 select-none"
        label="Les Communautés"
        title="Contacts"
        description="Secrétariat du Royaume de Bapa — visites, partenariats, diaspora et renseignements culturels."
        descriptionClassName="mx-auto max-w-2xl text-lg leading-relaxed text-white/88 md:mx-0"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Les Communautés', href: '/communaute' },
          { label: 'Contacts' },
        ]}
      >
        <dl className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3 sm:gap-4 md:mx-0 md:max-w-xl">
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-xl font-bold text-gold-light">{bapaContactPhones.length}</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Lignes téléphoniques
            </dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-sm font-bold leading-tight text-gold-light">E-mail</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Secrétariat
            </dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-sm font-bold leading-tight text-gold-light">BP 310</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Bafoussam
            </dd>
          </div>
        </dl>
      </PageHeroPremium>

      <section
        aria-hidden
        className="relative z-[1] -mt-5 mx-auto max-w-4xl px-4 sm:px-6 lg:-mt-8 lg:px-10"
      >
        <figure className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200/90">
          <div className="relative aspect-[21/8] w-full bg-stone-200">
            <Image
              src="/images/hero-slide-palais-bapa.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/50 to-transparent" />
          </div>
        </figure>
      </section>

      <main className="relative z-[1] mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
          <div className="lg:col-span-5">
            <header className="mb-8 border-l-[3px] border-gold-dark/50 pl-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">
                Coordonnées
              </p>
              <h2 className="font-heading mt-2 text-2xl font-bold text-brand md:text-3xl">
                Nous joindre
              </h2>
              <p className="mt-2 text-sm text-stone-500">
                Réponse par e-mail ou téléphone — urgences : appelez directement le secrétariat.
              </p>
            </header>

            <div className="space-y-4">
              <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100/80">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/8 text-brand">
                    <PhoneIcon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
                      Téléphone
                    </p>
                    <ul className="mt-3 space-y-3">
                      {bapaContactPhones.map((phone) => (
                        <li key={phone.tel}>
                          <a
                            href={`tel:${phone.tel}`}
                            className="font-heading block text-lg font-bold text-brand transition-colors hover:text-gold-dark"
                          >
                            {phone.display}
                          </a>
                          <span className="text-xs text-stone-500">{phone.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <a
                href={bapaContactEmail.href}
                className="group flex items-start gap-4 rounded-2xl border border-stone-200/80 bg-gradient-to-br from-white to-cream/60 p-6 shadow-sm ring-1 ring-stone-100/80 transition-all card-lift hover:border-gold-dark/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest/15">
                  <MailIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">E-mail</p>
                  <p className="font-heading mt-2 break-all text-lg font-bold text-brand group-hover:text-gold-dark">
                    {bapaContactEmail.display}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-gold-dark">
                    Ouvrir le client mail →
                  </p>
                </div>
              </a>

              <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100/80">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/8 text-brand">
                    <MapIcon />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
                      Localisation
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-stone-700">{bapaContactLocation}</p>
                    <p className="mt-3 text-sm text-stone-600">
                      <span className="font-semibold text-brand">Adresse postale :</span>
                      <br />
                      {bapaContactPostalAddress}
                    </p>
                  </div>
                </div>
              </div>

              {whatsapp && (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-forest/25 bg-gradient-to-r from-forest/[0.08] to-white p-5 shadow-sm transition-all hover:border-forest/40 hover:shadow-md"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#128C7E]">
                    <WhatsAppIcon />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-brand">WhatsApp</p>
                    <p className="text-sm text-stone-600 group-hover:text-brand">Ouvrir la conversation →</p>
                  </div>
                </a>
              )}
            </div>

            <p className="mt-8 text-sm text-stone-500">
              Actualités du Royaume :{' '}
              <Link
                href="/communaute/echos"
                className="font-semibold text-gold-dark hover:text-brand hover:underline"
              >
                Échos de Bapa
              </Link>
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-[0_20px_50px_-28px_rgba(61,34,16,0.35)] ring-1 ring-stone-100/80 md:p-8 lg:p-10">
              <header className="mb-8 border-l-[3px] border-forest/40 pl-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-forest">Message</p>
                <h2 className="font-heading mt-2 text-2xl font-bold text-brand md:text-3xl">
                  Formulaire de contact
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  Visite, partenariat, projet diaspora, renseignement culturel… Décrivez votre demande ci-dessous.
                </p>
              </header>
              <ContactMessageForm />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <PageFooterNav
            links={[
              { href: '/mentions-legales', label: 'Mentions légales' },
              { href: '/politique-de-confidentialite', label: 'Confidentialité' },
              { href: '/communaute', label: '← Les Communautés' },
            ]}
          />
        </div>
      </main>
    </PageShell>
  );
}
