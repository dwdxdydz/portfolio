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
    { num: "01", title: "Problem Statement", content: project.caseStudy.problem },
    { num: "02", title: "Analytical Approach", content: project.caseStudy.approach },
    { num: "03", title: "System Architecture", content: project.caseStudy.architecture },
    { num: "04", title: "Technical & Design Decisions", content: project.caseStudy.decisions },
    { num: "05", title: "Results & Findings", content: project.caseStudy.results },
    { num: "06", title: "Key Learnings", content: project.caseStudy.learnings },
    { num: "07", title: "Future Extensions", content: project.caseStudy.future },
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
        className="fixed inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-3xl shadow-2xl my-8 z-10 overflow-hidden"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={`Case study: ${project.title}`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 p-6 flex items-start justify-between z-10">
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-bold">
              Project Deep Dive
            </span>
            <h3 className="mt-1 text-2xl font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Close case study"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {sections.map((s) => (
            <div key={s.num} className="pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80 last:border-0 last:pb-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-xs text-accent font-bold px-2 py-0.5 rounded bg-accent/10">
                  {s.num}
                </span>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">{s.title}</h4>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pl-7">{s.content}</p>
            </div>
          ))}

          {/* Technologies */}
          <div className="pt-2">
            <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm mb-2.5">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-800 dark:text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub link */}
          {project.github && (
            <div className="pt-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-pill-btn px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-full hover:bg-accent-light shadow-md"
              >
                <GitHubIcon />
                View Source Repository on GitHub
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
  const [showAll, setShowAll] = useState(false);
  const [caseStudyProject, setCaseStudyProject] = useState<Project | null>(null);

  const filtered =
    filter === "all"
      ? PROJECTS
      : filter === "featured"
      ? PROJECTS.filter((p) => p.featured)
      : PROJECTS.filter((p) => p.category === filter);

  const displayedProjects = showAll ? filtered : filtered.slice(0, 4);

  const handleFilterChange = (key: string) => {
    setFilter(key);
    setShowAll(false);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Apple Frosted Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md mb-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">Technical Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Featured Projects &amp; Software Systems
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300 text-base sm:text-lg">
            Practical applications spanning analytics frameworks, modern data pipelines, automated backend systems, and AI tools.
          </p>
        </motion.div>

        {/* Apple Category Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleFilterChange(cat.key)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                filter === cat.key
                  ? "bg-accent text-white shadow-xs font-semibold scale-[1.02]"
                  : "bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 hover:text-foreground hover:border-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="apple-glass-card p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
                      {PROJECT_CATEGORIES.find((c) => c.key === project.category)?.label}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-accent/10 text-accent rounded-full border border-accent/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {project.summary}
                  </p>

                  {/* Recruiter-Friendly Key Technical Concept Box */}
                  {project.concept && (
                    <div className="mt-4 p-3.5 rounded-2xl bg-zinc-100/90 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed">
                      <span className="font-bold text-zinc-950 dark:text-zinc-100 font-mono block mb-1">
                        💡 Key Concept:
                      </span>
                      {project.concept}
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700/80 rounded-full text-zinc-700 dark:text-zinc-300 shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2.5 py-0.5 text-xs font-mono text-zinc-500">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
                    {project.caseStudy && (
                      <button
                        onClick={() => setCaseStudyProject(project)}
                        className="apple-pill-btn px-4 py-2 text-xs sm:text-sm font-semibold bg-accent text-white rounded-full hover:bg-accent-light shadow-xs"
                      >
                        View Deep Dive
                      </button>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-pill-btn px-4 py-2 text-xs sm:text-sm bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:text-foreground hover:border-accent rounded-full font-medium"
                      >
                        <GitHubIcon />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Button */}
        {filtered.length > 4 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="apple-pill-btn px-6 py-3 text-sm font-semibold bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:border-accent text-zinc-900 dark:text-zinc-100 rounded-full shadow-xs hover:shadow"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </>
              ) : (
                <>
                  Show More ({filtered.length - 4} more projects)
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
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
