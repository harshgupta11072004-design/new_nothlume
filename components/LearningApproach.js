import SectionHeading from "@/components/SectionHeading";
import { steps } from "@/data/content";

export default function LearningApproach() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learning Approach"
          title="A Simple Approach to Better Learning"
          description="A clear three-step process that keeps learning practical and easy to follow."
        />
        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent md:block" />
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-white/10 bg-ink-200 p-6 md:text-center"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-indigo-400/30 bg-ink text-sm font-semibold text-cyan-200 shadow-glow-sm">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
