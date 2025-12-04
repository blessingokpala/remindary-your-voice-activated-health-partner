import React from "react";
import { cn } from "@/lib/utils";

interface PageIndicatorProps {
  total: number;
  current: number;
  className?: string;
}

export const PageIndicator: React.FC<PageIndicatorProps> = ({
  total,
  current,
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "page-indicator-dot",
            index === current ? "active bg-teal-dark" : "bg-border"
          )}
        />
      ))}
    </div>
  );
};
