import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/metadata";
import { siteContent } from "@/lib/site-content";

export const metadata = buildMetadata({
  title: "System Requirements",
  description:
    "Review the ThreeFk Nova client appliance deployment requirements for education ERP and business software solutions, including Windows 11 host expectations and Hyper-V readiness.",
  path: "/system-requirements",
  keywords: [
    "system requirements",
    "client appliance deployment",
    "Hyper-V deployment requirements",
    "education ERP appliance",
    "Windows 11 Hyper-V software deployment",
  ],
});

export default function SystemRequirementsPage() {
  return (
    <main className="brand-container py-20">
      <PageHeader
        badge="Client Appliance Deployment"
        title="System Requirements"
        description="ThreeFk Nova solutions can be delivered as a preconfigured client appliance for supported Windows 11 hosts using Hyper-V."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <section className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Supported Host Environment</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>• Windows 11 Pro / Enterprise / Education</li>
            <li>• Hyper-V enabled</li>
            <li>• BIOS/UEFI virtualization enabled</li>
            <li>• 64-bit processor with virtualization support</li>
          </ul>
        </section>

        <section className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Recommended Host Specs</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>• Intel Core i5/i7 or AMD Ryzen 5/7</li>
            <li>• 16 GB RAM minimum</li>
            <li>• 32 GB RAM preferred</li>
            <li>• 512 GB SSD minimum</li>
            <li>• 1 TB preferred for growth and backups</li>
          </ul>
        </section>

        <section className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Recommended Appliance VM</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>• 4 vCPU</li>
            <li>• 8 GB RAM minimum</li>
            <li>• 12–16 GB preferred</li>
            <li>• 160 GB disk minimum</li>
            <li>• 250 GB preferred</li>
          </ul>
        </section>
      </div>

      <div className="mt-8 pricing-highlight rounded-3xl p-8">
        <h2 className="text-2xl font-semibold text-white">Deployment Model</h2>
        <p className="mt-4 max-w-4xl text-slate-300">
          We deliver a preconfigured appliance image that is imported into Hyper-V on a supported
          Windows 11 host. After import, licensing and activation are completed, networking is verified,
          and user onboarding begins.
        </p>
      </div>

      <div className="mt-8 brand-card p-8">
        <h2 className="text-2xl font-semibold text-white">Client Readiness Checklist</h2>
        <ul className="mt-5 space-y-3 text-slate-300">
          <li>• Administrative access to the Windows 11 host</li>
          <li>• Hyper-V feature enabled before deployment</li>
          <li>• Stable LAN connectivity for users and updates</li>
          <li>• Backup destination prepared</li>
          <li>• UPS and basic power protection recommended</li>
        </ul>
      </div>

      <div className="mt-8 brand-card p-8">
        <h2 className="text-2xl font-semibold text-white">Need deployment guidance?</h2>
        <p className="mt-4 max-w-4xl text-slate-300">
          Our team can guide you through host readiness, Hyper-V preparation, appliance import,
          activation, and initial onboarding.
        </p>
        <p className="mt-4 text-slate-300">
          Contact us on <span className="text-cyan-300">{siteContent.brand.phone}</span> or via{" "}
          <span className="text-cyan-300">{siteContent.brand.email}</span>.
        </p>
      </div>
    </main>
  );
}
