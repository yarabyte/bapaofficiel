import type { ReactNode } from 'react';
import Button from '@/components/ui/Button';

export default function PageShell({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`min-h-screen bg-surface ${className}`}>{children}</div>;
}

export function PageFooterNav({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <nav className="flex flex-col items-center gap-4 border-t border-stone-200/70 pt-12 text-center sm:flex-row sm:justify-center sm:gap-10">
      {links.map((l) => (
        <Button key={l.href} href={l.href} variant="ghost" size="sm" className="min-h-11">
          {l.label}
        </Button>
      ))}
    </nav>
  );
}
