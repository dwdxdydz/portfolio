"use client";

import { FEATURED_LTV_CASE_STUDY } from "@/lib/data";
import { motion } from "framer-motion";

export default function FeaturedCaseStudy() {
  const caseStudy = FEATURED_LTV_CASE_STUDY;

  return (
    <section id="case-study" className="py-8 sm:py-10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Apple Frosted Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md mb-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
              {caseStudy.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            {caseStudy.title}
          </h2>
          <p className="mt-2.5 max-w-3xl text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
            {caseStudy.summary}
          </p>
        </motion.div>

        {/* 4-Step Analytical Breakdown */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* 1. Problem */}
          <motion.div
            className="apple-glass-card p-6 rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/30">
                  01 · The Problem
                </span>
                <span className="text-xl">⚠️</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 tracking-tight">
                Lack of Systematic LTV &amp; Retention Tracking
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                {caseStudy.problem}
              </p>
            </div>
          </motion.div>

          {/* 2. What I Did */}
          <motion.div
            className="apple-glass-card p-6 rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/30">
                  02 · What I Did
                </span>
                <span className="text-xl">🔍</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 tracking-tight">
                Multi-Segment Cohort &amp; Lifecycle Modeling
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                {caseStudy.whatIDid}
              </p>
            </div>
          </motion.div>

          {/* 3. Key Insight */}
          <motion.div
            className="apple-glass-card p-6 rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                  03 · Key Insight
                </span>
                <span className="text-xl">💡</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 tracking-tight">
                Retention as the Primary Growth Lever
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                {caseStudy.insight}
              </p>
            </div>
          </motion.div>

          {/* 4. Business Impact */}
          <motion.div
            className="apple-glass-card p-6 rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  04 · Business Impact
                </span>
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 tracking-tight">
                Reshaping Field BD &amp; Account Prioritization
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                {caseStudy.impact}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tools Strip */}
        <motion.div
          className="mt-6 apple-glass p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-bold">
              Tools &amp; Techniques Used:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {caseStudy.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full border border-zinc-300/80 dark:border-zinc-700/80 shadow-2xs"
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
