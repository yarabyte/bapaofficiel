import { legalLastUpdatedIso, type LegalSection } from '@/lib/legal';

export default function LegalDocument({
  sections,
  lastUpdated,
}: {
  sections: LegalSection[];
  lastUpdated: string;
}) {
  return (
    <article className="prose-bapa mx-auto max-w-none">
      <p className="mb-10 text-sm text-stone-500">
        Dernière mise à jour : <time dateTime={legalLastUpdatedIso}>{lastUpdated}</time>
      </p>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h2 className="font-heading mb-4 text-xl font-bold text-brand md:text-2xl">{section.title}</h2>
            <div className="space-y-3 text-[1rem] leading-relaxed text-stone-600">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
              {section.list && (
                <ul className="list-disc space-y-2 pl-5 marker:text-gold-dark">
                  {section.list.map((item) => (
                    <li key={item.slice(0, 48)}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
