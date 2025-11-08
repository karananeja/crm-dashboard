import { cn } from "@/lib/utils";

import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  bgColor: string;
  color: string;
  icon: LucideIcon;
  title: string;
  value: string;
}

export function MetricCard({
  bgColor,
  color,
  icon: Icon,
  title,
  value,
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex justify-between items-center p-6">
        <div>
          <p className="font-medium text-gray-600 text-sm">{title}</p>
          <p className="mt-2 font-bold text-gray-900 text-3xl">{value}</p>
        </div>
        <div
          className={cn(
            "flex justify-center items-center rounded-lg size-12 shrink-0",
            bgColor
          )}
        >
          <Icon className={cn("size-6", color)} />
        </div>
      </div>
    </div>
  );
}
