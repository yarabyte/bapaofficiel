import Link from 'next/link';
import EchoCard from '@/components/EchoCard';
import EchosInkBackground from '@/components/EchosInkBackground';
import EchosMotifBackground from '@/components/EchosMotifBackground';
import SectionDivider from '@/components/SectionDivider';
import { echoArticles } from '@/lib/echos';

export default function EchosSection() {
  const [featured, ...rest] = echoArticles;

  return (
    <section className="echo-section relative overflow-hidden bg-white">
      <EchosInkBackground />
      <EchosMotifBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="text-center mb-10 md:mb-12">
          <h2
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand leading-tight mb-5"
            
          >
            Echos{' '}
            <span className="text-gradient italic font-medium">de Bapa</span>
          </h2>
          <p
            className="font-heading max-w-xl mx-auto text-stone-600 text-sm sm:text-base leading-relaxed italic px-6 py-4 rounded-3xl bg-transparent border border-stone-200/40"
            
          >
            Les nouvelles du royaume — événements, projets, culture et vie de la communauté.
          </p>
        </header>

        <EchoCard article={featured} variant="featured" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-14">
          {rest.slice(0, 3).map((article, i) => (
            <EchoCard key={article.slug} article={article} index={i} variant="editorial" />
          ))}
        </div>

        <div className="flex justify-center mt-14 md:mt-16">
          <Link
            href="/communaute/echos"
            className="echo-cta group inline-flex items-center gap-2 px-8 py-3.5 bg-brand text-white font-semibold text-sm rounded-full hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/25 hover:shadow-xl hover:scale-[1.02]"
          >
            Toutes les actualités
            <span aria-hidden className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>
      <SectionDivider fill="cream" position="bottom" />
    </section>
  );
}
