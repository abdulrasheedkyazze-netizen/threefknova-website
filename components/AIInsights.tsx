"use client";

import { useEffect, useState } from "react";

type Insight = {
  title: string;
  detail: string;
  tone: string;
};

export default function AIInsights() {
  const [items, setItems] = useState<Insight[]>([]);
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const res = await fetch("/api/ai", { cache: "no-store" });
        const data = await res.json();
        if (!mounted) return;
        setItems(data.items || []);
        setUpdatedAt(new Date(data.updatedAt || Date.now()).toLocaleTimeString());
      } catch {
        if (!mounted) return;
        setItems([]);
      }
    };

    load();
    const timer = setInterval(load, 300000);

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">AI Command Center</h3>
        <span className="text-xs text-slate-400">Updated: {updatedAt || "..."}</span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.length ? (
          items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
            >
              <div className="mb-2 text-sm font-semibold text-cyan-300">{item.tone}</div>
              <div className="mb-2 font-medium text-white">{item.title}</div>
              <div className="text-sm leading-6 text-slate-300">{item.detail}</div>
            </div>
          ))
        ) : (
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 md:col-span-3">
            <div className="text-sm leading-7 text-slate-300">
              AI-generated insights will appear here when the AI layer is enabled.
              The platform already supports professional websites, education ERP,
              business operations software, managed cloud delivery, and AI-ready
              digital experiences.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
