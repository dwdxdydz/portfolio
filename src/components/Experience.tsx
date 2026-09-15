"use client";

import { EXPERIENCES } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="code-label">// experience</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Work Experience</h2>
        </motion.div>

        <div className="mt-12 space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="p-6 sm:p-8 rounded-xl border border-border bg-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted shrink-0">
                  <span>{exp.location}</span>
                  <span className="w-1 h-1 rounded-full bg-muted" aria-hidden="true" />
                  <span className="font-mono text-xs">{exp.period}</span>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-muted text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono bg-surface-alt text-muted rounded border border-border"
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
