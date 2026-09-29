# Luke Abraham Sam — Personal Engineering Portfolio Website

A premium, modern, cinematic technology portfolio built from scratch for **Luke Abraham Sam**, Computer Science Engineering Student at JNTUH (TKR College of Engineering and Technology).

Designed with inspiration from the minimalism, typography, spacing, and product storytelling of Apple, Vercel, Linear, and Stripe.

---

## 🌟 Core Highlights & Architecture

- **Minimalist Dark Aesthetic**: Deep blacks (`#000000`), subtle glassmorphism, precise typography (Geist Sans & Mono), and ambient glow highlights.
- **Cinematic Interactions**: Mouse-reactive cursor glow, Framer Motion entrance & scroll transitions, magnetic CTA buttons, and interactive modal drawers.
- **Data-Driven Architecture**: All portfolio content (Profile, Projects, Skills, Certifications, Education, Currently Building, Socials) is separated into structured TypeScript files under `/src/data/`.
- **Zero Fake Data Policy**: 100% truthful, factual representation of experience, education, certifications, and project links.
- **Agronex AI Excluded**: Strictly personal projects showcased only.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Deployment Target**: [Vercel](https://vercel.com/) / [Render](https://render.com/)

---

## 📁 Project Structure

```
luke-abraham-sam-portfolio/
├── public/
│   └── images/
│       └── profile/
│           ├── luke-abraham-sam.jpg    <-- Drop your official photograph here
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
```

---

## ⚙️ How to Update Portfolio Content

To update your projects, certifications, skills, or links in the future without touching component UI code:

1. **Profile & Contact Info**: Edit [`/src/data/profile.ts`](file:///C:/Users/Luke%20Abraham/.gemini/antigravity/scratch/luke-abraham-sam-portfolio/src/data/profile.ts) and [`/src/data/socials.ts`](file:///C:/Users/Luke%20Abraham/.gemini/antigravity/scratch/luke-abraham-sam-portfolio/src/data/socials.ts).
2. **Projects**: Edit [`/src/data/projects.ts`](file:///C:/Users/Luke%20Abraham/.gemini/antigravity/scratch/luke-abraham-sam-portfolio/src/data/projects.ts). Add new project objects with title, description, features, tech stack, and URLs.
3. **Certifications**: Edit [`/src/data/certifications.ts`](file:///C:/Users/Luke%20Abraham/.gemini/antigravity/scratch/luke-abraham-sam-portfolio/src/data/certifications.ts). Set `status: "COMPLETED"` or `"IN PROGRESS"`.
4. **Skills**: Edit [`/src/data/skills.ts`](file:///C:/Users/Luke%20Abraham/.gemini/antigravity/scratch/luke-abraham-sam-portfolio/src/data/skills.ts). Add new skills to relevant categories.
5. **Education**: Edit [`/src/data/education.ts`](file:///C:/Users/Luke%20Abraham/.gemini/antigravity/scratch/luke-abraham-sam-portfolio/src/data/education.ts).
6. **Profile Photograph**: Drop your picture file at `public/images/profile/luke-abraham-sam.jpg`.

---

## 🛠️ Local Development & Running

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Luke-Abraham-Sam/luke-abraham-sam-portfolio.git
   cd luke-abraham-sam-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Test production build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🚀 Deployment to Vercel

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Luke Abraham Sam Portfolio"
   git remote add origin https://github.com/Luke-Abraham-Sam/luke-abraham-sam-portfolio.git
   git push -u origin main
   ```
2. Import repository into [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js. Click **Deploy**.

---

## 📄 License & Copyright

© 2026 **Luke Abraham Sam**. All rights reserved.
