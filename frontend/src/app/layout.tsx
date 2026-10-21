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
  title: "SANJAY S | Full-Stack Developer & AI Solutions Enthusiast",
  description:
    "Portfolio of Sanjay S - 2025 Computer Science Engineering graduate, Full-Stack Developer specializing in Next.js, React, Node.js, Express, Java, MongoDB, MySQL, and n8n Workflow Automation.",
  keywords: [
    "Sanjay S",
    "Full-Stack Developer",
    "Computer Science Fresher 2025",
    "Next.js Developer",
    "Node.js Express",
    "MongoDB",
    "Java Servlets",
    "n8n Automation",
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
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
