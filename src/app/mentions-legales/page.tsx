import type { Metadata } from 'next';
import LegalDocument from '@/components/legal/LegalDocument';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import PageSection from '@/components/ui/PageSection';
import { legalLastUpdated, mentionsLegalesSections } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Mentions légales | Bapa Officiel',
  description:
    'Mentions légales du portail Bapa Officiel : éditeur, propriété intellectuelle, responsabilité et droit applicable.',
};

export default function MentionsLegalesPage() {
  return (
    <PageShell>
      <PageHeroSimple
        label="Informations légales"
        title="Mentions légales"
        description="Informations relatives à l’éditeur du site, à la propriété intellectuelle et aux conditions d’utilisation du portail Bapa Officiel."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Mentions légales' },
        ]}
      />

      <PageSection containerSize="md" spacing="default">
        <LegalDocument sections={mentionsLegalesSections} lastUpdated={legalLastUpdated} />

        <PageFooterNav
          links={[
            { href: '/concepteurs', label: 'Concepteurs du site' },
            { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
            { href: '/contacts', label: 'Contacts' },
            { href: '/', label: '← Accueil' },
          ]}
        />
      </PageSection>
    </PageShell>
  );
}
