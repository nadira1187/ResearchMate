import { Library, Search, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Search,
    title: "Search real papers",
    description:
      "Query a live academic database and browse titles, authors, years, venues, and abstracts.",
  },
  {
    icon: Sparkles,
    title: "Structured AI summaries",
    description:
      "Get the objective, problem, methodology, findings, and limitations, based only on the abstract.",
  },
  {
    icon: Library,
    title: "Personal library",
    description:
      "Save papers you care about, revisit them any time, and remove what you no longer need.",
  },
  {
    icon: ShieldCheck,
    title: "Verify at the source",
    description:
      "Every paper links back to its original source so you can check the AI against the real text.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for the early stages of research
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to go from a topic to a shortlist of papers worth reading.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <li key={title} className="rounded-lg border bg-card p-6 shadow-sm">
              <span className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}