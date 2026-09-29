# Luke Abraham Sam — Personal Engineering Portfolio Website

Welcome to the repository for my personal engineering portfolio! I built this cinematic, modern website from scratch to showcase my journey as a Computer Science Engineering Student at JNTUH (TKR College of Engineering and Technology).

🌍 **Live Deployment:** [luke-abraham-sam-portfolio.onrender.com](https://luke-abraham-sam-portfolio.onrender.com)

## 🚀 Tech Stack

- **Framework:** Next.js (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React & Custom SVG Brand Icons
- **Deployment Target:** Render

## 📁 Project Structure

```text
luke-abraham-sam-portfolio/
├── public/
│   └── images/
│       └── profile/
│           ├── luke-abraham-sam.jpg    <-- My official photograph goes here
│           └── README.md
├── src/
│   ├── app/
│   │   ├── globals.css                <-- Custom scrollbar & theme CSS
│   │   ├── layout.tsx                 <-- Root metadata, SEO & OpenGraph
│   │   └── page.tsx                   <-- Main portfolio sitemap
│   ├── components/
│   │   ├── Navbar.tsx                 <-- Sticky glass bar & mobile drawer
│   │   ├── Hero.tsx                   <-- Name, position, photo & CTAs
│   │   ├── ProfileImage.tsx           <-- Smart portrait loader with fallback
│   │   ├── AboutSection.tsx           <-- Editorial narrative & quick profile
│   │   ├── SkillsSection.tsx          <-- Categorized skill matrix (no fake %)
│   │   ├── CurrentlyBuilding.tsx      <-- In-progress projects & AWS certification
│   │   ├── ProjectsSection.tsx        <-- CarePulse & Secure File Storage
│   │   ├── ProjectDetailModal.tsx     <-- Case-study modal drawer
│   │   ├── CertificationsSection.tsx  <-- ServiceNow, Salesforce, NPTEL, AWS
│   │   ├── EducationSection.tsx       <-- JNTUH, Sri Chaitanya, HPS journey
│   │   ├── ProblemSolvingSection.tsx  <-- LeetCode profile showcase
│   │   ├── GitHubSection.tsx          <-- Open-source & repository links
│   │   ├── ProfessionalPresenceSection.tsx <-- LinkedIn spotlight
│   │   ├── ContactSection.tsx         <-- Mailto/Tel actions & message form
│   │   ├── Footer.tsx                 <-- Minimalist footer & copyright
│   │   └── Icons.tsx                  <-- Custom SVG brand icons
│   ├── data/                          <-- 💡 EDITABLE DATA FILES
│   │   ├── profile.ts                 <-- Name, contact, location, CGPA
│   │   ├── socials.ts                 <-- LinkedIn, GitHub, LeetCode, Email
│   │   ├── skills.ts                  <-- Programming, Web, AI, CS skills
│   │   ├── currentlyBuilding.ts       <-- Active ongoing projects & certs
│   │   ├── projects.ts                <-- CarePulse & Secure File Storage
│   │   ├── certifications.ts          <-- ServiceNow, Salesforce, NPTEL, AWS
│   │   └── education.ts               <-- JNTUH, Intermediate, Class X
│   └── lib/
│       └── utils.ts                   <-- Tailwind helper functions
├── package.json
├── next.config.ts
└── README.md
