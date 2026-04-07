import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "ThreeFk Nova System Requirements";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "System Requirements",
    title: "Client appliance deployment guidance for supported production environments",
    description:
      "Review host readiness, Hyper-V expectations, appliance deployment needs, and implementation guidance for ThreeFk Nova solutions.",
  });
}
