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
    <section id="education" className="py-20 border-t border-slate-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>ACADEMIC FOUNDATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Education & <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Verified academic milestones and industry training programs validating core computer science rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education list */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 mb-4">
              <School className="w-5 h-5 text-blue-600" />
              <span>Academic Degrees & Schooling</span>
            </h3>

            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="card-white card-white-hover p-6 sm:p-7 rounded-3xl relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                  <div className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-extrabold text-xs">
                    Score: {edu.score}
                  </div>
                </div>

                <div className="text-sm font-bold text-blue-600 mb-3">
                  {edu.institution}
                </div>

                <div className="space-y-1.5 mt-3">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-blue-600" />
              <span>Verified Certifications</span>
            </h3>

            {CERTIFICATIONS_DATA.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="card-white card-white-hover p-6 rounded-3xl relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-md shadow-blue-600/20">
                  <Award className="w-5 h-5" />
                </div>

                <h4 className="text-base font-extrabold text-slate-900 mb-1">{cert.title}</h4>
                <div className="text-xs font-bold text-blue-600 mb-4">{cert.issuer}</div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Callout Card */}
            <div className="p-6 rounded-3xl border border-blue-200 bg-blue-50/60">
              <h4 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Verified Documentation</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Full documentation, degree transcripts, and project source repositories are available on request.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition"
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
