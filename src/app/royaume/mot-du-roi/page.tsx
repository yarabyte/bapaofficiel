import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeroPremium from '@/components/layout/PageHeroPremium';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: 'Mot du Roi | Le Royaume de Bapa',
  description:
    'Message de Sa Majesté SIMEU David II, Roi des BAPA : unité, traditions et avenir du Royaume de Bapa.',
};

export default function MotDuRoiPage() {
  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="warm" />

      <PageHeroPremium
        imageSrc="/images/mot-du-roi-header-palais.png"
        label="Le Royaume"
        title="Mot du Roi"
        description="Une parole du souverain — mémoire du passé, responsabilité du présent et confiance dans les générations à venir."
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Le Royaume', href: '/royaume/mot-du-roi' },
          { label: 'Mot du Roi' },
        ]}
      />

      <main className="relative z-[1] mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(100%,44rem)] -translate-x-1/2 bg-gradient-to-b from-gold-dark/[0.06] to-transparent blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -top-24 right-[8%] hidden h-52 w-52 rounded-full bg-gradient-to-br from-gold-light/[0.12] via-transparent to-transparent blur-3xl md:block" aria-hidden />
        <div className="pointer-events-none absolute bottom-[18%] left-[5%] h-40 w-40 rounded-full bg-gradient-to-tr from-brand/[0.06] to-transparent blur-3xl" aria-hidden />

        <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <figure className="relative mx-auto w-full max-w-md lg:sticky lg:top-[calc(2.5rem+8rem)] lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-3 rounded-[2.15rem] bg-gradient-to-br from-gold-dark/25 via-transparent to-brand/15 opacity-90 blur-xl sm:-inset-4"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.85rem] bg-stone-200 shadow-[0_28px_70px_-28px_rgba(61,34,16,0.55)] ring-1 ring-stone-300/70 ring-offset-4 ring-offset-surface sm:rounded-[2rem] lg:ring-offset-8">
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/35" aria-hidden />
              <div className="aspect-[4/5] w-full sm:aspect-[3/4]">
                <Image
                  src="/images/roi-trone.jpg"
                  alt="Sa Majesté SIMEU David II, Roi des BAPA, sur le trône royal"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/92 via-brand-dark/55 to-transparent px-6 pb-7 pt-24 sm:px-8 sm:pb-8">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light">Sa Majesté</p>
                <figcaption>
                  <span className="font-heading block text-2xl font-bold text-white sm:text-3xl">SIMEU David II</span>
                  <span className="font-heading mt-1 block text-lg italic text-gold-light/95 sm:text-xl">
                    Roi des BAPA
                  </span>
                </figcaption>
              </div>
            </div>
          </figure>

          <article
            className="relative rounded-[1.35rem] border border-white/80 bg-white/75 px-6 py-10 shadow-[0_16px_48px_-28px_rgba(89,52,20,0.28)] backdrop-blur-[2px] sm:px-9 sm:py-12 lg:col-span-7 lg:rounded-[1.5rem] lg:px-11 lg:py-14"
            lang="fr"
          >
            <div className="pointer-events-none absolute right-8 top-8 hidden h-24 w-24 rounded-full border border-gold-dark/[0.12] opacity-70 md:block" aria-hidden />
            <div className="pointer-events-none absolute bottom-10 left-10 h-16 w-16 rounded-full border border-brand/[0.08] opacity-60 md:h-20 md:w-20" aria-hidden />

            <div className="relative mx-auto max-w-[52ch]">
              <p className="font-heading mb-10 text-center text-xl italic leading-snug text-brand md:text-left md:text-2xl">
                «&nbsp;L&apos;unité du peuple est le roc sur lequel le royaume se dresse.&nbsp;»
              </p>

              <div className="prose-bapa space-y-7 text-[1.0625rem] leading-[1.88]">
                <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-bold first-letter:text-brand first-letter:leading-none md:first-letter:mr-4 md:first-letter:text-[3.25rem] md:first-letter:leading-[0.85]">
                  Mes très chers fils et filles de Bapa,
                </p>
                <p>
                  C&apos;est avec une joie profonde et une grande responsabilité que je vous adresse ces lignes à travers
                  ce portail qui relie désormais notre village aux quatre horizons du monde. Ce lien nouveau ne remplace
                  jamais la parole au pied du tronc ou sous la case à palabres&nbsp;: il la prolonge et la rend accessible à
                  celles et ceux qui portent Bapa dans leur cœur, au-delà des montagnes.
                </p>
                <p>
                  Notre identité Bamiléké n&apos;est pas un simple héritage du passé&nbsp;: c&apos;est une flamme que nous
                  entretenons ensemble — dans le respect des Ancêtres, dans la discipline du travail communautaire, et dans
                  l&apos;accueil sincère des visiteurs qui découvrent nos paysages et nos traditions.
                </p>
                <p>
                  Je salue la diaspora dont la solidarité nourrit nos chantiers de santé, d&apos;éducation et de
                  développement. Je vous invite à demeurer fidèles aux valeurs du rocher et du lien&nbsp;: fermeté dans
                  l&apos;épreuve, souplesse dans le dialogue.
                </p>
                <p>
                  À la jeunesse&nbsp;: vous portez le futur du royaume. Honorez vos maîtres d&apos;initiation, étudiez avec
                  courage et servez le village avec fierté. Les Ancêtres regardent aussi par vos yeux.
                </p>
                <p className="font-medium text-brand">
                  Que la paix demeure sur nos seuils, et que Dieu et nos Ancêtres bénissent Bapa.
                </p>
              </div>

              <footer className="mt-14 border-t border-gold-dark/20 pt-10">
                <p className="text-sm font-semibold tracking-wide text-muted">Sa Majesté,</p>
                <p className="font-heading mt-3 text-2xl font-bold text-brand md:text-3xl">SIMEU David II</p>
                <p className="font-heading mt-1 text-lg italic text-gold-dark">Roi des BAPA</p>
                <p className="mt-6 text-sm text-muted">Royaume de Bapa — Hauts-Plateaux, Cameroun</p>
              </footer>
            </div>
          </article>
        </div>

        <PageFooterNav
          links={[
            { href: '/royaume/langues-et-cultures', label: 'Langues et Cultures' },
            { href: '/', label: "Retour à l'accueil" },
          ]}
        />
      </main>
    </PageShell>
  );
}
