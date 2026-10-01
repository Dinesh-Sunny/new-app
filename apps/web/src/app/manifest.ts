import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { themeColor } from "@/lib/theme-colors";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    lang: SITE.language,
    start_url: "/",
    display: "standalone",
    background_color: themeColor("background"),
    theme_color: themeColor("primary"),
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
