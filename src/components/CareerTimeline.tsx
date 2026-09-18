"use client";

import { CAREER_TIMELINE } from "@/lib/data";
import { motion } from "framer-motion";

export default function CareerTimeline() {
  return (
    <section className="py-8 sm:py-10 relative">
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
            <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Career Timeline</h2>
          <p className="mt-2.5 max-w-xl text-zinc-700 dark:text-zinc-300 text-base sm:text-lg">
            From engineering foundations at IIT Bombay to business analytics in high-growth operational environments.
          </p>
        </motion.div>

        <div className="mt-8 relative">
          {/* Vertical line with gradient */}
          <div
            className="absolute left-3.5 sm:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-accent/60 via-zinc-300 dark:via-zinc-700 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {CAREER_TIMELINE.map((item, i) => (
              <motion.div
                key={item.year + item.title}
                className="relative pl-10 sm:pl-16"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {/* Glowing Dot */}
                <div
                  className="absolute left-[9px] sm:left-[19px] top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-white dark:ring-black shadow-[0_0_12px_rgba(0,102,204,0.5)]"
                  aria-hidden="true"
                />

                <div className="apple-glass-card p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs">
                  {/* Year badge */}
                  <span className="inline-block px-3 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 font-mono text-xs text-accent font-bold mb-2">
                    {item.year}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-accent">{item.subtitle}</p>
                  {item.detail && (
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {item.detail}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
