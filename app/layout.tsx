import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  brandName,
  defaultKeywords,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
  siteUrl,
} from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: brandName,
    template: `%s | ${brandName}`,
  },
  description:
    "ThreeFk Nova Technologies delivers professional websites, education ERP systems, business management software, managed cloud services, and AI-powered digital experiences for modern organizations.",
  keywords: defaultKeywords,
  applicationName: brandName,
  authors: [{ name: brandName }],
  creator: brandName,
  publisher: brandName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: brandName,
    description:
      "Professional websites, school management software, business operations platforms, managed cloud services, and AI-ready digital experiences from ThreeFk Nova Technologies.",
    url: "/",
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
    title: brandName,
    description:
      "Professional websites, education ERP systems, business software, cloud deployment, and AI automation.",
    images: ["/img/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [getOrganizationJsonLd(), getWebSiteJsonLd()];

  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-slate-950"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
