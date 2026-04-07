import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact Sales",
  description:
    "Contact ThreeFk Nova Technologies for school management software, business management platforms, cloud deployment, AI automation, implementation support, training, and custom demos.",
  path: "/contact",
  keywords: [
    "contact ThreeFk Nova",
    "request ERP demo",
    "school management software consultation",
    "business software consultation",
    "cloud deployment consultation",
    "AI automation consultation",
  ],
});

export default function ContactLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
