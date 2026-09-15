"use client";

import { motion } from "framer-motion";

const ENGINEERING_AREAS = [
  {
    title: "Data Structures & Algorithms",
    detail: "300+ problems solved. HashMap, linked lists, trees, graphs, dynamic programming, backtracking.",
    icon: "🧩",
  },
  {
    title: "Backend & APIs",
    detail: "REST API design, backend development, database integration, modular architectures.",
    icon: "🔧",
  },
  {
    title: "Databases",
    detail: "MySQL, MongoDB, SQL — schema design, queries, indexing, and data modeling.",
    icon: "🗄️",
  },
  {
    title: "Testing & CI/CD",
    detail: "Pytest, JUnit, GitHub Actions — automated testing and continuous integration across projects.",
    icon: "✅",
  },
  {
    title: "System Design",
    detail: "Caching (LRU), data pipelines, async workflows, batching, retry strategies.",
    icon: "📐",
  },
  {
    title: "Tools & Workflow",
    detail: "Git, GitHub, Linux, virtual environments, logging, structured error handling.",
    icon: "⚡",
  },
];

export default function Engineering() {
  return (
    <section id="engineering" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="code-label">// engineering</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Engineering Mindset</h2>
          <p className="mt-4 max-w-2xl text-muted text-lg">
            I approach software the same way I approach business problems — break it down,
            design the structure, build it reliably, and test it thoroughly.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ENGINEERING_AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              className="p-5 rounded-lg border border-border bg-surface hover:border-accent/30 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <div className="text-2xl mb-3">{area.icon}</div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {area.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{area.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Languages strip */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-mono text-sm text-muted mb-4">languages</h3>
          <div className="flex flex-wrap gap-3">
            {["Python", "Java", "C++", "JavaScript", "SQL", "MATLAB"].map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 font-mono text-sm border border-border rounded-md bg-surface-alt text-foreground"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
