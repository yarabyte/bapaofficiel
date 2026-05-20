'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  countByTopic,
  filterMediathequeItems,
  mediathequeCategories,
  mediathequeTopicFilters,
  type MediathequeAudio,
  type MediathequeCategory,
  type MediathequeCategoryId,
  type MediathequeItem,
  type MediathequePdf,
  type MediathequePhoto,
  type MediathequeTopic,
  type MediathequeTopicFilterId,
  type MediathequeVideo,
} from '@/lib/mediatheque';

function CategoryIcon({ id }: { id: MediathequeCategory['id'] }) {
  const cn = 'size-5 shrink-0';
  switch (id) {
    case 'photos':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8.5" cy="10" r="1.5" fill="currentColor" stroke="none" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m3 16 5-5 4 4 5-6 4 5" />
        </svg>
      );
    case 'pdf':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h7l5 5v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
          <path strokeLinecap="round" d="M14 4v5h5M9 13h6M9 17h4" />
        </svg>
      );
    case 'videos':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m10 9.5 6 3.5-6 3.5V9.5Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'audio':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M11 5v14M7 9v6M15 8v8M19 10v4" />
        </svg>
      );
    default:
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="4" y="4" width="7" height="7" rx="1" />
          <rect x="13" y="4" width="7" height="7" rx="1" />
          <rect x="4" y="13" width="7" height="7" rx="1" />
          <rect x="13" y="13" width="7" height="7" rx="1" />
        </svg>
      );
  }
}

function TopicBadges({ topics }: { topics: MediathequeTopic[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {topics.map((topic) => (
        <li
          key={topic}
          className="rounded-full bg-forest/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-forest"
        >
          {topic}
        </li>
      ))}
    </ul>
  );
}

function PhotoCard({ item }: { item: MediathequePhoto }) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm ring-1 ring-stone-100">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
      </div>
      <figcaption className="p-4">
        <p className="font-bold text-brand">{item.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-stone-600">{item.caption}</p>
        {item.date && <p className="mt-2 text-xs text-stone-500">{item.date}</p>}
        <TopicBadges topics={item.topics} />
      </figcaption>
    </figure>
  );
}

