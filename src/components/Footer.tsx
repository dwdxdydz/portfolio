"use client";

import { PERSONAL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-300/70 dark:border-zinc-800/70 py-6 sm:py-8 relative bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-700 dark:text-zinc-300">
          <p className="font-medium">
            © {new Date().getFullYear()} {PERSONAL.name}. Built with Next.js &amp;
            Tailwind CSS.
          </p>
          <div className="flex items-center gap-6 font-medium">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-foreground hover:underline transition-all"
            >
              GitHub
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-foreground hover:underline transition-all"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-zinc-700 dark:text-zinc-300 hover:text-foreground hover:underline transition-all"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
