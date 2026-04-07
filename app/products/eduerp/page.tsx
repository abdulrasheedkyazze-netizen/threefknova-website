import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import PageHeader from "@/components/PageHeader";
import { ProductVisualSpotlight } from "@/components/VisualProofGallery";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "EduERP School Management Software",
  description:
    "ThreeFk Nova EduERP is a school management system and education ERP platform for academics, examinations, fee operations, reporting, governance, and scalable institutional management.",
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
  "Admissions, academics, and class management",
  "Examinations, marks processing, and report workflows",
  "Finance, fee structures, billing visibility, and collections support",
  "Governance dashboards and operational reporting for administrators",
];

const outcomes = [
  "Reduced manual administration across core school workflows",
  "Better fee tracking, reporting, and institutional visibility",
  "More structured operations for administrators and leadership teams",
  "A stronger foundation for long-term digital transformation",
];

export default function EduERPPage() {
  const faqItems = [
    {
      question: "What kind of schools is EduERP suitable for?",
      answer:
        "EduERP is suitable for schools, colleges, and education groups that need more structure around academics, examinations, fee operations, governance, and reporting.",
    },
    {
      question: "Does EduERP only handle academics?",
      answer:
        "No. It is positioned as an education ERP with academic, examination, finance, governance, and operational visibility capabilities.",
    },
    {
      question: "Can implementation include onboarding and deployment help?",
      answer:
        "Yes. ThreeFk Nova supports planning, deployment readiness, onboarding, and training so institutions are not left to handle rollout alone.",
    },
  ];

  return (
    <main className="brand-container py-20">
      <PageHeader
        badge="Education ERP"
        title="A school management system built for operational clarity, reporting, and institutional growth"
        description="ThreeFk Nova EduERP helps schools and education groups manage academics, examinations, finance, reporting, and governance through a dependable education ERP platform."
      />

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Core modules</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {modules.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">What schools gain</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {outcomes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold text-white">Deployment and fit</h2>
        <p className="mt-4 max-w-4xl text-slate-300">
          EduERP is ideal for schools, colleges, and education groups that need a
          professional school management system with dependable deployment,
          implementation guidance, and a scalable path for future reporting and
          operational maturity.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pricing" className="btn-secondary">
            Review EduERP Pricing
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
