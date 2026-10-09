export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  type?: string;
  grade?: string;
  categories: Array<'Machine Learning' | 'Deep Learning' | 'Computer Vision' | 'NLP' | 'Generative AI'>;
  description: string;
  technologies: string[];
  keyResult: string;
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
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  track?: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  faculty: string;
  department: string;
  period: string;
  honors: string;
  gpa: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}
