"use client";

import React from "react";
import { frontendProjects } from "@/data/portfolioData";
import { GithubIcon } from "./SocialIcons";
import {
  Layout,
  Code2,
  ArrowUpRight,
  ShoppingBag,
  UtensilsCrossed,
  Layers,
  CloudSun,
  Lock,
  Globe,
  User,
  Thermometer,
  Activity
} from "lucide-react";

export default function FrontendProjects() {
  const getIconForProject = (id: string) => {
    switch (id) {
      case "fe-ecommerce":
        return ShoppingBag;
      case "fe-recipe-website":
        return UtensilsCrossed;
      case "fe-start-framework":
        return Layers;
      case "fe-weather-app":
        return CloudSun;
      case "fe-smart-login":
        return Lock;
      case "fe-oibsip-landing-page":
        return Globe;
      case "fe-oibsip-portfolio":
        return User;
      case "fe-oibsip-temp-converter":
        return Thermometer;
      default:
        return Code2;
    }
  };

  const primaryProjects = frontendProjects.filter(
    (p) => p.featuredProminence === "high"
  );
  const mediumProjects = frontendProjects.filter(
    (p) => p.featuredProminence === "medium"
  );
  const compactProjects = frontendProjects.filter(
    (p) => p.featuredProminence === "compact"
  );

  return (
    <section id="frontend" className="py-24 relative overflow-hidden bg-[#F8F7F4] border-b border-[#E7E5E0]">
      {/* Soft pink ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FFE5D9]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FFCAD4]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#202124] bg-[#FFE5D9] border border-[#F4ACB7]/60 shadow-xs mb-3">
            <Layout className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>REACT.JS & NEXT.JS SPECIALTY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Frontend Development <span className="gradient-text-frontend">Projects</span>
          </h2>
          <p className="mt-3 text-[#686868] max-w-2xl text-sm sm:text-base">
            Responsive, component-driven web applications built with modern React.js, Next.js, and CSS architectures.
          </p>
        </div>

        {/* Tier 1: High Prominence Projects (E-Commerce & Recipe Website) */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F4ACB7]" />
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#9D8189] font-bold">
              Flagship Frontend Applications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {primaryProjects.map((project) => {
              const IconComp = getIconForProject(project.id);
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-[#F4ACB7]/60 hover:border-[#F4ACB7] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 rounded-xl bg-[#FFE5D9] text-[#9D8189] border border-[#F4ACB7]/40 shadow-xs">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#9D8189] block uppercase font-bold">
                            {project.subtitle}
                          </span>
                          <span className="text-xs font-mono text-[#686868]">
                            {project.date}
                          </span>
                        </div>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#FFE5D9] text-[#202124] border border-[#F4ACB7]/50">
                        Featured
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-extrabold text-[#202124] mb-3 group-hover:text-[#9D8189] transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#686868] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Verified Highlights / Key Results */}
                    {project.keyResult && (
                      <div className="p-3 rounded-2xl bg-[#F8F7F4] border border-[#E7E5E0] mb-5">
                        <div className="text-[10px] font-mono text-[#9D8189] uppercase tracking-wider font-bold mb-1 flex items-center gap-1.5">
                          <Activity className="w-3 h-3 text-[#9D8189]" /> Key Implementation Detail:
                        </div>
                        <p className="text-xs text-[#202124] font-medium leading-relaxed">
                          {project.keyResult}
                        </p>
                      </div>
                    )}

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#F8F7F4] text-[#202124] border border-[#E7E5E0]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#202124] hover:bg-[#202124]/90 text-white transition-all shadow-xs"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3 h-3 text-[#FFCAD4]" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tier 2: Medium Prominence (START Framework, Weather App, Smart Login) */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#9D8189]" />
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#9D8189] font-bold">
              Core Framework & Application Tasks
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediumProjects.map((project) => {
              const IconComp = getIconForProject(project.id);
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl p-6 border border-[#E7E5E0] hover:border-[#F4ACB7] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-xl bg-[#FFE5D9]/60 text-[#9D8189] border border-[#F4ACB7]/30">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono text-[#686868]">{project.date}</span>
                    </div>

                    <h4 className="text-lg font-bold text-[#202124] mb-2 group-hover:text-[#9D8189] transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-xs text-[#686868] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#F8F7F4] text-[#202124] border border-[#E7E5E0]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E7E5E0]">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-[#F8F7F4] hover:bg-[#FFE5D9]/50 text-[#202124] border border-[#E7E5E0] hover:border-[#F4ACB7] transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Repository</span>
                        <ArrowUpRight className="w-3 h-3 text-[#9D8189]" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tier 3: Compact Cards (Oasis Infobyte Internship Tasks) */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D8E2DC]" />
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#686868] font-bold">
              Internship Practical Tasks (Oasis Infobyte)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {compactProjects.map((project) => {
              const IconComp = getIconForProject(project.id);
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl p-5 border border-[#E7E5E0] hover:border-[#F4ACB7] shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-[#F8F7F4] text-[#9D8189]">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#202124]">
                        {project.title}
                      </h4>
                    </div>

                    <p className="text-xs text-[#686868] leading-relaxed mb-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E7E5E0] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#686868]">August 2026</span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#202124] hover:text-[#9D8189] transition-colors"
                      >
                        <span>Repo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
