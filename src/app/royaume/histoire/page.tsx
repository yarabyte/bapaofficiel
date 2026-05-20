import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeroSimple from '@/components/layout/PageHeroSimple';
import PageSection from '@/components/ui/PageSection';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import Card from '@/components/ui/Card';
import {
  DYNASTIE_PLAQUE_IMAGE,
  dynastieBapa,
  formatReignPeriod,
  souverainActuel,
} from '@/lib/royaume-dynastie';

export const metadata: Metadata = {
  title: 'Histoire & Dynasties | Le Royaume | Bapa',
  description:
    'Dynastie des souverains du Royaume Bapa : chefferie supérieure, lignée des Fons de 1682 à nos jours.',
};

export default function RoyaumeHistoirePage() {
  return (
    <PageShell>
      <PageHeroSimple
        label="Le Royaume"
        title="Histoire & Dynasties"
        description="La mémoire des lignées royales du village de Bapa, de la chefferie supérieure aux générations qui portent aujourd’hui le royaume."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Le Royaume', href: '/royaume/mot-du-roi' },
          { label: 'Histoire & Dynasties' },
        ]}
      />

      <PageSection containerSize="lg" spacing="default">
        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-stone-600 md:text-left md:text-[1.0625rem]">
          La plaque commémorative du palais royal rappelle l’appartenance du village au{' '}
          <strong className="text-brand">Royaume Bapa</strong> et à la{' '}
          <strong className="text-brand">Chefferie supérieure</strong>. Le texte ci-dessous reprend
          fidèlement la liste des souverains et leurs périodes de règne tels qu’inscrits sur ce
          support.
        </p>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          <figure className="lg:col-span-5">
            <Card className="overflow-hidden p-0">
              <div className="relative aspect-[3/4] w-full bg-stone-900 sm:aspect-[4/5]">
                <Image
                  src={DYNASTIE_PLAQUE_IMAGE}
                  alt="Plaque commémorative : Royaume Bapa, Chefferie supérieure, liste des souverains de la dynastie"
                  fill
                  className="object-contain object-center p-2"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
              <figcaption className="border-t border-stone-200/80 px-5 py-4 text-center text-sm leading-relaxed text-stone-600">
                Plaque «&nbsp;Dynastie&nbsp;» — symboles des doubles cloches royales et liste des dix
                souverains (1682 – 1993).
              </figcaption>
            </Card>
          </figure>

          <div className="lg:col-span-7">
            <header className="mb-8 border-b border-gold-dark/25 pb-6">
              <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-gold-dark lg:text-left">
                Royaume Bapa
              </p>
              <h2 className="font-heading text-center text-2xl font-bold text-brand md:text-3xl lg:text-left">
                Chefferie supérieure — Dynastie
              </h2>
            </header>

            <ol className="space-y-3">
              {dynastieBapa.map((s) => (
                <li key={s.ordre}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl border border-stone-200/80 bg-white/95 px-4 py-3.5 shadow-sm transition-colors hover:border-gold-dark/30">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                      {s.ordre}
                    </span>
                    <span className="font-heading min-w-0 flex-1 text-lg font-semibold tracking-wide text-brand">
                      {s.nom}
                    </span>
                    <span className="shrink-0 text-sm font-medium tabular-nums text-stone-500">
                      {formatReignPeriod(s.debut, s.fin)}
                    </span>
                  </div>
                </li>
              ))}
            </ol>

            <Card className="mt-8 border-gold-dark/25 bg-cream/60 p-6">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-dark">
                Depuis 1993
              </p>
              <p className="font-heading text-xl font-bold text-brand">{souverainActuel.nom}</p>
              <p className="font-heading text-base italic text-gold-dark">{souverainActuel.titre}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{souverainActuel.note}</p>
              <Link
                href="/royaume/mot-du-roi"
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
              >
                Lire le Mot du Roi →
              </Link>
            </Card>

            <p className="mt-8 text-xs leading-relaxed text-stone-500">
              Transcription établie à partir de la photographie de la plaque officielle. En cas
              d’écart avec le document physique, la version in situ fait foi.
            </p>
          </div>
        </div>

        <PageFooterNav
          links={[
            { href: '/royaume/mot-du-roi', label: '← Mot du Roi' },
            { href: '/royaume/chefferie', label: 'La Chefferie' },
            { href: '/', label: 'Accueil' },
          ]}
        />
      </PageSection>
    </PageShell>
  );
}
