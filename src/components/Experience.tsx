"use client";

import { EXPERIENCES } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-8 sm:py-10 relative">
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
            <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">Career Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Professional Experience
          </h2>
          <p className="mt-2.5 max-w-2xl text-zinc-700 dark:text-zinc-300 text-base sm:text-lg">
            Delivering data-driven insights, automated reporting, and operational efficiency across business teams.
          </p>
        </motion.div>

        <div className="mt-8 space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              className="apple-glass-card p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-5 border-b border-zinc-200/80 dark:border-zinc-800/80">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-accent font-bold">{exp.company}</span>
                    <span className="text-zinc-400">·</span>
                    <span className="text-zinc-600 dark:text-zinc-400 text-sm font-medium">{exp.location}</span>
                  </div>
                </div>

                <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 shrink-0 self-start shadow-2xs">
                  {exp.period}
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 mr-1">Tools:</span>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full border border-zinc-300/80 dark:border-zinc-700/80 shadow-2xs"
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
