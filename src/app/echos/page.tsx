import type { Metadata } from 'next';
import Link from 'next/link';
import EchoCard from '@/components/EchoCard';
import EchosHeaderBackdrop from '@/components/EchosHeaderBackdrop';
import Button from '@/components/ui/Button';
import {
  ECHO_CATEGORIES,
  ECHOS_LIST_PATH,
  echoArticles,
  echosCategoryFilterHref,
  echosListHashHref,
  formatEchoDate,
  normalizeEchoCategory,
  type EchoCategory,
} from '@/lib/echos';

export const metadata: Metadata = {
  title: 'Echos de Bapa | Actualités du Royaume',
  description:
    'Actualités, annonces et nouvelles du Royaume de Bapa : culture, développement, festival et communauté.',
};

interface EchosPageProps {
  searchParams: Promise<{ categorie?: string }>;
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

function categoryCount(cat: EchoCategory): number {
  return echoArticles.filter((a) => a.category === cat).length;
}

const filterLinkClass = (active: boolean) =>
  `flex w-full items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-all md:px-4 ${
    active
      ? 'border-gold-dark/40 bg-white text-brand shadow-sm ring-1 ring-gold-dark/15'
      : 'border-transparent bg-transparent text-stone-600 hover:border-stone-200/90 hover:bg-white/80'
  }`;

const filterPillClass = (active: boolean) =>
  `inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all md:text-[13px] ${
    active
      ? 'border-gold-dark/50 bg-white text-brand shadow-sm ring-1 ring-gold-dark/15'
      : 'border-stone-200/90 bg-white/90 text-stone-600 hover:border-gold-dark/30 hover:bg-white'
  }`;

export default async function EchosPage({ searchParams }: EchosPageProps) {
  const sp = await searchParams;
  const categorieRaw = sp.categorie;

  let activeCategory: EchoCategory | undefined;
  if (typeof categorieRaw === 'string' && categorieRaw.trim()) {
    try {
      const decoded = decodeURIComponent(categorieRaw.trim());
      const normalized = normalizeEchoCategory(decoded);
      if (normalized) activeCategory = normalized;
    } catch {
      activeCategory = undefined;
    }
  }

  const filtered = activeCategory
    ? echoArticles.filter((a) => a.category === activeCategory)
    : echoArticles;

  const [featured, ...rest] = filtered.length > 0 ? filtered : echoArticles;
  const showFallbackEmpty = Boolean(activeCategory && filtered.length === 0);

  const filterHref = (cat?: EchoCategory) =>
    cat ? echosCategoryFilterHref(cat) : echosListHashHref();

  const displayCount = showFallbackEmpty ? echoArticles.length : filtered.length;

  return (
    <div className="min-h-screen bg-cream">
      <header className="relative isolate overflow-hidden border-b border-stone-200/50 px-4 pb-12 pt-[calc(2.5rem+7rem)] sm:px-6 md:pb-16 md:pt-[calc(2.5rem+8rem)]">
        <EchosHeaderBackdrop priority />

        <div className="relative z-10 mx-auto max-w-5xl">
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-[13px] text-white/75 md:justify-start">
              <li>
                <Link
                  href="/"
                  className="rounded-md px-1.5 py-1 transition-colors hover:text-white hover:underline"
                >
                  Accueil
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="text-white/45" />
                <span className="px-1.5 py-1 font-semibold text-gold-light">Echos de Bapa</span>
              </li>
            </ol>
          </nav>

          <div className="text-center md:text-left">
            <span className="section-label mb-6 inline-flex border-white/20 bg-white/10 text-gold-light backdrop-blur-sm">
              Actualités du royaume
            </span>
            <h1 className="font-heading text-4xl font-bold leading-[1.08] text-white drop-shadow-sm md:text-5xl lg:text-[3.25rem]">
              Echos de Bapa
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/88 md:mx-0">
              Nouvelles du Royaume de Bapa — initiatives, culture, développement et voix de la diaspora.
            </p>

            <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-3 sm:gap-4 md:mx-0 md:max-w-lg">
              <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                <dt className="font-heading text-xl font-bold text-gold-light">{echoArticles.length}</dt>
                <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
                  Articles
                </dd>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                <dt className="font-heading text-xl font-bold text-gold-light">{ECHO_CATEGORIES.length}</dt>
                <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
                  Thèmes
                </dd>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                <dt className="font-heading text-lg font-bold leading-tight text-gold-light">
                  {formatEchoDate(echoArticles[0].date).split(' ').slice(-1)[0]}
                </dt>
                <dd className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/75">
                  Dernière actu
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <main
        id="liste-echos"
        className="scroll-mt-[calc(var(--navbar-offset)+1rem)] py-12 md:py-16 lg:scroll-mt-[calc(var(--navbar-offset)+1.5rem)]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-x-10 xl:grid-cols-[minmax(0,17rem)_1fr] xl:gap-x-12">
            <aside className="mb-8 lg:sticky lg:top-[calc(var(--navbar-offset)+1rem)] lg:mb-0 lg:self-start">
              <div className="rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm ring-1 ring-stone-100/60 md:p-5">
                <h2 className="font-heading text-base font-bold text-brand">Parcourir par thème</h2>
                <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
                  Filtrez le fil d&apos;actualités. L&apos;URL se met à jour pour le partage.
                </p>
                <p className="mt-4 border-t border-stone-100 pt-4 text-xs text-stone-500">
                  {showFallbackEmpty ? (
                    'Aucun article — affichage complet.'
                  ) : (
                    <>
                      <span className="font-semibold text-brand">{displayCount}</span>
                      {activeCategory ? ` · ${activeCategory}` : ' · tous les thèmes'}
                    </>
                  )}
                </p>

                <nav aria-label="Filtrer par thème" className="mt-4 hidden lg:block">
                  <ul className="space-y-1">
                    <li>
                      <Link href={echosListHashHref()} scroll={false} className={filterLinkClass(!activeCategory)}>
                        <span>Tous</span>
                        <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[11px] font-bold text-stone-600">
                          {echoArticles.length}
                        </span>
                      </Link>
                    </li>
                    {ECHO_CATEGORIES.map((cat) => (
                      <li key={cat}>
                        <Link
                          href={filterHref(cat)}
                          scroll={false}
                          className={filterLinkClass(activeCategory === cat)}
                        >
                          <span className="min-w-0 text-left leading-snug">{cat}</span>
                          <span className="shrink-0 rounded-full bg-stone-100 px-2 py-0.5 text-[11px] font-bold text-stone-600">
                            {categoryCount(cat)}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <nav aria-label="Filtrer par thème (mobile)" className="mt-4 lg:hidden">
                <ul className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                  <li>
                    <Link href={echosListHashHref()} scroll={false} className={filterPillClass(!activeCategory)}>
                      Tous
                    </Link>
                  </li>
                  {ECHO_CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <Link
                        href={filterHref(cat)}
                        scroll={false}
                        className={filterPillClass(activeCategory === cat)}
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="min-w-0 space-y-10 md:space-y-12">
              {showFallbackEmpty ? (
                <>
                  <p className="rounded-2xl border border-amber-200/80 bg-amber-50/90 px-5 py-4 text-sm text-amber-950">
                    Aucun article ne correspond au filtre sélectionné. Voici l&apos;ensemble des actualités.
                  </p>
                  <section aria-labelledby="echos-featured-heading">
                    <h2
                      id="echos-featured-heading"
                      className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-dark"
                    >
                      <span className="h-px w-8 bg-gold-dark/40" aria-hidden />
                      À la une
                    </h2>
                    <EchoCard article={echoArticles[0]} variant="featured" />
                  </section>
                  <section aria-labelledby="echos-list-heading">
                    <h2
                      id="echos-list-heading"
                      className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand"
                    >
                      <span className="h-px w-8 bg-brand/20" aria-hidden />
                      Toutes les actualités
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                      {echoArticles.slice(1).map((article, i) => (
                        <EchoCard key={article.slug} article={article} index={i} variant="editorial" />
                      ))}
                    </div>
                  </section>
                </>
              ) : (
                <>
                  <section aria-labelledby="echos-featured-heading">
                    <h2
                      id="echos-featured-heading"
                      className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-dark"
                    >
                      <span className="h-px w-8 bg-gold-dark/40" aria-hidden />
                      À la une
                    </h2>
                    <EchoCard article={featured} variant="featured" />
                  </section>

                  {rest.length > 0 ? (
                    <section aria-labelledby="echos-list-heading">
                      <h2
                        id="echos-list-heading"
                        className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand"
                      >
                        <span className="h-px w-8 bg-brand/20" aria-hidden />
                        {activeCategory ? `Articles · ${activeCategory}` : 'Autres actualités'}
                      </h2>
                      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                        {rest.map((article, i) => (
                          <EchoCard key={article.slug} article={article} index={i} variant="editorial" />
                        ))}
                      </div>
                    </section>
                  ) : (
                    <p className="rounded-2xl border border-stone-200/80 bg-white px-5 py-8 text-center text-sm text-stone-600 shadow-sm">
                      Il n&apos;y a qu&apos;un seul article pour ce filtre.{' '}
                      <Link
                        href={ECHOS_LIST_PATH}
                        className="font-semibold text-brand underline-offset-4 hover:underline"
                      >
                        Voir tous les Echos
                      </Link>
                      .
                    </p>
                  )}
                </>
              )}

              <aside className="overflow-hidden rounded-3xl border border-gold-dark/20 bg-gradient-to-br from-brand/[0.06] via-white to-forest/[0.05] p-6 shadow-sm sm:p-8 md:p-10">
                <div className="mx-auto max-w-lg text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">
                    Contribuer
                  </p>
                  <h2 className="font-heading mt-2 text-2xl font-bold text-brand md:text-[1.65rem]">
                    Une annonce à partager&nbsp;?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    Pour proposer une nouvelle ou un événement lié au Royaume de Bapa, contactez-nous.
                  </p>
                  <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button href="/contacts" size="md">
                      Nous contacter
                    </Button>
                    <Button href="/communaute" variant="secondary" size="md">
                      Les Communautés
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
