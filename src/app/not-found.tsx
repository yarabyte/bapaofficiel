import Link from 'next/link';
import PageShell, { PageFooterNav } from '@/components/layout/PageShell';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function NotFound() {
  return (
    <PageShell>
      <section className="page-top page-top-md flex flex-col items-center justify-center px-4 pb-20 text-center">
        <Card className="max-w-md p-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gold-dark">Erreur 404</p>
          <h1 className="font-heading mb-3 text-4xl font-bold text-brand">Page introuvable</h1>
          <p className="mb-8 text-sm leading-relaxed text-stone-600">
            La page demandée n&apos;existe pas ou n&apos;est pas encore publiée. Retournez à l&apos;accueil ou
            contactez-nous.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/" variant="primary">
              Accueil
            </Button>
            <Button href="/communaute" variant="secondary">
              La Communauté
            </Button>
          </div>
        </Card>
        <p className="mt-8 text-sm text-stone-500">
          <Link href="/communaute/echos" className="font-medium text-gold-dark hover:text-brand hover:underline">
            Voir les actualités
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
