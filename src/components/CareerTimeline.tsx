"use client";

import { CAREER_TIMELINE } from "@/lib/data";
import { motion } from "framer-motion";

export default function CareerTimeline() {
  return (
    <section className="py-20 sm:py-28 bg-surface-alt/30 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent uppercase tracking-wider">Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Career Timeline</h2>
          <p className="mt-3 max-w-xl text-muted text-base">
            From engineering foundations at IIT Bombay to business analytics in high-growth operational environments.
          </p>
        </motion.div>

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div
            className="absolute left-3.5 sm:left-6 top-2 bottom-2 w-px bg-border"
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
                {/* Dot */}
                <div
                  className="absolute left-[10px] sm:left-[20px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background"
                  aria-hidden="true"
                />

                {/* Year badge */}
                <span className="inline-block px-2 py-0.5 rounded bg-surface border border-border font-mono text-xs text-accent font-semibold mb-1">
                  {item.year}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-accent/80">{item.subtitle}</p>
                {item.detail && (
                  <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                    {item.detail}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
