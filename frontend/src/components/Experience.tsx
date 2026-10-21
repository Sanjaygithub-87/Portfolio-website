'use client';

import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL INDUSTRY EXPOSURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Internship <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on software development, enterprise Java frameworks, content infrastructure, and agile teamwork.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-700 opacity-30" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
                {/* Timeline node */}
                <div className="relative z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-2xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 group-hover:scale-110 transition-all">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-panel p-6 sm:p-7 rounded-2xl border-slate-800/80 hover:border-slate-700 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-900/90 border border-slate-800 px-3 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-5">
                    {exp.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                    {exp.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium text-slate-400 bg-slate-900/80 border border-slate-800 px-2.5 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
