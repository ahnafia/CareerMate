# Career Pivot Analyzer

A clean, minimal web application that analyzes resume text and recommends top 10 transition job roles with fit scores and explanations.

## Features

- **Resume Parsing**: Extracts contact info, sections, skills, and experience
- **Role Recommendations**: Returns top 10 career transition roles with detailed analysis
- **Minimal UI**: Professional, clean interface with lots of whitespace
- **Export Options**: Copy JSON or download as file

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone or download the project
cd career-pivot-analyzer

# Install dependencies
npm install

# Copy environment example (optional - LLM calls are currently stubbed)
cp .env.example .env
```

### Setting up GEMINI_API_KEY

The LLM integration is currently **stubbed** (commented out), so no API key is required to run the app. However, if you want to enable real Gemini API calls in the future:

1. Get an API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a `.env` file in the project root:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```
3. Uncomment the Gemini API code in `/src/app/api/analyze/route.ts`

### Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Quick Testing

1. Click **"Fill with example resume"** to populate the textarea with a sample CS student resume
2. Click **"Analyze"** to see the results
3. Review the **Parsed Resume** section (collapsible) to see extracted data
4. Browse the **Top 10 Roles** cards sorted by fit score
5. Use **Copy JSON** or **Download JSON** to export the results

## Project Structure

```
career-pivot-analyzer/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── analyze/
│   │   │       └── route.ts      # API endpoint
│   │   ├── globals.css           # Tailwind CSS
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/
│   │   ├── ActionsRow.tsx        # Copy/Download buttons
│   │   ├── ParsedResumePanel.tsx # Collapsible debug panel
│   │   ├── ResumeInput.tsx       # Textarea with controls
│   │   └── RoleCard.tsx          # Individual role card
│   ├── lib/
│   │   ├── example-resume.ts     # Sample resume text
│   │   ├── parser.ts             # Resume parsing logic
│   │   ├── schemas.ts            # Zod schemas
│   │   └── stubbed-response.ts   # Fixed example output
│   └── types/
│       └── index.ts              # TypeScript types
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## API Endpoint

### POST /api/analyze

**Request Body:**
```json
{
  "resumeText": "string (max 25,000 characters)"
}
```

**Response:**
```json
{
  "parsed": { /* deterministic parsing output */ },
  "data": { /* top 10 roles with fit scores */ }
}
```

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Zod** (runtime validation)
- **Lucide React** (icons)

## License

MIT
# CareerMate
