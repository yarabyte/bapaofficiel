import Link from 'next/link';
import RestaurantManagerVoice from '@/components/restaurant/RestaurantManagerVoice';
import Button from '@/components/ui/Button';
import { SAVEURS_DU_PALAIS_CARTE_PATH } from '@/lib/saveurs-du-palais';

const heroSecondaryClass =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-gold-light/50 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

export default function RestaurantHeroActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <RestaurantManagerVoice />

      <Button href="#precommande" size="lg" variant="primary">
        Précommander un repas
      </Button>

      <Link
        href={`${SAVEURS_DU_PALAIS_CARTE_PATH}?print=1`}
        target="_blank"
        rel="noopener noreferrer"
        className={heroSecondaryClass}
      >
        <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v9m0 0 4-4m-4 4-4-4" />
          <path strokeLinecap="round" d="M5 18h14" />
        </svg>
        Téléchargez le menu
      </Link>
    </div>
  );
}
