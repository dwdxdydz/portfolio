"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS, PERSONAL } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-zinc-900/90 backdrop-blur-2xl border border-zinc-300/80 dark:border-zinc-700/80 shadow-[0_12px_36px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            : "bg-white/90 dark:bg-zinc-900/85 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-15">
            {/* Logo / Name */}
            <a
              href="#home"
              className="flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium text-sm sm:text-base group"
            >
              <span className="font-bold text-accent text-base sm:text-lg tracking-tight">
                Ajit
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <span className="hidden sm:inline text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-foreground transition-colors">
                Data &amp; Business Analyst
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}

              {/* Apple-Style Resume Pill Button */}
              <a
                href={PERSONAL.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-medium bg-accent text-white rounded-full hover:bg-accent-light transition-all shadow-[0_2px_12px_rgba(0,102,204,0.35)] hover:shadow-[0_4px_16px_rgba(0,102,204,0.45)] active:scale-95"
              >
                Resume ↗
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden px-4 pb-5 pt-2 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl rounded-b-3xl"
            >
              <div className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3.5 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80">
                  <a
                    href={PERSONAL.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-2.5 text-sm font-medium bg-accent text-white rounded-full shadow-[0_2px_12px_rgba(0,102,204,0.35)] active:scale-98"
                  >
                    View / Download Resume ↗
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
