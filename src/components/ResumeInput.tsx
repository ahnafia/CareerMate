"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface ResumeInputProps {
  value: string;
  onChange: (value: string) => void;
  onAnalyze: () => void;
  onFillExample: () => void;
  onClear: () => void;
  isLoading: boolean;
  maxChars?: number;
}

export default function ResumeInput({
  value,
  onChange,
  onAnalyze,
  onFillExample,
  onClear,
  isLoading,
  maxChars = 25000,
}: ResumeInputProps) {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const isOverLimit = charCount > maxChars;
  const canAnalyze = value.trim().length > 0 && !isOverLimit && !isLoading;

  return (
    <div className="space-y-4">
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste your resume text here..."
          className={`w-full h-80 p-4 text-sm font-mono rounded-lg border resize-none transition-colors
            ${
              isOverLimit
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:border-gray-400 focus:ring-gray-400"
            }
            bg-gray-50 focus:bg-white focus:ring-1 focus:outline-none
          `}
          disabled={isLoading}
        />
        <div
          className={`absolute bottom-3 right-3 text-xs font-mono ${
            isOverLimit ? "text-red-500" : "text-gray-400"
          }`}
        >
          {charCount.toLocaleString()} / {maxChars.toLocaleString()}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={onAnalyze}
          disabled={!canAnalyze}
          className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all
            ${
              canAnalyze
                ? "bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-950"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Analyzing...
            </span>
          ) : (
            "Analyze"
          )}
        </button>

        <button
          onClick={onFillExample}
          disabled={isLoading}
          className="px-5 py-2.5 rounded-lg font-medium text-sm border border-gray-200 
            text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Fill with example resume
        </button>

        <button
          onClick={onClear}
          disabled={isLoading || value.length === 0}
          className="px-5 py-2.5 rounded-lg font-medium text-sm text-gray-500 
            hover:text-gray-700 hover:bg-gray-50 transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Clear
        </button>
      </div>

      {isOverLimit && (
        <p className="text-sm text-red-500">
          Resume text exceeds maximum length of {maxChars.toLocaleString()}{" "}
          characters.
        </p>
      )}
    </div>
  );
}
