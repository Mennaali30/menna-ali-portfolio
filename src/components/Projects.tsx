"use client";

import React, { useState } from "react";
import { projects } from "@/data/portfolioData";
import { Project } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";
import ProjectModal from "./ProjectModal";
import { Sparkles, Filter, Code2, FolderGit2 } from "lucide-react";

type CategoryFilter =
  | "All"
  | "Machine Learning"
  | "Deep Learning"
  | "Computer Vision"
  | "NLP"
  | "Generative AI";

const categories: CategoryFilter[] = [
  "All",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "Generative AI",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.categories.includes(selectedCategory);
  });

  // Calculate project counts per category
  const getCategoryCount = (category: CategoryFilter) => {
    if (category === "All") return projects.length;
    return projects.filter((p) => p.categories.includes(category)).length;
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D8E2DC]/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#FFCAD4]/35 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#222629] bg-white border border-[#9D8189]/30 shadow-xs mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222629] tracking-tight">
            Featured Projects &{" "}
            <span className="gradient-text">AI Implementations</span>
          </h2>
          <p className="mt-3 text-[#222629]/75 max-w-2xl text-sm sm:text-base">
            Engineered pipelines spanning multimodal perception, neural machine translation, computer vision, and predictive analytics.
          </p>
        </div>

        {/* Featured Project Showcase (WASLA) */}
        <FeaturedProject
          onOpenModal={() => setActiveModalProject(projects[0])}
        />

        {/* Category Filters Bar */}
        <div className="mt-16 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#9D8189] font-medium">
            <Filter className="w-4 h-4 text-[#9D8189]" />
            <span>Filter by Domain:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-end">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count = getCategoryCount(category);
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#F4ACB7] text-[#222629] border border-[#F4ACB7] shadow-md shadow-[#F4ACB7]/25 scale-105 font-semibold"
                      : "bg-white text-[#222629] border border-[#D8E2DC] hover:border-[#9D8189] hover:bg-[#D8E2DC]/40 shadow-xs"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isActive
                        ? "bg-[#222629]/15 text-[#222629] font-bold"
                        : "bg-[#D8E2DC]/60 text-[#222629]/80"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl p-8">
            <p className="text-[#222629]/75 text-sm">
              No projects found in this specific category.
            </p>
          </div>
        )}
      </div>

      {/* Detail Modal Component */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
