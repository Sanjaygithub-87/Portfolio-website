'use client';

import React from 'react';
import {
  Code2,
  Heart,
  Cloud,
  Database,
  Layers,
  ArrowUp,
  Bot,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 text-xs py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg mb-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span>SANJAY S</span>
            </div>
            <p className="text-slate-500 max-w-sm text-xs leading-relaxed font-normal">
              AI Engineer & AI Developer specializing in Groq LLM API, Computer Vision models, n8n workflow pipelines, and scalable cloud architectures.
            </p>
          </div>

          {/* Stack Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 font-semibold">
              <Bot className="w-3.5 h-3.5 text-blue-600" />
              <span>AI & ML Systems</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 font-semibold">
              <Zap className="w-3.5 h-3.5 text-sky-600" />
              <span>n8n Automation</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Next.js 16</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span>MongoDB</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
              <Cloud className="w-3.5 h-3.5 text-blue-600" />
              <span>AWS Cloud</span>
            </span>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-medium">
            <span>© 2026 Sanjay S. All rights reserved.</span>
            <span>•</span>
            <span>Chennai, Tamil Nadu, India</span>
            <span>•</span>
            <a href="#contact" className="hover:text-blue-600 transition font-bold text-blue-600">
              Contact / Send Message
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 border border-blue-200 transition"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs transition"
              title="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
