"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { GraduationCap, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white border-y border-[#E7E5E0]">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FFE5D9]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#202124] bg-[#F8F7F4] border border-[#E7E5E0] shadow-xs mb-3">
            <Compass className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            About <span className="gradient-text-frontend">My Journey</span>
          </h2>
          <p className="mt-3 text-[#686868] max-w-2xl text-sm sm:text-base">
            Bridging structured machine learning intelligence and modern frontend engineering.
          </p>
        </div>

        {/* Main Grid: Bio Narrative & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-[#F8F7F4] p-8 sm:p-10 rounded-3xl border border-[#E7E5E0] flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white border border-[#E7E5E0] text-[#202124] shadow-xs">
                  <GraduationCap className="w-6 h-6 text-[#9D8189]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#202124]">
                    Computer Science & Artificial Intelligence Graduate
                  </h3>
                  <p className="text-xs text-[#9D8189] font-mono font-medium">
                    Capital University (formerly Helwan University) • June 2026
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#202124]/85 leading-relaxed">
                <p>
                  I am a Computer Science and Artificial Intelligence graduate from <strong>Capital University</strong> (formerly Helwan University), graduating with <strong>Excellent with Honors</strong> distinction and a cumulative GPA of <strong>3.67 / 4.00</strong>.
                </p>

                <p>
                  My engineering journey combines two deeply complementary domains: <strong>Frontend Development with React.js and Next.js</strong>, and <strong>Artificial Intelligence & Machine Learning Engineering</strong>. I focus on creating accessible, clean software that solves real user challenges.
                </p>

                <p>
                  On the AI/ML side, I have engineered deep learning models, computer vision pipelines, and predictive algorithms — highlighted by my graduation project, <strong>Wasla</strong> (Grade A+), a real-time Egyptian Sign Language recognition system running on CPU webcam streams.
                </p>

                <p>
                  On the frontend side, I build modular, responsive web applications leveraging React.js, Next.js, and modern CSS/Tailwind architectures, with verified implementations of REST API integration and token authentication workflows.
                </p>
              </div>
            </div>

            {/* Quick Principles */}
            <div className="pt-6 mt-6 border-t border-[#E7E5E0] flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-white text-[#202124] border border-[#E7E5E0]">
                • Rigorous Academic Foundation
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[#202124] border border-[#E7E5E0]">
                • Practical End-to-End Implementation
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[#202124] border border-[#E7E5E0]">
                • User-Centered Design
              </span>
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat) => (
              <div
                key={stat.label}
                className={`p-6 rounded-3xl border flex flex-col justify-center items-center text-center relative overflow-hidden transition-all duration-300 ${
                  stat.accent === "frontend"
                    ? "bg-[#FFE5D9]/30 border-[#F4ACB7]/40 hover:border-[#F4ACB7]"
                    : "bg-[#F3F2FF] border-[#6C63FF]/25 hover:border-[#6C63FF]"
                }`}
              >
                <div
                  className={`font-mono text-2xl sm:text-3xl font-extrabold mb-1 tracking-tight ${
                    stat.accent === "frontend" ? "text-[#9D8189]" : "text-[#6C63FF]"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#202124] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#686868] font-mono">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
