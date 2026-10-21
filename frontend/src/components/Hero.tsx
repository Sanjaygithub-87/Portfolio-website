'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Sparkles,
  Bot,
  Zap,
  Cpu,
  BrainCircuit,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-50 bg-grid-light">
      {/* Soft Blue Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-200/40 via-sky-100/40 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-12 right-10 w-80 h-80 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-100/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>{PERSONAL_INFO.statusBadge}</span>
            </div>

            {/* Main Headline highlighting AI ENGINEER & AI DEVELOPER */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.18]">
              Architecting Intelligent Systems as an <br className="hidden sm:inline" />
              <span className="text-gradient-blue block mt-1">
                AI Engineer & AI Developer
              </span>
            </h1>

            {/* Focused Career Pitch */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              I am <strong className="text-slate-900 font-bold">Sanjay S</strong>. I specialize in developing production-grade{' '}
              <strong className="text-blue-600 font-bold">Artificial Intelligence applications</strong>,{' '}
              <strong className="text-slate-900 font-semibold">real-time Computer Vision models</strong>, and enterprise{' '}
              <strong className="text-blue-600 font-bold">n8n workflow automation pipelines</strong>. This platform showcases my engineering projects for clients, automated AI integrations, and high-impact technology collaborations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <Bot className="w-4 h-4 text-white" />
                <span>Explore AI & Automation Projects</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-sm"
              >
                <Zap className="w-4 h-4 text-blue-600" />
                <span>Discuss AI Solutions</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Resume PDF</span>
              </button>
            </div>

            {/* Fast Contact Channels */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-slate-600 text-xs sm:text-sm">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-blue-600 transition font-medium"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-blue-600 transition font-medium"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition font-medium"
              >
                <GithubIcon className="w-4 h-4 text-slate-700" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition font-medium"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Photo Card (White & Blue Professional Executive Frame) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/30 to-sky-200/30 rounded-3xl blur-2xl -z-10" />

            <div className="relative w-72 sm:w-80 p-3.5 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-900/10">
              
              {/* Profile Image Viewport */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 flex flex-col items-center justify-center group">
                
                {!imageError && PERSONAL_INFO.avatarUrl ? (
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  /* Professional AI Developer Avatar Card */
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-sky-400 flex items-center justify-center text-white mb-4 shadow-xl shadow-blue-500/25">
                      <BrainCircuit className="w-12 h-12 text-white" />
                    </div>
                    <span className="text-xl font-extrabold text-slate-900 tracking-wide">
                      SANJAY S
                    </span>
                    <span className="text-xs font-bold text-blue-600 mt-1 uppercase tracking-wider">
                      AI Engineer & AI Developer
                    </span>
                    <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
                      Photo: Save <code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded font-mono">profile.jpg</code> in <code className="text-slate-700">frontend/public/</code> or set your photo link!
                    </p>
                  </div>
                )}

                {/* Corner Tech Badge */}
                <div className="absolute top-3 left-3 bg-white/95 border border-slate-200 px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-800 tracking-wider">AI ACTIVE</span>
                </div>

                <div className="absolute bottom-3 inset-x-3 bg-white/95 border border-slate-200 p-2.5 rounded-xl shadow-sm flex items-center justify-between text-xs">
                  <div>
                    <div className="font-extrabold text-slate-900 text-xs">SANJAY S</div>
                    <div className="text-[10px] text-blue-600 font-semibold">AI & Automation Specialist</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500">Academic Standing</div>
                    <div className="text-xs font-bold text-slate-900">83% B.E. CSE</div>
                  </div>
                </div>

              </div>

              {/* Floating Pill Badges around photo */}
              <div className="absolute -top-3 -right-3 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-lg shadow-blue-900/5 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[11px] font-bold text-slate-800">Groq LLM &lt;1s</span>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-lg shadow-blue-900/5 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[11px] font-bold text-slate-800">n8n Automation</span>
              </div>

            </div>

          </div>

        </div>

        {/* Highlight Stats Strip */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-16 pt-8 border-t border-slate-200">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="card-white card-white-hover p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center"
            >
              <div className="text-2xl sm:text-3xl font-black text-blue-600 mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-900">{stat.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
