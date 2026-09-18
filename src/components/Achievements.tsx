"use client";

import { ACHIEVEMENTS } from "@/lib/data";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 relative">
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
            <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Academic &amp; Professional Anchors
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              className="apple-glass-card p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs text-center flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-accent tracking-tight">
                  {a.value}
                </div>
                <p className="mt-2 text-xs sm:text-sm font-bold text-zinc-950 dark:text-zinc-50">{a.label}</p>
              </div>
              {a.detail && (
                <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-medium">{a.detail}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
