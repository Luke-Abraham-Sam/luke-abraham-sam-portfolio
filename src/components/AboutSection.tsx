"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Cloud, Code, Compass, Users, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              02 — Profile & Identity
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-sans">
              ABOUT ME
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Factual engineering summary, core philosophy, and technical focus areas.
          </p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Editorial Quote & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative p-8 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl">
              <p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed font-sans">
                "I am a final-year B.Tech Computer Science and Engineering student driven by a strong sense of ownership, leadership, and analytical curiosity."
              </p>
            </div>

            <div className="space-y-6 text-neutral-300 text-base leading-relaxed">
              <p>
                {profileData.summary[0]}
              </p>
              <p>
                {profileData.summary[1]}
              </p>
              <p>
                {profileData.summary[2]}
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-neutral-900/40 border border-white/10 text-center space-y-2">
                <Code className="w-5 h-5 mx-auto text-blue-400" />
                <div className="text-xs font-semibold text-white">Full-Stack</div>
                <div className="text-[11px] text-neutral-400">MERN & APIs</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/40 border border-white/10 text-center space-y-2">
                <Cloud className="w-5 h-5 mx-auto text-cyan-400" />
                <div className="text-xs font-semibold text-white">Cloud Architecture</div>
                <div className="text-[11px] text-neutral-400">AWS & Docker</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/40 border border-white/10 text-center space-y-2">
                <ShieldCheck className="w-5 h-5 mx-auto text-emerald-400" />
                <div className="text-xs font-semibold text-white">Cybersecurity</div>
                <div className="text-[11px] text-neutral-400">AES & Access Control</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/40 border border-white/10 text-center space-y-2">
                <Cpu className="w-5 h-5 mx-auto text-purple-400" />
                <div className="text-xs font-semibold text-white">AI Solutions</div>
                <div className="text-[11px] text-neutral-400">Agentic Platforms</div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Profile Information Card */}
          <div className="lg:col-span-5">
            <div className="p-6 md:p-8 rounded-3xl bg-neutral-900/80 border border-white/15 backdrop-blur-2xl space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-300">
                  Quick Profile Overview
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {profileData.studentStatus}
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-neutral-500 uppercase">FULL NAME</span>
                  <span className="text-neutral-200 font-semibold text-right">{profileData.name}</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-neutral-500 uppercase">LOCATION</span>
                  <span className="text-neutral-200 text-right">{profileData.location}</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-neutral-500 uppercase">DEGREE</span>
                  <span className="text-neutral-200 text-right">{profileData.degree} CSE</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-neutral-500 uppercase">UNIVERSITY</span>
                  <span className="text-neutral-200 text-right max-w-[200px] truncate" title={profileData.university}>
                    JNTUH
                  </span>
                </div>

                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-neutral-500 uppercase">COLLEGE</span>
                  <span className="text-neutral-200 text-right max-w-[200px] truncate" title={profileData.college}>
                    TKR College of Engg & Tech
                  </span>
                </div>

                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-neutral-500 uppercase">GRADUATION</span>
                  <span className="text-neutral-200 text-right">{profileData.graduationYear}</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-neutral-500 uppercase">CGPA</span>
                  <span className="text-blue-400 font-bold text-right">{profileData.cgpa} ({profileData.cgpaStatus})</span>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-neutral-500 uppercase">CONTACT</span>
                  <span className="text-neutral-200 text-right">{profileData.email}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-mono text-xs tracking-wider transition-colors"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
