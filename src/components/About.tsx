"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  GraduationCap,
  Sparkles,
  Layers,
  Database,
  Cpu,
  CheckCircle2,
  Brain,
  Sliders,
  Send,
  Workflow,
  Award
} from "lucide-react";

export default function About() {
  const lifecycleIcons = [
    Database,
    Sliders,
    Workflow,
    Cpu,
    Sparkles,
    CheckCircle2,
    Send
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#D8E2DC]/35">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FFCAD4]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#D8E2DC]/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#222629] bg-white border border-[#9D8189]/30 shadow-xs mb-3">
            <Brain className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>BACKGROUND & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222629] tracking-tight">
            Engineering Practical,{" "}
            <span className="gradient-text">Real-World AI Systems</span>
          </h2>
          <p className="mt-3 text-[#222629]/75 max-w-2xl text-sm sm:text-base">
            Grounded in rigorous academic excellence and specialized in executing the complete machine learning lifecycle.
          </p>
        </div>

        {/* Top Grid: Bio Narrative & Academic Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl relative flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-[#D8E2DC]/60 border border-[#9D8189]/30 text-[#222629]">
                  <GraduationCap className="w-5 h-5 text-[#9D8189]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#222629]">Professional Background</h3>
                  <p className="text-xs text-[#9D8189] font-mono font-medium">
                    Computer Science & Artificial Intelligence Graduate
                  </p>
                </div>
              </div>

              <p className="text-[#222629]/80 leading-relaxed text-sm sm:text-base mb-5">
                {personalInfo.summary}
              </p>

              <p className="text-[#222629]/80 leading-relaxed text-sm sm:text-base mb-6">
                Experienced in building real-world AI systems, including a real-time Egyptian Sign Language and emotion recognition system designed to advance accessibility for the Deaf and hard-of-hearing community.
              </p>
            </div>

            {/* Core Domain Badges */}
            <div className="pt-6 border-t border-[#D8E2DC]">
              <span className="text-xs font-mono text-[#9D8189] uppercase tracking-wider block mb-3 font-semibold">
                Core Specialization Domains:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "Computer Vision",
                  "NLP",
                  "Generative AI",
                  "Agentic AI",
                  "CNN & RNN/LSTM",
                  "Real-World Deployment"
                ].map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white border border-[#D8E2DC] text-[#222629] hover:border-[#F4ACB7] hover:bg-[#FFCAD4]/30 transition-colors"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-[#F4ACB7] shadow-xs transition-all duration-300"
              >
                {/* Subtle gradient corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FFCAD4]/40 to-transparent rounded-bl-full pointer-events-none" />

                <div className="font-mono text-2xl sm:text-3xl font-extrabold gradient-text mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[#222629] mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#9D8189] font-mono">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full ML Lifecycle Section */}
        <div className="glass-panel p-8 rounded-3xl relative shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-[#9D8189] uppercase tracking-wider block mb-1 font-semibold">
                End-to-End Methodology
              </span>
              <h3 className="text-2xl font-bold text-[#222629]">
                The Full Machine Learning Lifecycle
              </h3>
            </div>
            <span className="text-xs text-[#222629] font-mono px-3 py-1 rounded-full bg-white border border-[#D8E2DC] self-start sm:self-auto shadow-xs">
              From Raw Data to Real-World Inference
            </span>
          </div>

          {/* Lifecycle Steps Horizontal / Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {personalInfo.mlLifecycle.map((stage, idx) => {
              const IconComp = lifecycleIcons[idx] || Workflow;
              return (
                <div
                  key={stage.title}
                  className="p-4 rounded-2xl bg-white border border-[#9D8189]/25 hover:border-[#F4ACB7] hover:shadow-md transition-all group flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-[#D8E2DC]/50 flex items-center justify-center text-[#9D8189] group-hover:bg-[#FFCAD4] group-hover:text-[#222629] transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] text-[#9D8189] font-bold">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#222629] group-hover:text-[#9D8189] transition-colors mb-1.5">
                      {stage.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#222629]/75 leading-relaxed mt-2">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
