"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, User, Mail, Phone, Briefcase, Code } from "lucide-react";
import type { ParsedResume } from "@/types";

interface ParsedResumePanelProps {
  parsed: ParsedResume;
}

export default function ParsedResumePanel({ parsed }: ParsedResumePanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="font-medium text-gray-700 text-sm">
          Parsed Resume (Debug)
        </span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="p-4 space-y-6 bg-white">
          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
              Contact Information
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">
                  {parsed.contact.name || "Not detected"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Email:</span>
                <span className="font-medium font-mono text-xs">
                  {parsed.contact.email || "Not detected"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium font-mono text-xs">
                  {parsed.contact.phone || "Not detected"}
                </span>
              </div>
            </div>
          </div>

          {/* Detected Sections */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
              Detected Sections
            </h4>
            {parsed.detectedSections.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {parsed.detectedSections.map((section) => (
                  <span
                    key={section}
                    className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {section}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">No sections detected</p>
            )}
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Extracted Skills ({parsed.skills.length})
            </h4>
            {parsed.skills.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {parsed.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">No skills detected</p>
            )}
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Experience Entries ({parsed.experience.length})
            </h4>
            {parsed.experience.length > 0 ? (
              <div className="space-y-4">
                {parsed.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="pl-3 border-l-2 border-gray-200"
                  >
                    <p className="font-medium text-sm text-gray-800">
                      {exp.title}
                    </p>
                    <p className="text-sm text-gray-500">{exp.company}</p>
                    {exp.bullets.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="text-xs text-gray-600 pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400"
                          >
                            {bullet.length > 100
                              ? bullet.substring(0, 100) + "..."
                              : bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">
                No experience entries detected
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
