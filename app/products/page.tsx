import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Products and Platforms",
  description:
    "Explore ThreeFk Nova Technologies products including EduERP for schools, BizSuite for business operations, and Cloud Services for managed deployment, security, and uptime.",
  path: "/products",
  keywords: [
    "ThreeFk Nova products",
    "education ERP software",
    "school management system",
    "business operations platform",
    "managed cloud services",
    "business management software",
  ],
});

const portfolio = [
  {
    name: "ThreeFk Nova EduERP",
    href: "/products/eduerp",
    bestFor: "Schools, colleges, and education groups",
    summary:
      "A school management system and education ERP platform covering academics, examinations, finance, payroll, portals, governance, reporting, and institutional operations.",
    points: [
      "Academic, examinations, staff, and data-import workflows",
      "Finance ledger, SchoolPay-ready collections, payroll, and expense control",
      "Governance visibility, audit posture, and leadership reporting",
    ],
  },
  {
    name: "ThreeFk Nova BizSuite",
    href: "/products/bizsuite",
    bestFor: "SMEs, finance teams, and growing operational businesses",
    summary:
      "Business management software for quotations, invoicing, expenses, approvals, dashboards, and better commercial control.",
    points: [
      "Quotation-to-invoice workflows",
      "Expense tracking and approval support",
      "Operational reporting and management visibility",
    ],
  },
  {
    name: "ThreeFk Nova Cloud Services",
    href: "/products/cloud-services",
    bestFor: "Organizations that need dependable deployment and uptime",
    summary:
      "Managed cloud services for hosting, monitoring, backups, secure routing, and dependable operational support.",
    points: [
      "Production deployment and environment setup",
      "Monitoring, backups, and continuity planning",
      "Managed releases and security-minded operations",
    ],
  },
];

const ecosystemBenefits = [
  "One technology partner for websites, business systems, cloud services, and AI support",
  "Solutions designed to fit the needs of schools, businesses, and institutions",
  "Guided implementation, training, and long-term support for dependable results",
];

export default function ProductsPage() {
  const faqItems = [
    {
      question: "Are these products ready for real organizational use?",
      answer:
        "Yes. Each solution is designed around real operational use cases such as school management, business workflow control, reporting, and dependable day-to-day support.",
    },
    {
      question: "Can products be combined with managed deployment support?",
      answer:
        "Yes. Cloud Services complements the application layer by supporting production deployment, monitoring, backups, routing, and release quality.",
    },
    {
      question: "How should a buyer choose between the product lines?",
      answer:
        "EduERP is for educational institutions, BizSuite is for business workflow and finance operations, and Cloud Services supports production delivery and infrastructure reliability.",
    },
    {
      question: "Can organizations request demos and commercial guidance?",
      answer:
        "Yes. Buyers can use the contact page to request product guidance, demos, custom quotations, and implementation discussions.",
    },
  ];

  return (
    <main className="brand-container py-20">
      <PageHeader
        badge="Products"
        title="Professional software and managed technology solutions for modern organizations"
        description="Explore ThreeFk Nova solutions for education, business operations, cloud services, and practical AI support."
      />

      <section className="mt-12 grid gap-6 xl:grid-cols-3">
        {portfolio.map((product) => (
          <div key={product.name} className="brand-card p-8">
            <div className="text-sm font-medium text-cyan-300">{product.bestFor}</div>
            <h2 className="mt-3 text-2xl font-semibold text-white">{product.name}</h2>
            <p className="mt-4 text-slate-300">{product.summary}</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {product.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href={product.href} className="btn-secondary">
                Explore Product
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold text-white">
          Why organizations work with ThreeFk Nova
        </h2>
        <ul className="mt-5 space-y-3 text-slate-300">
          {ecosystemBenefits.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pricing" className="btn-primary">
            Review Pricing
          </Link>
          <Link href="/contact" className="btn-secondary">
            Request a Guided Demo
          </Link>
        </div>
      </section>

      <FAQSection
        eyebrow="Product FAQs"
        title="Questions buyers ask when comparing software platforms and managed delivery partners"
        items={faqItems}
      />
    </main>
  );
}
