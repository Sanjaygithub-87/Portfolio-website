'use client';

import React from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  Layers,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  PROJECTS_DATA,
  SKILL_CATEGORIES,
  EXPERIENCES,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
} from '../data/portfolioData';
import { recordResumeDownload } from '../lib/api';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    recordResumeDownload();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Action Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-semibold text-slate-300 ml-2">
              Sanjay_S_Resume_2025.pdf (Interactive Digital Preview)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-950 text-slate-200 space-y-6">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                SANJAY S
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-1">
                Computer Science Engineering Graduate (2025) • Full-Stack Developer
              </p>
            </div>
            <div className="text-xs text-slate-400 space-y-1 text-center sm:text-right">
              <div>{PERSONAL_INFO.email}</div>
              <div>{PERSONAL_INFO.phone} • {PERSONAL_INFO.location}</div>
              <div className="flex items-center justify-center sm:justify-end gap-3 text-cyan-400">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.careerObjective}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 space-y-1.5">
              <div><strong className="text-white">Front-End:</strong> HTML5, CSS3, JavaScript, React, Next.js, Responsive Web Design, Tailwind CSS</div>
              <div><strong className="text-white">Back-End:</strong> Java, Java Servlets, JDBC, Node.js, Express, CRUD Operations, OOP, MVC Architecture, SDLC</div>
              <div><strong className="text-white">Database:</strong> MySQL, SQL (schema design, joins, queries), MongoDB</div>
              <div><strong className="text-white">Automation & Integration:</strong> n8n (workflow builder, REST triggers, webhooks, HTTP Request nodes, JSON mapping, conditional logic, error handling), REST API Integration</div>
              <div><strong className="text-white">BI & Analytics:</strong> IBM Cognos Analytics (dashboards, reports, data modeling, visualization)</div>
              <div><strong className="text-white">Tools & Practices:</strong> Git, Agile Workflows, VS Code, MS Office, AWS Free Tier</div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex items-center justify-between font-bold text-white mb-1">
                    <span>{proj.title}</span>
                    <span className="text-[11px] text-cyan-400 font-normal">[{proj.category}]</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 pl-1">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] text-slate-400 mt-1 pl-1">
                    <strong className="text-slate-300">Stack:</strong> {proj.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-3">
              Internship Experience (Fresher)
            </h2>
            <div className="space-y-3">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="text-xs sm:text-sm">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{exp.role} <span className="font-normal text-slate-400">| {exp.company}</span></span>
                    <span className="text-[11px] text-cyan-400 font-normal">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 pl-1 mt-1">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
              Education
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 space-y-1.5">
              <div><strong className="text-white">B.E. Computer Science & Engineering</strong> | Arunai Engineering College | 2025 | <span className="text-cyan-400 font-bold">83%</span></div>
              <div><strong className="text-white">12th Standard</strong> | Sri Ramakrishna Matric Hr. Sec. School | <span className="text-cyan-400 font-bold">70.33%</span></div>
              <div><strong className="text-white">10th Standard</strong> | Sri Ramakrishna Matric Hr. Sec. School | <span className="text-cyan-400 font-bold">94%</span></div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1">
              <li>IBM Cognos Analytics – Business Intelligence: Data analysis, reporting, and dashboard creation</li>
              <li>Java Full Stack Training: Java, Servlets, JDBC, MySQL, HTML, CSS, JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
