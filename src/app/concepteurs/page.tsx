import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeroPremium from '@/components/layout/PageHeroPremium';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import {
  memberInitials,
  siteConcepteursIntro,
  siteConcepteursMission,
  siteCoordination,
  siteRealisationTeam,
  siteSupervisionGeneral,
  siteTechnologies,
  type SiteLeadershipRole,
} from '@/lib/site-credits';

export const metadata: Metadata = {
  title: 'Concepteurs du site | Bapa Officiel',
  description:
    'Supervision, coordination et équipe de réalisation du portail officiel Bapa Officiel — Sa Majesté SIMEU David II, Dr Joseph Kemmegne, Henri-Mill Fetchouang, Jasmine Mabe, Narcisse Noumegni.',
};

function MissionIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14M8 19l1-4m7 4l-1-4" />
    </svg>
  );
}

function CodeIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8 9-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" />
    </svg>
  );
}

function MemberAvatar({
  name,
  initials: initialsOverride,
  variant = 'team',
}: {
  name: string;
  initials?: string;
  variant?: 'supervision' | 'coordination' | 'team';
}) {
  const initials = initialsOverride ?? memberInitials(name);
  const isSupervision = variant === 'supervision';
  const isCoordination = variant === 'coordination';

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-2xl font-heading font-bold ring-1 ${
        isSupervision
          ? 'size-16 bg-gold/20 text-gold-dark ring-gold-dark/25 text-xl sm:size-[4.5rem] sm:text-2xl'
          : isCoordination
            ? 'size-16 bg-forest/10 text-forest ring-forest/20 text-xl sm:size-[4.5rem] sm:text-2xl'
            : 'size-14 bg-brand/8 text-brand ring-brand/15 text-lg'
      }`}
      aria-hidden
    >
      {initials}
    </span>
  );
}

function LeadershipCard({ role, variant }: { role: SiteLeadershipRole; variant: 'supervision' | 'coordination' }) {
  const isSupervision = variant === 'supervision';

  return (
    <article
      className={`overflow-hidden rounded-3xl border p-8 shadow-sm ring-1 sm:p-10 ${
        isSupervision
          ? 'border-gold-dark/20 bg-gradient-to-br from-cream via-white to-cream-dark/50 shadow-[0_20px_50px_-28px_rgba(61,34,16,0.35)] ring-gold-dark/15'
          : 'border-forest/15 bg-gradient-to-br from-white via-cream/40 to-white ring-forest/10'
      }`}
    >
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:text-left">
        <MemberAvatar name={role.name} initials={role.initials} variant={variant} />
        <div className="min-w-0 flex-1">
          <p
            className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
              isSupervision ? 'text-gold-dark' : 'text-forest'
            }`}
          >
            {role.title}
          </p>
          <p className="font-heading mt-2 text-2xl font-bold text-brand sm:text-3xl">{role.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600">{role.description}</p>
        </div>
      </div>
    </article>
  );
}

export default function ConcepteursPage() {
  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="gold" />

      <PageHeroPremium
        imageSrc="/images/hero-slide-architecture-patrimoine.png"
        imageClassName="object-cover object-center scale-105 select-none"
        label="Portail numérique"
        title="Design et réalisation du site"
        description="Supervision, conception et développement du portail officiel du Royaume de Bapa."
        descriptionClassName="mx-auto max-w-2xl text-lg leading-relaxed text-white/88 md:mx-0"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Concepteurs du site' },
        ]}
      />

      <section
        aria-hidden
        className="relative z-[1] -mt-5 mx-auto max-w-4xl px-4 sm:px-6 lg:-mt-8 lg:px-10"
      >
        <figure className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200/90">
          <div className="relative aspect-[21/8] w-full bg-stone-200">
            <Image
              src="/images/hero-slide-palais-bapa.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/45 to-transparent" />
          </div>
        </figure>
      </section>

      <main className="relative z-[1] mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20 lg:px-10">
        <p className="mx-auto max-w-3xl text-center text-[1.05rem] leading-relaxed text-stone-600 md:text-left">
          {siteConcepteursIntro}
        </p>

        {/* Supervision & coordination */}
        <section className="mt-14" aria-labelledby="direction-title">
          <header className="mb-8 border-l-[3px] border-gold-dark/50 pl-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">Direction du projet</p>
            <h2 id="direction-title" className="font-heading mt-2 text-2xl font-bold text-brand md:text-3xl">
              Supervision & coordination
            </h2>
          </header>

          <div className="space-y-5">
            <LeadershipCard role={siteSupervisionGeneral} variant="supervision" />
            <LeadershipCard role={siteCoordination} variant="coordination" />
          </div>
        </section>

        {/* Équipe de réalisation */}
        <section className="mt-16" aria-labelledby="realisation-title">
          <header className="mb-8 border-l-[3px] border-forest/50 pl-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-forest">Conception & développement</p>
            <h2 id="realisation-title" className="font-heading mt-2 text-2xl font-bold text-brand md:text-3xl">
              Équipe de réalisation
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Design, intégration et développement technique du site bapa-officiel.com.
            </p>
          </header>

          <ul className="grid gap-5 sm:grid-cols-3">
            {siteRealisationTeam.map((member) => (
              <li key={member.id}>
                <article className="flex h-full flex-col items-center rounded-3xl border border-stone-200/80 bg-white p-6 text-center shadow-sm ring-1 ring-stone-100/80 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-gold-dark/25 hover:shadow-md sm:p-7">
                  <MemberAvatar name={member.name} />
                  <p className="font-heading mt-5 text-lg font-bold text-brand">{member.name}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
                    Réalisation web
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* Objectifs */}
          <section
            className="rounded-3xl border border-stone-200/70 bg-white p-6 shadow-sm ring-1 ring-stone-100/60 md:p-8"
            aria-labelledby="mission-title"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-gold/15 text-gold-dark ring-1 ring-gold-dark/20">
                <MissionIcon />
              </span>
              <h2 id="mission-title" className="font-heading text-xl font-bold text-brand">
                Objectifs du projet
              </h2>
            </div>
            <ul className="space-y-3">
              {siteConcepteursMission.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone-600">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-dark" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Stack */}
          <section
            className="rounded-3xl border border-stone-200/70 bg-gradient-to-br from-cream/90 to-white p-6 shadow-sm ring-1 ring-stone-100/60 md:p-8"
            aria-labelledby="tech-title"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand/8 text-brand ring-1 ring-brand/15">
                <CodeIcon />
              </span>
              <h2 id="tech-title" className="font-heading text-xl font-bold text-brand">
                Stack technique
              </h2>
            </div>
            <ul className="flex flex-wrap gap-2">
              {siteTechnologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-stone-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-600 shadow-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="mt-12 text-center text-sm text-stone-500">
          Pour toute question sur le portail, contactez le{' '}
          <Link href="/contacts" className="font-semibold text-gold-dark hover:text-brand hover:underline">
            secrétariat du Royaume de Bapa
          </Link>
          .
        </p>

        <div className="mt-14">
          <PageFooterNav
            links={[
              { href: '/mentions-legales', label: 'Mentions légales' },
              { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
              { href: '/', label: '← Accueil' },
            ]}
          />
        </div>
      </main>
    </PageShell>
  );
}
