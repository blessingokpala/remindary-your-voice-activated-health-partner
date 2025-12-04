import React from "react";
import { cn } from "@/lib/utils";

interface RemindaryLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  showR?: boolean;
  animated?: boolean;
  className?: string;
}

export const RemindaryLogo: React.FC<RemindaryLogoProps> = ({
  size = "md",
  showText = false,
  showR = false,
  animated = false,
  className,
}) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };

  const ringWidths = {
    sm: "border-[3px]",
    md: "border-[5px]",
    lg: "border-[6px]",
  };

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Outer ring - Cyan bright */}
      <div
        className={cn(
          sizeClasses[size],
          "rounded-full border-cyan-bright flex items-center justify-center",
          ringWidths[size],
          animated && "animate-pulse-soft"
        )}
      >
        {/* Middle ring */}
        <div
          className={cn(
            "rounded-full bg-primary/30 flex items-center justify-center",
            size === "sm" && "w-[72px] h-[72px]",
            size === "md" && "w-36 h-36",
            size === "lg" && "w-48 h-48"
          )}
        >
          {/* Inner circle */}
          <div
            className={cn(
              "rounded-full bg-teal-dark flex items-center justify-center",
              size === "sm" && "w-14 h-14",
              size === "md" && "w-28 h-28",
              size === "lg" && "w-36 h-36"
            )}
          >
            {showText && (
              <span className="font-display text-cyan-bright text-3xl md:text-4xl">
                <span className="text-4xl md:text-5xl">R</span>emindary
              </span>
            )}
            {showR && !showText && (
              <span
                className={cn(
                  "font-display text-cyan-bright",
                  size === "sm" && "text-2xl",
                  size === "md" && "text-5xl",
                  size === "lg" && "text-6xl"
                )}
              >
                R
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
