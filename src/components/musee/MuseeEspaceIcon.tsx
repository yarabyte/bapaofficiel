import type { MuseeEspaceIconId } from '@/lib/musee-case-patrimoniale';

export default function MuseeEspaceIcon({
  id,
  className = 'size-6',
}: {
  id: MuseeEspaceIconId;
  className?: string;
}) {
  switch (id) {
    case 'accueil':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z" />
          <path strokeLinecap="round" d="M9 14h6" />
        </svg>
      );
    case 'exposition':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="3" y="4" width="18" height="14" rx="1.5" />
          <path strokeLinecap="round" d="M8 21h8M12 18v3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m8 12 3-3 3 3 3-3 3 3" />
        </svg>
      );
    case 'temporaire':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="4" y="5" width="16" height="15" rx="1.5" />
          <path strokeLinecap="round" d="M8 3v4M16 3v4M4 10h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v3M10.5 15.5H13.5" />
        </svg>
      );
    case 'bibliotheque':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5.5h5v14H5a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 5 5.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5.5h5v14H9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5.5h5v14h-5a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 13 5.5Z" />
        </svg>
      );
    case 'reserve':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7 7 4h10l3 3" />
          <path strokeLinecap="round" d="M9 12h6M9 15h4" />
        </svg>
      );
    case 'reunion':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <ellipse cx="12" cy="8" rx="7" ry="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8v3c0 1.66 3.13 3 7 3s7-1.34 7-3V8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 14v3c0 1.66 3.13 3 7 3s7-1.34 7-3v-3" />
        </svg>
      );
    case 'patio':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h8M6 20v-2h12v2" />
        </svg>
      );
  }
}
