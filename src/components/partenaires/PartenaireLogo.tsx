'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  PARTENAIRE_LOGO_PLACEHOLDER,
  partenaireLogoSrc,
  type Partenaire,
} from '@/lib/partenaires';

type LogoState = 'primary' | 'webp' | 'placeholder' | 'initial';

export default function PartenaireLogo({ partner }: { partner: Partenaire }) {
  const primary = partenaireLogoSrc(partner);
  const webpFallback = /\.png$/i.test(primary) ? primary.replace(/\.png$/i, '.webp') : null;
  const [state, setState] = useState<LogoState>('primary');

  const src =
    state === 'primary'
      ? primary
      : state === 'webp' && webpFallback
        ? webpFallback
        : state === 'placeholder'
          ? PARTENAIRE_LOGO_PLACEHOLDER
          : null;

  function handleError() {
    setState((current) => {
      if (current === 'primary' && webpFallback) return 'webp';
      if (current === 'primary' || current === 'webp') return 'placeholder';
      return 'initial';
    });
  }

  return (
    <div
      className="mb-4 flex h-[5.5rem] w-full items-center justify-center rounded-xl bg-gradient-to-b from-cream/80 to-white px-6 ring-1 ring-stone-200/80"
      title={partner.logoAlt ?? `Logo ${partner.name}`}
    >
      {state === 'initial' ? (
        <span
          className="font-heading flex size-14 items-center justify-center rounded-lg bg-brand/10 text-2xl font-bold text-brand"
          aria-hidden
        >
          {partner.name.charAt(0)}
        </span>
      ) : (
        src && (
          <Image
            src={src}
            alt={partner.logoAlt ?? `Logo ${partner.name}`}
            width={200}
            height={80}
            className="max-h-[3.25rem] w-auto max-w-full object-contain object-center"
            onError={handleError}
            sizes="200px"
          />
        )
      )}
    </div>
  );
}
