import Link from "next/link";

import { Logo } from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-block"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#search" className={buttonVariants({ size: "sm" })}>
            Start searching
          </Link>
        </nav>
      </div>
    </header>
  );
}