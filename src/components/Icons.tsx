import React from "react";

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LeetCodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.135.695-1.804.604a2.61 2.61 0 01-1.787-1.152L4.043 12.385a4.34 4.34 0 010-5.77L9.814 1.1c.563-.563 1.416-.74 2.148-.445a2.535 2.535 0 011.455 1.636l.288 1.246a.54.54 0 01-.343.626l-1.096.398a.537.537 0 01-.663-.263l-.337-.73a1.457 1.457 0 00-.834-.938 1.48 1.48 0 00-1.232.255L4.856 7.373a3.25 3.25 0 000 4.321l5.772 7.604c.316.417.818.665 1.346.665.464 0 .911-.19 1.232-.524l2.697-2.607a.54.54 0 01.764.764zM11.96 9.426a.539.539 0 000 .763l5.06 5.06a.54.54 0 00.764-.764l-5.06-5.06a.539.539 0 00-.764 0zm7.147-3.84a.54.54 0 00-.764.764l3.155 3.155H9.68a.54.54 0 000 1.08h11.818l-3.155 3.155a.54.54 0 00.764.764l4.074-4.073a.54.54 0 000-.764L19.107 5.586z" />
  </svg>
);
