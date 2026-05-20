import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import EchoCard from '@/components/EchoCard';
import EchosHeaderBackdrop from '@/components/EchosHeaderBackdrop';
import {
  echoArticles,
  estimateEchoReadingMinutes,
  formatEchoDate,
  getEchoBySlug,
  getRelatedEchoes,
} from '@/lib/echos';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return echoArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getEchoBySlug(slug);
  if (!article) return { title: 'Article introuvable' };

  return {
    title: `${article.title} | Echos de Bapa`,
    description: article.excerpt,
  };
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M6 12l4-4-4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function breadcrumbCurrentTitle(title: string, maxLen = 44): string {
  const t = title.trim();
  if (t.length <= maxLen) return t;
  return `${t.slice(0, Math.max(0, maxLen - 1))}…`;
}

export default async function EchoArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getEchoBySlug(slug);
  if (!article) notFound();

  const related = getRelatedEchoes(slug, 3);
  const readingMinutes = estimateEchoReadingMinutes(article);

  return (
    <article className="min-h-screen bg-cream">

      {/* Bandeau */}
      <header className="relative overflow-hidden bg-sky-100 px-4 pb-12 pt-[calc(2.5rem+7rem)] text-brand sm:px-6 md:pb-16 md:pt-[calc(2.5rem+8rem)]">
        <EchosHeaderBackdrop priority />

        <div className="relative z-10 mx-auto max-w-4xl">
          <nav aria-label="Fil d'Ariane" className="mb-6 flex justify-center md:justify-start">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-[12px] text-stone-600 md:justify-start md:text-[13px]">
              <li>
                <Link href="/" className="rounded-md px-1.5 py-1 transition-colors hover:text-brand hover:underline">
                  Accueil
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="text-stone-400" />
                <Link
                  href="/communaute"
                  className="rounded-md px-1.5 py-1 transition-colors hover:text-brand hover:underline"
                >
                  Les Communautés
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="text-stone-400" />
                <Link
                  href="/communaute/echos"
                  className="rounded-md px-1.5 py-1 transition-colors hover:text-brand hover:underline"
                >
                  Echos de Bapa
                </Link>
              </li>
              <li className="flex min-w-0 items-center gap-1">
                <ChevronRight className="shrink-0 text-stone-400" />
                <span className="truncate px-1.5 py-1 font-semibold text-brand/90" title={article.title}>
                  {breadcrumbCurrentTitle(article.title)}
                </span>
              </li>
            </ol>
          </nav>

          <Link
            href="/communaute/echos"
            className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-full border border-stone-300/90 bg-white/90 px-4 py-2 text-sm font-medium text-brand shadow-sm backdrop-blur-[2px] transition-colors hover:border-gold-dark/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
          >
            <span aria-hidden className="text-lg leading-none">
              ←
            </span>
            Toutes les actualités
          </Link>

          <div className="flex flex-wrap items-center gap-3 border-b border-stone-300/70 pb-6">
            <span className="rounded-full border border-gold-dark/30 bg-gold/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark">
              {article.category}
            </span>
            <time className="text-sm text-stone-600" dateTime={article.date}>
              {formatEchoDate(article.date)}
            </time>
            <span className="hidden h-4 w-px bg-stone-300 sm:block" aria-hidden />
            <span className="text-sm text-stone-600">Environ {readingMinutes} min de lecture</span>
          </div>

          <h1
            id="echo-title"
            className="font-heading mt-6 text-3xl font-bold leading-[1.12] text-brand md:text-4xl lg:text-[2.65rem]"
            
          >
            {article.title}
          </h1>
        </div>
      </header>

      {/* Image */}
      <div className="relative z-10 mx-auto -mt-8 max-w-5xl px-4 sm:-mt-11 sm:px-6 lg:-mt-14 lg:px-8">
        <figure className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-20px_rgba(61,34,16,0.45)] ring-1 ring-black/12 md:rounded-[1.65rem]">
          <div className="relative aspect-[21/10] md:aspect-[2/1]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover object-[center_42%]"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/15 via-transparent to-transparent" aria-hidden />
          </div>
        </figure>
      </div>

      {/* Corps */}
      <div className="mx-auto max-w-3xl px-4 pb-14 pt-12 sm:px-6 md:pb-20 md:pt-14 lg:px-8">
        <div className="rounded-[1.25rem] border border-stone-200/85 bg-white/95 px-6 py-9 shadow-[0_12px_40px_-24px_rgba(89,52,20,0.22)] md:rounded-[1.4rem] md:px-10 md:py-11">
          <p className="mb-10 border-l-[3px] border-gold-dark pl-5 text-lg font-medium leading-relaxed text-stone-700 md:text-[1.075rem]">
            {article.excerpt}
          </p>
          <div className="prose-bapa space-y-6">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-stone-200/80 pt-9 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
            <Link
              href="/communaute/echos"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand/20 transition-colors hover:bg-brand-dark"
            >
              ← Retour au fil d&apos;actualités
            </Link>
            <Link
              href="/contacts"
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-brand/22 px-6 py-3 text-center text-sm font-semibold text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              Proposer une annonce
            </Link>
          </div>
        </div>
      </div>

      {/* Connexes */}
      {related.length > 0 && (
        <section className="border-t border-stone-200/70 bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark">À lire aussi</p>
                <h2 className="font-heading text-2xl font-bold text-brand md:text-3xl">
                  Autres actualités
                </h2>
                <p className="mt-2 max-w-xl text-sm text-stone-600">
                  En priorité dans la même rubrique ({article.category}), puis le reste du fil.
                </p>
              </div>
              <Link
                href="/communaute/echos"
                className="shrink-0 text-sm font-semibold text-brand underline-offset-4 hover:underline"
              >
                Voir toutes les Echos →
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {related.map((a, i) => (
                <EchoCard key={a.slug} article={a} index={i} variant="editorial" />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
