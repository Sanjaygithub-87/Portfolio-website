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
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'ai':
        return <Bot className="w-4 h-4 text-blue-600" />;
      case 'automation':
        return <Zap className="w-4 h-4 text-blue-600" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-blue-600" />;
      case 'database':
        return <Database className="w-4 h-4 text-blue-600" />;
      case 'tools':
        return <BarChart3 className="w-4 h-4 text-blue-600" />;
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
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>AI, AUTOMATION & FULL-STACK TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Engineering & <span className="text-blue-600">AI Skill Stack</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Categorized toolkit encompassing modern Artificial Intelligence, multi-platform n8n workflows, full-stack web architectures, and cloud services.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm">
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
