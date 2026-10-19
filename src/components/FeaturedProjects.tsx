"use client";

import React from "react";
import { featuredProjects } from "@/data/portfolioData";
import WaslaDiagram from "./WaslaDiagram";
import { GithubIcon } from "./SocialIcons";
import {
  Award,
  ExternalLink,
  ShieldAlert,
  ArrowUpRight,
  ShoppingBag,
  HeartPulse,
  Users2
} from "lucide-react";

export default function FeaturedProjects() {
  const wasla = featuredProjects[0];
  const ecommerce = featuredProjects[1];
  const churn = featuredProjects[2];
  const cardio = featuredProjects[3];

  return (
    <section id="featured-projects" className="py-24 relative overflow-hidden bg-white border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#202124] bg-[#F8F7F4] border border-[#E7E5E0] shadow-xs mb-3">
            <Award className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>FEATURED SELECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Key Featured <span className="gradient-text-aiml">Projects</span>
          </h2>
          <p className="mt-3 text-[#686868] max-w-2xl text-sm sm:text-base">
            Showcasing my graduation system, full-stack frontend application, and predictive machine learning models.
          </p>
        </div>

        {/* 1. Wasla: Most visually prominent graduation project */}
        <div className="mb-12 bg-[#F8F7F4] rounded-3xl p-6 sm:p-10 border-2 border-[#6C63FF]/30 shadow-md relative overflow-hidden">
          {/* Ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#6C63FF]/10 via-[#FFE5D9]/20 to-transparent pointer-events-none" />

          {/* Top Graduation Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#6C63FF] text-white shadow-xs">
                <Award className="w-3.5 h-3.5" />
                <span>GRADUATION PROJECT • GRADE A+</span>
              </span>

              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-white text-[#6C63FF] border border-[#6C63FF]/30">
                Capital University • June 2026
              </span>
            </div>

            <span className="text-xs font-mono text-[#686868]">
              Team Project (Collaborative Repository)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 mb-8">
            {/* Left: Details & Metrics */}
            <div className="lg:col-span-7 flex flex-col">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202124] tracking-tight leading-snug mb-3">
                {wasla.title}
              </h3>

              <p className="text-sm sm:text-base text-[#202124]/85 leading-relaxed mb-6">
                {wasla.description}
              </p>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {wasla.metrics?.map((m) => (
                  <div
                    key={m.label}
                    className="p-3.5 rounded-2xl bg-white border border-[#E7E5E0] shadow-xs"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#686868] mb-0.5 font-bold">
                      {m.label}
                    </div>
                    <div className="text-lg sm:text-xl font-bold font-mono text-[#6C63FF]">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {wasla.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white text-[#202124] border border-[#E7E5E0] shadow-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Verified Collaboration & Contributions Note */}
              {wasla.note && (
                <p className="text-xs text-[#686868] italic mb-6 p-3 rounded-xl bg-white border border-[#E7E5E0]">
                  ℹ️ {wasla.note}
                </p>
              )}

              {/* Primary Actions */}
              <div className="flex flex-wrap items-center gap-3">
                {wasla.githubUrl && (
                  <a
                    href={wasla.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-[#202124] hover:bg-[#202124]/90 text-white shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FFCAD4]" />
                  </a>
                )}
              </div>
            </div>

            {/* Right: Technical Diagram of Wasla */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <WaslaDiagram />
            </div>
          </div>
        </div>

        {/* 3 Other Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 2. E-Commerce Website (Frontend) */}
          <div className="bg-[#F8F7F4] rounded-3xl p-6 sm:p-7 border border-[#F4ACB7]/60 hover:border-[#F4ACB7] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Category Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFE5D9] text-[#202124] border border-[#F4ACB7]/50 flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#9D8189]" />
                  <span>Frontend Development</span>
                </span>
                <span className="text-[11px] font-mono text-[#686868]">{ecommerce.date}</span>
              </div>

              <h4 className="text-xl font-bold text-[#202124] mb-2 group-hover:text-[#9D8189] transition-colors">
                {ecommerce.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#686868] leading-relaxed mb-4">
                {ecommerce.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {ecommerce.metrics?.slice(0, 2).map((m) => (
                  <div key={m.label} className="p-2.5 rounded-xl bg-white border border-[#E7E5E0] text-center">
                    <div className="text-[10px] font-mono text-[#686868]">{m.label}</div>
                    <div className="text-xs font-bold text-[#202124]">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-6">
                {ecommerce.technologies.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white text-[#202124] border border-[#E7E5E0]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between">
              {ecommerce.githubUrl && (
                <a
                  href={ecommerce.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-white hover:bg-[#FFE5D9]/50 text-[#202124] border border-[#E7E5E0] hover:border-[#F4ACB7] transition-all cursor-pointer shadow-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9D8189]" />
                </a>
              )}
            </div>
          </div>

          {/* 3. Customer Churn Prediction (AI/ML) */}
          <div className="bg-[#F8F7F4] rounded-3xl p-6 sm:p-7 border border-[#6C63FF]/30 hover:border-[#6C63FF] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Category Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F2FF] text-[#6C63FF] border border-[#6C63FF]/30 flex items-center gap-1.5">
                  <Users2 className="w-3.5 h-3.5" />
                  <span>AI & Machine Learning</span>
                </span>
                <span className="text-[11px] font-mono text-[#686868]">{churn.date}</span>
              </div>

              <h4 className="text-xl font-bold text-[#202124] mb-2 group-hover:text-[#6C63FF] transition-colors">
                {churn.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#686868] leading-relaxed mb-4">
                {churn.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {churn.metrics?.slice(0, 2).map((m) => (
                  <div key={m.label} className="p-2.5 rounded-xl bg-white border border-[#E7E5E0] text-center">
                    <div className="text-[10px] font-mono text-[#686868]">{m.label}</div>
                    <div className="text-xs font-bold text-[#6C63FF]">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {churn.technologies.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white text-[#202124] border border-[#E7E5E0]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Live tunnel note */}
              {churn.note && (
                <p className="text-[11px] text-[#686868] italic mb-4 leading-tight">
                  ℹ️ {churn.note}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between">
              {churn.liveUrl && (
                <a
                  href={churn.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-white hover:bg-[#F3F2FF] text-[#202124] border border-[#E7E5E0] hover:border-[#6C63FF] transition-all cursor-pointer shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#6C63FF]" />
                  <span>Open Live Tunnel</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6C63FF]" />
                </a>
              )}
            </div>
          </div>

          {/* 4. CardioSense — Heart Disease Prediction (AI/ML) */}
          <div className="bg-[#F8F7F4] rounded-3xl p-6 sm:p-7 border border-[#6C63FF]/30 hover:border-[#6C63FF] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Category Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F2FF] text-[#6C63FF] border border-[#6C63FF]/30 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-[#6C63FF]" />
                  <span>AI & Machine Learning</span>
                </span>
                <span className="text-[11px] font-mono text-[#686868]">{cardio.date}</span>
              </div>

              <h4 className="text-xl font-bold text-[#202124] mb-2 group-hover:text-[#6C63FF] transition-colors">
                {cardio.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#686868] leading-relaxed mb-4">
                {cardio.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {cardio.metrics?.slice(0, 2).map((m) => (
                  <div key={m.label} className="p-2.5 rounded-xl bg-white border border-[#E7E5E0] text-center">
                    <div className="text-[10px] font-mono text-[#686868]">{m.label}</div>
                    <div className="text-xs font-bold text-[#6C63FF]">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {cardio.technologies.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white text-[#202124] border border-[#E7E5E0]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Disclaimer */}
              {cardio.disclaimer && (
                <div className="text-[11px] text-[#686868] bg-white p-2.5 rounded-xl border border-[#E7E5E0] mb-4 flex items-start gap-1.5 leading-snug">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{cardio.disclaimer}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between">
              {cardio.liveUrl && (
                <a
                  href={cardio.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-white hover:bg-[#F3F2FF] text-[#202124] border border-[#E7E5E0] hover:border-[#6C63FF] transition-all cursor-pointer shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#6C63FF]" />
                  <span>Live Streamlit App</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6C63FF]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
