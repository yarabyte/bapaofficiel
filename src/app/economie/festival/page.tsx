import type { Metadata } from 'next';
import Link from 'next/link';
import { FESTIVAL_YEARS, festivalEditions } from '@/lib/festival-editions';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageSection from '@/components/ui/PageSection';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import Card from '@/components/ui/Card';
import ChevronRight from '@/components/ui/ChevronRight';

export const metadata: Metadata = {
  title: "Festival Pa'a Ngouo'ok | Économie & culture | Bapa",
  description:
    "Présentation des éditions du festival biennal Pa'a Ngouo'ok : introductions, programmes, bilan et médias officiels.",
};

export default function FestivalHubPage() {
  return (
    <PageShell>
      <PageHeroSimple
        label="Économie & culture"
        title="Pa'a Ngouo'ok"
        description="Chaque édition dispose de sa page structurée (introduction, thème, présentation, programme, comité, réalisation, partenaires, médiathèque, mot du PCO). Choisissez une édition pour consulter le détail."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: "Festival Pa'a Ngouo'ok" },
        ]}
      />
      <PageSection containerSize="md" spacing="default">
        <ul className="flex flex-col gap-4">
          {[...FESTIVAL_YEARS].reverse().map((year) => {
            const edition = festivalEditions[year];
            return (
              <li key={year}>
                <Card hover className="p-0">
                  <Link
                    href={`/economie/festival/${year}`}
                    className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 md:px-7 md:py-5"
                  >
                    <span className="font-heading text-lg font-semibold text-brand md:text-xl">
                      Édition {year}
                    </span>
                    <span className="text-sm font-medium text-stone-500">{edition.statusLabel}</span>
                    <ChevronRight className="ml-auto text-gold-dark md:ml-0" />
                  </Link>
                </Card>
              </li>
            );
          })}
        </ul>
        <PageFooterNav links={[{ href: '/', label: '← Accueil' }]} />
      </PageSection>
    </PageShell>
  );
}
