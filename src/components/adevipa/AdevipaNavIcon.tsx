import type { AdevipaNavIcon } from '@/lib/adevipa';

export default function AdevipaNavIcon({
  id,
  className = 'size-4',
}: {
  id: AdevipaNavIcon;
  className?: string;
}) {
  const cn = className;
  switch (id) {
    case 'about':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M12 11v5M12 8h.01" />
        </svg>
      );
    case 'history':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M5 5h14v14H5V5Z" />
          <path strokeLinecap="round" d="M9 3v4M15 3v4M8 11h8" />
        </svg>
      );
    case 'people':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="10" r="2.5" />
          <path strokeLinecap="round" d="M4 20c0-2.8 2.2-5 5-5s5 2.2 5 5M14 20c0-2 1.5-3.5 3.5-3.5" />
        </svg>
      );
    case 'interview':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M8 10h8M8 14h5" />
          <path strokeLinecap="round" d="M6 6h12v12H6V6Z" />
        </svg>
      );
    case 'projects':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M6 16l3-9 4 6 3-4 2 7" />
        </svg>
      );
    case 'partners':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M7 11h10M7 15h6" />
          <path strokeLinecap="round" d="M5 5h14v14H5V5Z" />
        </svg>
      );
  }
}
