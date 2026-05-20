import type { Metadata } from 'next';
import LegalDocument from '@/components/legal/LegalDocument';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import PageSection from '@/components/ui/PageSection';
import { legalLastUpdated, politiqueConfidentialiteSections } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Bapa Officiel',
  description:
    'Politique de confidentialité de Bapa Officiel : données collectées, finalités, durée de conservation et vos droits.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <PageShell>
      <PageHeroSimple
        label="Informations légales"
        title="Politique de confidentialité"
        description="Comment Bapa Officiel traite les données personnelles des visiteurs et des personnes qui nous contactent."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Politique de confidentialité' },
        ]}
      />

      <PageSection containerSize="md" spacing="default">
        <LegalDocument sections={politiqueConfidentialiteSections} lastUpdated={legalLastUpdated} />

        <PageFooterNav
          links={[
            { href: '/mentions-legales', label: 'Mentions légales' },
            { href: '/contacts', label: 'Contacts' },
            { href: '/', label: '← Accueil' },
          ]}
        />
      </PageSection>
    </PageShell>
  );
}
