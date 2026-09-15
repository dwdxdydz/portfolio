"use client";

import { LEADERSHIP_ROLES } from "@/lib/data";
import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="code-label">// leadership</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Leadership &amp; Impact
          </h2>
          <p className="mt-4 max-w-2xl text-muted text-lg">
            At IIT Bombay, I led teams, managed budgets, organized large-scale events,
            and built things from scratch — experience that shapes how I approach
            professional work today.
          </p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {LEADERSHIP_ROLES.map((role, i) => (
            <motion.div
              key={role.title}
              className="p-6 sm:p-8 rounded-xl border border-border bg-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                  <p className="text-accent font-medium">{role.org}</p>
                </div>
                <span className="font-mono text-xs text-muted shrink-0">
                  {role.period}
                </span>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {role.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="text-center p-3 rounded-lg bg-surface-alt border border-border"
                  >
                    <div className="text-xl font-bold font-mono text-foreground">
                      {m.value}
                    </div>
                    <div className="text-xs text-muted mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-2">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-muted text-sm leading-relaxed"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
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
