import React from "react";
import { cn } from "@/lib/utils";

interface MobileLayoutProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  className,
  noPadding = false,
}) => {
  return (
    <div className="min-h-screen bg-background">
      <div
        className={cn(
          "app-container min-h-screen",
          !noPadding && "px-4",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
