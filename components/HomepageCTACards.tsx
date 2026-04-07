import Link from "next/link";

const cards = [
  {
    title: "View Pricing",
    description: "Explore setup costs, annual licensing, and package structure for institutions.",
    href: "/pricing",
    button: "Open Pricing",
  },
  {
    title: "System Requirements",
    description: "Review client appliance requirements, Hyper-V support, and deployment readiness.",
    href: "/system-requirements",
    button: "See Requirements",
  },
  {
    title: "Contact Sales",
    description: "Speak with our team about product selection, pricing, onboarding, and implementation.",
    href: "/contact",
    button: "Contact Sales",
  },
  {
    title: "Request Custom Demo",
    description: "Book a guided demonstration aligned to your institution’s needs and deployment model.",
    href: "/contact",
    button: "Request Demo",
  },
];

export default function HomepageCTACards() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.title} className="brand-card p-6">
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
            <div className="mt-6">
              <Link href={card.href} className="btn-secondary">
                {card.button}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}