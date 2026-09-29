"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, ShieldCheck, CheckCircle2, Clock, Layers, Sparkles } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { projectsData, Project } from "@/data/projects";
import { ProjectDetailModal } from "./ProjectDetailModal";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              05 — Featured Engineering Projects
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-sans">
              PROJECT SHOWCASE
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Architected software applications emphasizing multi-role security, real-time queues, and encrypted cloud infrastructure.
          </p>
        </div>

        {/* Projects Stack / Grid */}
        <div className="space-y-12">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl bg-neutral-950 border border-white/15 overflow-hidden shadow-2xl hover:border-blue-500/40 transition-all duration-500"
            >
              {/* Top Ambient Glow Banner */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.accentColor}`} />

              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side Info */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Meta Pills */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm font-bold text-blue-400 tracking-wider">
                      PROJECT {project.number}
                    </span>
                    <span className="text-neutral-700">•</span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                        project.status === "COMPLETED"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-amber-500/10 text-amber-300 border-amber-500/30"
                      }`}
                    >
                      {project.status === "COMPLETED" ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 animate-spin" />
                      )}
                      {project.statusDisplay}
                    </span>
                    <span className="text-neutral-700">•</span>
                    <span className="text-xs font-mono text-neutral-400">{project.date}</span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-4xl font-bold font-sans text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-3xl font-sans">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Key Highlights / Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Side CTAs & Modal Trigger */}
                <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-start lg:items-end border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] shadow-lg"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 border border-white/20 text-white font-mono text-xs tracking-wider uppercase transition-all hover:bg-neutral-800 hover:border-white/40"
                    >
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                      <span>VIEW LIVE DEMO</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 border border-white/20 text-white font-mono text-xs tracking-wider uppercase transition-all hover:bg-neutral-800 hover:border-white/40"
                    >
                      <GitHubIcon className="w-4 h-4" />
                      <span>GITHUB REPO</span>
                    </a>
                  )}

                  {!project.liveUrl && !project.githubUrl && (
                    <div className="text-xs font-mono text-amber-400/80 bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20">
                      🔒 In Active Development
                    </div>
                  )}

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
