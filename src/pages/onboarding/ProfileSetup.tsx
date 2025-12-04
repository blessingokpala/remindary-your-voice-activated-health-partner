import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageIndicator } from "@/components/shared/PageIndicator";

const ProfileSetup: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("Jordan Smith");
  const [familyMembers, setFamilyMembers] = useState("4");

  const handleContinue = () => {
    navigate("/main-concern");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header Image */}
      <div className="h-64 bg-gradient-to-br from-secondary to-mint-light relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-6 gap-2 opacity-60">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center"
              >
                <div className="w-6 h-6 rounded-full bg-primary/50" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8 -mt-4 bg-background rounded-t-3xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-foreground font-display">
            Tell us about yourself
          </h1>
          <p className="text-muted-foreground mt-2">
            Help us personalize your experience
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="familyMembers">Number of family members</Label>
            <Input
              id="familyMembers"
              type="number"
              value={familyMembers}
              onChange={(e) => setFamilyMembers(e.target.value)}
              placeholder="4"
              min="1"
            />
          </div>

          <Button
            variant="teal"
            size="lg"
            className="w-full mt-8"
            onClick={handleContinue}
          >
            Continue
          </Button>

          <PageIndicator total={3} current={0} className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
