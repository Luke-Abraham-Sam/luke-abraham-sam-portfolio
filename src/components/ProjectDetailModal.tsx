"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, ShieldCheck, Server, Lock, AlertCircle, Layers } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { Project } from "@/data/projects";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl overflow-y-auto">
        
        {/* Backdrop click close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-900 border border-white/15 p-6 md:p-10 text-white shadow-2xl z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-4 border-b border-white/10 pb-8 pr-12">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-blue-400 font-bold">PROJECT {project.number}</span>
              <span className="text-neutral-600">•</span>
              <span
                className={`px-3 py-0.5 rounded-full text-xs font-mono border ${
                  project.status === "COMPLETED"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                    : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                }`}
              >
                {project.statusDisplay}
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-mono text-neutral-400">{project.date}</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold font-sans tracking-tight">
              {project.fullTitle}
            </h2>

            {/* Quick Action Links */}
            <div className="flex flex-wrap gap-4 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold tracking-wide transition-all shadow-lg shadow-blue-600/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>VIEW LIVE PROJECT</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-white/15 text-white text-xs font-mono font-semibold tracking-wide transition-all"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>VIEW GITHUB REPOSITORY</span>
                </a>
              )}
            </div>
          </div>

          {/* Modal Content Sections */}
          <div className="py-8 space-y-8 text-neutral-300 text-sm leading-relaxed">
            
            {/* Overview */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Overview</h3>
              <p className="text-base text-neutral-200">{project.overview}</p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-neutral-950/80 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  THE PROBLEM
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-950/80 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  THE SOLUTION
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Key Features & Architecture</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/40 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {project.authentication && (
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Authentication</div>
                  <div className="text-xs text-neutral-200">{project.authentication}</div>
                </div>
              )}
              {project.authorization && (
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Authorization</div>
                  <div className="text-xs text-neutral-200">{project.authorization}</div>
                </div>
              )}
              {project.deployment && (
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-white/10 space-y-1">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Deployment</div>
                  <div className="text-xs text-neutral-200">{project.deployment}</div>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="flex justify-between items-center pt-6 border-t border-white/10 text-xs font-mono text-neutral-500">
            <span>LUKE ABRAHAM SAM PORTFOLIO</span>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors uppercase tracking-wider"
            >
              [ CLOSE MODAL ]
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
