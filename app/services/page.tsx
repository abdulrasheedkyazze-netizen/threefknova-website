import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Technology Services",
  description:
    "ThreeFk Nova Technologies provides website development, ERP implementation, business software delivery, managed cloud services, AI integration, training, and long-term support.",
  path: "/services",
  keywords: [
    "website development services",
    "ERP implementation services",
    "business software implementation",
    "managed cloud services Uganda",
    "AI integration services",
    "digital transformation services",
  ],
});

const services = [
  {
    title: "Website strategy and development",
    description:
      "Professional marketing websites, product pages, sales funnels, and content-led digital experiences built for credibility and lead generation.",
  },
  {
    title: "Education ERP implementation",
    description:
      "Planning, deployment, onboarding, and support for school management software, education ERP modules, reporting, and finance workflows.",
  },
  {
    title: "Business software delivery",
    description:
      "Implementation of quotation software, invoicing workflows, expense tracking, approvals, dashboards, and operational visibility tools.",
  },
  {
    title: "Managed cloud and deployment services",
    description:
      "Managed hosting, secure routing, monitoring, backups, release support, and dependable cloud operations.",
  },
  {
    title: "AI automation and intelligent assistants",
    description:
      "AI-powered assistants, guided support experiences, internal knowledge helpers, and automation ideas aligned to real business processes.",
  },
  {
    title: "Training, support, and optimization",
    description:
      "Administrator handover, user enablement, support subscriptions, and structured improvement after launch.",
  },
];

const engagementModel = [
  "Discovery workshops and requirements mapping",
  "Solution design and implementation planning",
  "Configuration, deployment, and validation",
  "User training and administrator handover",
  "Post-launch support, optimization, and roadmap guidance",
];

export default function ServicesPage() {
  const faqItems = [
    {
      question: "Do you only build websites?",
      answer:
        "No. Website development is one service line, but ThreeFk Nova Technologies also supports education ERP implementation, business software delivery, cloud services, AI assistants, onboarding, and support.",
    },
    {
      question: "Can you handle both delivery and operational setup?",
      answer:
        "Yes. The service model includes setup, configuration, user enablement, and ongoing optimization instead of stopping at the initial launch.",
    },
    {
      question: "Are your services suitable for schools and institutions?",
      answer:
        "Yes. A major focus area is supporting schools and institutions with school management software, education ERP deployment, onboarding, and operational guidance.",
    },
    {
      question: "Can organizations request a custom implementation path?",
      answer:
        "Yes. Delivery can be aligned to the organization’s workflows, support needs, governance expectations, and budget realities.",
    },
  ];

  return (
    <main className="brand-container py-20">
      <PageHeader
        badge="Services"
        title="Implementation, cloud, website, and AI services for serious organizations"
        description="We help clients move from idea to dependable digital systems with planning, implementation, training, and long-term support."
      />

      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item) => (
          <div key={item.title} className="brand-card p-8">
            <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 text-slate-300">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">How we engage</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {engagementModel.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Ideal for</h2>
          <p className="mt-4 text-slate-300">
            Our services fit schools, SMEs, institutions, and operational teams that
            need a professional partner for enterprise websites, managed cloud
            services, education ERP, business software implementation, or
            AI-enabled digital transformation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request a Consultation
            </Link>
            <Link href="/products" className="btn-secondary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="Service FAQs"
        title="Questions organizations often ask before starting a project"
        items={faqItems}
      />
    </main>
  );
}
