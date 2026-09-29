"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, FolderGit2, Star } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { socialsData } from "@/data/socials";
import { projectsData } from "@/data/projects";

export const GitHubSection: React.FC = () => {
  const carePulse = projectsData.find((p) => p.id === "carepulse");

  return (
    <section className="py-24 px-6 md:px-12 bg-black text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              09 — Open Source & Code Repositories
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-sans">
              BUILDING IN PUBLIC
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Source code repositories, full-stack application codebases, and architectural implementations on GitHub.
          </p>
        </div>

        {/* GitHub Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main GitHub Profile Box */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-neutral-950 border border-white/15 flex flex-col justify-between space-y-8 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-neutral-900 border border-white/10 text-white">
                  <GitHubIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-sans">Luke-Abraham-Sam</h3>
                  <p className="text-xs font-mono text-neutral-400">github.com/Luke-Abraham-Sam</p>
                </div>
              </div>

              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                Hosting production code repositories, full-stack MERN systems, cloud architecture templates, and security utilities.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href={socialsData.gitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs font-mono tracking-wider transition-all hover:bg-neutral-200"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>EXPLORE GITHUB PROFILE</span>
              </a>
            </div>
          </div>

          {/* Featured Repository Showcase */}
          {carePulse && carePulse.githubUrl && (
            <div className="lg:col-span-7 p-8 rounded-3xl bg-neutral-950 border border-white/15 flex flex-col justify-between space-y-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300">
                    <FolderGit2 className="w-4 h-4" />
                    Featured Repository
                  </span>
                  <span className="text-xs font-mono text-neutral-500">{carePulse.date}</span>
                </div>

                <h3 className="text-2xl font-bold font-sans text-white">
                  hospital-management-system
                </h3>

                <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                  {carePulse.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {carePulse.technologies.slice(0, 5).map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
                <a
                  href={carePulse.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-white/20 text-white font-mono text-xs font-medium hover:bg-neutral-800 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
                {carePulse.liveUrl && (
                  <a
                    href={carePulse.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live Site</span>
                  </a>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
