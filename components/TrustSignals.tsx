const proofItems = [
  {
    title: "Production-ready website delivery",
    description:
      "The website stack already supports a standalone production build, structured metadata, crawl files, security headers, and contact-to-CRM integration.",
  },
  {
    title: "Product-led service positioning",
    description:
      "The brand is not limited to one-off websites. It presents a connected offer across EduERP, BizSuite, managed cloud services, and AI-enabled digital experiences.",
  },
  {
    title: "Operationally grounded lead handling",
    description:
      "Sales enquiries can be captured, categorized, and routed into the BizSuite CRM workflow instead of remaining a disconnected inbox-only process.",
  },
  {
    title: "Implementation-minded delivery model",
    description:
      "The website clearly supports planning, onboarding, deployment readiness, training, and long-term support rather than only surface-level marketing claims.",
  },
];

export default function TrustSignals() {
  return (
    <section className="brand-container pb-20">
      <div className="mb-8 max-w-3xl">
        <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Professional Signals
        </div>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Why the website now feels more credible to enterprise buyers
        </h2>
        <p className="mt-4 text-slate-300">
          Strong B2B websites do more than look polished. They show operational
          seriousness, a clear product story, and real delivery thinking. These are
          the signals the ThreeFk Nova experience is now designed to communicate.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {proofItems.map((item) => (
          <div key={item.title} className="brand-card p-6">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
