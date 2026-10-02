import type { Metadata } from "next";

import { SearchBar } from "@/components/SearchBar";

export const metadata: Metadata = { title: "Search" };

interface SearchPageProps {
  searchParams: Promise<{ q?: string | string[] }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = (Array.isArray(q) ? q[0] : q)?.trim() ?? "";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <SearchBar defaultValue={query} />
      <div className="mt-10 rounded-lg border border-dashed p-8 text-center">
        <p className="text-muted-foreground">
          {query ? (
            <>
              You searched for <strong className="text-foreground">{query}</strong>.
            </>
          ) : (
            "Enter a topic above."
          )}{" "}
          Real paper results arrive in Milestone 2.
        </p>
      </div>
    </div>
  );
}