import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Discovery and requirements mapping",
    description:
      "We clarify business goals, users, workflows, reporting expectations, deployment constraints, and the right product fit.",
  },
  {
    step: "02",
    title: "Solution design and implementation planning",
    description:
      "We shape the delivery plan, environment design, integrations, onboarding sequence, and success criteria for launch.",
  },
  {
    step: "03",
    title: "Deployment, configuration, and training",
    description:
      "We provision the solution, configure operational settings, validate readiness, and support administrators and users.",
  },
  {
    step: "04",
    title: "Support, optimization, and long-term growth",
    description:
      "We help teams improve stability, adoption, reporting, governance, and future AI or cloud expansion over time.",
  },
];

export default function DeliveryJourney() {
  return (
    <section className="brand-container pb-20">
      <div className="mb-8 max-w-3xl">
        <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
          Delivery Approach
        </div>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          A professional implementation model from strategy to support
        </h2>
        <p className="mt-4 text-slate-300">
          Our delivery process is designed for organizations that need more than a
          simple website build. We plan for operations, governance, adoption,
          deployment quality, and long-term system value.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {steps.map((item) => (
          <div key={item.step} className="brand-card p-6">
            <div className="mb-4 text-sm font-semibold tracking-[0.24em] text-amber-300">
              {item.step}
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/services" className="btn-secondary">
          Explore Services
        </Link>
        <Link href="/contact" className="btn-primary">
          Start a Project Discussion
        </Link>
      </div>
    </section>
  );
}
