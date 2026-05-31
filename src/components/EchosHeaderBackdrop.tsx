import Image from 'next/image';
import { ECHOS_BACKDROP_IMAGE, ECHOS_HEADER_ROCKS_IMAGE } from '@/lib/echos';

/**
 * Décor du bandeau Echos : paysage + voile brand/forest, fondu vers crème.
 */
export default function EchosHeaderBackdrop({ priority = false }: { priority?: boolean }) {
  return (
    <>
      <Image
        src={ECHOS_HEADER_ROCKS_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-[center_40%] scale-105"
        aria-hidden
        priority={priority}
      />
      <div className="pattern-geo pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
      <Image
        src={ECHOS_BACKDROP_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-[0.12] mix-blend-overlay"
        aria-hidden
        priority={priority}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(61,34,16,0.55)_0%,rgba(42,95,58,0.32)_42%,rgba(14,9,6,0.88)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent"
        aria-hidden
      />
    </>
  );
}
