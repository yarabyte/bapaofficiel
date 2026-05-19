import Image from 'next/image';
import { ECHOS_BACKDROP_IMAGE, ECHOS_HEADER_ROCKS_IMAGE } from '@/lib/echos';

/**
 * Décor du bandeau Echos : photo des rochers + léger voile éditorial + dégradés ciel → crème.
 * Les calques sont non interactifs ; le contenu doit être dans un frère en `relative z-10`.
 */
export default function EchosHeaderBackdrop({ priority = false }: { priority?: boolean }) {
  return (
    <>
      <Image
        src={ECHOS_HEADER_ROCKS_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-[center_40%]"
        aria-hidden
        priority={priority}
      />
      <div className="pattern-geo pointer-events-none absolute inset-0 opacity-[0.055]" aria-hidden />
      <Image
        src={ECHOS_BACKDROP_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-[0.06] mix-blend-overlay"
        aria-hidden
        priority={priority}
      />
      {/* Ciel léger */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-200/78 via-sky-100/62 to-[#ebe6dc]/92"
        aria-hidden
      />
      {/* Lisibilité texte en haut */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/65 via-white/18 to-transparent"
        aria-hidden
      />
      {/* Chaleur pierre / brand tout en bas */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream/90 via-transparent to-transparent"
        aria-hidden
      />
    </>
  );
}
