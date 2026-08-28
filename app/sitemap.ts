import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { absUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/about", "/health", "/body", "/soul", "/journal", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((path) => ({
      url: absUrl(path || "/"),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...articles.map((article) => ({
      url: absUrl(`/journal/${article.slug}`),
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
