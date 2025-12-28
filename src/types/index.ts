export interface ParsedResume {
  contact: {
    name: string | null;
    email: string | null;
    phone: string | null;
  };
  detectedSections: string[];
  skills: string[];
  experience: ExperienceEntry[];
}

export interface ExperienceEntry {
  title: string;
  company: string;
  bullets: string[];
}

export interface SkillGap {
  skill: string;
  why_it_matters: string;
  how_to_acquire_quickly: string;
}

export interface PortfolioProjectIdea {
  project_name: string;
  what_to_build: string;
  skills_demonstrated: string[];
}

export interface RecommendedRole {
  role_title: string;
  target_level: "intern" | "junior" | "mid";
  fit_score_0_100: number;
  why_this_role_fits: string[];
  evidence_from_resume: string[];
  key_missing_skills_ranked: SkillGap[];
  example_job_titles: string[];
  transition_difficulty: "low" | "medium" | "high";
  first_30_day_focus: string[];
  portfolio_project_idea: PortfolioProjectIdea;
  risk_flags: string[];
}

export interface CandidateSummary {
  profile_headline: string;
  core_strengths: string[];
  notable_experience_signals: string[];
  constraints_or_gaps: string[];
}

export interface AnalysisData {
  candidate_summary: CandidateSummary;
  recommended_roles: RecommendedRole[];
  fit_score_definition: string;
}

export interface AnalyzeResponse {
  parsed: ParsedResume;
  data: AnalysisData;
}

export interface ApiError {
  error: string;
  details?: string;
}
