"use client";

import React, { useEffect } from "react";
import { Project } from "@/types/portfolio";
import { GithubIcon } from "./SocialIcons";
import {
  X,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
  Calendar,
  Activity,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-slate-950 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-950/60 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative backdrop glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
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
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-indigo-950/80 text-cyan-300 border border-indigo-500/30"
              >
                {c}
              </span>
            ))}
            <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {project.date}
            </span>
            {project.grade && (
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Grade: {project.grade}
              </span>
            )}
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>

          {project.subtitle && (
            <p className="text-sm font-mono text-cyan-400 mt-1">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Modal Content Scroll Area */}
        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
          {/* Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Result Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-slate-900/90 border border-indigo-500/30">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1.5">
              <Activity className="w-4 h-4 text-cyan-400" />
              Key Result & Verified Benchmark
            </div>
            <p className="text-sm text-slate-100 font-medium leading-relaxed">
              {project.keyResult}
            </p>
          </div>

          {/* Detailed Results List */}
          {project.detailedResults && project.detailedResults.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Technical Highlights & Milestones
              </h3>
              <ul className="space-y-2.5">
                {project.detailedResults.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture / Techniques (if available) */}
          {project.architecture && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Transformer Model Architecture & Hyperparameters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-indigo-300 flex items-center gap-2"
                  >
                    <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.techniques && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Methodology & Algorithms Applied
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techniques.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Full Case Study Breakdown (for WASLA) */}
          {project.caseStudy && (
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                Graduation Case Study: Problem → Approach → Results → Deployment
              </h3>

              <div className="text-xs sm:text-sm space-y-3 text-slate-300">
                <div>
                  <span className="font-semibold text-white block mb-0.5">Problem:</span>
                  <p>{project.caseStudy.problem}</p>
                </div>
                <div>
                  <span className="font-semibold text-white block mb-0.5">Approach:</span>
                  <p>{project.caseStudy.approach}</p>
                </div>
                <div>
                  <span className="font-semibold text-white block mb-0.5">Deployment:</span>
                  <p>{project.caseStudy.deployment}</p>
                </div>
              </div>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-indigo-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <a
            href="https://github.com/mennaali30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View on GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
