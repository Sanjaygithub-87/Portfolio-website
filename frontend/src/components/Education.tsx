'use client';

import React from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  Sparkles,
  School,
  BookOpen,
} from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified academic milestones and industry training programs validating core computer science rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education list */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <School className="w-5 h-5 text-cyan-400" />
              <span>Academic Degrees & Schooling</span>
            </h3>

            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border-slate-800/80 hover:border-slate-700 transition relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <div className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 font-bold text-xs">
                    Score: {edu.score}
                  </div>
                </div>

                <div className="text-sm font-semibold text-cyan-400/90 mb-3">
                  {edu.institution}
                </div>

                <div className="space-y-1.5 mt-3">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Verified Certifications</span>
            </h3>

            {CERTIFICATIONS_DATA.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="glass-panel p-6 rounded-2xl border-slate-800/80 hover:border-slate-700 transition relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-4 shadow-md shadow-cyan-500/20">
                  <Award className="w-5 h-5" />
                </div>

                <h4 className="text-base font-bold text-white mb-1">{cert.title}</h4>
                <div className="text-xs font-semibold text-cyan-400 mb-4">{cert.issuer}</div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Resume Callout Card */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-slate-900">
              <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Ready for Recruitment Inquiries</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Full documentation, academic transcripts, and project source repositories are available on request.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
              >
                <span>Connect directly with Sanjay &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
