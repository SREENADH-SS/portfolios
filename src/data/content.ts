export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  description: string;
  image: string;
  architectureDetails: {
    problem: string;
    solution: string;
    highlights: string[];
    security: string[];
  };
  technologies: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillGroup {
  category: string;
  subtitle: string;
  description: string;
  skills: { name: string; level: string; tag: string }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'work' | 'education' | 'certification';
  summary: string;
  achievements: string[];
  tags: string[];
}

export const PROFILE = {
  name: "Sreenadh S.S",
  brand: "SREENADH",
  edition: "SIGNATURE ATELIER // EDITION 2025",
  tagline: "JAVA FULL STACK ARCHITECT & DIGITAL CRAFTSMAN",
  role: "Java Full Stack Developer",
  location: "Kerala, India",
  timezone: "UTC+5:30 (IST)",
  availability: "AVAILABLE FOR SELECT OPPORTUNITIES",
  heroHeadline: [
    "Building digital experiences",
    "with code & creativity."
  ],
  heroSubheadline: "I'm Sreenadh, a Java Full Stack Developer based in Kerala, India. I specialize in building reliable enterprise web applications with Java, Spring Boot, and modern React.",
  bio: {
    p1: "I am a full-stack engineer and digital architect based in Kerala, India. My engineering discipline centers on building robust enterprise systems with Java 21, Spring Boot microservices, Spring Security, transactional SQL/NoSQL schema modeling, and high-performance RESTful APIs.",
    p2: "On the client surface, I create serene, luxury editorial web experiences with modern React, TypeScript, and fine-tuned motion systems. I treat software development like a luxury atelier—where architectural integrity meets the calm, unhurried visual restraint of an architectural magazine.",
    philosophy: "Exceptional digital work requires neither visual chaos nor compromise. It is the natural consequence of rigorous architectural standards, structural consistency, and generous negative space.",
    currentFocus: "Currently architecting event-driven microservices, granular Spring Security RBAC workflows, and zero-compromise responsive interface ergonomics.",
  },
  contact: {
    email: "sreenadh.dev@gmail.com",
    github: "https://github.com/sreenadh",
    linkedin: "https://linkedin.com/in/sreenadh",
    location: "Kerala, India",
    status: "Accepting engineering inquiries",
  }
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "c4secure",
    number: "01",
    title: "C4Secure Platform",
    tagline: "Enterprise CCTV & Physical Security Infrastructure Management",
    category: "Full-Stack Security Infrastructure",
    year: "2024",
    description: "An end-to-end security operations and hardware management platform connecting clients, security technicians, and real-time inventory systems. Features secure role-based access control, cryptographic verification, automated installation scheduling, and media delivery.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=85",
    architectureDetails: {
      problem: "Traditional commercial security installations struggle with disjointed technician dispatches, opaque quotes, vulnerable multi-tenant credential management, and fragmented camera asset registries.",
      solution: "Architected a unified Java Spring Boot micro-monolith with Spring Security stateless JWT authentication, MySQL transactional integrity, automated service job lifecycle scheduling, and Cloudinary media pipelines.",
      highlights: [
        "Granular Role-Based Access Control (RBAC) separating Admins, Field Technicians, and Clients",
        "Hardware discovery catalog with live inventory tracking and dynamic quotation calculator",
        "Automated installation appointment dispatcher with calendar slot reservation & conflict prevention",
        "Encrypted media delivery via Cloudinary API with signed asset storage and tamper detection",
        "Reactive operational console with real-time audit logs and notification dispatches"
      ],
      security: [
        "BCrypt password hashing with high work factor",
        "Stateless JWT tokens with strict claim validation and renewal rotators",
        "CORS and CSRF attack vector shields with custom filter chains",
        "SQL injection mitigation via Hibernate parameterized queries and criteria builders"
      ]
    },
    technologies: ["Java 21", "Spring Boot", "Spring Security", "React", "MySQL", "Hibernate JPA", "Cloudinary", "REST APIs"],
    metrics: [
      { label: "Architecture", value: "Spring Boot + React" },
      { label: "Auth Latency", value: "< 24ms JWT" },
      { label: "Data Integrity", value: "ACID Guaranteed" },
      { label: "Security", value: "Zero Trust RBAC" },
    ],
    liveUrl: "https://c4secure.demo.internal",
    githubUrl: "https://github.com/sreenadh/c4secure-platform",
    featured: true,
    accentColor: "#D4AF37",
  },
  {
    id: "nexus-engine",
    number: "02",
    title: "Nexus Commerce Core",
    tagline: "High-Throughput Distributed Storefront & Order Event Stream",
    category: "E-Commerce Core & Order Pipeline",
    year: "2024",
    description: "An architectural prototype demonstrating high-concurrency cart processing, inventory lock mechanisms, and persistent order state transition graphs with relational integrity.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    architectureDetails: {
      problem: "Flash checkout surges cause database deadlocks, stale stock reads, and payment state divergence in conventional monolithic retail scripts.",
      solution: "Engineered transactional isolation strategies using Spring JPA pessimistic and optimistic locking, PostgreSQL ACID compliance, and reactive frontend polling updates.",
      highlights: [
        "Optimistic locking mechanism on stock inventories preventing checkout collisions",
        "Idempotent payment webhook ingestion system with replay defense",
        "Instant multi-faceted product filtering powered by composite relational indices",
        "Clean architectural boundary separating domain business rules from HTTP controllers"
      ],
      security: [
        "Tamper-proof payload signature verification on incoming webhooks",
        "Strict input validation using Jakarta Validation annotations & Zod schemas",
        "Role-isolated administrative controls for catalog modification and sales auditing"
      ]
    },
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Tailwind CSS", "Docker"],
    metrics: [
      { label: "Throughput", value: "Zero Race Checkouts" },
      { label: "Database", value: "PostgreSQL 16" },
      { label: "State Sync", value: "Real-time" },
      { label: "Coverage", value: "Unit & Integration" },
    ],
    liveUrl: "https://nexus.demo.internal",
    githubUrl: "https://github.com/sreenadh/nexus-commerce",
    featured: true,
    accentColor: "#D4AF37",
  },
  {
    id: "lumina-interactive",
    number: "03",
    title: "Lumina Digital Atelier",
    tagline: "Editorial Design Systems & Kinetic Micro-Interaction Engine",
    category: "Creative Technology & Motion Ergonomics",
    year: "2023",
    description: "A showcase of artistic web interactions exploring typographic momentum, custom masked reveals, Lenis inertia physics, and accessible motion choreography.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    architectureDetails: {
      problem: "Creative websites often compromise mobile usability, introduce severe layout shifts, or sacrifice 60 FPS performance on standard hardware.",
      solution: "Built a modular motion system leveraging GPU-accelerated CSS transforms, requestAnimationFrame delta capping, and automatic reduced-motion fallbacks.",
      highlights: [
        "Custom cursor dynamics with magnetic attraction to interactive anchor nodes",
        "Fluid typography equations with mathematically constrained bounds",
        "GSAP ScrollTrigger timeline scrubbing with hardware-accelerated transforms",
        "Seamless zero-flicker routing and dynamic viewport height normalization"
      ],
      security: [
        "Strict Content Security Policy headers",
        "Zero external tracking scripts or render-blocking dependencies"
      ]
    },
    technologies: ["React", "TypeScript", "GSAP ScrollTrigger", "Lenis", "Motion", "Tailwind CSS"],
    metrics: [
      { label: "Frame Rate", value: "60 FPS Locked" },
      { label: "Accessibility", value: "A11y Compliant" },
      { label: "Page Weight", value: "< 240KB Gzip" },
      { label: "Interactivity", value: "Magnetic Physics" },
    ],
    liveUrl: "https://lumina.demo.internal",
    githubUrl: "https://github.com/sreenadh/lumina-atelier",
    featured: true,
    accentColor: "#D4AF37",
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "BACKEND ARCHITECTURE",
    subtitle: "Enterprise Reliability & Data Pipelines",
    description: "Designing resilient server-side services with clean boundaries, domain-driven models, and strict security standards.",
    skills: [
      { name: "Java (17 / 21)", level: "Advanced", tag: "Language Core" },
      { name: "Spring Boot 3", level: "Advanced", tag: "Application Framework" },
      { name: "Spring Security", level: "Proficient", tag: "RBAC & OAuth2 / JWT" },
      { name: "Hibernate / JPA", level: "Advanced", tag: "ORM & Optimization" },
      { name: "RESTful API Design", level: "Advanced", tag: "Contract-first APIs" },
      { name: "Microservice Concepts", level: "Intermediate", tag: "Decoupled Architecture" },
    ]
  },
  {
    category: "FRONTEND ENGINEERING",
    subtitle: "Editorial Interfaces & Motion Ergonomics",
    description: "Crafting fluid, intuitive client-side applications with strict type safety, modular state, and tactile feedback.",
    skills: [
      { name: "React.js", level: "Advanced", tag: "Component Architecture" },
      { name: "TypeScript", level: "Advanced", tag: "Strict Type Safety" },
      { name: "JavaScript (ESNext)", level: "Advanced", tag: "Modern Core" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Design Systems" },
      { name: "Motion for React", level: "Advanced", tag: "Micro-interactions" },
      { name: "GSAP & ScrollTrigger", level: "Proficient", tag: "Kinetic Timelines" },
    ]
  },
  {
    category: "DATA PERSISTENCE & SCHEMAS",
    subtitle: "Relational & Document Storage",
    description: "Architecting normalized database schemas, index tuning, and resilient transactions for zero data loss.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", tag: "Relational Engine" },
      { name: "MySQL", level: "Advanced", tag: "Transactional Integrity" },
      { name: "MongoDB", level: "Proficient", tag: "Document Stores" },
      { name: "Schema Modeling", level: "Advanced", tag: "ERD & Normalization" },
      { name: "Query Optimization", level: "Proficient", tag: "Indexing & Tuning" },
    ]
  },
  {
    category: "DEVOPS, TOOLS & PIPELINES",
    subtitle: "Containerization & Developer Workflow",
    description: "Ensuring reproducible environments, continuous verification, and rapid deployment velocity.",
    skills: [
      { name: "Docker", level: "Proficient", tag: "Containerization" },
      { name: "Git & GitHub", level: "Advanced", tag: "Version Control" },
      { name: "Postman", level: "Advanced", tag: "API Verification" },
      { name: "IntelliJ IDEA", level: "Advanced", tag: "Primary Development IDE" },
      { name: "Maven / Gradle", level: "Proficient", tag: "Build Orchestration" },
      { name: "Cloudinary API", level: "Proficient", tag: "Asset Optimization" },
    ]
  }
];

