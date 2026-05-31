'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { bapaContactEmail } from '@/lib/contacts';

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function ContactMessageForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError(null);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError('Veuillez indiquer votre nom et votre message.');
      return;
    }
    if (!form.email.trim() && !form.phone.trim()) {
      setError('Indiquez au moins un e-mail ou un numéro de téléphone pour vous recontacter.');
      return;
    }
    setSubmitted(true);
    setError(null);
  }

  const inputClass =
    'w-full rounded-xl border border-stone-200/90 bg-cream/30 px-4 py-3 text-sm text-stone-800 shadow-sm transition-[border-color,box-shadow] placeholder:text-stone-400 focus:border-gold-dark/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-dark/20';

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-forest/25 bg-gradient-to-br from-forest/[0.06] via-white to-cream/50 p-8 text-center"
      >
        <p className="font-heading mb-2 text-2xl font-bold text-forest">Message envoyé</p>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-stone-600">
          Merci, <span className="font-semibold text-brand">{form.name}</span>. Le secrétariat a bien reçu votre
          demande et vous répondra dans les meilleurs délais. Pour une urgence, appelez directement le secrétariat.
        </p>
        <p className="mt-4 text-sm text-stone-500">
          Vous pouvez aussi écrire à{' '}
          <a href={bapaContactEmail.href} className="font-semibold text-gold-dark hover:text-brand hover:underline">
            {bapaContactEmail.display}
          </a>
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialState);
          }}
          className="mt-6 text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {error && (
        <p role="alert" className="rounded-xl border border-error/30 bg-error/5 px-4 py-3 text-sm text-error">
          {error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-brand">
            Nom <span className="text-error">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-semibold text-brand">
            Objet
          </label>
          <input
            id="contact-subject"
            type="text"
            value={form.subject}
            onChange={(e) => updateField('subject', e.target.value)}
            className={inputClass}
            placeholder="Visite, partenariat, diaspora…"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-brand">
            E-mail
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            className={inputClass}
            placeholder={bapaContactEmail.display}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-semibold text-brand">
            Téléphone
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className={inputClass}
            placeholder="+237 …"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-brand">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => updateField('message', e.target.value)}
          className={`${inputClass} min-h-[8rem] resize-y`}
        />
      </div>

      <p className="text-xs leading-relaxed text-stone-500">
        Les champs marqués d&apos;un astérisque sont obligatoires. En envoyant ce formulaire, vous acceptez le
        traitement de vos données selon notre{' '}
        <Link href="/politique-de-confidentialite" className="font-semibold text-gold-dark hover:text-brand hover:underline">
          politique de confidentialité
        </Link>
        .
      </p>

      <Button type="submit" size="lg" className="w-full sm:w-auto sm:min-w-[14rem]">
        Envoyer le message
      </Button>
    </form>
  );
}
