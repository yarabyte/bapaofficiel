import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import EchoCard from '@/components/EchoCard';
import PageHeroPremium from '@/components/layout/PageHeroPremium';
import PagePremiumBackdrop from '@/components/layout/PagePremiumBackdrop';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import Button from '@/components/ui/Button';
import {
  ECHOS_LIST_PATH,
  echoArticles,
  estimateEchoReadingMinutes,
  echosCategoryFilterHref,
  formatEchoDate,
  getEchoBySlug,
  getRelatedEchoes,
} from '@/lib/echos';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function breadcrumbTitle(title: string, maxLen = 40): string {
  const t = title.trim();
  if (t.length <= maxLen) return t;
  return `${t.slice(0, Math.max(0, maxLen - 1))}…`;
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
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function EchoArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getEchoBySlug(slug);
  if (!article) notFound();

  const related = getRelatedEchoes(slug, 3);
  const readingMinutes = estimateEchoReadingMinutes(article);
  const categoryHref = echosCategoryFilterHref(article.category);

  return (
    <PageShell className="relative">
      <PagePremiumBackdrop variant="warm" />

      <PageHeroPremium
        imageSrc={article.image}
        imageAlt=""
        imageClassName="object-cover object-[center_40%] scale-105 select-none"
        label="Echos de Bapa"
        title={article.title}
        description={article.excerpt}
        descriptionClassName="mx-auto max-w-2xl text-base leading-relaxed text-white/88 md:mx-0 md:text-lg line-clamp-4"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Echos de Bapa', href: ECHOS_LIST_PATH },
          { label: article.category, href: categoryHref },
          { label: breadcrumbTitle(article.title) },
        ]}
        showDivider={false}
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <Link
            href={categoryHref}
            className="rounded-full border border-gold-light/40 bg-brand-dark/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-light backdrop-blur-sm transition-opacity hover:opacity-90"
          >
            {article.category}
          </Link>
          <time className="text-sm text-white/80" dateTime={article.date}>
            {formatEchoDate(article.date)}
          </time>
          <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden />
          <span className="text-sm text-white/75">{readingMinutes} min de lecture</span>
        </div>
        <div className="mt-8">
          <Button
            href={ECHOS_LIST_PATH}
            variant="secondary"
            size="sm"
            className="border-white/35 bg-white/10 text-white hover:border-white/50 hover:bg-white/15"
          >
            ← Toutes les actualités
          </Button>
        </div>
      </PageHeroPremium>

      <div className="relative z-[1] mx-auto max-w-4xl px-4 sm:px-6 lg:-mt-6 lg:px-8">
        <figure className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200/90 lg:rounded-3xl">
          <div className="relative aspect-[21/9] w-full bg-stone-200 sm:aspect-[2/1]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        </figure>
      </div>

      <main className="relative z-[1] mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <article className="rounded-3xl border border-stone-200/80 bg-white/95 p-6 shadow-[0_20px_50px_-28px_rgba(61,34,16,0.3)] ring-1 ring-stone-100/80 md:p-10 lg:p-12">
          <p className="border-l-[4px] border-gold-dark pl-5 text-lg font-medium leading-relaxed text-stone-700 md:text-xl">
            {article.excerpt}
          </p>

          {article.highlights && article.highlights.length > 0 && (
            <aside className="mt-10 rounded-2xl border border-gold-dark/20 bg-gradient-to-br from-gold/[0.08] via-cream/40 to-white p-6">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark">
                À retenir
              </h2>
              <ul className="mt-4 space-y-3">
                {article.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-stone-700 md:text-base">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-dark"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="prose-bapa mt-10 space-y-6 text-[1.0625rem] leading-[1.88] text-stone-700">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {article.relatedLinks && article.relatedLinks.length > 0 && (
            <nav
              aria-label="Liens utiles"
              className="mt-12 rounded-2xl border border-stone-200/80 bg-cream/50 p-6"
            >
              <h2 className="font-heading text-lg font-bold text-brand">Pour aller plus loin</h2>
              <ul className="mt-4 space-y-3">
                {article.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group block rounded-xl border border-stone-200/70 bg-white px-4 py-4 transition-all hover:border-gold-dark/30 hover:shadow-sm"
                    >
                      <span className="font-semibold text-brand group-hover:text-gold-dark">
                        {link.label}
                      </span>
                      {link.description && (
                        <p className="mt-1 text-sm text-stone-600">{link.description}</p>
                      )}
                      <span className="mt-2 inline-block text-xs font-bold uppercase tracking-wide text-gold-dark">
                        Consulter →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <footer className="mt-12 flex flex-col gap-3 border-t border-stone-200/80 pt-10 sm:flex-row sm:flex-wrap">
            <Button href={ECHOS_LIST_PATH} size="md">
              ← Fil d&apos;actualités
            </Button>
            <Button href={categoryHref} variant="secondary" size="md">
              Plus d&apos;articles · {article.category}
            </Button>
            <Button href="/contacts" variant="ghost" size="md">
              Proposer une annonce
            </Button>
          </footer>
        </article>

        {related.length > 0 && (
          <section className="mt-16 md:mt-20" aria-labelledby="related-heading">
            <header className="mb-8 border-l-[3px] border-gold-dark/50 pl-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">
                À lire aussi
              </p>
              <h2 id="related-heading" className="font-heading mt-2 text-2xl font-bold text-brand md:text-3xl">
                Autres actualités
              </h2>
              <p className="mt-2 text-sm text-stone-500">
                Priorité à la rubrique « {article.category} », puis le reste du fil.
              </p>
            </header>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {related.map((a, i) => (
                <EchoCard key={a.slug} article={a} index={i} variant="editorial" />
              ))}
            </div>
            <p className="mt-8 text-center">
              <Link
                href={ECHOS_LIST_PATH}
                className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
              >
                Voir toutes les Echos →
              </Link>
            </p>
          </section>
        )}

        <div className="mt-14 md:mt-16">
          <PageFooterNav
            links={[
              { href: '/communaute', label: 'Les Communautés' },
              { href: ECHOS_LIST_PATH, label: '← Echos de Bapa' },
              { href: '/', label: 'Accueil' },
            ]}
          />
        </div>
      </main>
    </PageShell>
  );
}
