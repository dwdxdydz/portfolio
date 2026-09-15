"use client";

import { useState } from "react";
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  if (!project.caseStudy) return null;

  const sections = [
    { num: "01", title: "Problem", content: project.caseStudy.problem },
    { num: "02", title: "Approach", content: project.caseStudy.approach },
    { num: "03", title: "Architecture", content: project.caseStudy.architecture },
    { num: "04", title: "Engineering Decisions", content: project.caseStudy.decisions },
    { num: "05", title: "Results", content: project.caseStudy.results },
    { num: "06", title: "Learnings", content: project.caseStudy.learnings },
    { num: "07", title: "Future Improvements", content: project.caseStudy.future },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        className="relative w-full max-w-3xl bg-surface border border-border rounded-xl shadow-2xl my-8"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        role="dialog"
        aria-modal="true"
        aria-label={`Case study: ${project.title}`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-surface/95 backdrop-blur-sm border-b border-border p-6 rounded-t-xl flex items-start justify-between z-10">
          <div>
            <span className="code-label">case study</span>
            <h3 className="mt-1 text-2xl font-bold text-foreground">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted hover:text-foreground transition-colors rounded-md hover:bg-surface-alt"
            aria-label="Close case study"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-8">
          {sections.map((s) => (
            <div key={s.num}>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-accent font-semibold">
                  {s.num}
                </span>
                <h4 className="font-semibold text-foreground">{s.title}</h4>
              </div>
              <p className="text-sm text-muted leading-relaxed pl-9">{s.content}</p>
            </div>
          ))}

          {/* Technologies */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-accent font-semibold">—</span>
              <h4 className="font-semibold text-foreground">Technologies</h4>
            </div>
            <div className="flex flex-wrap gap-2 pl-9">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono bg-surface-alt border border-border rounded text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub link */}
          {project.github && (
            <div className="pl-9">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-surface-alt border border-border rounded-md text-foreground hover:border-accent/50 transition-colors"
              >
                <GitHubIcon />
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [caseStudyProject, setCaseStudyProject] = useState<Project | null>(null);

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="code-label">// projects</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Selected Work</h2>
          <p className="mt-4 max-w-2xl text-muted text-lg">
            Real projects with real code — from automated flight tracking to AI document
            assistants and Fourier-drawn animations.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                filter === cat.key
                  ? "bg-accent text-white"
                  : "bg-surface-alt text-muted border border-border hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors flex flex-col"
              >
                {/* Category badge */}
                <span className="font-mono text-xs text-accent mb-3">
                  {PROJECT_CATEGORIES.find((c) => c.key === project.category)?.label}
                </span>

                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                  {project.summary}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-mono bg-surface-alt border border-border rounded text-muted"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="px-2 py-0.5 text-xs font-mono text-muted">
                      +{project.tech.length - 6}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-5 flex items-center gap-3">
                  {project.caseStudy && (
                    <button
                      onClick={() => setCaseStudyProject(project)}
                      className="px-3 py-1.5 text-sm font-medium bg-accent text-white rounded-md hover:bg-accent-light transition-colors"
                    >
                      View Case Study
                    </button>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-border rounded-md text-muted hover:text-foreground hover:border-accent/30 transition-colors"
                    >
                      <GitHubIcon />
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {caseStudyProject && (
          <CaseStudyModal
            project={caseStudyProject}
            onClose={() => setCaseStudyProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
