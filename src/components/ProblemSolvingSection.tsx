"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Terminal, Cpu, CheckCircle2 } from "lucide-react";
import { socialsData } from "@/data/socials";

export const ProblemSolvingSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              08 — Algorithmic Proficiency
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-sans">
              PROBLEM SOLVING & LEETCODE
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Continuous practice in Data Structures, Algorithms, time/space complexity optimization, and competitive coding.
          </p>
        </div>

        {/* Feature Showcase Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-amber-500/20 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Subtle Backlight */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Code2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Platform Profile</span>
                <h3 className="text-2xl font-bold font-sans text-white">LeetCode Engineering Practices</h3>
              </div>
            </div>

            <p className="text-base text-neutral-300 font-sans leading-relaxed">
              Actively solving algorithmic challenges across arrays, strings, trees, dynamic programming, and system optimization. Focus on clean code, edge-case handling, and optimal asymptotic complexity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <div className="text-xs font-mono text-amber-400 font-semibold">Core Focus</div>
                <div className="text-xs text-neutral-300">Data Structures & Algorithms</div>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <div className="text-xs font-mono text-amber-400 font-semibold">Languages</div>
                <div className="text-xs text-neutral-300">Java • Python • C++</div>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <div className="text-xs font-mono text-amber-400 font-semibold">Username</div>
                <div className="text-xs text-neutral-300 font-mono">@lukabrsam05</div>
              </div>
            </div>
          </div>

          {/* Right Column CTA */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
            <div className="text-center lg:text-right space-y-1">
              <div className="text-xs font-mono text-neutral-400">VERIFIED PROFILE</div>
              <div className="text-sm font-semibold text-white">lukabrsam05</div>
            </div>

            <a
              href={socialsData.leetCode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs font-mono tracking-wider transition-all shadow-lg shadow-amber-500/20 scale-[1.02]"
            >
              <span>VIEW LEETCODE PROFILE</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
