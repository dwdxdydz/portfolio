"use client";

import { AI_AUTOMATION_PRACTICES } from "@/lib/data";
import { motion } from "framer-motion";

export default function AISection() {
  return (
    <section id="ai-automation" className="py-8 sm:py-10 relative">
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
            <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
              Productivity &amp; Automation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Practical AI &amp; Workflow Automation
          </h2>
          <p className="mt-2.5 max-w-3xl text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
            I leverage AI as a force multiplier for productivity — eliminating repetitive manual reporting, cleaning messy spreadsheets, and accelerating analysis without replacing rigorous critical thinking.
          </p>
        </motion.div>

        {/* AI Use Cases Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AI_AUTOMATION_PRACTICES.map((item, i) => (
            <motion.div
              key={item.title}
              className="apple-glass-card p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-2xl p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-2xs">
                    {item.icon}
                  </span>
                  <span className="font-mono text-xs font-semibold text-accent">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1.5 group-hover:text-accent transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap gap-1.5">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-0.5 text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full border border-zinc-300/80 dark:border-zinc-700/80 shadow-2xs"
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
