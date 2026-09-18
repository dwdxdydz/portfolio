"use client";

import { CAREER_TIMELINE } from "@/lib/data";
import { motion } from "framer-motion";

export default function CareerTimeline() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Apple Frosted Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md mb-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent uppercase tracking-wider">Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Career Timeline</h2>
          <p className="mt-3 max-w-xl text-muted text-base sm:text-lg">
            From engineering foundations at IIT Bombay to business analytics in high-growth operational environments.
          </p>
        </motion.div>

        <div className="mt-12 relative">
          {/* Vertical line with subtle gradient */}
          <div
            className="absolute left-3.5 sm:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-accent/50 via-border to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-8">
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
                  className="absolute left-[9px] sm:left-[19px] top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-white dark:ring-black shadow-[0_0_12px_rgba(0,113,227,0.5)]"
                  aria-hidden="true"
                />

                <div className="apple-glass-card p-5 sm:p-6 rounded-2xl">
                  {/* Year badge */}
                  <span className="inline-block px-3 py-0.5 rounded-full bg-white/60 dark:bg-zinc-800/60 backdrop-blur-md border border-black/5 dark:border-white/10 font-mono text-xs text-accent font-semibold mb-2">
                    {item.year}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-accent">{item.subtitle}</p>
                  {item.detail && (
                    <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
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
