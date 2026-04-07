"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  message: string;
  interests: string[];
  consent: boolean;
  website: string;
};

type StatusState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  location: "",
  message: "",
  interests: [],
  consent: false,
  website: "",
};

const interestOptions = [
  "Support Subscription",
  "Repository Subscription",
  "Consulting",
  "Training",
  "Demo",
  "Other",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<StatusState>({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      form.firstName.trim() &&
      form.lastName.trim() &&
      isValidEmail(form.email) &&
      form.message.trim() &&
      form.consent
    );
  }, [form]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleInterest(value: string) {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((item) => item !== value)
        : [...prev.interests, value],
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.firstName.trim() || !form.lastName.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        message: "Please complete all required fields before submitting.",
      });
      return;
    }

    if (!isValidEmail(form.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid business email address.",
      });
      return;
    }

    if (!form.consent) {
      setStatus({
        type: "error",
        message: "Please confirm consent to process your personal data.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus({
          type: "error",
          message: data.error || "We could not send your request right now. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message:
          data.message
            ? `${data.message}${data.leadCode ? ` Reference: ${data.leadCode}.` : ""}`
            : `Your message has been sent successfully. Our sales team will get back to you shortly.${
                data.leadCode ? ` Reference: ${data.leadCode}.` : ""
              }`,
      });

      setForm(initialForm);
    } catch {
      setStatus({
        type: "error",
        message:
          "An unexpected error occurred while sending your request. Please try again in a moment.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--brand-navy)] text-white">
      <section className="brand-container py-16 md:py-20">
        <div className="mx-auto mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Contact Sales
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Let’s plan the right solution for your organization
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Tell us about your business goals, preferred engagement model, and the
            products or services you are interested in. Our team will respond with a
            suitable recommendation.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <section className="brand-card rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] md:p-8">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">Sales enquiry form</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Fields marked with <span className="text-fuchsia-400">*</span> are required.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                Response time: within 1 business day
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="hidden" aria-hidden="true">
                <label>
                  Website
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => updateField("website", e.target.value)}
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    First Name <span className="text-fuchsia-400">*</span>
                  </label>
                  <input
                    className="input w-full"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    autoComplete="given-name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Last Name <span className="text-fuchsia-400">*</span>
                  </label>
                  <input
                    className="input w-full"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Business Email <span className="text-fuchsia-400">*</span>
                </label>
                <input
                  className="input w-full"
                  placeholder="you@company.com"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Phone
                  </label>
                  <input
                    className="input w-full"
                    placeholder="+256..."
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Company / Organization
                  </label>
                  <input
                    className="input w-full"
                    placeholder="Organization name"
                    value={form.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Location
                </label>
                <input
                  className="input w-full"
                  placeholder="City, Country"
                  value={form.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  autoComplete="address-level2"
                />
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-white">
                  What are you interested in?
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {interestOptions.map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
                    >
                      <input
                        type="checkbox"
                        checked={form.interests.includes(item)}
                        onChange={() => toggleInterest(item)}
                        className="h-4 w-4 accent-cyan-400"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Project Details <span className="text-fuchsia-400">*</span>
                </label>
                <textarea
                  className="input min-h-[170px] w-full resize-y"
                  placeholder="Tell us a little more about your needs, timelines, user count, deployment model, or preferred package."
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                />
              </div>

              <label className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => updateField("consent", e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-cyan-400"
                />
                <span>
                  I agree to the processing of my personal data for purposes of handling
                  this sales request. <span className="text-fuchsia-400">*</span>
                </span>
              </label>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex min-w-[160px] items-center justify-center rounded-2xl bg-fuchsia-500 px-6 py-3.5 font-semibold text-white transition hover:bg-fuchsia-400 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={sending || !canSubmit}
                >
                  {sending ? "Submitting..." : "Submit enquiry"}
                </button>

                <p className="text-sm text-slate-400">
                  Your request will be captured in our CRM and routed directly to sales.
                </p>
              </div>

              {status.message ? (
                <div
                  className={`rounded-2xl border px-4 py-4 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                      : status.type === "error"
                      ? "border-rose-400/30 bg-rose-400/10 text-rose-100"
                      : "border-white/10 bg-white/[0.03] text-slate-200"
                  }`}
                >
                  {status.message}
                </div>
              ) : null}
            </form>
          </section>

          <aside className="brand-card flex min-h-[620px] flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.24)]">
            <div>
              <p className="mb-6 max-w-md text-lg leading-8 text-white">
                Share your business goals with our sales team, and our experts will
                assemble a practical solution path for your organization.
              </p>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Best for
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Schools, institutions, SMEs, enterprise teams, and organizations
                    looking for implementation, subscriptions, training, or ongoing
                    support.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    What happens next
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    <li>• We review your enquiry</li>
                    <li>• We recommend the right package</li>
                    <li>• We follow up with pricing, demo, or implementation plan</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Direct contact
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-slate-300">
                    <p>info@threefknova.com</p>
                    <p>support@threefknova.com</p>
                    <p>+256 769 378 512</p>
                    <p>Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-10">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-cyan-300/10 shadow-[0_0_80px_rgba(34,211,238,0.18)]">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border border-cyan-300/20 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.25)]">
                  <Image
                    src="/img/logo.png"
                    alt="ThreeFk Nova"
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
