import type { MetadataRoute } from "next";
import { absoluteUrl, IS_INDEXABLE, PRIVATE_ROUTES } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!IS_INDEXABLE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: [...PRIVATE_ROUTES] },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
