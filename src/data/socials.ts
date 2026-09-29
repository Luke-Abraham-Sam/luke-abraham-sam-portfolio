export interface SocialLink {
  name: string;
  label: string;
  url: string;
  iconName: string;
  displayValue?: string;
  isAction?: boolean;
}

export const socialsData: Record<string, SocialLink> = {
  linkedIn: {
    name: "LinkedIn",
    label: "Connect on LinkedIn",
    url: "https://www.linkedin.com/in/luke-abraham-sam-ba71332b2/",
    iconName: "Linkedin",
    displayValue: "luke-abraham-sam",
  },
  gitHub: {
    name: "GitHub",
    label: "Explore GitHub",
    url: "https://github.com/Luke-Abraham-Sam",
    iconName: "Github",
    displayValue: "Luke-Abraham-Sam",
  },
  leetCode: {
    name: "LeetCode",
    label: "View LeetCode Profile",
    url: "https://leetcode.com/u/lukabrsam05/",
    iconName: "Code2",
    displayValue: "lukabrsam05",
  },
  email: {
    name: "Email",
    label: "Email Me",
    url: "mailto:lukabrsam05@gmail.com",
    iconName: "Mail",
    displayValue: "lukabrsam05@gmail.com",
    isAction: true,
  },
  phone: {
    name: "Phone",
    label: "Call Me",
    url: "tel:+919100502254",
    iconName: "Phone",
    displayValue: "+91 91005 02254",
    isAction: true,
  },
};
