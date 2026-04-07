import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "ThreeFk Nova Cloud Services";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Cloud Services",
    title: "Managed cloud deployment, monitoring, backups, and operational support",
    description:
      "ThreeFk Nova Cloud Services helps organizations run websites, ERP systems, and business platforms with stronger deployment quality and production readiness.",
  });
}
