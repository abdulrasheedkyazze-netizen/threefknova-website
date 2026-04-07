import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "ThreeFk Nova Pricing and Licensing";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Pricing & Licensing",
    title: "Commercial guidance for education ERP deployment and institutional rollout",
    description:
      "Review ThreeFk Nova pricing structure, licensing guidance, onboarding support, and custom quote pathways for serious institutions.",
  });
}
