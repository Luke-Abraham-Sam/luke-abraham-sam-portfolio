"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, ChevronRight } from "lucide-react";
import { educationData } from "@/data/education";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-black text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              07 — Academic Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-sans">
              EDUCATION & MILESTONES
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Continuous educational progression from secondary school to B.Tech Computer Science Engineering.
          </p>
        </div>

        {/* Timeline Progression Flow */}
        <div className="relative pl-6 md:pl-10 border-l border-white/15 space-y-16">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Node Marker */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  edu.isCurrent
                    ? "bg-blue-600 border-white ring-4 ring-blue-500/20 shadow-lg shadow-blue-500/50"
                    : "bg-neutral-900 border-white/40 group-hover:border-blue-400"
                }`}
              >
                {edu.isCurrent && <div className="w-2 h-2 rounded-full bg-white animate-ping" />}
              </div>

              {/* Card Container */}
              <div className="p-8 rounded-3xl bg-neutral-950 border border-white/10 group-hover:border-blue-500/30 transition-all duration-300 space-y-6 shadow-xl">
                
                {/* Top Row: Dates & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-blue-400">
                      {edu.yearRange}
                    </span>
                    {edu.isCurrent && (
                      <span className="px-3 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-mono font-medium">
                        CURRENT ENROLLMENT
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Institution & Degree */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-sans group-hover:text-blue-300 transition-colors">
                    {edu.institution}
                  </h3>
                  {edu.collegeName && (
                    <div className="text-sm font-mono text-neutral-400">{edu.collegeName}</div>
                  )}
                  <div className="text-base font-semibold text-neutral-200">
                    {edu.degree} {edu.field ? `— ${edu.field}` : ""} {edu.boardOrStream ? `(${edu.boardOrStream})` : ""}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed font-sans">
                      <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
