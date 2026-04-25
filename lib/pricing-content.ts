export interface ProductPricingCatalogItem {
  slug: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  pricingModel: string;
  href: string;
  ctaLabel: string;
  isPublished?: boolean;
}

export interface EduErpPricingPeriod {
  label: string;
  ugx: number;
  usd: number;
}

export interface EduErpPricingPackage {
  name: string;
  badge: string;
  audience: string;
  scopeSummary: string;
  recommended?: boolean;
  setup: {
    ugx: number;
    usd: number;
  };
  subscription: {
    cadence: string;
    periods: EduErpPricingPeriod[];
    annualTotal: {
      ugx: number;
      usd: number;
    };
  };
  firstYearTotal: {
    ugx: number;
    usd: number;
  };
  featureLabels: string[];
}

export const pricingExchangeContext = {
  rateUgxPerUsd: 3730,
  rateLabel: "UGX 3,730 / USD 1",
  note:
    "USD amounts are shown for easy comparison, with the original UGX pricing displayed alongside each package.",
};

function roundToStep(value: number, step: number) {
  return Math.round(value / step) * step;
}

function convertUgxToUsd(ugx: number, roundingStep: number) {
  return roundToStep(ugx / pricingExchangeContext.rateUgxPerUsd, roundingStep);
}

function buildSubscriptionPeriods(
  values: Array<{
    label: string;
    ugx: number;
  }>,
): EduErpPricingPeriod[] {
  return values.map((item) => ({
    ...item,
    usd: convertUgxToUsd(item.ugx, 5),
  }));
}

function sumAmounts(items: Array<{ ugx: number; usd: number }>) {
  return items.reduce(
    (acc, item) => ({
      ugx: acc.ugx + item.ugx,
      usd: acc.usd + item.usd,
    }),
    { ugx: 0, usd: 0 },
  );
}

function buildEduErpPackage(input: {
  name: string;
  badge: string;
  audience: string;
  scopeSummary: string;
  setupUgx: number;
  subscriptionTerms: Array<{
    label: string;
    ugx: number;
  }>;
  featureLabels: string[];
  recommended?: boolean;
}): EduErpPricingPackage {
  const periods = buildSubscriptionPeriods(input.subscriptionTerms);
  const annualTotal = sumAmounts(periods);
  const setupUsd = convertUgxToUsd(input.setupUgx, 50);

  return {
    name: input.name,
    badge: input.badge,
    audience: input.audience,
    scopeSummary: input.scopeSummary,
    recommended: input.recommended,
    setup: {
      ugx: input.setupUgx,
      usd: setupUsd,
    },
    subscription: {
      cadence: "Academic-term subscription",
      periods,
      annualTotal,
    },
    firstYearTotal: {
      ugx: input.setupUgx + annualTotal.ugx,
      usd: setupUsd + annualTotal.usd,
    },
    featureLabels: input.featureLabels,
  };
}

export const productPricingCatalog: ProductPricingCatalogItem[] = [
  {
    slug: "eduerp",
    name: "ThreeFk Nova EduERP",
    category: "Education ERP",
    status: "Published packages",
    summary:
      "Clear package pricing for schools and education groups, with a one-time setup fee and term-based subscription options.",
    pricingModel: "Setup fee plus academic-term subscription",
    href: "#eduerp-pricing",
    ctaLabel: "Review EduERP Packages",
    isPublished: true,
  },
  {
    slug: "bizsuite",
    name: "ThreeFk Nova BizSuite",
    category: "Business Platform",
    status: "Custom quotation",
    summary:
      "Tailored pricing for business workflow automation, invoicing, approvals, dashboards, and operational reporting.",
    pricingModel: "Quotation based on scope and support needs",
    href: "/products/bizsuite",
    ctaLabel: "Discuss BizSuite Pricing",
  },
  {
    slug: "cloud-services",
    name: "ThreeFk Nova Cloud Services",
    category: "Managed Infrastructure",
    status: "Custom quotation",
    summary:
      "Managed hosting, monitoring, backups, deployment support, and ongoing operations priced to match each environment.",
    pricingModel: "Quotation based on environment and support scope",
    href: "/products/cloud-services",
    ctaLabel: "Discuss Cloud Scope",
  },
];

