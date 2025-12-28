import type { AnalysisData } from "@/types";

export const STUBBED_ANALYSIS_DATA: AnalysisData = {
  candidate_summary: {
    profile_headline:
      "CS student with full-stack development experience and ML research background, targeting software engineering roles",
    core_strengths: [
      "Strong foundation in Python, Java, and JavaScript across multiple projects",
      "Hands-on experience with full-stack development (React, Node.js, Flask)",
      "Research experience with machine learning and data processing",
      "Demonstrated ability to optimize systems (40% query performance improvement)",
      "Leadership and communication skills from club presidency and TA role",
    ],
    notable_experience_signals: [
      "SWE internship at established tech company with production impact",
      "AI/ML research experience at university lab",
      "Personal projects showing initiative and end-to-end development capability",
      "Teaching experience indicating strong communication abilities",
    ],
    constraints_or_gaps: [
      "Limited professional experience (1 internship)",
      "No production ML/data engineering experience",
      "Entry-level candidate requiring mentorship and ramp-up time",
      "Geographic flexibility unknown",
    ],
  },
  recommended_roles: [
    {
      role_title: "Software Engineer, Backend",
      target_level: "junior",
      fit_score_0_100: 92,
      why_this_role_fits: [
        "Direct experience building REST APIs in production internship",
        "Strong Python and database skills from coursework and projects",
        "Demonstrated ability to optimize backend performance",
        "Full-stack project experience provides end-to-end context",
      ],
      evidence_from_resume: [
        "Built RESTful APIs using Python and Flask serving 50,000+ users",
        "Optimized database queries reducing response time by 40%",
        "PostgreSQL and MongoDB experience across projects",
        "Authentication system implementation with JWT",
      ],
      key_missing_skills_ranked: [
        {
          skill: "System Design",
          why_it_matters:
            "Essential for designing scalable backend architectures",
          how_to_acquire_quickly:
            "Study 'Designing Data-Intensive Applications' and practice system design interviews",
        },
        {
          skill: "Microservices",
          why_it_matters:
            "Most modern backends use distributed microservices architecture",
          how_to_acquire_quickly:
            "Build a small project with multiple services communicating via message queues",
        },
      ],
      example_job_titles: [
        "Software Engineer I",
        "Backend Developer",
        "Junior Software Engineer",
        "Associate Software Engineer",
      ],
      transition_difficulty: "low",
      first_30_day_focus: [
        "Understand team's codebase architecture and coding standards",
        "Complete onboarding and set up development environment",
        "Pick up small bug fixes to learn the system",
        "Shadow senior engineers during code reviews",
      ],
      portfolio_project_idea: {
        project_name: "URL Shortener with Analytics",
        what_to_build:
          "A URL shortening service with click tracking, rate limiting, and a dashboard showing analytics. Include Redis caching and horizontal scaling considerations.",
        skills_demonstrated: [
          "API design",
          "Database modeling",
          "Caching strategies",
          "System scalability",
        ],
      },
      risk_flags: [
        "May need additional mentorship as first full-time role",
      ],
    },
    {
      role_title: "Full-Stack Developer",
      target_level: "junior",
      fit_score_0_100: 89,
      why_this_role_fits: [
        "Demonstrated ability to work across frontend and backend",
        "React and Node.js experience from personal projects",
        "Internship experience collaborating with frontend teams",
        "Database and API integration experience",
      ],
      evidence_from_resume: [
        "Built full-stack web application with React, Node.js, PostgreSQL",
        "Collaborated with frontend team to integrate React components",
        "Implemented data visualization with Chart.js",
        "Experience with both SQL and NoSQL databases",
      ],
      key_missing_skills_ranked: [
        {
          skill: "Testing Frameworks",
          why_it_matters: "Production code requires comprehensive test coverage",
          how_to_acquire_quickly:
            "Learn Jest for frontend and pytest for backend; add tests to existing projects",
        },
        {
          skill: "CI/CD Pipelines",
          why_it_matters: "Modern teams deploy continuously with automated pipelines",
          how_to_acquire_quickly:
            "Set up GitHub Actions for one of your projects with automated testing and deployment",
        },
      ],
      example_job_titles: [
        "Full-Stack Developer",
        "Web Developer",
        "Software Engineer - Full Stack",
        "Application Developer",
      ],
      transition_difficulty: "low",
      first_30_day_focus: [
        "Understand the full application stack and deployment process",
        "Contribute to both frontend and backend tickets",
        "Learn team's state management and API patterns",
        "Set up local development with all services running",
      ],
      portfolio_project_idea: {
        project_name: "Real-Time Collaboration Board",
        what_to_build:
          "A Kanban board with real-time updates using WebSockets, user authentication, and drag-and-drop functionality. Deploy with containerization.",
        skills_demonstrated: [
          "WebSockets",
          "State management",
          "Real-time sync",
          "Full deployment lifecycle",
        ],
      },
      risk_flags: [
        "May initially favor one stack over the other based on experience",
      ],
    },
    {
      role_title: "Machine Learning Engineer",
      target_level: "junior",
      fit_score_0_100: 78,
      why_this_role_fits: [
        "Research experience with neural networks and PyTorch",
        "Strong Python and data processing skills",
        "Academic foundation in ML from coursework",
        "Experience cleaning and preprocessing datasets",
      ],
      evidence_from_resume: [
        "Implemented neural network models using PyTorch for NLP",
        "Processed datasets using Pandas and NumPy",
        "ML coursework at Berkeley",
        "Experience with TensorFlow",
      ],
      key_missing_skills_ranked: [
        {
          skill: "MLOps & Model Deployment",
          why_it_matters:
            "Production ML requires model serving, monitoring, and retraining pipelines",
          how_to_acquire_quickly:
            "Deploy a model using MLflow or BentoML; learn about model versioning",
        },
        {
          skill: "Feature Engineering at Scale",
          why_it_matters: "Real-world ML success often depends on feature quality",
          how_to_acquire_quickly:
            "Work through a Kaggle competition focusing on feature engineering techniques",
        },
        {
          skill: "A/B Testing & Experimentation",
          why_it_matters: "ML teams need to validate model improvements rigorously",
          how_to_acquire_quickly:
            "Study statistical testing fundamentals and experiment design",
        },
      ],
      example_job_titles: [
        "Junior ML Engineer",
        "Machine Learning Engineer I",
        "ML Platform Engineer",
        "Applied AI Engineer",
      ],
      transition_difficulty: "medium",
      first_30_day_focus: [
        "Understand the team's ML infrastructure and model serving setup",
        "Review existing model training pipelines and codebases",
        "Learn data access patterns and feature stores",
        "Shadow ML engineers during model debugging sessions",
      ],
      portfolio_project_idea: {
        project_name: "End-to-End Sentiment Analysis API",
        what_to_build:
          "Train a sentiment classifier, package it as a REST API with FastAPI, containerize with Docker, and add model monitoring and logging.",
        skills_demonstrated: [
          "Model training",
          "Model serving",
          "API development",
          "Production ML patterns",
        ],
      },
      risk_flags: [
        "Research experience may not directly translate to production ML",
        "May need significant ramp-up on ML infrastructure",
      ],
    },
    {
      role_title: "Data Engineer",
      target_level: "junior",
      fit_score_0_100: 75,
      why_this_role_fits: [
        "SQL and database optimization experience",
        "Python data processing skills from research",
        "Understanding of data pipelines from ML work",
        "AWS and Docker experience for cloud data infrastructure",
      ],
      evidence_from_resume: [
        "Optimized database queries (40% improvement)",
        "Processed and cleaned large datasets with Pandas/NumPy",
        "PostgreSQL and MongoDB experience",
        "AWS EC2 deployment experience",
      ],
      key_missing_skills_ranked: [
        {
          skill: "Data Warehousing",
          why_it_matters:
            "Core to data engineering is understanding warehouse design patterns",
          how_to_acquire_quickly:
            "Learn Snowflake or BigQuery fundamentals; study star/snowflake schemas",
        },
        {
          skill: "Apache Spark/Distributed Computing",
          why_it_matters: "Processing large-scale data requires distributed systems",
          how_to_acquire_quickly:
            "Complete a PySpark tutorial; process a large public dataset",
        },
        {
          skill: "Workflow Orchestration (Airflow)",
          why_it_matters: "Data pipelines require scheduling and dependency management",
          how_to_acquire_quickly:
            "Build a simple ETL pipeline with Apache Airflow",
        },
      ],
      example_job_titles: [
        "Junior Data Engineer",
        "Data Engineer I",
        "Analytics Engineer",
        "ETL Developer",
      ],
      transition_difficulty: "medium",
      first_30_day_focus: [
        "Understand data sources and the data warehouse schema",
        "Review existing ETL pipelines and data quality checks",
        "Learn the team's orchestration and monitoring tools",
        "Fix small data quality issues to learn the system",
      ],
      portfolio_project_idea: {
        project_name: "Weather Data Pipeline",
        what_to_build:
          "Build an ETL pipeline that ingests weather API data, transforms it with Python, loads to a data warehouse, and creates a simple dashboard.",
        skills_demonstrated: [
          "ETL design",
          "API integration",
          "Data modeling",
          "Pipeline orchestration",
        ],
      },
      risk_flags: [
        "Limited exposure to enterprise data systems",
        "May need to learn domain-specific data concepts",
      ],
    },
    {
      role_title: "Frontend Developer",
      target_level: "junior",
      fit_score_0_100: 73,
      why_this_role_fits: [
        "React experience from full-stack projects",
        "JavaScript/TypeScript proficiency",
        "Data visualization experience with Chart.js",
        "Understanding of API integration from backend work",
      ],
      evidence_from_resume: [
        "Built React application for personal finance tracker",
        "Created interactive visualizations with JavaScript/Canvas",
        "TypeScript listed in skills",
        "Frontend collaboration during internship",
      ],
      key_missing_skills_ranked: [
        {
          skill: "Advanced React Patterns",
          why_it_matters:
            "Production frontends require complex state management and optimization",
          how_to_acquire_quickly:
            "Study React patterns like compound components, render props; learn React Query or Redux Toolkit",
        },
        {
          skill: "Accessibility (a11y)",
          why_it_matters: "Modern web apps must be accessible to all users",
          how_to_acquire_quickly:
            "Learn WCAG guidelines; audit your projects with axe-core or Lighthouse",
        },
        {
          skill: "CSS Architecture",
          why_it_matters: "Scalable frontends need organized styling approaches",
          how_to_acquire_quickly:
            "Learn CSS Modules, Tailwind, or styled-components in depth",
        },
      ],
      example_job_titles: [
        "Frontend Developer",
        "React Developer",
        "UI Developer",
        "Web Developer - Frontend",
      ],
      transition_difficulty: "low",
      first_30_day_focus: [
        "Learn the team's component library and design system",
        "Understand state management patterns in the codebase",
        "Complete small UI improvements and bug fixes",
        "Set up Storybook or similar for component development",
      ],
      portfolio_project_idea: {
        project_name: "Accessible Component Library",
        what_to_build:
          "Build a small component library (buttons, modals, forms) with full keyboard navigation, screen reader support, and documentation.",
        skills_demonstrated: [
          "React components",
          "Accessibility",
          "Documentation",
          "TypeScript",
        ],
      },
      risk_flags: [
        "Backend-heavy experience may slow frontend specialization",
        "Design sensibility may need development",
      ],
    },
    {
      role_title: "DevOps Engineer",
      target_level: "junior",
      fit_score_0_100: 68,
      why_this_role_fits: [
        "Docker containerization experience",
        "AWS EC2 deployment knowledge",
        "Linux proficiency mentioned",
        "Understanding of application architecture from full-stack work",
      ],
      evidence_from_resume: [
        "Deployed application on AWS EC2 with Docker",
        "Linux listed in skills",
        "Git experience from all projects",
        "Database administration from projects",
      ],
      key_missing_skills_ranked: [
        {
          skill: "Infrastructure as Code (Terraform)",
          why_it_matters: "Modern infrastructure is managed through code, not consoles",
          how_to_acquire_quickly:
            "Complete HashiCorp's Terraform tutorials; deploy a small project with Terraform",
        },
        {
          skill: "Kubernetes",
          why_it_matters: "Container orchestration is essential for production systems",
          how_to_acquire_quickly:
            "Set up minikube locally; deploy your Docker app to K8s",
        },
        {
          skill: "Monitoring & Observability",
          why_it_matters:
            "DevOps requires understanding system health and debugging production issues",
          how_to_acquire_quickly:
            "Learn Prometheus, Grafana, or Datadog basics; add monitoring to a project",
        },
      ],
      example_job_titles: [
        "Junior DevOps Engineer",
        "Site Reliability Engineer I",
        "Platform Engineer",
        "Cloud Engineer",
      ],
      transition_difficulty: "medium",
      first_30_day_focus: [
        "Understand the team's infrastructure and deployment pipelines",
        "Get access to monitoring dashboards and learn to read them",
        "Shadow on-call engineers during incidents",
        "Contribute to infrastructure documentation",
      ],
      portfolio_project_idea: {
        project_name: "Automated Deployment Pipeline",
        what_to_build:
          "Create a full CI/CD pipeline with GitHub Actions that builds, tests, containerizes, and deploys an app to a cloud platform with health checks.",
        skills_demonstrated: [
          "CI/CD",
          "Containerization",
          "Cloud deployment",
          "Automation",
        ],
      },
      risk_flags: [
        "Limited production operations experience",
        "May need significant upskilling on infrastructure tools",
      ],
    },
    {
      role_title: "API Developer",
      target_level: "junior",
      fit_score_0_100: 85,
      why_this_role_fits: [
        "Direct experience designing and building REST APIs",
        "Database integration expertise",
        "Authentication implementation experience",
        "Performance optimization background",
      ],
      evidence_from_resume: [
        "Developed RESTful APIs using Python and Flask",
        "JWT authentication implementation",
        "Database query optimization (40% improvement)",
        "API integration with frontend teams",
      ],
      key_missing_skills_ranked: [
        {
          skill: "API Documentation (OpenAPI/Swagger)",
          why_it_matters: "Professional APIs require comprehensive documentation",
          how_to_acquire_quickly:
            "Add OpenAPI specs to your Flask API; learn to use Swagger UI",
        },
        {
          skill: "GraphQL",
          why_it_matters: "Many modern APIs use GraphQL alongside or instead of REST",
          how_to_acquire_quickly:
            "Build a simple GraphQL API with your existing data models",
        },
      ],
      example_job_titles: [
        "API Developer",
        "Backend Engineer - APIs",
        "Integration Engineer",
        "Platform Developer",
      ],
      transition_difficulty: "low",
      first_30_day_focus: [
        "Review API documentation standards and patterns used by team",
        "Understand authentication and authorization flows",
        "Learn API versioning strategy and deprecation policies",
        "Contribute to API endpoint improvements",
      ],
      portfolio_project_idea: {
        project_name: "Developer-Friendly API with SDK",
        what_to_build:
          "Build a well-documented REST API with rate limiting, API keys, OpenAPI spec, and auto-generated client SDKs in Python and JavaScript.",
        skills_demonstrated: [
          "API design",
          "Documentation",
          "Authentication",
          "Developer experience",
        ],
      },
      risk_flags: [
        "May not have experience with enterprise API governance",
      ],
    },
    {
      role_title: "QA/Test Automation Engineer",
      target_level: "junior",
      fit_score_0_100: 62,
      why_this_role_fits: [
        "Programming skills applicable to test automation",
        "Code review experience suggests quality focus",
        "Understanding of full application stack",
        "Python proficiency for test scripting",
      ],
      evidence_from_resume: [
        "Participated in code reviews",
        "Contributed to improving team coding standards",
        "Programming experience in Python, Java, JavaScript",
        "Full-stack understanding for E2E testing",
      ],
      key_missing_skills_ranked: [
        {
          skill: "Test Frameworks (Selenium, Cypress, pytest)",
          why_it_matters: "QA automation requires expertise in testing tools",
          how_to_acquire_quickly:
            "Add Cypress tests to your React project; write pytest tests for your APIs",
        },
        {
          skill: "Test Strategy & Planning",
          why_it_matters: "Effective QA requires understanding what and how to test",
          how_to_acquire_quickly:
            "Study testing pyramid, learn about unit/integration/E2E balance",
        },
        {
          skill: "Performance Testing",
          why_it_matters: "Load testing is crucial for production applications",
          how_to_acquire_quickly:
            "Learn Locust or k6; run load tests against your API projects",
        },
      ],
      example_job_titles: [
        "QA Engineer",
        "SDET",
        "Test Automation Engineer",
        "Quality Engineer",
      ],
      transition_difficulty: "medium",
      first_30_day_focus: [
        "Understand existing test infrastructure and frameworks",
        "Learn the team's test coverage and quality metrics",
        "Write tests for new features being developed",
        "Study the application's critical user paths",
      ],
      portfolio_project_idea: {
        project_name: "Test Suite for Existing Project",
        what_to_build:
          "Add comprehensive testing to one of your projects: unit tests, integration tests, E2E tests with Cypress, and a test coverage report.",
        skills_demonstrated: [
          "Test automation",
          "Multiple testing levels",
          "CI integration",
          "Quality mindset",
        ],
      },
      risk_flags: [
        "No specific testing experience mentioned",
        "May view QA as stepping stone rather than career",
      ],
    },
    {
      role_title: "Technical Support Engineer",
      target_level: "junior",
      fit_score_0_100: 70,
      why_this_role_fits: [
        "Strong communication skills from TA and club leadership",
        "Technical depth to understand complex issues",
        "Teaching experience translates to customer education",
        "Full-stack knowledge helps debug various issues",
      ],
      evidence_from_resume: [
        "Teaching Assistant with office hours for 300+ students",
        "President of CS Club with 200+ members",
        "Volunteer teaching programming to students",
        "Documentation experience from research",
      ],
      key_missing_skills_ranked: [
        {
          skill: "Customer Communication",
          why_it_matters: "Technical support requires clear, empathetic communication",
          how_to_acquire_quickly:
            "Practice explaining technical concepts to non-technical friends; study customer service principles",
        },
        {
          skill: "Troubleshooting Methodology",
          why_it_matters: "Systematic debugging saves time and improves customer satisfaction",
          how_to_acquire_quickly:
            "Study structured troubleshooting frameworks; practice with mock scenarios",
        },
      ],
      example_job_titles: [
        "Technical Support Engineer",
        "Customer Engineer",
        "Solutions Engineer",
        "Support Developer",
      ],
      transition_difficulty: "low",
      first_30_day_focus: [
        "Learn the product inside and out through documentation and hands-on use",
        "Shadow senior support engineers on customer calls",
        "Study common issues and their resolutions in the knowledge base",
        "Start handling simpler tickets with guidance",
      ],
      portfolio_project_idea: {
        project_name: "Technical Documentation Site",
        what_to_build:
          "Create a documentation site for one of your projects with tutorials, troubleshooting guides, and API reference. Use a static site generator.",
        skills_demonstrated: [
          "Technical writing",
          "User empathy",
          "Documentation structure",
          "Web development",
        ],
      },
      risk_flags: [
        "May want to transition to pure engineering roles quickly",
        "Customer-facing aspects may not align with preferences",
      ],
    },
    {
      role_title: "Data Analyst",
      target_level: "junior",
      fit_score_0_100: 65,
      why_this_role_fits: [
        "SQL and database skills from projects",
        "Python data processing with Pandas/NumPy",
        "Data visualization experience",
        "Analytical mindset from CS coursework",
      ],
      evidence_from_resume: [
        "Data processing with Pandas and NumPy",
        "SQL query optimization experience",
        "Chart.js visualization in project",
        "Database Systems coursework",
      ],
      key_missing_skills_ranked: [
        {
          skill: "Business Intelligence Tools (Tableau, Looker)",
          why_it_matters:
            "Most companies use BI tools for dashboards and reporting",
          how_to_acquire_quickly:
            "Complete Tableau Public tutorials; create dashboards with public datasets",
        },
        {
          skill: "Statistical Analysis",
          why_it_matters: "Data analysis requires understanding statistical significance",
          how_to_acquire_quickly:
            "Take a statistics course or work through a statistics textbook with R or Python",
        },
        {
          skill: "Excel/Sheets Advanced Functions",
          why_it_matters: "Many stakeholders expect data in spreadsheet format",
          how_to_acquire_quickly:
            "Learn pivot tables, VLOOKUP, and advanced formulas",
        },
      ],
      example_job_titles: [
        "Data Analyst",
        "Business Intelligence Analyst",
        "Junior Analyst",
        "Product Analyst",
      ],
      transition_difficulty: "medium",
      first_30_day_focus: [
        "Understand data sources and how to access them",
        "Learn the team's BI tools and dashboard conventions",
        "Review existing reports and understand key metrics",
        "Build a small dashboard for a team need",
      ],
      portfolio_project_idea: {
        project_name: "Public Dataset Analysis",
        what_to_build:
          "Analyze a public dataset (e.g., from Kaggle) with Python, create visualizations, and write a blog post explaining insights with a Tableau dashboard.",
        skills_demonstrated: [
          "Data analysis",
          "Visualization",
          "Insight communication",
          "BI tools",
        ],
      },
      risk_flags: [
        "Engineering background may lead to quick role change desires",
        "May find pure analysis less engaging than building",
      ],
    },
  ],
  fit_score_definition:
    "Fit score (0-100) represents how well the candidate's current skills, experience, and background align with the role requirements. Scores above 80 indicate strong alignment with minimal gaps. Scores 60-80 suggest good potential with some skill development needed. Scores below 60 indicate significant gaps requiring substantial preparation.",
};
