import Link from "next/link";

import { SearchBar } from "@/components/SearchBar";

const EXAMPLE_TOPICS = [
  "graph neural networks",
  "retrieval-augmented generation",
  "climate change adaptation",
  "CRISPR gene editing",
];

export function Hero() {
  return (
    <section id="search" className="scroll-mt-16 border-b">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary/70">
          AI research assistant
        </p>
        <h1 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Find, understand, and organize research faster
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          Search real academic papers, get structured AI summaries of their
          abstracts, and keep the ones that matter in your own library.
        </p>

        <div className="mx-auto mt-10 max-w-2xl text-left">
          <SearchBar />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="text-muted-foreground">Try:</span>
          {EXAMPLE_TOPICS.map((topic) => (
            <Link
              key={topic}
              href={`/search?q=${encodeURIComponent(topic)}`}
              className="rounded-full border bg-card px-3 py-1 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}