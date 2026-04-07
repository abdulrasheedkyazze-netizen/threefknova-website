import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/PageHeader";
import { ProductVisualSpotlight } from "@/components/VisualProofGallery";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "BizSuite Business Management Software",
  description:
    "ThreeFk Nova BizSuite is business management software for quotations, invoicing, payments, expenses, approvals, dashboards, and stronger operational control.",
  path: "/products/bizsuite",
  keywords: [
    "BizSuite",
    "business management software",
    "quotation software",
    "invoice management software",
    "expense tracking software",
    "operations dashboard software",
  ],
});

const capabilities = [
  "Quotation-to-invoice workflows for commercial operations",
  "Payments, receipts, and financial visibility across transactions",
  "Expense tracking, approvals, and stronger internal control",
  "Dashboards and executive reporting for operational awareness",
];

const value = [
  "More disciplined process execution across finance and operations",
  "Better visibility into revenue workflows and internal approvals",
  "Cleaner reporting for management and decision-making",
  "A practical platform for growing businesses that need control and structure",
];

export default function BizSuitePage() {
  const faqItems = [
    {
      question: "What kind of organizations is BizSuite built for?",
      answer:
        "BizSuite is a strong fit for SMEs, service businesses, finance-led teams, and organizations that want stronger control over quotations, invoicing, expenses, and approvals.",
    },
    {
      question: "Is BizSuite only an accounting tool?",
      answer:
        "No. It is positioned as business management software covering commercial workflow execution, financial visibility, approvals, dashboards, and operational discipline.",
    },
    {
      question: "Can BizSuite be delivered with implementation support?",
      answer:
        "Yes. Buyers can engage ThreeFk Nova for implementation planning, deployment guidance, onboarding, and support rather than only software access.",
    },
  ];

  return (
    <main className="brand-container py-20">
      <PageHeader
        badge="Business Management Software"
        title="A business platform for quotations, invoicing, expense control, approvals, and operational reporting"
        description="ThreeFk Nova BizSuite helps organizations bring structure to commercial workflows, financial visibility, and day-to-day operational management."
      />

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Workflow coverage</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {capabilities.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Business value</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {value.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold text-white">Best fit organizations</h2>
        <p className="mt-4 max-w-4xl text-slate-300">
          BizSuite is well suited to service businesses, SMEs, finance teams, and
          operational leaders that need better quotation management, invoicing,
          expense visibility, approvals, and management reporting.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Request a BizSuite Demo
          </Link>
          <Link href="/services" className="btn-secondary">
            Explore Implementation Services
          </Link>
        </div>
      </section>

      <ProductVisualSpotlight slug="bizsuite" />

      <FAQSection
        eyebrow="BizSuite FAQs"
        title="Questions business buyers ask about operations software and workflow control"
        items={faqItems}
      />
    </main>
  );
}
