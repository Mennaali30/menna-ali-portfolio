"use client";

import React, { useState } from "react";
import { featuredProject } from "@/data/portfolioData";
import {
  Sparkles,
  Award,
  CheckCircle2,
  Layers,
  Monitor,
  Smartphone,
  Globe,
  Activity,
  ArrowRight,
  Eye,
  Smile,
  HandMetal,
  Cpu,
  ShieldCheck,
  FolderGit2
} from "lucide-react";

interface FeaturedProjectProps {
  onOpenModal: () => void;
}

export default function FeaturedProject({ onOpenModal }: FeaturedProjectProps) {
  const [activeTab, setActiveTab] = useState<"problem" | "approach" | "technologies" | "results" | "deployment">("problem");

  const cs = featuredProject.caseStudy!;

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>FEATURED GRADUATION SHOWCASE • GRADE A+</span>
          </span>
        </div>

        {/* Big Showcase Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-indigo-500/25 relative overflow-hidden shadow-2xl shadow-indigo-950/40">
          {/* Ambient decorative lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Project Overview */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                  Computer Vision & Deep Learning
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                  91.74% Accuracy
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-500/30">
                  June 2026
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4">
                {featuredProject.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {featuredProject.description}
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <HandMetal className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase text-slate-400">Vocabulary</span>
                  </div>
                  <div className="text-lg font-bold text-white font-mono">47 Signs</div>
                  <div className="text-[11px] text-slate-400">Egyptian Sign Language</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase text-slate-400">Benchmark</span>
                  </div>
                  <div className="text-lg font-bold text-emerald-400 font-mono">91.74%</div>
                  <div className="text-[11px] text-slate-400">Validation Accuracy</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-purple-400 mb-1">
                    <Smile className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase text-slate-400">Affect</span>
                  </div>
                  <div className="text-lg font-bold text-purple-300 font-mono">Emotion</div>
                  <div className="text-[11px] text-slate-400">Facial Micro-Expressions</div>
                </div>
              </div>

              {/* Multi-Platform Deployment Badges */}
              <div className="mb-6 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                <span className="text-slate-400 flex items-center gap-1.5 font-sans font-semibold">
                  <span>Deployment Targets:</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 text-cyan-300">
                  <Globe className="w-3.5 h-3.5" /> Web Platform
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 text-indigo-300">
                  <Monitor className="w-3.5 h-3.5" /> Desktop App
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 text-purple-300">
                  <Smartphone className="w-3.5 h-3.5" /> Mobile App
                </span>
              </div>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Primary Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-600/30 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Explore Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={onOpenModal}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors cursor-pointer"
                >
                  <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Architecture & Pipeline</span>
                </button>
              </div>
            </div>

            {/* Right Column: Case Study Interactive Pipeline Navigator */}
            <div className="lg:col-span-5 flex flex-col rounded-2xl bg-slate-950/70 border border-indigo-500/20 p-5 shadow-inner">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  <Activity className="w-4 h-4" />
                  <span>Case Study Lifecycle</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">WASLA System</span>
              </div>

              {/* Case Study Step Tabs */}
              <div className="flex flex-wrap gap-1 mb-4 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
                {(["problem", "approach", "technologies", "results", "deployment"] as const).map((step) => {
                  const isActive = activeTab === step;
                  return (
                    <button
                      key={step}
                      type="button"
                      onClick={() => setActiveTab(step)}
                      className={`flex-1 py-1.5 px-2 text-center rounded-lg text-xs capitalize font-medium transition-all cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/30 text-cyan-300 border border-cyan-500/30 font-semibold"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {step}
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Content Area */}
              <div className="min-h-[220px] p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col justify-between">
                {activeTab === "problem" && (
                  <div>
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wide block mb-2">
                      01 • Problem Statement
                    </span>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>
                )}

                {activeTab === "approach" && (
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wide block mb-2">
                      02 • Technical Approach
                    </span>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {cs.approach}
                    </p>
                  </div>
                )}

                {activeTab === "technologies" && (
                  <div>
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-wide block mb-2">
                      03 • Core Stack & Frameworks
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {cs.technologies.map((t, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "results" && (
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wide block mb-2">
                      04 • Verified Empirical Results
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {cs.results.map((r, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "deployment" && (
                  <div>
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wide block mb-2">
                      05 • Production Delivery
                    </span>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {cs.deployment}
                    </p>
                  </div>
                )}

                {/* Pipeline visual micro-flow */}
                <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Stream Input</span>
                  <span>→</span>
                  <span className="text-cyan-400">MediaPipe</span>
                  <span>→</span>
                  <span className="text-indigo-400">Deep Learning</span>
                  <span>→</span>
                  <span className="text-emerald-400">47 Classes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
