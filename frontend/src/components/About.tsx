'use client';

import React from 'react';
import {
  BrainCircuit,
  Bot,
  Zap,
  Layers,
  GraduationCap,
  MapPin,
  Sparkles,
  CheckCircle2,
  Workflow,
  Cpu,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Bot className="w-5 h-5 text-blue-600" />,
      title: "AI Development & LLM Engineering",
      description:
        "Building production AI solutions with sub-second inference using Groq API, prompt engineering, and conversational intelligence to automate user experiences.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      title: "Computer Vision & ML Classification",
      description:
        "Designing real-time Computer Vision pipelines using Python, OpenCV, and deep learning models achieving 90%+ recognition accuracy for gesture classification.",
    },
    {
      icon: <Workflow className="w-5 h-5 text-blue-600" />,
      title: "n8n Workflow Automation",
      description:
        "Orchestrating end-to-end multi-platform pipelines across Gmail, LinkedIn, Facebook, and custom webhooks with automated error recovery and data mapping.",
    },
    {
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      title: "Scalable Full-Stack Web Systems",
      description:
        "Bridging AI backends with modern client interfaces using Next.js 16, React 19, Node.js Express, MongoDB, and AWS cloud hosting environments.",
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>AI CAPABILITIES & PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            About <span className="text-blue-600">Sanjay S</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Dedicated AI Developer & Automation Specialist engineering practical intelligence into modern applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Story & Objective */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="card-white p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-32 bg-blue-600" />
              <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-blue-600" />
                <span>Engineering Focus & Philosophy</span>
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-4 font-normal">
                {PERSONAL_INFO.careerObjective}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                With an <strong className="text-slate-900 font-bold">83% aggregate in Computer Science & Engineering</strong> from Arunai Engineering College, I combine solid computational fundamentals with modern AI tooling (Groq LLM API, Python OpenCV, n8n Automation, Next.js, and MongoDB) to deliver tangible automation and smart software for clients and engineering teams.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-slate-900">83% B.E. Computer Science</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-800">Chennai, India</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-200">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-blue-800">AI & Automation Ready</span>
                </div>
              </div>
            </div>

            {/* Core Value Checklist */}
            <div className="card-white p-6 rounded-3xl">
              <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
                What I Deliver to Projects & Clients
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Sub-second AI LLM API integrations (Groq)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Full-cycle n8n workflow pipeline automation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Real-time Computer Vision gesture models (90%+)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Production cloud architecture on AWS with MongoDB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="card-white card-white-hover p-5 rounded-2xl flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 shrink-0 shadow-xs">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
