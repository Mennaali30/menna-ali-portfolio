"use client";

import React from "react";
import { educationData } from "@/data/portfolioData";
import {
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Building2,
  ScrollText
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#D8E2DC]/35">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#FFCAD4]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#222629] bg-white border border-[#9D8189]/30 shadow-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222629] tracking-tight">
            Education & <span className="gradient-text">Academic Honors</span>
          </h2>
          <p className="mt-3 text-[#222629]/75 max-w-2xl text-sm sm:text-base">
            Degree awarded with Excellent with Honors from the Faculty of Computer Science and Artificial Intelligence.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-[#9D8189]/25 relative overflow-hidden shadow-lg">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#FFCAD4]/30 via-[#D8E2DC]/20 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Academic Credentials */}
            <div className="md:col-span-8 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFCAD4]/60 text-[#222629] border border-[#F4ACB7]/50 flex items-center gap-1.5 shadow-xs">
                  <Award className="w-3.5 h-3.5 text-[#9D8189]" />
                  <span>{educationData.honors}</span>
                </span>

                <span className="text-xs font-mono text-[#9D8189] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#9D8189]" />
                  <span>{educationData.period}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222629] tracking-tight mb-2">
                {educationData.faculty}
              </h3>

              <div className="flex items-center gap-2 text-[#222629]/80 font-semibold text-base mb-1">
                <Building2 className="w-4 h-4 text-[#9D8189]" />
                <span>{educationData.institution}</span>
              </div>

              <p className="text-sm font-mono text-[#9D8189] mb-6 font-semibold">
                {educationData.department}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-4 border-t border-[#D8E2DC]">
                {educationData.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#222629]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#9D8189] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Academic Scoreboard Badges */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-[#222629] border border-[#9D8189]/30 flex flex-col items-center justify-center text-center shadow-md text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D8E2DC] mb-1">
                  Cumulative GPA
                </span>
                <span className="text-4xl font-extrabold font-mono text-white">
                  {educationData.gpa}
                </span>
                <span className="text-[11px] font-mono text-[#D8E2DC]/80 mt-1">
                  Top Tier Distinction
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#222629] border border-[#9D8189]/30 flex flex-col items-center justify-center text-center shadow-md text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D8E2DC] mb-1">
                  Graduation Project
                </span>
                <span className="text-3xl font-extrabold font-mono text-[#F4ACB7]">
                  Grade A+
                </span>
                <span className="text-[11px] text-[#D8E2DC]/80 mt-1">
                  WASLA Recognition System
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
