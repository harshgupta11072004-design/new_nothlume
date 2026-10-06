export const blogs = [
  {
    slug: "getting-started-with-practical-ai",
    title: "Getting Started With Practical AI",
    category: "AI",
    date: "March 12, 2026",
    excerpt:
      "A simple starting point for using AI tools in everyday work without getting lost in the hype.",
    content: [
      "Artificial intelligence is easier to use than it looks from the outside. Most people do not need to become engineers to benefit from modern tools. They need a clear workflow, a few reliable use cases, and the discipline to review results.",
      "Start with tasks you already do often: summarizing notes, drafting emails, outlining ideas, or comparing options. The goal is not to automate everything. The goal is to reduce friction on work that already matters.",
      "Treat AI as an assistant, not an authority. Check facts, keep your own judgment, and save prompts that consistently work for you. Small, repeatable wins are more useful than dramatic experiments that never become a habit.",
    ],
  },
  {
    slug: "digital-marketing-foundations-that-still-matter",
    title: "Digital Marketing Foundations That Still Matter",
    category: "Marketing",
    date: "March 4, 2026",
    excerpt:
      "Channels change quickly. Clear audience, offer and message still decide whether marketing works.",
    content: [
      "New platforms appear every year, but the basics of digital marketing remain surprisingly stable. You still need a defined audience, a useful offer, and a message people can understand quickly.",
      "If those three pieces are unclear, more content will not fix the problem. It will only scale confusion. Start by writing who you help, what outcome you support, and why someone should trust the next step.",
      "Once that is in place, channels become easier to choose. Social, search, email and partnerships are tools. They work best when they carry a focused story rather than a scattered set of posts.",
    ],
  },
  {
    slug: "how-to-learn-technology-without-overwhelm",
    title: "How to Learn Technology Without Overwhelm",
    category: "Technology",
    date: "February 21, 2026",
    excerpt:
      "A calmer way to build digital skills: one concept, one practice loop, and a visible outcome.",
    content: [
      "Technology learning often fails because people try to learn everything at once. Tutorials pile up. Tools multiply. Confidence drops. A better approach is to pick one skill and connect it to a real task.",
      "For example, instead of “learn AI,” choose “summarize meeting notes into action items.” Instead of “learn marketing,” choose “write a landing page outline for one offer.” Narrow goals make progress visible.",
      "Keep a short log of what you practiced and what improved. That record is more motivating than a long bookmark list. Consistency beats intensity for most professional skills.",
    ],
  },
  {
    slug: "building-a-simple-digital-growth-plan",
    title: "Building a Simple Digital Growth Plan",
    category: "Business",
    date: "February 10, 2026",
    excerpt:
      "Growth does not require a complicated funnel. It requires a clear offer and a repeatable next step.",
    content: [
      "A digital growth plan can be simple. Identify the people you can actually help. Describe the problem in their language. Offer a next step that is easy to take. Then review the results on a regular cadence.",
      "Many plans stall because they try to do too many channels at once. Choose one or two paths you can maintain. Quality and follow-through usually outperform a scattered presence.",
      "Treat growth as a learning process. Keep what works, drop what does not, and avoid copying tactics that do not match your offer or audience.",
    ],
  },
  {
    slug: "a-practical-workflow-for-busy-learners",
    title: "A Practical Workflow for Busy Learners",
    category: "Productivity",
    date: "January 28, 2026",
    excerpt:
      "You do not need more hours. You need a small weekly system that survives a busy calendar.",
    content: [
      "Busy professionals often wait for a free week that never arrives. A better model is a weekly learning block that is short enough to keep. Forty-five focused minutes, three times a week, can compound.",
      "Use a simple loop: learn one idea, apply it to a real example, and write one sentence about what you noticed. That loop turns content into skill.",
      "AI tools can help with summaries and practice questions, but they should not replace doing the work. The point of learning is capability, not a finished-looking notes file.",
    ],
  },
  {
    slug: "where-automation-helps-and-where-it-does-not",
    title: "Where Automation Helps — and Where It Does Not",
    category: "AI",
    date: "January 14, 2026",
    excerpt:
      "Automate repetitive, well-defined work. Keep judgment, relationships and quality control with people.",
    content: [
      "Automation is most useful when a task is repetitive, rules-based, and easy to check. Data entry, formatting, first drafts, and routing requests are common examples.",
      "It is less useful when the work depends on taste, trust, or high-stakes judgment. Customer relationships, strategy, and unique creative direction still need people in the loop.",
      "A practical test is this: if a mistake is cheap and visible, automation can help. If a mistake is expensive or hard to notice, keep a human review step. That one rule prevents a lot of frustration.",
    ],
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((post) => post.slug === slug);
}
