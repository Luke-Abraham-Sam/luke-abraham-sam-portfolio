export interface CurrentItem {
  id: string;
  type: "CERTIFICATION" | "PROJECT";
  title: string;
  subtitle: string;
  status: "IN PROGRESS" | "IN DEVELOPMENT";
  description: string;
  tags: string[];
  expectedTimeline?: string;
}

export const currentlyBuildingData: CurrentItem[] = [
  {
    id: "aws-saa-c03",
    type: "CERTIFICATION",
    title: "AWS Certified Solutions Architect – Associate",
    subtitle: "SAA-C03",
    status: "IN PROGRESS",
    description: "Deepening cloud engineering knowledge across multi-tier AWS architectures, IAM security, compute, VPC networking, storage options, high availability, and cost optimization.",
    tags: ["AWS", "Cloud Architecture", "VPC", "IAM", "S3", "EC2"],
  },
  {
    id: "secure-cloud-storage",
    type: "PROJECT",
    title: "Role-Based Secure Cloud File Storage",
    subtitle: "Access Control & Encrypted Storage System",
    status: "IN DEVELOPMENT",
    description: "Architecting a high-security cloud file management platform utilizing AES-256-GCM symmetric encryption, JWT bearer tokens, fine-grained Role-Based Access Control (RBAC), and cryptographic audit trail verification.",
    tags: ["AES-256-GCM", "JWT", "RBAC", "AWS", "Docker", "Security", "Audit Logging"],
  },
];
