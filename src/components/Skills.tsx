"use client";

import { SKILL_GROUPS } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  const primaryGroup = SKILL_GROUPS.find((g) => g.category === "primary");
  const otherGroups = SKILL_GROUPS.filter((g) => g.category !== "primary");

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent uppercase tracking-wider">Skills &amp; Toolkit</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Recruiter &amp; Technical Skillset
          </h2>
          <p className="mt-3 max-w-2xl text-muted text-base sm:text-lg">
            Specialized in data analytics, business intelligence, and reporting automation, backed by a rigorous computer science foundation.
          </p>
        </motion.div>

        {/* Primary Focus: Data & Analytics (Prominent Highlight Card) */}
        {primaryGroup && (
          <motion.div
            className="mt-10 p-6 sm:p-8 rounded-xl border-2 border-accent/40 bg-surface shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <span className="inline-block px-2.5 py-1 text-xs font-mono font-semibold bg-accent text-white rounded-md mb-2">
                  {primaryGroup.badge}
                </span>
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  {primaryGroup.title}
                </h3>
              </div>
              <p className="text-sm text-muted max-w-md">{primaryGroup.description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {primaryGroup.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 text-sm font-medium bg-accent/10 text-foreground border border-accent/20 rounded-lg hover:border-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Secondary & Supporting Skills Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {otherGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-between hover:border-accent/30 transition-colors"
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
                <h3 className="text-lg font-bold text-foreground mb-1">{group.title}</h3>
                <p className="text-xs text-muted mb-5 leading-relaxed">{group.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono bg-surface-alt text-foreground border border-border rounded-md"
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