export const eduerpPricingPackages: EduErpPricingPackage[] = [
  buildEduErpPackage({
    name: "Basic Package",
    badge: "Foundational school operations",
    audience: "Best for small schools and institutions that want a clear, dependable digital foundation",
    scopeSummary:
      "Academics, examinations, reporting, finance visibility, staff administration, and core school operations.",
    setupUgx: 12_000_000,
    subscriptionTerms: [
      { label: "Term 1", ugx: 800_000 },
      { label: "Term 2", ugx: 700_000 },
      { label: "Term 3", ugx: 700_000 },
    ],
    featureLabels: [
      "Academics",
      "Examinations",
      "Reports",
      "Finance Ledger",
      "Staff Management",
      "Data Imports",
    ],
  }),
  buildEduErpPackage({
    name: "Standard ERP",
    badge: "Operational finance and payroll control",
    audience: "Best for growing schools that need broader finance workflow discipline",
    scopeSummary:
      "Everything in Basic, plus operational dashboards, payroll, expenses, and fee-relief workflows.",
    setupUgx: 17_000_000,
    subscriptionTerms: [
      { label: "Term 1", ugx: 2_000_000 },
      { label: "Term 2", ugx: 1_700_000 },
      { label: "Term 3", ugx: 1_700_000 },
    ],
    featureLabels: [
      "Academics",
      "Examinations",
      "Reports",
      "Finance Ledger",
      "Staff Management",
      "Data Imports",
      "Operational Dashboards",
      "Payroll Management",
      "Expense Tracking",
      "Discount / Waiver Requests",
    ],
    recommended: true,
  }),
  buildEduErpPackage({
    name: "Premium Enterprise",
    badge: "Governance and executive oversight",
    audience: "Best for larger institutions that need board visibility and premium reporting",
    scopeSummary:
      "Everything in Standard ERP, plus board reporting, finance oversight, and executive visibility.",
    setupUgx: 25_000_000,
    subscriptionTerms: [
      { label: "Term 1", ugx: 2_800_000 },
      { label: "Term 2", ugx: 2_300_000 },
      { label: "Term 3", ugx: 2_300_000 },
    ],
    featureLabels: [
      "Academics",
      "Examinations",
      "Reports",
      "Finance Ledger",
      "Staff Management",
      "Data Imports",
      "Operational Dashboards",
      "Payroll Management",
      "Expense Tracking",
      "Discount / Waiver Requests",
      "Board Summary Dashboard",
      "Finance Audit Visibility",
      "Executive Finance Reporting",
    ],
  }),
];

export const eduerpComparisonRows = [
  "Academics",
  "Examinations",
  "Reports",
  "Finance Ledger",
  "Staff Management",
  "Data Imports",
  "Operational Dashboards",
  "Payroll Management",
  "Expense Tracking",
  "Discount / Waiver Requests",
  "Board Summary Dashboard",
  "Finance Audit Visibility",
  "Executive Finance Reporting",
];

export const setupIncludes = [
  "Initial solution setup and environment preparation",
  "License activation and branding configuration",
  "Administrator onboarding and guided handover",
  "User training aligned to the selected package",
  "Go-live support and data import guidance where applicable",
];

export const subscriptionIncludes = [
  "Access to your selected package and enabled modules",
  "Support aligned to the selected package",
  "Product updates and operational guidance",
  "Upgrade options as institutional needs grow",
  "Continuity across the academic-year subscription model",
];

export const commercialDesignNotes = [
  "EduERP prices are shown in both USD and UGX for clear comparison.",
  "BizSuite and Cloud Services are available through tailored quotations.",
  "Larger schools or custom implementations can request a separate commercial proposal.",
];

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatUgx(amount: number) {
  return `UGX ${new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(amount)}`;
}
