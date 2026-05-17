'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

const HERO_WAVE =
  'M0,40 C180,12 360,56 540,28 C720,8 900,48 1080,32 C1260,16 1350,44 1440,36 L1440,64 L0,64 Z';

const INTERVAL_MS = 6500;

const slides = [
  {
    src: '/images/hero-bapa.png',
    alt: 'Paysage rocheux de Bapa',
    objectPosition: 'object-cover object-[center_40%]',
    kicker: 'Village royal · Grassfields camerounais',
    subtitle: 'Terre des Rois, mémoire des Ancêtres',
    blurb:
      "Nichée à plus de 1 400 m d'altitude, entre ciel immense et formations granitiques, Bapa incarne la majesté des hautes terres bamiléké.",
    priority: true,
  },
  {
    src: '/images/bapa-02.jpg',
    alt: 'Collines verdoyantes autour du village',
    objectPosition: 'object-cover object-center',
    kicker: 'Nature & patrimoine vivant',
    subtitle: 'Paysages sculptés par le temps',
    blurb:
      "Une topographie rare : roches anciennes et vallées à perte de vue, foyer d'une biodiversité et d'un mode de vie ancré dans les saisons.",
    priority: false,
  },
  {
    src: '/images/roi-trone.jpg',
    alt: 'Chefferie traditionnelle de Bapa',
    objectPosition: 'object-cover object-[center_35%]',
    kicker: 'Institution régale · Chefferie',
    subtitle: 'La continuité du trône ancestral',
    blurb:
      "Une gouvernance léguée à travers les générations : le Fon et les dignitaires garantissent l'unité du peuple et le respect du droit coutumier.",
    priority: false,
  },
  {
    src: '/images/bapa-03.jpg',
    alt: 'Patrimoine bâti et accueil des visiteurs à Bapa',
    objectPosition: 'object-cover object-[center_40%]',
    kicker: 'Économie & culture',
    subtitle: 'Bapa comme destination',
    blurb:
      "Festivals biennaux, gastronomie, sites patrimoniaux et hospitalité foncière dessinent une grille d'expériences riches pour voyageurs et fidèles.",
    priority: false,
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const advance = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    if (prefersReducedMotion.current) return undefined;
    const id = window.setInterval(advance, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [advance]);

  const active = slides[index];

  return (
    <section className="relative min-h-screen flex items-end pb-0 overflow-hidden">
      <div
        className="absolute inset-0"
        aria-roledescription="carrousel"
        aria-live="polite"
        aria-label="Images illustrant le paysage royal de Bapa et la communauté"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out motion-reduce:transition-none ${
              i === index ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={slide.priority === true && i === 0}
              className={`${slide.objectPosition} motion-reduce:transition-none select-none`}
              sizes="100vw"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/82 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-black/15 to-black/25 z-[1]" />
      {/* Lisibilité : assombrit la zone centrale où se trouve le texte */}
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_95%_70%_at_50%_42%,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.22)_55%,transparent_72%)]"
        aria-hidden
      />

      <div className="relative z-10 w-full flex flex-col items-center text-center px-5 sm:px-6 pb-24 pt-36 md:pt-40">
        <div className="w-full max-w-2xl rounded-[1.75rem] border border-white/12 bg-black/40 px-6 py-8 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md sm:px-10 sm:py-10 md:max-w-3xl md:rounded-[2rem]">
          <div
            key={`kicker-${index}`}
            className="inline-flex max-w-full items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-black/50 border border-white/25 text-white text-xs font-semibold tracking-widest uppercase mb-6 sm:mb-8 backdrop-blur-sm hero-caption-in [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]"
          >
            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-gold animate-pulse" aria-hidden />
            {active.kicker}
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 md:mb-5 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
            style={{
              fontFamily: 'var(--font-playfair)',
              textShadow: '0 4px 32px rgba(0,0,0,0.65), 0 1px 0 rgba(0,0,0,0.35)',
              lineHeight: 1.0,
            }}
          >
            Bapa
          </h1>

          <p
            key={`subtitle-${index}`}
            className="text-lg md:text-2xl font-light italic text-white/95 mb-3 md:mb-4 hero-caption-in [text-shadow:0_1px_3px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: 'var(--font-playfair)', animationDelay: '40ms', animationFillMode: 'both' }}
          >
            {active.subtitle}
          </p>

          <p
            key={`blurb-${index}`}
            className="text-sm md:text-[1.05rem] text-white/88 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed hero-caption-in [text-shadow:0_1px_2px_rgba(0,0,0,0.92)] sm:leading-relaxed"
            style={{ animationDelay: '90ms', animationFillMode: 'both' }}
          >
            {active.blurb}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-center mb-0">
            <Link
              href="/royaume/histoire"
              className="px-7 py-3.5 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand-light transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-black/35"
            >
              Découvrir le Royaume
            </Link>
            <Link
              href="/economie/tourisme"
              className="px-7 py-3.5 bg-white/15 text-white text-sm font-semibold rounded-full border border-white/30 hover:bg-white/25 transition-all duration-200 backdrop-blur-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]"
            >
              Explorer Bapa →
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 sm:mt-12">
          <div className="flex items-center gap-3" role="tablist" aria-label="Choix de la vignette hero">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Afficher ${slide.alt}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
                  i === index ? 'w-10 bg-white' : 'w-2 bg-white/35 hover:bg-white/55'
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 text-white/55 text-[10px] tracking-widest uppercase [text-shadow:0_1px_2px_rgba(0,0,0,0.85)]">
            <span>Défiler</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/45 to-transparent" aria-hidden />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none w-full overflow-hidden leading-[0]" aria-hidden>
        <svg viewBox="0 0 1440 64" className="w-full block fill-white" preserveAspectRatio="none" style={{ height: '52px', display: 'block' }}>
          <path d={HERO_WAVE} />
        </svg>
      </div>
    </section>
  );
}
