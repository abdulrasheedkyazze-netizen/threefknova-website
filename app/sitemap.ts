import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

const routes = [
  "",
  "/about",
  "/ai-studio",
  "/contact",
  "/pricing",
  "/products",
  "/products/bizsuite",
  "/products/cloud-services",
  "/products/eduerp",
  "/services",
  "/system-requirements",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
