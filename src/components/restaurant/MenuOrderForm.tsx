'use client';

import { useState } from 'react';
import { restaurantMenuFormOptions } from '@/lib/restaurant-menu';

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  menuId: string;
  guests: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

const initialState: FormState = {
  fullName: '',
  phone: '',
  email: '',
  menuId: '',
  guests: '1',
  preferredDate: '',
  preferredTime: '',
  notes: '',
};

export default function MenuOrderForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError(null);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim() || !form.menuId) {
      setError('Veuillez renseigner votre nom, votre téléphone et le menu choisi.');
      return;
    }
    setSubmitted(true);
    setError(null);
  }

  if (submitted) {
    const selected = restaurantMenuFormOptions.find((o) => o.value === form.menuId);
    return (
      <div
        role="status"
        className="rounded-2xl border border-forest/25 bg-gradient-to-br from-white to-cream-dark/50 p-8 text-center shadow-sm"
      >
        <p className="font-heading mb-2 text-xl font-bold text-forest">Demande enregistrée</p>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-stone-600">
          Merci, <span className="font-semibold text-brand">{form.fullName}</span>. Votre commande pour{' '}
          <span className="font-semibold text-brand">{selected?.label ?? 'le menu sélectionné'}</span> a été
          transmise à l&apos;équipe du restaurant. Un gestionnaire vous contactera au{' '}
          <span className="font-semibold text-brand">{form.phone}</span> pour confirmer la disponibilité et le
          règlement.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialState);
          }}
          className="mt-6 text-sm font-semibold text-gold-dark hover:text-brand hover:underline"
        >
          Passer une autre commande
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-stone-200/90 bg-white px-4 py-3 text-sm text-stone-800 shadow-sm transition-[border-color,box-shadow] placeholder:text-stone-400 focus:border-gold-dark/50 focus:outline-none focus:ring-2 focus:ring-gold-dark/20';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {error && (
        <p role="alert" className="rounded-xl border border-error/30 bg-error/5 px-4 py-3 text-sm text-error">
          {error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="order-name" className="mb-1.5 block text-sm font-semibold text-brand">
            Nom complet <span className="text-error">*</span>
          </label>
          <input
            id="order-name"
            type="text"
            autoComplete="name"
            required
            value={form.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            className={inputClass}
            placeholder="Ex. Marie Nguema"
          />
        </div>
        <div>
          <label htmlFor="order-phone" className="mb-1.5 block text-sm font-semibold text-brand">
            Téléphone <span className="text-error">*</span>
          </label>
          <input
            id="order-phone"
            type="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className={inputClass}
            placeholder="+237 6XX XXX XXX"
          />
        </div>
        <div>
          <label htmlFor="order-email" className="mb-1.5 block text-sm font-semibold text-brand">
            E-mail <span className="font-normal text-stone-500">(facultatif)</span>
          </label>
          <input
            id="order-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            className={inputClass}
            placeholder="vous@exemple.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="order-menu" className="mb-1.5 block text-sm font-semibold text-brand">
          Menu ou plat à commander <span className="text-error">*</span>
        </label>
        <select
          id="order-menu"
          required
          value={form.menuId}
          onChange={(e) => updateField('menuId', e.target.value)}
          className={inputClass}
        >
          <option value="">— Choisir dans la carte —</option>
          {restaurantMenuFormOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="order-guests" className="mb-1.5 block text-sm font-semibold text-brand">
            Nombre de convives
          </label>
          <input
            id="order-guests"
            type="number"
            min={1}
            max={99}
            value={form.guests}
            onChange={(e) => updateField('guests', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="order-date" className="mb-1.5 block text-sm font-semibold text-brand">
            Date souhaitée
          </label>
          <input
            id="order-date"
            type="date"
            value={form.preferredDate}
            onChange={(e) => updateField('preferredDate', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="order-time" className="mb-1.5 block text-sm font-semibold text-brand">
            Heure souhaitée
          </label>
          <input
            id="order-time"
            type="time"
            value={form.preferredTime}
            onChange={(e) => updateField('preferredTime', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="order-notes" className="mb-1.5 block text-sm font-semibold text-brand">
          Remarques
        </label>
        <textarea
          id="order-notes"
          rows={4}
          value={form.notes}
          onChange={(e) => updateField('notes', e.target.value)}
          className={`${inputClass} resize-y min-h-[6rem]`}
          placeholder="Allergies, retrait sur place, événement, menu groupe…"
        />
      </div>

      <p className="text-xs leading-relaxed text-stone-500">
        En validant, vous acceptez d&apos;être recontacté pour confirmer la commande. Le paiement et la préparation
        seront validés par l&apos;équipe du restaurant (horaires et stocks du jour).
      </p>

      <button
        type="submit"
        className="w-full rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-md transition-[background-color,transform] hover:bg-brand-dark active:scale-[0.99] sm:w-auto sm:min-w-[14rem]"
      >
        Envoyer la commande
      </button>
    </form>
  );
}
