import type { MetadataRoute, Route } from "next";

// Single source of truth for site identity and SEO. Template values: replace them as the
// product takes shape; metadata, sitemap, robots, manifest, OG images, and JSON-LD all read from here.
export const SITE = {
  name: "new-app",
  // TODO(stub): replace tagline, description, repo, author, and keywords with product truth.
  tagline: "new-app web app",
  description: "Next.js and shadcn/ui on our design system.",
  locale: "en_US",
  language: "en",
  repoUrl: "https://github.com/your-org/new-app",
  author: { name: "new-app", url: "https://github.com/your-org" },
  keywords: ["Next.js"],
  // X/Twitter handle (with @) for twitter:site and twitter:creator; leave empty until one exists.
  twitterHandle: "",
} as const;

const LOCAL_URL = "http://localhost:3000";

// SITE_URL wins; on Vercel fall back to the project's production domain so previews still
// canonicalize to production instead of their throwaway deployment URL.
function resolveSiteUrl(): URL {
  if (process.env.SITE_URL) return new URL(process.env.SITE_URL);
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }
  return new URL(LOCAL_URL);
}

export const SITE_URL = resolveSiteUrl();

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

// Only production deployments get indexed; previews and local builds tell crawlers to stay out.
export const IS_INDEXABLE =
  process.env.VERCEL_ENV === undefined
    ? process.env.NODE_ENV === "production"
    : process.env.VERCEL_ENV === "production";

type SitemapEntry = MetadataRoute.Sitemap[number];

// Public, indexable routes. Adding a page? Add it here so the sitemap picks it up.
export const PUBLIC_ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/text-stats", changeFrequency: "monthly", priority: 0.5 },
] as const satisfies ReadonlyArray<
  { path: Route } & Pick<SitemapEntry, "changeFrequency" | "priority">
>;

// Internal routes crawlers must skip (also marked noindex in their own metadata).
export const PRIVATE_ROUTES = [
  "/design",
] as const satisfies ReadonlyArray<Route>;
