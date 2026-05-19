import type { Metadata } from 'next';
import ComingSoon from '@/components/layout/ComingSoon';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageSection from '@/components/ui/PageSection';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: 'Histoire & Dynasties | Le Royaume | Bapa',
  description:
    'Les origines royales du Royaume de Bapa et les lignées des souverains : mémoire collective et transmission.',
};

export default function RoyaumeHistoirePage() {
  return (
    <PageShell>
      <PageHeroSimple
        label="Le Royaume"
        title="Histoire & Dynasties"
        description="Les origines royales de Bapa, les récits des souverains et la mémoire collective transmise à la chefferie traditionnelle."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Le Royaume', href: '/royaume/mot-du-roi' },
          { label: 'Histoire & Dynasties' },
        ]}
      />
      <PageSection containerSize="md" spacing="tight">
        <ComingSoon message="Le secrétariat du palais royal complétera cette rubrique : frise chronologique, dynasties et récits fondateurs du village." />
        <PageFooterNav
          links={[
            { href: '/royaume/mot-du-roi', label: '← Mot du Roi' },
            { href: '/', label: 'Accueil' },
          ]}
        />
      </PageSection>
    </PageShell>
  );
}
