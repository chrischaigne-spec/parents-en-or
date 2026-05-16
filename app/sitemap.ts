import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/constants";
import type { MetadataRoute } from "next";

/** Sitemap dynamique — se met à jour automatiquement avec les articles */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Date du dernier article publié (pour homepage et page blog)
  const latestArticleDate = articles
    .map((a) => new Date(a.publishedAt))
    .sort((a, b) => b.getTime() - a.getTime())[0];

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ateliers`,
      lastModified: new Date("2026-04-20"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Pages d'articles générées dynamiquement
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}
