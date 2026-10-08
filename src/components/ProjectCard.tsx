"use client";

import React from "react";
import { Project } from "@/types/portfolio";
import { GithubIcon } from "./SocialIcons";
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Layers,
  Activity,
  Cpu,
  Eye,
  MessageSquare,
  FileText,
  BarChart3,
  Network
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  // Select an abstract icon/glyph based on project categories
  const getProjectGlyph = () => {
    if (project.categories.includes("Computer Vision")) {
      return { icon: Eye, color: "text-cyan-400", border: "border-cyan-500/30", bg: "from-cyan-950/40 to-slate-900" };
    }
    if (project.categories.includes("NLP")) {
      return { icon: MessageSquare, color: "text-purple-400", border: "border-purple-500/30", bg: "from-purple-950/40 to-slate-900" };
    }
    if (project.categories.includes("Deep Learning")) {
      return { icon: Network, color: "text-indigo-400", border: "border-indigo-500/30", bg: "from-indigo-950/40 to-slate-900" };
    }
    return { icon: BarChart3, color: "text-blue-400", border: "border-blue-500/30", bg: "from-blue-950/40 to-slate-900" };
  };

  const glyph = getProjectGlyph();
  const GlyphIcon = glyph.icon;

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden border border-slate-800/80 hover:border-indigo-500/40">
      {/* Top Graphic Header: Abstract AI Vector Badge */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-900 border border-slate-800 text-slate-300"
              >
                {cat}
              </span>
            ))}
          </div>

          <span className="text-[11px] font-mono text-slate-400">
            {project.date}
          </span>
        </div>

        {/* Abstract AI Visual Banner */}
        <div className={`w-full h-24 rounded-xl bg-gradient-to-r ${glyph.bg} border ${glyph.border} p-4 flex items-center justify-between relative overflow-hidden mb-4`}>
          {/* Subtle grid lines inside banner */}
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px] opacity-15" />

          <div className="relative z-10 flex items-center gap-3">
            <div className={`p-2.5 rounded-xl bg-slate-950/80 border ${glyph.border} ${glyph.color} shadow-sm`}>
              <GlyphIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                {project.type || "ML Engineering"}
              </span>
              <span className="text-xs font-semibold text-slate-200">
                {project.subtitle || "End-to-End Pipeline"}
              </span>
            </div>
          </div>

          {/* AI Metrics Indicator */}
          <div className="relative z-10 text-right">
            {project.grade && (
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Grade: {project.grade}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Result / Metric Highlight Card */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-indigo-500/20 mb-4">
          <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-cyan-400" />
            Key Result & Metric:
          </div>
          <p className="text-xs text-slate-200 font-medium leading-relaxed">
            {project.keyResult}
          </p>
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-indigo-400 border border-slate-800">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-auto">
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400 transition-all cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>View Details</span>
        </button>

        <a
          href="https://github.com/mennaali30"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          title="GitHub Profile & Repository Archive"
          aria-label={`GitHub profile for ${project.title}`}
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
