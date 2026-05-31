import type { VisitezSectionIconId } from '@/lib/visitez-bapa';

export default function VisitezBapaIcon({
  id,
  className = 'size-5',
}: {
  id: VisitezSectionIconId;
  className?: string;
}) {
  const cn = className;
  switch (id) {
    case 'carte':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M4 6h16v12H4V6Z" />
          <path strokeLinecap="round" d="M8 3v3M16 3v3M7 11h3M14 11h3" />
          <circle cx="9" cy="14" r="1" fill="currentColor" />
          <circle cx="15" cy="14" r="1" fill="currentColor" />
        </svg>
      );
    case 'localisation':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-7-11a7 7 0 1 1 14 0c0 6.5-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 'quartiers':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M4 10h6v10H4V10ZM14 4h6v16h-6V4ZM9 14h6v6H9v-6Z" />
        </svg>
      );
    case 'sites':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 4 9v12h16V9l-8-6Z" />
          <path strokeLinecap="round" d="M9 21v-6h6v6" />
        </svg>
      );
    case 'credits':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M7 11h10M7 15h6M5 5h14v14H5V5Z" />
          <path strokeLinecap="round" d="M9 5V3h6v2" />
        </svg>
      );
    case 'culture':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 4 9l8 12H4L12 3Z" />
          <path strokeLinecap="round" d="M8 14h8" />
        </svg>
      );
    case 'nature':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12Z" />
          <path strokeLinecap="round" d="M12 10v4" />
        </svg>
      );
    case 'hotel':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M4 10h16v11H4V10Z" />
          <path strokeLinecap="round" d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
          <path strokeLinecap="round" d="M9 6V3h6v3" />
        </svg>
      );
    case 'route':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19 10 5l3-2 7 10 3-2 7 8" />
        </svg>
      );
    case 'marche':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M6 8h12l-1 13H7L6 8Z" />
          <path strokeLinecap="round" d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );
    case 'sante':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M12 8v8M8 12h8" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      );
    case 'ecole':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M12 3 3 8l9 5-9 5-9-5 9-5Z" />
          <path strokeLinecap="round" d="M6 14v4M18 14v4" />
        </svg>
      );
    case 'eglise':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M12 4v16M8 8h8M6 21h12" />
          <path strokeLinecap="round" d="M10 4h4v4h-4V4Z" />
        </svg>
      );
  }
}

function SectionHeading({
  icon,
  title,
  subtitle,
}: {
  icon: VisitezSectionIconId;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-4 border-l-[3px] border-gold-dark/50 pl-4 md:mb-8 md:pl-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-forest/8 text-brand ring-1 ring-brand/10 md:size-12">
        <VisitezBapaIcon id={icon} className="size-5 md:size-6" />
      </span>
      <div className="min-w-0 pt-0.5">
        <h2 className="font-heading text-xl font-bold leading-tight text-brand md:text-2xl">{title}</h2>
        {subtitle && <p className="mt-1.5 text-sm leading-relaxed text-stone-500">{subtitle}</p>}
      </div>
    </div>
  );
}

export { SectionHeading };
