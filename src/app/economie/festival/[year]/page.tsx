import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FESTIVAL_YEARS, getFestivalEdition } from '@/lib/festival-editions';

type Params = Promise<{ year: string }>;

export function generateStaticParams() {
  return FESTIVAL_YEARS.map((year) => ({ year: String(year) }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { year: y } = await params;
  const edition = getFestivalEdition(y);
  if (!edition) return { title: 'Édition introuvable | Bapa' };
  return {
    title: `${edition.label} | Festival Pa'a Ngouook | Bapa`,
    description: edition.heroLead,
  };
}

export default async function FestivalYearPage({ params }: { params: Params }) {
  const { year: yearStr } = await params;
  const edition = getFestivalEdition(yearStr);
  if (!edition) notFound();

  const toc = edition.blocks.map((b) => ({ slug: b.slug, title: b.title }));

  return (
    <div className="min-h-screen bg-cream pb-16">
      <section className="relative border-b border-stone-900/10 bg-brand-dark pb-12 pt-[calc(2.5rem+7rem)] text-white md:pb-16 md:pt-[calc(2.5rem+8rem)]">
        <Image
          src="/images/paa-ngouook-2028.jpg"
          alt=""
          fill
          className="pointer-events-none object-cover object-[center_38%] opacity-35 mix-blend-luminosity"
          sizes="100vw"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/72 via-brand-dark/88 to-brand-dark" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <nav className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-medium uppercase tracking-widest text-white/55">
            <Link href="/" className="hover:text-gold-light">
              Accueil
            </Link>
            <span aria-hidden>/</span>
            <Link href="/economie/festival" className="hover:text-gold-light">
              Pa&apos;a Ngouook
            </Link>
            <span aria-hidden>/</span>
            <span className="text-gold-light">{edition.year}</span>
          </nav>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light/90">{edition.statusLabel}</p>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] md:text-5xl">
            {edition.label}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-white/78 md:text-base">{edition.heroLead}</p>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pt-12 lg:flex-row lg:gap-16 lg:pt-14 lg:px-8">
        <aside className="lg:w-72 lg:shrink-0">
          <div className="lg:sticky lg:top-[calc(2.5rem+7rem)]">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Sommaire</p>
            <nav aria-label="Sections de la page" className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l-2 lg:border-stone-200 lg:pb-0">
              {toc.map((item) => (
                <a
                  key={item.slug}
                  href={`#${item.slug}`}
                  className="whitespace-nowrap rounded-full border border-stone-200/80 bg-white px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm lg:rounded-none lg:border-0 lg:border-b lg:border-transparent lg:bg-transparent lg:px-4 lg:py-2.5 lg:text-sm lg:shadow-none lg:hover:border-gold-dark/35 lg:hover:bg-white/75"
                >
                  {item.title}
                </a>
              ))}
            </nav>
            <div className="mt-10 hidden lg:block">
              <Link
                href="/economie/festival"
                className="text-sm font-semibold text-gold-dark hover:text-brand"
              >
                &larr; Toutes les éditions
              </Link>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          {edition.blocks.map((block) => (
            <section
              key={block.slug}
              id={block.slug}
              className="scroll-mt-[calc(2.5rem+7rem)] border-b border-stone-200/65 pb-12 last:border-b-0 last:pb-0 md:pb-14"
            >
              <h2
                className="font-heading mb-5 text-2xl font-bold text-brand md:text-[1.75rem]"
                
              >
                {block.title}
              </h2>
              <div className="prose-bapa max-w-none space-y-4 text-stone-600">
                {block.paragraphs.map((para, pi) => (
                  <p key={pi}>{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-8 text-center lg:px-8 lg:hidden">
        <Link href="/economie/festival" className="text-sm font-semibold text-gold-dark hover:text-brand">
          &larr; Toutes les éditions
        </Link>
      </div>
    </div>
  );
}
