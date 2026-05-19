import { useId } from 'react';

/** Vague courbe entre sections — `fill` = couleur de la section en dessous du séparateur */
export type SectionFill = 'cream' | 'white' | 'brand-dark';

const fillClass: Record<SectionFill, string> = {
  cream: 'fill-cream',
  white: 'fill-white',
  'brand-dark': 'fill-brand-dark',
};

/** Courbe organique partagée (haut de la forme = ligne ondulée) */
const WAVE_PATH =
  'M0,40 C180,12 360,56 540,28 C720,8 900,48 1080,32 C1260,16 1350,44 1440,36 L1440,64 L0,64 Z';

interface SectionDividerProps {
  fill?: SectionFill;
  position?: 'top' | 'bottom';
  /** Dégradé crème → brand → brand-dark (transition Communauté → Médiathèque, etc.) */
  blend?: boolean;
  className?: string;
}

export default function SectionDivider({
  fill = 'cream',
  position = 'bottom',
  blend = false,
  className = '',
}: SectionDividerProps) {
  const rawId = useId();
  const gradId = `wave-blend-${rawId.replace(/:/g, '')}`;

  return (
    <div
      className={`block w-full leading-[0] pointer-events-none shrink-0 overflow-hidden ${
        position === 'top' ? '-mt-px relative z-10' : '-mb-px relative z-10'
      } ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 64"
        className={`w-full block ${!blend ? fillClass[fill] : ''} ${position === 'top' ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
        shapeRendering="geometricPrecision"
        style={{ height: '52px', display: 'block' }}
      >
        {blend ? (
          <>
            <defs>
              <linearGradient
                id={gradId}
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="0"
                y2="64"
              >
                <stop offset="0%" stopColor="var(--color-cream-dark)" />
                <stop offset="38%" stopColor="var(--color-brand)" />
                <stop offset="100%" stopColor="var(--color-brand-dark)" />
              </linearGradient>
            </defs>
            <path fill={`url(#${gradId})`} d={WAVE_PATH} />
          </>
        ) : (
          <path d={WAVE_PATH} />
        )}
      </svg>
    </div>
  );
}
