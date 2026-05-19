import type { ReactNode } from 'react';
import Image from 'next/image';
import Breadcrumb, { type Crumb } from '@/components/ui/Breadcrumb';

function HeroDivider() {
  return (
    <div
      className="mx-auto mb-7 flex items-center justify-center gap-4 md:mx-0 md:justify-start"
      aria-hidden
    >
      <span className="h-px w-[4.25rem] shrink-0 bg-gradient-to-r from-transparent via-brand to-brand/85 sm:w-24 md:w-28" />
      <span className="flex items-center gap-2">
        <span className="h-px w-4 bg-brand-dark/55 sm:w-5" />
        <span className="size-2 shrink-0 rotate-45 rounded-[2px] bg-brand shadow-[0_0_0_1px_rgba(212,148,62,0.45)] ring-2 ring-surface/35" />
        <span className="h-px w-4 bg-brand-dark/55 sm:w-5" />
      </span>
      <span className="h-px w-[4.25rem] shrink-0 bg-gradient-to-l from-transparent via-brand to-brand/85 sm:w-24 md:w-28" />
    </div>
  );
}

export default function PageHeroPremium({
  imageSrc,
  imageAlt = '',
  imageClassName = 'scale-[1.02] object-cover object-[center_32%] select-none saturate-[1.06]',
  label,
  title,
  description,
  descriptionClassName = 'font-heading mx-auto max-w-xl text-[1.0625rem] leading-relaxed text-brand md:mx-0 [text-shadow:0_1px_20px_rgba(242,240,233,0.55)]',
  breadcrumbs,
  showDivider = true,
  align = 'center',
  children,
}: {
  imageSrc: string;
  imageAlt?: string;
  imageClassName?: string;
  label: string;
  title: string;
  description?: string;
  descriptionClassName?: string;
  breadcrumbs?: Crumb[];
  showDivider?: boolean;
  align?: 'center' | 'left';
  children?: ReactNode;
}) {
  const textAlign = align === 'center' ? 'text-center md:text-left' : 'text-center';

  return (
    <header className="relative isolate z-[1] overflow-hidden px-4 pb-14 page-top page-top-md sm:px-6 md:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} fill priority className={imageClassName} sizes="100vw" aria-hidden />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(108deg,rgba(61,34,16,0.42)_0%,transparent_46%,rgba(89,52,20,0.32)_94%)] mix-blend-soft-light"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_92%_58%_at_50%_8%,rgba(0,0,0,0.38),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(168deg,rgba(14,9,6,0.52)_0%,rgba(45,28,14,0.28)_42%,rgba(8,5,3,0.82)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_102%_96%_at_50%_52%,transparent_40%,rgba(0,0,0,0.38)_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.055]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[min(56%,24rem)] bg-[linear-gradient(to_bottom,transparent_0%,rgba(242,240,233,0.5)_42%,#f2f0e9_88%,#f2f0e9_100%)]"
        aria-hidden
      />

      <div className={`relative z-10 mx-auto max-w-4xl ${textAlign}`}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb
            items={breadcrumbs}
            variant="dark"
            className="mb-8 flex justify-center md:justify-start"
          />
        )}
        <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-light/40 bg-brand-dark/45 px-5 py-2.5 text-[10px] font-bold tracking-[0.22em] text-gold-light uppercase shadow-[0_10px_36px_-14px_rgba(0,0,0,0.55)] backdrop-blur-md md:mx-0 mx-auto">
          <span className="size-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_10px_rgba(212,148,62,0.7)]" aria-hidden />
          {label}
        </p>
        <h1 className="font-heading mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.45)] md:text-5xl lg:text-[3.15rem]">
          {title}
        </h1>
        {showDivider && <HeroDivider />}
        {description && <p className={descriptionClassName}>{description}</p>}
        {children}
      </div>
    </header>
  );
}
