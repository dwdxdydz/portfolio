// All portfolio data in one place — every fact is sourced from resume, GitHub repos, and verified projects.

export const PERSONAL = {
  name: "Ajit Pal Singh",
  title: "Data Analyst | Business Analyst | IIT Bombay Graduate",
  tagline:
    "Turning business data into actionable insights through SQL, Excel, Power BI, Python, and automation.",
  location: "Bangalore, India",
  email: "ajit.iitb25@gmail.com",
  linkedin: "https://www.linkedin.com/in/ajitpalsinghiitb",
  github: "https://github.com/dwdxdydz",
  resumeUrl: "/resume.pdf",
};

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "LTV Case Study", href: "#case-study" },
  { label: "Skills", href: "#skills" },
  { label: "AI & Automation", href: "#ai-automation" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Business Analyst",
    company: "Emoha Elder Care",
    location: "Bangalore",
    period: "December 2025 – Present",
    bullets: [
      "Analyze sales performance, lead conversion funnels, and revenue metrics across multiple business verticals to uncover growth trends and operational bottlenecks.",
      "Design, build, and maintain automated MIS dashboards and reports using Advanced Excel, SQL, Zoho Analytics, and Power BI for real-time executive and operational monitoring.",
      "Perform granular conversion rate and lead source attribution analysis to optimize marketing campaign spend and enhance sales team productivity.",
      "Conduct in-depth Customer Lifetime Value (LTV) and cohort retention analysis across Business Units, regions, and campaigns to inform strategic customer acquisition and retention priorities.",
      "Collaborate cross-functionally with Sales, HR, Finance, and Tech teams, delivering data-backed recommendations that improve business processes and daily workflows.",
    ],
    tech: [
      "SQL",
      "Advanced Excel",
      "Power BI",
      "Zoho Analytics",
      "Python",
      "MIS Reporting",
      "LTV & Cohort Analysis",
      "Funnel Analytics",
    ],
  },
  {
    role: "Research Intern — Computer Vision",
    company: "NCAIR, IIT Bombay",
    location: "Mumbai",
    period: "May 2024 – July 2024",
    bullets: [
      "Built real-time pose detection and tracking systems using YOLOv8, OpenCV, and deep learning algorithms.",
      "Developed modular asynchronous data processing pipelines with batching and caching for high-throughput video feeds.",
      "Integrated YOLOv8 and stereo-vision modules into an end-to-end pipeline, performing depth estimation and inference optimization on Linux.",
    ],
    tech: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "NumPy",
      "Stereo Vision",
      "Linux",
      "Data Pipelines",
    ],
  },
];

export interface LTVCaseStudy {
  title: string;
  badge: string;
  summary: string;
  problem: string;
  whatIDid: string;
  insight: string;
  impact: string;
  tools: string[];
}

export const FEATURED_LTV_CASE_STUDY: LTVCaseStudy = {
  title: "Customer Lifetime Value (LTV) & Retention Analysis",
  badge: "Featured Analytics Case Study",
  summary:
    "An end-to-end analytical study across customer segments, business units, and marketing channels that diagnosed retention patterns and reshaped field sales operations.",
  problem:
    "Customer Lifetime Value (LTV) was not being tracked systematically across customer touchpoints. Without a unified view of customer value and retention decay, business leadership lacked visibility into which acquisition channels delivered sustainable value versus high early drop-off.",
  whatIDid:
    "Aggregated and modeled multi-source transactional, CRM, and campaign data using SQL, Advanced Excel, and Power BI. Sliced customer cohorts across Business Units, geographic regions, tier-wise cities, marketing acquisition campaigns, and product categories to map out cumulative revenue trajectories and churn inflection points.",
  insight:
    "Identified critical disparities in customer value across different channels and regions. Revealed that long-term customer retention — rather than purely top-of-funnel acquisition volume — was the primary determinant of overall customer lifetime value.",
  impact:
    "The analysis provided executive visibility into customer profitability and directly contributed to a new sales setup that restructured how Field Business Development teams prioritize high-value customer accounts and manage post-sales relationship touchpoints.",
  tools: ["SQL", "Advanced Excel", "Power BI", "Python", "Cohort Modeling", "Segmentation"],
};

export interface AIAutomationItem {
  title: string;
  category: string;
  icon: string;
  description: string;
  tools: string[];
}

