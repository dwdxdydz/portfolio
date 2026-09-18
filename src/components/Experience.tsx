"use client";

import { EXPERIENCES } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-surface-alt/30 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent uppercase tracking-wider">Career Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Professional Experience
          </h2>
          <p className="mt-3 max-w-2xl text-muted text-base sm:text-lg">
            Delivering data-driven insights, automated reporting, and operational efficiency across business teams.
          </p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              className="p-6 sm:p-8 rounded-xl border border-border bg-surface shadow-sm hover:border-accent/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-6 border-b border-border/60">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-accent font-semibold">{exp.company}</span>
                    <span className="text-muted/60">·</span>
                    <span className="text-muted text-sm">{exp.location}</span>
                  </div>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-alt border border-border text-xs font-mono text-foreground shrink-0 self-start">
                  {exp.period}
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-muted text-sm sm:text-base leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-muted mr-1">Tools:</span>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono bg-surface-alt text-foreground rounded-md border border-border"
                  >
                    {t}
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
