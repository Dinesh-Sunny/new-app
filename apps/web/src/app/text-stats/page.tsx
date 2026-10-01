import type { Metadata } from "next";
import { TextStatsForm } from "@/components/TextStatsForm";
import { pageMetadata } from "@/lib/metadata";
import { TEXT_STATS_PAGE } from "./constants";

export const metadata: Metadata = pageMetadata(TEXT_STATS_PAGE);

export default function TextStatsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 p-8">
      <h1 className="font-heading text-2xl">{TEXT_STATS_PAGE.title}</h1>
      <p className="text-muted-foreground">{TEXT_STATS_PAGE.description}</p>
      <TextStatsForm />
    </main>
  );
}
