import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Volume2, VolumeX, Bell, Music, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { BottomNav } from "@/components/layout/BottomNav";

const notificationSounds = [
  { id: "gentle", name: "Gentle Chime", selected: true },
  { id: "bell", name: "Classic Bell", selected: false },
  { id: "melody", name: "Soft Melody", selected: false },
  { id: "alert", name: "Alert Tone", selected: false },
];

const SoundSettings: React.FC = () => {
  const navigate = useNavigate();
  const [volume, setVolume] = useState([70]);
  const [selectedSound, setSelectedSound] = useState("gentle");

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-primary-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-primary-foreground">Sound Settings</h1>
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Volume Control */}
        <div className="bg-card border border-border rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-foreground">Notification Volume</h3>
            <span className="text-primary font-medium">{volume[0]}%</span>
          </div>
          <div className="flex items-center gap-3">
            <VolumeX className="w-5 h-5 text-muted-foreground" />
            <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="flex-1" />
            <Volume2 className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Notification Sounds */}
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-2 px-2">Notification Sound</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {notificationSounds.map((sound, index) => (
              <button
                key={sound.id}
                onClick={() => setSelectedSound(sound.id)}
                className={`w-full flex items-center justify-between p-4 hover:bg-muted transition-colors ${
                  index !== notificationSounds.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{sound.name}</span>
                </div>
                {selectedSound === sound.id && <Check className="w-5 h-5 text-primary" />}
              </button>
            ))}
          </div>
        </div>

        {/* Preview */}
        <Button variant="teal-outline" className="w-full" size="lg">
          <Bell className="w-5 h-5 mr-2" />
          Preview Sound
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default SoundSettings;
