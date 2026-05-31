import type { RoyaumePillarIcon } from '@/lib/royaume-section';

export default function PillarIcon({
  id,
  className = 'size-5',
}: {
  id: RoyaumePillarIcon;
  className?: string;
}) {
  const cn = className;
  switch (id) {
    case 'histoire':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M5 5h14v14H5V5Z" />
          <path strokeLinecap="round" d="M9 3v4M15 3v4M8 11h8" />
        </svg>
      );
    case 'traditions':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 4 9l8 12H4L12 3Z" />
        </svg>
      );
    case 'roi':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M12 4v3M8 8h8M6 21h12M10 11h4v10" />
          <path strokeLinecap="round" d="M9 4h6v4H9V4Z" />
        </svg>
      );
    case 'chefferie':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M12 3 4 9v12h16V9l-8-6Z" />
          <path strokeLinecap="round" d="M9 21v-6h6v6" />
        </svg>
      );
    case 'administration':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M4 10h6v10H4V10ZM14 4h6v16h-6V4ZM9 14h6v6H9v-6Z" />
        </svg>
      );
    case 'langues':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
  }
}
