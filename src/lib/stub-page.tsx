import type { Metadata } from 'next';
import ComingSoon from '@/components/layout/ComingSoon';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageSection from '@/components/ui/PageSection';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import type { Crumb } from '@/components/ui/Breadcrumb';

export type StubPageConfig = {
  title: string;
  description: string;
  label: string;
  heading: string;
  intro?: string;
  message: string;
  breadcrumbs: Crumb[];
  footerLinks?: { href: string; label: string }[];
};

export function stubMetadata(config: StubPageConfig): Metadata {
  return {
    title: `${config.heading} | ${config.title} | Bapa`,
    description: config.description,
  };
}

export function StubPage({ config }: { config: StubPageConfig }) {
  return (
    <PageShell>
      <PageHeroSimple
        label={config.label}
        title={config.heading}
        description={config.intro}
        breadcrumbs={config.breadcrumbs}
      />
      <PageSection containerSize="md" spacing="tight">
        <ComingSoon message={config.message} />
        {config.footerLinks && config.footerLinks.length > 0 && (
          <PageFooterNav links={config.footerLinks} />
        )}
      </PageSection>
    </PageShell>
  );
}
