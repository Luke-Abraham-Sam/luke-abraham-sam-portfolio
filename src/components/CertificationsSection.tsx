"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Clock, ExternalLink, ShieldCheck, Tag, Sparkles } from "lucide-react";
import { certificationsData, Certification } from "@/data/certifications";

export const CertificationsSection: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              06 — Verified Qualifications
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-sans">
              CERTIFICATIONS & CREDENTIALS
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Industry virtual internships, professional vendor accreditations, and technical coursework.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveCert(cert)}
              className={`cursor-pointer group p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                cert.status === "IN PROGRESS"
                  ? "bg-neutral-900/60 border-amber-500/30 hover:border-amber-500/60"
                  : "bg-neutral-900/80 border-white/10 hover:border-blue-400/50 hover:bg-neutral-900 shadow-xl"
              }`}
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-neutral-800 border border-white/10 text-blue-400 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                      cert.status === "COMPLETED"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : "bg-amber-500/10 text-amber-300 border-amber-500/30"
                    }`}
                  >
                    {cert.status === "COMPLETED" ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 animate-spin" />
                    )}
                    {cert.status}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{cert.issuer}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors font-sans leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {/* Credential ID & Date */}
                <div className="space-y-2 text-xs font-mono text-neutral-400 pt-2 border-t border-white/5">
                  {cert.credentialId && (
                    <div className="flex justify-between">
                      <span className="text-neutral-500">CREDENTIAL ID</span>
                      <span className="text-neutral-200 font-semibold">{cert.credentialId}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-neutral-500">ISSUED DATE</span>
                    <span className="text-neutral-300">{cert.date}</span>
                  </div>
                </div>

                {/* Skills Tags */}
                {cert.skillsAcquired && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skillsAcquired.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-neutral-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Expand Prompt */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                <span>View Details</span>
                <span className="text-blue-400 font-bold">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Detail for Certification */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <div className="relative w-full max-w-lg p-8 rounded-3xl bg-neutral-900 border border-white/20 text-white space-y-6 shadow-2xl">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-blue-400 uppercase">{activeCert.issuer}</span>
                  <h3 className="text-xl font-bold font-sans">{activeCert.title}</h3>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-1.5 rounded-full bg-neutral-800 text-neutral-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-neutral-500">STATUS</span>
                  <span className={activeCert.status === "COMPLETED" ? "text-emerald-400" : "text-amber-400"}>
                    {activeCert.status}
                  </span>
                </div>
                {activeCert.credentialId && (
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-neutral-500">CREDENTIAL ID</span>
                    <span className="text-white font-mono">{activeCert.credentialId}</span>
                  </div>
                )}
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-neutral-500">DATE</span>
                  <span className="text-neutral-300">{activeCert.date}</span>
                </div>
              </div>

              {activeCert.skillsAcquired && (
                <div className="space-y-2">
                  <div className="text-xs font-mono text-neutral-400">SKILLS VALIDATED</div>
                  <div className="flex flex-wrap gap-2">
                    {activeCert.skillsAcquired.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://www.linkedin.com/in/luke-abraham-sam-ba71332b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold tracking-wider transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  VERIFY ON LINKEDIN PROFILE
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
