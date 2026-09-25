"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface MetricDefinition {
  id: string;
  name: string;
  category: "suggested" | "audience" | "engagement";
  description: string;
}

export const ALL_METRICS: MetricDefinition[] = [
  {
    id: "visitors",
    name: "Total Visitors",
    category: "suggested",
    description: "Unique visitors with at least one recorded session",
  },
  {
    id: "newUsers",
    name: "New Users",
    category: "suggested",
    description: "First-time visitors during the selected period",
  },
  {
    id: "returningUsers",
    name: "Returning Users",
    category: "suggested",
    description: "Repeat visitors who have visited previously",
  },
  {
    id: "pageviews",
    name: "Page Views",
    category: "suggested",
    description: "Total page impressions across all routes",
  },
  {
    id: "bouncerate",
    name: "Bounce Rate",
    category: "suggested",
    description: "Percentage of sessions viewing only one page",
  },
  {
    id: "events",
    name: "Total Events",
    category: "engagement",
    description: "Tracked button clicks, links, and scroll depth milestones",
  },
  {
    id: "activeVisitors",
    name: "Active Online",
    category: "audience",
    description: "Live concurrent visitors active in real time",
  },
];

export const CATEGORIES = [
  { id: "suggested", label: "Suggested" },
  { id: "audience", label: "Audience" },
  { id: "engagement", label: "Engagement" },
] as const;

interface MetricPickerDropdownProps {
  currentMetricId: string;
  onSelect: (metricId: string) => void;
  onClose: () => void;
  alignClass?: string;
}

export default function MetricPickerDropdown({
  currentMetricId,
  onSelect,
  onClose,
  alignClass = "left-0",
}: MetricPickerDropdownProps) {
  const [activeCategory, setActiveCategory] = useState<string>("suggested");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click or ESC
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Filtered metrics based on search query or active category
  const filteredMetrics = searchQuery.trim()
    ? ALL_METRICS.filter(
        (m) =>
          m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : ALL_METRICS.filter((m) => {
        if (activeCategory === "suggested") {
          return m.category === "suggested";
        }
        return m.category === activeCategory;
      });

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, scale: 0.96, y: -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -6 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute top-full mt-3 z-50 bg-white rounded-3xl p-5 sm:p-6 w-[calc(100vw-2.5rem)] sm:w-[480px] md:w-[520px] max-w-[calc(100vw-2.5rem)] sm:max-w-none shadow-none border-0 select-none ${alignClass}`}
    >
      {/* Search Input - Clean Pure White Style */}
      <div className="relative mb-3.5 w-full">
        <div className="flex items-center gap-3 bg-neutral-100/70 hover:bg-neutral-100 rounded-2xl px-4 py-3 text-sm transition-colors">
          <span className="material-symbols-outlined text-[20px] text-neutral-400 select-none shrink-0">
            search
          </span>
          <input
            type="text"
            placeholder="Search items"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-neutral-900 placeholder-neutral-400 text-sm font-normal focus:outline-none border-0 p-0"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-neutral-400 hover:text-neutral-700 text-sm cursor-pointer border-0 p-0.5 shrink-0"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Two-column layout if not searching */}
      {!searchQuery.trim() ? (
        <div className="grid grid-cols-[130px_1fr] sm:grid-cols-[150px_1fr] gap-3 min-h-[220px] sm:min-h-[250px]">
          {/* Categories column */}
          <div className="flex flex-col gap-1 border-0 pr-1">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm transition-all text-left cursor-pointer border-0 ${
                    isSelected
                      ? "bg-neutral-100 text-neutral-900 font-semibold"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  <span className="tracking-tight">{cat.label}</span>
                  <span className="text-[12px] text-neutral-400">›</span>
                </button>
              );
            })}
          </div>

          {/* Metrics column */}
          <div className="flex flex-col gap-1 pl-1 overflow-y-auto max-h-[270px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -4 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col gap-1"
              >
                {filteredMetrics.map((item) => {
                  const isCurrent = currentMetricId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        onSelect(item.id);
                        onClose();
                      }}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all text-left cursor-pointer border-0 ${
                        isCurrent
                          ? "bg-blue-50/80 text-blue-600 font-semibold"
                          : "text-neutral-800 hover:bg-neutral-50"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="tracking-tight">{item.name}</span>
                      </div>
                      {isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        /* Search Results List */
        <div className="flex flex-col gap-1 max-h-[270px] overflow-y-auto">
          {filteredMetrics.length > 0 ? (
            filteredMetrics.map((item) => {
              const isCurrent = currentMetricId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onSelect(item.id);
                    onClose();
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all text-left cursor-pointer border-0 ${
                    isCurrent
                      ? "bg-blue-50/80 text-blue-600 font-semibold"
                      : "text-neutral-800 hover:bg-neutral-50"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium tracking-tight">{item.name}</span>
                    <span className="text-xs text-neutral-400 mt-0.5">{item.description}</span>
                  </div>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  )}
                </button>
              );
            })
          ) : (
            <div className="py-10 text-center text-sm text-neutral-400">
              No matching metrics
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
