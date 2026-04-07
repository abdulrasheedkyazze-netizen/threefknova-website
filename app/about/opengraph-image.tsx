import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "About ThreeFk Nova Technologies";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "About ThreeFk Nova",
    title: "A technology partner for websites, ERP delivery, cloud operations, and AI adoption",
    description:
      "Learn how ThreeFk Nova Technologies supports institutions and businesses with professional implementation, deployment, and digital transformation.",
  });
}
