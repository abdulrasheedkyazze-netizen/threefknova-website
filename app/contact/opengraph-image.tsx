import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "Contact ThreeFk Nova Technologies";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Contact Sales",
    title: "Request a demo, consultation, or implementation discussion",
    description:
      "Speak with ThreeFk Nova Technologies about school management software, business platforms, cloud deployment, AI integration, and professional digital transformation support.",
  });
}
