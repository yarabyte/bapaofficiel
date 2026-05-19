import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const variantClass: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-md shadow-brand/20 hover:bg-brand-dark ring-1 ring-brand-dark/20',
  secondary:
    'border-2 border-brand/20 bg-white text-brand hover:border-gold-dark/45 hover:bg-cream',
  ghost: 'text-gold-dark hover:bg-cream/80 hover:text-brand',
};

const sizeClass: Record<Size, string> = {
  sm: 'min-h-10 px-4 py-2 text-sm',
  md: 'min-h-11 px-6 py-2.5 text-sm',
  lg: 'min-h-12 px-8 py-3 text-base',
};

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  loading?: boolean;
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, 'href' | 'className'>)
  | ({ href?: undefined } & ComponentProps<'button'>)
);

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  loading = false,
  href,
  ...rest
}: ButtonProps) {
  const classes = `${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`;

  if (href) {
    const { href: _omit, ...linkRest } = rest as ComponentProps<typeof Link>;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {loading ? <span className="opacity-80">…</span> : children}
      </Link>
    );
  }

  const { disabled, ...buttonRest } = rest as ComponentProps<'button'>;
  return (
    <button type="button" className={classes} disabled={disabled || loading} {...buttonRest}>
      {loading ? <span className="opacity-80">…</span> : children}
    </button>
  );
}
