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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SANJAY S | AI Engineer & AI Developer | n8n Automation Specialist",
  description:
    "Portfolio of Sanjay S - AI Engineer and AI Developer specializing in Groq LLM API, Computer Vision ML models, enterprise n8n workflow automations, React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Sanjay S",
    "AI Engineer",
    "AI Developer",
    "n8n Workflow Automation",
    "Groq API",
    "Computer Vision ML",
    "Full-Stack Developer",
    "Next.js Developer",
    "Node.js Express",
    "MongoDB",
    "Chennai Developer",
    "Arunai Engineering College",
  ],
  authors: [{ name: "Sanjay S" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
