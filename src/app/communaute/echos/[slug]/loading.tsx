import Skeleton from '@/components/ui/Skeleton';
import { EchoCardSkeletonEditorial } from '@/components/EchoCardSkeleton';

export default function EchoArticleLoading() {
  return (
    <div className="relative min-h-screen bg-surface">
      <div className="page-top page-top-md">
        <Skeleton className="h-[min(42vh,22rem)] w-full rounded-none" />
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <Skeleton className="mb-4 h-5 w-28 rounded-full" />
        <Skeleton className="mb-6 h-12 w-full max-w-xl" />
        <Skeleton className="mb-3 h-4 w-full" />
        <Skeleton className="mb-3 h-4 w-full" />
        <Skeleton className="mb-10 h-4 w-2/3" />
        <Skeleton className="mb-4 h-4 w-full" />
        <Skeleton className="mb-4 h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="mx-auto max-w-6xl border-t border-stone-200/70 px-4 py-14">
        <Skeleton className="mb-8 h-8 w-48" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <EchoCardSkeletonEditorial />
          <EchoCardSkeletonEditorial />
          <EchoCardSkeletonEditorial />
        </div>
      </div>
    </div>
  );
}
