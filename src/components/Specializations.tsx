"use client";

import React from "react";
import { specializationCards } from "@/data/portfolioData";
import {
  Layout,
  Brain,
  ArrowRight,
  Layers
} from "lucide-react";

export default function Specializations() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  return (
    <section id="specializations" className="py-20 relative overflow-hidden bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#202124] bg-white border border-[#E7E5E0] shadow-xs mb-3">
            <Layers className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>CORE PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Two Core <span className="gradient-text-frontend">Specializations</span>
          </h2>
          <p className="mt-3 text-[#686868] max-w-2xl text-sm sm:text-base">
            Clearly separated technical identities engineered for modern web applications and data-driven intelligence.
          </p>
        </div>

        {/* Two Cards Side by Side on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Frontend Development (Soft Pink Palette) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F4ACB7]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Soft pink ambient corner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FFE5D9]/70 via-[#FFCAD4]/30 to-transparent pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFE5D9] border border-[#F4ACB7]/60 flex items-center justify-center text-[#202124] shadow-xs">
                    <Layout className="w-6 h-6 text-[#9D8189]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#202124]">
                      {specializationCards.frontend.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-[#9D8189]">
                      {specializationCards.frontend.subtitle}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#FFE5D9] text-[#202124] border border-[#F4ACB7]/50 font-bold uppercase">
                  Specialty 01
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#686868] leading-relaxed mb-6 relative z-10">
                {specializationCards.frontend.description}
              </p>

              {/* Technologies & Skills List */}
              <div className="mb-8 relative z-10">
                <span className="text-xs font-mono text-[#9D8189] uppercase tracking-wider block mb-3 font-bold">
                  Technologies & Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {specializationCards.frontend.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#F8F7F4] text-[#202124] border border-[#E7E5E0] hover:border-[#F4ACB7] hover:bg-[#FFE5D9]/40 transition-colors shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4ACB7]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-6 border-t border-[#E7E5E0] flex items-center justify-between relative z-10">
              <span className="text-xs font-mono text-[#686868]">
                {specializationCards.frontend.tagline}
              </span>
              <button
                type="button"
                onClick={() => scrollTo("frontend-projects")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#202124] hover:text-[#9D8189] transition-colors cursor-pointer group/btn"
              >
                <span>View Frontend Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Card 2: AI & Machine Learning (Violet Palette) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#6C63FF]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Violet ambient corner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F3F2FF] via-[#6C63FF]/10 to-transparent pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3F2FF] border border-[#6C63FF]/40 flex items-center justify-center text-[#6C63FF] shadow-xs">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#202124]">
                      {specializationCards.aiml.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-[#6C63FF]">
                      {specializationCards.aiml.subtitle}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#F3F2FF] text-[#6C63FF] border border-[#6C63FF]/30 font-bold uppercase">
                  Specialty 02
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#686868] leading-relaxed mb-6 relative z-10">
                {specializationCards.aiml.description}
              </p>

              {/* Technologies & Skills List */}
              <div className="mb-8 relative z-10">
                <span className="text-xs font-mono text-[#6C63FF] uppercase tracking-wider block mb-3 font-bold">
                  Technologies & Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {specializationCards.aiml.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#F8F7F4] text-[#202124] border border-[#E7E5E0] hover:border-[#6C63FF] hover:bg-[#F3F2FF] transition-colors shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-6 border-t border-[#E7E5E0] flex items-center justify-between relative z-10">
              <span className="text-xs font-mono text-[#686868]">
                {specializationCards.aiml.tagline}
              </span>
              <button
                type="button"
                onClick={() => scrollTo("ai-ml-projects")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6C63FF] hover:text-[#202124] transition-colors cursor-pointer group/btn"
              >
                <span>View AI & ML Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
