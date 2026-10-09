"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { Mail, ArrowUp, BrainCircuit } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#9D8189]/30 bg-[#222629] py-12 relative overflow-hidden text-white">
      {/* Decorative subtle ambient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9D8189]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-lg text-white">
                {personalInfo.name}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#D8E2DC]/20 text-[#D8E2DC] border border-[#D8E2DC]/30 font-semibold">
                AI / ML
              </span>
            </div>
            <p className="text-xs text-[#D8E2DC]/80 font-mono">
              {personalInfo.title} • {personalInfo.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm text-[#D8E2DC]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4ACB7] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <span className="text-[#9D8189]">|</span>

            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4ACB7] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <span className="text-[#9D8189]">|</span>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#F4ACB7] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#222629] border border-[#9D8189]/40 text-[#D8E2DC] hover:text-white hover:border-[#F4ACB7] transition-all cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[#9D8189]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D8E2DC]/70 font-mono gap-2">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-[#D8E2DC]/60">
            Capital University (Helwan) Alumna • Excellent with Honors
          </p>
        </div>
      </div>
    </footer>
  );
}
