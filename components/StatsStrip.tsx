import { siteContent } from "@/lib/site-content";

export default function StatsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
      <div className="grid gap-4 md:grid-cols-4">
        {siteContent.stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="text-2xl font-bold text-white">{item.value}</div>
            <div className="mt-1 text-sm text-slate-400">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
