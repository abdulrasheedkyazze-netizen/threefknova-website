import Image from "next/image";
import Link from "next/link";

type ProductSlug = "eduerp" | "bizsuite" | "cloud-services";

const showcaseMeta: Record<
  ProductSlug,
  {
    name: string;
    label: string;
    href: string;
    summary: string;
    note: string;
    logo?: string;
  }
> = {
  eduerp: {
    name: "ThreeFk Nova EduERP",
    label: "Education ERP",
    href: "/products/eduerp",
    summary:
      "A look at the EduERP experience for academics, finance controls, reporting, and school operations.",
    note: "Preview of the school management and reporting experience available with EduERP.",
    logo: "/proof/eduerp-logo-horizontal.png",
  },
  bizsuite: {
    name: "ThreeFk Nova BizSuite",
    label: "Business Platform",
    href: "/products/bizsuite",
    summary:
      "A look at the BizSuite workspace for CRM, quotations, invoicing, collections, and reporting.",
    note: "Preview of the business workflow and commercial visibility experience in BizSuite.",
    logo: "/proof/bizsuite-logo-horizontal.png",
  },
  "cloud-services": {
    name: "ThreeFk Nova Cloud Services",
    label: "Managed Infrastructure",
    href: "/products/cloud-services",
    summary:
      "A visual summary of the managed cloud environment for routing, applications, monitoring, and continuity.",
    note: "Preview of the operational support and infrastructure view offered through Cloud Services.",
  },
};

function ProofCardHeader({
  slug,
}: Readonly<{
  slug: ProductSlug;
}>) {
  const meta = showcaseMeta[slug];

  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          {meta.label}
        </div>
        <div className="mt-1 text-lg font-semibold text-white">{meta.name}</div>
      </div>

      {meta.logo ? (
        <Image
          src={meta.logo}
          alt={meta.name}
          width={144}
          height={28}
          className="h-7 w-auto object-contain"
        />
      ) : (
        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          Ops
        </div>
      )}
    </div>
  );
}

