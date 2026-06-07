import EchosListSkeleton from '@/components/EchoCardSkeleton';
import Skeleton from '@/components/ui/Skeleton';

export default function EchosLoading() {
  return (
    <div className="relative min-h-screen bg-surface">
      <div className="page-top page-top-md border-b border-stone-200/60 bg-white/80 px-4 pb-12 md:pb-16">
        <div className="mx-auto max-w-3xl px-2 text-center">
          <Skeleton className="mx-auto mb-4 h-4 w-24" />
          <Skeleton className="mx-auto mb-5 h-10 w-64 max-w-full" />
          <Skeleton className="mx-auto h-4 w-full max-w-md" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <EchosListSkeleton />
      </div>
    </div>
  );
}
