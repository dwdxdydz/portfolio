"use client";

import { ACHIEVEMENTS } from "@/lib/data";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="py-8 sm:py-10 relative">
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
              Milestones &amp; Honors
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Academic Foundations &amp; Key Distinctions
          </h2>
          <p className="mt-2.5 max-w-2xl text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
            Demonstrated track record of national competitive excellence, elite technical education from IIT Bombay, and recognized research innovation.
          </p>
        </motion.div>

        {/* High-Impact 2x2 Bento Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.id}
              className="apple-glass-card p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div>
                {/* Header Category & Badge Pill */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
                  <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                    {a.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">
                    {a.badge}
                  </span>
                </div>

                {/* Primary Metric & Title */}
                <div className="mt-4">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-accent tracking-tight">
                      {a.metric}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                      {a.metricLabel}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg sm:text-xl font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
                    {a.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                    {a.description}
                  </p>
                </div>
              </div>

              {/* Bottom Quick-Proof Highlights */}
              <div className="pt-4 mt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap gap-2">
                {a.highlights.map((h) => (
                  <span
                    key={h.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-800 dark:text-zinc-200"
                  >
                    <span className="font-bold text-accent">{h.value}</span>
                    <span className="text-zinc-500 dark:text-zinc-400">·</span>
                    <span>{h.label}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
