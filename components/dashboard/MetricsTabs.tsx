"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconInfoCircle } from "@tabler/icons-react";
import MetricPickerDropdown from "./MetricPickerDropdown";

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  subValue?: string;
}

const METRIC_EXPLANATIONS: Record<string, string> = {
  visitors:
    "The number of unique people who visited your website. Even if someone visits multiple times, they are only counted once.",
  newUsers:
    "People visiting your website for the very first time. They have never visited your site before this time period.",
  returningUsers:
    "People who visited your site previously and came back again. A high number shows that people find your site useful.",
  pageviews:
    "The total number of times pages on your site were viewed. If one person views five pages, that counts as five page views.",
  bouncerate:
    "The percentage of visitors who left after viewing only one page without clicking anything. A lower percentage is generally better.",
  events:
    "The total number of actions people took on your site, such as clicking buttons, submitting forms, or scrolling down pages.",
  activeVisitors:
    "The number of people currently browsing your website right now in real time.",
};

interface MetricsTabsProps {
  metrics: MetricItem[];
  activeMetric: string;
  onSelectMetric: (id: string) => void;
  onSlotChange?: (slotIndex: number, newMetricId: string) => void;
}

export default function MetricsTabs({
  metrics,
  activeMetric,
  onSelectMetric,
  onSlotChange,
}: MetricsTabsProps) {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [hoveredInfoIndex, setHoveredInfoIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
      {metrics.map((item, index) => {
        const isActive = item.id === activeMetric;
        const isDropdownOpen = openDropdownIndex === index;

        // Parse trend indicator for clean presentation
        const isNegative = item.subValue?.startsWith("-");
        const isPositive = item.subValue?.startsWith("+") && item.subValue !== "+0%";
        const cleanSub = item.subValue?.replace(/^[+-]/, "");

        // Compute alignment to guarantee ZERO page scroll-x on all viewports:
        // - In 2-col (mobile/tablet): left items align left, right items align right
        // - In 4-col (desktop): items 0 & 1 align left, items 2 & 3 align right
        const isOdd = index % 2 === 1;
        const isLgRight = index >= 2;
        const alignClass = `${isOdd ? "right-0 left-auto" : "left-0 right-auto"} ${
          isLgRight ? "lg:right-0 lg:left-auto" : "lg:left-0 lg:right-auto"
        }`;

        return (
          <div key={`${item.id}-${index}`} className="relative">
            <button
              type="button"
              onClick={() => onSelectMetric(item.id)}
              className={`w-full flex flex-col items-start justify-between text-left p-5 sm:p-6 rounded-2xl transition-all cursor-pointer min-h-[120px] border-0 shadow-none ring-0 ${
                isActive
                  ? "bg-white text-neutral-900"
                  : "bg-white/60 hover:bg-white text-neutral-600"
              }`}
            >
              {/* Header with Dropdown Trigger and Info Tooltip */}
              <div className="w-full flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-1 min-w-0">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdownIndex(isDropdownOpen ? null : index);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-normal text-neutral-500 hover:text-neutral-900 transition-colors py-0.5 px-2 -ml-2 rounded-xl hover:bg-neutral-100/80 select-none group"
                    title="Click to customize metric"
                  >
                    <span className="font-semibold text-neutral-700 group-hover:text-neutral-900 truncate">
                      {item.label}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[16px] text-neutral-400 group-hover:text-neutral-800 transition-transform duration-200 shrink-0 ${
                        isDropdownOpen ? "rotate-180 text-neutral-900" : ""
                      }`}
                    >
                      keyboard_arrow_down
                    </span>
                  </div>

                  {/* Info Icon with plain language tooltip */}
                  <div
                    className="relative inline-flex items-center shrink-0"
                    onMouseEnter={() => setHoveredInfoIndex(index)}
                    onMouseLeave={() => setHoveredInfoIndex(null)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      aria-label={`About ${item.label}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setHoveredInfoIndex(hoveredInfoIndex === index ? null : index);
                      }}
                      className="text-neutral-400 hover:text-neutral-700 transition-colors p-0.5 rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <IconInfoCircle size={14} stroke={1.8} />
                    </button>

                    <AnimatePresence>
                      {hoveredInfoIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 4, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 2, scale: 0.96 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className={`absolute z-30 bottom-full mb-2 ${
                            index >= 2 ? "right-0" : "left-0"
                          } w-60 p-3 bg-neutral-900 text-white rounded-xl border-0 shadow-none pointer-events-none select-none`}
                        >
                          <p className="font-medium text-xs text-neutral-100 mb-1">
                            {item.label}
                          </p>
                          <p className="text-[11px] text-neutral-300 font-normal leading-relaxed">
                            {METRIC_EXPLANATIONS[item.id] || "Website performance metric."}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                )}
              </div>

              {/* Metric Value & Trend */}
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight">
                  {item.value}
                </span>
                {item.subValue && (
                  <span
                    className={`text-xs font-medium inline-flex items-center gap-0.5 ${
                      isNegative
                        ? "text-rose-600"
                        : isPositive
                        ? "text-emerald-600"
                        : "text-neutral-400"
                    }`}
                  >
                    {isNegative && <span>↓</span>}
                    {isPositive && <span>↑</span>}
                    {cleanSub || item.subValue}
                  </span>
                )}
              </div>

              {/* Bottom active line */}
              <div className="w-full mt-3">
                <div
                  className={`h-0.5 rounded-full transition-all duration-200 ${
                    isActive ? "w-8 bg-neutral-900" : "w-0 bg-transparent"
                  }`}
                />
              </div>
            </button>

            {/* Animated Metric Picker Dropdown */}
            <AnimatePresence>
              {isDropdownOpen && onSlotChange && (
                <MetricPickerDropdown
                  currentMetricId={item.id}
                  alignClass={alignClass}
                  onSelect={(newMetricId) => {
                    onSlotChange(index, newMetricId);
                    setOpenDropdownIndex(null);
                  }}
                  onClose={() => setOpenDropdownIndex(null)}
                />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
