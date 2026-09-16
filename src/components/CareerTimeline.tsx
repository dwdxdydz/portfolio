"use client";

import { CAREER_TIMELINE } from "@/lib/data";
import { motion } from "framer-motion";

export default function CareerTimeline() {
  return (
    <section className="py-24 sm:py-32 bg-surface-alt/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Career Timeline</h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {CAREER_TIMELINE.map((item, i) => (
              <motion.div
                key={item.year + item.title}
                className="relative pl-12 sm:pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {/* Dot */}
                <div
                  className="absolute left-[11px] sm:left-[27px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background"
                  aria-hidden="true"
                />

                {/* Year badge */}
                <span className="font-mono text-xs text-accent font-semibold tracking-wider">
                  {item.year}
                </span>

                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.subtitle}</p>
                {item.detail && (
                  <p className="mt-2 text-sm text-muted/80 leading-relaxed">
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
