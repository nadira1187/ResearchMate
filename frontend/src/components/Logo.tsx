import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="ResearchMate home"
    >
      <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <BookOpen className="size-4" aria-hidden="true" />
      </span>
      <span className="font-serif text-xl font-semibold tracking-tight">
        ResearchMate
      </span>
    </Link>
  );
}