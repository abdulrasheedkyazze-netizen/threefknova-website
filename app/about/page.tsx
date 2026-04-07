import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About ThreeFk Nova Technologies",
  description:
    "Learn how ThreeFk Nova Technologies helps organizations with website development, education ERP delivery, business management software, managed cloud services, and AI-ready digital transformation.",
  path: "/about",
  keywords: [
    "about ThreeFk Nova Technologies",
    "technology company in Uganda",
    "education ERP provider",
    "business software company",
    "cloud deployment partner",
  ],
});

const pillars = [
  {
    title: "Professional websites and digital presence",
    description:
      "We design and build business websites that communicate credibility, generate enquiries, and support long-term brand growth.",
  },
  {
    title: "Enterprise software for real operations",
    description:
      "Our product focus includes school management software, education ERP, business management platforms, and operational reporting systems.",
  },
  {
    title: "Managed cloud and deployment discipline",
    description:
      "We support organizations with deployment planning, reverse proxying, containerized delivery, release workflows, backups, and operational readiness.",
  },
  {
    title: "AI-ready transformation",
    description:
      "We help teams introduce AI assistants, intelligent automation, guided support experiences, and practical AI workflows where they create real value.",
  },
];

const differentiators = [
  "Business-first thinking instead of purely technical implementation",
  "A practical delivery model covering requirements, deployment, onboarding, and support",
  "Solutions designed for reliability, governance, and long-term operational use",
  "A product mindset that combines websites, software platforms, cloud operations, and AI",
];

const industries = [
  "Schools, colleges, and education groups",
  "SMEs and finance-led business teams",
  "Organizations modernizing workflows and reporting",
  "Teams that need secure cloud-hosted or appliance-based deployments",
];

export default function AboutPage() {
  return (
    <main className="brand-container py-20">
      <PageHeader
        badge="About ThreeFk Nova"
        title="A technology partner for digital transformation, enterprise software, cloud operations, and AI adoption"
        description="ThreeFk Nova Technologies supports organizations that need more than a simple website build. We help teams plan, launch, and grow reliable digital systems that improve operations and decision-making."
      />

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        {pillars.map((item) => (
          <div key={item.title} className="brand-card p-8">
            <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 text-slate-300">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">
            Why organizations choose ThreeFk Nova Technologies
          </h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {differentiators.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Where we are strongest</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {industries.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-5 text-slate-400">
            Our work is especially effective for organizations that need structured
            implementation, dependable support, and a roadmap for growth.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-amber-400/25 bg-[rgba(245,158,11,0.08)] p-8">
        <h2 className="text-2xl font-semibold text-white">Our operating approach</h2>
        <p className="mt-4 max-w-4xl text-slate-300">
          We believe the best digital projects combine good design, sound technical
          implementation, operational clarity, and realistic adoption planning. That
          is why our work spans positioning, delivery, deployment, training, and
          ongoing support instead of stopping at code alone.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/services" className="btn-secondary">
            Explore Services
          </Link>
          <Link href="/contact" className="btn-primary">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
