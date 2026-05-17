import Image from 'next/image';

/** Tache d'encre — fond blanc masqué via multiply, opacité faible */
export default function EchosInkBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <div className="absolute inset-0 mix-blend-multiply opacity-[0.035]">
        <Image
          src="/images/echos-bg.jpg"
          alt=""
          fill
          className="object-contain object-left-bottom scale-105"
          sizes="(max-width: 1280px) 80vw, 1200px"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/85 to-white" />
    </div>
  );
}
