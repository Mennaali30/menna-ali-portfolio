"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/portfolioData";
import {
  Code,
  Brain,
  Network,
  Eye,
  MessageSquare,
  Layers,
  Wrench,
  Cpu,
  UserCheck,
  CheckCircle,
  Sparkles,
  Terminal
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Programming Languages":
        return Code;
      case "AI & Machine Learning":
        return Brain;
      case "Deep Learning & Neural Networks":
        return Network;
      case "Computer Vision":
        return Eye;
      case "Natural Language Processing (NLP)":
        return MessageSquare;
      case "Libraries & Frameworks":
        return Layers;
      case "Tools & Environments":
        return Wrench;
      case "Software Engineering & Concepts":
        return Cpu;
      default:
        return UserCheck;
    }
  };

  const displayedCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#D8E2DC]/35">
      {/* Decorative glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFCAD4]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#222629] bg-white border border-[#9D8189]/30 shadow-xs mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222629] tracking-tight">
            Comprehensive <span className="gradient-text">Skill Architecture</span>
          </h2>
          <p className="mt-3 text-[#222629]/75 max-w-2xl text-sm sm:text-base">
            Systematic technical competencies across programming, deep neural architectures, vision pipelines, language modeling, and modern tools.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === "All"
                ? "bg-[#F4ACB7] text-[#222629] border border-[#F4ACB7] shadow-md shadow-[#F4ACB7]/25 font-semibold"
                : "bg-white text-[#222629] border border-[#D8E2DC] hover:border-[#9D8189] hover:bg-[#D8E2DC]/40 shadow-xs"
            }`}
          >
            All Categories ({skillCategories.length})
          </button>

          {skillCategories.map((cat) => {
            const IconComp = getCategoryIcon(cat.title);
            const isActive = activeCategory === cat.title;
            return (
              <button
                key={cat.title}
                type="button"
                onClick={() => setActiveCategory(cat.title)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#F4ACB7] text-[#222629] border border-[#F4ACB7] shadow-md shadow-[#F4ACB7]/25 font-semibold"
                    : "bg-white text-[#222629] border border-[#D8E2DC] hover:border-[#9D8189] hover:bg-[#D8E2DC]/40 shadow-xs"
                }`}
              >
                <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-[#222629]" : "text-[#9D8189]"}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const IconComponent = getCategoryIcon(category.title);
            return (
              <div
                key={category.title}
                className="glass-panel rounded-2xl p-6 border border-[#9D8189]/20 hover:border-[#F4ACB7] shadow-xs transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#D8E2DC]">
                    <div className="w-10 h-10 rounded-xl bg-[#D8E2DC]/50 border border-[#9D8189]/25 text-[#9D8189] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#FFCAD4] group-hover:text-[#222629] transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#222629] group-hover:text-[#9D8189] transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[#9D8189]">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-[#222629] border border-[#D8E2DC] hover:border-[#F4ACB7] hover:bg-[#FFCAD4]/30 shadow-xs transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F4ACB7]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-6 pt-3 border-t border-[#D8E2DC] flex items-center justify-between text-[10px] font-mono text-[#9D8189]">
                  <span>Production Ready</span>
                  <span className="text-[#9D8189] font-medium">Verified Experience</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
