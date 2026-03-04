import { siteConfig } from "@/lib/constants";
import type { MetadataRoute } from "next";

/** Robots.txt dynamique */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
