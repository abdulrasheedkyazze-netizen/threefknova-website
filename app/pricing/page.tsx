import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/metadata";
import {
  commercialDesignNotes,
  eduerpComparisonRows,
  eduerpPricingPackages,
  formatUgx,
  formatUsd,
  pricingExchangeContext,
  productPricingCatalog,
  setupIncludes,
  subscriptionIncludes,
} from "@/lib/pricing-content";

export const metadata = buildMetadata({
  title: "Pricing, Licensing and Commercial Models",
  description:
    "Explore ThreeFk Nova pricing for EduERP, review package costs in USD with UGX reference, and request tailored quotations for other solutions.",
  path: "/pricing",
  keywords: [
    "EduERP pricing",
    "ThreeFk Nova pricing",
    "school management software pricing",
    "education ERP pricing",
    "business software pricing",
    "ERP licensing",
  ],
});

const pricingQuestions = [
  {
    title: "Which EduERP package is right for our school?",
    answer:
      "Basic is ideal for schools starting structured digital operations, Standard fits growing institutions that need stronger finance and payroll control, and Premium is best for schools that need deeper reporting and governance visibility.",
  },
  {
    title: "Why are prices shown in USD and UGX?",
    answer:
      "USD amounts make package comparison easier for buyers, while UGX remains visible for local reference and quotation clarity.",
  },
  {
    title: "Can we request a custom quotation?",
    answer:
      "Yes. Multi-campus schools, custom integrations, heavier migration needs, branded portals, and other advanced requirements can be quoted separately.",
  },
];

