import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luke Abraham Sam — Computer Science Engineer | Software, Cloud & Security",
  description:
    "Luke Abraham Sam is a Computer Science Engineering student from Hyderabad building software, full-stack applications, cloud solutions and secure systems.",
  keywords: [
    "Luke Abraham Sam",
    "Computer Science Engineer",
    "Software Developer Hyderabad",
    "MERN Stack Developer",
    "Cloud Security Engineer",
    "JNTUH CSE",
    "CarePulse Healthcare",
    "AWS Associate SAA-C03",
    "LeetCode Hyderabad",
  ],
  authors: [{ name: "Luke Abraham Sam", url: "https://github.com/Luke-Abraham-Sam" }],
  creator: "Luke Abraham Sam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luke-abraham-sam.vercel.app",
    title: "Luke Abraham Sam — Personal Engineering Portfolio",
    description:
      "Final-year B.Tech Computer Science student specializing in full-stack web applications, secure cloud storage, and AI platforms.",
    siteName: "Luke Abraham Sam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Abraham Sam — Computer Science Engineer",
    description:
      "Luke Abraham Sam is a Computer Science Engineering student from Hyderabad building software, full-stack applications, cloud solutions and secure systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="bg-black text-white antialiased selection:bg-blue-500 selection:text-white font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
