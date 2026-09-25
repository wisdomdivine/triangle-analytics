"use client";

import { useState, useRef, useEffect } from "react";

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
}

export default function MetricPickerDropdown({
  currentMetricId,
  onSelect,
  onClose,
}: MetricPickerDropdownProps) {
  const [activeCategory, setActiveCategory] = useState<string>("suggested");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
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

  // Filtered metrics based on search or category
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
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 mt-2 z-50 bg-[#FBF9F5] rounded-2xl p-2.5 w-[310px] sm:w-[350px] shadow-none border-0 select-none animate-in fade-in zoom-in-95 duration-100"
    >
      {/* Search Input - Clean & Minimalist */}
      <div className="relative mb-2 w-full">
        <div className="flex items-center gap-2 bg-[#F0ECE4] rounded-xl px-3 py-2 text-xs">
          <span className="material-symbols-outlined text-[16px] text-neutral-400 select-none">
            search
          </span>
          <input
            type="text"
            placeholder="Search items"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-neutral-900 placeholder-neutral-400 text-xs focus:outline-none border-0 p-0"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-neutral-400 hover:text-neutral-700 text-xs cursor-pointer border-0"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Two-column layout if not searching */}
      {!searchQuery.trim() ? (
        <div className="grid grid-cols-[105px_1fr] sm:grid-cols-[115px_1fr] gap-1 min-h-[180px]">
          {/* Categories column */}
          <div className="flex flex-col gap-0.5 border-0 pr-1">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors text-left cursor-pointer border-0 ${
                    isSelected
                      ? "bg-[#EAE5DC] text-neutral-900 font-medium"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-[#F2EEE7]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="text-[10px] text-neutral-400">›</span>
                </button>
              );
            })}
          </div>

          {/* Metrics column */}
          <div className="flex flex-col gap-0.5 pl-1 overflow-y-auto max-h-[220px]">
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
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors text-left cursor-pointer border-0 ${
                    isCurrent
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-neutral-800 hover:bg-[#F0ECE4]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span>{item.name}</span>
                  </div>
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Search Results List */
        <div className="flex flex-col gap-0.5 max-h-[220px] overflow-y-auto">
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
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs transition-colors text-left cursor-pointer border-0 ${
                    isCurrent
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-neutral-800 hover:bg-[#F0ECE4]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-[10px] text-neutral-400">{item.description}</span>
                  </div>
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  )}
                </button>
              );
            })
          ) : (
            <div className="py-6 text-center text-xs text-neutral-400">
              No matching metrics
            </div>
          )}
        </div>
      )}
    </div>
  );
}
