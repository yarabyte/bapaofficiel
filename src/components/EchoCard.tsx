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
        className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_20px_50px_-28px_rgba(61,34,16,0.35)] ring-1 ring-stone-100/80 transition-all card-lift hover:border-gold-dark/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2 md:flex-row md:items-stretch"
      >
        <div className="relative h-56 w-full shrink-0 overflow-hidden bg-stone-200 sm:h-64 md:h-auto md:min-h-[22rem] md:w-[44%] lg:w-[46%]">
          <Image
            src={article.image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 520px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-brand-dark/20" />
          <span className="absolute left-4 top-4 rounded-full bg-gold-dark px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-sm">
            À la une
          </span>
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col justify-center border-t border-stone-100 p-6 sm:p-8 md:border-t-0 md:border-l md:p-10">
          <span
            className="font-heading pointer-events-none absolute right-6 top-4 hidden select-none text-7xl font-bold text-brand/[0.04] md:block"
            aria-hidden
          >
            01
          </span>
          <div className="relative mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getCategoryStyle(article.category)}`}>
              {article.category}
            </span>
            <time className="text-xs text-stone-500" dateTime={article.date}>
              {formatEchoDate(article.date)}
            </time>
          </div>
          <h3 className="font-heading relative text-xl font-bold leading-snug text-brand transition-colors group-hover:text-gold-dark sm:text-2xl md:text-[1.75rem]">
            {article.title}
          </h3>
          <p className="relative mt-3 line-clamp-3 text-sm leading-relaxed text-stone-600 sm:text-base sm:line-clamp-4">
            {article.excerpt}
          </p>
          <span className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-brand-dark">
            Lire l&apos;article
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </div>
      </Link>
    );
  }

  const num = String(index + 2).padStart(2, '0');

  return (
    <Link
      href={`/communaute/echos/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm ring-1 ring-stone-100/60 transition-all card-lift hover:border-gold-dark/25 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2"
    >
      <div className="relative h-48 overflow-hidden sm:h-52">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-brand-dark/5 to-transparent" />
        <span
          className="font-heading absolute left-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/50 bg-white/90 text-sm font-bold text-brand shadow-sm backdrop-blur-sm"
          aria-hidden
        >
          {num}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${getCategoryStyle(article.category)}`}
          >
            {article.category}
          </span>
          <time className="text-xs text-stone-500" dateTime={article.date}>
            {formatEchoDate(article.date)}
          </time>
        </div>
        <h3 className="font-heading mb-2 line-clamp-2 text-lg font-bold text-brand transition-colors group-hover:text-gold-dark">
          {article.title}
        </h3>
        <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600">{article.excerpt}</p>
        <span className="inline-flex w-fit items-center gap-1 text-xs font-bold uppercase tracking-wide text-gold-dark group-hover:text-brand">
          Lire la suite →
        </span>
      </div>
    </Link>
  );
}
