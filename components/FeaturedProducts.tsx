import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/lib/site-content";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold">Core Solutions</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          A connected product family designed for education, business operations,
          cloud delivery, and AI-driven growth.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {siteContent.featuredProducts.map((item) => (
          <Link
            key={item.slug}
            href={`/products/${item.slug}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            <div className="mb-2 text-sm text-cyan-300">{item.category}</div>
            <h3 className="mb-3 text-xl font-semibold">{item.name}</h3>
            <p className="mb-4 text-slate-300">{item.summary}</p>
            <div className="inline-flex items-center gap-2 text-cyan-300">
              Learn more <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