function BizSuitePreview() {
  const stats = ["CRM Leads", "Clients", "Quotations", "Invoices"];
  const links = ["CRM Leads", "Workspace", "Billing", "Audit", "Reports"];

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-[#0c1630] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
      <div className="rounded-[1.2rem] border border-white/8 bg-[#111f3f] p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">
              Revenue Operations Workspace
            </div>
            <div className="mt-2 text-xl font-semibold text-white">
              Business Operations Dashboard
            </div>
            <div className="mt-2 max-w-xl text-sm text-slate-300">
              Track leads, customers, quotations, invoices, collections, and executive
              signals from one operational workspace.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Workspace
            </div>
            <div className="mt-2 text-sm font-semibold text-white">Default Workspace</div>
            <div className="mt-1 text-xs text-emerald-300">System Ready</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item}
              className={`rounded-2xl border p-4 ${
                index === 0
                  ? "border-cyan-400/25 bg-cyan-400/[0.08]"
                  : "border-white/8 bg-white/[0.03]"
              }`}
            >
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                {item}
              </div>
              <div className="mt-2 text-2xl font-bold text-white">
                {["18", "46", "24", "19"][index]}
              </div>
              <div className="mt-1 text-xs text-slate-400">
                {[
                  "Website and sales opportunities",
                  "Active customer records",
                  "Prepared commercial proposals",
                  "Issued billing documents",
                ][index]}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  Pipeline
                </div>
                <div className="mt-1 text-base font-semibold text-white">
                  Lead Funnel Snapshot
                </div>
              </div>
              <span className="text-xs text-cyan-300">Open CRM Leads</span>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {[
                ["New", "09"],
                ["Contacted", "06"],
                ["Qualified", "04"],
                ["Proposal", "03"],
              ].map(([stage, value]) => (
                <div
                  key={stage}
                  className="rounded-xl border border-white/8 bg-slate-950/50 px-3 py-4 text-center"
                >
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {stage}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Sales Queue
            </div>
            <div className="mt-1 text-base font-semibold text-white">Recent Leads</div>

            <div className="mt-4 space-y-3">
              {[
                ["Kampala Traders Ltd", "Qualified", "Website Demo"],
                ["Mirembe Services", "Proposal", "Consulting"],
                ["Northline Group", "New", "Cloud Services"],
              ].map(([name, status, source]) => (
                <div
                  key={name}
                  className="rounded-xl border border-white/8 bg-slate-950/45 px-3 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-medium text-white">{name}</div>
                    <span className="rounded-full bg-white/8 px-2 py-1 text-[11px] text-slate-300">
                      {status}
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-slate-400">{source}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EduErpPreview() {
  const navItems = [
    "Dashboard",
    "Academics",
    "Examinations",
    "Finance",
    "Reports",
    "Staff",
    "Data Imports",
  ];

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-[#eef3fb] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
      <div className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white">
        <div className="flex items-center justify-between gap-4 bg-[#0b4a7d] px-5 py-4">
          <div className="text-sm font-semibold text-white">ThreeFk Nova EduERP</div>
          <div className="flex gap-2">
            {["Platform Online", "License Valid", "Board Reporting"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-slate-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex border-b border-slate-200 bg-slate-50 px-4 py-3">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item, index) => (
              <span
                key={item}
                className={`rounded-full px-3 py-1.5 text-xs ${
                  index === 0
                    ? "bg-[#0b4a7d] text-white"
                    : "border border-slate-200 bg-white text-slate-600"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 p-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                User Session
              </div>
              <div className="mt-2 text-base font-semibold text-slate-900">
                Welcome back, Operations Team
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Centralized access to academic, examination, financial, and
                administrative workflows.
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Workspace Links
              </div>
              <div className="mt-3 space-y-2">
                {[
                  "Students and Classes",
                  "Marks Entry and Results",
                  "Fee Ledger and Payments",
                  "Payroll and Expenses",
                  "Board Summary Dashboard",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-3 md:grid-cols-3">
              {[
                ["Edition", "Premium Enterprise", "Advanced reporting and oversight"],
                ["Focus", "School Operations", "Academics, finance, and administration"],
                ["Reporting", "Leadership Views", "Board and executive visibility"],
              ].map(([label, value, note], index) => (
                <div
                  key={label}
                  className={`rounded-2xl border p-4 ${
                    index === 0
                      ? "border-cyan-200 bg-cyan-50"
                      : index === 1
                      ? "border-indigo-200 bg-indigo-50"
                      : "border-emerald-200 bg-emerald-50"
                  }`}
                >
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {label}
                  </div>
                  <div className="mt-2 text-xl font-semibold text-slate-900">{value}</div>
                  <div className="mt-1 text-xs text-slate-600">{note}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    Institutional Operations
                  </div>
                  <div className="mt-1 text-base font-semibold text-slate-900">
                    Academic and Finance Workflows
                  </div>
                </div>
                <span className="text-xs text-[#0b4a7d]">Structured reporting enabled</span>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Academics", "Class management, students, subjects, allocations"],
                  ["Examinations", "Marks entry, ranked results, broadsheets"],
                  ["Finance", "Fees, collections, payroll, expenses"],
                  ["Governance", "Board summary, audit visibility, executive reporting"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="text-sm font-semibold text-slate-900">{title}</div>
                    <div className="mt-2 text-xs leading-6 text-slate-600">{description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CloudServicesPreview() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-[#091525] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.26)]">
      <div className="rounded-[1.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,197,245,0.06),rgba(255,255,255,0.02))] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">
              Deployment Control Plane
            </div>
            <div className="mt-2 text-xl font-semibold text-white">
              Managed Cloud Operations Overview
            </div>
            <div className="mt-2 max-w-xl text-sm text-slate-300">
              Routing, application services, release discipline, monitoring, backups,
              and continuity support for ThreeFk Nova platforms.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-right">
            <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Status
            </div>
            <div className="mt-2 text-sm font-semibold text-emerald-300">Operational</div>
            <div className="mt-1 text-xs text-slate-400">TLS, proxy, backup, health checks</div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl border border-white/8 bg-slate-950/45 p-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Service Topology
            </div>

            <div className="mt-4 space-y-4">
              {[
                ["Edge Proxy", "Traefik routing, TLS termination, host-based rules"],
                ["Application Services", "Website, BizSuite, EduERP, API-driven flows"],
                ["Observability", "Health checks, uptime visibility, issue response"],
                ["Continuity", "Backups, controlled releases, operational safeguards"],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-3">
                  <div className="mt-1 h-3 w-3 rounded-full bg-cyan-300" />
                  <div>
                    <div className="text-sm font-semibold text-white">{title}</div>
                    <div className="mt-1 text-xs leading-6 text-slate-400">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Routing", "Host rules, secure entrypoints, service ports"],
                ["Releases", "Controlled deployment and image update flow"],
                ["Backups", "Database continuity and restoration posture"],
                ["Monitoring", "Health endpoints and operational checks"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <div className="text-sm font-semibold text-white">{title}</div>
                  <div className="mt-2 text-xs leading-6 text-slate-400">{text}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-amber-400/20 bg-[rgba(245,158,11,0.08)] p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-amber-300">
                Operational Outcome
              </div>
              <div className="mt-2 text-base font-semibold text-white">
                Production websites and platforms with stronger uptime, safer releases,
                and better recovery support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductPreview({
  slug,
}: Readonly<{
  slug: ProductSlug;
}>) {
  if (slug === "eduerp") {
    return <EduErpPreview />;
  }

  if (slug === "bizsuite") {
    return <BizSuitePreview />;
  }

  return <CloudServicesPreview />;
}

export function ProductVisualSpotlight({
  slug,
}: Readonly<{
  slug: ProductSlug;
}>) {
  const meta = showcaseMeta[slug];

  return (
    <section className="mt-12">
      <div className="mb-8 max-w-3xl">
        <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Visual Product Proof
        </div>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          {meta.name} interface showcase
        </h2>
        <p className="mt-4 text-slate-300">{meta.summary}</p>
        <p className="mt-3 text-sm text-slate-500">{meta.note}</p>
      </div>

      <ProductPreview slug={slug} />
    </section>
  );
}

export default function VisualProofGallery() {
  const slugs: ProductSlug[] = ["eduerp", "bizsuite", "cloud-services"];

  return (
    <section className="brand-container pb-20">
      <div className="mb-8 max-w-3xl">
        <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Visual Proof
        </div>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Product interface highlights from the ThreeFk Nova solution range
        </h2>
        <p className="mt-4 text-slate-300">
          Explore selected interface views from EduERP, BizSuite, and Cloud
          Services to see how ThreeFk Nova presents software, reporting, and
          managed technology solutions.
        </p>
      </div>

      <div className="space-y-8">
        {slugs.map((slug) => {
          const meta = showcaseMeta[slug];

          return (
            <div key={slug} className="brand-card overflow-hidden">
              <ProofCardHeader slug={slug} />

              <div className="px-5 py-6">
                <ProductPreview slug={slug} />

                <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-slate-300">{meta.summary}</p>
                    <p className="mt-2 text-sm text-slate-500">{meta.note}</p>
                  </div>

                  <div>
                    <Link href={meta.href} className="btn-secondary">
                      Explore {meta.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
