"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Target,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  Zap,
} from "lucide-react";
import type { RecommendedRole } from "@/types";

interface RoleCardProps {
  role: RecommendedRole;
  rank: number;
}

function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case "low":
      return "text-green-600 bg-green-50";
    case "medium":
      return "text-yellow-600 bg-yellow-50";
    case "high":
      return "text-red-600 bg-red-50";
    default:
      return "text-gray-600 bg-gray-50";
  }
}

function getScoreColor(score: number): string {
  if (score >= 80) return "bg-green-500";
  if (score >= 60) return "bg-yellow-500";
  return "bg-gray-400";
}

function getLevelBadgeStyle(level: string): string {
  switch (level) {
    case "intern":
      return "bg-purple-50 text-purple-700 border-purple-200";
    case "junior":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "mid":
      return "bg-teal-50 text-teal-700 border-teal-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

export default function RoleCard({ role, rank }: RoleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors">
      {/* Header - Always Visible */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-sm font-medium">
                {rank}
              </span>
              <h3 className="font-semibold text-gray-900 text-lg truncate">
                {role.role_title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-2 py-0.5 text-xs font-medium rounded border capitalize ${getLevelBadgeStyle(
                  role.target_level
                )}`}
              >
                {role.target_level}
              </span>
              <span
                className={`px-2 py-0.5 text-xs font-medium rounded ${getDifficultyColor(
                  role.transition_difficulty
                )}`}
              >
                {role.transition_difficulty} transition
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                {role.fit_score_0_100}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">
                Fit Score
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${getScoreColor(
                role.fit_score_0_100
              )}`}
              style={{ width: `${role.fit_score_0_100}%` }}
            />
          </div>
        </div>

        {/* Why This Role Fits - Brief Preview */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 line-clamp-2">
            {role.why_this_role_fits[0]}
          </p>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show details
            </>
          )}
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-100 bg-gray-50 p-5 space-y-6">
          {/* Why This Role Fits */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              <CheckCircle className="w-4 h-4" />
              Why This Role Fits
            </h4>
            <ul className="space-y-1.5">
              {role.why_this_role_fits.map((reason, i) => (
                <li key={i} className="text-sm text-gray-700 flex gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Evidence from Resume */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              <Target className="w-4 h-4" />
              Evidence from Resume
            </h4>
            <ul className="space-y-1.5">
              {role.evidence_from_resume.map((evidence, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-600 bg-white px-3 py-2 rounded border border-gray-100"
                >
                  "{evidence}"
                </li>
              ))}
            </ul>
          </div>

          {/* Key Missing Skills */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              <Zap className="w-4 h-4" />
              Key Skills to Develop
            </h4>
            <div className="space-y-3">
              {role.key_missing_skills_ranked.map((skill, i) => (
                <div
                  key={i}
                  className="bg-white p-3 rounded border border-gray-100"
                >
                  <div className="font-medium text-sm text-gray-800">
                    {skill.skill}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {skill.why_it_matters}
                  </p>
                  <p className="text-xs text-blue-600 mt-1.5">
                    → {skill.how_to_acquire_quickly}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Example Job Titles */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Example Job Titles
            </h4>
            <div className="flex flex-wrap gap-2">
              {role.example_job_titles.map((title, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-white text-gray-700 text-xs rounded border border-gray-200"
                >
                  {title}
                </span>
              ))}
            </div>
          </div>

          {/* First 30 Day Focus */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              First 30 Day Focus
            </h4>
            <ol className="space-y-1.5">
              {role.first_30_day_focus.map((focus, i) => (
                <li key={i} className="text-sm text-gray-600 flex gap-2">
                  <span className="text-gray-400 font-mono text-xs w-4">
                    {i + 1}.
                  </span>
                  {focus}
                </li>
              ))}
            </ol>
          </div>

          {/* Portfolio Project Idea */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              <Lightbulb className="w-4 h-4" />
              Portfolio Project Idea
            </h4>
            <div className="bg-white p-4 rounded border border-gray-100">
              <div className="font-medium text-gray-800">
                {role.portfolio_project_idea.project_name}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {role.portfolio_project_idea.what_to_build}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {role.portfolio_project_idea.skills_demonstrated.map(
                  (skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Risk Flags */}
          {role.risk_flags.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                <AlertTriangle className="w-4 h-4" />
                Risk Flags
              </h4>
              <ul className="space-y-1.5">
                {role.risk_flags.map((flag, i) => (
                  <li
                    key={i}
                    className="text-sm text-amber-700 bg-amber-50 px-3 py-2 rounded"
                  >
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
