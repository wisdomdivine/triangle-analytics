"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconInfoCircle } from "@tabler/icons-react";

interface SegmentProgressProps {
  percentage: number;
  description: string;
  tooltip?: string;
  title?: string;
  gradient?: string;
  segmentsCount?: number;
}

export default function SegmentProgress({
  percentage,
  description,
  tooltip,
  title,
  gradient = "from-amber-400 to-rose-400",
  segmentsCount = 20,
}: SegmentProgressProps) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const activeSegments = Math.round((percentage / 100) * segmentsCount);

  return (
    <div className="flex flex-col gap-4 bg-white p-6 rounded-3xl flex-1">
      <div className="flex items-center justify-between text-xs font-light text-neutral-400 px-0.5">
        <span>0%</span>
        <span>100%</span>
      </div>

      <div className="flex items-center gap-1 w-full h-8">
        {Array.from({ length: segmentsCount }).map((_, i) => {
          const isActive = i < activeSegments;
          return (
            <div
              key={i}
              className={`flex-1 h-full rounded-sm transition-all duration-300 ${
                isActive
                  ? `bg-gradient-to-r ${gradient}`
                  : "bg-neutral-100"
              }`}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-light text-neutral-900 tracking-tight">
            {percentage}%
          </span>

          {tooltip && (
            <div
              className="relative inline-flex items-center"
              onMouseEnter={() => setIsTooltipOpen(true)}
              onMouseLeave={() => setIsTooltipOpen(false)}
            >
              <button
                type="button"
                aria-label={title ? `About ${title}` : "About this metric"}
                onClick={() => setIsTooltipOpen(!isTooltipOpen)}
                className="text-neutral-400 hover:text-neutral-700 transition-colors p-1 rounded-full flex items-center justify-center cursor-pointer"
              >
                <IconInfoCircle size={16} stroke={1.8} />
              </button>

              <AnimatePresence>
                {isTooltipOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 2, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute z-30 bottom-full right-0 mb-2 w-64 p-3.5 bg-neutral-900 text-white rounded-xl border-0 shadow-none pointer-events-none select-none"
                  >
                    {title && (
                      <p className="font-medium text-xs text-neutral-100 mb-1">
                        {title}
                      </p>
                    )}
                    <p className="text-[11px] text-neutral-300 font-normal leading-relaxed">
                      {tooltip}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        <span className="text-xs font-light text-neutral-500 leading-relaxed mt-1">
          {description}
        </span>
      </div>
    </div>
  );
}
