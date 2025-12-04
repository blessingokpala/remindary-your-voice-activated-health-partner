import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mic, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { BottomNav } from "@/components/layout/BottomNav";

const voiceCommands = [
  { command: '"Hey Remindary, what\'s next?"', description: "Get your next medication reminder" },
  { command: '"I took my medicine"', description: "Confirm medication intake" },
  { command: '"Snooze for 10 minutes"', description: "Delay current reminder" },
  { command: '"What did I miss?"', description: "Check missed medications" },
  { command: '"Add medication"', description: "Start adding a new medication" },
];

const VoiceCommands: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-primary-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-primary-foreground">Voice Commands</h1>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Voice Settings */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Mic className="w-5 h-5 text-primary" />
              <div>
                <span className="text-foreground font-medium">Voice Activation</span>
                <p className="text-sm text-muted-foreground">Enable "Hey Remindary" wake word</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-primary" />
              <div>
                <span className="text-foreground font-medium">Voice Responses</span>
                <p className="text-sm text-muted-foreground">Remindary speaks back to you</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>

        {/* Available Commands */}
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-2 px-2">Available Commands</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {voiceCommands.map((item, index) => (
              <div
                key={item.command}
                className={`p-4 ${index !== voiceCommands.length - 1 ? "border-b border-border" : ""}`}
              >
                <p className="text-primary font-medium text-sm">{item.command}</p>
                <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Test Voice */}
        <Button variant="teal-outline" className="w-full" size="lg">
          <Mic className="w-5 h-5 mr-2" />
          Test Voice Commands
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default VoiceCommands;
