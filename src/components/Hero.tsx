"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import AiNeuralGraphic from "./AiNeuralGraphic";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import {
  Mail,
  ArrowRight,
  MapPin,
  BrainCircuit,
  GraduationCap
} from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden ai-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D8E2DC]/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-[#FFCAD4]/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#F4ACB7]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & Location Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#D8E2DC]/60 text-[#222629] border border-[#9D8189]/30 shadow-xs">
                <BrainCircuit className="w-3.5 h-3.5 text-[#9D8189]" />
                <span>Specialized in AI & Deep Learning</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#222629] bg-white border border-[#D8E2DC] shadow-xs">
                <MapPin className="w-3 h-3 text-[#9D8189]" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

            {/* Greeting */}
            <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#9D8189] font-semibold mb-2 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#9D8189]" />
              Hi, I&apos;m Menna Ali Abdelrahman
            </p>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#222629] leading-tight mb-5">
              AI & Machine{" "}
              <span className="gradient-text">
                Learning Engineer
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#222629]/80 max-w-2xl leading-relaxed mb-8">
              {personalInfo.heroSubtitle}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#F4ACB7] hover:bg-[#F4ACB7]/90 text-[#222629] border border-[#F4ACB7] shadow-md shadow-[#F4ACB7]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-[#D8E2DC]/40 text-[#222629] border border-[#9D8189]/35 hover:border-[#9D8189] shadow-xs transition-all duration-200 cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
              </button>
            </div>

            {/* Social Links & Verification */}
            <div className="pt-6 border-t border-[#D8E2DC] w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#9D8189] font-mono">Connect:</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white hover:bg-[#D8E2DC]/50 text-[#222629] hover:text-[#9D8189] border border-[#D8E2DC] hover:border-[#9D8189]/40 shadow-xs transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white hover:bg-[#D8E2DC]/50 text-[#222629] hover:text-[#9D8189] border border-[#D8E2DC] hover:border-[#9D8189]/40 shadow-xs transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white hover:bg-[#D8E2DC]/50 text-[#222629] hover:text-[#9D8189] border border-[#D8E2DC] hover:border-[#9D8189]/40 shadow-xs transition-all"
                  aria-label="Send Email"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Education Micro-Badge */}
              <div className="flex items-center gap-2 text-xs text-[#9D8189] font-mono font-medium">
                <GraduationCap className="w-4 h-4 text-[#9D8189]" />
                <span>Capital University • GPA 3.67 (Honors)</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Neural Graphic Component */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <AiNeuralGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
