import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { developpementInitiatives } from '@/components/DeveloppementSection';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageSection from '@/components/ui/PageSection';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Projets de développement | Bapa',
  description:
    'Initiatives pour bâtir le Bapa de demain : santé, éducation, prospective, environnement, numérique et communauté.',
};

const developpementMore = {
  name: 'CREMEPA',
  tagline: 'Communauté · Solidarité',
  desc: "Projet d'appoint au service de la cohésion et du développement local.",
  href: '/developpement/cremepa',
  image: '/images/musee-celebration-culturelle.png',
  accent: '#5c4a38',
} as const;

export default function DeveloppementPage() {
  const projects = [...developpementInitiatives, developpementMore];

  return (
    <PageShell>
      <PageHeroSimple
        label="Avenir"
        title="Tous les projets"
        description="Trois priorités présentées en page d'accueil ; la liste ci-dessous regroupe tous les projets, avec les initiatives annexes et la poursuite du chantier commun."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Développement' },
        ]}
      />
      <PageSection containerSize="lg" spacing="default">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {projects.map((p) => (
            <Card key={p.name} className="overflow-hidden p-0">
              <Link
                href={p.href}
                className="group flex h-full min-h-[18rem] flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 340px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.12]"
                    style={{ backgroundColor: p.accent }}
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p
                    className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: p.accent }}
                  >
                    {p.tagline}
                  </p>
                  <h2 className="font-heading mb-3 text-xl font-bold text-brand group-hover:text-brand-light">
                    {p.name}
                  </h2>
                  <p className="flex-1 text-sm leading-relaxed text-stone-600">{p.desc}</p>
                  <span
                    className="mt-4 inline-flex w-fit items-center gap-2 text-[11px] font-medium"
                    style={{ color: p.accent }}
                  >
                    Voir la fiche projet <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
        <PageFooterNav links={[{ href: '/', label: '← Accueil' }]} />
      </PageSection>
    </PageShell>
  );
}
