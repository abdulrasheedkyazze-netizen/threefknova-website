import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "ThreeFk Nova EduERP";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "EduERP",
    title: "School management software and education ERP for academics, finance, portals, and governance",
    description:
      "ThreeFk Nova EduERP helps schools and institutions modernize academics, examinations, finance, payroll, portals, reporting, and governance visibility.",
  });
}
