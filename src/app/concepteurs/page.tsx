import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import PageSection from '@/components/ui/PageSection';
import {
  siteConcepteurs,
  siteConcepteursIntro,
  siteConcepteursMission,
  siteTechnologies,
} from '@/lib/site-credits';

export const metadata: Metadata = {
  title: 'Concepteurs du site | Bapa Officiel',
  description:
    'Équipe et structures ayant participé au design et à la réalisation du portail officiel Bapa Officiel.',
};

export default function ConcepteursPage() {
  return (
    <PageShell>
      <PageHeroSimple
        label="Portail numérique"
        title="Design et réalisation du site"
        description="Les concepteurs et contributeurs du projet Bapa Officiel — direction éditoriale, design, développement et contenus."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Concepteurs du site' },
        ]}
      />

      <PageSection containerSize="md" spacing="default">
        <p className="prose-bapa mb-10 text-[1rem] leading-relaxed text-stone-600">{siteConcepteursIntro}</p>

        <section aria-labelledby="mission" className="mb-12">
          <h2 id="mission" className="font-heading mb-4 text-2xl font-bold text-brand">
            Objectifs du projet
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-stone-600 marker:text-gold-dark">
            {siteConcepteursMission.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="equipe" className="mb-12">
          <h2 id="equipe" className="font-heading mb-6 text-2xl font-bold text-brand">
            Équipe & rôles
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2">
            {siteConcepteurs.map((member) => (
              <li
                key={member.id}
                className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm ring-1 ring-stone-100"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark">{member.role}</p>
                {member.href ? (
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading mt-2 block text-lg font-bold text-brand transition-colors hover:text-gold-dark"
                  >
                    {member.name}
                  </a>
                ) : (
                  <p className="font-heading mt-2 text-lg font-bold text-brand">{member.name}</p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{member.contribution}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-stone-500">
            Pour mettre à jour les noms affichés, contactez le{' '}
            <Link href="/contacts" className="font-semibold text-gold-dark hover:text-brand hover:underline">
              secrétariat
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="tech" className="mb-4 rounded-2xl border border-stone-200/80 bg-cream-dark/30 p-6">
          <h2 id="tech" className="font-heading mb-3 text-xl font-bold text-brand">
            Stack technique
          </h2>
          <ul className="flex flex-wrap gap-2">
            {siteTechnologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-stone-200/90 bg-white px-3 py-1 text-xs font-semibold text-stone-600"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <PageFooterNav
          links={[
            { href: '/mentions-legales', label: 'Mentions légales' },
            { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
            { href: '/', label: '← Accueil' },
          ]}
        />
      </PageSection>
    </PageShell>
  );
}
