'use client';

import { useCallback, useEffect, useId, useState } from 'react';
import { restaurantManagerMessage } from '@/lib/saveurs-du-palais';

const heroSecondaryClass =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-gold-light/50 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

export default function RestaurantManagerVoice() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const { title, managerName, transcript, audioSrc } = restaurantManagerMessage;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={heroSecondaryClass}>
        <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14h8a4 4 0 0 1 4 4v1H4v-1a4 4 0 0 1 4-4Z" />
        </svg>
        {title}
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4">
          <button
            type="button"
            className="absolute inset-0 bg-brand-dark/55 backdrop-blur-[2px]"
            aria-label="Fermer"
            onClick={close}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-[1] w-full max-w-lg overflow-hidden rounded-t-3xl border border-stone-200/90 bg-cream shadow-2xl sm:rounded-3xl"
          >
            <header className="flex items-start justify-between gap-4 border-b border-stone-200/80 bg-white px-5 py-4 sm:px-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark">Accueil</p>
                <h2 id={titleId} className="font-heading mt-1 text-xl font-bold text-brand">
                  {title}
                </h2>
                <p className="mt-1 text-sm text-stone-500">{managerName}</p>
              </div>
              <button
                type="button"
                onClick={close}
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-stone-200/90 bg-white text-stone-600 transition-colors hover:border-gold-dark/40 hover:text-brand"
                aria-label="Fermer"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </header>

            <div className="space-y-5 px-5 py-6 sm:px-6">
              {audioSrc ? (
                <audio controls className="w-full" src={audioSrc}>
                  <track kind="captions" />
                </audio>
              ) : (
                <p className="rounded-xl border border-dashed border-stone-300/90 bg-white/80 px-4 py-3 text-center text-xs text-stone-500">
                  Enregistrement audio bientôt disponible — lisez le message ci-dessous.
                </p>
              )}

              <blockquote className="rounded-2xl border border-gold-dark/20 bg-gradient-to-br from-white to-cream-dark/40 p-5">
                <p className="text-[1.0625rem] leading-relaxed text-stone-700">{transcript}</p>
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
