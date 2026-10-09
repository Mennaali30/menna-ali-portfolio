"use client";

import React from "react";
import { Project } from "@/types/portfolio";
import { GithubIcon } from "./SocialIcons";
import {
  ExternalLink,
  Activity,
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
      return { icon: Eye, color: "text-[#9D8189]", border: "border-[#9D8189]/30", bg: "from-[#D8E2DC]/60 to-[#FFCAD4]/30" };
    }
    if (project.categories.includes("NLP")) {
      return { icon: MessageSquare, color: "text-[#9D8189]", border: "border-[#F4ACB7]/40", bg: "from-[#FFCAD4]/50 to-[#D8E2DC]/40" };
    }
    if (project.categories.includes("Deep Learning")) {
      return { icon: Network, color: "text-[#9D8189]", border: "border-[#9D8189]/30", bg: "from-[#D8E2DC]/60 to-white" };
    }
    return { icon: BarChart3, color: "text-[#9D8189]", border: "border-[#9D8189]/30", bg: "from-[#D8E2DC]/50 to-[#FFCAD4]/25" };
  };

  const glyph = getProjectGlyph();
  const GlyphIcon = glyph.icon;

  const targetUrl = project.primaryUrl || project.githubUrl || project.liveUrl || project.colabUrl;

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden border border-[#9D8189]/20 hover:border-[#F4ACB7] shadow-xs">
      {/* Top Graphic Header: Abstract AI Vector Badge */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#D8E2DC]/50 border border-[#9D8189]/20 text-[#222629]"
              >
                {cat}
              </span>
            ))}
          </div>

          <span className="text-[11px] font-mono text-[#9D8189]">
            {project.date}
          </span>
        </div>

        {/* Abstract AI Visual Banner */}
        <div className={`w-full h-24 rounded-xl bg-gradient-to-r ${glyph.bg} border ${glyph.border} p-4 flex items-center justify-between relative overflow-hidden mb-4`}>
          {/* Subtle grid dots inside banner */}
          <div className="absolute inset-0 bg-[radial-gradient(#9D8189_1px,transparent_1px)] [background-size:12px_12px] opacity-15" />

          <div className="relative z-10 flex items-center gap-3">
            <div className={`p-2.5 rounded-xl bg-white border ${glyph.border} ${glyph.color} shadow-xs`}>
              <GlyphIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#9D8189] block uppercase tracking-wider font-semibold">
                {project.type || "ML Engineering"}
              </span>
              <span className="text-xs font-semibold text-[#222629]">
                {project.subtitle || "End-to-End Pipeline"}
              </span>
            </div>
          </div>

          {/* AI Metrics Indicator */}
          <div className="relative z-10 text-right">
            {project.grade && (
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#FFCAD4] text-[#222629] border border-[#F4ACB7]">
                Grade: {project.grade}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#222629] group-hover:text-[#9D8189] transition-colors mb-2 leading-snug">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-[#222629]/75 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Result / Metric Highlight Card */}
        <div className="p-3 rounded-xl bg-[#D8E2DC]/30 border border-[#9D8189]/20 mb-4 shadow-xs">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#9D8189] font-semibold mb-1 flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-[#9D8189]" />
            Key Result & Metric:
          </div>
          <p className="text-xs text-[#222629] font-medium leading-relaxed">
            {project.keyResult}
          </p>
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white text-[#222629] border border-[#D8E2DC] shadow-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#FFCAD4]/40 text-[#222629] border border-[#F4ACB7]/40">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-[#D8E2DC] flex items-center justify-between gap-2 mt-auto">
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-[#D8E2DC]/60 hover:bg-[#F4ACB7] text-[#222629] border border-[#9D8189]/30 hover:border-[#F4ACB7] transition-all cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>View Details</span>
        </button>

        {targetUrl && (
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white hover:bg-[#D8E2DC]/50 text-[#222629] hover:text-[#9D8189] border border-[#D8E2DC] shadow-xs transition-colors inline-flex items-center justify-center cursor-pointer"
            title={project.primaryUrlLabel || "Open Project"}
            aria-label={`${project.primaryUrlLabel || "Open project"} for ${project.title}`}
          >
            {project.primaryUrlType === "github" ? (
              <GithubIcon className="w-4 h-4" />
            ) : (
              <ExternalLink className="w-4 h-4" />
            )}
          </a>
        )}
      </div>
    </div>
  );
}
