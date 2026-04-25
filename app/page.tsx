import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import AIInsights from "@/components/AIInsights";
import FeaturedProducts from "@/components/FeaturedProducts";
import HighlightsStrip from "@/components/HighlightsStrip";
import StatsStrip from "@/components/StatsStrip";
import WebsiteAssistant from "@/components/WebsiteAssistant";
import HomepageCTACards from "@/components/HomepageCTACards";
import IndustryFocus from "@/components/IndustryFocus";
import DeliveryJourney from "@/components/DeliveryJourney";
import FAQSection from "@/components/FAQSection";
import TrustSignals from "@/components/TrustSignals";
import VisualProofGallery from "@/components/VisualProofGallery";
import { siteContent } from "@/lib/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Enterprise Websites, ERP Systems, Cloud and AI Solutions",
  description:
    "ThreeFk Nova Technologies delivers school management software, business management platforms, managed cloud services, professional websites, and AI-powered automation for organizations that need dependable digital transformation.",
  path: "/",
  keywords: [
    "school management software Uganda",
    "education ERP company",
    "business management software Uganda",
    "quotation and invoicing software",
    "managed cloud services Uganda",
    "AI automation company Uganda",
    "enterprise website development",
  ],
});

export default function HomePage() {
  const homeFaq = [
    {
      question: "What does ThreeFk Nova Technologies actually provide?",
      answer:
        "ThreeFk Nova Technologies provides professional websites, school management software, business management platforms, managed cloud services, and AI-powered digital experiences for institutions and growing organizations.",
    },
    {
      question: "Who is the website best suited for?",
      answer:
        "ThreeFk Nova is a strong fit for schools, institutions, SMEs, and organizations that want dependable websites, software, cloud support, and practical digital growth.",
    },
    {
      question: "Can ThreeFk Nova support both deployment and implementation?",
      answer:
        "Yes. ThreeFk Nova supports implementation, setup, training, cloud services, and ongoing support in addition to software delivery and website development.",
    },
    {
      question: "How should a serious buyer engage next?",
      answer:
        "The best next step is to request a demo or consultation through the contact form so our team can recommend the right solution and pricing path.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="brand-container py-20 lg:py-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          <Sparkles className="h-4 w-4" />
          {siteContent.hero.badge}
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl md:leading-[1.05]">
              {siteContent.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {siteContent.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Explore Products
              </Link>

              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="brand-card p-5">
                <div className="mb-2 text-sm font-medium text-cyan-300">
                  Built for institutions
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  Structured solutions for schools, businesses, and organizations
                  that need dependable systems, clear reporting, and long-term scalability.
                </p>
              </div>

              <div className="brand-card p-5">
                <div className="mb-2 text-sm font-medium text-cyan-300">
                  Flexible delivery
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  Available as managed cloud services or guided client deployments,
                  depending on the needs of your organization.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-emerald-300" />
              <h2 className="text-2xl font-semibold text-white">
                Built for security, reliability, and scale
              </h2>
            </div>

            <p className="text-sm leading-7 text-slate-400">
              ThreeFk Nova solutions are designed with enterprise-grade security,
              dependable infrastructure, and operational reliability at their core.
            </p>

            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>Secure encrypted access across all services</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>Controlled user roles and permission management</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>Reliable infrastructure built for uptime and continuity</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>Scalable deployment approach for growing institutions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>Operational best practices applied across the platform</span>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/system-requirements"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300"
              >
                View deployment requirements <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <StatsStrip />

      {/* Highlights */}
      <HighlightsStrip />

      {/* Industry Focus */}
      <IndustryFocus />

      {/* AI Insights */}
      <section className="brand-container py-16">
        <AIInsights />
      </section>

      {/* Delivery Model */}
      <DeliveryJourney />

      {/* Trust Signals */}
      <TrustSignals />

      {/* Assistant */}
      <WebsiteAssistant />

      {/* CTA Cards */}
      <HomepageCTACards />

      {/* Products */}
      <FeaturedProducts />

      {/* Visual Proof */}
      <VisualProofGallery />

      {/* Closing CTA */}
      <section className="brand-container pb-24">
        <div className="rounded-[2rem] border border-amber-400/20 bg-[rgba(245,158,11,0.08)] p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-3 text-sm font-medium uppercase tracking-wide text-amber-300">
                Ready to move forward?
              </div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Let’s shape the right solution for your institution
              </h2>
              <p className="mt-4 max-w-3xl text-slate-300">
                From pricing guidance and demos to implementation, support, and
                managed services, our team can help you choose the right path
                with confidence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Sales
              </Link>
              <Link href="/pricing" className="btn-secondary">
                Compare Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-container pb-24">
        <FAQSection
          eyebrow="Frequently Asked Questions"
          title="Helpful answers for buyers comparing technology partners, ERP platforms, websites, cloud services, and AI support"
          description="A quick guide for organizations exploring ThreeFk Nova products, services, and support options."
          items={homeFaq}
        />
      </section>
    </main>
  );
}
