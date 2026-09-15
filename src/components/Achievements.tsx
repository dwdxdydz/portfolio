"use client";

import { ACHIEVEMENTS } from "@/lib/data";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-surface-alt/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="code-label">// achievements</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Achievements</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              className="p-5 rounded-lg border border-border bg-surface text-center hover:border-accent/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-accent">
                {a.value}
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">{a.label}</p>
              {a.detail && (
                <p className="mt-1 text-xs text-muted">{a.detail}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
