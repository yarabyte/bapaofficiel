import Link from 'next/link';
import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  href?: string;
};

const shell =
  'rounded-xl border border-stone-200/80 bg-white/95 shadow-sm ring-1 ring-stone-100 transition-all duration-200 ease-out';

const hoverClass = 'hover:-translate-y-0.5 hover:border-gold-dark/25 hover:shadow-md';

export default function Card({ children, className = '', hover = false, href }: CardProps) {
  const classes = `${shell} ${hover ? hoverClass : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${classes} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2`}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
