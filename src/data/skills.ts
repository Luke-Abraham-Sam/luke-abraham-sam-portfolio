export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    status?: "COMPLETED" | "IN PROGRESS";
    highlight?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for algorithms, backend systems, and high-performance computing.",
    skills: [
      { name: "Java", highlight: true },
      { name: "Python", highlight: true },
      { name: "C++", highlight: true },
      { name: "SQL", highlight: true },
    ],
  },
  {
    title: "Web Development & MERN Stack",
    description: "Full-stack web architecture, REST APIs, and database engineering.",
    skills: [
      { name: "MongoDB", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "React.js", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "MERN Stack", highlight: true },
      { name: "REST APIs" },
    ],
  },
  {
    title: "AI, Data & Ecosystems",
    description: "Artificial Intelligence, data analysis, and modern autonomous agent platforms.",
    skills: [
      { name: "AI/ML", highlight: true },
      { name: "Data Analysis" },
      { name: "Salesforce" },
      { name: "Agentforce" },
      { name: "Agentic AI Fundamentals", highlight: true },
    ],
  },
  {
    title: "Core Computer Science",
    description: "Foundational CS principles, software architecture, and systems engineering.",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Object-Oriented Programming (OOP)", highlight: true },
      { name: "Database Management Systems (DBMS)" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
    ],
  },
  {
    title: "Cloud & Security Architecture",
    description: "Cloud infrastructure design, security protocols, and containerization.",
    skills: [
      {
        name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
        status: "IN PROGRESS",
        highlight: true,
      },
      { name: "Docker" },
      { name: "Role-Based Access Control (RBAC)" },
      { name: "AES-256-GCM Encryption" },
    ],
  },
  {
    title: "Core Competencies & Leadership",
    description: "Professional effectiveness, technical delivery, and collaborative execution.",
    skills: [
      { name: "Analytical Problem Solving", highlight: true },
      { name: "Technical Communication" },
      { name: "Cross-functional Leadership" },
      { name: "Team Collaboration" },
    ],
  },
];
