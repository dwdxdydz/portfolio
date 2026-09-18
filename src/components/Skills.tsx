"use client";

import { SKILL_GROUPS } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  const primaryGroup = SKILL_GROUPS.find((g) => g.category === "primary");
  const otherGroups = SKILL_GROUPS.filter((g) => g.category !== "primary");

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Apple Frosted Section Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md mb-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent uppercase tracking-wider">Skills &amp; Toolkit</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Recruiter &amp; Technical Skillset
          </h2>
          <p className="mt-3 max-w-2xl text-muted text-base sm:text-lg">
            Specialized in data analytics, business intelligence, and reporting automation, backed by a rigorous computer science foundation.
          </p>
        </motion.div>

        {/* Primary Focus: Data & Analytics (Prominent Apple Glass Highlight Card) */}
        {primaryGroup && (
          <motion.div
            className="mt-10 p-6 sm:p-8 rounded-3xl border border-accent/30 bg-white/75 dark:bg-zinc-900/70 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,113,227,0.12)] relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {/* Subtle inner accent glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-mono font-semibold bg-accent text-white rounded-full mb-2.5 shadow-sm">
                  {primaryGroup.badge}
                </span>
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 tracking-tight">
                  {primaryGroup.title}
                </h3>
              </div>
              <p className="text-sm text-muted max-w-md">{primaryGroup.description}</p>
            </div>

            <div className="relative z-10 mt-6 flex flex-wrap gap-2.5">
              {primaryGroup.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium bg-accent/10 dark:bg-accent/15 text-foreground border border-accent/25 rounded-full hover:border-accent hover:bg-accent/20 transition-all cursor-default shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Secondary & Supporting Skills Grid (Apple Glass Cards) */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {otherGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="apple-glass-card p-6 rounded-2xl flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-muted">{group.badge}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1 tracking-tight">{group.title}</h3>
                <p className="text-xs text-muted mb-5 leading-relaxed">{group.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono bg-white/60 dark:bg-zinc-800/60 backdrop-blur-md text-foreground border border-black/5 dark:border-white/10 rounded-full"
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
