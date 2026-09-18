"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Apple Frosted Section Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md mb-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent uppercase tracking-wider">About Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Bridging Business Context &amp; Analytical Execution
          </h2>

          <div className="mt-8 space-y-5 text-muted text-base sm:text-lg leading-relaxed">
            <p>
              I am an <span className="text-foreground font-semibold">IIT Bombay graduate</span> currently working as a <span className="text-foreground font-semibold">Business Analyst</span> in Bangalore. My core work revolves around analyzing complex business data, building interactive dashboards, and automating operational reporting.
            </p>
            <p>
              In my day-to-day role, I go beyond merely reporting numbers. I explore data across customer funnels, marketing channels, and business units to find patterns, diagnose underlying issues, and deliver conclusions that lead to tangible improvements in business processes and sales workflows.
            </p>
            <p>
              To keep operations agile, I actively leverage <span className="text-foreground font-semibold">AI tools and automation</span> (Copilot, ChatGPT, and Python scripts) to streamline repetitive reporting, consolidate multi-workbook Excel spreadsheets, and speed up data wrangling — freeing up time for deeper analytical problem-solving.
            </p>
            <p>
              With a strong grounding in both analytical tools (SQL, Excel, Power BI, Zoho Analytics) and software engineering foundations (Python, Java, C++, APIs, and DSA), I build practical, reliable solutions that connect business questions with measurable outcomes.
            </p>
          </div>

          {/* 4 Apple Bento Frosted Glass Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="apple-glass-card p-6 rounded-2xl">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-semibold text-foreground text-base">Business &amp; Data Analysis</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Sales funnels, revenue metrics, Customer Lifetime Value (LTV), and cohort retention — using data to guide real operational decisions.
              </p>
            </div>

            <div className="apple-glass-card p-6 rounded-2xl">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold text-foreground text-base">Dashboard &amp; MIS Automation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Automating recurring reports and building live executive dashboards in Power BI, Zoho Analytics, and Excel to monitor key KPIs.
              </p>
            </div>

            <div className="apple-glass-card p-6 rounded-2xl">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="font-semibold text-foreground text-base">AI-Assisted Productivity</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Integrating AI tools for rapid data harmonization, SQL query structuring, and workflow automation to accelerate analytical output.
              </p>
            </div>

            <div className="apple-glass-card p-6 rounded-2xl">
              <div className="text-2xl mb-3">⚙️</div>
              <h3 className="font-semibold text-foreground text-base">Technical Foundation</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Solid programming and systems background from IIT Bombay — Python, Java, C++, REST APIs, databases, and 300+ DSA problems solved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
