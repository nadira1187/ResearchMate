const STEPS = [
  {
    title: "Search a topic",
    description: "Enter keywords or a research question to find relevant papers.",
  },
  {
    title: "Read and summarize",
    description: "Open a paper, read its abstract, and generate a structured AI summary.",
  },
  {
    title: "Save and organize",
    description: "Add useful papers to your library and return to them whenever you need.",
  },
];

export function Workflow() {
  return (
    <section id="how-it-works" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          How it works
        </h2>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/30 font-serif text-lg font-semibold text-primary"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}