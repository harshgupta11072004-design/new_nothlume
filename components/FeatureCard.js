import {
  BookOpen,
  Briefcase,
  Clock3,
  Cpu,
  Globe2,
  GraduationCap,
  Layers,
  Lightbulb,
  ListChecks,
  Megaphone,
  MonitorSmartphone,
  RefreshCw,
  Sparkles,
  Target,
  WandSparkles,
  Workflow,
  Wrench,
} from "lucide-react";

const icons = {
  BookOpen,
  Briefcase,
  Clock3,
  Cpu,
  Globe2,
  GraduationCap,
  Layers,
  Lightbulb,
  ListChecks,
  Megaphone,
  MonitorSmartphone,
  RefreshCw,
  Sparkles,
  Target,
  WandSparkles,
  Workflow,
  Wrench,
};

export default function FeatureCard({ icon, title, description }) {
  const Icon = icons[icon] || Sparkles;

  return (
    <article className="group rounded-2xl border border-white/10 bg-ink-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:shadow-glow">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-200">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mute">{description}</p>
    </article>
  );
}