export const AI_AUTOMATION_PRACTICES: AIAutomationItem[] = [
  {
    title: "Automating Repetitive Reporting",
    category: "Workflow Automation",
    icon: "⚡",
    description:
      "Automated routine MIS reports and daily metrics compilation using AI-assisted scripts, eliminating manual copy-pasting and repetitive workbook updating.",
    tools: ["Python", "Excel Automation", "AI Scripting"],
  },
  {
    title: "Multi-Sheet Excel Consolidation",
    category: "Data Wrangling",
    icon: "📊",
    description:
      "Used Microsoft Copilot and automated scripts to fetch, parse, and harmonize disparate data from multiple Excel workbooks into unified structured datasets for reporting.",
    tools: ["Copilot", "Advanced Excel", "Power Query"],
  },
  {
    title: "Data Cleaning & Transformation",
    category: "Analytics Productivity",
    icon: "🧹",
    description:
      "Leveraged generative AI to rapidly generate complex SQL queries, formulate regex patterns for messy CRM strings, and build exploratory visualization prototypes.",
    tools: ["SQL", "Python", "ChatGPT", "Pandas"],
  },
  {
    title: "Hourly Operations & Tracking",
    category: "Operational Efficiency",
    icon: "⏱️",
    description:
      "Used AI tools to streamline high-frequency hourly operations reporting and format ad-hoc analytical summaries for rapid stakeholder decision-making.",
    tools: ["ChatGPT", "MIS Dashboards", "Excel"],
  },
  {
    title: "Code Debugging & Software Optimization",
    category: "Technical Acceleration",
    icon: "🛠️",
    description:
      "Utilized AI models to assist with code reviews, debug backend logic, scaffold automated tests with Pytest, and optimize SQL query execution plans.",
    tools: ["Python", "Pytest", "Git", "AI Coding"],
  },
];

