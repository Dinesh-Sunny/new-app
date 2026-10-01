import type { MetadataRoute } from "next";
import { absoluteUrl, PUBLIC_ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency,
    priority,
  }));
}
