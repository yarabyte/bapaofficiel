import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: 'ADEVIPA’A | Développement du village | Bapa',
  description:
    'ADEVIPA’A — association pour le développement du village de Bapa : histoire, présidence, projets et réalisations.',
};

const navSections = [
  { id: 'intro', label: 'Introduction' },
  { id: 'histoire', label: 'Histoire' },
  { id: 'presidents', label: 'Présidents' },
  { id: 'interview', label: 'Interview' },
  { id: 'realisations', label: 'Réalisations' },
] as const;

/** Données provisoires — à remplacer par les informations validées par l’association. */
const presidentsPlaceholders = [
  {
    name: 'À compléter',
    mandat: '… — …',
    note: 'Portrait et biographie courte seront ajoutés ici.',
  },
  {
    name: 'À compléter',
    mandat: '… — …',
    note: 'Deuxième mandat ou président historique.',
  },
  {
    name: 'À compléter',
    mandat: 'Présidence actuelle',
    note: 'Nom du président en exercice — voir aussi la section interview.',
  },
] as const;

const realisationsPlaceholders = [
  {
    titre: 'Santé communautaire',
    detail: 'Campagnes, sensibilisation et appui aux infrastructures de proximité (texte à préciser).',
  },
  {
    titre: 'Éducation & jeunesse',
    detail: 'Équipements scolaires, bourses ou partenariats (texte à préciser).',
  },
  {
    titre: 'Patrimoine & culture',
    detail: 'Valorisation du musée case patrimoniale et des initiatives culturelles du village.',
  },
  {
    titre: 'Infrastructures & projets structurants',
    detail: 'Chantiers prioritaires validés avec la chefferie et la commune (liste à détailler).',
  },
] as const;

