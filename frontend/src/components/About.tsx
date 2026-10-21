'use client';

import React from 'react';
import {
  Code,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "Full-Stack Versatility",
      description:
        "Comfortable crossing every layer of development — designing responsive component hierarchies, authoring REST APIs, and modeling relational & document schemas.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      title: "AI & Workflow Automation",
      description:
        "Passionate about augmenting applications with AI — from ultra-low latency Groq LLMs and Python computer vision models to automated multi-channel n8n pipelines.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Clean Architecture & SDLC",
      description:
        "Practicing standard MVC architecture, secure CRUD operations, role-based access management, Git version control, and disciplined Agile iterations.",
    },
    {
      icon: <Code className="w-5 h-5 text-purple-400" />,
      title: "Cloud & Production Focus",
      description:
        "Building production-grade deployments utilizing AWS Free Tier (EC2, Nginx reverse proxy, PM2 process management, and MongoDB Atlas).",
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & OBJECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-cyan-400">Sanjay S</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Get to know the developer behind the code — academic foundations, technical principles, and engineering mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Story & Objective */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Engineering Profile & Mindset</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                {PERSONAL_INFO.careerObjective}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Having earned an <strong className="text-white">83% aggregate in Computer Science & Engineering</strong> at Arunai Engineering College, I pair fundamental computer science principles with hands-on modern stack development (React, Next.js, Node.js, Express, Java Servlets, MySQL, and MongoDB).
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>B.E. CSE (2025 Graduate)</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Immediate Availability</span>
                </div>
              </div>
            </div>

            {/* Quick Highlights checklist */}
            <div className="glass-panel p-6 rounded-2xl">
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                What I Bring to Your Team
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Rapid comprehension of full-stack codebases</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Practical database design (MySQL & MongoDB)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Modern AI API integration (Groq, LLMs)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Proactive problem-solving and Agile delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
