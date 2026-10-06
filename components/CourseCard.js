import Link from "next/link";
import { ArrowRight, Bot, Brain, LineChart, Megaphone, Share2, Zap } from "lucide-react";

const icons = {
  "ai-automation": Bot,
  "ai-for-business": Brain,
  "digital-marketing-fundamentals": Megaphone,
  "digital-growth-strategy": LineChart,
  "social-media-marketing": Share2,
  "productivity-with-ai-tools": Zap,
};

export default function CourseCard({ course }) {
  const Icon = icons[course.slug] || Bot;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:shadow-glow">
      <div className="mb-5 flex items-center justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 text-cyan-200">
          <Icon size={20} />
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-mute">
          {course.category}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-white">{course.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{course.description}</p>
      {(course.difficulty || course.duration) && (
        <div className="mt-5 flex flex-wrap gap-2 text-xs text-mute">
          {course.difficulty ? (
            <span className="rounded-full bg-white/5 px-3 py-1">{course.difficulty}</span>
          ) : null}
          {course.duration ? (
            <span className="rounded-full bg-white/5 px-3 py-1">{course.duration}</span>
          ) : null}
        </div>
      )}
      <Link
        href={`/courses/${course.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
      >
        View Course <ArrowRight size={16} />
      </Link>
    </article>
  );
}
