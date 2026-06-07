'use client';

import { useCallback, useEffect, useId, useState } from 'react';
import Image from 'next/image';
import { museeBoutiqueArticles, museeCasePatrimoniale } from '@/lib/musee-case-patrimoniale';

const { boutique } = museeCasePatrimoniale;
const previewArticles = museeBoutiqueArticles.slice(0, 3);

export default function MuseeBoutiqueFocus() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const titleId = useId();
  const activeArticle = museeBoutiqueArticles.find((a) => a.id === activeId) ?? null;

  const close = useCallback(() => {
    setOpen(false);
    setActiveId(null);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeId) setActiveId(null);
        else close();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, activeId, close]);

  return (
    <>
      <article className="group relative overflow-hidden rounded-3xl border border-gold-dark/25 bg-gradient-to-br from-brand/[0.07] via-white to-gold/10 p-6 shadow-[0_20px_50px_-28px_rgba(61,34,16,0.35)] ring-1 ring-gold-dark/15 sm:p-8">
        <div
          className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gold/20 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_minmax(0,14rem)] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-dark">Hall d&apos;accueil</p>
            <h3 className="font-heading mt-2 text-2xl font-bold text-brand md:text-3xl">{boutique.title}</h3>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-stone-700">{boutique.description}</p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2"
            >
              Voir les articles de la boutique
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative grid grid-cols-3 gap-2 rounded-2xl border border-stone-200/80 bg-white/90 p-2 shadow-sm ring-1 ring-stone-100 transition-all hover:border-gold-dark/35 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2"
            aria-label="Ouvrir la galerie des articles de la boutique"
          >
            {previewArticles.map((article, i) => (
              <div
                key={article.id}
                className={`relative overflow-hidden rounded-xl bg-stone-200 ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                }`}
              >
                <Image
                  src={article.src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 33vw, 180px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
              </div>
            ))}
            <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand shadow-sm ring-1 ring-stone-200/80">
              +{museeBoutiqueArticles.length}
            </span>
          </button>
        </div>
      </article>

      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4">
          <button
            type="button"
            className="absolute inset-0 bg-brand-dark/55 backdrop-blur-[2px]"
            aria-label="Fermer la galerie"
            onClick={close}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-[1] flex max-h-[min(92vh,52rem)] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl border border-stone-200/90 bg-cream shadow-2xl sm:rounded-3xl"
          >
            <header className="flex shrink-0 items-start justify-between gap-4 border-b border-stone-200/80 bg-white px-5 py-4 sm:px-6 sm:py-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark">Boutique du musée</p>
                <h2 id={titleId} className="font-heading mt-1 text-xl font-bold text-brand sm:text-2xl">
                  Articles artisanaux
                </h2>
                <p className="mt-1 text-sm text-stone-500">
                  Sélection de pièces et souvenirs disponibles au hall d&apos;accueil.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-stone-200/90 bg-white text-stone-600 transition-colors hover:border-gold-dark/40 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark"
                aria-label="Fermer"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
              {activeArticle ? (
                <div>
                  <button
                    type="button"
                    onClick={() => setActiveId(null)}
                    className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark hover:text-brand"
                  >
                    ← Retour à la galerie
                  </button>
                  <figure className="overflow-hidden rounded-2xl ring-1 ring-stone-200/90">
                    <div className="relative aspect-[4/3] w-full bg-stone-200 sm:aspect-[16/10]">
                      <Image
                        src={activeArticle.src}
                        alt={activeArticle.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 896px) 100vw, 896px"
                        priority
                      />
                    </div>
                    <figcaption className="border-t border-stone-100 bg-white px-5 py-4">
                      <p className="font-heading text-lg font-bold text-brand">{activeArticle.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{activeArticle.description}</p>
                    </figcaption>
                  </figure>
                </div>
              ) : (
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {museeBoutiqueArticles.map((article) => (
                    <li key={article.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(article.id)}
                        className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white text-left shadow-sm ring-1 ring-stone-100/80 transition-all hover:border-gold-dark/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                          <Image
                            src={article.src}
                            alt={article.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            sizes="(max-width: 640px) 100vw, 280px"
                          />
                        </div>
                        <div className="p-4">
                          <p className="font-semibold text-brand group-hover:text-gold-dark">{article.title}</p>
                          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-stone-600">
                            {article.description}
                          </p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <footer className="shrink-0 border-t border-stone-200/80 bg-white/95 px-5 py-3 text-center text-xs text-stone-500 sm:px-6">
              Disponibilité et tarifs sur place — hall d&apos;accueil du musée.
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
