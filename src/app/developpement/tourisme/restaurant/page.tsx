import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MenuOrderForm from '@/components/restaurant/MenuOrderForm';
import PageShell from '@/components/layout/PageShell';
import {
  formatPriceFcfa,
  restaurantMenuCategories,
} from '@/lib/restaurant-menu';

export const metadata: Metadata = {
  title: 'Restaurant Patrimonial | Tourisme | Bapa',
  description:
    'Restaurant Patrimonial de Bapa : carte des menus, commande en ligne, interview du gestionnaire et formulaire de réservation.',
};

const navSections = [
  { id: 'menu', label: 'Présentation du menu' },
  { id: 'interview', label: 'Interview' },
  { id: 'commande', label: 'Commander en ligne' },
] as const;

const interviewQuestions = [
  {
    question: 'Quelle est la vocation du Restaurant Patrimonial au sein du Royaume de Bapa ?',
    answer:
      '[Réponse du gestionnaire — accueil des visiteurs, cuisine locale, lien avec le musée case patrimoniale…]',
  },
  {
    question: 'Comment la carte met-elle en valeur les produits et traditions bamiléké ?',
    answer:
      '[Réponse du gestionnaire — sourcing, recettes familiales, saisonnalité…]',
  },
  {
    question: 'Comment fonctionne la commande en ligne pour les visiteurs et la diaspora ?',
    answer:
      '[Réponse du gestionnaire — délais, confirmation téléphonique, menus groupe…]',
  },
] as const;

export default function RestaurantPatrimonialPage() {
  return (
    <PageShell>
      <header className="relative isolate overflow-hidden border-b border-stone-200/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/musee-celebration-culturelle.png"
            alt=""
            fill
            className="object-cover object-[center_35%]"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest/85 via-brand-dark/75 to-brand-dark/90"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.06]" aria-hidden />

        <div className="relative mx-auto max-w-3xl px-4 pb-16 page-top page-top-md text-center text-white md:pb-20">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light/95">
            Développement · Tourisme
          </p>
          <h1 className="font-heading mb-4 text-4xl font-bold tracking-tight drop-shadow-sm md:text-5xl">
            Restaurant Patrimonial
          </h1>
          <p className="mx-auto max-w-xl text-[1.05rem] leading-relaxed text-white/90">
            Cuisine du terroir et hospitalité bamiléké — découvrez la carte, écoutez le gestionnaire et commandez votre
            menu en ligne.
          </p>
          <nav
            aria-label="Sections de la page"
            className="mt-10 flex flex-wrap justify-center gap-2 border-t border-white/15 pt-8"
          >
            {navSections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm transition-colors hover:border-gold-light/50 hover:bg-white/15"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-18">
        {/* Présentation du menu */}
        <section id="menu" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2 className="font-heading mb-2 text-2xl font-bold text-brand md:text-3xl">
            Présentation du menu
          </h2>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gold-dark">
            Commande en ligne
          </p>
          <p className="mb-8 text-stone-600 leading-relaxed">
            Le Restaurant Patrimonial propose une carte inspirée des saveurs locales et des grandes occasions du
            Royaume de Bapa. Les tarifs ci-dessous sont indicatifs — sélectionnez votre formule dans le{' '}
            <a href="#commande" className="font-semibold text-gold-dark hover:text-brand hover:underline">
              formulaire de commande
            </a>{' '}
            pour une réservation ou un retrait sur place.
          </p>

          <div className="space-y-10">
            {restaurantMenuCategories.map((category) => (
              <div key={category.id}>
                <div className="mb-4 border-b border-stone-200/80 pb-3">
                  <h3 className="font-heading text-xl font-bold text-forest">{category.title}</h3>
                  {category.subtitle && (
                    <p className="mt-1 text-sm text-stone-500">{category.subtitle}</p>
                  )}
                </div>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li
                      key={item.id}
                      className="rounded-xl border border-stone-200/80 bg-white/95 px-5 py-4 shadow-sm ring-1 ring-stone-100"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-brand">{item.name}</p>
                          <p className="mt-1 text-sm leading-relaxed text-stone-600">{item.description}</p>
                          {item.tags && item.tags.length > 0 && (
                            <ul className="mt-2 flex flex-wrap gap-1.5">
                              {item.tags.map((tag) => (
                                <li
                                  key={tag}
                                  className="rounded-full bg-forest/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-forest"
                                >
                                  {tag}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <p className="shrink-0 font-heading text-lg font-bold text-gold-dark">
                          {formatPriceFcfa(item.priceFcfa)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-xl border border-gold-dark/20 bg-cream-dark/40 px-5 py-4 text-sm text-stone-600">
            <span className="font-semibold text-brand">Commande en ligne :</span> utilisez le formulaire ci-dessous
            pour réserver un menu complet ou un plat. L&apos;équipe confirmera disponibilité, horaire et mode de
            paiement par téléphone.
          </p>
        </section>

        {/* Interview gestionnaire */}
        <section id="interview" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2 className="font-heading mb-5 text-2xl font-bold text-brand md:text-3xl">
            Interview du gestionnaire
          </h2>
          <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white/95 shadow-sm">
            <div className="relative aspect-[21/8] min-h-[7rem] w-full border-b border-stone-200/60">
              <Image
                src="/images/hero-slide-architecture-patrimoine.png"
                alt=""
                fill
                className="object-cover object-[center_40%] opacity-90"
                sizes="(max-width:1024px) 100vw, 896px"
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/75 via-brand-dark/50 to-transparent" />
              <p className="font-heading absolute bottom-4 left-6 max-w-md text-lg font-bold text-white drop-shadow-sm md:text-xl">
                La parole du gestionnaire
              </p>
            </div>
            <div className="p-6 md:p-8">
              <p className="mb-2 text-sm font-semibold text-stone-500">Gestionnaire — nom à compléter</p>
              <p className="mb-8 text-sm text-stone-500">
                Entretien à publier — remplacer les réponses entre crochets par le texte validé par l&apos;équipe du
                restaurant.
              </p>
              <dl className="space-y-8">
                {interviewQuestions.map(({ question, answer }) => (
                  <div key={question}>
                    <dt className="mb-2 font-bold text-brand">{question}</dt>
                    <dd className="border-l-2 border-gold-dark/35 pl-4 leading-relaxed text-stone-600">
                      {answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Formulaire commande */}
        <section id="commande" className="mb-16 scroll-mt-[calc(2.5rem+6rem)]">
          <h2 className="font-heading mb-2 text-2xl font-bold text-brand md:text-3xl">
            Commander un menu en ligne
          </h2>
          <p className="mb-8 text-stone-600 leading-relaxed">
            Remplissez le formulaire pour demander un menu ou un plat. Vous serez recontacté pour valider la commande
            avant préparation.
          </p>
          <div className="rounded-2xl border border-stone-200/80 bg-white/95 p-6 shadow-sm md:p-8">
            <MenuOrderForm />
          </div>
        </section>

        <nav className="flex flex-col items-center gap-4 border-t border-stone-200/70 pt-12 text-center sm:flex-row sm:justify-center sm:gap-10">
          <Link
            href="/developpement/tourisme"
            className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
          >
            ← Introduction et Enjeux
          </Link>
          <Link
            href="/tourisme/musee"
            className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
          >
            Musée Case Patrimoniale
          </Link>
          <Link href="/developpement" className="text-sm font-semibold text-gold-dark hover:text-brand hover:underline">
            Développement
          </Link>
        </nav>
      </div>
    </PageShell>
  );
}
