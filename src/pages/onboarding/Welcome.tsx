import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-teal-dark flex flex-col">
      {/* Logo Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-fade-in">
          {/* Logo ring with text */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[5px] border-cyan-bright" />
            <div className="text-center">
              <span className="font-display text-cyan-bright">
                <span className="text-6xl">R</span>
                <span className="text-4xl">emindary</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="bg-card rounded-t-3xl px-6 py-8 animate-slide-up">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-foreground font-display">
            Remindary
          </h1>
          <p className="text-muted-foreground mt-1">my reminder</p>
        </div>

        <Button
          variant="teal"
          size="lg"
          className="w-full"
          onClick={() => navigate("/sign-in")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
