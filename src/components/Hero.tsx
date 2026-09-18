"use client";

import { PERSONAL } from "@/lib/data";
import { motion } from "framer-motion";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Positioning tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-muted shadow-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>IIT Bombay &apos;25 · Business Analyst · Bangalore</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {PERSONAL.name}
        </motion.h1>

        {/* Primary Role Subtitle */}
        <motion.div
          className="mt-4 text-lg sm:text-2xl font-semibold text-accent"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          Data Analyst | Business Analyst | IIT Bombay Graduate
        </motion.div>

        {/* Supporting Line */}
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {PERSONAL.tagline}
        </motion.p>

        {/* 4 Clear CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          {/* View Resume - Primary */}
          <a
            href={PERSONAL.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium text-sm hover:bg-accent-light transition-colors shadow-sm"
          >
            <DocumentIcon />
            View Resume
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface border border-border text-foreground rounded-lg font-medium text-sm hover:border-accent/40 hover:bg-surface-alt transition-colors"
          >
            <LinkedInIcon />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface border border-border text-foreground rounded-lg font-medium text-sm hover:border-accent/40 hover:bg-surface-alt transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface border border-border text-foreground rounded-lg font-medium text-sm hover:border-accent/40 hover:bg-surface-alt transition-colors"
          >
            <MailIcon />
            Contact Me
          </a>
        </motion.div>

        {/* Recruiter Quick Fact Anchors */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="p-3.5 rounded-lg border border-border bg-surface/80">
            <span className="block font-mono text-xs text-accent">Education</span>
            <span className="block font-medium text-sm text-foreground mt-0.5">IIT Bombay</span>
            <span className="block text-xs text-muted">B.Tech (2021–2025)</span>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-surface/80">
            <span className="block font-mono text-xs text-accent">Current Role</span>
            <span className="block font-medium text-sm text-foreground mt-0.5">Business Analyst</span>
            <span className="block text-xs text-muted">Emoha Elder Care</span>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-surface/80">
            <span className="block font-mono text-xs text-accent">Core Stack</span>
            <span className="block font-medium text-sm text-foreground mt-0.5">SQL &amp; Power BI</span>
            <span className="block text-xs text-muted">Excel, Python, Zoho</span>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-surface/80">
            <span className="block font-mono text-xs text-accent">Specialization</span>
            <span className="block font-medium text-sm text-foreground mt-0.5">LTV &amp; MIS Dashboards</span>
            <span className="block text-xs text-muted">Reporting Automation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
