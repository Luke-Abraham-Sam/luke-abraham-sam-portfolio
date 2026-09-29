export interface Project {
  id: string;
  number: string;
  title: string;
  fullTitle: string;
  date: string;
  status: "COMPLETED" | "IN PROGRESS";
  statusDisplay: "COMPLETED" | "IN DEVELOPMENT";
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  authentication?: string;
  authorization?: string;
  deployment?: string;
  githubUrl: string | null;
  liveUrl: string | null;
  accentColor?: string;
}

export const projectsData: Project[] = [
  {
    id: "carepulse",
    number: "01",
    title: "CarePulse Healthcare",
    fullTitle: "CarePulse Healthcare – Hospital Appointment & Queue Management System",
    date: "09/2026",
    status: "COMPLETED",
    statusDisplay: "COMPLETED",
    shortDescription: "A comprehensive MERN-based hospital management system featuring multi-role portals for patients, doctors, and administrators with intelligent queue handling.",
    overview: "CarePulse Healthcare is an enterprise-level clinical workflow platform engineered using the MERN stack. It resolves complex healthcare scheduling challenges by connecting patients, physicians, and clinical staff through role-tailored dashboards.",
    problem: "Traditional healthcare facilities struggle with overlapping appointment slots, unorganized waiting rooms, manual queue tracking, and unverified multi-tier data access.",
    solution: "CarePulse introduces algorithmic 30-minute slot scheduling with automated double-booking prevention, dynamic priority queue ranking, and strict Role-Based Access Control (RBAC) powered by JWT tokens.",
    technologies: [
      "MERN Stack",
      "MongoDB Atlas",
      "React.js",
      "Node.js",
      "Express.js",
      "JWT",
      "RBAC",
      "REST APIs",
      "Render",
    ],
    features: [
      "30-minute appointment scheduling with real-time conflict detection",
      "Double-booking prevention algorithm ensuring slot integrity",
      "Priority-based dynamic patient queues for clinical efficiency",
      "JWT multi-role authentication & Role-Based Access Control (RBAC)",
      "Dedicated Patient, Doctor, and Administrator management portals",
      "RESTful API backend integrated with cloud-hosted MongoDB Atlas",
      "Production deployment hosted on Render infrastructure",
    ],
    authentication: "JSON Web Tokens (JWT) with secure HTTP headers and token validation.",
    authorization: "Fine-grained Role-Based Access Control (RBAC) isolating Patient, Doctor, and Admin resources.",
    deployment: "Automated continuous delivery hosted on Render cloud platform.",
    githubUrl: "https://github.com/Luke-Abraham-Sam/hospital-management-system",
    liveUrl: "https://carepulse-frontend-p7us.onrender.com",
    accentColor: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "secure-cloud-storage",
    number: "02",
    title: "Secure Cloud Storage Platform",
    fullTitle: "Role-Based Secure Cloud File Storage and Access Control System",
    date: "07/2026 – Present",
    status: "IN PROGRESS",
    statusDisplay: "IN DEVELOPMENT",
    shortDescription: "Developing a zero-trust secure cloud storage architecture utilizing AES-256-GCM symmetric encryption, JWT token management, and audit logging.",
    overview: "An ongoing cloud security project focused on constructing an encrypted, enterprise-grade file repository. The system guarantees cryptographic confidentiality, tamper detection, and granular access rights.",
    problem: "Standard cloud file storage systems often lack client-side or payload-level encryption and robust cryptographic audit trails against unauthorized insider access.",
    solution: "Implementing authenticated AES-256-GCM encryption for all stored assets, coupled with checksum integrity verification, explicit ownership access enforcement, and containerized deployment.",
    technologies: [
      "AES-256-GCM",
      "JWT",
      "RBAC",
      "AWS",
      "Docker",
      "Secure File Storage",
      "Integrity Verification",
      "Audit Logging",
    ],
    features: [
      "AES-256-GCM symmetric payload encryption before storage persistence",
      "Ownership-based access controls ensuring strict file isolation",
      "Cryptographic SHA integrity checks to detect file tampering",
      "Immutable security audit logging for compliance verification",
      "Containerized microservices topology using Docker containers",
      "Integration with AWS Cloud Storage infrastructure",
    ],
    authentication: "Stateless JWT token verification with key rotation capabilities.",
    authorization: "Strict role enforcement verifying user identity against object ownership.",
    deployment: "Targeted for AWS cloud environment packaged with Docker.",
    githubUrl: null,
    liveUrl: null,
    accentColor: "from-indigo-500/20 to-purple-500/20",
  },
];
