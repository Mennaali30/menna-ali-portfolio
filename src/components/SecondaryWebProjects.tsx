"use client";

import React from "react";
import { secondaryWebProjects } from "@/data/portfolioData";
import { GithubIcon } from "./SocialIcons";
import { FolderGit2, ArrowUpRight } from "lucide-react";

export default function SecondaryWebProjects() {
  const displayedProjects = secondaryWebProjects;

  return (
    <section className="py-16 relative overflow-hidden bg-white border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E7E5E0]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#686868] bg-[#F8F7F4] border border-[#E7E5E0] shadow-xs mb-2">
              <FolderGit2 className="w-3.5 h-3.5 text-[#9D8189]" />
              <span>ADDITIONAL CODEBASES</span>
            </div>
            <h3 className="text-2xl font-bold text-[#202124] tracking-tight">
              More Web Projects
            </h3>
            <p className="text-xs sm:text-sm text-[#686868] mt-1">
              Foundational web templates and responsive practice layouts developed throughout my training.
            </p>
          </div>

          <span className="text-xs font-mono text-[#686868] self-start sm:self-auto">
            {secondaryWebProjects.length} Verified Repositories
          </span>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#F8F7F4] rounded-2xl p-5 border border-[#E7E5E0] hover:border-[#9D8189] transition-all duration-200 flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-[#202124] group-hover:text-[#9D8189] transition-colors">
                    {project.title}
                  </h4>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white border border-[#E7E5E0] text-[#686868] hover:text-[#202124] hover:border-[#9D8189] transition-colors shadow-xs"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-[#686868] leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E7E5E0] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white text-[#686868] border border-[#E7E5E0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#202124] hover:text-[#9D8189] transition-colors"
                >
                  <span>Code</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
