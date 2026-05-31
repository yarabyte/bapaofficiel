import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeroPremium from '@/components/layout/PageHeroPremium';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import Button from '@/components/ui/Button';
import {
  DYNASTIE_PLAQUE_IMAGE,
  dynastieBapa,
  formatReignPeriod,
  souverainActuel,
} from '@/lib/royaume-dynastie';

export const metadata: Metadata = {
  title: 'Histoire & Dynasties | Le Royaume | Bapa',
  description:
    'Dynastie des souverains du Royaume de Bapa : chefferie supérieure, lignée des Fons de 1682 à nos jours.',
};

const firstReign = dynastieBapa[0];
const lastPlaque = dynastieBapa[dynastieBapa.length - 1];

export default function RoyaumeHistoirePage() {
  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="gold" />

      <PageHeroPremium
        imageSrc="/images/hero-slide-architecture-patrimoine.png"
        imageClassName="object-cover object-[center_42%] scale-105 select-none"
        label="Le Royaume"
        title="Histoire & Dynasties"
        description="La mémoire des lignées royales du Royaume de Bapa — de la chefferie supérieure aux générations qui portent aujourd’hui le trône."
        descriptionClassName="mx-auto max-w-2xl text-lg leading-relaxed text-white/88 md:mx-0"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Le Royaume', href: '/royaume/mot-du-roi' },
          { label: 'Histoire & Dynasties' },
        ]}
      >
        <dl className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3 sm:gap-4 md:mx-0 md:max-w-xl">
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-xl font-bold text-gold-light">{dynastieBapa.length}</dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Souverains (plaque)
            </dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-lg font-bold leading-tight text-gold-light">
              {firstReign.debut}
            </dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Fondation lignée
            </dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
            <dt className="font-heading text-lg font-bold leading-tight text-gold-light">
              {lastPlaque.fin}
            </dt>
            <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
              Fin ère plaque
            </dd>
          </div>
        </dl>
      </PageHeroPremium>

      <main className="relative z-[1] mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(100%,44rem)] -translate-x-1/2 bg-gradient-to-b from-gold-dark/[0.07] to-transparent blur-3xl"
          aria-hidden
        />

        <div className="relative mb-12 rounded-2xl border border-white/80 bg-white/80 px-6 py-8 shadow-[0_16px_48px_-28px_rgba(89,52,20,0.22)] backdrop-blur-[2px] md:px-9 md:py-10">
          <p className="mx-auto max-w-3xl text-center text-[1.0625rem] leading-[1.88] text-stone-700 md:text-left">
            La plaque commémorative du palais royal rappelle l&apos;appartenance du territoire au{' '}
            <strong className="text-brand">Royaume de Bapa</strong> et à la{' '}
            <strong className="text-brand">Chefferie supérieure</strong>. Le texte ci-dessous reprend
            fidèlement la liste des souverains et leurs périodes de règne tels qu&apos;inscrits sur ce
            support.
          </p>
        </div>

        <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <figure className="relative mx-auto w-full max-w-md lg:sticky lg:top-[calc(2.5rem+8rem)] lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-3 rounded-[2.15rem] bg-gradient-to-br from-gold-dark/20 via-transparent to-brand/12 opacity-90 blur-xl sm:-inset-4"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.85rem] bg-stone-900 shadow-[0_28px_70px_-28px_rgba(61,34,16,0.55)] ring-1 ring-stone-300/70 ring-offset-4 ring-offset-surface sm:rounded-[2rem] lg:ring-offset-8">
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/20" aria-hidden />
              <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
                <Image
                  src={DYNASTIE_PLAQUE_IMAGE}
                  alt="Plaque commémorative : Royaume Bapa, Chefferie supérieure, liste des souverains de la dynastie"
                  fill
                  className="object-contain object-center p-3 sm:p-4"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
              <figcaption className="border-t border-stone-700/80 bg-brand-dark/95 px-6 py-5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light">
                  Document source
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Plaque «&nbsp;Dynastie&nbsp;» — symboles des doubles cloches royales et liste des dix
                  souverains ({formatReignPeriod(firstReign.debut, lastPlaque.fin)}).
                </p>
              </figcaption>
            </div>
          </figure>

          <div className="lg:col-span-7">
            <header className="mb-8 border-l-[3px] border-gold-dark/50 pl-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">
                Royaume de Bapa
              </p>
              <h2 className="font-heading mt-2 text-2xl font-bold text-brand md:text-3xl">
                Chefferie supérieure — Dynastie
              </h2>
              <p className="mt-2 text-sm text-stone-500">
                Ordre et périodes de règne transcrits depuis la plaque officielle.
              </p>
            </header>

            <ol className="relative space-y-0" aria-label="Liste des souverains">
              {dynastieBapa.map((s, i) => {
                const isLast = i === dynastieBapa.length - 1;
                return (
                  <li key={s.ordre} className="relative flex gap-4 sm:gap-5">
                    <div className="flex w-10 shrink-0 flex-col items-center sm:w-11">
                      <span
                        className={`relative z-10 flex size-10 items-center justify-center rounded-full text-sm font-bold shadow-sm sm:size-11 ${
                          isLast
                            ? 'bg-gold-dark text-white ring-2 ring-gold-light/40'
                            : 'bg-brand text-white ring-2 ring-brand/20'
                        }`}
                      >
                        {s.ordre}
                      </span>
                      {!isLast && (
                        <span
                          className="w-px flex-1 min-h-[1.25rem] bg-gradient-to-b from-brand/25 via-stone-300/80 to-brand/15"
                          aria-hidden
                        />
                      )}
                    </div>

                    <div
                      className={`mb-4 min-w-0 flex-1 rounded-2xl border px-4 py-3.5 transition-colors sm:px-5 sm:py-4 ${
                        isLast
                          ? 'border-gold-dark/30 bg-gradient-to-r from-cream/90 to-white shadow-md ring-1 ring-gold-dark/15'
                          : 'border-stone-200/80 bg-white/90 shadow-sm hover:border-gold-dark/25 hover:shadow-md'
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <span className="font-heading text-lg font-semibold tracking-wide text-brand sm:text-xl">
                          {s.nom}
                        </span>
                        <time
                          className="shrink-0 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-semibold tabular-nums text-stone-600"
                          dateTime={`${s.debut}/${s.fin}`}
                        >
                          {formatReignPeriod(s.debut, s.fin)}
                        </time>
                      </div>
                      {isLast && (
                        <p className="mt-2 text-xs text-stone-500">
                          Dernier souverain inscrit sur la plaque commémorative.
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="relative mt-10 overflow-hidden rounded-3xl border border-gold-dark/30 bg-gradient-to-br from-brand/[0.07] via-white to-gold/[0.08] p-6 shadow-[0_20px_50px_-28px_rgba(61,34,16,0.35)] sm:p-8">
              <div
                className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gold-light/15 blur-2xl"
                aria-hidden
              />
              <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark">
                Depuis {lastPlaque.fin + 1}
              </p>
              <p className="font-heading relative mt-2 text-2xl font-bold text-brand sm:text-3xl">
                {souverainActuel.nom}
              </p>
              <p className="font-heading relative text-lg italic text-gold-dark">{souverainActuel.titre}</p>
              <p className="relative mt-3 max-w-prose text-sm leading-relaxed text-stone-600">
                {souverainActuel.note}
              </p>
              <div className="relative mt-6">
                <Button href="/royaume/mot-du-roi" size="md">
                  Lire le Mot du Roi →
                </Button>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-16 md:mt-20">
        <PageFooterNav
          links={[
            { href: '/royaume/mot-du-roi', label: '← Mot du Roi' },
            { href: '/royaume/chefferie', label: 'La Chefferie' },
            { href: '/royaume/traditions', label: 'Traditions' },
          ]}
        />
        </div>
      </main>
    </PageShell>
  );
}
