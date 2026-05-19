import Image from 'next/image';
import Link from 'next/link';
import type { EchoArticle } from '@/lib/echos';
import { formatEchoDate, getCategoryStyle } from '@/lib/echos';

interface EchoCardProps {
  article: EchoArticle;
  index?: number;
  variant?: 'featured' | 'editorial';
}

export default function EchoCard({ article, index = 0, variant = 'editorial' }: EchoCardProps) {
  if (variant === 'featured') {
    return (
      <Link
        href={`/communaute/echos/${article.slug}`}
        className="echo-featured group flex flex-col md:flex-row md:items-stretch bg-transparent rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(89,52,20,0.06)] card-lift border border-stone-200/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2"
      >
        <div className="relative w-full md:w-[46%] h-56 sm:h-64 md:min-h-[340px] md:h-full shrink-0 overflow-hidden bg-stone-200">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 520px"
            priority
          />
        </div>

        <div className="relative flex flex-col justify-center flex-1 p-6 sm:p-8 md:p-10 bg-transparent min-w-0">
          <span
            className="font-heading hidden md:block absolute top-6 right-6 text-6xl font-bold text-brand/5 select-none pointer-events-none"
            
            aria-hidden
          >
            01
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 relative">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark bg-gold/15 px-4 py-1.5 rounded-full border border-gold/25">
              À la une
            </span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryStyle(article.category)}`}>
              {article.category}
            </span>
            <time className="text-stone-400 text-xs" dateTime={article.date}>
              {formatEchoDate(article.date)}
            </time>
          </div>
          <h3
            className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand mb-3 leading-snug group-hover:text-gold-dark transition-colors duration-300 relative"
            
          >
            {article.title}
          </h3>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 sm:line-clamp-4 relative">
            {article.excerpt}
          </p>
          <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand text-white font-medium text-sm group-hover:bg-brand-dark transition-all duration-300 w-fit">
            Lire l&apos;article
            <span aria-hidden className="group-hover:translate-x-0.5 transition-transform">→</span>
          </span>
        </div>
      </Link>
    );
  }

  const num = String(index + 2).padStart(2, '0');

  return (
    <Link
      href={`/communaute/echos/${article.slug}`}
      className="echo-editorial group flex flex-col h-full rounded-[1.75rem] sm:rounded-[2rem] bg-transparent overflow-hidden shadow-[0_2px_12px_rgba(89,52,20,0.05)] card-lift border border-stone-200/40 hover:border-gold/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2"
    >
      <div className="relative h-48 sm:h-52 lg:h-44 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 500px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent" />
        <span
          className="font-heading absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-sm text-brand font-bold text-sm shadow-sm border border-white/50"
          
          aria-hidden
        >
          {num}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6 pt-5 sm:p-7 sm:pt-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${getCategoryStyle(article.category)}`}>
            {article.category}
          </span>
          <time className="text-stone-400 text-xs" dateTime={article.date}>
            {formatEchoDate(article.date)}
          </time>
        </div>
        <h3
          className="font-heading text-lg font-bold text-brand mb-2 line-clamp-2 group-hover:text-gold-dark transition-colors"
          
        >
          {article.title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">{article.excerpt}</p>
        <span className="inline-flex items-center gap-2 text-brand text-sm font-medium w-fit px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-stone-200/40 group-hover:bg-gold/15 transition-colors">
          Lire la suite →
        </span>
      </div>
    </Link>
  );
}
