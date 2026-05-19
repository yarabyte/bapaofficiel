import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ComingSoon({
  title = 'Page en préparation',
  message = 'Cette rubrique sera publiée prochainement par le secrétariat du village royal.',
}: {
  title?: string;
  message?: string;
}) {
  return (
    <Card className="mx-auto max-w-lg p-8 text-center">
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gold-dark">Bientôt disponible</p>
      <h2 className="font-heading mb-3 text-xl font-bold text-brand">{title}</h2>
      <p className="mb-6 text-sm leading-relaxed text-stone-600">{message}</p>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button href="/" variant="primary" size="md">
          Accueil
        </Button>
        <Button href="/communaute/contacts" variant="secondary" size="md">
          Nous contacter
        </Button>
      </div>
    </Card>
  );
}