export interface Project {
  id: string;
  title: string;
  category: "analytics" | "engineering" | "ai-ml" | "dsa";
  featured?: boolean;
  summary: string;
  problem: string;
  concept: string; // Recruiter-friendly technical concept explanation
  tech: string[];
  github?: string;
  caseStudy?: {
    problem: string;
    approach: string;
    architecture: string;
    decisions: string;
    results: string;
    learnings: string;
    future: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "saas-churn",
    title: "SaaS Unit Economics & Churn Diagnosis Engine",
    category: "analytics",
    featured: true,
    summary:
      "A B2B SaaS financial modeling and churn diagnosis engine tracking MRR/ARR waterfalls, Net Revenue Retention (NRR), CAC payback, and triangular cohort retention decay.",
    problem:
      "Topline subscription revenue growth was masking an underlying churn leak in entry-level tiers, making it difficult to pinpoint whether the root cause was pricing, onboarding, or discounting policies.",
    concept:
      "Cohort Retention Analysis: Groups customers by signup month and tracks their retention over time to see whether newer cohorts stay longer than older ones.",
    tech: ["Python", "Pandas", "Streamlit", "Plotly", "Cohort Analysis", "Financial Modeling", "Pytest"],
    github: "https://github.com/dwdxdydz/saas-churn-unit-economics",
    caseStudy: {
      problem:
        "Topline SaaS subscription revenue growth was masking an underlying churn leak in entry-level tiers, making it difficult for leadership to determine whether the problem was product adoption, onboarding friction, or discounting traps.",
      approach:
        "Engineered an automated unit economics model calculating LTV, CAC, CAC Payback, NRR, and GRR across customer cohorts, combined with a statistical root-cause diagnostic engine evaluating discount and support ticket correlations.",
      architecture:
        "24-Month Customer Lifecycle Ingestion → Financial Model Engine (MRR/ARR Waterfall) → Triangular Cohort Retention Matrix (Logo & Revenue) → Churn Diagnosis Engine → Streamlit Executive Portal + 5-Slide Leadership Deck.",
      decisions:
        "Segmented cohorts by both acquisition month and pricing tier. Implemented separate logo vs. net revenue retention matrices to highlight expansion counteracting churn in higher tiers. Applied discount elasticity modeling.",
      results:
        "Identified that accounts with high upfront discounts experienced higher churn by Month 6, and established that a substantial portion of churn occurred in the first 90 days. Built actionable executive recommendations to optimize payback periods.",
      learnings:
        "Deepened expertise in SaaS unit economics, LTV:CAC modeling, cohort decay mathematics, and translating analytical outputs into executive decision frameworks.",
      future:
        "Predictive churn scoring with gradient boosted trees and integration with real CRM webhooks.",
    },
  },
  {
    id: "growth-ab-testing",
    title: "Growth Funnel & A/B Experimentation Framework",
    category: "analytics",
    featured: true,
    summary:
      "An experimentation and growth analytics platform for multi-step e-commerce checkout funnel drop-off analysis, Two-Proportion Z-tests, Welch's T-tests, and statistical sample size planning.",
    problem:
      "E-commerce platforms experience substantial drop-offs between cart addition and checkout completion. Product and growth teams need statistically sound testing to evaluate variants without false-positive winner bias.",
    concept:
      "Statistical Hypothesis Testing: Determines with mathematical confidence whether a conversion difference between two user groups is a genuine improvement or random chance.",
    tech: ["Python", "SciPy", "Statsmodels", "Streamlit", "Plotly", "A/B Testing", "Funnel Analysis", "Pytest"],
    github: "https://github.com/dwdxdydz/growth-funnel-ab-testing",
    caseStudy: {
      problem:
        "E-commerce platforms experience substantial revenue drop-offs between cart addition and checkout completion. Product and growth teams needed a statistically rigorous testing framework to evaluate checkout variants without false-positive winner bias.",
      approach:
        "Built an end-to-end clickstream event processing engine paired with a statistical hypothesis testing harness calculating Z-statistics, p-values, 95% confidence intervals, relative lift, and sample size requirements based on statistical power.",
      architecture:
        "Clickstream Event Log Generator (10,000+ sessions) → Step Progression & Drop-off Calculator → Statistical A/B Harness (Two-Proportion Z-test + Welch's T-test) → Interactive Streamlit Growth Portal with Sample Size Planner.",
      decisions:
        "Used Welch's T-test to account for unequal variances in revenue per visitor distributions. Implemented pre-experiment sample size calculator with adjustable Minimum Detectable Effect (MDE) and alpha levels to prevent premature experiment stopping.",
      results:
        "Successfully simulated a frictionless 1-click checkout variant proving statistically significant conversion lift and revenue per visitor gains with validated confidence intervals.",
      learnings:
        "Mastery of hypothesis formulation, Type I / Type II error trade-offs, minimum detectable effect modeling, and conversion rate optimization (CRO) methodologies.",
      future:
        "Sequential testing support (mSPRT) to allow continuous monitoring without alpha inflation.",
    },
  },
  {
    id: "ecommerce-mds",
    title: "Modern Data Stack (MDS) E-Commerce Pipeline",
    category: "engineering",
    featured: true,
    summary:
      "A dimensional data warehouse pipeline using Kimball star-schema modeling, modular staging/marts SQL transformations with DuckDB, automated schema quality tests, and rolling Z-score anomaly alerting.",
    problem:
      "Raw transactional OLTP databases are optimized for writes, resulting in slow analytical queries, missing data validation, and lack of proactive alerting when revenue anomalies occur.",
    concept:
      "Dimensional Data Modeling (Star Schema): Organizes business data into 'facts' (measurable events like orders) and 'dimensions' (context like customers and products) for blazing-fast analytics queries.",
    tech: ["DuckDB", "Modular SQL", "Python", "Data Quality", "Z-Score Anomaly Detection", "Streamlit", "Pytest"],
    github: "https://github.com/dwdxdydz/ecommerce-mds-pipeline",
    caseStudy: {
      problem:
        "Raw transactional OLTP databases are optimized for writes, resulting in slow analytical queries, missing data validation, and lack of proactive alerting when revenue anomalies occur.",
      approach:
        "Designed a dimensional star-schema warehouse with staging views, customer RFM dimensions, and daily fact tables using DuckDB, coupled with an automated data quality assertion engine and rolling statistical anomaly detection.",
      architecture:
        "Raw OLTP Tables (Orders, Customers, Products, Channels) → Staging Views (stg_*) → Dimensional Warehouse Marts (dim_customers, fact_orders, fact_daily_kpis) → Automated Assertion Engine → Rolling 14-Day Z-Score Anomaly Alert Feed.",
      decisions:
        "Employed Kimball dimensional modeling with RFM customer segmentation. Embedded strict data assertions (uniqueness, referential integrity, not-null constraints) that execute automatically in CI. Used rolling 14-day Z-scores to filter out day-of-week seasonality.",
      results:
        "Delivered sub-50ms analytics query latency across aggregations with 100% data quality test coverage and automated incident alerts for abnormal revenue swings.",
      learnings:
        "Star-schema data architecture, surrogate key management, automated schema assertions, and statistical process control for analytical data pipelines.",
      future:
        "Integration with cloud object storage (S3/GCS Parquet) and orchestration with Dagster.",
    },
  },
  {
    id: "flight-alert",
    title: "Automated Flight Price Monitoring & Alert System",
    category: "engineering",
    featured: true,
    summary:
      "An automated price tracking engine that queries flight APIs, stores historical prices in MySQL, detects price drops using statistical baselines, and dispatches automated email alerts.",
    problem:
      "Manually checking airfare across multiple dates and routes is tedious and prone to missing optimal booking windows when price drops occur.",
    concept:
      "Automated Polling & Alerting Pipeline: Continuously monitors external data streams, evaluates conditions against historical statistical baselines, and triggers proactive notifications.",
    tech: ["Python", "MySQL", "Streamlit", "Plotly", "SMTP", "GitHub Actions", "Pytest"],
    github: "https://github.com/dwdxdydz/Flight-Alert-System",
    caseStudy: {
      problem:
        "Manually checking flight prices across dates and routes is time-consuming and easy to miss optimal deals. There was no simple, self-hosted way to track prices over time and get alerted automatically.",
      approach:
        "Built an end-to-end pipeline: query flight APIs → store results in MySQL → run statistical analysis on historical prices → trigger email alerts when prices drop significantly or hit new lows.",
      architecture:
        "Flight API → data collection → MySQL storage → analytics engine (lowest, average, trend) → alert decision engine → SMTP email notifications → Streamlit dashboard with Plotly charts. GitHub Actions handles CI and scheduled runs.",
      decisions:
        "MySQL for structured price history and SQL-based analytics. Exponential backoff for API resilience. Modular design: search, storage, analytics, alerts, and notification as separate modules. Dry-run mode for safe testing.",
      results:
        "A fully automated system that runs on schedule, tracks price history, computes statistical baselines, and sends alerts — with a live dashboard for manual exploration.",
      learnings:
        "Designing reliable data pipelines, handling external API failures gracefully, building scheduled automation with GitHub Actions, and structuring Python projects for maintainability.",
      future:
        "Price prediction models, anomaly detection, additional dashboard filters, cloud deployment, and cloud-hosted database.",
    },
  },
  {
    id: "rag-system",
    title: "RAG Document Assistant",
    category: "ai-ml",
    summary:
      "A Retrieval-Augmented Generation system allowing natural language Q&A over complex PDF documents by separating semantic vector retrieval from local language model generation.",
    problem:
      "Searching through dense PDF documents for specific facts is time-consuming. Direct LLM prompting suffers from hallucinations without verifiable document citations.",
    concept:
      "Vector Similarity Search (RAG): Converts text into mathematical coordinate vectors so the system can retrieve the exact relevant passages based on meaning rather than mere keyword matching.",
    tech: ["Python", "FAISS", "SentenceTransformers", "FLAN-T5", "Streamlit", "Pytest"],
    github: "https://github.com/dwdxdydz/RAG-Sytem",
    caseStudy: {
      problem:
        "Reading through long PDF documents to find specific information is slow. The goal was to build a system where users can ask natural language questions and get relevant answers backed by evidence from the document.",
      approach:
        "Implemented a RAG pipeline: extract text from PDFs → split into overlapping chunks with page metadata → generate semantic embeddings → index in FAISS → find similar chunks via vector search → generate answers with FLAN-T5.",
      architecture:
        "PDF → PyPDF2 extraction → text chunking (with overlap) → SentenceTransformers embeddings → FAISS vector index → semantic similarity search → relevant evidence → FLAN-T5 answer generation. Streamlit provides the web UI.",
      decisions:
        "Kept retrieval separate from generation so users can inspect evidence before trusting the answer. Used FAISS for fast local vector search without requiring an external database. FLAN-T5 chosen as a lightweight local model.",
      results:
        "A working RAG system demonstrating NLP, information retrieval, embeddings, vector search, and AI application development — with automated tests and CI.",
      learnings:
        "Understanding the RAG pattern, working with embedding models, vector similarity search, and the importance of chunk design (size, overlap) for retrieval quality.",
      future:
        "Persistent vector storage, reranking, conversation memory, authentication, REST API deployment, and stronger citation/hallucination protection.",
    },
  },
  {
    id: "fourier-drawing",
    title: "Fourier Image Drawing & Epicycle Animator",
    category: "engineering",
    summary:
      "Transforms image contours into animated reconstructions using complex-valued Fourier analysis and rotating epicycles, rendering the drawing process frame-by-frame.",
    problem:
      "Bridging abstract signal processing and frequency decomposition mathematics with visual intuition.",
    concept:
      "Fourier Decomposition: Breaks down any continuous 2D closed curve into a series of rotating circles (frequencies), showing how simple harmonic motions combine to form complex shapes.",
    tech: ["Python", "NumPy", "Matplotlib", "Pillow", "Fourier Analysis"],
    github: "https://github.com/dwdxdydz/Fourier-Image-Drawing",
  },
  {
    id: "seq2seq",
    title: "Seq2Seq Machine Translation Model",
    category: "ai-ml",
    summary:
      "An educational English → French machine translation system built from scratch using PyTorch with a GRU encoder-decoder architecture, teacher forcing, and gradient clipping.",
    problem:
      "Understanding the foundational mechanics of sequence-to-sequence neural architectures and attention mechanisms from first principles.",
    concept:
      "Encoder-Decoder Architecture: An encoder network compresses an input sequence into a fixed context representation, which a decoder network unpacks into an output sequence.",
    tech: ["Python", "PyTorch", "GRU", "NLP", "Pytest"],
    github: "https://github.com/dwdxdydz/Seq2Seq-Model",
  },
  {
    id: "lru-cache",
    title: "Least Recently Used (LRU) Cache",
    category: "dsa",
    summary:
      "A high-performance in-memory cache supporting strictly O(1) constant-time get, put, and peek operations with integrated hit/miss/eviction telemetry.",
    problem:
      "Optimizing memory utilization by maintaining a fixed-size storage buffer that automatically evicts the oldest unused records under high read/write loads.",
    concept:
      "O(1) Data Structures: Combines a hash map for instantaneous key lookup with an access-ordered list for constant-time eviction of least-recently used elements.",
    tech: ["Python", "Data Structures", "Pytest"],
    github: "https://github.com/dwdxdydz/LRU-Cache",
  },
  {
    id: "sudoku",
    title: "Algorithmic Sudoku Solver",
    category: "dsa",
    summary:
      "An interactive Sudoku game and automated solver demonstrating recursive backtracking algorithms and constraint satisfaction.",
    problem:
      "Efficiently solving combinatorial grid puzzles with strict row, column, and subgrid constraints without exhaustive brute-force search.",
    concept:
      "Recursive Backtracking: An algorithmic technique that incrementally builds candidates and immediately abandons (backtracks from) invalid branches when constraints fail.",
    tech: ["Python", "Algorithms", "Backtracking"],
    github: "https://github.com/dwdxdydz/sudoku",
  },
];