export default function AdevipaPage() {
  return (
    <PageShell>
      {/* Hero */}
      <header className="relative isolate overflow-hidden border-b border-stone-200/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-slide-architecture-patrimoine.png"
            alt=""
            fill
            className="object-cover object-[center_40%]"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest/85 via-brand-dark/75 to-brand-dark/90"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.06]" aria-hidden />

        <div className="relative mx-auto max-w-3xl px-4 pb-16 page-top page-top-md text-center text-white md:pb-20">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light/95">Développement</p>
          <h1
            className="font-heading mb-4 text-4xl font-bold tracking-tight drop-shadow-sm md:text-5xl"
            
          >
            ADEVIPA’A
          </h1>
          <p className="mx-auto max-w-xl text-[1.05rem] leading-relaxed text-white/90">
            Association pour le développement du village <span className="whitespace-nowrap">BAPA</span> — moteur de
            projets au service du territoire et de la communauté.
          </p>
          <nav
            aria-label="Sections de la page"
            className="mt-10 flex flex-wrap justify-center gap-2 border-t border-white/15 pt-8"
          >
            {navSections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-gold-light/50 hover:bg-white/15"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-18">
        {/* Intro */}
        <section id="intro" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2
            className="font-heading mb-5 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Introduction
          </h2>
          <div className="prose-bapa max-w-none space-y-4 text-stone-600">
            <p>
              <strong>ADEVIPA’A</strong> (appui au développement du village de Bapa) regroupe une dynamique associative
              tournée vers la santé, l&apos;éducation, le patrimoine et les projets structurants. Elle travaille en lien
              avec la <strong>chefferie traditionnelle</strong>, les habitants et les partenaires pour prioriser les
              besoins du village et suivre les réalisations dans la durée.
            </p>
            <p className="text-sm text-stone-500">
              Ce contenu d&apos;introduction sera affiné par le bureau de l&apos;association (missions officielles,
              statuts, contact).
            </p>
          </div>
        </section>

        {/* Histoire */}
        <section id="histoire" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2
            className="font-heading mb-5 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Histoire
          </h2>
          <div className="prose-bapa max-w-none space-y-4 text-stone-600">
            <p>
              Insérez ici la genèse de l&apos;association&nbsp;: contexte de création, premières actions, évolutions des
              statuts ou du périmètre d&apos;intervention. Une frise chronologique (dates clés, assemblées, grands
              partenariats) peut compléter ce paragraphe.
            </p>
            <p className="text-sm text-stone-500">
              Matière à fournir par ADEVIPA’A — cette section est volontairement ouverte pour accueillir le récit validé
              par les membres fondateurs ou le conseil d&apos;administration.
            </p>
          </div>
        </section>

        {/* Présidents */}
        <section id="presidents" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2
            className="font-heading mb-2 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Portrait des présidents successifs
          </h2>
          <p className="mb-8 text-sm text-stone-500">
            Une photographie officielle et une courte biographie par mandat — à compléter.
          </p>
          <ul className="grid gap-6 sm:grid-cols-2">
            {presidentsPlaceholders.map((p, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-xl border border-stone-200/80 bg-white/95 p-5 shadow-sm ring-1 ring-stone-100"
              >
                <div
                  className="relative size-[5.25rem] shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-forest/25 to-brand/20 ring-2 ring-stone-200/90"
                  aria-hidden
                >
                  <Image
                    src="/images/hero-slide-cortege-traditionnel.png"
                    alt=""
                    fill
                    className="object-cover opacity-35 mix-blend-multiply"
                    sizes="84px"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-brand/60">
                    ?
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-brand">{p.name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">{p.mandat}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{p.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Interview */}
        <section id="interview" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2
            className="font-heading mb-5 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Interview du président actuel
          </h2>
          <div className="rounded-2xl border border-stone-200/80 bg-white/95 p-6 shadow-sm md:p-8">
            <p className="mb-8 text-sm text-stone-500">
              Format proposé&nbsp;: questions en gras, réponses en texte courant — à remplacer par l&apos;entretien
              validé.
            </p>
            <dl className="space-y-8">
              <div>
                <dt className="mb-2 font-bold text-brand">Quelles sont les priorités d&apos;ADEVIPA’A pour les mois à venir&nbsp;?</dt>
                <dd className="border-l-2 border-gold-dark/35 pl-4 text-stone-600 leading-relaxed">
                  [Réponse du président — à rédiger ou à transcrire depuis l&apos;enregistrement.]
                </dd>
              </div>
              <div>
                <dt className="mb-2 font-bold text-brand">
                  Comment la diaspora et les partenaires peuvent-ils soutenir concrètement le village&nbsp;?
                </dt>
                <dd className="border-l-2 border-gold-dark/35 pl-4 text-stone-600 leading-relaxed">
                  [Réponse du président — appels à projet, cotisations, chantiers, mise en réseau…]
                </dd>
              </div>
              <div>
                <dt className="mb-2 font-bold text-brand">
                  Quel message souhaitez-vous adresser aux habitants de Bapa&nbsp;?
                </dt>
                <dd className="border-l-2 border-gold-dark/35 pl-4 text-stone-600 leading-relaxed">
                  [Citation ou paragraphe de clôture — à compléter.]
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Réalisations */}
        <section id="realisations" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2
            className="font-heading mb-5 text-2xl font-bold text-brand md:text-3xl"
            
          >
            Réalisations
          </h2>
          <p className="mb-8 text-stone-600">
            Liste indicative des axes d&apos;action — à détailler avec dates, montants ou partenaires lorsque les données
            seront communiquées.
          </p>
          <ul className="grid gap-5 sm:grid-cols-2">
            {realisationsPlaceholders.map((r) => (
              <li
                key={r.titre}
                className="rounded-xl border border-forest/15 bg-gradient-to-br from-white to-cream-dark/40 px-5 py-5 ring-1 ring-stone-200/60"
              >
                <p className="font-bold text-forest">{r.titre}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{r.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <nav className="flex flex-col items-center gap-4 border-t border-stone-200/70 pt-12 text-center sm:flex-row sm:justify-center sm:gap-10">
          <Link href="/developpement" className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline">
            ← Tous les projets
          </Link>
          <Link href="/" className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline">
            Accueil
          </Link>
        </nav>
      </div>
    </PageShell>
  );
}
