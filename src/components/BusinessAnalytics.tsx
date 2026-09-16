"use client";

import { motion } from "framer-motion";

const PIPELINE_STEPS = [
  { label: "Raw Data", icon: "📥", detail: "CRM exports, spreadsheets, databases" },
  { label: "Cleaning", icon: "🧹", detail: "Standardize, validate, deduplicate" },
  { label: "Analysis", icon: "🔍", detail: "Trends, segments, correlations" },
  { label: "KPIs", icon: "📐", detail: "Define what matters to the business" },
  { label: "Dashboard", icon: "📊", detail: "Power BI, Zoho, Excel" },
  { label: "Insight", icon: "💡", detail: "What the data is saying" },
  { label: "Action", icon: "🎯", detail: "Decisions backed by evidence" },
];

const DOMAIN_AREAS = [
  "Sales Funnel Analytics",
  "Revenue Tracking",
  "Conversion Analysis",
  "Target Achievement",
  "Campaign Performance",
  "Regional Analysis",
  "Productivity Metrics",
  "Collections Tracking",
  "Lead-Source Analysis",
  "MoM Trend Analysis",
  "KPI Scorecards",
  "Business Risk Identification",
];

export default function BusinessAnalytics() {
  return (
    <section id="analytics" className="py-24 sm:py-32 bg-surface-alt/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Turning Data Into Decisions
          </h2>
          <p className="mt-4 max-w-2xl text-muted text-lg">
            I don&apos;t just create dashboards — I use data to understand problems, measure
            impact, and support business decisions with evidence.
          </p>
        </motion.div>

        {/* Pipeline */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-mono text-sm text-muted mb-6">from data to action</h3>

          {/* Desktop pipeline: horizontal */}
          <div className="hidden md:flex items-start justify-between gap-2">
            {PIPELINE_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-start gap-2 flex-1">
                <div className="text-center flex-1">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-surface border border-border text-xl">
                    {step.icon}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {step.label}
                  </p>
                  <p className="mt-1 text-xs text-muted">{step.detail}</p>
                </div>
                {i < PIPELINE_STEPS.length - 1 && (
                  <div className="mt-5 text-muted/40 text-lg shrink-0" aria-hidden="true">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile pipeline: vertical */}
          <div className="md:hidden space-y-3">
            {PIPELINE_STEPS.map((step, i) => (
              <div key={step.label}>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border">
                  <div className="text-xl">{step.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{step.label}</p>
                    <p className="text-xs text-muted">{step.detail}</p>
                  </div>
                </div>
                {i < PIPELINE_STEPS.length - 1 && (
                  <div className="ml-6 text-muted/30 text-sm" aria-hidden="true">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Domain areas */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-mono text-sm text-muted mb-4">domains I work with</h3>
          <div className="flex flex-wrap gap-2">
            {DOMAIN_AREAS.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 text-sm bg-surface border border-border rounded-md text-foreground hover:border-accent/30 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { tool: "Power BI", desc: "Interactive dashboards & reports" },
            { tool: "Excel / Power Query", desc: "Data wrangling & automation" },
            { tool: "Zoho Analytics", desc: "CRM analytics & BI" },
            { tool: "SQL", desc: "Querying & data analysis" },
          ].map((t) => (
            <div
              key={t.tool}
              className="p-4 rounded-lg bg-surface border border-border text-center"
            >
              <p className="font-semibold text-foreground text-sm">{t.tool}</p>
              <p className="mt-1 text-xs text-muted">{t.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
