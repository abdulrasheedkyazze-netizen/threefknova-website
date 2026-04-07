import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Pricing and Licensing",
  description:
    "Review ThreeFk Nova EduERP pricing, licensing, onboarding scope, and custom quote options for schools and institutions looking for a professional school management system.",
  path: "/pricing",
  keywords: [
    "EduERP pricing",
    "school management software pricing",
    "education ERP pricing",
    "ERP licensing",
    "school software demo pricing",
  ],
});

const plans = [
  {
    name: "Basic Package",
    badge: "Best for small to mid-size schools",
    setup: "$3,200",
    annual: "$540",
    features: [
      "Academics module",
      "Exams and reports",
      "Finance ledger for cleared and blocked students",
      "Initial user training",
      "Client appliance deployment",
      "Standard onboarding support",
    ],
  },
  {
    name: "Standard ERP",
    badge: "Best for growing institutions",
    setup: "$4,600",
    annual: "$1,350",
    features: [
      "Everything in Basic",
      "Payroll management",
      "Expenses tracking",
      "Discount / waiver requests",
      "Operational dashboards",
      "Enhanced implementation support",
    ],
    recommended: true,
  },
  {
    name: "Premium Enterprise",
    badge: "Best for large schools and executive teams",
    setup: "$6,700",
    annual: "$1,880",
    features: [
      "Everything in Standard ERP",
      "Board summary dashboard",
      "Audit visibility",
      "Income vs expenditure reporting",
      "Executive reporting support",
      "Priority deployment and advisory support",
    ],
  },
];

const setupIncludes = [
  "Client appliance deployment and initial configuration",
  "Environment validation and production readiness checks",
  "Initial onboarding and administrator handover",
  "User training aligned to purchased modules",
  "Activation and licensing setup",
];

const annualIncludes = [
  "Licensing continuity for the subscribed package",
  "Product maintenance eligibility",
  "Update entitlement according to subscription tier",
  "Support access according to purchased package",
  "Operational continuity guidance",
];

const pricingQuestions = [
  {
    title: "Who is this pricing designed for?",
    answer:
      "The published structure is designed primarily for schools and institutions evaluating ThreeFk Nova EduERP with professional setup, onboarding, and annual licensing support.",
  },
  {
    title: "Can pricing change by implementation scope?",
    answer:
      "Yes. Final proposals may vary based on migration effort, number of modules, user onboarding needs, reporting requirements, and deployment complexity.",
  },
  {
    title: "Can larger organizations request a tailored quote?",
    answer:
      "Absolutely. Multi-campus environments, advanced reporting needs, larger deployments, or custom commercial requirements can be handled through a tailored proposal.",
  },
];

export default function PricingPage() {
  return (
    <main className="brand-container py-20">
      <PageHeader
        badge="Pricing & Licensing"
        title="Simple pricing for serious institutions"
        description="Choose the deployment and licensing tier that matches your institution’s size, governance needs, and digital maturity."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={plan.recommended ? "brand-card pricing-highlight p-8" : "brand-card p-8"}
          >
            <div className="text-sm font-medium text-cyan-300">{plan.badge}</div>
            <h2 className="mt-3 text-2xl font-semibold text-white">{plan.name}</h2>

            <div className="mt-6 space-y-3">
              <div>
                <div className="text-sm text-slate-400">Setup</div>
                <div className="text-3xl font-bold text-white">{plan.setup}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400">Annual License</div>
                <div className="text-2xl font-semibold text-amber-300">{plan.annual}</div>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Contact Sales
              </Link>
              <Link href="/contact" className="btn-secondary">
                Request Demo
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 brand-card p-6 text-sm text-slate-400">
        USD prices are indicative and may vary slightly with exchange rates,
        deployment scope, migration effort, user training requirements, and support level.
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">What’s included in setup</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {setupIncludes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">What annual licensing covers</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {annualIncludes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-12 rounded-3xl border border-amber-400/30 bg-[rgba(245,158,11,0.08)] p-8">
        <h2 className="text-2xl font-semibold text-white">Need a custom quote or custom demo?</h2>
        <p className="mt-4 max-w-4xl text-slate-300">
          Institutions with larger student populations, multi-campus environments, additional modules,
          migration requirements, or advanced support needs can request a tailored commercial proposal
          and a guided product demonstration aligned to their environment.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Request Custom Quote
          </Link>
          <Link href="/contact" className="btn-secondary">
            Request Custom Demo
          </Link>
        </div>
      </div>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingQuestions.map((item) => (
          <div key={item.title} className="brand-card p-8">
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 text-slate-300">{item.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
