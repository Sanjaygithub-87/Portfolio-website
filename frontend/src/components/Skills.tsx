'use client';

import React, { useState } from 'react';
import {
  Layout,
  Server,
  Database,
  Zap,
  BarChart3,
  Cpu,
  CheckCircle,
  Bot,
  BrainCircuit,
  Sparkles,
  Palette,
  Workflow,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'ai':
        return <Bot className="w-4 h-4 text-blue-600" />;
      case 'automation':
        return <Zap className="w-4 h-4 text-sky-600" />;
      case 'frontend':
        return <Palette className="w-4 h-4 text-indigo-600" />;
      case 'database':
        return <Database className="w-4 h-4 text-blue-600" />;
      case 'tools':
        return <BarChart3 className="w-4 h-4 text-slate-700" />;
      default:
        return <BrainCircuit className="w-4 h-4 text-blue-600" />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.categoryKey === activeCategory);

  return (
    <section id="skills" className="py-20 border-t border-slate-200 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>AI, AUTOMATION &amp; FULL-STACK TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Engineering &amp; <span className="text-blue-600">AI Skill Stack</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Categorized toolkit encompassing Agentic Artificial Intelligence, enterprise n8n workflow automations, Google Stitch UI/UX design, and production cloud architectures.
          </p>
        </div>

        {/* Highlighted Spotlight Cards (Kannula Padura Edathula) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          
          {/* Card 1: n8n Automation */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-sky-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-3 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-sky-700">n8n Automation</h3>
              <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">Expert</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Multi-channel pipelines, event webhooks, Gmail/LinkedIn routing &amp; self-healing fault tolerance.
            </p>
          </div>

          {/* Card 2: Antigravity Agentic AI */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3 group-hover:scale-105 transition-transform">
              <Bot className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-blue-700">Antigravity AI</h3>
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">DeepMind</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Advanced agentic coding, multi-agent orchestration, automated code generation &amp; validation loops.
            </p>
          </div>

          {/* Card 3: Google Stitch UI/UX */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-3 group-hover:scale-105 transition-transform">
              <Palette className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-indigo-700">Google Stitch UI/UX</h3>
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">Design</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Rapid visual UI/UX prototyping, design-to-code component architectures &amp; modern user experiences.
            </p>
          </div>

          {/* Card 4: Prompt Engineering */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-blue-700">Prompt Engineering</h3>
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">&lt;1s Latency</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Chain-of-Thought (CoT), precision context conditioning, system prompt tuning &amp; Groq LPU inference.
            </p>
          </div>

        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-fit mx-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.categoryKey}
              onClick={() => setActiveCategory(cat.categoryKey)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.categoryKey
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {getCategoryIcon(cat.categoryKey)}
              <span>{cat.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Categories Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.categoryKey}
              className="card-white card-white-hover p-6 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-xs">
                      {getCategoryIcon(cat.categoryKey)}
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900">{cat.title}</h3>
                  </div>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-lg">
                    {cat.skills.length} Skills
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed">{cat.description}</p>

                {/* Skills list with progress meters */}
                <div className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800">{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Verified in production projects</span>
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
