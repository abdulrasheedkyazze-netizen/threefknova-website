import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "ThreeFk Nova Technologies";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "ThreeFk Nova Tech",
    title: "Professional websites, ERP systems, cloud services, and AI-powered digital experiences",
    description:
      "ThreeFk Nova Technologies helps organizations launch school management software, business management platforms, managed cloud environments, and conversion-ready digital experiences.",
  });
}
