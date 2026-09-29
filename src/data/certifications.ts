export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  date: string;
  status: "COMPLETED" | "IN PROGRESS";
  category?: string;
  verifyUrl?: string;
  skillsAcquired?: string[];
}

export const certificationsData: Certification[] = [
  {
    id: "servicenow-vip",
    title: "Virtual Internship Program",
    issuer: "ServiceNow",
    credentialId: "SNU2013998",
    date: "04/2026",
    status: "COMPLETED",
    category: "Cloud & Enterprise Platforms",
    skillsAcquired: ["ServiceNow Development", "IT Service Management", "Workflow Automation"],
  },
  {
    id: "salesforce-agentforce",
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    credentialId: "7306224",
    date: "12/2025",
    status: "COMPLETED",
    category: "AI & Autonomous Agents",
    skillsAcquired: ["Agentforce Architecture", "Autonomous AI Agents", "Salesforce Platform"],
  },
  {
    id: "nptel-python-ds",
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "10/2025",
    status: "COMPLETED",
    category: "Data Science & Python",
    skillsAcquired: ["Data Analysis", "NumPy & Pandas", "Scientific Computing"],
  },
  {
    id: "forage-tata-esg",
    title: "Tata Group - ESG Job Simulation",
    issuer: "Forage",
    date: "04/2025",
    status: "COMPLETED",
    category: "Industry Simulation",
    skillsAcquired: ["Environmental Data Analysis", "Corporate ESG Frameworks", "Strategic Reporting"],
  },
  {
    id: "google-data-foundations",
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    date: "10/2024",
    status: "COMPLETED",
    category: "Data Analytics",
    skillsAcquired: ["Data Ecosystems", "Analytical Thinking", "Data Lifecycle"],
  },
  {
    id: "aws-saa-c03-cert",
    title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    issuer: "Amazon Web Services (AWS)",
    date: "Target 2026",
    status: "IN PROGRESS",
    category: "Cloud Infrastructure",
    skillsAcquired: ["Distributed Systems", "Cloud Security", "VPC & Storage Architecture"],
  },
];
