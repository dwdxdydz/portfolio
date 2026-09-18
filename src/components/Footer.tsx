"use client";

import { PERSONAL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 relative bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {PERSONAL.name}. Built with Next.js &amp;
            Tailwind CSS.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground hover:underline transition-all"
            >
              GitHub
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground hover:underline transition-all"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="hover:text-foreground hover:underline transition-all"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
