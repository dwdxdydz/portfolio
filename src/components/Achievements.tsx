"use client";

import { ACHIEVEMENTS } from "@/lib/data";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 bg-surface-alt/30 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent uppercase tracking-wider">Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Academic &amp; Professional Anchors
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              className="p-5 rounded-xl border border-border bg-surface text-center hover:border-accent/40 transition-colors shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-accent">
                {a.value}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-foreground">{a.label}</p>
              {a.detail && (
                <p className="mt-1 text-[11px] text-muted">{a.detail}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
