import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { websiteJsonLd } from "@/lib/structured-data";

const HOME_TITLE = `${SITE.name}: ${SITE.tagline}`;

export const metadata: Metadata = {
  ...pageMetadata({ title: HOME_TITLE, path: "/" }),
  // Skip the root "%s · name" template; the home title already leads with the name.
  title: { absolute: HOME_TITLE },
};

// Placeholder home until the product is defined (see PRODUCT.md via /impeccable init).
export default function Home() {
  return (
    <main className="flex min-h-full flex-1 items-center justify-center p-6">
      <JsonLd items={[websiteJsonLd()]} />
      <section className="flex w-full max-w-md flex-col gap-4">
        <h1 className="font-heading text-3xl">{SITE.name}</h1>
        <p className="text-muted-foreground">
          Next.js and shadcn/ui on our design system. Product pages land here
          once the product is defined.
        </p>
        <Button asChild className="self-start pointer-coarse:min-h-11">
          <Link href="/text-stats">Try the Python demo</Link>
        </Button>
      </section>
    </main>
  );
}
