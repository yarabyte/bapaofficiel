import type { ReactNode } from 'react';
import Breadcrumb, { type Crumb } from '@/components/ui/Breadcrumb';

export default function PageHeroSimple({
  label,
  title,
  description,
  breadcrumbs,
  children,
}: {
  label?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-stone-200/65 bg-white/90 backdrop-blur-sm">
      <div className="page-top page-top-md mx-auto max-w-3xl px-4 pb-12 text-center md:px-6 md:pb-16 md:text-left">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb items={breadcrumbs} className="mb-8 flex justify-center md:justify-start" />
        )}
        {label && <span className="section-label mx-auto mb-5 inline-flex md:mx-0">{label}</span>}
        <h1 className="font-heading mb-5 text-4xl font-bold tracking-tight text-brand md:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-stone-600 md:mx-0 md:text-[1.0625rem]">
            {description}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
