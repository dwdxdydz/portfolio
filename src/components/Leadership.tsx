"use client";

import { LEADERSHIP_ROLES } from "@/lib/data";
import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Apple Frosted Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md mb-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent uppercase tracking-wider">Leadership &amp; Initiative</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Campus Leadership &amp; Stakeholder Management
          </h2>
          <p className="mt-3 max-w-2xl text-muted text-base sm:text-lg">
            Leading cross-functional student teams, managing operations, and executing institute-scale events at IIT Bombay.
          </p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {LEADERSHIP_ROLES.map((role, i) => (
            <motion.div
              key={role.title}
              className="apple-glass-card p-6 sm:p-8 rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6 pb-4 border-b border-border/50">
                <div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">{role.title}</h3>
                  <p className="text-accent font-semibold text-sm">{role.org}</p>
                </div>
                <span className="font-mono text-xs text-muted px-3 py-1 rounded-full bg-white/60 dark:bg-zinc-800/60 backdrop-blur-md border border-black/5 dark:border-white/10 self-start">
                  {role.period}
                </span>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {role.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="text-center p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-800/60 backdrop-blur-md border border-black/5 dark:border-white/10"
                  >
                    <div className="text-lg font-bold font-mono text-foreground">
                      {m.value}
                    </div>
                    <div className="text-xs text-muted mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {role.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-muted text-sm leading-relaxed"
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
