"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, ArrowUpRight, Code2, Sparkles, Terminal } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";
import { profileData } from "@/data/profile";
import { socialsData } from "@/data/socials";
import { ProfileImage } from "./ProfileImage";

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-black text-white"
    >
      {/* Background Ambient Lighting Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 1.5}px), calc(-50% + ${mousePos.y * 1.5}px))`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Badge: Location & Status */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 text-xs font-mono text-neutral-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              {profileData.location}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">{profileData.studentStatus}</span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-sans leading-[1.05]">
              {profileData.fullName}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-neutral-300 tracking-wide max-w-2xl">
              {profileData.role}
            </p>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-sans leading-relaxed">
              {profileData.headline} Specialized in full-stack architecture, encrypted cloud systems, secure file storage, and autonomous AI solutions.
            </p>
          </div>

          {/* Sub-Roles Pill Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {profileData.subRoles.map((role, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] shadow-lg shadow-white/10"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-neutral-900 border border-white/15 text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-neutral-800 hover:border-white/30"
            >
              LET'S CONNECT
            </a>
          </div>

          {/* Social Profiles Row */}
          <div className="pt-6 flex items-center gap-6 border-t border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Profiles
            </span>
            <div className="flex items-center gap-4">
              <a
                href={socialsData.linkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={socialsData.gitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-neutral-200" />
                <span>GitHub</span>
              </a>
              <a
                href={socialsData.leetCode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Profile Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
          }}
          className="lg:col-span-5 relative transition-transform duration-200 ease-out"
        >
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            {/* Ambient Backlight Frame */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-purple-600/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />
            
            <div className="relative p-2 rounded-3xl bg-neutral-900/90 border border-white/15 backdrop-blur-2xl shadow-2xl">
              <ProfileImage
                src={profileData.profilePhoto}
                alt={profileData.name}
                priority
                className="w-full aspect-[4/5] rounded-2xl"
              />

              {/* Floating Quick Info Pill */}
              <div className="mt-3 p-3 rounded-xl bg-neutral-950/80 border border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span className="text-neutral-300">JNTUH CSE '27</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px]">
                  CGPA {profileData.cgpa}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-neutral-400" />
        </motion.div>
      </div>
    </section>
  );
};
