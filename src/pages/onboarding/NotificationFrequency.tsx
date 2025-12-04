import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIndicator } from "@/components/shared/PageIndicator";
import { cn } from "@/lib/utils";

const frequencies = [
  { label: "Per Seconds", value: "seconds" },
  { label: "Weekly", value: "weekly" },
  { label: "Per Minute", value: "minute" },
  { label: "Monthly", value: "monthly" },
  { label: "Hourly", value: "hourly" },
  { label: "Yearly", value: "yearly" },
  { label: "Daily", value: "daily" },
];

const NotificationFrequency: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("");

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header Image with back button */}
      <div className="h-64 bg-gradient-to-br from-mint-light to-secondary relative overflow-hidden">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 p-2 text-foreground z-10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-card rounded-xl shadow-soft flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-muted flex items-center justify-center">
              <div className="text-2xl text-foreground">🕐</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8 -mt-4 bg-background rounded-t-3xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-foreground font-display">
            How often should we notify you?
          </h1>
          <p className="text-muted-foreground mt-2">
            This helps us manage your reminder
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {frequencies.map((freq) => (
            <button
              key={freq.value}
              onClick={() => setSelected(freq.value)}
              className={cn(
                "p-4 rounded-xl border text-center transition-all duration-200",
                selected === freq.value
                  ? "bg-teal-dark border-teal-dark text-primary-foreground"
                  : "bg-card border-border text-foreground hover:bg-muted"
              )}
            >
              {freq.label}
            </button>
          ))}
        </div>

        <Button
          variant="teal"
          size="lg"
          className="w-full mt-8"
          onClick={handleGetStarted}
          disabled={!selected}
        >
          Get Started
        </Button>

        <PageIndicator total={3} current={2} className="mt-6" />
      </div>
    </div>
  );
};

export default NotificationFrequency;
