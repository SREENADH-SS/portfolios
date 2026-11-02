export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  theme: 'security' | 'ecommerce' | 'creative';
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
}

export const PERSONAL_INFO = {
  name: "Sreenadh S.S",
  brandName: "SREENADH®",
  role: "Java Full Stack Developer",
  location: "India",
  status: "AVAILABLE FOR OPPORTUNITIES",
  headline: {
    line1: "Building digital",
    line2: "experiences with",
    line3: "code & creativity.",
  },
  bio: "I'm Sreenadh, a developer focused on building reliable web applications with Java, Spring Boot, React, and thoughtful user experiences.",
  about: {
    lead: "I'm a developer who enjoys turning ideas into practical, well-designed web applications. My interests span Java backend development, modern frontend experiences, and understanding how applications work from end to end.",
    philosophy: "I believe that great software lives at the intersection of robust architectural integrity and effortless user experience. Clean code and thoughtful design aren't contradictory goals—they elevate each other.",
    learning: "Currently sharpening distributed systems knowledge, container orchestration with Docker & Kubernetes, and deeper microservice architecture patterns.",
  },
  contact: {
    heading: "Have something\ngood in mind?",
    subheading: "I'm always interested in meaningful projects, new opportunities, and conversations about technology.",
    email: "sreenadh.dev@example.com", // Editable email placeholder
    github: "https://github.com",       // Editable GitHub URL
    linkedin: "https://linkedin.com",   // Editable LinkedIn URL
    resumeUrl: "#resume",               // Editable Resume link
  },
};

export const PROJECTS: Project[] = [
  {
    id: "c4secure",
    number: "01",
    title: "C4Secure — Security & E-Commerce Platform",
    category: "Enterprise Full Stack",
    description: "A full-stack security solutions platform featuring product discovery, secure authentication, purchase workflows, installation scheduling, and notifications.",
    longDescription: "Engineered with Spring Boot and Spring Security for role-based access control and JWT authentication, backed by MySQL for transactional consistency, with a responsive React dashboard for scheduling and inventory management.",
    technologies: ["Java", "Spring Boot", "Spring Security", "React", "MySQL", "REST APIs"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com/c4secure",
    featured: true,
    theme: "security",
  },
  {
    id: "nexus-commerce",
    number: "02",
    title: "Nexus Commerce — Modern Storefront Engine",
    category: "Full Stack Architecture",
    description: "A high-performance modern e-commerce application featuring dynamic catalog navigation, persistent state cart management, streamlined checkout workflows, and administrative analytics.",
    longDescription: "Built with modular Java REST endpoints, resilient state management in React, and clean schema design for inventory tracking and order lifecycle events.",
    technologies: ["Java", "Spring Boot", "Hibernate / JPA", "React", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com/ecommerce",
    featured: true,
    theme: "ecommerce",
  },
  {
    id: "lumina-lab",
    number: "03",
    title: "Lumina Studio — Creative Frontend Experience",
    category: "Motion & Interaction Design",
    description: "An experimental interactive web experience showcasing fluid typography, micro-interactions, responsive editorial layouts, and smooth gesture transitions.",
    longDescription: "Exploration of modern motion ergonomics, custom cursor dynamics, and accessible layout shifts adhering to strict 60fps performance budgets.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion", "GSAP ScrollTrigger"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com/lumina",
    featured: true,
    theme: "creative",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "BACKEND",
    items: ["Java", "Spring Boot", "Spring Security", "Hibernate / JPA", "REST APIs"],
  },
  {
    category: "FRONTEND",
    items: ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "DATABASES & TOOLS",
    items: ["MySQL", "PostgreSQL", "Git", "GitHub", "Swagger / OpenAPI"],
  },
  {
    category: "EXPLORING",
    items: ["Docker", "Kubernetes", "System Design"],
  },
];

export const TIMELINE: ExperienceItem[] = [
  {
    id: "exp-1",
    type: "experience",
    title: "Digital Marketing Executive",
    organization: "ProCubiz Infotech",
    period: "Previous Role",
    description: "Analyzed audience interactions, optimized conversion paths, and collaborated with cross-functional teams to drive digital campaign performance.",
    tags: ["Strategy", "Analytics", "Digital Solutions"],
  },
  {
    id: "exp-2",
    type: "experience",
    title: "SEO Analyst",
    organization: "Stackup Learning Hub",
    period: "Previous Role",
    description: "Performed technical website audits, search architecture assessments, and data-driven content optimization to elevate search visibility.",
    tags: ["Search Optimization", "Technical Audits", "Performance"],
  },
  {
    id: "edu-1",
    type: "education",
    title: "B.Com Computer Application",
    organization: "University Education",
    period: "Undergraduate Degree",
    description: "Comprehensive foundation blending commercial and business principles with software applications, database fundamentals, and computer programming.",
    tags: ["Computer Applications", "Information Systems", "Business Computing"],
  },
];

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
