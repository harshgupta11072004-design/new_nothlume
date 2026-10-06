export const courses = [
  {
    slug: "ai-automation",
    title: "AI & Automation",
    category: "Artificial Intelligence",
    difficulty: "Beginner",
    duration: "6 weeks",
    featured: true,
    description:
      "Learn how modern AI tools and automation can improve productivity and business workflows.",
    overview:
      "This course introduces practical AI tools and simple automation workflows. You will learn how to identify repetitive tasks, use AI assistants responsibly, and design small systems that save time.",
    outcomes: [
      "Understand core AI and automation concepts",
      "Use popular AI tools for everyday work",
      "Map a simple business workflow for automation",
      "Apply practical prompts and process checklists",
    ],
  },
  {
    slug: "ai-for-business",
    title: "AI for Business",
    category: "Artificial Intelligence",
    difficulty: "Beginner",
    duration: "5 weeks",
    featured: true,
    description:
      "Learn how businesses can use AI tools for productivity, content, research and automation.",
    overview:
      "Explore how teams use AI for research, content drafts, customer support ideas, and operational efficiency — without assuming a technical background.",
    outcomes: [
      "Identify useful AI use cases in a business",
      "Improve research and content workflows",
      "Evaluate tools with a practical checklist",
      "Plan a responsible AI adoption approach",
    ],
  },
  {
    slug: "digital-marketing-fundamentals",
    title: "Digital Marketing Fundamentals",
    category: "Marketing",
    difficulty: "Beginner",
    duration: "8 weeks",
    featured: true,
    description:
      "Understand the fundamentals of digital marketing, customer acquisition and online growth.",
    overview:
      "Build a clear foundation in digital marketing: audience, channels, messaging, content, and measuring what actually matters.",
    outcomes: [
      "Define a target audience and value proposition",
      "Understand core digital channels",
      "Plan a simple campaign structure",
      "Track basic performance metrics",
    ],
  },
  {
    slug: "digital-growth-strategy",
    title: "Digital Growth Strategy",
    category: "Business",
    difficulty: "Intermediate",
    duration: "7 weeks",
    featured: true,
    description:
      "Understand the fundamentals of building and growing a digital business.",
    overview:
      "Learn how to connect product, audience, content, and conversion into a practical growth plan for a digital offering.",
    outcomes: [
      "Map a simple growth funnel",
      "Choose channels that fit your offer",
      "Prioritize experiments without overwhelm",
      "Build a repeatable review cadence",
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Marketing",
    difficulty: "Beginner",
    duration: "6 weeks",
    featured: false,
    description:
      "Learn how to plan, create and refine social content that supports brand awareness and audience growth.",
    overview:
      "A practical look at platforms, content formats, consistency, and measuring social work as part of a wider marketing plan.",
    outcomes: [
      "Choose platforms with intention",
      "Plan a content calendar",
      "Write clearer posts and captions",
      "Review engagement with useful metrics",
    ],
  },
  {
    slug: "productivity-with-ai-tools",
    title: "Productivity With AI Tools",
    category: "Productivity",
    difficulty: "Beginner",
    duration: "4 weeks",
    featured: false,
    description:
      "Use AI tools to organize work, draft faster, research smarter and reduce everyday friction.",
    overview:
      "Focus on personal productivity: prompts, note-taking, research, writing support, and building a simple AI-assisted daily workflow.",
    outcomes: [
      "Set up a practical AI toolkit",
      "Write better prompts for daily tasks",
      "Speed up research and drafting",
      "Create a sustainable work routine",
    ],
  },
];

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug);
}

export function getFeaturedCourses() {
  return courses.filter((course) => course.featured);
}
