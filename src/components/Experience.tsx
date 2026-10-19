"use client";

import React, { useState } from "react";
import { experienceData } from "@/data/portfolioData";
import {
  Briefcase,
  Calendar,
  CheckCircle2
} from "lucide-react";

export default function Experience() {
  const [filterType, setFilterType] = useState<"all" | "ongoing" | "completed">("all");

  const filteredItems = experienceData.filter((item) => {
    if (filterType === "ongoing") return item.isOngoing;
    if (filterType === "completed") return !item.isOngoing;
    return true;
  });

  const getStatusBadge = (status: string, type: string) => {
    if (status === "Present") {
      return {
        label: "Ongoing Training",
        color: "bg-emerald-50 text-emerald-700 border-emerald-200"
      };
    }
    if (status === "Accepted") {
      return {
        label: "Accepted / In Progress",
        color: "bg-[#F3F2FF] text-[#6C63FF] border-[#6C63FF]/30"
      };
    }
    if (type === "teaching") {
      return {
        label: "Teaching Experience",
        color: "bg-[#FFE5D9] text-[#9D8189] border-[#F4ACB7]/50"
      };
    }
    return {
      label: "Completed",
      color: "bg-[#F8F7F4] text-[#686868] border-[#E7E5E0]"
    };
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#F8F7F4] border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#202124] bg-white border border-[#E7E5E0] shadow-xs mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>TRAINING & PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Experience & <span className="gradient-text-frontend">Specialized Training</span>
          </h2>
          <p className="mt-3 text-[#686868] max-w-2xl text-sm sm:text-base">
            Accredited national programs, instructional teaching roles, and practical software engineering internships.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setFilterType("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              filterType === "all"
                ? "bg-[#202124] text-white font-semibold shadow-xs"
                : "bg-white text-[#686868] border border-[#E7E5E0] hover:text-[#202124]"
            }`}
          >
            All Engagements ({experienceData.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterType("ongoing")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              filterType === "ongoing"
                ? "bg-[#202124] text-white font-semibold shadow-xs"
                : "bg-white text-[#686868] border border-[#E7E5E0] hover:text-[#202124]"
            }`}
          >
            Active & Accepted ({experienceData.filter((i) => i.isOngoing).length})
          </button>
          <button
            type="button"
            onClick={() => setFilterType("completed")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              filterType === "completed"
                ? "bg-[#202124] text-white font-semibold shadow-xs"
                : "bg-white text-[#686868] border border-[#E7E5E0] hover:text-[#202124]"
            }`}
          >
            Completed ({experienceData.filter((i) => !i.isOngoing).length})
          </button>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredItems.map((item) => {
            const statusInfo = getStatusBadge(item.status, item.type);
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E5E0] hover:border-[#9D8189] shadow-xs hover:shadow-md transition-all duration-300 relative group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${statusInfo.color}`}
                      >
                        {statusInfo.label}
                      </span>

                      {item.track && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#F8F7F4] text-[#202124] border border-[#E7E5E0]">
                          {item.track}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#202124] group-hover:text-[#9D8189] transition-colors">
                      {item.organization}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#9D8189] font-semibold mt-0.5">
                      {item.role}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-[#686868] flex items-center gap-1.5 shrink-0 bg-[#F8F7F4] px-3 py-1 rounded-full border border-[#E7E5E0]">
                    <Calendar className="w-3.5 h-3.5 text-[#9D8189]" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#202124]/80 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-5">
                  {item.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#686868]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9D8189] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E7E5E0]">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#F8F7F4] text-[#202124] border border-[#E7E5E0]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
