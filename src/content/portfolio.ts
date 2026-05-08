export type ProjectEntry = {
  title: string;
  category: string;
  role: string;
  cardLabel: string;
  summary: string;
  outcome: string;
  tags: string[];
  imageAlt: string;
};

export type PrincipleEntry = {
  title: string;
  description: string;
};

export type LinkEntry = {
  label: string;
  href: string;
};

export type HeroStatEntry = {
  value: string;
  label: string;
};

export type HeroMediaEntry = {
  alt: string;
  eyebrow: string;
  title: string;
  caption: string;
};

export type AboutHighlightEntry = {
  label: string;
  value: string;
};

export type PortfolioContent = {
  name: string;
  status: string;
  heroTitle: string;
  intro: string;
  focusLabels: string[];
  heroStats: HeroStatEntry[];
  heroMedia: HeroMediaEntry;
  ctas: LinkEntry[];
  featuredHeading: string;
  projects: ProjectEntry[];
  principles: PrincipleEntry[];
  aboutHeading: string;
  aboutBody: string;
  aboutHighlights: AboutHighlightEntry[];
  tools: string[];
  contactHeading: string;
  contactBody: string;
  contactLinks: LinkEntry[];
};

export const portfolioContent: PortfolioContent = {
  name: "Nikhil R",
  status: "Available for selected collaborations",
  heroTitle: "I design product interface systems that read instantly and feel cinematic in motion.",
  intro:
    "My work centers UI/UX first: dashboards, product journeys, and visual systems shaped to stay precise under pressure, with game design informing pacing, feedback, and tension.",
  focusLabels: ["Product Interface Systems", "Experience Systems", "Game Design Depth"],
  heroStats: [
    {
      value: "03",
      label: "Launches"
    },
    {
      value: "08",
      label: "Interface studies"
    },
    {
      value: "2D/3D",
      label: "Prototype range"
    }
  ],
  heroMedia: {
    alt: "Layered UI concept board showing dashboard cards and motion studies",
    eyebrow: "Visual Lab",
    title: "Signal Desk",
    caption: "Chrome-blue interface studies built for scanning, coordination, and decision speed."
  },
  ctas: [
    {
      label: "View Work",
      href: "#featured-work"
    },
    {
      label: "Contact Me",
      href: "#contact"
    }
  ],
  featuredHeading: "Featured Work",
  projects: [
    {
      title: "Signal Desk",
      category: "UI/UX Systems",
      role: "Lead Product Designer",
      cardLabel: "Control room redesign",
      summary:
        "An image-led operations dashboard concept tuned for legibility, escalation handling, and rapid team response.",
      outcome: "Focused on information hierarchy, motion cues, and confident high-stakes workflows.",
      tags: ["Experience Systems", "Dashboards", "Interaction Flows"],
      imageAlt: "Signal Desk preview"
    },
    {
      title: "Hinterland Loop",
      category: "Game Design",
      role: "Game Designer",
      cardLabel: "Mission systems pitch",
      summary:
        "A mission-driven game pitch combining navigation tension, environmental storytelling, and layered player choice.",
      outcome: "Built around encounter pacing, progression loops, and readable systemic feedback.",
      tags: ["Systems Design", "Level Concepts", "Moment-to-Moment Play"],
      imageAlt: "Hinterland Loop preview"
    },
    {
      title: "Pulse Commerce",
      category: "UI/UX Systems",
      role: "UX Designer",
      cardLabel: "Mobile commerce sprint",
      summary:
        "A lean mobile redesign sprint rebuilt to improve task completion, lower hesitation, and keep the visual hierarchy crisp.",
      outcome: "Clarified primary actions, simplified decision points, and tightened visual rhythm.",
      tags: ["Mobile UX", "Flow Simplification", "UI Refresh"],
      imageAlt: "Pulse Commerce preview"
    }
  ],
  principles: [
    {
      title: "Readable systems",
      description:
        "Complex products and games both need interfaces that explain themselves under real use, not just in static mockups."
    },
    {
      title: "Pacing matters",
      description:
        "Good interaction design controls rhythm: when to accelerate, when to focus, and when to let the user breathe."
    },
    {
      title: "Feedback earns trust",
      description:
        "States, transitions, and micro-decisions should make outcomes legible so users and players feel in control."
    }
  ],
  aboutHeading: "About",
  aboutBody:
    "I am a UI/UX designer focused on interaction systems, visual structure, and interface pacing. Game design remains part of my toolkit, but product clarity, momentum, and emotional readability lead the work.",
  aboutHighlights: [
    {
      label: "Primary lane",
      value: "UI/UX direction"
    },
    {
      label: "Supporting lens",
      value: "Game systems thinking"
    }
  ],
  tools: [
    "Figma",
    "Framer",
    "03 Launches",
    "Illustrator",
    "Blender",
    "Unity",
    "Unreal Engine",
    "Prototype Scripting"
  ],
  contactHeading: "Start a Sharp Interface Conversation",
  contactBody:
    "Available for UI/UX design, product direction, and visual systems work. If you are shaping something interactive and need a clearer interface point of view, reach out.",
  contactLinks: [
    {
      label: "Email",
      href: "mailto:nikhil@example.com"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/"
    },
    {
      label: "GitHub",
      href: "https://github.com/"
    }
  ]
};
