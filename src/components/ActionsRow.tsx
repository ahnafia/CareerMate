"use client";

import { useState } from "react";
import { Copy, Download, Check } from "lucide-react";
import type { AnalyzeResponse } from "@/types";

interface ActionsRowProps {
  data: AnalyzeResponse;
}

export default function ActionsRow({ data }: ActionsRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `career-analysis-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium 
          border border-gray-200 rounded-lg text-gray-700 
          hover:bg-gray-50 active:bg-gray-100 transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-green-500" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy JSON
          </>
        )}
      </button>

      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium 
          border border-gray-200 rounded-lg text-gray-700 
          hover:bg-gray-50 active:bg-gray-100 transition-colors"
      >
        <Download className="w-4 h-4" />
        Download JSON
      </button>
    </div>
  );
}
