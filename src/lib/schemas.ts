import { z } from "zod";

// Request schema
export const analyzeRequestSchema = z.object({
  resumeText: z
    .string()
    .min(1, "Resume text cannot be empty")
    .max(25000, "Resume text cannot exceed 25,000 characters"),
});

export type AnalyzeRequest = z.infer<typeof analyzeRequestSchema>;

// Parsed resume schema
export const parsedResumeSchema = z.object({
  contact: z.object({
    name: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
  }),
  detectedSections: z.array(z.string()),
  skills: z.array(z.string()),
  experience: z.array(
    z.object({
      title: z.string(),
      company: z.string(),
      bullets: z.array(z.string()),
    })
  ),
});

// Skill gap schema
export const skillGapSchema = z.object({
  skill: z.string(),
  why_it_matters: z.string(),
  how_to_acquire_quickly: z.string(),
});

// Portfolio project idea schema
export const portfolioProjectIdeaSchema = z.object({
  project_name: z.string(),
  what_to_build: z.string(),
  skills_demonstrated: z.array(z.string()),
});

// Recommended role schema
export const recommendedRoleSchema = z.object({
  role_title: z.string(),
  target_level: z.enum(["intern", "junior", "mid"]),
  fit_score_0_100: z.number().min(0).max(100),
  why_this_role_fits: z.array(z.string()),
  evidence_from_resume: z.array(z.string()),
  key_missing_skills_ranked: z.array(skillGapSchema),
  example_job_titles: z.array(z.string()),
  transition_difficulty: z.enum(["low", "medium", "high"]),
  first_30_day_focus: z.array(z.string()),
  portfolio_project_idea: portfolioProjectIdeaSchema,
  risk_flags: z.array(z.string()),
});

// Candidate summary schema
export const candidateSummarySchema = z.object({
  profile_headline: z.string(),
  core_strengths: z.array(z.string()),
  notable_experience_signals: z.array(z.string()),
  constraints_or_gaps: z.array(z.string()),
});

// Full analysis data schema
export const analysisDataSchema = z.object({
  candidate_summary: candidateSummarySchema,
  recommended_roles: z.array(recommendedRoleSchema),
  fit_score_definition: z.string(),
});

// Complete response schema
export const analyzeResponseSchema = z.object({
  parsed: parsedResumeSchema,
  data: analysisDataSchema,
});

export type AnalyzeResponse = z.infer<typeof analyzeResponseSchema>;
