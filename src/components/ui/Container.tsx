import type { ReactNode } from 'react';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

const sizeClass: Record<ContainerSize, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-3xl',
  lg: 'max-w-5xl',
  xl: 'max-w-7xl',
  full: 'max-w-[90rem]',
};

export default function Container({
  children,
  size = 'lg',
  className = '',
}: {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClass[size]} ${className}`}>
      {children}
    </div>
  );
}