function PdfCard({ item }: { item: MediathequePdf }) {
  const available = Boolean(item.href);
  const Wrapper = available ? 'a' : 'div';
  return (
    <Wrapper
      {...(available
        ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={`flex h-full flex-col rounded-2xl border border-stone-200/80 bg-gradient-to-br from-white to-cream-dark/40 p-5 shadow-sm ring-1 ring-stone-100 ${
        available ? 'transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark' : ''
      }`}
    >
      <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-brand/8 text-brand">
        <CategoryIcon id="pdf" />
      </span>
      <p className="font-bold text-brand">{item.title}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{item.description}</p>
      <p className="mt-4 text-xs font-semibold text-stone-500">
        PDF
        {item.pages != null && ` · ${item.pages} p.`}
        {item.fileSize && ` · ${item.fileSize}`}
      </p>
      <p className="mt-3 text-sm font-semibold text-gold-dark">
        {available ? 'Télécharger →' : 'Document à publier prochainement'}
      </p>
      <TopicBadges topics={item.topics} />
    </Wrapper>
  );
}

function VideoCard({ item }: { item: MediathequeVideo }) {
  const available = Boolean(item.href);
  const Wrapper = available ? 'a' : 'div';
  return (
    <Wrapper
      {...(available
        ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={`group relative overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm ring-1 ring-stone-100 ${
        available ? 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark' : ''
      }`}
    >
      <div className="relative aspect-video w-full">
        <Image
          src={item.thumbnailSrc}
          alt={item.thumbnailAlt}
          fill
          className="object-cover"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-brand-dark/35 transition-colors group-hover:bg-brand-dark/25" />
        <span
          className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-sm"
          aria-hidden
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M10 8.5v7l6-3.5-6-3.5Z" />
          </svg>
        </span>
        {item.duration && (
          <span className="absolute bottom-3 right-3 rounded-md bg-brand-dark/85 px-2 py-1 text-[10px] font-bold text-white">
            {item.duration}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="font-bold text-brand">{item.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-stone-600">{item.description}</p>
        <p className="mt-3 text-sm font-semibold text-gold-dark">
          {available ? 'Voir la vidéo →' : 'Vidéo à venir'}
        </p>
        <TopicBadges topics={item.topics} />
      </div>
    </Wrapper>
  );
}

function AudioCard({ item }: { item: MediathequeAudio }) {
  const available = Boolean(item.href);
  const Wrapper = available ? 'a' : 'div';
  return (
    <Wrapper
      {...(available ? { href: item.href } : {})}
      className={`flex h-full gap-4 rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm ring-1 ring-stone-100 ${
        available ? 'hover:border-gold-dark/30' : ''
      }`}
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
        <CategoryIcon id="audio" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-bold text-brand">{item.title}</p>
        <p className="mt-1 text-sm text-stone-600">{item.description}</p>
        <p className="mt-2 text-xs text-stone-500">
          {item.duration && `${item.duration} · `}
          {available ? 'Écouter →' : 'Enregistrement à publier'}
        </p>
        <TopicBadges topics={item.topics} />
      </div>
    </Wrapper>
  );
}

function ItemCard({ item }: { item: MediathequeItem }) {
  switch (item.kind) {
    case 'photo':
      return <PhotoCard item={item} />;
    case 'pdf':
      return <PdfCard item={item} />;
    case 'video':
      return <VideoCard item={item} />;
    case 'audio':
      return <AudioCard item={item} />;
  }
}

function gridClassForMedia(mediaType: MediathequeCategory['id']): string {
  return mediaType === 'photos' || mediaType === 'videos'
    ? 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3'
    : 'grid gap-5 sm:grid-cols-2';
}

function readFiltersFromUrl(): { media: MediathequeCategory['id']; topic: MediathequeTopicFilterId } {
  if (typeof window === 'undefined') return { media: 'all', topic: 'all' };

  const params = new URLSearchParams(window.location.search);
  const categorieParam = params.get('categorie')?.trim();
  const typeParam = params.get('type')?.trim();

  let media: MediathequeCategory['id'] = 'all';
  if (typeParam) {
    const byType = mediathequeCategories.find((c) => c.id === typeParam || c.sectionId === typeParam);
    if (byType) media = byType.id;
  } else {
    const hash = window.location.hash.replace('#', '');
    const byHash = mediathequeCategories.find((c) => c.sectionId === hash || c.id === hash);
    if (byHash) media = byHash.id;
  }

  let topic: MediathequeTopicFilterId = 'all';
  if (categorieParam) {
    const found = mediathequeTopicFilters.find(
      (t) => t.id === categorieParam || t.label === categorieParam,
    );
    if (found) topic = found.id;
  }

  return { media, topic };
}

function writeFiltersToUrl(media: MediathequeCategory['id'], topic: MediathequeTopicFilterId) {
  const params = new URLSearchParams();
  if (topic !== 'all') params.set('categorie', topic);
  if (media !== 'all') params.set('type', media);

  const query = params.toString();
  const hash = media !== 'all' ? `#${mediathequeCategories.find((c) => c.id === media)?.sectionId ?? media}` : '';
  const url = `${window.location.pathname}${query ? `?${query}` : ''}${hash}`;
  window.history.replaceState(null, '', url);
}

export default function MediathequeBrowser() {
  const [activeMedia, setActiveMedia] = useState<MediathequeCategory['id']>('all');
  const [activeTopic, setActiveTopic] = useState<MediathequeTopicFilterId>('all');

  const syncFromUrl = useCallback(() => {
    const { media, topic } = readFiltersFromUrl();
    setActiveMedia(media);
    setActiveTopic(topic);
  }, []);

  useEffect(() => {
    syncFromUrl();
    window.addEventListener('hashchange', syncFromUrl);
    window.addEventListener('popstate', syncFromUrl);
    return () => {
      window.removeEventListener('hashchange', syncFromUrl);
      window.removeEventListener('popstate', syncFromUrl);
    };
  }, [syncFromUrl]);

  const items = useMemo(
    () => filterMediathequeItems(activeMedia, activeTopic),
    [activeMedia, activeTopic],
  );

  const visibleTopicFilters = useMemo(
    () =>
      mediathequeTopicFilters.filter(
        (t) => t.id === 'all' || countByTopic(t.id, activeMedia) > 0,
      ),
    [activeMedia],
  );

  const grouped = useMemo(() => {
    if (activeMedia !== 'all' || activeTopic !== 'all') return null;
    return mediathequeCategories
      .filter((c): c is MediathequeCategory & { id: MediathequeCategoryId } => c.id !== 'all')
      .map((cat) => ({
        category: cat,
        items: filterMediathequeItems(cat.id, 'all'),
      }))
      .filter((g) => g.items.length > 0);
  }, [activeMedia, activeTopic]);

  function selectMedia(id: MediathequeCategory['id']) {
    setActiveMedia(id);
    writeFiltersToUrl(id, activeTopic);
  }

  function selectTopic(id: MediathequeTopicFilterId) {
    setActiveTopic(id);
    writeFiltersToUrl(activeMedia, id);
  }

  function clearFilters() {
    setActiveMedia('all');
    setActiveTopic('all');
    window.history.replaceState(null, '', window.location.pathname);
  }

  const activeMeta = mediathequeCategories.find((c) => c.id === activeMedia)!;
  const activeTopicMeta = mediathequeTopicFilters.find((t) => t.id === activeTopic)!;
  const hasActiveFilters = activeMedia !== 'all' || activeTopic !== 'all';

  return (
    <div id="ressources">
      <div className="sticky top-[var(--navbar-offset)] z-20 -mx-4 border-b border-stone-200/80 bg-surface/95 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6">
        <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
          Type de média
        </p>
        <div
          role="tablist"
          aria-label="Filtrer par type de média"
          className="flex flex-wrap justify-center gap-2"
        >
          {mediathequeCategories.map((cat) => {
            const count = filterMediathequeItems(cat.id, activeTopic).length;
            const isActive = activeMedia === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectMedia(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? 'border-brand bg-brand text-white shadow-sm'
                    : 'border-stone-200/90 bg-white text-brand hover:border-gold-dark/40'
                }`}
              >
                <CategoryIcon id={cat.id} />
                {cat.label}
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

        <p className="mb-2 mt-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
          Catégorie
        </p>
        <div
          role="tablist"
          aria-label="Filtrer par catégorie thématique"
          className="flex flex-wrap justify-center gap-2"
        >
          {visibleTopicFilters.map((topic) => {
            const count = countByTopic(topic.id, activeMedia);
            const isActive = activeTopic === topic.id;
            return (
              <button
                key={topic.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectTopic(topic.id)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  isActive
                    ? 'border-forest bg-forest text-white shadow-sm'
                    : 'border-stone-200/90 bg-white text-stone-700 hover:border-forest/35 hover:text-forest'
                }`}
              >
                {topic.label}
                <span
                  className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {hasActiveFilters && (
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-semibold text-gold-dark hover:text-brand hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      <div className="mt-10">
        <p className="text-center text-sm text-stone-600 md:text-left">
          {activeMeta.description}
          {activeTopic !== 'all' && (
            <>
              {' '}
              — thème&nbsp;: <span className="font-semibold text-brand">{activeTopicMeta.label}</span>
            </>
          )}
          {items.length > 0 && (
            <span className="text-stone-500">
              {' '}
              ({items.length} ressource{items.length > 1 ? 's' : ''})
            </span>
          )}
        </p>

        {items.length === 0 ? (
          <p className="mt-10 rounded-xl border border-stone-200/80 bg-white px-6 py-10 text-center text-stone-600">
            Aucune ressource pour cette combinaison de filtres.
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 block w-full text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
            >
              Afficher toutes les ressources
            </button>
          </p>
        ) : activeMedia === 'all' && activeTopic === 'all' && grouped ? (
          <div className="mt-10 space-y-14">
            {grouped.map(({ category, items: sectionItems }) => (
              <section
                key={category.id}
                id={category.sectionId}
                className="scroll-mt-[calc(var(--navbar-offset)+10rem)]"
              >
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-stone-200/80 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand/8 text-brand">
                      <CategoryIcon id={category.id} />
                    </span>
                    <div>
                      <h2 className="font-heading text-xl font-bold text-brand md:text-2xl">{category.label}</h2>
                      <p className="text-sm text-stone-500">
                        {sectionItems.length} ressource{sectionItems.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => selectMedia(category.id)}
                    className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
                  >
                    Voir uniquement →
                  </button>
                </div>
                <div className={gridClassForMedia(category.id)}>
                  {sectionItems.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <section
            id={activeMedia !== 'all' ? activeMeta.sectionId : 'filtres'}
            className="mt-10 scroll-mt-[calc(var(--navbar-offset)+10rem)]"
          >
            {activeMedia !== 'all' && (
              <h2 className="font-heading mb-6 text-xl font-bold text-brand md:text-2xl">{activeMeta.label}</h2>
            )}
            {activeTopic !== 'all' && activeMedia === 'all' && (
              <h2 className="font-heading mb-6 text-xl font-bold text-brand md:text-2xl">{activeTopicMeta.label}</h2>
            )}
            <div className={gridClassForMedia(activeMedia)}>
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
