"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import DualSpecialtyGraphic from "./DualSpecialtyGraphic";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import {
  Mail,
  ArrowRight,
  MapPin,
  Layout,
  Brain,
  GraduationCap
} from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden grid-pattern-neutral"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/6 -translate-x-1/2 w-96 h-96 bg-[#FFE5D9]/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/6 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#FFCAD4]/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Information & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Dual Specialization Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFE5D9] text-[#202124] border border-[#F4ACB7]/60 shadow-xs">
                <Layout className="w-3.5 h-3.5 text-[#9D8189]" />
                <span>Frontend Developer</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F2FF] text-[#202124] border border-[#6C63FF]/30 shadow-xs">
                <Brain className="w-3.5 h-3.5 text-[#6C63FF]" />
                <span>AI & ML Engineer</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#686868] bg-white border border-[#E7E5E0] shadow-xs">
                <MapPin className="w-3 h-3 text-[#9D8189]" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

            {/* Greeting & Name */}
            <div className="mb-3">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#9D8189] font-bold flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#9D8189]" />
                Hello, I&apos;m
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] tracking-tight mt-1">
                {personalInfo.name}
              </h2>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#202124] leading-tight mb-5">
              {personalInfo.heroHeadline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#686868] max-w-2xl leading-relaxed mb-8">
              {personalInfo.heroSupporting}
            </p>

            {/* Primary Calls to Action */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo("featured-projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#202124] hover:bg-[#202124]/90 text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 text-[#FFCAD4]" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-[#F8F7F4] text-[#202124] border border-[#E7E5E0] hover:border-[#9D8189] shadow-xs transition-all duration-200 cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Educational Credential */}
            <div className="pt-6 border-t border-[#E7E5E0] w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#686868] font-mono">Connect:</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white hover:bg-[#FFE5D9]/40 text-[#202124] hover:text-[#9D8189] border border-[#E7E5E0] hover:border-[#F4ACB7] shadow-xs transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white hover:bg-[#F3F2FF] text-[#202124] hover:text-[#6C63FF] border border-[#E7E5E0] hover:border-[#6C63FF]/40 shadow-xs transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white hover:bg-[#F8F7F4] text-[#202124] hover:text-[#9D8189] border border-[#E7E5E0] hover:border-[#9D8189]/40 shadow-xs transition-all"
                  aria-label="Send Email"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Education Distinction */}
              <div className="flex items-center gap-2 text-xs text-[#686868] font-mono font-medium">
                <GraduationCap className="w-4 h-4 text-[#9D8189]" />
                <span>Capital University • GPA 3.67 (Honors)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dual Specialty Graphic Display */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <DualSpecialtyGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
