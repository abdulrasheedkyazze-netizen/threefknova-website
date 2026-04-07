import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.threefknova.com";

export const brandName = "ThreeFk Nova Technologies";

export const defaultKeywords = [
  "ThreeFk Nova Technologies",
  "ThreeFk Nova Tech",
  "ThreeFk Nova website",
  "technology company in Uganda",
  "digital transformation company",
  "website development company",
  "education ERP",
  "school management software",
  "business management software",
  "quotation and invoicing software",
  "cloud deployment services",
  "managed cloud services",
  "AI automation services",
  "enterprise software solutions",
];

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: MetadataInput): Metadata {
  const mergedKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: brandName,
      type: "website",
      images: [
        {
          url: "/img/logo.png",
          alt: brandName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/img/logo.png"],
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandName,
    url: siteUrl,
    logo: `${siteUrl}/img/logo.png`,
    email: "info@threefknova.com",
    telephone: "+256769378512",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    description:
      "ThreeFk Nova Technologies delivers professional websites, education ERP systems, business management software, cloud deployment services, and AI-powered digital solutions.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@threefknova.com",
        telephone: "+256769378512",
        areaServed: ["UG", "KE", "TZ", "RW", "Global"],
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@threefknova.com",
        telephone: "+256714670455",
        availableLanguage: ["en"],
      },
    ],
    knowsAbout: [
      "website development",
      "education ERP",
      "school management software",
      "business management software",
      "quotation and invoicing software",
      "cloud deployment",
      "AI automation",
      "enterprise systems",
    ],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brandName,
    url: siteUrl,
    description:
      "Professional websites, school management software, business operations platforms, managed cloud services, and AI-ready digital experiences from ThreeFk Nova Technologies.",
    publisher: {
      "@type": "Organization",
      name: brandName,
      url: siteUrl,
    },
  };
}
