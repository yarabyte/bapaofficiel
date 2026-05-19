/** Fond décoratif partagé des pages premium (dégradés sur bg-surface). */
export default function PagePremiumBackdrop({ variant = 'warm' }: { variant?: 'warm' | 'green' | 'gold' }) {
  const gradients: Record<string, string> = {
    warm:
      'bg-[radial-gradient(ellipse_110%_52%_at_50%_-8%,rgba(212,148,62,0.11),transparent_56%),radial-gradient(ellipse_75%_42%_at_110%_28%,rgba(89,52,20,0.06),transparent_48%),radial-gradient(ellipse_65%_48%_at_-5%_55%,rgba(61,34,16,0.045),transparent_52%),linear-gradient(180deg,#f2f0e9_0%,#f2f0e9_min(38vh,22rem),#ede3d2_72%,#e4d4bf_100%)]',
    green:
      'bg-[radial-gradient(ellipse_90%_48%_at_50%_-5%,rgba(42,95,58,0.09),transparent_55%),linear-gradient(180deg,#f2f0e9_0%,#f7f2ea_40%,#ede3d2_100%)]',
    gold:
      'bg-[radial-gradient(ellipse_90%_50%_at_50%_0%,rgba(212,148,62,0.08),transparent_55%),linear-gradient(180deg,#f2f0e9_0%,#f2f0e9_28%,#ede3d2_100%)]',
  };

  return (
    <div className={`pointer-events-none absolute inset-0 ${gradients[variant]}`} aria-hidden />
  );
}