export const PROJECT_CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "featured", label: "Featured" },
  { key: "analytics", label: "Analytics & Growth" },
  { key: "engineering", label: "Engineering & Systems" },
  { key: "ai-ml", label: "AI / ML" },
  { key: "dsa", label: "DSA" },
];

export interface SkillGroup {
  title: string;
  category: "primary" | "core" | "technical" | "tools";
  badge: string;
  description: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Data & Analytics",
    category: "primary",
    badge: "Primary Focus",
    description: "Core analytical stack for querying, modeling, and executive dashboarding",
    skills: [
      "SQL",
      "Advanced Excel",
      "Power BI",
      "Python",
      "Zoho Analytics",
      "Data Analysis",
      "Dashboard Development",
      "MIS Reporting",
      "LTV Analysis",
      "Cohort Retention",
      "A/B Testing",
    ],
  },
  {
    title: "Business & Strategy",
    category: "core",
    badge: "Business Acumen",
    description: "Translating ambiguous operational questions into structured evidence and workflows",
    skills: [
      "Business Analysis",
      "Business Problem Solving",
      "Data-Driven Decision Making",
      "Process Analysis",
      "Reporting Automation",
      "Funnel Optimization",
      "Sales Performance Analysis",
      "KPI Definition",
    ],
  },
  {
    title: "Software & Engineering",
    category: "technical",
    badge: "Technical Depth",
    description: "Solid computer science and backend engineering foundation",
    skills: [
      "Java",
      "C++",
      "REST APIs",
      "Git & GitHub",
      "Backend Development",
      "DSA",
      "OOP",
      "Pytest / Automated Testing",
      "FastAPI",
    ],
  },
  {
    title: "Databases & Tools",
    category: "tools",
    badge: "Infrastructure",
    description: "Data storage, transformation engines, and developer environment",
    skills: [
      "MySQL",
      "PostgreSQL",
      "DuckDB",
      "SQLite (WAL)",
      "Power Query",
      "Linux",
      "Docker",
    ],
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  detail?: string;
}

