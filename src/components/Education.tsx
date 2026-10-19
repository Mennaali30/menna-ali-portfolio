"use client";

import React from "react";
import { educationData } from "@/data/portfolioData";
import {
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  Building2
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-white border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#202124] bg-[#F8F7F4] border border-[#E7E5E0] shadow-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>ACADEMIC CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Academic <span className="gradient-text-frontend">Education</span>
          </h2>
        </div>

        {/* Structured Education Card */}
        <div className="max-w-4xl mx-auto bg-[#F8F7F4] p-8 sm:p-10 rounded-3xl border border-[#E7E5E0] relative overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Credentials */}
            <div className="md:col-span-8 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFE5D9] text-[#202124] border border-[#F4ACB7]/60 flex items-center gap-1.5 shadow-xs">
                  <Award className="w-3.5 h-3.5 text-[#9D8189]" />
                  <span>{educationData.honors}</span>
                </span>

                <span className="text-xs font-mono text-[#686868] flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-[#E7E5E0]">
                  <Calendar className="w-3.5 h-3.5 text-[#9D8189]" />
                  <span>Graduation: {educationData.graduationDate}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202124] tracking-tight mb-2">
                {educationData.degree}
              </h3>

              <div className="flex items-center gap-2 text-[#202124] font-semibold text-sm sm:text-base mb-1">
                <Building2 className="w-4 h-4 text-[#9D8189]" />
                <span>{educationData.institution}</span>
              </div>

              <p className="text-xs font-mono text-[#686868] mb-6">
                {educationData.faculty}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-[#E7E5E0]">
                {educationData.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202124]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#9D8189] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Scoreboard Badges */}
            <div className="md:col-span-4 flex flex-col gap-3.5">
              <div className="p-5 rounded-2xl bg-white border border-[#E7E5E0] flex flex-col items-center justify-center text-center shadow-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#686868] mb-1 font-bold">
                  Cumulative GPA
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#202124]">
                  {educationData.gpa}
                </span>
                <span className="text-[11px] font-mono text-[#9D8189] font-semibold mt-1">
                  Excellent with Honors
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#6C63FF]/30 flex flex-col items-center justify-center text-center shadow-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#686868] mb-1 font-bold">
                  Graduation Project
                </span>
                <span className="text-3xl font-extrabold font-mono text-[#6C63FF]">
                  Grade A+
                </span>
                <span className="text-[11px] font-mono text-[#686868] mt-1">
                  Wasla ESL Recognition
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
