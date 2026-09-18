"use client";

import { SKILL_GROUPS } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  const primaryGroup = SKILL_GROUPS.find((g) => g.category === "primary");
  const otherGroups = SKILL_GROUPS.filter((g) => g.category !== "primary");

  return (
    <section id="skills" className="py-8 sm:py-10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Apple Frosted Section Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md mb-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">Skills &amp; Toolkit</span>
          </div>

          {/* Heading strictly renamed to "Technical Skill Set" */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Technical Skill Set
          </h2>
          <p className="mt-2.5 max-w-2xl text-zinc-700 dark:text-zinc-300 text-base sm:text-lg">
            Specialized in data analytics, business intelligence, and reporting automation, backed by a rigorous computer science foundation.
          </p>
        </motion.div>

        {/* Primary Focus: Data & Analytics */}
        {primaryGroup && (
          <motion.div
            className="mt-8 p-6 sm:p-7 rounded-3xl border-2 border-accent/40 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {/* Subtle inner accent glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3.5">
              <div>
                <span className="inline-block px-3.5 py-1 text-xs font-mono font-bold bg-accent text-white rounded-full mb-2 shadow-xs">
                  {primaryGroup.badge}
                </span>
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 flex items-center gap-2 tracking-tight">
                  {primaryGroup.title}
                </h3>
              </div>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 max-w-md">{primaryGroup.description}</p>
            </div>

            <div className="relative z-10 mt-5 flex flex-wrap gap-2.5">
              {primaryGroup.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-semibold bg-accent/10 dark:bg-accent/20 text-zinc-900 dark:text-zinc-100 border border-accent/30 rounded-full hover:border-accent hover:bg-accent/25 transition-all cursor-default shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Secondary & Supporting Skills Grid - Content aligned from TOP */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {otherGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="apple-glass-card p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-start items-stretch h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-400">{group.badge}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1 tracking-tight">{group.title}</h3>
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">{group.description}</p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300/80 dark:border-zinc-700/80 rounded-full shadow-2xs"
                  >
                    {skill}
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
