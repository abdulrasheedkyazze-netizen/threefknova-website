const proofItems = [
  {
    title: "Professional delivery",
    description:
      "Projects are handled with clear planning, structured delivery, and dependable follow-through from discovery to launch.",
  },
  {
    title: "Connected solutions",
    description:
      "Websites, software, cloud services, and AI solutions can work together under one trusted technology partner.",
  },
  {
    title: "Support beyond launch",
    description:
      "Clients can continue with onboarding, training, support, and guided improvements after implementation.",
  },
  {
    title: "Business-focused thinking",
    description:
      "Every solution is shaped around daily operations, reporting, visibility, and practical business value.",
  },
];

export default function TrustSignals() {
  return (
    <section className="brand-container pb-20">
      <div className="mb-8 max-w-3xl">
        <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Why Choose Us
        </div>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Why organizations choose ThreeFk Nova
        </h2>
        <p className="mt-4 text-slate-300">
          We combine strong product thinking, dependable delivery, and practical
          support to help clients choose and run the right technology solution
          with confidence.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {proofItems.map((item) => (
          <div key={item.title} className="brand-card p-6">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
