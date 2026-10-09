"use client";

import React from "react";
import { experienceData } from "@/data/portfolioData";
import {
  Briefcase,
  CheckCircle2,
  Calendar,
  Sparkles,
  Bot,
  BrainCircuit,
  ArrowRight
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#FFCAD4]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#222629] bg-white border border-[#9D8189]/30 shadow-xs mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>INDUSTRY & TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222629] tracking-tight">
            Professional <span className="gradient-text">Experience & Training</span>
          </h2>
          <p className="mt-3 text-[#222629]/75 max-w-2xl text-sm sm:text-base">
            Active engagements in national AI development initiatives and applied machine learning research.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Bar */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#9D8189] via-[#F4ACB7] to-[#D8E2DC] hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-[#F4ACB7] items-center justify-center shadow-md shadow-[#F4ACB7]/30 z-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#222629]" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#9D8189]/20 hover:border-[#F4ACB7] shadow-xs transition-all duration-300 relative group">
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#D8E2DC]/60 text-[#222629] border border-[#9D8189]/30 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9D8189]" />
                          {item.status}
                        </span>

                        <span className="text-xs font-mono text-[#9D8189] flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#9D8189]" />
                          {item.period}
                        </span>
                      </div>

                      {/* Organization & Role */}
                      <h3 className="text-xl font-bold text-[#222629] group-hover:text-[#9D8189] transition-colors mb-1">
                        {item.organization}
                      </h3>

                      <div className="text-sm font-semibold text-[#9D8189] font-mono mb-1">
                        Role: {item.role}
                      </div>

                      {item.track && (
                        <div className="text-xs font-medium text-[#222629] bg-[#D8E2DC]/40 border border-[#9D8189]/25 px-3 py-1 rounded-lg inline-block mb-4">
                          Track: {item.track}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-[#222629]/75 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-5">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#222629]/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#9D8189] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#D8E2DC]">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white text-[#222629] border border-[#D8E2DC] shadow-xs"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
