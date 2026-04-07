import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "AI Studio and Automation Services",
  description:
    "ThreeFk Nova AI Studio helps organizations launch AI assistants, workflow automation, AI-powered websites, and intelligent support experiences that fit real operations.",
  path: "/ai-studio",
  keywords: [
    "AI Studio",
    "AI automation services",
    "AI assistant integration",
    "AI chatbot for websites",
    "business AI automation",
    "AI-ready digital transformation",
  ],
});

const offerings = [
  "AI website assistants for product discovery and visitor guidance",
  "Knowledge-based support experiences for products, services, and documentation",
  "Workflow automation concepts for lead handling, support, and internal operations",
  "AI-ready content components for modern digital experiences and decision support",
];

const principles = [
  "Practical use cases before novelty-driven AI features",
  "Server-side integrations that fit governance and operational control",
  "Clear human escalation paths for sales, support, and implementation teams",
  "Integration with websites, business platforms, and managed infrastructure",
];

export default function AIStudioPage() {
  return (
    <main className="brand-container py-20">
      <PageHeader
        badge="AI Studio"
        title="AI-powered digital experiences and automation designed for real operational value"
        description="ThreeFk Nova AI Studio brings together website assistants, intelligent support, workflow automation ideas, and AI-ready product experiences that align with real business and institutional needs."
      />

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">What AI Studio can support</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {offerings.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="brand-card p-8">
          <h2 className="text-2xl font-semibold text-white">Our AI delivery principles</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {principles.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-amber-400/25 bg-[rgba(245,158,11,0.08)] p-8">
        <h2 className="text-2xl font-semibold text-white">Best fit scenarios</h2>
        <p className="mt-4 max-w-4xl text-slate-300">
          AI Studio is ideal for organizations that want better lead capture,
          guided product discovery, AI-enabled support, or automation ideas that
          connect with education ERP, business operations platforms, and managed
          websites.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Discuss an AI Use Case
          </Link>
          <Link href="/services" className="btn-secondary">
            Explore Delivery Services
          </Link>
        </div>
      </section>
    </main>
  );
}
