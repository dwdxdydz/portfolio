"use client";

import { AI_AUTOMATION_PRACTICES } from "@/lib/data";
import { motion } from "framer-motion";

export default function AISection() {
  return (
    <section id="ai-automation" className="py-20 sm:py-28 relative">
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
            <span className="font-mono text-xs text-accent uppercase tracking-wider">
              Productivity &amp; Automation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Practical AI &amp; Workflow Automation
          </h2>
          <p className="mt-3 max-w-3xl text-muted text-base sm:text-lg leading-relaxed">
            I leverage AI as a force multiplier for productivity — eliminating repetitive manual reporting, cleaning messy spreadsheets, and accelerating analysis without replacing rigorous critical thinking.
          </p>
        </motion.div>

        {/* AI Use Cases Grid (Apple Glass Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_AUTOMATION_PRACTICES.map((item, i) => (
            <motion.div
              key={item.title}
              className="apple-glass-card p-6 rounded-2xl flex flex-col justify-between group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl p-3 rounded-2xl bg-white/70 dark:bg-zinc-800/70 border border-black/5 dark:border-white/10 backdrop-blur-md shadow-xs">
                    {item.icon}
                  </span>
                  <span className="font-mono text-xs text-accent font-medium">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-0.5 text-xs font-mono bg-white/60 dark:bg-zinc-800/60 text-muted rounded-full border border-black/5 dark:border-white/10"
                  >
                    {tool}
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
