import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "ThreeFk Nova Product Portfolio";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Products",
    title: "EduERP, BizSuite, and Cloud Services for operationally serious organizations",
    description:
      "Explore ThreeFk Nova Technologies products for school management, business workflow control, cloud reliability, and AI-ready growth.",
  });
}
