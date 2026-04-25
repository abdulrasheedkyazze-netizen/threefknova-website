import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "ThreeFk Nova Pricing and Licensing";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Pricing & Licensing",
    title: "EduERP pricing and tailored quotations for ThreeFk Nova solutions",
    description:
      "Review EduERP package pricing in USD with UGX reference, and request tailored quotations for other ThreeFk Nova solutions.",
  });
}
