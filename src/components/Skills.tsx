"use client";

import { SKILL_GROUPS } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="py-24 sm:py-32 bg-surface-alt/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Technical Skills</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              className="p-5 rounded-lg border border-border bg-surface"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono bg-surface-alt border border-border rounded text-muted"
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
