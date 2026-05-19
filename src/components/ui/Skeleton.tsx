export default function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`skeleton-shimmer rounded-lg bg-stone-200/80 ${className}`}
      aria-hidden
    />
  );
}
