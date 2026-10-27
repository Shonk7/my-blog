// All site content lives here — edit this file to update the site.

export type Entry = { name: string; role?: string; when?: string; points: string[]; tags?: string[] };
export type SectionKey = "id" | "log" | "party" | "badges" | "guilds" | "link";
export type MenuItem = { key: SectionKey; label: string; icon: SpriteName; hint: string; intro: string };
export type SpriteName = "face" | "card" | "bot" | "log" | "star" | "mail" | "flag" | "chip" | "net" | "pipe" | "bolt" | "db";
export type BlogPostSection = { heading?: string; paragraphs: string[] };
export type BlogPost = { title: string; summary: string; sections: BlogPostSection[] };

export const GRAD_DATE = new Date("2026-12-15T00:00:00+11:00");

export const ME = {
  name: "Aryan Rajnandan",
  short: "ARYAN",
  school: "UNSW Sydney",
  degree: "BE (Electrical) / BCS",
  grad: "Dec 2026",
  focus: "SWE · Infra",
  email: "aryanradev@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-r-3a7b17201/" },
    { label: "GitHub", href: "https://github.com/Shonk7" }, 
  ],
  honours: ["Dean's List", "ADF Future Innovators Award"],
  courses: ["Data Structures", "Algorithms", "Operating Systems", "Distributed Systems", "Computer Networks", "Control Systems"],
};

export const EXPERIENCE: Entry[] = [
  { name: "Stripe", role: "Incoming · Core Performance & OS", when: "NEXT", points: [] },
  { name: "Acorn", role: "Software Engineering Intern", when: "Feb–Jul 2026", points: [
    "Full-stack features (React + Laravel) for a learning platform with 10,000+ users",
    "Backend services, REST APIs and database schemas for core workflows",
  ]},
  { name: "Microsoft", role: "SWE Intern · Azure Infrastructure", when: "Nov 2025–Feb 2026", points: [
    "Cut P95 request latency 40% by replacing remote DB calls with a local SQLite cache",
    "Traced bottlenecks through P50/P95/P99 telemetry across DB and service layers",
    "Backend optimisation in C#/.NET inside a production distributed system",
  ]},
  { name: "Transport for NSW", role: "Full Stack Developer / Data Engineer", when: "Dec 2024–Dec 2025", points: [
    "Internal tools for large-scale transport time-series data",
    "Pipelines in Python (Pandas), Node.js and SQL over high-volume datasets",
  ]},
];

export const PROJECTS: Entry[] = [
  { name: "2DOF Robotic Arm", tags: ["Control", "MATLAB"], points: [
    "Real-time control for a nonlinear electromechanical system",
    "State-space models validated in MATLAB/Simulink",
    "Stability, noise and transient response analysed on hardware",
  ]},
  { name: "Gene Dashboard", tags: ["React", "NestJS"], points: [
    "Full-stack app for the Children's Cancer Institute",
    "REST APIs and schemas for gene datasets and queries",
    "Filter, search and visualise cancer-type data",
  ]},
  { name: "UDP Header Parser", tags: ["Verilog", "FSM"], points: [
    "FSM-driven streaming parser extracting header fields",
    "Ready/valid handshaking for continuous input",
    "Pipelined for higher Fmax, latency verified in simulation",
  ]},
];

