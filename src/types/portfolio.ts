export type Specialization = "frontend" | "ai-ml";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  type?: string;
  grade?: string;
  specialty: Specialization;
  categories: string[];
  description: string;
  technologies: string[];
  keyResult?: string;
  metrics?: ProjectMetric[];
  detailedResults?: string[];
  architecture?: string[];
  dataset?: string;
  techniques?: string[];
  caseStudy?: {
    problem: string;
    approach: string;
    technologies: string[];
    results: string[];
    deployment: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  colabUrl?: string;
  primaryUrl?: string;
  primaryUrlLabel?: string;
  primaryUrlType?: "github" | "live" | "colab";
  disclaimer?: string;
  note?: string;
  featuredProminence?: "high" | "medium" | "compact";
}

export interface SecondaryWebProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  track?: string;
  period: string;
  status: "Present" | "Completed" | "Accepted";
  isOngoing?: boolean;
  type: "training" | "internship" | "teaching" | "education";
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  faculty: string;
  graduationDate: string;
  gpa: string;
  honors: string;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  specialty: Specialization | "generative";
  description: string;
  skills: string[];
}
