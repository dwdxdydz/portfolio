"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS, PERSONAL } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

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

  const isResumeActive = activeHover === null || activeHover === "resume";

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
        <div className="px-4 sm:px-5">
          <div className="flex items-center justify-between h-14">
            {/* 1. Navbar Brand: ONLY "Ajit" */}
            <a
              href="#home"
              className="flex items-center font-bold text-accent text-lg sm:text-xl tracking-tight hover:opacity-85 transition-opacity shrink-0"
              aria-label="Ajit - Home"
            >
              Ajit
            </a>

            {/* 2. Desktop Navigation: Unified interactive active/hover pill system */}
            <div
              className="hidden lg:flex items-center gap-0.5 xl:gap-1"
              onMouseLeave={() => setActiveHover(null)}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeHover === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setActiveHover(item.href)}
                    className={`inline-flex items-center justify-center h-8 px-2.5 xl:px-3 text-xs xl:text-[13px] font-medium rounded-full transition-all duration-200 ease-out whitespace-nowrap will-change-transform ${
                      isActive
                        ? "bg-accent text-white shadow-[0_2px_10px_rgba(0,102,204,0.3)] scale-[1.04]"
                        : "text-zinc-700 dark:text-zinc-300 hover:text-foreground bg-transparent scale-100"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              {/* 3. Resume Button: Default active-looking state that transfers on hover */}
              <a
                href={PERSONAL.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveHover("resume")}
                className={`ml-1 xl:ml-2 inline-flex items-center justify-center gap-1.5 h-8 px-3.5 xl:px-4 text-xs xl:text-[13px] font-semibold rounded-full transition-all duration-200 ease-out whitespace-nowrap will-change-transform ${
                  isResumeActive
                    ? "bg-accent text-white shadow-[0_2px_10px_rgba(0,102,204,0.3)] scale-[1.04]"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-foreground bg-transparent scale-100"
                }`}
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
                    className="flex items-center h-9 px-3.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80">
                  <a
                    href={PERSONAL.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-full text-sm font-semibold bg-accent text-white rounded-full shadow-[0_2px_12px_rgba(0,102,204,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
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
