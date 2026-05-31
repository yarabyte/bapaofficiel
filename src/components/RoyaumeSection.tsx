import Image from 'next/image';
import Link from 'next/link';
import PillarIcon from '@/components/royaume/RoyaumePillarIcon';
import Button from '@/components/ui/Button';
import { dynastieBapa } from '@/lib/royaume-dynastie';
import { ROYAUME_HERITAGE_BG, royaumePillars } from '@/lib/royaume-section';
import SectionDivider from '@/components/SectionDivider';

const firstReign = dynastieBapa[0];

export default function RoyaumeSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <SectionDivider fill="cream" position="top" className="relative z-10" />

      <Image
        src={ROYAUME_HERITAGE_BG}
        alt=""
        fill
        className="pointer-events-none scale-[1.06] object-cover object-[center_38%] select-none"
        sizes="100vw"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(89,52,20,0.32)_0%,transparent_45%,rgba(42,95,58,0.12)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_55%_at_50%_-5%,rgba(212,148,62,0.18),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(168deg,rgba(14,9,6,0.72)_0%,rgba(61,34,16,0.35)_42%,rgba(8,5,3,0.88)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_95%_at_50%_50%,transparent_35%,rgba(0,0,0,0.45)_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.05]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <header className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-light/35 bg-brand-dark/50 px-5 py-2.5 text-[10px] font-bold tracking-[0.24em] text-gold-light uppercase shadow-lg backdrop-blur-md">
            <span className="size-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_12px_rgba(212,148,62,0.75)]" aria-hidden />
            Héritage royal
          </p>
          <h2 className="font-heading mb-5 text-4xl font-bold leading-[1.06] tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl">
            Le Royaume{' '}
            <span className="bg-gradient-to-r from-gold-light via-[#e8b060] to-gold-light bg-clip-text italic font-medium text-transparent">
              de Bapa
            </span>
          </h2>
          <div className="mx-auto mb-6 flex items-center justify-center gap-3" aria-hidden>
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold/80 sm:w-16" />
            <span className="size-2 rotate-45 rounded-[2px] bg-gold-light ring-2 ring-gold-dark/40" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold/80 sm:w-16" />
          </div>
          <p className="font-heading mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Chefferie supérieure aux racines profondes — gardienne d&apos;un patrimoine culturel vivant au cœur des
            Hauts-Plateaux.
          </p>

          <dl className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
              <dt className="font-heading text-xl font-bold text-gold-light">{dynastieBapa.length}</dt>
              <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
                Souverains
              </dd>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
              <dt className="font-heading text-lg font-bold leading-tight text-gold-light">{firstReign.debut}</dt>
              <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
                Lignée royale
              </dd>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
              <dt className="font-heading text-sm font-bold leading-tight text-gold-light">Bamiléké</dt>
              <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
                Identité
              </dd>
            </div>
          </dl>
        </header>

        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link
              href="/royaume/mot-du-roi"
              className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-[1.75rem] shadow-[0_28px_72px_-16px_rgba(0,0,0,0.55)] ring-2 ring-white/15 transition-all card-lift hover:ring-gold-light/40 sm:min-h-[26rem] sm:rounded-[2rem] lg:min-h-[32rem]"
            >
              <Image
                src="/images/roi-trone.jpg"
                alt="Sa Majesté SIMEU David II, Roi des BAPA"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/10" />
              <div className="pointer-events-none absolute inset-[1px] rounded-[inherit] ring-1 ring-inset ring-white/15" />

              <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-gold-light/40 bg-brand-dark/80 text-gold-light backdrop-blur-sm sm:size-14">
                  <PillarIcon id="roi" className="size-6 sm:size-7" />
                </div>
              </div>

              <div className="relative p-6 sm:p-8">
                <div className="mb-4 max-w-sm border-l-[3px] border-gold-light pl-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light">Sa Majesté</p>
                  <p className="font-heading text-2xl font-bold text-white sm:text-3xl">SIMEU David II</p>
                  <p className="font-heading text-lg italic text-gold-light/95">Roi des BAPA</p>
                </div>
                <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/80">
                  Gardien des traditions ancestrales et de l&apos;unité du peuple.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-all group-hover:gap-3">
                  Lire le message royal
                  <span className="flex size-9 items-center justify-center rounded-full border border-gold-light/50 bg-gold/20 text-base group-hover:bg-gold group-hover:text-brand-dark">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7">
            {royaumePillars.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/95 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.45)] ring-1 ring-stone-100/80 transition-all card-lift hover:border-gold-light/50 hover:shadow-[0_22px_48px_-16px_rgba(212,148,62,0.25)] sm:rounded-[1.25rem]"
              >
                <div className="relative aspect-[5/2] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
                  <span
                    className="font-heading absolute right-3 top-3 text-3xl font-bold text-white/25"
                    aria-hidden
                  >
                    {p.num}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-brand/8 text-brand ring-1 ring-brand/10">
                    <PillarIcon id={p.icon} className="size-5" />
                  </div>
                  <h3 className="font-heading mb-2 text-lg font-bold leading-snug text-brand group-hover:text-gold-dark">
                    {p.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-stone-600">{p.desc}</p>
                  <span className="inline-flex w-fit items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-gold-dark group-hover:text-brand">
                    Explorer →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:mt-16 sm:flex-row">
          <Button
            href="/royaume/histoire"
            size="lg"
            className="bg-gradient-to-r from-gold to-gold-dark text-brand-dark shadow-[0_14px_36px_-8px_rgba(192,120,48,0.5)] ring-white/20 hover:from-gold-light hover:to-gold"
          >
            Découvrir le royaume
          </Button>
          <Link
            href="/royaume/traditions"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-gold-light/60 hover:bg-white/15"
          >
            Traditions & rites
          </Link>
        </div>
      </div>

      <SectionDivider fill="cream" position="bottom" className="relative z-10" />
    </section>
  );
}
