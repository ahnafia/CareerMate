"use client";

import { useState } from "react";
import { AlertCircle, Sparkles } from "lucide-react";
import ResumeInput from "@/components/ResumeInput";
import ParsedResumePanel from "@/components/ParsedResumePanel";
import RoleCard from "@/components/RoleCard";
import ActionsRow from "@/components/ActionsRow";
import { EXAMPLE_RESUME } from "@/lib/example-resume";
import { analyzeResponseSchema } from "@/lib/schemas";
import type { AnalyzeResponse, RecommendedRole } from "@/types";

export default function Home() {
  const [resumeText, setResumeText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalyzeResponse | null>(null);

  const handleAnalyze = async () => {
    if (!resumeText.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resumeText }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || "Failed to analyze resume");
      }

      // Validate response with Zod
      const validated = analyzeResponseSchema.safeParse(data);
      if (!validated.success) {
        console.error("Validation error:", validated.error);
        throw new Error("Invalid response format from server");
      }

      setResult(validated.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFillExample = () => {
    setResumeText(EXAMPLE_RESUME);
    setError(null);
    setResult(null);
  };

  const handleClear = () => {
    setResumeText("");
    setError(null);
    setResult(null);
  };

  // Sort roles by fit score descending
  const sortedRoles: RecommendedRole[] = result
    ? [...result.data.recommended_roles].sort(
        (a, b) => b.fit_score_0_100 - a.fit_score_0_100
      )
    : [];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-gray-800" />
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Career Pivot Analyzer
            </h1>
          </div>
          <p className="mt-2 text-gray-500">
            Discover your best career transition opportunities based on your resume
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Input Section */}
        <section>
          <ResumeInput
            value={resumeText}
            onChange={setResumeText}
            onAnalyze={handleAnalyze}
            onFillExample={handleFillExample}
            onClear={handleClear}
            isLoading={isLoading}
          />
        </section>

        {/* Error Display */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-red-800">Analysis Failed</p>
              <p className="text-sm text-red-600 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="mt-10 space-y-8">
            {/* Actions Row */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Analysis Results
              </h2>
              <ActionsRow data={result} />
            </div>

            {/* Parsed Resume Debug Panel */}
            <ParsedResumePanel parsed={result.parsed} />

            {/* Candidate Summary */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                Candidate Summary
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                {result.data.candidate_summary.profile_headline}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Core Strengths
                  </h4>
                  <ul className="space-y-1">
                    {result.data.candidate_summary.core_strengths.map((s, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 flex gap-2"
                      >
                        <span className="text-green-500">✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Experience Signals
                  </h4>
                  <ul className="space-y-1">
                    {result.data.candidate_summary.notable_experience_signals.map(
                      (s, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex gap-2"
                        >
                          <span className="text-blue-500">→</span>
                          {s}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {result.data.candidate_summary.constraints_or_gaps.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Areas to Address
                  </h4>
                  <ul className="space-y-1">
                    {result.data.candidate_summary.constraints_or_gaps.map(
                      (gap, i) => (
                        <li
                          key={i}
                          className="text-sm text-amber-700 flex gap-2"
                        >
                          <span>⚠</span>
                          {gap}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </section>

            {/* Top 10 Roles */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">
                  Top 10 Recommended Roles
                </h3>
                <p className="text-xs text-gray-400">
                  Sorted by fit score
                </p>
              </div>

              <div className="space-y-4">
                {sortedRoles.map((role, index) => (
                  <RoleCard
                    key={role.role_title}
                    role={role}
                    rank={index + 1}
                  />
                ))}
              </div>
            </section>

            {/* Fit Score Definition */}
            <section className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-500">
                <span className="font-semibold">Fit Score Definition:</span>{" "}
                {result.data.fit_score_definition}
              </p>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <p className="text-xs text-gray-400 text-center">
            Career Pivot Analyzer • MVP • Resume data is not stored
          </p>
        </div>
      </footer>
    </div>
  );
}
