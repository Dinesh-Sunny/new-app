import type { Metadata, Route } from "next";
import { IS_INDEXABLE, SITE } from "@/lib/site";

const twitterHandles = SITE.twitterHandle
  ? { site: SITE.twitterHandle, creator: SITE.twitterHandle }
  : {};

// Next shallow-merges metadata per key, so a page that sets `openGraph` replaces the root's whole
// object. Shared OG/Twitter fields live here and every page spreads them back in via pageMetadata().
export const BASE_OPEN_GRAPH = {
  type: "website",
  siteName: SITE.name,
  locale: SITE.locale,
} satisfies Metadata["openGraph"];

export const BASE_TWITTER = {
  card: "summary_large_image",
  ...twitterHandles,
} satisfies Metadata["twitter"];

export const ROBOTS: Metadata["robots"] = IS_INDEXABLE
  ? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    }
  : { index: false, follow: false };

const NO_INDEX: Metadata["robots"] = { index: false, follow: false };

type PageMetadataInput = {
  title: string;
  description?: string;
  path: Route;
  noIndex?: boolean;
};

// Per-page metadata with a canonical URL and OG/Twitter cards that keep the site-wide fields.
// Relative URLs resolve against metadataBase (set in the root layout).
export function pageMetadata({
  title,
  description = SITE.description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...BASE_OPEN_GRAPH, title, description, url: path },
    twitter: { ...BASE_TWITTER, title, description },
    ...(noIndex && { robots: NO_INDEX }),
  };
}
