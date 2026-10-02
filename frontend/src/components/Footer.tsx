import { BackendStatus } from "@/components/BackendStatus";
import { Logo } from "@/components/Logo";

// TODO: replace with your real GitHub repo and email
const GITHUB_URL = "https://github.com/your-username/researchmate";
const CONTACT_EMAIL = "mailto:you@example.com";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground">
              A student-built research assistant. Summaries are AI-generated and
              should always be verified against the original paper.
            </p>
          </div>
          <nav aria-label="Footer" className="flex gap-8 text-sm">
            <ul className="space-y-2">
              <li>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <a href={CONTACT_EMAIL} className="text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ResearchMate. Phase 1: Foundation.
          </p>
          <BackendStatus />
        </div>
      </div>
    </footer>
  );
}