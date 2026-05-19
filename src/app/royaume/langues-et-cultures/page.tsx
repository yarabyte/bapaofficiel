import type { Metadata } from 'next';
import ComingSoon from '@/components/layout/ComingSoon';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageSection from '@/components/ui/PageSection';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: 'Langues et Cultures | Le Royaume | Bapa',
  description:
    'Diversité linguistique Bamiléké et patrimoines culturels du Royaume de Bapa : transmission, usages et mise en valeur.',
};

export default function LanguesEtCulturesPage() {
  return (
    <PageShell>
      <PageHeroSimple
        label="Le Royaume"
        title="Langues et Cultures"
        description="Usages langagiers Bamiléké, transmissions orales et rapports vivants avec la diaspora culturelle du village."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Le Royaume', href: '/royaume/mot-du-roi' },
          { label: 'Langues et Cultures' },
        ]}
      />
      <PageSection containerSize="md" spacing="tight">
        <ComingSoon message="Cette rubrique accueillera les langues du royaume, les pratiques culturelles et les initiatives de transmission aux jeunes générations." />
        <PageFooterNav
          links={[
            { href: '/royaume/histoire', label: 'Histoire & Dynasties' },
            { href: '/', label: 'Accueil' },
          ]}
        />
      </PageSection>
    </PageShell>
  );
}
