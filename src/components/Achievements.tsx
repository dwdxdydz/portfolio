"use client";

import { ACHIEVEMENTS } from "@/lib/data";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="py-8 sm:py-10 relative">
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

        {/* 5-Card Concise Metric Grid with Snug, Balanced Padding */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              className="apple-glass-card px-3 py-2.5 sm:py-3 rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs text-center flex flex-col justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="w-full">
                <div className="text-base sm:text-lg lg:text-[17px] xl:text-lg font-bold text-accent tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                  {a.value}
                </div>
                <p className="mt-0.5 text-xs sm:text-[12.5px] font-bold text-zinc-950 dark:text-zinc-50 leading-tight">
                  {a.label}
                </p>
              </div>
              {a.detail && (
                <p className="mt-0.5 text-[11px] text-zinc-600 dark:text-zinc-400 font-medium leading-tight">
                  {a.detail}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
