"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import AiNeuralGraphic from "./AiNeuralGraphic";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import {
  Mail,
  ArrowRight,
  Sparkles,
  MapPin,
  Bot,
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
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & Location Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-950/70 text-indigo-300 border border-indigo-500/30 shadow-sm">
                <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
                <span>Specialized in AI & Deep Learning</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-slate-900/60 border border-slate-800">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

            {/* Greeting */}
            <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-cyan-400" />
              Hi, I'm Menna Ali Abdelrahman
            </p>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-5">
              AI & Machine{" "}
              <span className="gradient-text drop-shadow-[0_0_25px_rgba(99,102,241,0.25)]">
                Learning Engineer
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              {personalInfo.heroSubtitle}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-indigo-500/40 transition-all duration-200 cursor-pointer"
              >
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Social Links & Verification */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-mono">Connect:</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/30 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-purple-400 border border-slate-800 hover:border-purple-500/30 transition-all"
                  aria-label="Send Email"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Education Micro-Badge */}
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
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
