// All portfolio data in one place — every fact is sourced from the resume, GitHub repos, and verified projects.

export const PERSONAL = {
  name: "Ajit Pal Singh",
  tagline:
    "I work at the intersection of business, data, and technology — turning complex problems into measurable insights, scalable workflows, and practical software.",
  location: "Bangalore, India",
  email: "ajit.iitb25@gmail.com",
  linkedin: "https://www.linkedin.com/in/ajitpalsinghiitb",
  github: "https://github.com/dwdxdydz",
  resumeUrl: "/resume.pdf",
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Analytics", href: "#analytics" },
  { label: "Engineering", href: "#engineering" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const METRICS = [
  { value: "₹5+ Cr", label: "Business Revenue Tracked" },
  { value: "1,000+", label: "Conversions Analyzed" },
  { value: "50+", label: "Sales Executives Supported" },
  { value: "~90%", label: "CV Model Accuracy" },
  { value: "~15ms", label: "Inference Latency" },
  { value: "300+", label: "DSA Problems Solved" },
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
      "Analyze sales, lead funnel, and revenue performance across Home Care and Membership verticals, tracking 1,000+ conversions and ₹5+ Cr business revenue.",
      "Built and automated MIS dashboards using Excel, CRM data, and Zoho Analytics for real-time productivity and performance monitoring.",
      "Analyze lead sources and conversion rates to improve campaign and sales efficiency.",
      "Work on performance-based lead reassignment across digital and inbound channels.",
      "Work cross-functionally with Sales, HR, Finance, and Tech teams, supporting 50+ sales executives.",
      "Automate invoice and collection tracking processes.",
    ],
    tech: [
      "Excel",
      "Zoho Analytics",
      "Power BI",
      "SQL",
      "CRM Analytics",
      "MIS",
    ],
  },
  {
    role: "Research Intern — Computer Vision",
    company: "NCAIR, IIT Bombay",
    location: "Mumbai",
    period: "May 2024 – July 2024",
    bullets: [
      "Built a real-time pose detection system using YOLOv8, achieving ~90% accuracy at ~15ms latency.",
      "Developed modular data pipelines with asynchronous workflows and batching for performance optimization.",
      "Integrated YOLOv8 and stereo-vision modules into a unified pipeline; designed reliable data-processing flows.",
    ],
    tech: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "NumPy",
      "Stereo Vision",
      "Linux",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  category: "featured" | "ai-ml" | "analytics" | "engineering" | "dsa";
  featured?: boolean;
  summary: string;
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
      "A B2B SaaS financial modeling and churn diagnosis engine tracking MRR/ARR waterfalls, Net Revenue Retention (NRR), CAC payback, and triangular cohort retention decay. Features an automated root-cause analyzer connecting sales discount policies to churn velocity.",
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
        "Identified that accounts with >20% upfront discounts experienced 1.8x higher churn rates by Month 6, and established that 48% of all churn occurred in the first 90 days. Built actionable executive recommendations to compress payback from 16.4 to 10.8 months.",
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
      "An experimentation and growth analytics platform for multi-step e-commerce checkout funnel drop-off analysis, Two-Proportion Z-tests, Welch's T-tests for Revenue per Visitor (RPV), and statistical sample size/power planning.",
    tech: ["Python", "SciPy", "Statsmodels", "Streamlit", "Plotly", "A/B Testing", "Funnel Analysis", "Pytest"],
    github: "https://github.com/dwdxdydz/growth-funnel-ab-testing",
    caseStudy: {
      problem:
        "E-commerce platforms experience substantial revenue drop-offs between cart addition and checkout completion. Product and growth teams needed a statistically rigorous testing framework to evaluate checkout variants without false-positive winner bias.",
      approach:
        "Built an end-to-end clickstream event processing engine paired with a statistical hypothesis testing harness calculating Z-statistics, p-values, 95% confidence intervals, relative lift, and sample size requirements based on statistical power (1 - β = 0.80).",
      architecture:
        "Clickstream Event Log Generator (10,000+ sessions) → Step Progression & Drop-off Calculator → Statistical A/B Harness (Two-Proportion Z-test + Welch's T-test) → Interactive Streamlit Growth Portal with Sample Size Planner.",
      decisions:
        "Used Welch's T-test to account for unequal variances in revenue per visitor distributions. Implemented pre-experiment sample size calculator with adjustable Minimum Detectable Effect (MDE) and alpha levels to prevent premature experiment stopping.",
      results:
        "Successfully simulated a frictionless 1-click checkout variant proving a statistically significant +18.4% relative conversion lift (p < 0.001) and +$4.20 increase in Revenue per Visitor.",
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
      "A dimensional data warehouse pipeline using Kimball star-schema modeling, modular staging/marts SQL transformations with DuckDB, automated dbt-style schema quality tests, and rolling Z-score revenue anomaly alerting.",
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
        "Delivered sub-50ms analytics query latency across millions of row aggregations with 100% data quality test coverage and automated incident alerts for abnormal revenue swings.",
      learnings:
        "Star-schema data architecture, surrogate key management, automated schema assertions, and statistical process control for analytical data pipelines.",
      future:
        "Integration with cloud object storage (S3/GCS Parquet) and orchestration with Dagster.",
    },
  },
  {
    id: "analytics-ingestion",
    title: "High-Throughput Analytics Ingestion Engine",
    category: "engineering",
    summary:
      "An asynchronous event ingestion service built with FastAPI, Pydantic validation, Token-Bucket Rate Limiting, and an async batch worker that flushes telemetry streams into a high-concurrency WAL-enabled SQL store.",
    tech: ["FastAPI", "Python", "AsyncIO", "Pydantic", "Token Bucket", "SQLite WAL", "Docker", "Pytest"],
    github: "https://github.com/dwdxdydz/analytics-ingestion-engine",
    caseStudy: {
      problem:
        "Direct synchronous database writes under spike traffic from thousands of client devices cause connection pool starvation, high API latency, and potential data loss.",
      approach:
        "Developed a non-blocking asynchronous ingestion API returning immediate HTTP 202 Accepted, utilizing a Token Bucket rate limiter and an in-memory batch queue worker that flushes events in bulk transactions.",
      architecture:
        "Client HTTP Requests → Token Bucket Rate Limiter → FastAPI Ingestion Endpoints (Single & Batch) → In-Memory Async Queue → Periodic/Threshold Batch Worker → Async SQLite WAL Persistence.",
      decisions:
        "Enforced strict payload typing via Pydantic. Used asynchronous queues and batch executemany SQL queries to minimize lock times. Enabled WAL (Write-Ahead Logging) for concurrent reads and writes.",
      results:
        "Achieved 1,500+ requests/sec ingestion throughput on a single core with sub-5ms response times and zero lost events during traffic burst simulations.",
      learnings:
        "Asynchronous concurrency patterns in Python, token-bucket algorithm mechanics, database connection lifecycle management, and containerized deployment practices.",
      future:
        "Distributed Redis Streams backend and Kafka partition consumers for multi-node clustering.",
    },
  },
  {
    id: "flight-alert",
    title: "Flight Alert System",
    category: "featured",
    summary:
      "Automated flight price monitoring tool that tracks prices, stores historical data in MySQL, detects deals using statistical analysis, and sends email alerts. Includes a Streamlit analytics dashboard with Plotly visualizations and CI/CD via GitHub Actions.",
    tech: [
      "Python",
      "MySQL",
      "Streamlit",
      "Plotly",
      "SMTP",
      "GitHub Actions",
      "Pytest",
    ],
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
      "Retrieval-Augmented Generation system that lets users ask questions about PDF documents. The pipeline extracts text, chunks it, generates embeddings, indexes with FAISS, and uses FLAN-T5 for answer generation — keeping retrieval and generation separate for transparency.",
    tech: [
      "Python",
      "FAISS",
      "SentenceTransformers",
      "FLAN-T5",
      "Streamlit",
      "Pytest",
      "GitHub Actions",
    ],
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
    title: "Fourier Image Drawing",
    category: "engineering",
    summary:
      "Transforms images into animated GIFs by reconstructing outlines using Fourier analysis and rotating epicycles. The image contour is treated as a complex-valued signal, decomposed into frequency components, and redrawn through spinning circles.",
    tech: ["Python", "NumPy", "Matplotlib", "Pillow", "Fourier Analysis"],
    github: "https://github.com/dwdxdydz/Fourier-Image-Drawing",
    caseStudy: {
      problem:
        "Visualizing how Fourier series can approximate arbitrary shapes — bridging the gap between abstract mathematics and visual intuition.",
      approach:
        "Extract image contours → represent as complex numbers → compute Fourier coefficients → reconstruct the shape using rotating epicycles → animate the drawing process frame by frame.",
      architecture:
        "Image → contour detection → complex number representation → Fourier coefficient computation → epicycle simulation → frame-by-frame rendering → GIF assembly.",
      decisions:
        "Used complex number representation for natural Fourier analysis. Number of terms is configurable — more terms mean higher fidelity but more computation. CLI interface for flexibility.",
      results:
        "Generates animated GIFs showing how rotating circles (epicycles) reconstruct image outlines, making Fourier decomposition visually intuitive.",
      learnings:
        "Deep understanding of Fourier series in 2D, image processing pipelines, animation generation, and the trade-off between mathematical precision and computational cost.",
      future:
        "FFT-based speedup, better contour resampling, interactive real-time controls.",
    },
  },
  {
    id: "seq2seq",
    title: "Seq2Seq Translation Model",
    category: "ai-ml",
    summary:
      "An educational English → French machine translation system using a GRU-based encoder-decoder architecture. Implements teacher forcing, gradient clipping, and greedy decoding. Built to understand the fundamentals of sequence-to-sequence models.",
    tech: ["Python", "PyTorch", "GRU", "NLP", "Pytest", "GitHub Actions"],
    github: "https://github.com/dwdxdydz/Seq2Seq-Model",
    caseStudy: {
      problem:
        "Understanding how neural machine translation works at a fundamental level — from tokenization through encoding and decoding.",
      approach:
        "Built a GRU encoder-decoder from scratch using PyTorch. Input text is tokenized, encoded into a context vector, then decoded token-by-token to produce the translation.",
      architecture:
        "Input text → tokenization → embedding → GRU encoder → context vector → GRU decoder → output tokens. Teacher forcing used during training; greedy decoding at inference.",
      decisions:
        "GRU chosen over LSTM for simplicity while retaining gating mechanisms. Gradient clipping for training stability. Intentionally small dataset to focus on architecture understanding rather than translation quality.",
      results:
        "A working seq2seq translator that demonstrates the core architecture. The small dataset is acknowledged — this is an educational project, not a production translation system.",
      learnings:
        "Encoder-decoder architectures, teacher forcing trade-offs, handling variable-length sequences, and the importance of data scale for NLP quality.",
      future:
        "Attention mechanisms, BLEU scoring, beam-search decoding, checkpoint saving, and Transformer comparison.",
    },
  },
  {
    id: "lru-cache",
    title: "LRU Cache",
    category: "dsa",
    summary:
      "A reusable Least Recently Used cache with O(1) operations for get, put, and peek. Tracks hits, misses, and evictions. Handles edge cases like stored None values. Includes benchmarks and automated tests.",
    tech: ["Python", "OrderedDict", "Pytest"],
    github: "https://github.com/dwdxdydz/LRU-Cache",
    caseStudy: {
      problem:
        "Implementing a cache with constant-time retrieval and eviction — a classic system design and data structures problem.",
      approach:
        "Used Python's OrderedDict to maintain insertion/access order. On access, items move to the end; on capacity overflow, the first (least recently used) item is evicted.",
      architecture:
        "OrderedDict-backed store with fixed capacity. get() retrieves and moves to end, put() inserts/updates with eviction check, peek() reads without reordering.",
      decisions:
        "OrderedDict provides O(1) move-to-end and pop-first operations, eliminating the need for a manual doubly linked list + hashmap. Stats tracking (hits/misses/evictions) built in for observability.",
      results:
        "A clean, reusable cache implementation demonstrating understanding of core data structures, time complexity, and system design concepts.",
      learnings:
        "Trade-offs in cache design, the importance of O(1) guarantees, and how standard library data structures can simplify implementations.",
      future:
        "TTL support, thread safety, comparison with functools.lru_cache.",
    },
  },
  {
    id: "sales-dashboard",
    title: "Sales Performance Analytics Dashboard",
    category: "analytics",
    summary:
      "Regional sales, profit, refund, and target achievement analysis with month-over-month trends, KPI scorecards, and business risk identification. Built to support data-driven business decisions, not just visualize numbers.",
    tech: ["Power BI", "Power Query", "Excel", "Data Analytics"],
  },
  {
    id: "sudoku",
    title: "Sudoku Solver",
    category: "dsa",
    summary:
      "Sudoku game with an integrated solver. Demonstrates algorithmic thinking, backtracking, and constraint satisfaction — a practical application of core computer science concepts.",
    tech: ["Python"],
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
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Analytics & BI",
    skills: [
      "Excel",
      "Power BI",
      "Power Query",
      "Zoho Analytics",
      "SQL",
      "Data Analysis",
      "MIS",
      "KPI Analysis",
      "Sales Analytics",
      "Revenue Analytics",
      "Cohort Analysis",
      "A/B Testing",
    ],
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "C++", "JavaScript", "MATLAB", "SQL"],
  },
  {
    title: "Software Engineering",
    skills: [
      "DSA",
      "OOP",
      "Backend Development",
      "REST APIs",
      "FastAPI",
      "System Design",
      "Testing (Pytest/JUnit)",
      "Git & GitHub",
      "Docker",
      "Linux",
    ],
  },
  {
    title: "Databases & Warehouses",
    skills: ["MySQL", "MongoDB", "DuckDB", "PostgreSQL", "SQLite WAL", "Star Schema"],
  },
  {
    title: "AI / ML / CV",
    skills: [
      "YOLOv8",
      "OpenCV",
      "NumPy",
      "PyTorch",
      "NLP",
      "RAG",
      "FAISS",
      "Embeddings",
      "Computer Vision",
      "Stereo Vision",
    ],
  },
  {
    title: "Web & Portals",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Streamlit", "Plotly"],
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
    title: "Leadership Roles",
    subtitle: "Institute Indian Games Secretary · Inter IIT Marketing Manager",
    detail:
      "Managed ₹0.3M+ budget, 10+ events with 1,000+ participants, and marketing for the 56th Inter-IIT Sports Meet.",
  },
  {
    year: "2024",
    title: "NCAIR Research Intern",
    subtitle: "Computer Vision · IIT Bombay",
    detail:
      "Real-time pose detection with YOLOv8, stereo vision, and modular data pipelines.",
  },
  {
    year: "2025",
    title: "IIT Bombay Graduation",
    subtitle: "Technical projects · Analytics work · Open-source contributions",
  },
  {
    year: "2025–Present",
    title: "Business Analyst",
    subtitle: "Emoha Elder Care · Bangalore",
    detail:
      "Sales analytics, MIS dashboards, lead funnel optimization, and cross-functional team support.",
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
      "Managed ₹0.3M+ budget for institute-wide athletic events.",
      "Organized 10+ events with 1,000+ participants, led 36 conveners.",
      "Managed 4 Kabaddi/Kho-Kho teams; formed IIT Bombay's first girls' Kabaddi team.",
      "Launched a YouTube channel with 13K+ views.",
    ],
    metrics: [
      { value: "₹0.3M+", label: "Budget Managed" },
      { value: "10+", label: "Events Organized" },
      { value: "1,000+", label: "Participants" },
      { value: "36", label: "Conveners Led" },
    ],
  },
  {
    title: "Inter IIT Marketing Manager",
    org: "56th Inter-IIT Sports Meet",
    period: "June 2023 – December 2023",
    bullets: [
      "Marketing and operations for an event with 2,500 participants and 18,000+ footfall.",
      "Coordinated stakeholders across 23 IITs with a ₹60M budget.",
    ],
    metrics: [
      { value: "2,500", label: "Participants" },
      { value: "18K+", label: "Footfall" },
      { value: "₹60M", label: "Event Budget" },
      { value: "23", label: "IITs Coordinated" },
    ],
  },
];

export interface Achievement {
  value: string;
  label: string;
  detail?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  { value: "IIT Bombay", label: "Graduate", detail: "B.Tech 2021–2025" },
  {
    value: "98.03",
    label: "Percentile — JEE Mains",
  },
  {
    value: "95.3",
    label: "Percentile — JEE Advanced",
  },
  { value: "300+", label: "DSA Problems Solved" },
  {
    value: "Excellence",
    label: "Certificate — NCAIR Research",
    detail: "IIT Bombay",
  },
];
