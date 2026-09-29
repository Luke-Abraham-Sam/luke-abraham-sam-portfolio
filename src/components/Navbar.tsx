"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";
import { profileData } from "@/data/profile";
import { socialsData } from "@/data/socials";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-black/75 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center font-mono font-bold text-sm text-white group-hover:border-blue-400/50 transition-colors">
              L
            </div>
            <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-white uppercase group-hover:text-blue-400 transition-colors">
              {profileData.fullName}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={socialsData.linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors border border-transparent hover:border-white/10"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={socialsData.gitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors border border-transparent hover:border-white/10"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={socialsData.leetCode.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors border border-transparent hover:border-white/10"
            >
              <Code2 className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden p-2 text-neutral-300 hover:text-white bg-neutral-900/80 rounded-lg border border-white/10 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-8 pt-24"
          >
            <div className="space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-white/10 pb-2">
                Navigation
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-light text-neutral-200 hover:text-white hover:pl-2 transition-all duration-200 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-neutral-600">0{navLinks.indexOf(link) + 1}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-6 border-t border-white/10 pt-6">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                Connect Directly
              </div>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={socialsData.linkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-neutral-900 rounded-xl border border-white/10 text-xs font-medium text-neutral-300 hover:text-white"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={socialsData.gitHub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-neutral-900 rounded-xl border border-white/10 text-xs font-medium text-neutral-300 hover:text-white"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={socialsData.leetCode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-neutral-900 rounded-xl border border-white/10 text-xs font-medium text-neutral-300 hover:text-white"
                >
                  <Code2 className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              </div>

              <div className="flex justify-between items-center text-xs text-neutral-500 font-mono">
                <span>{profileData.location}</span>
                <span>{profileData.email}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
