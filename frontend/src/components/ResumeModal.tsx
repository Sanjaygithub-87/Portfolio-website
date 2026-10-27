'use client';

import React from 'react';
import {
  X,
  Printer,
  Mail,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Top Action Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-bold text-slate-200 ml-2">
              Sanjay_S_Resume_AI_Engineer.pdf (Executive Preview)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm"
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

        {/* Printable Executive Resume Sheet (Clean White & Blue) */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-800 space-y-6">
          
          {/* Header */}
          <div className="border-b-2 border-blue-600 pb-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-wide">
                SANJAY S
              </h1>
              <p className="text-xs sm:text-sm font-bold text-blue-600 mt-1 uppercase tracking-wider">
                AI Engineer & AI Developer | n8n Automation Specialist
              </p>
            </div>
            <div className="text-xs text-slate-600 space-y-1 text-center sm:text-right font-medium">
              <div>Chennai, Tamil Nadu, India</div>
              <div>Contact via Portfolio Message Form</div>
              <div className="flex items-center justify-center sm:justify-end gap-3 text-blue-600 font-bold">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {PERSONAL_INFO.careerObjective}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1 mb-2">
              Technical Skills & AI Toolkit
            </h2>
            <div className="text-xs sm:text-sm text-slate-700 space-y-1.5 font-normal">
              <div><strong className="text-slate-900">AI & Machine Learning:</strong> Groq LLM API, Prompt Engineering, Python, OpenCV, Computer Vision, Model Integration</div>
              <div><strong className="text-slate-900">Automation & Integration:</strong> n8n Workflow Builder, Webhook triggers, REST API Integration, JSON Mapping, Error Handling</div>
              <div><strong className="text-slate-900">Front-End:</strong> React, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS, Responsive Web Design</div>
              <div><strong className="text-slate-900">Back-End & DB:</strong> Node.js, Express, Java, Servlets, JDBC, MongoDB, MySQL, MVC Architecture, SDLC</div>
              <div><strong className="text-slate-900">BI & Analytics:</strong> IBM Cognos Analytics (Certified - dashboards, reports, data modeling)</div>
              <div><strong className="text-slate-900">Cloud & Tools:</strong> AWS EC2 (Free Tier), Docker, Nginx Reverse Proxy, Git & GitHub, Postman, VS Code</div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1 mb-3">
              Key Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                    <span>{proj.title}</span>
                    <span className="text-[11px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">[{proj.category}]</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 pl-1">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] text-slate-500 mt-1 pl-1">
                    <strong className="text-slate-800">Stack:</strong> {proj.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1 mb-3">
              Internship Experience
            </h2>
            <div className="space-y-3">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="text-xs sm:text-sm">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>{exp.role} <span className="font-semibold text-slate-500">| {exp.company}</span></span>
                    <span className="text-[11px] text-blue-600 font-bold">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 pl-1 mt-1">
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1 mb-2">
              Education
            </h2>
            <div className="text-xs sm:text-sm text-slate-700 space-y-1.5">
              <div><strong className="text-slate-900">B.E. Computer Science & Engineering</strong> | Arunai Engineering College | 2025 | <span className="text-blue-700 font-extrabold">83% Distinction</span></div>
              <div><strong className="text-slate-900">12th Standard</strong> | Sri Ramakrishna Matric Hr. Sec. School | <span className="text-blue-700 font-bold">70.33%</span></div>
              <div><strong className="text-slate-900">10th Standard</strong> | Sri Ramakrishna Matric Hr. Sec. School | <span className="text-blue-700 font-bold">94%</span></div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-1 mb-2">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1">
              <li>IBM Cognos Analytics – Business Intelligence: Data analysis, reporting, and dashboard creation</li>
              <li>Java Full Stack Training: Java, Servlets, JDBC, MySQL, HTML, CSS, JavaScript</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
