"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Who I Am</h2>

          <div className="mt-8 space-y-5 text-muted text-lg leading-relaxed">
            <p>
              I&apos;m a Business Analyst at Emoha Elder Care in Bangalore and a 2025
              graduate of IIT Bombay. My work sits at the point where business questions
              meet data, and data meets technology.
            </p>
            <p>
              Day to day, I analyze sales funnels, build MIS dashboards, and design
              lead-routing workflows that help teams make faster, better-informed
              decisions. But my background goes deeper: I&apos;ve built computer vision
              systems at a national aerospace research lab, shipped Python tools that
              automate real workflows, and explored machine learning from seq2seq models
              to retrieval-augmented generation.
            </p>
            <p>
              What connects all of this is a genuine interest in problem-solving — taking
              something messy (a sales pipeline, an image, a stack of PDFs) and turning it
              into something structured, measurable, and useful.
            </p>
            <p>
              I write code not because it&apos;s my title, but because building things is
              the fastest way I know to move from &quot;I think this could work&quot; to
              &quot;here&apos;s the evidence that it does.&quot;
            </p>
          </div>

          {/* Core identity cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "📊",
                title: "Business & Data",
                desc: "Sales analytics, revenue tracking, KPI dashboards, lead funnel optimization — using data to support decisions, not just visualize numbers.",
              },
              {
                icon: "⚙️",
                title: "Software Engineering",
                desc: "Python, Java, databases, APIs, testing, CI/CD, system design — building reliable tools and pipelines that solve real problems.",
              },
              {
                icon: "🤖",
                title: "AI / ML",
                desc: "Computer vision, NLP, RAG, embeddings, vector search — exploring how intelligent systems can augment human decision-making.",
              },
              {
                icon: "🎯",
                title: "Leadership",
                desc: "Managing teams, budgets, and large-scale events at IIT Bombay — translating vision into execution across stakeholders.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-5 rounded-lg border border-border bg-surface hover:border-accent/30 transition-colors"
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
