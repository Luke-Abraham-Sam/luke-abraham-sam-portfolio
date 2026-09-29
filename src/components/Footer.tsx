"use client";

import React from "react";
import Link from "next/link";
import { Code2, Mail, Phone, ArrowUp } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";
import { profileData } from "@/data/profile";
import { socialsData } from "@/data/socials";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 py-12 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Identity Info */}
        <div className="space-y-2 text-center md:text-left">
          <div className="font-mono text-sm font-bold tracking-widest uppercase text-white">
            {profileData.fullName}
          </div>
          <p className="text-xs text-neutral-400 font-sans">
            {profileData.role} • {profileData.location}
          </p>
          <div className="text-[11px] font-mono text-neutral-500">
            © 2026 Luke Abraham Sam. All rights reserved.
          </div>
        </div>

        {/* Center Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-400">
          <a
            href={socialsData.email.url}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
          <a
            href={socialsData.phone.url}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Phone</span>
          </a>
          <a
            href={socialsData.linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={socialsData.gitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={socialsData.leetCode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>LeetCode</span>
          </a>
        </div>

        {/* Right Scroll To Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-3 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
