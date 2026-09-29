export interface ProfileData {
  name: string;
  fullName: string;
  role: string;
  subRoles: string[];
  headline: string;
  bio: string;
  summary: string[];
  location: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  university: string;
  college: string;
  degree: string;
  field: string;
  graduationYear: string;
  cgpa: string;
  cgpaStatus: string;
  studentStatus: string;
  profilePhoto: string;
}

export const profileData: ProfileData = {
  name: "Luke Abraham Sam",
  fullName: "LUKE ABRAHAM SAM",
  role: "Computer Science Engineering Student",
  subRoles: [
    "Software Developer",
    "Cloud & Security Enthusiast",
    "AI & Full-Stack Developer",
  ],
  headline: "Building with software, cloud, security and AI.",
  bio: "Final-year B.Tech Computer Science & Engineering student at JNTUH (TKR College of Engineering and Technology) passionate about full-stack engineering, cloud architecture, cybersecurity, and AI solutions.",
  summary: [
    "Final-year B.Tech Computer Science and Engineering student with a strong sense of ownership, leadership, and teamwork.",
    "Confident communicator with strong analytical and problem-solving abilities, comfortable taking initiative and working effectively in diverse teams.",
    "Eager to contribute, learn quickly, and take on challenging responsibilities in a professional environment."
  ],
  location: "Hyderabad, India",
  city: "Hyderabad",
  country: "India",
  email: "lukabrsam05@gmail.com",
  phone: "+91 91005 02254",
  phoneDisplay: "+91 91005 02254",
  university: "Jawaharlal Nehru Technological University Hyderabad",
  college: "TKR College of Engineering and Technology",
  degree: "B.Tech",
  field: "Computer Science & Engineering",
  graduationYear: "2027",
  cgpa: "7.44 / 10",
  cgpaStatus: "Through 6th Semester",
  studentStatus: "Final-Year Student",
  profilePhoto: "/images/profile/luke-abraham-sam.jpg",
};
