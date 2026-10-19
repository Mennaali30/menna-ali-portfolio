"use client";

import React, { useState } from "react";
import { skillGroups } from "@/data/portfolioData";
import {
  Terminal,
  Layout,
  Brain,
  Sparkles
} from "lucide-react";

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState<string>("All");

  const displayedGroups =
    activeGroup === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.title === activeGroup);

  const getGroupIcon = (specialty: string) => {
    switch (specialty) {
      case "frontend":
        return Layout;
      case "ai-ml":
        return Brain;
      default:
        return Sparkles;
    }
  };

  const getGroupAccent = (specialty: string) => {
    switch (specialty) {
      case "frontend":
        return {
          pill: "bg-[#FFE5D9] text-[#9D8189] border-[#F4ACB7]/50",
          badge: "bg-[#FFE5D9]/40 text-[#202124] border-[#F4ACB7]/40 hover:border-[#F4ACB7]",
          dot: "bg-[#F4ACB7]",
          cardBorder: "border-[#F4ACB7]/40 hover:border-[#F4ACB7]"
        };
      case "ai-ml":
        return {
          pill: "bg-[#F3F2FF] text-[#6C63FF] border-[#6C63FF]/30",
          badge: "bg-[#F3F2FF]/60 text-[#202124] border-[#6C63FF]/30 hover:border-[#6C63FF]",
          dot: "bg-[#6C63FF]",
          cardBorder: "border-[#6C63FF]/30 hover:border-[#6C63FF]"
        };
      default:
        return {
          pill: "bg-[#F8F7F4] text-[#202124] border-[#E7E5E0]",
          badge: "bg-white text-[#202124] border-[#E7E5E0] hover:border-[#9D8189]",
          dot: "bg-[#9D8189]",
          cardBorder: "border-[#E7E5E0] hover:border-[#9D8189]"
        };
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#F8F7F4] border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#202124] bg-white border border-[#E7E5E0] shadow-xs mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Grouped <span className="gradient-text-frontend">Skill Sets</span>
          </h2>
          <p className="mt-3 text-[#686868] max-w-2xl text-sm sm:text-base">
            Structured competencies across Frontend Development, Machine Learning, and Generative AI workflows.
          </p>
        </div>

        {/* Group Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveGroup("All")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
              activeGroup === "All"
                ? "bg-[#202124] text-white shadow-xs font-semibold"
                : "bg-white text-[#686868] border border-[#E7E5E0] hover:border-[#9D8189] hover:text-[#202124]"
            }`}
          >
            All Disciplines ({skillGroups.length})
          </button>

          {skillGroups.map((grp) => {
            const isActive = activeGroup === grp.title;
            const IconComp = getGroupIcon(grp.specialty);
            return (
              <button
                key={grp.title}
                type="button"
                onClick={() => setActiveGroup(grp.title)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#202124] text-white shadow-xs font-semibold"
                    : "bg-white text-[#686868] border border-[#E7E5E0] hover:border-[#9D8189] hover:text-[#202124]"
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{grp.title}</span>
              </button>
            );
          })}
        </div>

        {/* 3 Skill Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayedGroups.map((group) => {
            const IconComponent = getGroupIcon(group.specialty);
            const accent = getGroupAccent(group.specialty);

            return (
              <div
                key={group.title}
                className={`bg-white rounded-3xl p-7 sm:p-8 border ${accent.cardBorder} shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E7E5E0]">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-[#F8F7F4] border border-[#E7E5E0] text-[#202124]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#202124]">
                          {group.title}
                        </h3>
                        <span className="text-[11px] font-mono text-[#686868]">
                          {group.skills.length} competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#686868] mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors shadow-xs ${accent.badge}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer status */}
                <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between text-[11px] font-mono text-[#686868]">
                  <span>Practical Experience</span>
                  <span className="font-semibold text-[#202124]">Verified Work</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
