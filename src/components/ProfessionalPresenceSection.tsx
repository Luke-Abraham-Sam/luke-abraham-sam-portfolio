"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, ArrowUpRight, ShieldCheck, Mail, Phone } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";
import { socialsData } from "@/data/socials";

export const ProfessionalPresenceSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              10 — Professional Profiles
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-sans">
              FIND ME ONLINE
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Connect across professional platforms for technical discussions, engineering opportunities, and networking.
          </p>
        </div>

        {/* Featured Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Prominent LinkedIn Spotlight Card */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-950/40 via-neutral-900 to-neutral-950 border border-blue-500/30 shadow-2xl flex flex-col justify-between space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/20 transition-colors" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                  <LinkedInIcon className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300">
                  PRIMARY NETWORK
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold font-sans text-white group-hover:text-blue-200 transition-colors">
                  LinkedIn Professional Profile
                </h3>
                <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                  Connect for professional networking, software engineering roles, cloud project discussions, and technical collaborations.
                </p>
              </div>

              <div className="font-mono text-xs text-neutral-400 border-t border-white/10 pt-4">
                linkedin.com/in/luke-abraham-sam-ba71332b2/
              </div>
            </div>

            <a
              href={socialsData.linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs font-mono tracking-wider transition-all shadow-lg shadow-blue-600/20 scale-[1.01]"
            >
              <span>CONNECT ON LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column Stack: GitHub & LeetCode */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* GitHub Card */}
            <a
              href={socialsData.gitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-neutral-900 border border-white/10 hover:border-white/30 transition-all flex items-center justify-between shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-neutral-800 text-white group-hover:bg-neutral-700 transition-colors">
                  <GitHubIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-sans text-white group-hover:text-blue-300 transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-xs font-mono text-neutral-400">@Luke-Abraham-Sam</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
            </a>

            {/* LeetCode Card */}
            <a
              href={socialsData.leetCode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-neutral-900 border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-between shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-sans text-white group-hover:text-amber-200 transition-colors">
                    LeetCode Profile
                  </h4>
                  <p className="text-xs font-mono text-neutral-400">@lukabrsam05</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
            </a>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 space-y-3">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                Direct Contact Lines
              </div>
              <div className="space-y-2 font-mono text-xs">
                <a href={socialsData.email.url} className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>{socialsData.email.displayValue}</span>
                </a>
                <a href={socialsData.phone.url} className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{socialsData.phone.displayValue}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
