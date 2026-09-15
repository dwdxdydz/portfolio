"use client";

import { motion } from "framer-motion";

const AI_PROGRESSION = [
  {
    area: "Computer Vision",
    projects: "NCAIR — YOLOv8 pose detection, stereo vision",
    tech: ["YOLOv8", "OpenCV", "NumPy", "Stereo Vision"],
  },
  {
    area: "NLP & Seq2Seq",
    projects: "English → French translation model (GRU encoder-decoder)",
    tech: ["PyTorch", "GRU", "Teacher Forcing", "Tokenization"],
  },
  {
    area: "RAG & Embeddings",
    projects: "Document assistant — PDF Q&A with vector search",
    tech: ["FAISS", "SentenceTransformers", "FLAN-T5", "Embeddings"],
  },
  {
    area: "Image Processing",
    projects: "Fourier series image reconstruction with epicycles",
    tech: ["NumPy", "Matplotlib", "Fourier Analysis"],
  },
];

export default function AISection() {
  return (
    <section className="py-24 sm:py-32 bg-surface-alt/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="code-label">// ai &amp; ml</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Exploring Intelligent Systems
          </h2>
          <p className="mt-4 max-w-2xl text-muted text-lg">
            From real-time computer vision at a national research lab to building
            NLP pipelines and RAG systems — each project deepened my understanding
            of how AI can solve practical problems.
          </p>
        </motion.div>

        <div className="mt-12 space-y-5">
          {AI_PROGRESSION.map((item, i) => (
            <motion.div
              key={item.area}
              className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-lg border border-border bg-surface hover:border-accent/30 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <div className="sm:w-48 shrink-0">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-foreground text-lg">{item.area}</h3>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted leading-relaxed">{item.projects}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-mono bg-surface-alt border border-border rounded text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