export default function PricingPage() {
  return (
    <main className="brand-container py-20">
      <PageHeader
        badge="Pricing & Licensing"
        title="Clear pricing for EduERP and tailored quotations for other ThreeFk Nova solutions"
        description="Review EduERP package pricing in USD with UGX reference, and contact our team for BizSuite, Cloud Services, and custom implementation quotations."
      />

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="brand-card p-8">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Pricing Overview
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Professional pricing that stays simple for buyers
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            EduERP includes published package pricing for schools and education
            groups. BizSuite and Cloud Services are available through tailored
            quotations so each client gets the right scope, support, and
            commercial fit.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["EduERP packages", "3", "Basic, Standard, and Premium"],
              ["Custom quotations", "2", "BizSuite and Cloud Services"],
              ["Display currency", "USD + UGX", "Clear public price presentation"],
            ].map(([label, value, note]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
                <div className="mt-2 text-sm text-slate-400">{note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="brand-card p-8">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
            Currency Reference
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            USD shown clearly, with UGX kept visible
          </h2>
          <p className="mt-4 text-slate-300">
            EduERP package prices are displayed in USD for easy comparison, and
            the matching UGX values are shown underneath for local reference.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-400/20 bg-[rgba(245,158,11,0.08)] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-amber-300">
              Reference Conversion
            </div>
            <div className="mt-2 text-3xl font-semibold text-white">
              {pricingExchangeContext.rateLabel}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {pricingExchangeContext.note}
            </p>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            {commercialDesignNotes.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-8 max-w-3xl">
          <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Solutions and Pricing
          </div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Choose the right commercial path for your needs
          </h2>
          <p className="mt-4 text-slate-300">
            EduERP has published package pricing, while BizSuite and Cloud
            Services are quoted according to the scope, features, and support
            level your organization requires.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {productPricingCatalog.map((item) => (
            <div
              key={item.slug}
              className={item.isPublished ? "brand-card pricing-highlight p-8" : "brand-card p-8"}
            >
              <div className="text-sm font-medium text-cyan-300">{item.category}</div>
              <h2 className="mt-3 text-2xl font-semibold text-white">{item.name}</h2>
              <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                {item.status}
              </div>
              <p className="mt-4 text-slate-300">{item.summary}</p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Pricing Model
                </div>
                <div className="mt-2 text-sm font-medium text-white">{item.pricingModel}</div>
              </div>
              <div className="mt-6">
                <Link href={item.href} className="btn-secondary">
                  {item.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="eduerp-pricing" className="mt-16 scroll-mt-28">
        <div className="mb-8 max-w-4xl">
          <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            EduERP Pricing
          </div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            EduERP package pricing
          </h2>
          <p className="mt-4 text-slate-300">
            Each package includes a one-time setup fee and subscription fees
            spread across the academic year. USD amounts are shown first for
            quick comparison, with UGX listed below each figure.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {eduerpPricingPackages.map((pkg) => (
            <article
              key={pkg.name}
              className={pkg.recommended ? "brand-card pricing-highlight p-8" : "brand-card p-8"}
            >
              <div className="text-sm font-medium text-cyan-300">{pkg.badge}</div>
              <h3 className="mt-3 text-2xl font-semibold text-white">{pkg.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{pkg.audience}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">{pkg.scopeSummary}</p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Setup and deployment fee
                </div>
                <div className="mt-2 text-3xl font-bold text-white">{formatUsd(pkg.setup.usd)}</div>
                <div className="mt-1 text-sm text-slate-400">{formatUgx(pkg.setup.ugx)}</div>
              </div>

              <div className="mt-6">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  {pkg.subscription.cadence}
                </div>
                <div className="mt-3 space-y-3">
                  {pkg.subscription.periods.map((period) => (
                    <div
                      key={period.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <div>
                        <div className="text-sm font-medium text-white">{period.label}</div>
                        <div className="text-xs text-slate-500">{formatUgx(period.ugx)}</div>
                      </div>
                      <div className="text-base font-semibold text-amber-300">
                        {formatUsd(period.usd)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Annual subscription total
                  </div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {formatUsd(pkg.subscription.annualTotal.usd)}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {formatUgx(pkg.subscription.annualTotal.ugx)}
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-400/20 bg-[rgba(245,158,11,0.08)] p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-amber-300">
                    First-year total
                  </div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {formatUsd(pkg.firstYearTotal.usd)}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {formatUgx(pkg.firstYearTotal.ugx)}
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {pkg.featureLabels.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>{feature}</span>
                  </li>
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
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 brand-card overflow-hidden">
        <div className="border-b border-white/10 px-8 py-6">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Package Comparison
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Compare what each EduERP package includes
          </h2>
          <p className="mt-3 max-w-4xl text-slate-300">
            Use this comparison to see the main capabilities included in each
            package and choose the best fit for your school.
          </p>
        </div>

        <div className="overflow-x-auto px-4 py-4">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="sticky left-0 bg-slate-950/95 px-4 py-4 text-left text-sm font-semibold text-white">
                  Capability
                </th>
                {eduerpPricingPackages.map((pkg) => (
                  <th key={pkg.name} className="px-4 py-4 text-left text-sm font-semibold text-white">
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {eduerpComparisonRows.map((feature) => (
                <tr key={feature}>
                  <td className="sticky left-0 border-t border-white/10 bg-slate-950/95 px-4 py-4 text-sm text-slate-300">
                    {feature}
                  </td>
                  {eduerpPricingPackages.map((pkg) => {
                    const included = pkg.featureLabels.includes(feature);
                    return (
                      <td
                        key={`${pkg.name}-${feature}`}
                        className="border-t border-white/10 px-4 py-4 text-sm text-slate-300"
                      >
                        <span
                          className={
                            included
                              ? "inline-flex rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
                              : "inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-500"
                          }
                        >
                          {included ? "Included" : "Not included"}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">What setup includes</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {setupIncludes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">What the subscription includes</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {subscriptionIncludes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-12 rounded-3xl border border-amber-400/30 bg-[rgba(245,158,11,0.08)] p-8">
        <h2 className="text-2xl font-semibold text-white">
          Need a tailored quotation?
        </h2>
        <p className="mt-4 max-w-4xl text-slate-300">
          Multi-campus schools, migration-heavy implementations, custom
          integrations, branded portals, and advanced reporting needs can be
          quoted separately. BizSuite and Cloud Services are also available on
          request through our sales team.
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
