import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/PageHeader";
import { ProductVisualSpotlight } from "@/components/VisualProofGallery";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Managed Cloud Services",
  description:
    "ThreeFk Nova Cloud Services provides managed hosting, deployment, monitoring, backups, and operational support for modern platforms.",
  path: "/products/cloud-services",
  keywords: [
    "managed cloud services",
    "cloud deployment services",
    "DevOps support",
    "reverse proxy configuration",
    "monitoring and backups",
    "managed hosting support",
  ],
});

const serviceAreas = [
  "Containerized deployment and environment provisioning",
  "Reverse proxying, secure routing, and operational hardening",
  "Monitoring, uptime visibility, backup workflows, and continuity planning",
  "Managed releases and controlled production changes",
];

const benefits = [
  "Reliable infrastructure for business-critical applications",
  "Cleaner deployment processes and operational consistency",
  "Better visibility into uptime, failures, and service recovery",
  "A stronger production foundation for websites, ERP systems, and AI-enabled tools",
];

export default function CloudServicesPage() {
  const faqItems = [
    {
      question: "Do Cloud Services only apply to ThreeFk Nova products?",
      answer:
        "No. Cloud Services can support ThreeFk Nova solutions as well as other business websites and software platforms that need dependable hosting and operational support.",
    },
    {
      question: "What problems do managed cloud services solve?",
      answer:
        "They help teams improve uptime, backups, release control, secure routing, monitoring, and overall production confidence.",
    },
    {
      question: "Can Cloud Services support business websites as well as software platforms?",
      answer:
        "Yes. The service line is relevant to production websites, ERP platforms, business applications, and AI-enabled digital services that need dependable hosting and operational structure.",
    },
  ];

  return (
    <main className="brand-container py-20">
      <PageHeader
        badge="Managed Cloud Services"
        title="Deployment, reliability, monitoring, and release support for modern production systems"
        description="ThreeFk Nova Cloud Services helps organizations run websites, ERP systems, and business platforms with dependable hosting and support."
      />

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Service areas</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {serviceAreas.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Operational benefit</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {benefits.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold text-white">Best for</h2>
        <p className="mt-4 max-w-4xl text-slate-300">
          Cloud Services is ideal for teams that want reliable production
          environments for business websites, education ERP systems, internal
          business software, and AI-enabled digital services without leaving
          performance and support to chance.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Discuss Cloud Services
          </Link>
          <Link href="/system-requirements" className="btn-secondary">
            Review Deployment Model
          </Link>
        </div>
      </section>

      <ProductVisualSpotlight slug="cloud-services" />

      <FAQSection
        eyebrow="Cloud Service FAQs"
        title="Questions organizations ask before choosing managed deployment and operational support"
        items={faqItems}
      />
    </main>
  );
}
