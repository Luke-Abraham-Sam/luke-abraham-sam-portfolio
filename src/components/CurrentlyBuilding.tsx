"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Lock, Clock, Sparkles, ArrowRight, ShieldCheck, Server } from "lucide-react";
import { currentlyBuildingData } from "@/data/currentlyBuilding";

export const CurrentlyBuilding: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              04 — Active Initiatives
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight font-sans">
              CURRENTLY BUILDING & LEARNING
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-400 max-w-xs">
            Ongoing engineering projects and certification pursuits currently in active execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyBuildingData.map((item) => (
            <div
              key={item.id}
              className="relative group p-8 rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Pulsing subtle glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    {item.type === "CERTIFICATION" ? (
                      <Cloud className="w-6 h-6" />
                    ) : (
                      <Lock className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      {item.type}
                    </span>
                    <h3 className="text-xs font-mono text-neutral-300">{item.subtitle}</h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300 font-medium">
                  <Clock className="w-3.5 h-3.5 animate-spin" />
                  {item.status}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-amber-200 transition-colors">
                {item.title}
              </h4>

              <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-sans">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
