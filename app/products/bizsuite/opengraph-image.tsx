import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "ThreeFk Nova BizSuite";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "BizSuite",
    title: "Business management software for quotations, invoicing, expenses, and reporting",
    description:
      "ThreeFk Nova BizSuite supports stronger operational control across revenue workflows, approvals, commercial visibility, and internal discipline.",
  });
}
