import { NextRequest, NextResponse } from "next/server";
import { analyzeRequestSchema } from "@/lib/schemas";
import { parseResume } from "@/lib/parser";
import { STUBBED_ANALYSIS_DATA } from "@/lib/stubbed-response";

// Uncomment to use Gemini API
// import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request
    const validation = analyzeRequestSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.error.errors.map((e) => e.message).join(", "),
        },
        { status: 400 }
      );
    }

    const { resumeText } = validation.data;

    // Parse resume deterministically
    const parsed = parseResume(resumeText);

    // ========================================================
    // STUBBED LLM CALL - Replace with Gemini API when ready
    // ========================================================
    
    /*
    // Uncomment this block to enable Gemini API calls
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not configured" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Analyze the following resume and provide career transition recommendations.

Resume Text:
${resumeText}

Parsed Information:
${JSON.stringify(parsed, null, 2)}

Respond with a JSON object matching this exact schema:
{
  "candidate_summary": {
    "profile_headline": string,
    "core_strengths": string[],
    "notable_experience_signals": string[],
    "constraints_or_gaps": string[]
  },
  "recommended_roles": [
    {
      "role_title": string,
      "target_level": "intern" | "junior" | "mid",
      "fit_score_0_100": number,
      "why_this_role_fits": string[],
      "evidence_from_resume": string[],
      "key_missing_skills_ranked": [
        { "skill": string, "why_it_matters": string, "how_to_acquire_quickly": string }
      ],
      "example_job_titles": string[],
      "transition_difficulty": "low" | "medium" | "high",
      "first_30_day_focus": string[],
      "portfolio_project_idea": {
        "project_name": string,
        "what_to_build": string,
        "skills_demonstrated": string[]
      },
      "risk_flags": string[]
    }
  ] (exactly 10 roles, sorted by fit_score_0_100 descending),
  "fit_score_definition": string
}

Provide exactly 10 recommended roles sorted by fit score. Respond ONLY with valid JSON, no markdown.`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    // Parse and validate LLM response
    const analysisData = JSON.parse(responseText);
    */

    // For now, use stubbed response
    const analysisData = STUBBED_ANALYSIS_DATA;

    // ========================================================
    // END STUBBED LLM CALL
    // ========================================================

    return NextResponse.json({
      parsed,
      data: analysisData,
    });
  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      {
        error: "Failed to analyze resume",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
