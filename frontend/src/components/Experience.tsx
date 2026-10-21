'use client';

import React from 'react';
import {
  Briefcase,
  Calendar,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>PRACTICAL INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Internship <span className="text-blue-600">Experience</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Hands-on software development, enterprise Java frameworks, content infrastructure, and agile teamwork.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 bg-blue-200" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
                
                {/* Timeline node */}
                <div className="relative z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-2xl bg-white border-2 border-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-600/10 group-hover:scale-105 transition-all">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>

                {/* Content Card */}
                <div className="flex-1 card-white card-white-hover p-6 sm:p-7 rounded-3xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-bold text-blue-600 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-5">
                    {exp.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {exp.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md"
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
