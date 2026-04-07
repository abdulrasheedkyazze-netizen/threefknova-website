import Link from "next/link";
import { siteContent } from "@/lib/site-content";

const productLinks = [
  { href: "/products/eduerp", label: "EduERP" },
  { href: "/products/bizsuite", label: "BizSuite" },
  { href: "/products/cloud-services", label: "Cloud Services" },
];

const serviceLinks = [
  { href: "/services", label: "Implementation Services" },
  { href: "/ai-studio", label: "AI Studio" },
  { href: "/pricing", label: "Pricing & Licensing" },
  { href: "/system-requirements", label: "Deployment Requirements" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {siteContent.brand.name}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              ThreeFk Nova Technologies builds professional websites, school
              management software, business management platforms, managed cloud
              services, and AI-powered digital solutions for modern organizations.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Based in Kampala, Uganda, we support institutions, SMEs, and
              growing teams that need dependable digital transformation partners.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Products
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-cyan-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Services
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-cyan-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>{siteContent.brand.email}</li>
              <li>{siteContent.brand.supportEmail}</li>
              <li>{siteContent.brand.phone}</li>
              <li>{siteContent.brand.location}</li>
            </ul>
            <div className="mt-5">
              <Link href="/contact" className="btn-secondary">
                Speak to Sales
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {siteContent.brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
