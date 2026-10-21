'use client';

import React from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Sparkles,
  Terminal,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-indigo-600/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-6 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.statusBadge}</span>
          </div>

          {/* Name & Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Building scalable apps with <br />
            <span className="text-gradient">Next.js, Node & AI Systems</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            I am <strong className="text-white font-semibold">Sanjay S</strong>, a 2025 Computer Science Engineering
            graduate with hands-on experience developing end-to-end applications across the modern stack — from
            responsive front-ends to scalable backend logic, relational & document databases, and AI automation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Resume PDF</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800 transition-all"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Contact Sanjay</span>
            </a>
          </div>

          {/* Social and Fast Contact Links */}
          <div className="flex items-center gap-5 text-slate-400 text-xs sm:text-sm mb-14">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition"
              title="Send an Email"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition"
              title="Call Sanjay"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Highlight Stats Strip */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-6 border-t border-slate-800/80">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center transition hover:border-slate-700"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight">
                  <span className="text-cyan-400">{stat.value}</span>
                </div>
                <div className="text-xs font-semibold text-slate-300">{stat.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
