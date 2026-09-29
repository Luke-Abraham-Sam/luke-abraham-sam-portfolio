"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Brain, Layers, Shield, Sparkles, CheckCircle2, Clock } from "lucide-react";
import { skillCategories } from "@/data/skills";

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 3:
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 4:
        return <Shield className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              03 — Technical Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-sans">
              SKILLS & STACK
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Categorized competency clusters across software engineering, cloud, AI platforms, and CS fundamentals.
          </p>
        </div>

        {/* Category Selection Tabs */}
        <div className="flex flex-wrap gap-3 border-b border-white/10 pb-4">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeCategory === idx
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10 scale-[1.02]"
                  : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/10"
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-white font-sans flex items-center gap-3">
              {getCategoryIcon(activeCategory)}
              {skillCategories[activeCategory].title}
            </h3>
            <p className="text-sm text-neutral-400 font-mono">
              {skillCategories[activeCategory].description}
            </p>
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                  skill.status === "IN PROGRESS"
                    ? "bg-neutral-900/90 border-amber-500/30 hover:border-amber-500/60"
                    : skill.highlight
                    ? "bg-neutral-900/80 border-white/20 hover:border-blue-400/50 hover:bg-neutral-900"
                    : "bg-neutral-900/40 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </div>
                  {skill.status === "IN PROGRESS" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300">
                      <Clock className="w-3 h-3" />
                      IN PROGRESS
                    </span>
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400/80" />
                  )}
                </div>

                <div className="text-xs font-mono text-neutral-400 flex items-center justify-between pt-2 border-t border-white/5">
                  <span>Category</span>
                  <span className="text-neutral-500">{skillCategories[activeCategory].title.split(" ")[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Competency Grid View (All Categories Summary) */}
        <div className="pt-12 border-t border-white/10 space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Full Technology Matrix
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {skillCategories.flatMap((cat) => cat.skills).map((s, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-neutral-950 border border-white/10 hover:border-white/20 text-center space-y-1 transition-colors"
              >
                <div className="text-xs font-medium text-neutral-200 truncate" title={s.name}>
                  {s.name}
                </div>
                {s.status === "IN PROGRESS" && (
                  <div className="text-[9px] font-mono text-amber-400 uppercase">In Progress</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
