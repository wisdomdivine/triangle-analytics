"use client";

import { useState } from "react";
import MetricPickerDropdown from "./MetricPickerDropdown";

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  subValue?: string;
}

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

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
      {metrics.map((item, index) => {
        const isActive = item.id === activeMetric;
        const isDropdownOpen = openDropdownIndex === index;

        // Parse trend indicator for clean presentation
        const isNegative = item.subValue?.startsWith("-");
        const isPositive = item.subValue?.startsWith("+") && item.subValue !== "+0%";
        const cleanSub = item.subValue?.replace(/^[+-]/, "");

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
              {/* Header with Dropdown Trigger */}
              <div className="w-full flex items-center justify-between">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdownIndex(isDropdownOpen ? null : index);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-normal text-neutral-500 hover:text-neutral-900 transition-colors py-0.5 px-1.5 -ml-1.5 rounded-lg hover:bg-neutral-100/70 select-none group"
                  title="Click to change metric"
                >
                  <span className="font-medium text-neutral-600 group-hover:text-neutral-900">
                    {item.label}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[15px] text-neutral-400 group-hover:text-neutral-700 transition-transform duration-150 ${
                      isDropdownOpen ? "rotate-180 text-neutral-800" : ""
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
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

            {/* Metric Picker Dropdown */}
            {isDropdownOpen && onSlotChange && (
              <MetricPickerDropdown
                currentMetricId={item.id}
                onSelect={(newMetricId) => {
                  onSlotChange(index, newMetricId);
                  setOpenDropdownIndex(null);
                }}
                onClose={() => setOpenDropdownIndex(null)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