export const TIMELINE_ITEMS: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2023 — Present",
    role: "Full-Stack Software Development",
    organization: "Independent Practice & Engineering Projects",
    location: "Kerala, India",
    type: "work",
    summary: "Architecting end-to-end web applications with enterprise Java backends and modern React interfaces. Designing full-stack architectures including C4Secure, an enterprise security management platform.",
    achievements: [
      "Engineered C4Secure platform using Spring Boot, Spring Security, React, and MySQL with zero security vulnerabilities",
      "Designed clean modular codebases following SOLID principles, contract-first REST specifications, and automated validations",
      "Implemented seamless full-stack state coordination and client-side performance optimizations"
    ],
    tags: ["Java", "Spring Boot", "Spring Security", "React", "PostgreSQL", "Architecture"]
  },
  {
    id: "exp-2",
    period: "Previous Engagement",
    role: "Digital Marketing Executive",
    organization: "ProCubiz Infotech",
    location: "India",
    type: "work",
    summary: "Led cross-functional digital optimization, tracking user journeys, and applying data-backed adjustments to improve conversion velocity and web funnel performance.",
    achievements: [
      "Collaborated with technical teams to optimize site architectures and technical engagement metrics",
      "Analyzed web interaction telemetry to improve user retention and organic traffic pathways",
      "Bridged business communication between stakeholders and software deliverables"
    ],
    tags: ["Product Optimization", "Web Funnels", "Conversion Strategy", "Data Analysis"]
  },
  {
    id: "exp-3",
    period: "Previous Engagement",
    role: "SEO Analyst",
    organization: "Stackup Learning Hub",
    location: "India",
    type: "work",
    summary: "Executed in-depth website audits, technical architecture assessments, metadata structuring, and algorithmic search optimization.",
    achievements: [
      "Conducted Core Web Vitals profiling, markup schema structuring, and asset latency remediation",
      "Implemented semantic HTML standards across key user touchpoints to elevate crawlability"
    ],
    tags: ["Technical Audits", "Core Web Vitals", "Information Architecture", "Performance"]
  },
  {
    id: "edu-1",
    period: "Degree",
    role: "Bachelor of Commerce — Computer Application (B.Com CA)",
    organization: "University Education",
    location: "Kerala, India",
    type: "education",
    summary: "Four-year undergraduate program integrating commercial operations, business computing, database fundamentals, algorithms, and software development methodologies.",
    achievements: [
      "Rigorous coursework in computational systems, relational database architecture, and business applications",
      "Capstone projects bridging commercial transactional workflows with automated software"
    ],
    tags: ["Computer Applications", "Database Management", "Systems Analysis", "Software Fundamentals"]
  }
];

export const MARQUEE_ITEMS = [
  "JAVA 21",
  "SPRING BOOT",
  "SPRING SECURITY",
  "REACT.JS",
  "TYPESCRIPT",
  "POSTGRESQL",
  "MYSQL",
  "MONGODB",
  "HIBERNATE JPA",
  "REST APIS",
  "DOCKER",
  "JWT SECURITY",
  "C4SECURE",
  "GSAP"
];
