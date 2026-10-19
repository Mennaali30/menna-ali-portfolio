"use client";

import React, { useState } from "react";
import { aiMlProjects } from "@/data/portfolioData";
import { GithubIcon } from "./SocialIcons";
import {
  Brain,
  ArrowUpRight,
  ShieldAlert,
  ExternalLink,
  BookOpen,
  Eye,
  MessageSquare,
  Network,
  BarChart3
} from "lucide-react";

export default function AiMlProjects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = [
    "All",
    "Computer Vision",
    "Deep Learning",
    "Machine Learning",
    "NLP"
  ];

  const filteredProjects = aiMlProjects.filter((p) => {
    if (selectedFilter === "All") return true;
    return p.categories.includes(selectedFilter);
  });

  const getDomainIcon = (categories: string[]) => {
    if (categories.includes("Computer Vision")) return Eye;
    if (categories.includes("NLP")) return MessageSquare;
    if (categories.includes("Deep Learning")) return Network;
    return BarChart3;
  };

  return (
    <section id="ai-ml" className="py-24 relative overflow-hidden bg-white border-b border-[#E7E5E0]">
      {/* Violet ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#6C63FF] bg-[#F3F2FF] border border-[#6C63FF]/30 shadow-xs mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>AI & MACHINE LEARNING SPECIALTY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            AI & Machine Learning <span className="gradient-text-aiml">Projects</span>
          </h2>
          <p className="mt-3 text-[#686868] max-w-2xl text-sm sm:text-base">
            End-to-end models across multimodal sign perception, neural translation, predictive churn modeling, and computer vision.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat;
            const count =
              cat === "All"
                ? aiMlProjects.length
                : aiMlProjects.filter((p) => p.categories.includes(cat)).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#6C63FF] text-white shadow-md shadow-[#6C63FF]/25 font-semibold"
                    : "bg-[#F8F7F4] text-[#202124] border border-[#E7E5E0] hover:border-[#6C63FF] hover:bg-[#F3F2FF]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isActive
                      ? "bg-white/20 text-white font-bold"
                      : "bg-[#E7E5E0] text-[#686868]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const DomainIcon = getDomainIcon(project.categories);
            return (
              <div
                key={project.id}
                className="bg-[#F8F7F4] rounded-3xl p-6 sm:p-7 border border-[#E7E5E0] hover:border-[#6C63FF] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header: Domain glyph & date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-white border border-[#6C63FF]/25 text-[#6C63FF] shadow-xs">
                        <DomainIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#6C63FF] block uppercase font-bold">
                          {project.subtitle || "Machine Learning"}
                        </span>
                        <span className="text-[11px] font-mono text-[#686868]">
                          {project.date}
                        </span>
                      </div>
                    </div>

                    {project.grade && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#F3F2FF] text-[#6C63FF] border border-[#6C63FF]/30">
                        {project.grade}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#202124] group-hover:text-[#6C63FF] transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#686868] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Verified Metric Pill Card */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div
                          key={m.label}
                          className="p-2.5 rounded-xl bg-white border border-[#E7E5E0] text-center"
                        >
                          <div className="text-[10px] font-mono text-[#686868]">
                            {m.label}
                          </div>
                          <div className="text-xs font-bold text-[#6C63FF]">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Educational Disclaimer for CardioSense */}
                  {project.disclaimer && (
                    <div className="text-[11px] text-[#686868] bg-white p-2.5 rounded-xl border border-[#E7E5E0] mb-4 flex items-start gap-1.5 leading-snug">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{project.disclaimer}</span>
                    </div>
                  )}

                  {/* Note for ngrok or team project */}
                  {project.note && (
                    <p className="text-[11px] text-[#686868] italic mb-4 leading-tight bg-white p-2 rounded-lg border border-[#E7E5E0]">
                      ℹ️ {project.note}
                    </p>
                  )}

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {project.technologies.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white text-[#202124] border border-[#E7E5E0]"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#F3F2FF] text-[#6C63FF] border border-[#6C63FF]/30">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between gap-2 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-white hover:bg-[#202124] text-[#202124] hover:text-white border border-[#E7E5E0] transition-all cursor-pointer shadow-xs"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-[#6C63FF] hover:bg-[#6C63FF]/90 text-white transition-all cursor-pointer shadow-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  {project.colabUrl && (
                    <a
                      href={project.colabUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-white hover:bg-amber-500 hover:text-white text-[#202124] border border-[#E7E5E0] transition-all cursor-pointer shadow-xs"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                      <span>Colab Notebook</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
