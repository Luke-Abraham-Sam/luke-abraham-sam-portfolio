import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CurrentlyBuilding } from "@/components/CurrentlyBuilding";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { EducationSection } from "@/components/EducationSection";
import { ProblemSolvingSection } from "@/components/ProblemSolvingSection";
import { GitHubSection } from "@/components/GitHubSection";
import { ProfessionalPresenceSection } from "@/components/ProfessionalPresenceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-blue-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* 01 — Hero */}
      <Hero />

      {/* 02 — About & Quick Profile */}
      <AboutSection />

      {/* 03 — Skills & Stack */}
      <SkillsSection />

      {/* 04 — Currently Building & Learning */}
      <CurrentlyBuilding />

      {/* 05 — Projects Showcase */}
      <ProjectsSection />

      {/* 06 — Certifications */}
      <CertificationsSection />

      {/* 07 — Education */}
      <EducationSection />

      {/* 08 — Problem Solving / LeetCode */}
      <ProblemSolvingSection />

      {/* 09 — GitHub / Building In Public */}
      <GitHubSection />

      {/* 10 — Professional Presence */}
      <ProfessionalPresenceSection />

      {/* 11 — Contact */}
      <ContactSection />

      {/* 12 — Footer */}
      <Footer />
    </main>
  );
}
