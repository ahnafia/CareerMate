import type { ParsedResume, ExperienceEntry } from "@/types";

// Common tech skills dictionary for detection
const COMMON_SKILLS = [
  // Programming Languages
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "C++",
  "C#",
  "C",
  "Go",
  "Rust",
  "Ruby",
  "PHP",
  "Swift",
  "Kotlin",
  "Scala",
  "R",
  "MATLAB",
  "SQL",
  "HTML",
  "CSS",
  // Frameworks & Libraries
  "React",
  "Angular",
  "Vue",
  "Node.js",
  "Express",
  "Django",
  "Flask",
  "Spring",
  "Rails",
  "Next.js",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "NumPy",
  // Cloud & DevOps
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Git",
  "Linux",
  "CI/CD",
  // Databases
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Elasticsearch",
  // Other
  "REST API",
  "GraphQL",
  "Agile",
  "Scrum",
  "Machine Learning",
  "Data Science",
];

// Section header patterns
const SECTION_PATTERNS: { name: string; pattern: RegExp }[] = [
  { name: "Experience", pattern: /^(work\s+)?experience|employment|work\s+history/i },
  { name: "Education", pattern: /^education|academic|degree/i },
  { name: "Projects", pattern: /^projects?|personal\s+projects?|portfolio/i },
  { name: "Skills", pattern: /^(technical\s+)?skills|technologies|competencies/i },
  { name: "Summary", pattern: /^(professional\s+)?summary|objective|profile|about/i },
  { name: "Certifications", pattern: /^certifications?|licenses?/i },
  { name: "Awards", pattern: /^awards?|honors?|achievements?/i },
  { name: "Publications", pattern: /^publications?|papers?/i },
];

// Extract name from first few lines
function extractName(text: string): string | null {
  const lines = text.split("\n").slice(0, 5);
  for (const line of lines) {
    const trimmed = line.trim();
    // Skip empty lines and lines that look like section headers
    if (!trimmed || SECTION_PATTERNS.some((s) => s.pattern.test(trimmed))) {
      continue;
    }
    // Skip lines with @ (email) or numbers that look like phone
    if (trimmed.includes("@") || /\d{3}.*\d{3}.*\d{4}/.test(trimmed)) {
      continue;
    }
    // Likely a name if it's 2-4 words, primarily letters
    const words = trimmed.split(/\s+/);
    if (
      words.length >= 2 &&
      words.length <= 4 &&
      words.every((w) => /^[A-Za-z'-]+$/.test(w))
    ) {
      return trimmed;
    }
  }
  return null;
}

// Extract email
function extractEmail(text: string): string | null {
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const match = text.match(emailPattern);
  return match ? match[0] : null;
}

// Extract phone number
function extractPhone(text: string): string | null {
  const phonePatterns = [
    /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/,
    /\+1[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/,
  ];
  for (const pattern of phonePatterns) {
    const match = text.match(pattern);
    if (match) return match[0];
  }
  return null;
}

// Detect sections present in resume
function detectSections(text: string): string[] {
  const lines = text.split("\n");
  const detected: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    for (const section of SECTION_PATTERNS) {
      if (section.pattern.test(trimmed) && !detected.includes(section.name)) {
        detected.push(section.name);
      }
    }
  }

  return detected;
}

// Extract skills from Skills section and detect common skills throughout
function extractSkills(text: string): string[] {
  const skills = new Set<string>();

  // Find Skills section and extract from it
  const lines = text.split("\n");
  let inSkillsSection = false;
  let skillsSectionDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Check if this is the Skills section header
    if (/^(technical\s+)?skills/i.test(line)) {
      inSkillsSection = true;
      skillsSectionDepth = 0;
      continue;
    }

    // Check if we've hit a new section
    if (inSkillsSection && SECTION_PATTERNS.some((s) => s.pattern.test(line))) {
      inSkillsSection = false;
    }

    // Extract skills from Skills section (limit depth to avoid going too far)
    if (inSkillsSection && skillsSectionDepth < 10) {
      skillsSectionDepth++;
      // Split by common delimiters
      const parts = line.split(/[,•|;·]/);
      for (const part of parts) {
        const cleaned = part.trim().replace(/^[-–—]\s*/, "");
        if (cleaned.length > 1 && cleaned.length < 50) {
          skills.add(cleaned);
        }
      }
    }
  }

  // Also detect common skills from the dictionary throughout the text
  const lowerText = text.toLowerCase();
  for (const skill of COMMON_SKILLS) {
    const lowerSkill = skill.toLowerCase();
    // Use word boundary matching
    const pattern = new RegExp(`\\b${lowerSkill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    if (pattern.test(lowerText)) {
      skills.add(skill);
    }
  }

  return Array.from(skills).sort();
}

// Extract experience entries
function extractExperience(text: string): ExperienceEntry[] {
  const experiences: ExperienceEntry[] = [];
  const lines = text.split("\n");

  // Common patterns for job titles and companies
  const titlePatterns = [
    /^(software|senior|junior|lead|principal|staff)?\s*(engineer|developer|intern|analyst|consultant|manager)/i,
    /intern(?:ship)?/i,
    /\b(at|@)\s+\w+/i,
  ];

  let inExperienceSection = false;
  let currentEntry: ExperienceEntry | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Check if we're entering Experience section
    if (/^(work\s+)?experience|employment/i.test(line)) {
      inExperienceSection = true;
      continue;
    }

    // Check if we've left Experience section
    if (
      inExperienceSection &&
      SECTION_PATTERNS.some(
        (s) => s.name !== "Experience" && s.pattern.test(line)
      )
    ) {
      if (currentEntry) {
        experiences.push(currentEntry);
        currentEntry = null;
      }
      inExperienceSection = false;
      continue;
    }

    if (!inExperienceSection) continue;

    // Try to detect a new job entry (title/company line)
    const hasTitle = titlePatterns.some((p) => p.test(line));
    const looksLikeHeader =
      line.length > 10 &&
      line.length < 100 &&
      !line.startsWith("•") &&
      !line.startsWith("-") &&
      !line.startsWith("*");

    if (hasTitle && looksLikeHeader) {
      if (currentEntry) {
        experiences.push(currentEntry);
      }
      // Parse title and company from line
      const parts = line.split(/\s+(?:at|@|,|-|–|—|\|)\s+/i);
      currentEntry = {
        title: parts[0]?.trim() || line,
        company: parts[1]?.trim() || "Unknown Company",
        bullets: [],
      };
    } else if (currentEntry && (line.startsWith("•") || line.startsWith("-") || line.startsWith("*"))) {
      // This is a bullet point
      const bullet = line.replace(/^[•\-*]\s*/, "").trim();
      if (bullet.length > 10 && currentEntry.bullets.length < 5) {
        currentEntry.bullets.push(bullet);
      }
    }
  }

  // Don't forget the last entry
  if (currentEntry) {
    experiences.push(currentEntry);
  }

  // Limit to 5 entries
  return experiences.slice(0, 5);
}

// Main parsing function
export function parseResume(text: string): ParsedResume {
  return {
    contact: {
      name: extractName(text),
      email: extractEmail(text),
      phone: extractPhone(text),
    },
    detectedSections: detectSections(text),
    skills: extractSkills(text),
    experience: extractExperience(text),
  };
}
