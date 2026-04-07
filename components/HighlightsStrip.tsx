import { CheckCircle2 } from "lucide-react";
import { siteContent } from "@/lib/site-content";

export default function HighlightsStrip() {
  return (
    <section className="border-y border-white/10 bg-white/5">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-5 md:grid-cols-4 lg:px-8">
        {siteContent.highlights.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle2 className="h-4 w-4 text-cyan-300" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
