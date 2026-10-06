import { ButtonLink } from "@/components/Container";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-up">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200/80">
            AI · Marketing · Digital Skills
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Learn. Build. Grow with Northlume.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            Practical learning programs designed to help you understand AI, digital
            marketing, technology and modern business skills.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/courses">Explore Courses</ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              Learn More
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="relative animate-float rounded-3xl border border-white/10 bg-ink-200/80 p-5 shadow-glow backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-white">Learning Dashboard</p>
              <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs text-emerald-300">
                Live
              </span>
            </div>
            <div className="grid gap-3">
              {[
                ["AI Foundations", "82%"],
                ["Digital Marketing", "64%"],
                ["Automation Workflows", "47%"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/5 bg-ink-100 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-mute">{label}</span>
                    <span className="text-white">{value}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent-gradient"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/5 bg-ink p-4">
                <p className="text-xs text-mute">Courses</p>
                <p className="mt-1 text-2xl font-semibold text-white">6+</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-ink p-4">
                <p className="text-xs text-mute">Focus Areas</p>
                <p className="mt-1 text-2xl font-semibold text-white">AI + Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
