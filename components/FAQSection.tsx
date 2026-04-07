type FaqItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

export default function FAQSection({
  eyebrow,
  title,
  description,
  items,
}: FAQSectionProps) {
  return (
    <section className="mt-12">
      <div className="mb-8 max-w-3xl">
        {eyebrow ? (
          <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        {description ? (
          <p className="mt-4 text-slate-300">{description}</p>
        ) : null}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <div key={item.question} className="brand-card p-8">
            <h3 className="text-xl font-semibold text-white">{item.question}</h3>
            <p className="mt-4 text-slate-300">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
