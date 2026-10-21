'use client';

import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Bot,
  Zap,
  Server,
  Layers,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'AI & ML' | 'Automation' | 'Full Stack'>('All');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredProjects =
    filter === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter((p) => p.category === filter);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'AI & ML':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 border border-blue-200 text-blue-700">
            <Bot className="w-3.5 h-3.5 text-blue-600" />
            AI & Machine Learning
          </span>
        );
      case 'Automation':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 border border-sky-200 text-sky-700">
            <Zap className="w-3.5 h-3.5 text-sky-600" />
            n8n Automation Pipeline
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 border border-slate-200 text-slate-700">
            <Server className="w-3.5 h-3.5 text-blue-600" />
            Full-Stack System
          </span>
        );
    }
  };

  const getProjectVisualGraphic = (project: ProjectItem) => {
    if (project.category === 'AI & ML') {
      return (
        <div className="w-full h-full bg-gradient-to-tr from-blue-50 via-sky-50 to-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden border-b border-slate-200">
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[10px] font-bold shadow-xs">
            <Bot className="w-3 h-3" />
            <span>AI MODEL</span>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-blue-600/25">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <span className="text-slate-900 font-extrabold text-sm sm:text-base tracking-wide">
            {project.title}
          </span>
          <span className="text-xs text-blue-600 font-bold mt-1">
            {project.metrics}
          </span>
        </div>
      );
    }

    if (project.category === 'Automation') {
      return (
        <div className="w-full h-full bg-gradient-to-tr from-sky-50 via-blue-50 to-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden border-b border-slate-200">
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-600 text-white text-[10px] font-bold shadow-xs">
            <Zap className="w-3 h-3" />
            <span>n8n WORKFLOW</span>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-sky-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-sky-600/25">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <span className="text-slate-900 font-extrabold text-sm sm:text-base tracking-wide">
            {project.title}
          </span>
          <span className="text-xs text-sky-700 font-bold mt-1">
            {project.metrics}
          </span>
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-gradient-to-tr from-slate-100 via-slate-50 to-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 text-white text-[10px] font-bold shadow-xs">
          <Server className="w-3 h-3" />
          <span>PRODUCTION</span>
        </div>
        <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-white mb-3 shadow-lg shadow-slate-900/10">
          <Server className="w-8 h-8 text-white" />
        </div>
        <span className="text-slate-900 font-extrabold text-sm sm:text-base tracking-wide">
          {project.title}
        </span>
        <span className="text-xs text-slate-700 font-bold mt-1">
          {project.metrics}
        </span>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3 shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
            <span>ENGINEERED AI & AUTOMATION SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Featured <span className="text-blue-600">AI & Engineering Projects</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Real systems showcasing sub-second LLM integrations, Computer Vision models, n8n automations, and enterprise web platforms.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {(['All', 'AI & ML', 'Automation', 'Full Stack'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {cat === 'All' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-white card-white-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                
                {/* Visual Project Photo / Mockup Container */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100 border-b border-slate-200">
                  {project.imageUrl && !imageErrors[project.id] ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      onError={() =>
                        setImageErrors((prev) => ({ ...prev, [project.id]: true }))
                      }
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    getProjectVisualGraphic(project)
                  )}

                  {/* Top Subtle Blue Line */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-blue-600" />
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    {getCategoryBadge(project.category)}
                    {project.metrics && (
                      <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-lg">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mb-4">{project.subtitle}</p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Bottom Tech Pills & Actions */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-xl transition"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-800" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-md shadow-blue-600/20"
                  >
                    <span>Discuss AI</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
