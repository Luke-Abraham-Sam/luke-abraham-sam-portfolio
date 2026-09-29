"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Code2, Send, CheckCircle2 } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";
import { profileData } from "@/data/profile";
import { socialsData } from "@/data/socials";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    // Construct mailto link dynamically
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            11 — Get In Touch
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-sans leading-[1.05]">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-sans">
            Interested in software engineering, full-stack development, cloud architecture, security systems, or AI solutions? Let's connect.
          </p>
        </div>

        {/* Contact Information & Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & CTAs */}
          <div className="lg:col-span-6 p-8 md:p-12 rounded-3xl bg-neutral-950 border border-white/15 space-y-8 shadow-2xl">
            <div className="space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-400">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={socialsData.email.url}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900 border border-white/10 hover:border-blue-400/50 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">Email Address</div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-300 font-mono">
                      {profileData.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={socialsData.phone.url}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900 border border-white/10 hover:border-emerald-400/50 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">Phone Number</div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-300 font-mono">
                      {profileData.phoneDisplay}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900 border border-white/10">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">Location</div>
                    <div className="text-sm font-semibold text-white font-mono">
                      {profileData.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button Group */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Quick Actions
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <a
                  href={socialsData.email.url}
                  className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold text-center transition-colors shadow-lg shadow-blue-600/20"
                >
                  EMAIL ME
                </a>
                <a
                  href={socialsData.phone.url}
                  className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold text-center transition-colors shadow-lg shadow-emerald-600/20"
                >
                  CALL ME
                </a>
                <a
                  href={socialsData.linkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-neutral-900 border border-white/20 hover:bg-neutral-800 text-white font-mono text-xs font-semibold text-center transition-colors"
                >
                  LINKEDIN
                </a>
                <a
                  href={socialsData.gitHub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-neutral-900 border border-white/20 hover:bg-neutral-800 text-white font-mono text-xs font-semibold text-center transition-colors"
                >
                  GITHUB
                </a>
                <a
                  href={socialsData.leetCode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-neutral-900 border border-white/20 hover:bg-neutral-800 text-white font-mono text-xs font-semibold text-center transition-colors col-span-2 sm:col-span-1"
                >
                  LEETCODE
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-6 p-8 md:p-12 rounded-3xl bg-neutral-950 border border-white/15 space-y-6 shadow-2xl">
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-sans text-white">Send Direct Message</h3>
              <p className="text-xs font-mono text-neutral-400">
                Fills your native mail client directly with your formatted message.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white font-sans">Message Drafted!</h4>
                <p className="text-xs text-neutral-300 font-mono">
                  Your email client has been launched with your message. If it didn't open automatically, send directly to <span className="text-white font-semibold">{profileData.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full bg-neutral-800 text-xs font-mono text-neutral-300 hover:text-white"
                >
                  Draft Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-mono text-neutral-400 uppercase">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 text-sm font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-mono text-neutral-400 uppercase">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 text-sm font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-mono text-neutral-400 uppercase">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Hello Luke, I'd like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 text-sm font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all hover:bg-neutral-200 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
