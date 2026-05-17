import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import EchoCard from '@/components/EchoCard';
import {
  echoArticles,
  formatEchoDate,
  getCategoryStyle,
  getEchoBySlug,
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

export default async function EchoArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getEchoBySlug(slug);
  if (!article) notFound();

  const related = echoArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <article className="bg-cream min-h-screen">
      {/* Header */}
      <header className="bg-brand text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href="/communaute/echos"
            className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            ← Retour aux Echos de Bapa
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getCategoryStyle(article.category)}`}>
              {article.category}
            </span>
            <time className="text-white/50 text-sm" dateTime={article.date}>
              {formatEchoDate(article.date)}
            </time>
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {article.title}
          </h1>
        </div>
      </header>

      {/* Cover image */}
      <div className="max-w-5xl mx-auto px-6 -mt-2">
        <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-lg text-stone-600 font-medium leading-relaxed mb-8 border-l-4 border-gold pl-5">
          {article.excerpt}
        </p>
        <div className="prose-bapa space-y-5">
          {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white py-16 px-6 border-t border-stone-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-brand mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
              Autres actualités
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
