'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

const HERO_WAVE =
  'M0,40 C180,12 360,56 540,28 C720,8 900,48 1080,32 C1260,16 1350,44 1440,36 L1440,64 L0,64 Z';

const INTERVAL_MS = 6500;

/** Qualité JPEG/WebP/AVIF pour le hero plein écran (défaut Next ~75). */
const HERO_IMAGE_QUALITY = 92;

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
    src: '/images/hero-slide-cortege-traditionnel.png',
    alt: 'Cortège traditionnel sur les chemins de Bapa',
    objectPosition: 'object-cover object-[center_42%]',
    kicker: 'Culture vivante · Traditions',
    subtitle: 'Le village en mouvement, mémoire du corps social',
    blurb:
      "Masques, costumes et savoir-faire transmis : les grandes lignées traversent les paysages comme les temps — fidélité aux Ancêtres et fierté collective.",
    priority: false,
  },
  {
    src: '/images/hero-slide-architecture-patrimoine.png',
    alt: 'Architecture patrimoniale — cases et toitures du pays grassfields',
    objectPosition: 'object-cover object-[center_38%]',
    kicker: 'Patrimoine bâti · Accueil',
    subtitle: 'Bois, pierre et toitures qui racontent le pays',
    blurb:
      "Écrin pour mémoires et rencontres : l’architecture locale conjugue identité royale, savoir artisanal et ouverture aux visiteurs.",
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
              quality={HERO_IMAGE_QUALITY}
              sizes="100vw"
              priority={slide.priority === true && i === 0}
              loading={i === 0 ? undefined : 'eager'}
              className={`${slide.objectPosition} motion-reduce:transition-none select-none`}
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/22 to-black/76 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent z-[1]" />

      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 pb-24 pt-[calc(2.5rem+10rem)]">
        <div
          key={`kicker-${index}`}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm hero-caption-in"
        >
          <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-gold animate-pulse" aria-hidden />
          {active.kicker}
        </div>

        <h1
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-5 tracking-tight"
          style={{
            textShadow: '0 2px 30px rgba(0,0,0,0.4)',
            lineHeight: 1.0,
          }}
        >
          Bapa
        </h1>

        <p
          key={`subtitle-${index}`}
          className="font-heading text-lg md:text-2xl text-white/70 font-light italic mb-3 hero-caption-in"
          style={{ animationDelay: '40ms', animationFillMode: 'both' }}
        >
          {active.subtitle}
        </p>

        <p
          key={`blurb-${index}`}
          className="text-sm md:text-base text-white/50 max-w-md mx-auto mb-10 leading-relaxed hero-caption-in"
          style={{ animationDelay: '90ms', animationFillMode: 'both' }}
        >
          {active.blurb}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-14">
          <Link
            href="/royaume/histoire"
            className="px-7 py-3.5 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand-light transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-brand/40"
          >
            Découvrir le Royaume
          </Link>
          <Link
            href="/economie/tourisme"
            className="px-7 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-full border border-white/25 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
          >
            Explorer Bapa →
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-4" role="tablist" aria-label="Choix de la vignette hero">
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

        <div className="flex flex-col items-center gap-2 text-white/30 text-[10px] tracking-widest uppercase">
          <span>Défiler</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" aria-hidden />
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
