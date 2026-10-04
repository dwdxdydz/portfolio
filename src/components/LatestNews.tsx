"use client";

import { useMemo, useState } from "react";
import { ArrowUpRightIcon, ClockIcon, NewspaperIcon } from "@heroicons/react/24/outline";

type NewsCategory = "All" | "Technology" | "Business" | "India" | "World" | "Science";

type NewsItem = {
  title: string;
  summary: string;
  category: Exclude<NewsCategory, "All">;
  source: string;
  date: string;
  url: string;
};

const NEWS: NewsItem[] = [
  {
    title: "AI investment race accelerates as companies chase new productivity gains",
    summary: "Massive spending on AI infrastructure is reshaping the technology economy, while analysts debate how quickly the investment can translate into durable productivity and revenue.",
    category: "Technology",
    source: "Reuters",
    date: "Oct 3, 2026",
    url: "https://www.reuters.com/business/retail-consumer/ais-race-transform-world-before-money-runs-out-2026-10-03/",
  },
  {
    title: "US appoints Jay Clayton to lead new AI task force",
    summary: "The administration has created a new task force focused on coordinating federal AI initiatives and assessing risks and opportunities around advanced AI.",
    category: "Technology",
    source: "Reuters",
    date: "Oct 3, 2026",
    url: "https://www.reuters.com/world/us/jay-clayton-lead-trumps-ai-task-force-deliver-report-120-days-wsj-reports-2026-10-03/",
  },
  {
    title: "OPEC+ keeps November oil-production targets steady",
    summary: "OPEC+ agreed to keep November production targets unchanged, with the group signaling that larger policy adjustments are unlikely until later.",
    category: "Business",
    source: "Reuters",
    date: "Oct 4, 2026",
    url: "https://www.reuters.com/business/energy/opec-agrees-principle-keep-november-oil-output-targets-steady-sources-say-2026-10-04/",
  },
  {
    title: "Revolut reaches $115 billion valuation",
    summary: "The fintech has emerged as Europe's most valuable startup as it expands beyond foreign exchange into a broader financial-services model.",
    category: "Business",
    source: "Reuters",
    date: "Oct 4, 2026",
    url: "https://www.reuters.com/business/finance/revoluts-rise-become-europes-115-billion-big-bank-rival-2026-10-04/",
  },
  {
    title: "India sees protests over election-roll revisions",
    summary: "Protests took place in Delhi and Mumbai over voter-roll changes; the Election Commission and BJP reject claims that the revisions are politically motivated.",
    category: "India",
    source: "Reuters",
    date: "Oct 4, 2026",
    url: "https://www.reuters.com/world/asia-pacific/protests-demanding-indian-election-chief-resigns-escalate-2026-10-04/",
  },
  {
    title: "India completes Asian Games campaign in fourth place",
    summary: "India finished the 2026 Asian Games with 85 medals, including 21 golds, according to Indian Express reporting.",
    category: "India",
    source: "Indian Express",
    date: "Oct 4, 2026",
    url: "https://indianexpress.com/article/india/today-india-breaking-news-live-updates-04-october-2026-vhp-alok-kumar-ram-mandir-donation-row-sit-probe-gst-arrest-powers-asian-games-10905794/lite/",
  },
  {
    title: "Brazil votes in a closely watched presidential election",
    summary: "Brazilian voters went to the polls in the first round of a competitive election shaped by economic concerns, corruption allegations and foreign-policy debate.",
    category: "World",
    source: "Reuters",
    date: "Oct 4, 2026",
    url: "https://www.reuters.com/world/americas/brazilians-head-polls-high-stakes-polarized-election-2026-10-04/",
  },
  {
    title: "Bosnia votes in election with EU membership in focus",
    summary: "Voters in Bosnia and Herzegovina are choosing representatives in an election closely watched for its implications for the country's European Union path.",
    category: "World",
    source: "Reuters",
    date: "Oct 4, 2026",
    url: "https://www.reuters.com/video/watch/idRW736404102026RP1/",
  },
  {
    title: "Heavy rain and flooding hit Spain's Catalonia",
    summary: "Authorities reported two deaths and one person missing after heavy rains caused flooding across parts of Catalonia.",
    category: "World",
    source: "Reuters",
    date: "Oct 4, 2026",
    url: "https://www.reuters.com/business/environment/two-dead-flooding-spains-catalonia-region-2026-10-04/",
  },
  {
    title: "South Korea orders probe into financial-sector data leaks",
    summary: "President Lee Jae Myung ordered an investigation into recent personal-data leak incidents involving banks, financial companies and public agencies.",
    category: "Technology",
    source: "Reuters",
    date: "Oct 4, 2026",
    url: "https://www.reuters.com/world/asia-pacific/south-korean-president-orders-probe-into-data-leaks-across-financial-industry-2026-10-04/",
  },
  {
    title: "Germany pledges fresh military and energy support for Ukraine",
    summary: "German Chancellor Friedrich Merz announced additional military and energy-infrastructure support during a visit to Kyiv.",
    category: "World",
    source: "Reuters",
    date: "Oct 4, 2026",
    url: "https://www.reuters.com/world/europe/germanys-merz-arrives-kyiv-finalize-drone-deal-release-aid-2026-10-04/",
  },
  {
    title: "US jobs report points to a softer labour market",
    summary: "September payroll growth came in below expectations, while unemployment rose to 4.2%, influencing expectations around the Federal Reserve's next rate decision.",
    category: "Business",
    source: "Reuters",
    date: "Oct 2, 2026",
    url: "https://www.reuters.com/business/view-soft-september-jobs-report-sends-markets-higher-2026-10-02/",
  },
];

const CATEGORIES: NewsCategory[] = ["All", "Technology", "Business", "India", "World", "Science"];

export default function LatestNews() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("All");

  const filteredNews = useMemo(
    () =>
      activeCategory === "All"
        ? NEWS
        : NEWS.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="latest-news" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold text-zinc-600 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Updated Oct 4, 2026
            </div>
            <div className="flex items-center gap-3">
              <NewspaperIcon className="h-8 w-8 text-accent sm:h-9 sm:w-9" />
              <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                Latest News
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
              A concise feed of technology, business, India, world and science developments
              I&apos;m tracking. Every story links directly to its source.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="News categories">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-all ${
                  activeCategory === category
                    ? "border-accent bg-accent text-white shadow-[0_4px_14px_rgba(0,113,227,0.25)]"
                    : "border-zinc-200 bg-white/80 text-zinc-600 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredNews.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)] dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] dark:hover:border-accent/40"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-bold text-accent">
                  {item.category}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                  <ClockIcon className="h-3.5 w-3.5" />
                  {item.date}
                </span>
              </div>

              <h3 className="text-lg font-semibold leading-7 text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.summary}
              </p>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-zinc-200/70 pt-4 dark:border-zinc-800">
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  {item.source}
                </span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-transform group-hover:translate-x-0.5"
                >
                  Read source
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-500">
          News is for informational purposes. Sources retain their own reporting and publication dates.
        </p>
      </div>
    </section>
  );
}
