import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/PageHeader";
import { ProductVisualSpotlight } from "@/components/VisualProofGallery";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "EduERP School Management Software",
  description:
    "ThreeFk Nova EduERP is a school management system and education ERP platform for academics, examinations, finance, payroll, portals, governance, reporting, and institution-wide operational control.",
  path: "/products/eduerp",
  keywords: [
    "EduERP",
    "school management software",
    "education ERP",
    "student information system",
    "school fee management software",
    "exam management software",
  ],
});

const modules = [
  "Admissions, student records, classes, subjects, and academic allocations",
  "Examinations, marks processing, broadsheets, and report workflows",
  "Finance ledger, fee structures, collections, discounts, expenses, and payroll-linked operations",
  "Portals, parent-facing visibility, and SchoolPay-ready payment posting workflows",
  "Governance dashboards, audit visibility, executive reporting, and role-based workspaces",
  "Staff management, data import support, secure access control, and administrator tools",
];

const outcomes = [
  "Reduced manual administration across academic, finance, and reporting workflows",
  "Stronger fee visibility, collections discipline, and leadership reporting",
  "Clearer governance through approvals, audit trails, and role-based access",
  "A more credible digital foundation for long-term school transformation",
];

export default function EduERPPage() {
  const operationalProof = [
    "Dedicated workspaces for academics, finance, payroll, governance, and administration",
    "Parent and portal-oriented payment visibility tied to real finance posting flows",
    "Data import support for students, staff, subjects, and marks migration",
    "Structured setup, onboarding, and guided training for school teams",
  ];

  const securityAndIntegration = [
    "Role-based access and OTP support for sensitive accounts",
    "Board summary, audit visibility, and executive reporting for leadership teams",
    "SchoolPay-linked payment workflows for fee visibility and posting support",
    "API integration support for connected third-party workflows where required",
  ];

  const faqItems = [
    {
      question: "What kind of schools is EduERP suitable for?",
      answer:
        "EduERP is suitable for schools, colleges, and education groups that need stronger academics, finance, governance, portal, and reporting structure across day-to-day operations.",
    },
    {
      question: "Does EduERP only handle academics and fee ledgers?",
      answer:
        "No. It now covers a broader operating picture including academics, examinations, finance, payroll, expenses, portals, reporting, governance, and administrative control surfaces.",
    },
    {
      question: "How should integrations be described today?",
      answer:
        "EduERP supports SchoolPay-linked workflows and API-based integrations. Where a school needs additional third-party connectivity, we review the scope during solution design.",
    },
    {
      question: "Can implementation include onboarding and training?",
      answer:
        "Yes. ThreeFk Nova supports setup, onboarding, user training, and guided implementation so schools are supported from launch onward.",
    },
  ];

  return (
    <main className="brand-container py-20">
      <PageHeader
        badge="Education ERP"
        title="A school management system built for academics, finance, portals, governance, and institutional control"
        description="ThreeFk Nova EduERP helps schools and education groups manage academics, examinations, finance, payroll, portals, reporting, and governance through a dependable education ERP platform."
      />

      <section className="mt-12 grid gap-6 xl:grid-cols-3">
        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Core modules</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {modules.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">What schools can manage</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {operationalProof.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Security and integrations</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {securityAndIntegration.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">What schools gain</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {outcomes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Why schools choose EduERP</h2>
          <p className="text-slate-300">
            EduERP is designed for schools that want more than isolated academic
            records or fee tracking. It brings academics, finance, payroll,
            reporting, portals, and leadership visibility together in one
            dependable platform.
          </p>
          <p className="mt-4 text-slate-400">
            It is a strong fit for institutions that want a professional school
            management system with structured processes, better reporting, and
            guided implementation support from a local technology partner.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold text-white">Who EduERP is built for</h2>
        <p className="mt-4 max-w-4xl text-slate-300">
          EduERP is ideal for schools, colleges, and education groups that need
          a professional school management system with reliable implementation,
          strong financial visibility, better governance, and room to grow.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pricing" className="btn-secondary">
            Review Package Pricing
          </Link>
          <Link href="/contact" className="btn-primary">
            Request an EduERP Demo
          </Link>
        </div>
      </section>

      <ProductVisualSpotlight slug="eduerp" />

      <FAQSection
        eyebrow="EduERP FAQs"
        title="Common questions about school management software and education ERP adoption"
        items={faqItems}
      />
    </main>
  );
}
