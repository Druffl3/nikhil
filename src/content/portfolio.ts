export type ProjectEntry = {
  title: string;
  category: string;
  role: string;
  summary: string;
  outcome: string;
  tags: string[];
};

export type PrincipleEntry = {
  title: string;
  description: string;
};

export type LinkEntry = {
  label: string;
  href: string;
};

export type PortfolioContent = {
  name: string;
  status: string;
  heroTitle: string;
  intro: string;
  ctas: LinkEntry[];
  featuredHeading: string;
  projects: ProjectEntry[];
  principles: PrincipleEntry[];
  aboutHeading: string;
  aboutBody: string;
  tools: string[];
  contactHeading: string;
  contactBody: string;
  contactLinks: LinkEntry[];
};

export const portfolioContent: PortfolioContent = {
  name: "Nikhil R",
  status: "UI/UX Designer + Game Designer",
  heroTitle: "Designing interfaces, systems, and play that feel sharp under pressure.",
  intro:
    "I build product experiences and game concepts with a systems-first mindset, balancing clarity, pacing, and emotional payoff across every interaction.",
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
      title: "Operations Dashboard Concept",
      category: "UI/UX",
      role: "Lead Product Designer",
      summary:
        "A dense monitoring and decision-making interface shaped for speed, scanability, and confident operator action.",
      outcome: "Focused on information hierarchy, alert handling, and smoother high-stakes workflows.",
      tags: ["Design Systems", "Dashboards", "Interaction Flows"]
    },
    {
      title: "Tactical Exploration Game Pitch",
      category: "Game Design",
      role: "Game Designer",
      summary:
        "A mission-driven concept combining navigation tension, environmental storytelling, and layered player choice.",
      outcome: "Built around encounter pacing, progression loops, and readable systemic feedback.",
      tags: ["Systems Design", "Level Concepts", "Moment-to-Moment Play"]
    },
    {
      title: "Mobile Feature Redesign Sprint",
      category: "UI/UX",
      role: "UX Designer",
      summary:
        "A lean redesign pass for a cluttered mobile workflow, rebuilt to improve task completion and reduce hesitation.",
      outcome: "Clarified primary actions, simplified decision points, and tightened visual rhythm.",
      tags: ["Mobile UX", "Flow Simplification", "Usability"]
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
    "I am a designer interested in the overlap between product clarity and game feel. My work focuses on interaction systems, interface structure, and the moment-to-moment decisions that shape user and player experience.",
  tools: [
    "Figma",
    "Framer",
    "Illustrator",
    "Blender",
    "Unity",
    "Unreal Engine",
    "Prototype Scripting"
  ],
  contactHeading: "Let's Build Something Sharp",
  contactBody:
    "I am open to UI/UX, game design, and collaborative concept work. If you are building something interactive, I would like to hear about it.",
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
