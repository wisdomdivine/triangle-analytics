import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/overview", "/visitors", "/domains", "/events", "/profile"],
    },
    sitemap: "https://the-triangle-analytics.web.app/sitemap.xml",
  };
}
