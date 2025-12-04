import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIndicator } from "@/components/shared/PageIndicator";
import { cn } from "@/lib/utils";

const concerns = [
  "Managing children's chronic medications",
  "Remembering daily vitamins",
  "Tracking multiple family schedules",
  "Medication refill management",
];

const MainConcern: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleConcern = (concern: string) => {
    if (selected.includes(concern)) {
      setSelected(selected.filter((c) => c !== concern));
    } else {
      setSelected([...selected, concern]);
    }
  };

  const handleContinue = () => {
    navigate("/notification-frequency");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header Image with back button */}
      <div className="h-64 bg-gradient-to-br from-teal-dark to-primary relative overflow-hidden">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 p-2 text-primary-foreground z-10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-4 opacity-80">
            <div className="w-20 h-8 bg-teal-darker/50 rounded-full" />
            <div className="w-24 h-8 bg-teal-darker/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8 -mt-4 bg-background rounded-t-3xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-foreground font-display">
            What's your main concern?
          </h1>
          <p className="text-muted-foreground mt-2">
            This helps us tailor reminders to your needs
          </p>
        </div>

        <div className="space-y-3">
          {concerns.map((concern) => (
            <button
              key={concern}
              onClick={() => toggleConcern(concern)}
              className={cn(
                "w-full p-4 rounded-xl border text-left transition-all duration-200",
                selected.includes(concern)
                  ? "bg-secondary border-primary text-foreground"
                  : "bg-card border-border text-foreground hover:bg-muted"
              )}
            >
              {concern}
            </button>
          ))}
        </div>

        <Button
          variant="teal"
          size="lg"
          className="w-full mt-8"
          onClick={handleContinue}
          disabled={selected.length === 0}
        >
          Continue
        </Button>

        <PageIndicator total={3} current={1} className="mt-6" />
      </div>
    </div>
  );
};

export default MainConcern;
