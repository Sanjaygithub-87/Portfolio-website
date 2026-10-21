'use client';

import React, { useState, useEffect } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  Bot,
  Zap,
  Server,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { API_BASE_URL } from '../lib/api';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'AI & ML' | 'Full Stack' | 'Automation'>('All');
  const [projects, setProjects] = useState<ProjectItem[]>(PROJECTS_DATA);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Attempt to fetch dynamically from Node backend API if available
    const fetchApiProjects = async () => {
      try {
        const url = API_BASE_URL ? `${API_BASE_URL}/api/projects` : '/api/projects';
        const res = await fetch(url);
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            // Map MongoDB projects to frontend format
            const mapped: ProjectItem[] = json.data.map((p: any) => ({
              id: p._id || p.id || p.title.toLowerCase().replace(/\s+/g, '-'),
              title: p.title,
              subtitle: p.subtitle || '',
              category: p.category || 'Full Stack',
              description: p.description,
              highlights: p.highlights || [],
              techStack: p.techStack || [],
              githubUrl: p.githubUrl || 'https://github.com/Sanjay-dev045',
              liveUrl: p.liveUrl,
              featured: p.featured ?? true,
              metrics: p.category === 'AI & ML' ? 'High Accuracy' : 'Production Grade',
            }));
            setProjects(mapped);
          }
        }
      } catch (err) {
        // Graceful fallback to static resume data
      }
    };

    fetchApiProjects();
  }, []);

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'AI & ML':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-950/80 border border-purple-800/60 text-purple-300">
            <Bot className="w-3 h-3" />
            AI & Machine Learning
          </span>
        );
      case 'Automation':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-950/80 border border-amber-800/60 text-amber-300">
            <Zap className="w-3 h-3" />
            Automation & n8n
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-800/60 text-cyan-300">
            <Server className="w-3 h-3" />
            Full-Stack Engineering
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="text-cyan-400">Engineering Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Real applications built with modern frameworks, machine learning models, database systems, and automated pipelines.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(['All', 'AI & ML', 'Full Stack', 'Automation'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-slate-800/90 relative overflow-hidden group"
            >
              {/* Subtle accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-80" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  {getCategoryBadge(project.category)}
                  {project.metrics && (
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded-md">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-4">{project.subtitle}</p>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">{project.description}</p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium text-slate-300 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-lg"
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
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition"
                  >
                    <span>Inquire</span>
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
