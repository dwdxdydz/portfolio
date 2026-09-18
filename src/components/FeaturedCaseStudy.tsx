"use client";

import { FEATURED_LTV_CASE_STUDY } from "@/lib/data";
import { motion } from "framer-motion";

export default function FeaturedCaseStudy() {
  const caseStudy = FEATURED_LTV_CASE_STUDY;

  return (
    <section id="case-study" className="py-20 sm:py-28 bg-surface-alt/40 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent uppercase tracking-wider">
              {caseStudy.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {caseStudy.title}
          </h2>
          <p className="mt-3 max-w-3xl text-muted text-base sm:text-lg leading-relaxed">
            {caseStudy.summary}
          </p>
        </motion.div>

        {/* 4-Step Analytical Breakdown */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Problem */}
          <motion.div
            className="p-6 sm:p-7 rounded-xl border border-border bg-surface flex flex-col justify-between hover:border-accent/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                  01 · The Problem
                </span>
                <span className="text-xl">⚠️</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Lack of Systematic LTV &amp; Retention Tracking
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </motion.div>

          {/* 2. What I Did */}
          <motion.div
            className="p-6 sm:p-7 rounded-xl border border-border bg-surface flex flex-col justify-between hover:border-accent/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  02 · What I Did
                </span>
                <span className="text-xl">🔍</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Multi-Segment Cohort &amp; Lifecycle Modeling
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {caseStudy.whatIDid}
              </p>
            </div>
          </motion.div>

          {/* 3. Key Insight */}
          <motion.div
            className="p-6 sm:p-7 rounded-xl border border-border bg-surface flex flex-col justify-between hover:border-accent/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  03 · Key Insight
                </span>
                <span className="text-xl">💡</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Retention as the Primary Growth Lever
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {caseStudy.insight}
              </p>
            </div>
          </motion.div>

          {/* 4. Business Impact */}
          <motion.div
            className="p-6 sm:p-7 rounded-xl border border-border bg-surface flex flex-col justify-between hover:border-accent/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  04 · Business Impact
                </span>
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Reshaping Field BD &amp; Account Prioritization
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {caseStudy.impact}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tools Strip */}
        <motion.div
          className="mt-8 p-5 rounded-xl border border-border bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-muted font-medium">
              Tools &amp; Techniques Used:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {caseStudy.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs font-mono bg-surface-alt text-foreground rounded-md border border-border"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
