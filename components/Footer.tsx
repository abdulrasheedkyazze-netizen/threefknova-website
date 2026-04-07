import { siteContent } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {siteContent.brand.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Professional websites, business systems, education ERP platforms,
              cloud services, and AI-powered digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Products
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>ThreeFk Nova EduERP</li>
              <li>ThreeFk Nova BizSuite</li>
              <li>ThreeFk Nova Cloud Services</li>
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
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {siteContent.brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}