"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  src = "/images/profile/luke-abraham-sam.jpg",
  alt = "Luke Abraham Sam",
  className = "",
  priority = false,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative overflow-hidden group rounded-2xl bg-neutral-900/80 border border-white/10 ${className}`}>
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-70" />
          
          <div className="relative z-10 w-24 h-24 rounded-full bg-neutral-800/80 border border-white/15 flex items-center justify-center mb-4 shadow-2xl shadow-blue-500/10 group-hover:border-blue-500/30 transition-colors">
            <span className="text-3xl font-mono font-bold tracking-tighter text-white">LAS</span>
          </div>

          <div className="relative z-10 space-y-1">
            <h3 className="text-lg font-medium text-white font-sans tracking-wide">LUKE ABRAHAM SAM</h3>
            <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider">Computer Science Engineer</p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-[10px] text-neutral-500 font-mono border-t border-white/5 pt-2">
            Hyderabad, IN • JNTUH
          </div>
        </div>
      )}

      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none group-hover:ring-blue-500/30 transition-colors" />
    </div>
  );
};
