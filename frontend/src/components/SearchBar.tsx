"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MIN_LENGTH = 2;
const MAX_LENGTH = 200;

interface SearchBarProps {
  defaultValue?: string;
}

export function SearchBar({ defaultValue = "" }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();

    if (trimmed.length < MIN_LENGTH) {
      setError(`Enter at least ${MIN_LENGTH} characters to search.`);
      return;
    }

    setError(null);
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form onSubmit={handleSubmit} role="search" noValidate className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            name="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            maxLength={MAX_LENGTH}
            placeholder="e.g. graph neural networks for drug discovery"
            aria-label="Research topic"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "search-error" : undefined}
            autoComplete="off"
            className="h-12 bg-card pl-11 text-base"
          />
        </div>
        <Button type="submit" size="lg" className="h-12 px-6">
          Search papers
        </Button>
      </div>
      {error && (
        <p id="search-error" role="alert" className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}