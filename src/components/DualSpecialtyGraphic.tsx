"use client";

import React, { useState } from "react";
import { Layout, Brain, Code2, Cpu, ArrowRight } from "lucide-react";

export default function DualSpecialtyGraphic() {
  const [activeTab, setActiveTab] = useState<"dual" | "frontend" | "aiml">("dual");

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-3xl border border-[#E7E5E0] shadow-md p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-12 -left-12 w-44 h-44 bg-[#FFCAD4]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-[#6C63FF]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Tab Toggle */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E7E5E0] relative z-10 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F4ACB7]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#9D8189]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#6C63FF]" />
          <span className="text-xs font-mono font-semibold text-[#686868] ml-1">
            dual-stack.runtime
          </span>
        </div>

        <div className="flex items-center gap-1 bg-[#F8F7F4] p-1 rounded-xl border border-[#E7E5E0] text-[11px] font-mono">
          <button
            type="button"
            onClick={() => setActiveTab("dual")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === "dual"
                ? "bg-white text-[#202124] shadow-xs font-semibold"
                : "text-[#686868] hover:text-[#202124]"
            }`}
          >
            Unified
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("frontend")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === "frontend"
                ? "bg-[#FFCAD4]/60 text-[#202124] shadow-xs font-semibold"
                : "text-[#686868] hover:text-[#202124]"
            }`}
          >
            Frontend
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("aiml")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === "aiml"
                ? "bg-[#6C63FF]/15 text-[#6C63FF] shadow-xs font-semibold"
                : "text-[#686868] hover:text-[#202124]"
            }`}
          >
            AI / ML
          </button>
        </div>
      </div>

      {/* Visual Canvas Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 mb-5">
        {/* Frontend Specialty Card Panel */}
        <div
          className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
            activeTab === "aiml"
              ? "opacity-40 grayscale-25 border-[#E7E5E0] bg-[#F8F7F4]/50"
              : "border-[#F4ACB7]/60 bg-gradient-to-br from-[#FFE5D9]/40 via-white to-[#FFCAD4]/30 shadow-xs"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-[#FFCAD4] text-[#202124]">
                <Layout className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#202124]">Frontend Layer</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-[#9D8189] border border-[#F4ACB7]/50 font-semibold">
              React & Next.js
            </span>
          </div>

          {/* Interactive React Component Tree Mock */}
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2 rounded-lg bg-white/90 border border-[#E7E5E0] shadow-xs flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[#202124] font-semibold">
                <Code2 className="w-3.5 h-3.5 text-[#9D8189]" /> &lt;AppShell /&gt;
              </span>
              <span className="text-[10px] text-[#9D8189]">SSR / CSR</span>
            </div>

            <div className="pl-3 space-y-1.5 border-l-2 border-[#F4ACB7]/60">
              <div className="p-1.5 rounded-lg bg-white/80 border border-[#E7E5E0] flex items-center justify-between text-[11px]">
                <span className="text-[#202124]">&lt;Navigation state=&quot;active&quot; /&gt;</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4ACB7]" />
              </div>
              <div className="p-1.5 rounded-lg bg-white/80 border border-[#E7E5E0] flex items-center justify-between text-[11px]">
                <span className="text-[#202124]">&lt;InteractiveUI /&gt;</span>
                <span className="text-[10px] text-[#9D8189]">Tailwind v4</span>
              </div>
              <div className="p-1.5 rounded-lg bg-white/80 border border-[#E7E5E0] flex items-center justify-between text-[11px]">
                <span className="text-[#202124]">&lt;REST_API_Client /&gt;</span>
                <span className="text-[10px] text-[#9D8189]">JWT Ready</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-[#F4ACB7]/30 flex items-center justify-between text-[10px] font-mono text-[#686868]">
            <span>Responsive Layout</span>
            <span className="text-[#9D8189] font-medium">Type-Safe</span>
          </div>
        </div>

        {/* AI & ML Specialty Card Panel */}
        <div
          className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
            activeTab === "frontend"
              ? "opacity-40 grayscale-25 border-[#E7E5E0] bg-[#F8F7F4]/50"
              : "border-[#6C63FF]/30 bg-gradient-to-br from-[#F3F2FF] via-white to-[#6C63FF]/5 shadow-xs"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-[#6C63FF] text-white">
                <Brain className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#202124]">Intelligence Layer</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-[#6C63FF] border border-[#6C63FF]/30 font-semibold">
              ML & DL
            </span>
          </div>

          {/* Interactive ML Pipeline Architecture Mock */}
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2 rounded-lg bg-white/90 border border-[#E7E5E0] shadow-xs flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[#202124] font-semibold">
                <Cpu className="w-3.5 h-3.5 text-[#6C63FF]" /> Model Pipeline
              </span>
              <span className="text-[10px] text-[#6C63FF] font-semibold">PyTorch/TF</span>
            </div>

            <div className="pl-3 space-y-1.5 border-l-2 border-[#6C63FF]/40">
              <div className="p-1.5 rounded-lg bg-white/80 border border-[#E7E5E0] flex items-center justify-between text-[11px]">
                <span className="text-[#202124]">Features: 163-D Vector</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
              </div>
              <div className="p-1.5 rounded-lg bg-white/80 border border-[#E7E5E0] flex items-center justify-between text-[11px]">
                <span className="text-[#202124]">Architecture: MLP 4-Layer</span>
                <span className="text-[10px] text-[#6C63FF]">973 KB</span>
              </div>
              <div className="p-1.5 rounded-lg bg-white/80 border border-[#E7E5E0] flex items-center justify-between text-[11px]">
                <span className="text-[#202124]">Validation: 91.74% Acc</span>
                <span className="text-[10px] text-[#6C63FF] font-bold">F1: 0.906</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-[#6C63FF]/20 flex items-center justify-between text-[10px] font-mono text-[#686868]">
            <span>Low Latency</span>
            <span className="text-[#6C63FF] font-semibold">Offline CPU Ready</span>
          </div>
        </div>
      </div>

      {/* Cross-Disciplinary Bridge Indicator */}
      <div className="p-3 rounded-2xl bg-[#F8F7F4] border border-[#E7E5E0] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#686868]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-mono text-[11px]">Complementary Capabilities</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-[#202124]">
          <span className="text-[#9D8189]">Web Interfaces</span>
          <ArrowRight className="w-3 h-3 text-[#686868]" />
          <span className="text-[#6C63FF]">Machine Learning</span>
        </div>
      </div>
    </div>
  );
}
