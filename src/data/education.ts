export interface EducationItem {
  id: string;
  yearRange: string;
  endYear: number;
  institution: string;
  collegeName?: string;
  degree: string;
  field?: string;
  boardOrStream?: string;
  location: string;
  highlights: string[];
  isCurrent?: boolean;
}

export const educationData: EducationItem[] = [
  {
    id: "btech-jntuh",
    yearRange: "2023 — 2027",
    endYear: 2027,
    institution: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    collegeName: "TKR College of Engineering and Technology",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    location: "Hyderabad, Telangana, India",
    highlights: [
      "Final-year CSE student specializing in software engineering, cloud systems, and AI",
      "Rigorous coursework in Data Structures, Algorithms, DBMS, Operating Systems, Networks, and OOP",
      "Active participant in technical projects and collaborative engineering initiatives"
    ],
    isCurrent: true,
  },
  {
    id: "intermediate-sri-chaitanya",
    yearRange: "2021 — 2023",
    endYear: 2023,
    institution: "Sri Chaitanya JR Kalasala",
    collegeName: "Uppal Branch",
    degree: "Intermediate Education (10+2)",
    boardOrStream: "MPC (Mathematics, Physics, Chemistry)",
    location: "Hyderabad, Telangana, India",
    highlights: [
      "Completed Senior Secondary education with focus on advanced Mathematics, Physics, and Chemistry",
      "Developed strong analytical mindset and problem-solving fundamentals"
    ],
  },
  {
    id: "secondary-hps",
    yearRange: "2011 — 2021",
    endYear: 2021,
    institution: "The Hyderabad Public School",
    collegeName: "Ramanthapur",
    degree: "Secondary School Education (Class X)",
    boardOrStream: "CBSE Board",
    location: "Hyderabad, Telangana, India",
    highlights: [
      "Completed a foundational 10-year education at one of Hyderabad's premier institutions",
      "Completed CBSE Class X board examinations with distinction",
      "Participated actively in school leadership, sports, and team activities"
    ],
  },
];
