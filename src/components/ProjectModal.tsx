"use client";

import React, { useEffect } from "react";
import { Project } from "@/types/portfolio";
import { GithubIcon } from "./SocialIcons";
import {
  X,
  CheckCircle2,
  Cpu,
  Calendar,
  Activity,
  ExternalLink
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#222629]/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white border border-[#9D8189]/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-left text-[#222629]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative backdrop glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFCAD4]/30 rounded-full blur-[100px] pointer-events-none" />

        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white border border-[#D8E2DC] text-[#222629] hover:bg-[#D8E2DC]/50 transition-colors cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.categories.map((c) => (
              <span
                key={c}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#D8E2DC]/60 text-[#222629] border border-[#9D8189]/30"
              >
                {c}
              </span>
            ))}
            <span className="flex items-center gap-1 text-xs font-mono text-[#9D8189]">
              <Calendar className="w-3.5 h-3.5 text-[#9D8189]" />
              {project.date}
            </span>
            {project.grade && (
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#FFCAD4] text-[#222629] border border-[#F4ACB7]">
                Grade: {project.grade}
              </span>
            )}
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#222629] tracking-tight">
            {project.title}
          </h2>

          {project.subtitle && (
            <p className="text-sm font-mono text-[#9D8189] mt-1 font-semibold">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Modal Content Scroll Area */}
        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
          {/* Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#9D8189] mb-2 font-semibold">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-[#222629]/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Result Banner */}
          <div className="p-4 rounded-2xl bg-[#D8E2DC]/40 border border-[#9D8189]/30 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono text-[#9D8189] font-bold uppercase tracking-wider mb-1.5">
              <Activity className="w-4 h-4 text-[#9D8189]" />
              Key Result & Verified Benchmark
            </div>
            <p className="text-sm text-[#222629] font-medium leading-relaxed">
              {project.keyResult}
            </p>
          </div>

          {/* Detailed Results List */}
          {project.detailedResults && project.detailedResults.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#9D8189] mb-3 font-semibold">
                Technical Highlights & Milestones
              </h3>
              <ul className="space-y-2.5">
                {project.detailedResults.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#222629]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#9D8189] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture / Techniques (if available) */}
          {project.architecture && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#9D8189] mb-3 font-semibold">
                Transformer Model Architecture & Hyperparameters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#D8E2DC]/30 border border-[#9D8189]/20 text-xs font-mono text-[#222629] flex items-center gap-2"
                  >
                    <Cpu className="w-3.5 h-3.5 text-[#9D8189] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.techniques && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#9D8189] mb-3 font-semibold">
                Methodology & Algorithms Applied
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techniques.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white text-[#222629] border border-[#D8E2DC] shadow-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Full Case Study Breakdown (for WASLA) */}
          {project.caseStudy && (
            <div className="p-4 rounded-2xl bg-[#D8E2DC]/25 border border-[#9D8189]/25 space-y-4 shadow-xs">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#222629] font-bold">
                Graduation Case Study: Problem → Approach → Results → Deployment
              </h3>

              <div className="text-xs sm:text-sm space-y-3 text-[#222629]/80">
                <div>
                  <span className="font-semibold text-[#222629] block mb-0.5">Problem:</span>
                  <p>{project.caseStudy.problem}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#222629] block mb-0.5">Approach:</span>
                  <p>{project.caseStudy.approach}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#222629] block mb-0.5">Deployment:</span>
                  <p>{project.caseStudy.deployment}</p>
                </div>
              </div>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#9D8189] mb-3 font-semibold">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-[#222629] border border-[#D8E2DC] shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-5 border-t border-[#D8E2DC] flex flex-wrap items-center justify-between gap-3">
          {(() => {
            const targetUrl = project.primaryUrl || project.githubUrl || project.liveUrl || project.colabUrl;
            if (!targetUrl) return null;
            return (
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#F4ACB7] hover:bg-[#F4ACB7]/90 text-[#222629] border border-[#F4ACB7] shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                {project.primaryUrlType === "github" ? (
                  <GithubIcon className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                <span>{project.primaryUrlLabel || "Open Project"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            );
          })()}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-[#D8E2DC]/50 text-[#222629] border border-[#D8E2DC] shadow-xs transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
