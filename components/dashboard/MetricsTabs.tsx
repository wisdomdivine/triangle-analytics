"use client";

interface MetricItem {
  id: string;
  label: string;
  value: string;
  subValue?: string;
}

interface MetricsTabsProps {
  metrics: MetricItem[];
  activeMetric: string;
  onSelectMetric: (id: string) => void;
}

export default function MetricsTabs({
  metrics,
  activeMetric,
  onSelectMetric,
}: MetricsTabsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full">
      {metrics.map((item) => {
        const isActive = item.id === activeMetric;

        // Parse trend indicator for clean presentation
        const isNegative = item.subValue?.startsWith("-");
        const isPositive = item.subValue?.startsWith("+") && item.subValue !== "+0%";
        const cleanSub = item.subValue?.replace(/^[+-]/, "");

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectMetric(item.id)}
            className={`flex flex-col items-start justify-between text-left p-5 sm:p-6 rounded-2xl transition-all cursor-pointer min-h-[120px] ${
              isActive
                ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] ring-1 ring-black/5"
                : "bg-white/60 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
            }`}
          >
            <div className="w-full flex items-center justify-between">
              <span className="text-xs font-normal text-neutral-500">
                {item.label}
              </span>
              {isActive && (
                <span className="w-2 h-2 rounded-full bg-blue-600 ring-4 ring-blue-50" />
              )}
            </div>

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

            <div className="w-full mt-3">
              <div
                className={`h-0.5 rounded-full transition-all duration-200 ${
                  isActive ? "w-8 bg-neutral-900" : "w-0 bg-transparent"
                }`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
