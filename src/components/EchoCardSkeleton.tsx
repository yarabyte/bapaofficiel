import Skeleton from '@/components/ui/Skeleton';

export function EchoCardSkeletonFeatured() {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[1.75rem] border border-stone-200/40 bg-white/80 shadow-sm md:flex-row"
      aria-hidden
    >
      <Skeleton className="h-56 w-full shrink-0 rounded-none md:h-auto md:min-h-[340px] md:w-[46%]" />
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8 md:p-10">
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <Skeleton className="h-8 w-full max-w-md" />
        <Skeleton className="h-8 w-4/5 max-w-sm" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-2 h-10 w-36 rounded-full" />
      </div>
    </div>
  );
}

export function EchoCardSkeletonEditorial() {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200/40 bg-white/80 shadow-sm"
      aria-hidden
    >
      <Skeleton className="h-48 w-full rounded-none sm:h-52" />
      <div className="flex flex-1 flex-col gap-3 p-6 pt-5">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="mt-4 h-9 w-28 rounded-full" />
      </div>
    </div>
  );
}

export default function EchosListSkeleton() {
  return (
    <div className="space-y-14" aria-busy="true" aria-label="Chargement des articles">
      <EchoCardSkeletonFeatured />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <EchoCardSkeletonEditorial />
        <EchoCardSkeletonEditorial />
        <EchoCardSkeletonEditorial />
      </div>
    </div>
  );
}
