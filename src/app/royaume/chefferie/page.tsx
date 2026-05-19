import type { Metadata } from 'next';
import ComingSoon from '@/components/layout/ComingSoon';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageSection from '@/components/ui/PageSection';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: 'La Chefferie | Le Royaume | Bapa',
  description:
    'Organisation et fonctionnement de la chefferie traditionnelle royale du village de Bapa.',
};

export default function RoyaumeChefferiePage() {
  return (
    <PageShell>
      <PageHeroSimple
        label="Le Royaume"
        title="La Chefferie"
        description="Structure de la chefferie, conseil des notables et articulation avec les institutions du village royal."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Le Royaume', href: '/royaume/mot-du-roi' },
          { label: 'La Chefferie' },
        ]}
      />
      <PageSection containerSize="md" spacing="tight">
        <ComingSoon message="Contenu à valider par le palais royal : organisation coutumière, attributions et calendrier des cérémonies." />
        <PageFooterNav
          links={[
            { href: '/royaume/administration', label: 'Administration' },
            { href: '/', label: 'Accueil' },
          ]}
        />
      </PageSection>
    </PageShell>
  );
}