export const LEADERSHIP: Entry[] = [
  { name: "DevSoc · AnimeUNSW", role: "President, Sponsorship Director, Admin Officer", when: "2022–now", points: [
    "Led exec teams running events with 400+ attendees",
    "Sponsors including Bandai Namco, Japan Airlines and HobbyCo",
    "O-Week initiatives reaching 40,000+ students",
  ]},
  { name: "SMASH! Anime Convention", role: "Account Manager", when: "2023–2025", points: [
    "Vendor and sponsor relationships for one of Australia's largest conventions",
    "Partnerships across gaming, retail and aviation",
  ]},
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Somehow I ended up writing PHP in 2026",
    summary: "From Azure performance engineering to Laravel full-stack work, and why smaller teams changed my perspective.",
    sections: [
      {
        paragraphs: [
          "After Microsoft, I joined Acorn PLMS as a Software Engineering Intern, and somehow ended up writing PHP. In 2026.",
          "That wasn't the progression I expected after working on distributed systems performance. But Laravel was surprisingly pleasant to use.",
          "I still wouldn't call PHP my favourite language, but routing, models, validation and auth were straightforward. Compared to some Java/Spring Boot work, Laravel felt much less painful.",
        ],
      },
      {
        heading: "Building end-to-end products",
        paragraphs: [
          "One of the more interesting projects was a tenancy management tool.",
          "What made it fun was thinking about the full product, not just a page or endpoint: data model, backend behaviour, frontend UX, and how everything fits together so users don't get confused.",
          "Working across frontend and backend at the same time is one of my favourite parts of full-stack development.",
        ],
      },
      {
        heading: "Why smaller teams were refreshing",
        paragraphs: [
          "Going from Microsoft to a much smaller team was a big change. Communication was more direct, and it was easier to see how my work affected the product.",
          "Large companies have specialised resources and infrastructure. Smaller teams give you broader responsibility and tighter product feedback loops.",
          "I still care most about infrastructure and performance engineering, and PHP probably won't become my main language. But I genuinely enjoyed the Acorn experience, and that surprised me.",
        ],
      },
    ],
  },
  {
    title: "I interned at Microsoft and somehow came out hating Windows even more",
    summary: "Azure infrastructure work, caching and latency wins, and why I still prefer Unix-like systems.",
    sections: [
      {
        paragraphs: [
          "I spent the summer of 2025/26 interning at Microsoft, working on Azure infrastructure. Pretty cool, right? And to be fair, it actually was.",
          "But first: I hate Windows. Maybe I've become too comfortable with macOS and Linux, but everything about Windows feels like it's actively trying to make development harder.",
          "Yes, I know WSL exists. That still doesn't make me like Windows.",
        ],
      },
      {
        heading: "The technical work",
        paragraphs: [
          "The internship itself was genuinely interesting. I worked on distributed backend performance and latency bottlenecks.",
          "One of my main projects involved analysing telemetry and traces, then introducing a local SQLite cache in C#/.NET to reduce repeated remote lookups.",
          "Caching always sounds simple until you deal with stale data, concurrency, invalidation, and failure modes.",
          "Eventually, the optimisation reduced P95 latency by about 40%. That was one of the most satisfying outcomes: being able to point to a real metric and say I made it better.",
        ],
      },
      {
        heading: "Big-company lessons",
        paragraphs: [
          "Microsoft is enormous, and you can feel it in the process and structure. There are teams for everything, and sometimes it can feel disconnected, especially in a mostly remote internship.",
          "What I found most valuable was exposure to infrastructure at scale: network paths, caches, latency distributions, and how failures propagate through distributed components.",
          "I went in broadly interested in software engineering and came out much more interested in infrastructure and performance.",
        ],
      },
    ],
  },
  {
    title: "Working at Transport for NSW, and why I hate Spring Boot",
    summary: "My first proper software engineering job, enterprise Java pain, and what I learned from real systems.",
    sections: [
      {
        paragraphs: [
          "My first proper software engineering job was at Transport for NSW.",
          "And I think the most important thing I learnt from that experience was that I really, really do not like Spring Boot.",
          "Okay, maybe that's a bit unfair. But seriously, why does Java make everything so unnecessarily complicated?",
          "Coming from university projects where I could just write some Python or TypeScript and get something working, dealing with Java, Spring Boot and all the associated enterprise nonsense was certainly an experience.",
          "Annotations everywhere. Classes for everything. Dependency injection. Configuration files. Sometimes it felt like I was spending more time understanding how the framework wanted me to structure things than actually building the thing.",
          "I'm sure there's a reason people use it for massive enterprise applications, but that doesn't mean I have to enjoy it.",
        ],
      },
      {
        heading: "What I actually enjoyed",
        paragraphs: [
          "Fortunately, I wasn't exclusively writing Java.",
          "A fairly significant part of my work involved building internal analytics and data visualisation tools, particularly MobilityIQ, which used React and FastAPI.",
          "This was much more my thing. I enjoyed being able to work across the stack, from processing and exposing data through backend APIs to actually building the interface people interacted with.",
          "One thing I particularly liked was that the software wasn't just some random university assignment that nobody would ever touch again. There were actual stakeholders, actual requirements, and people who wanted to use what we were building.",
        ],
      },
      {
        heading: "Office life and real-world engineering",
        paragraphs: [
          "I also got my first real introduction to office culture: meetings, more meetings, and figuring out who actually owns a particular part of a system.",
          "Despite all the bureaucracy that comes with a large organisation, I learnt a ridiculous amount.",
          "It was my first real exposure to maintaining existing systems rather than just building from scratch. I learnt how to work with other engineers, navigate large codebases, and deal with software that had accumulated years of decisions made by people I'd never met.",
          "Would I voluntarily choose Spring Boot for my next personal project? Absolutely not. But would I go back and do the experience again? Definitely.",
        ],
      },
    ],
  },
];

export const SKILL_BADGES: { icon: SpriteName; label: string }[] = [
  { icon: "chip", label: "OS & Kernels" },
  { icon: "net", label: "Networking" },
  { icon: "bolt", label: "Low Latency" },
  { icon: "pipe", label: "Data Pipelines" },
  { icon: "db", label: "Distributed Sys" },
  { icon: "bot", label: "HW / FPGA" },
];
export const LANGUAGES = ["C/C++", "C#", "Python", "Go", "Java", "TypeScript", "SQL", "PHP", "Verilog"];
export const TOOLS = ["Linux", "Git", "AWS", ".NET", "React", "FastAPI", "PostgreSQL", "SQLite", "Wireshark", "MATLAB"];

export const MENU: MenuItem[] = [
  { key: "id", label: "PROFILE", icon: "face", hint: "About me, study and focus.", intro: "Hi, I'm Aryan. EE + CS at UNSW." },
  { key: "log", label: "EXPERIENCE", icon: "card", hint: "Internships and industry work.", intro: "Experience across infra, data and full-stack." },
  { key: "party", label: "PROJECTS", icon: "bot", hint: "Things I've built.", intro: "From FPGAs to full-stack systems." },
  { key: "badges", label: "SKILLS", icon: "star", hint: "Languages, tools and technical strengths.", intro: "Systems, networks, and making software faster." },
  { key: "guilds", label: "BLOG", icon: "log", hint: "Engineering notes and internship write-ups.", intro: "Honest takes from Transport, Microsoft and Acorn." },
  { key: "link", label: "CONTACT", icon: "mail", hint: "Links, profiles and email.", intro: "Open to SWE and infra roles. Say hi!" },
];
