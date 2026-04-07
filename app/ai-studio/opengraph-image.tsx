import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "ThreeFk Nova AI Studio";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "AI Studio",
    title: "AI assistants, automation, and intelligent digital experiences for real operations",
    description:
      "ThreeFk Nova AI Studio helps organizations explore AI-powered support, workflow assistance, and automation aligned to business and institutional needs.",
  });
}
