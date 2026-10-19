"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentYear(new Date().getFullYear());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Frontend", href: "#frontend" },
    { name: "AI & ML", href: "#ai-ml" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[#E7E5E0] bg-[#202124] py-12 relative overflow-hidden text-white">
      {/* Decorative top ambient border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F4ACB7]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand & Dual Specialization */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-bold text-lg text-white">
                {personalInfo.name}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#FFE5D9]/20 text-[#FFCAD4] border border-[#F4ACB7]/40 font-semibold">
                React / Next.js & AI/ML
              </span>
            </div>
            <p className="text-xs text-[#E7E5E0]/70 font-mono">
              Computer Science & AI Alumna • Capital University (Helwan) • GPA 3.67
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#E7E5E0]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#FFCAD4] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-[#E7E5E0] hover:text-[#FFCAD4] border border-white/10 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-[#E7E5E0] hover:text-[#6C63FF] border border-white/10 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-[#E7E5E0] hover:text-[#FFCAD4] border border-white/10 transition-colors"
              aria-label="Send Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/10 hover:bg-[#F4ACB7] text-white hover:text-[#202124] border border-white/15 transition-all cursor-pointer ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Year Copyright & Distinction */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E7E5E0]/60 font-mono gap-2">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-[#E7E5E0]/50">
            Faisal, Giza, Egypt • Excellent with Honors
          </p>
        </div>
      </div>
    </footer>
  );
}
