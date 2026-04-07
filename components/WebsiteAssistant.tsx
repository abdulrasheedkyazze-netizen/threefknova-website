"use client";

import { useState } from "react";

export default function WebsiteAssistant() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(
    "Ask about EduERP, BizSuite, Cloud Services, AI Studio, or deployment."
  );
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setReply(data.reply || "No response received.");
    } catch {
      setReply("Assistant unavailable right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Website AI Assistant</h2>
        <p className="mt-2 text-slate-400">
          Ask questions about our solutions, services, and capabilities.
        </p>

        <div className="mt-5 flex flex-col gap-4 md:flex-row">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about EduERP, BizSuite, cloud deployment, or AI..."
            className="flex-1 rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
          />
          <button
            onClick={handleAsk}
            disabled={loading}
            className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60"
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900 p-4 text-slate-300">
          {reply}
        </div>
      </div>
    </section>
  );
}
