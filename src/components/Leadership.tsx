"use client";

import { LEADERSHIP_ROLES } from "@/lib/data";
import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section id="leadership" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Apple Frosted Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md mb-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">Leadership &amp; Initiative</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Campus Leadership &amp; Stakeholder Management
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300 text-base sm:text-lg">
            Leading cross-functional student teams, managing operations, and executing institute-scale events at IIT Bombay.
          </p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {LEADERSHIP_ROLES.map((role, i) => (
            <motion.div
              key={role.title}
              className="apple-glass-card p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">{role.title}</h3>
                  <p className="text-accent font-bold text-sm">{role.org}</p>
                </div>
                <span className="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 self-start">
                  {role.period}
                </span>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {role.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="text-center p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-2xs"
                  >
                    <div className="text-lg font-bold font-mono text-zinc-950 dark:text-zinc-50">
                      {m.value}
                    </div>
                    <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {role.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed font-normal"
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
