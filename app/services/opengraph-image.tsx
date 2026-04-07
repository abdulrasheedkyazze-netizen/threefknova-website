import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "ThreeFk Nova Services";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Services",
    title: "Website, ERP, cloud, and AI implementation services for modern organizations",
    description:
      "ThreeFk Nova Technologies supports planning, deployment, onboarding, AI integration, and long-term digital transformation delivery.",
  });
}
