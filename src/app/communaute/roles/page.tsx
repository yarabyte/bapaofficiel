import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import PageSection from '@/components/ui/PageSection';

export const metadata: Metadata = {
  title: 'Rôles de communautés | Les Communautés | Bapa',
  description:
    'Rôles et missions des communautés du Royaume de Bapa — village, diaspora, chefferie et groupes d’engagement.',
};

const rolesPlaceholders = [
  {
    titre: 'Chefferie & conseils traditionnels',
    detail:
      'Légitimité coutumière, arbitrage des grandes décisions et représentation du Royaume auprès des autorités.',
  },
  {
    titre: 'Royaume de Bapa (Cameroun)',
    detail:
      'Habitants, quartiers, associations locales et porteurs de projets sur le territoire de Bapa.',
  },
  {
    titre: 'Diaspora',
    detail:
      'Relais international, solidarité financière, communication et soutien aux initiatives du village.',
  },
  {
    titre: 'ADEVIPA & acteurs du développement',
    detail: 'Coordination des chantiers santé, éducation, patrimoine et infrastructures communautaires.',
  },
  {
    titre: 'Jeunesse & transmission',
    detail: 'Animation culturelle, formation et participation aux cérémonies et au Festival Pa’a Ngouo’ok.',
  },
  {
    titre: 'Partenaires institutionnels',
    detail:
      'Appui des ambassades, organismes internationaux et collectivités — en lien avec la page Partenaires.',
  },
] as const;

export default function RolesCommunautesPage() {
  return (
    <PageShell>
      <PageHeroSimple
        label="Les Communautés"
        title="Rôles de communautés"
        description="Missions, responsabilités et articulation entre le Royaume de Bapa, la diaspora et les partenaires institutionnels."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Les Communautés', href: '/communaute' },
          { label: 'Rôles de communautés' },
        ]}
      />

      <PageSection containerSize="md" spacing="default">
        <p className="mb-10 text-sm leading-relaxed text-stone-600">
          Cette page présente les grands rôles au sein des communautés Bapa. Le détail des mandats, listes de
          responsables et organigrammes seront publiés par le secrétariat après validation par la chefferie.
        </p>

        <ul className="grid gap-5 sm:grid-cols-2">
          {rolesPlaceholders.map((r) => (
            <li
              key={r.titre}
              className="rounded-2xl border border-stone-200/80 bg-white px-5 py-6 shadow-sm ring-1 ring-stone-100"
            >
              <p className="font-heading text-lg font-bold text-brand">{r.titre}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{r.detail}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-stone-500 sm:text-left">
          <Link
            href="/communaute/cameroun"
            className="font-semibold text-gold-dark hover:text-brand hover:underline"
          >
            Communauté Bapa du Cameroun
          </Link>
          {' · '}
          <Link
            href="/communaute/diaspora"
            className="font-semibold text-gold-dark hover:text-brand hover:underline"
          >
            Communauté Bapa de la diaspora
          </Link>
        </p>

        <PageFooterNav
          links={[
            { href: '/communaute/partenaires', label: 'Partenaires' },
            { href: '/contacts', label: 'Contacts' },
            { href: '/communaute', label: '← Les Communautés' },
          ]}
        />
      </PageSection>
    </PageShell>
  );
}
