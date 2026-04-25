import Link from "next/link";
import {
  Building2,
  GraduationCap,
  ServerCog,
  Sparkles,
} from "lucide-react";

const sectors = [
  {
    title: "Schools and education groups",
    description:
      "Education ERP, school management software, fee operations, examinations, and leadership reporting for schools and institutions.",
    href: "/products/eduerp",
    icon: GraduationCap,
  },
  {
    title: "Businesses and finance teams",
    description:
      "Business management software for quotations, invoicing, expenses, approvals, dashboards, and stronger operating discipline.",
    href: "/products/bizsuite",
    icon: Building2,
  },
  {
    title: "Cloud-first operations",
    description:
      "Managed cloud deployment, monitoring, backups, reverse proxying, and release workflows for dependable production systems.",
    href: "/products/cloud-services",
    icon: ServerCog,
  },
  {
    title: "AI-enabled transformation",
    description:
      "AI assistants, workflow automation, intelligent content experiences, and practical automation that fit real business operations.",
    href: "/ai-studio",
    icon: Sparkles,
  },
];

export default function IndustryFocus() {
  return (
    <section className="brand-container py-16">
      <div className="mb-8 max-w-3xl">
        <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Where We Create Value
        </div>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Technology solutions for institutions, businesses, and growth teams
        </h2>
        <p className="mt-4 text-slate-300">
          ThreeFk Nova Technologies combines software delivery, managed cloud
          services, website development, and AI integration to help
          organizations modernize with confidence.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {sectors.map((sector) => {
          const Icon = sector.icon;

          return (
            <Link
              key={sector.title}
              href={sector.href}
              className="brand-card group p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400/15">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{sector.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {sector.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
