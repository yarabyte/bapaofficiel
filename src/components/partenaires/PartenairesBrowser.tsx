'use client';

import { useMemo, useState } from 'react';
import PartenaireLogo from '@/components/partenaires/PartenaireLogo';
import {
  countPartenairesByTheme,
  filterPartenaires,
  partenaireThemes,
  partenaires,
  type Partenaire,
  type PartenaireTheme,
  type PartenaireThemeId,
} from '@/lib/partenaires';

function ThemeIcon({ id }: { id: PartenaireTheme['id'] }) {
  const cn = 'size-5 shrink-0';
  switch (id) {
    case 'institutionnel':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
          <path strokeLinecap="round" d="M12 11v10M4 7l8 4 8-4" />
        </svg>
      );
    case 'entreprises':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="4" y="8" width="16" height="12" rx="1.5" />
          <path strokeLinecap="round" d="M9 8V6a3 3 0 0 1 6 0v2M12 12v4" />
        </svg>
      );
    case 'medias':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path strokeLinecap="round" d="M7 10h.01M7 14h.01" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m10 9.5 6 3.5-6 3.5V9.5Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'associatif':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path strokeLinecap="round" d="M4 20c0-2.5 2.2-4 5-4M14 20c0-2-1.8-3.5-4-3.5" />
        </svg>
      );
    default:
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11h10M7 15h6M5 5h14v14H5V5Z" />
        </svg>
      );
  }
}

function PartenaireCard({ partner }: { partner: Partenaire }) {
  const Wrapper = partner.href ? 'a' : 'div';
  return (
    <Wrapper
      {...(partner.href
        ? { href: partner.href, target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={`flex h-full flex-col rounded-2xl border border-stone-200/80 bg-white px-5 py-6 shadow-sm ring-1 ring-stone-100 ${
        partner.href
          ? 'transition-[border-color,box-shadow] hover:border-gold-dark/35 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark'
          : ''
      }`}
    >
      <PartenaireLogo partner={partner} />
      <p className="font-heading text-lg font-bold text-brand">{partner.name}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{partner.role}</p>
      {partner.href && (
        <p className="mt-4 text-sm font-semibold text-gold-dark">Site partenaire →</p>
      )}
    </Wrapper>
  );
}

export default function PartenairesBrowser() {
  const [activeTheme, setActiveTheme] = useState<PartenaireTheme['id']>('all');

  const items = useMemo(() => filterPartenaires(activeTheme), [activeTheme]);

  const grouped = useMemo(() => {
    if (activeTheme !== 'all') return null;
    return partenaireThemes
      .filter((t): t is PartenaireTheme & { id: PartenaireThemeId } => t.id !== 'all')
      .map((theme) => ({
        theme,
        items: filterPartenaires(theme.id),
      }))
      .filter((g) => g.items.length > 0);
  }, [activeTheme]);

  const activeMeta = partenaireThemes.find((t) => t.id === activeTheme)!;

  return (
    <div id="partenaires">
      <div className="sticky top-[var(--navbar-offset)] z-20 -mx-4 border-b border-stone-200/80 bg-surface/95 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
          Filtrer par thème
        </p>
        <div
          role="tablist"
          aria-label="Filtrer les partenaires par thème"
          className="flex flex-wrap justify-center gap-2"
        >
          {partenaireThemes.map((theme) => {
            const count =
              theme.id === 'all' ? partenaires.length : countPartenairesByTheme(theme.id as PartenaireThemeId);
            const isActive = activeTheme === theme.id;
            return (
              <button
                key={theme.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTheme(theme.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? 'border-brand bg-brand text-white shadow-sm'
                    : 'border-stone-200/90 bg-white text-brand hover:border-gold-dark/40'
                }`}
              >
                <ThemeIcon id={theme.id} />
                {theme.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-center text-sm text-stone-600 md:text-left">{activeMeta.description}</p>

        {activeTheme === 'all' && grouped ? (
          <div className="mt-10 space-y-14">
            {grouped.map(({ theme, items: sectionItems }) => (
              <section
                key={theme.id}
                id={theme.sectionId}
                className="scroll-mt-[calc(var(--navbar-offset)+10rem)]"
              >
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-stone-200/80 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand/8 text-brand">
                      <ThemeIcon id={theme.id} />
                    </span>
                    <div>
                      <h2 className="font-heading text-xl font-bold text-brand md:text-2xl">{theme.label}</h2>
                      <p className="text-sm text-stone-500">
                        {sectionItems.length} partenaire{sectionItems.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTheme(theme.id)}
                    className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
                  >
                    Voir uniquement →
                  </button>
                </div>
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {sectionItems.map((partner) => (
                    <li key={partner.id}>
                      <PartenaireCard partner={partner} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : (
          <section
            id={activeMeta.sectionId}
            className="mt-10 scroll-mt-[calc(var(--navbar-offset)+10rem)]"
          >
            <h2 className="font-heading mb-6 text-xl font-bold text-brand md:text-2xl">{activeMeta.label}</h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((partner) => (
                <li key={partner.id}>
                  <PartenaireCard partner={partner} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
