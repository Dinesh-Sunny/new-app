import { absoluteUrl, SITE } from "@/lib/site";

// schema.org JSON-LD builders. Keep them in step with SITE so search engines and AI crawlers
// see the same identity as the visible page.
export type JsonLdThing = { "@type": string } & Record<string, unknown>;

const author = {
  "@type": "Person",
  name: SITE.author.name,
  url: SITE.author.url,
} satisfies JsonLdThing;

export function websiteJsonLd(): JsonLdThing {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE.name,
    description: SITE.description,
    url: absoluteUrl("/"),
    inLanguage: SITE.language,
    publisher: author,
  };
}

export function sourceCodeJsonLd(): JsonLdThing {
  return {
    "@type": "SoftwareSourceCode",
    "@id": absoluteUrl("/#source"),
    name: SITE.name,
    description: SITE.description,
    codeRepository: SITE.repoUrl,
    programmingLanguage: ["TypeScript", "Python"],
    keywords: SITE.keywords.join(", "),
    author,
    isPartOf: { "@id": absoluteUrl("/#website") },
  };
}
