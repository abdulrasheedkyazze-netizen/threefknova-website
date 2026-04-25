import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Discovery and requirements mapping",
    description:
      "We understand your goals, users, workflows, reporting needs, and the right solution for your organization.",
  },
  {
    step: "02",
    title: "Solution design and implementation planning",
    description:
      "We shape the delivery plan, key setup decisions, integrations, onboarding steps, and success targets for launch.",
  },
  {
    step: "03",
    title: "Setup, launch, and training",
    description:
      "We configure the solution, prepare your team, and support a smooth go-live experience.",
  },
  {
    step: "04",
    title: "Support and continuous improvement",
    description:
      "We continue with support, reporting improvements, user adoption, and future enhancements as your needs grow.",
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
          A clear process from planning to long-term support
        </h2>
        <p className="mt-4 text-slate-300">
          Our delivery process is designed for organizations that want more than
          a simple handover. We focus on practical setup, user success, and
          dependable long-term value.
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
