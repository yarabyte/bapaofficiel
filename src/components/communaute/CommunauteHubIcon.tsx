import type { CommunauteHubIconId } from '@/lib/communaute-hub';

export default function CommunauteHubIcon({
  id,
  className = 'size-6',
}: {
  id: CommunauteHubIconId;
  className?: string;
}) {
  switch (id) {
    case 'roles':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="8" r="2.5" />
          <path strokeLinecap="round" d="M4 20c0-2.5 2.2-4 5-4M14 20c0-2-1.8-3.5-4-3.5" />
        </svg>
      );
    case 'cameroun':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-7-11a7 7 0 1 1 14 0c0 6.5-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 'diaspora':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    case 'activites':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="4" y="5" width="16" height="14" rx="1.5" />
          <path strokeLinecap="round" d="M8 3v4M16 3v4M4 10h16" />
        </svg>
      );
    case 'echos':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8.5h12M6 12h8M6 15.5h10" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      );
    case 'partenaires':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11h10M7 15h6M5 5h14v14H5V5Z" />
          <path strokeLinecap="round" d="M9 5V3h6v2" />
        </svg>
      );
    case 'contacts':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4V6Z" />
          <path strokeLinecap="round" d="m4 7 8 6 8-6" />
        </svg>
      );
    case 'royaume':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V21H8v-7H6v7H3v-10.5Z" />
        </svg>
      );
    case 'lien':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10.5 5.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 0 0 7.07 7.07L13.5 18.5" />
        </svg>
      );
  }
}
