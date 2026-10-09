"use client";

import React, { useState } from "react";
import { featuredProject } from "@/data/portfolioData";
import { GithubIcon } from "./SocialIcons";
import {
  Award,
  CheckCircle2,
  Monitor,
  Smartphone,
  Globe,
  Activity,
  ArrowRight,
  ArrowUpRight,
  Smile,
  HandMetal,
  ShieldCheck
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFCAD4]/60 text-[#222629] border border-[#F4ACB7]/50 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>FEATURED GRADUATION SHOWCASE • GRADE A+</span>
          </span>
        </div>

        {/* Big Showcase Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#9D8189]/25 relative overflow-hidden shadow-lg">
          {/* Ambient decorative lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FFCAD4]/30 via-[#D8E2DC]/30 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Project Overview */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-[#D8E2DC]/60 text-[#222629] border border-[#9D8189]/30">
                  Computer Vision & Deep Learning
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-white text-[#222629] border border-[#D8E2DC]">
                  91.74% Accuracy
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-[#FFCAD4]/50 text-[#222629] border border-[#F4ACB7]/40">
                  June 2026
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222629] tracking-tight leading-snug mb-4">
                {featuredProject.title}
              </h3>

              <p className="text-[#222629]/80 text-sm sm:text-base leading-relaxed mb-6">
                {featuredProject.description}
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#D8E2DC]/30 border border-[#9D8189]/20 shadow-xs">
                  <div className="flex items-center gap-2 text-[#9D8189] mb-1">
                    <HandMetal className="w-4 h-4 text-[#9D8189]" />
                    <span className="text-xs font-mono uppercase text-[#9D8189]">Vocabulary</span>
                  </div>
                  <div className="text-lg font-bold text-[#222629] font-mono">47 Signs</div>
                  <div className="text-[11px] text-[#222629]/70">Egyptian Sign Language</div>
                </div>

                <div className="p-3 rounded-xl bg-[#D8E2DC]/30 border border-[#9D8189]/20 shadow-xs">
                  <div className="flex items-center gap-2 text-[#9D8189] mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#9D8189]" />
                    <span className="text-xs font-mono uppercase text-[#9D8189]">Benchmark</span>
                  </div>
                  <div className="text-lg font-bold text-[#222629] font-mono">91.74%</div>
                  <div className="text-[11px] text-[#222629]/70">Validation Accuracy</div>
                </div>

                <div className="p-3 rounded-xl bg-[#D8E2DC]/30 border border-[#9D8189]/20 shadow-xs col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-[#9D8189] mb-1">
                    <Smile className="w-4 h-4 text-[#9D8189]" />
                    <span className="text-xs font-mono uppercase text-[#9D8189]">Affect</span>
                  </div>
                  <div className="text-lg font-bold text-[#222629] font-mono">Emotion</div>
                  <div className="text-[11px] text-[#222629]/70">Facial Micro-Expressions</div>
                </div>
              </div>

              {/* Multi-Platform Deployment Badges */}
              <div className="mb-6 p-3.5 rounded-xl bg-white border border-[#D8E2DC] flex flex-wrap items-center gap-4 text-xs font-mono text-[#222629] shadow-xs">
                <span className="text-[#9D8189] flex items-center gap-1.5 font-sans font-semibold">
                  <span>Deployment Targets:</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#D8E2DC]/50 border border-[#9D8189]/20 text-[#222629]">
                  <Globe className="w-3.5 h-3.5 text-[#9D8189]" /> Web Platform
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#D8E2DC]/50 border border-[#9D8189]/20 text-[#222629]">
                  <Monitor className="w-3.5 h-3.5 text-[#9D8189]" /> Desktop App
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#D8E2DC]/50 border border-[#9D8189]/20 text-[#222629]">
                  <Smartphone className="w-3.5 h-3.5 text-[#9D8189]" /> Mobile App
                </span>
              </div>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-[#222629] border border-[#D8E2DC] shadow-xs"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#F4ACB7] hover:bg-[#F4ACB7]/90 text-[#222629] border border-[#F4ACB7] shadow-md shadow-[#F4ACB7]/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Explore Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={featuredProject.githubUrl || "https://github.com/abdullahsherdy/ESL-software-ml"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-[#D8E2DC]/40 text-[#222629] border border-[#9D8189]/30 transition-colors cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9D8189]" />
                </a>
              </div>
            </div>

            {/* Right Column: Case Study Interactive Pipeline Navigator */}
            <div className="lg:col-span-5 flex flex-col rounded-2xl bg-[#222629] border border-[#9D8189]/30 p-5 shadow-lg text-white">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#9D8189]/30">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D8E2DC] font-bold uppercase tracking-wider">
                  <Activity className="w-4 h-4 text-[#F4ACB7]" />
                  <span>Case Study Lifecycle</span>
                </div>
                <span className="text-[11px] font-mono text-[#D8E2DC]/80">WASLA System</span>
              </div>

              {/* Case Study Step Tabs */}
              <div className="flex flex-wrap gap-1 mb-4 p-1 rounded-xl bg-[#222629] border border-[#9D8189]/30">
                {(["problem", "approach", "technologies", "results", "deployment"] as const).map((step) => {
                  const isActive = activeTab === step;
                  return (
                    <button
                      key={step}
                      type="button"
                      onClick={() => setActiveTab(step)}
                      className={`flex-1 py-1.5 px-2 text-center rounded-lg text-xs capitalize font-medium transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#F4ACB7] text-[#222629] font-semibold border border-[#F4ACB7] shadow-xs"
                          : "text-[#D8E2DC]/70 hover:text-white"
                      }`}
                    >
                      {step}
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Content Area */}
              <div className="min-h-[220px] p-4 rounded-xl bg-[#222629] border border-[#9D8189]/25 flex flex-col justify-between">
                {activeTab === "problem" && (
                  <div>
                    <span className="text-xs font-mono text-[#FFCAD4] uppercase tracking-wide block mb-2 font-semibold">
                      01 • Problem Statement
                    </span>
                    <p className="text-[#D8E2DC] text-xs sm:text-sm leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>
                )}

                {activeTab === "approach" && (
                  <div>
                    <span className="text-xs font-mono text-[#FFCAD4] uppercase tracking-wide block mb-2 font-semibold">
                      02 • Technical Approach
                    </span>
                    <p className="text-[#D8E2DC] text-xs sm:text-sm leading-relaxed">
                      {cs.approach}
                    </p>
                  </div>
                )}

                {activeTab === "technologies" && (
                  <div>
                    <span className="text-xs font-mono text-[#FFCAD4] uppercase tracking-wide block mb-2 font-semibold">
                      03 • Core Stack & Frameworks
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#D8E2DC]">
                      {cs.technologies.map((t, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F4ACB7] shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "results" && (
                  <div>
                    <span className="text-xs font-mono text-[#FFCAD4] uppercase tracking-wide block mb-2 font-semibold">
                      04 • Verified Empirical Results
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#D8E2DC]">
                      {cs.results.map((r, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F4ACB7] shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "deployment" && (
                  <div>
                    <span className="text-xs font-mono text-[#FFCAD4] uppercase tracking-wide block mb-2 font-semibold">
                      05 • Production Delivery
                    </span>
                    <p className="text-[#D8E2DC] text-xs sm:text-sm leading-relaxed">
                      {cs.deployment}
                    </p>
                  </div>
                )}

                {/* Pipeline visual micro-flow */}
                <div className="pt-3 mt-4 border-t border-[#9D8189]/30 flex items-center justify-between text-[11px] font-mono text-[#D8E2DC]/70">
                  <span>Stream Input</span>
                  <span>→</span>
                  <span className="text-[#FFCAD4]">MediaPipe</span>
                  <span>→</span>
                  <span className="text-[#F4ACB7]">Deep Learning</span>
                  <span>→</span>
                  <span className="text-[#D8E2DC] font-bold">47 Classes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
