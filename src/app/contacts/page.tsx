import type { Metadata } from 'next';
import Link from 'next/link';
import ContactMessageForm from '@/components/contacts/ContactMessageForm';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import PageSection from '@/components/ui/PageSection';
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
    'Contactez le secrétariat du Royaume de Bapa : téléphones, e-mail et formulaire de message.',
};

function PhoneIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 4h3l2 5-2.2 1.4a12 12 0 0 0 5.3 5.3L14 13.5l5 2v3a1.5 1.5 0 0 1-1.5 1.5A15 15 0 0 1 4 6.5 1.5 1.5 0 0 1 5.5 5Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4V6Z" />
      <path strokeLinecap="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function ContactsPage() {
  const whatsapp = footerSocialHref('whatsapp');

  return (
    <PageShell>
      <PageHeroSimple
        label="Les Communautés"
        title="Contacts"
        description="Secrétariat du Royaume de Bapa — joignez-nous pour vos questions sur le village, les visites, les partenariats et la diaspora."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Les Communautés', href: '/communaute' },
          { label: 'Contacts' },
        ]}
      />

      <PageSection containerSize="md" spacing="default">
        <section aria-labelledby="coordonnees" className="mb-14">
          <h2 id="coordonnees" className="font-heading mb-6 text-2xl font-bold text-brand md:text-3xl">
            Coordonnées officielles
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100 sm:col-span-2">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/8 text-brand">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-stone-500">Téléphone</p>
                  <ul className="mt-3 space-y-2">
                    {bapaContactPhones.map((phone) => (
                      <li key={phone.tel}>
                        <a
                          href={`tel:${phone.tel}`}
                          className="font-heading text-lg font-bold text-brand transition-colors hover:text-gold-dark md:text-xl"
                        >
                          {phone.display}
                        </a>
                        <span className="ml-2 text-xs text-stone-500">({phone.label})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a
              href={bapaContactEmail.href}
              className="group flex flex-col rounded-2xl border border-stone-200/80 bg-gradient-to-br from-white to-cream-dark/40 p-6 shadow-sm ring-1 ring-stone-100 transition-[border-color,box-shadow] hover:border-gold-dark/35 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark"
            >
              <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest/15">
                <MailIcon />
              </span>
              <p className="text-sm font-bold uppercase tracking-wide text-stone-500">E-mail</p>
              <p className="font-heading mt-2 break-all text-lg font-bold text-brand group-hover:text-gold-dark md:text-xl">
                {bapaContactEmail.display}
              </p>
              <p className="mt-3 text-sm font-semibold text-gold-dark">Écrire un message →</p>
            </a>

            <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100">
              <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-brand/8 text-brand">
                <MapIcon />
              </span>
              <p className="text-sm font-bold uppercase tracking-wide text-stone-500">Localisation</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{bapaContactLocation}</p>
              <p className="mt-2 text-sm text-stone-600">
                <span className="font-semibold text-stone-700">Adresse :</span> {bapaContactPostalAddress}
              </p>
            </div>
          </div>

          {whatsapp && (
            <p className="mt-6 text-center text-sm text-stone-600 sm:text-left">
              Vous préférez WhatsApp ?{' '}
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold-dark hover:text-brand hover:underline"
              >
                Ouvrir la conversation
              </a>
            </p>
          )}
        </section>

        <section aria-labelledby="formulaire" className="mb-4">
          <h2 id="formulaire" className="font-heading mb-2 text-2xl font-bold text-brand md:text-3xl">
            Formulaire de contact
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-stone-600">
            Décrivez votre demande (visite, partenariat, projet diaspora, renseignement culturel…). Le secrétariat vous
            répondra par e-mail ou par téléphone.
          </p>
          <div className="rounded-2xl border border-stone-200/80 bg-white/95 p-6 shadow-sm md:p-8">
            <ContactMessageForm />
          </div>
        </section>

        <p className="text-center text-sm text-stone-500">
          Retrouvez aussi les actualités du village dans{' '}
          <Link href="/communaute/echos" className="font-semibold text-gold-dark hover:text-brand hover:underline">
            les Échos de Bapa
          </Link>
          .
        </p>

        <PageFooterNav
          links={[
            { href: '/mentions-legales', label: 'Mentions légales' },
            { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
            { href: '/communaute', label: '← Les Communautés' },
          ]}
        />
      </PageSection>
    </PageShell>
  );
}
