import type { Metadata } from 'next';
import Link from 'next/link';
import EchoCard from '@/components/EchoCard';
import EchosHeaderBackdrop from '@/components/EchosHeaderBackdrop';
import EchosInkBackground from '@/components/EchosInkBackground';
import EchosMotifBackground from '@/components/EchosMotifBackground';
import {
  ECHO_CATEGORIES,
  echoArticles,
  isEchoCategory,
  type EchoCategory,
} from '@/lib/echos';

export const metadata: Metadata = {
  title: 'Echos de Bapa | Actualités du Royaume',
  description:
    'Actualités, annonces et nouvelles du village royal de Bapa : culture, développement, festival et communauté.',
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

export default async function EchosPage({ searchParams }: EchosPageProps) {
  const sp = await searchParams;
  const categorieRaw = sp.categorie;

  let activeCategory: EchoCategory | undefined;
  if (typeof categorieRaw === 'string' && categorieRaw.trim()) {
    try {
      const decoded = decodeURIComponent(categorieRaw.trim());
      if (isEchoCategory(decoded)) activeCategory = decoded;
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
    cat
      ? `/communaute/echos?categorie=${encodeURIComponent(cat)}#liste-echos`
      : '/communaute/echos#liste-echos';

  return (
    <div className="min-h-screen bg-cream">
      <header className="relative overflow-hidden bg-sky-100 px-4 pb-16 pt-[calc(2.5rem+7rem)] text-brand sm:px-6 md:pb-20 md:pt-[calc(2.5rem+8rem)]">
        <EchosHeaderBackdrop priority />

        <div className="relative z-10 mx-auto max-w-4xl">
          <nav aria-label="Fil d'Ariane" className="mb-8 flex justify-center md:justify-start">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-[13px] text-stone-600 md:justify-start">
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
                  Communauté
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="text-stone-400" />
                <span className="px-1.5 py-1 font-semibold text-brand">Echos de Bapa</span>
              </li>
            </ol>
          </nav>

          <div className="text-center md:text-left">
            <p className="mb-4 inline-flex items-center gap-3 rounded-full border border-gold-dark/25 bg-white/85 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-dark shadow-sm backdrop-blur-[2px]">
              Actualités du royaume
            </p>
            <h1
              className="font-heading text-4xl font-bold leading-[1.08] text-brand md:text-5xl lg:text-6xl"
              
            >
              Echos de Bapa
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:mx-0 md:text-[1.0625rem]">
              Nouvelles du village royal : initiatives, culture, développement et voix de la diaspora.
              Utilisez les thèmes ci-dessous pour parcourir les articles plus vite.
            </p>
          </div>
        </div>
      </header>

      <main
        id="liste-echos"
        className="echo-section relative overflow-hidden bg-white scroll-mt-[calc(5rem+1rem)] py-14 md:py-20 lg:scroll-mt-[calc(5rem+1.5rem)]"
      >
        <EchosInkBackground />
        <EchosMotifBackground />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-6 border-b border-stone-200/80 pb-10 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-8">
            <div>
              <h2 className="font-heading text-lg font-bold text-brand md:text-xl">
                Parcourir par thème
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-600">
                Filtrez les actualités par domaine. La sélection se met à jour dans l&apos;adresse du
                navigateur pour un partage facile.
              </p>
            </div>
            <p className="shrink-0 text-sm text-stone-500">
              {showFallbackEmpty ? (
                <span>Aucun article dans cette catégorie — affichage de tout le fil.</span>
              ) : (
                <span>
                  <span className="font-semibold text-brand">{filtered.length}</span>
                  {' · '}
                  {activeCategory ? `thème « ${activeCategory} »` : 'tous les thèmes'}
                </span>
              )}
            </p>
          </div>

          <nav aria-label="Filtrer par thème" className="mb-12">
            <ul className="flex flex-wrap gap-2 md:gap-2.5">
              <li>
                <Link
                  href="/communaute/echos"
                  scroll={false}
                  className={`inline-flex min-h-10 items-center rounded-full border px-4 py-2 text-xs font-semibold transition-all md:min-h-11 md:px-5 md:text-[13px] ${
                    !activeCategory
                      ? 'border-gold-dark/50 bg-gold/20 text-brand shadow-sm'
                      : 'border-stone-200/90 bg-white text-stone-600 hover:border-gold-dark/35 hover:bg-cream/80'
                  }`}
                >
                  Tous
                </Link>
              </li>
              {ECHO_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <li key={cat}>
                    <Link
                      href={filterHref(cat)}
                      scroll={false}
                      className={`inline-flex min-h-10 items-center rounded-full border px-4 py-2 text-xs font-semibold transition-all md:min-h-11 md:px-5 md:text-[13px] ${
                        isActive
                          ? 'border-gold-dark/50 bg-gold/20 text-brand shadow-sm'
                          : 'border-stone-200/90 bg-white text-stone-600 hover:border-gold-dark/35 hover:bg-cream/80'
                      }`}
                    >
                      {cat}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {showFallbackEmpty ? (
            <>
              <p className="mb-10 rounded-2xl border border-amber-200/80 bg-amber-50/90 px-5 py-4 text-sm text-amber-950">
                Aucun article ne correspond au filtre sélectionné. Voici l’ensemble des actualités.
              </p>
              <div className="mb-12">
                <EchoCard article={echoArticles[0]} variant="featured" />
              </div>
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
                {echoArticles.slice(1).map((article, i) => (
                  <EchoCard key={article.slug} article={article} index={i} variant="editorial" />
                ))}
              </div>
            </>
          ) : (
            <>
              <section aria-labelledby="echos-featured-heading" className="mb-14 md:mb-16">
                <h2
                  id="echos-featured-heading"
                  className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold-dark"
                >
                  À la une
                </h2>
                <EchoCard article={featured} variant="featured" />
              </section>

              {rest.length > 0 ? (
                <section aria-labelledby="echos-list-heading">
                  <h2
                    id="echos-list-heading"
                    className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-gold-dark"
                  >
                    {activeCategory ? `Articles · ${activeCategory}` : 'Autres actualités'}
                  </h2>
                  <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
                    {rest.map((article, i) => (
                      <EchoCard key={article.slug} article={article} index={i} variant="editorial" />
                    ))}
                  </div>
                </section>
              ) : (
                <p className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-8 text-center text-sm text-stone-600">
                  Il n&apos;y a qu&apos;un seul article pour ce filtre.{' '}
                  <Link href="/communaute/echos" className="font-semibold text-brand underline-offset-4 hover:underline">
                    Voir tous les Echos
                  </Link>
                  .
                </p>
              )}
            </>
          )}

          <aside className="mt-16 rounded-[1.35rem] border border-stone-200/80 bg-gradient-to-br from-cream/80 to-white px-6 py-8 text-center shadow-sm sm:px-10 md:mt-20">
            <p
              className="font-heading mb-2 text-stone-800"
              
            >
              Une annonce à partager&nbsp;?
            </p>
            <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-stone-600">
              Pour proposer une nouvelle ou un événement lié au village, écrivez-nous depuis la page
              contact.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/communaute/contacts"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark hover:shadow-xl"
              >
                Nous contacter
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/communaute"
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-brand/25 px-8 py-3 text-sm font-semibold text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                Page Communauté
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
