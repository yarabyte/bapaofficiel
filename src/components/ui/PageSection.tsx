import type { ReactNode } from 'react';
import Container from '@/components/ui/Container';

export default function PageSection({
  children,
  className = '',
  containerSize = 'lg',
  id,
  spacing = 'default',
}: {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  id?: string;
  spacing?: 'default' | 'tight' | 'none';
}) {
  const py =
    spacing === 'tight' ? 'py-10 md:py-12' : spacing === 'none' ? '' : 'py-14 md:py-18';

  return (
    <section id={id} className={`${py} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
