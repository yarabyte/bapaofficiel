import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EchoCard from '@/components/EchoCard';
import EchosInkBackground from '@/components/EchosInkBackground';
import EchosMotifBackground from '@/components/EchosMotifBackground';
import { echoArticles } from '@/lib/echos';

export const metadata: Metadata = {
  title: 'Echos de Bapa | Actualités du Royaume',
  description:
    'Actualités, annonces et nouvelles du village royal de Bapa : culture, développement, festival et communauté.',
};

export default function EchosPage() {
  const [featured, ...rest] = echoArticles;

  return (
    <div className="min-h-screen">
      <section className="bg-brand text-white py-20 px-6 relative overflow-hidden">
        <div className="pattern-geo absolute inset-0 opacity-10" />
        <Image
          src="/images/echos-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-overlay pointer-events-none"
          sizes="100vw"
          aria-hidden
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="inline-flex items-center gap-3 text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-4 px-5 py-2 rounded-full bg-white/10 border border-gold/30">
            Actualités du royaume
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Echos
            <span className="block text-3xl md:text-4xl italic text-gold-light font-medium mt-1">
              de Bapa
            </span>
          </h1>
        </div>
      </section>

      <section className="echo-section relative overflow-hidden bg-white py-16 md:py-20">
        <EchosInkBackground />
        <EchosMotifBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <EchoCard article={featured} variant="featured" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {rest.map((article, i) => (
              <EchoCard key={article.slug} article={article} index={i} variant="editorial" />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-stone-500 text-sm mb-4 italic" style={{ fontFamily: 'var(--font-playfair)' }}>
              Vous souhaitez partager une annonce ou un événement ?
            </p>
            <Link
              href="/communaute/contacts"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition-all shadow-lg"
            >
              Nous contacter →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