export const CAREER_TIMELINE: TimelineItem[] = [
  {
    year: "2021",
    title: "IIT Bombay",
    subtitle: "B.Tech — Metallurgical Engineering and Materials Science",
  },
  {
    year: "2023",
    title: "Leadership at Scale",
    subtitle: "Institute Indian Games Secretary · Inter IIT Marketing Manager",
    detail:
      "Led 36 conveners, managed institute events with 1,000+ participants, and coordinated marketing for the 56th Inter-IIT Sports Meet across 23 IITs.",
  },
  {
    year: "2024",
    title: "NCAIR Research Intern",
    subtitle: "Computer Vision · IIT Bombay",
    detail:
      "Real-time pose detection with YOLOv8, stereo vision, and asynchronous data processing pipelines.",
  },
  {
    year: "2025",
    title: "IIT Bombay Graduation",
    subtitle: "Data Analytics · Backend Systems · Open-Source Projects",
  },
  {
    year: "2025–Present",
    title: "Business Analyst",
    subtitle: "Emoha Elder Care · Bangalore",
    detail:
      "Sales & revenue analytics, automated MIS dashboards, lead funnel optimization, and Customer Lifetime Value (LTV) cohort modeling.",
  },
];

export interface LeadershipRole {
  title: string;
  org: string;
  period: string;
  bullets: string[];
  metrics: { value: string; label: string }[];
}

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    title: "Institute Indian Games Secretary",
    org: "IIT Bombay",
    period: "April 2023 – March 2024",
    bullets: [
      "Managed budget and operations for institute-wide athletic and sports events.",
      "Organized 10+ events with 1,000+ participants and led a team of 36 student conveners.",
      "Managed institute Kabaddi/Kho-Kho teams and spearheaded the formation of IIT Bombay's first girls' Kabaddi team.",
      "Launched digital outreach initiatives including a YouTube channel reaching 13K+ views.",
    ],
    metrics: [
      { value: "36", label: "Conveners Led" },
      { value: "10+", label: "Events Organized" },
      { value: "1,000+", label: "Participants" },
      { value: "IIT Bombay", label: "Campus Leadership" },
    ],
  },
  {
    title: "Inter IIT Marketing Manager",
    org: "56th Inter-IIT Sports Meet",
    period: "June 2023 – December 2023",
    bullets: [
      "Led marketing and operational coordination for a national event hosting 2,500 athletes and 18,000+ footfall.",
      "Coordinated cross-functional stakeholders across 23 IITs to ensure seamless execution.",
    ],
    metrics: [
      { value: "2,500", label: "Athletes" },
      { value: "18K+", label: "Footfall" },
      { value: "23", label: "IITs Coordinated" },
      { value: "National", label: "Inter-IIT Event" },
    ],
  },
];

export interface Achievement {
  value: string;
  label: string;
  detail?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  { value: "IIT Bombay", label: "Graduate", detail: "B.Tech Class of 2025" },
  { value: "98.03 %ile", label: "JEE Mains", detail: "Top 2% Nationwide" },
  { value: "95.3 %ile", label: "JEE Advanced", detail: "Top Engineering Entrance" },
  { value: "300+", label: "DSA Solved", detail: "Algorithmic Problems" },
  { value: "Excellence", label: "Research Award", detail: "NCAIR, IIT Bombay" },
];
