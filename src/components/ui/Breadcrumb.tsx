import Link from 'next/link';
import ChevronRight from '@/components/ui/ChevronRight';

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({
  items,
  className = '',
  variant = 'light',
}: {
  items: Crumb[];
  className?: string;
  variant?: 'light' | 'dark';
}) {
  const text = variant === 'dark' ? 'text-white/85' : 'text-stone-600';
  const active = variant === 'dark' ? 'text-white font-semibold' : 'text-brand font-semibold';
  const chevron = variant === 'dark' ? 'text-gold-light/55' : 'text-stone-400';
  const linkHover = variant === 'dark' ? 'hover:text-gold-light hover:underline' : 'hover:text-brand hover:underline';

  return (
    <nav aria-label="Fil d'Ariane" className={className}>
      <ol className={`flex flex-wrap items-center gap-1 text-[13px] ${text}`}>
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className={chevron} />}
            {item.href ? (
              <Link href={item.href} className={`rounded-md px-1.5 py-1 transition-colors ${linkHover}`}>
                {item.label}
              </Link>
            ) : (
              <span className={`px-1.5 py-1 ${active}`}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
