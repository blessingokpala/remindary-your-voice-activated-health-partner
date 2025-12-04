import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, Clock, Volume2, Vibrate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { BottomNav } from "@/components/layout/BottomNav";

const notificationSettings = [
  { icon: Bell, label: "Push Notifications", description: "Receive medication reminders", defaultChecked: true },
  { icon: Volume2, label: "Sound Alerts", description: "Play sound with notifications", defaultChecked: true },
  { icon: Vibrate, label: "Vibration", description: "Vibrate when reminder triggers", defaultChecked: false },
  { icon: Clock, label: "Snooze Option", description: "Allow snoozing reminders", defaultChecked: true },
];

const NotificationPreferences: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-primary-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-primary-foreground">Notification Preferences</h1>
        </div>
      </div>

      {/* Settings */}
      <div className="px-4 py-4 space-y-4">
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          {notificationSettings.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center justify-between p-4 ${
                index !== notificationSettings.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-primary" />
                <div>
                  <span className="text-foreground font-medium">{item.label}</span>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <Switch defaultChecked={item.defaultChecked} />
            </div>
          ))}
        </div>

        {/* Quiet Hours */}
        <div className="bg-card border border-border rounded-2xl p-4">
          <h3 className="font-medium text-foreground mb-3">Quiet Hours</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Mute notifications during specific hours
          </p>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-xs text-muted-foreground">From</label>
              <input type="time" defaultValue="22:00" className="w-full mt-1 p-2 bg-muted rounded-lg text-foreground" />
            </div>
            <div className="flex-1">
              <label className="text-xs text-muted-foreground">To</label>
              <input type="time" defaultValue="07:00" className="w-full mt-1 p-2 bg-muted rounded-lg text-foreground" />
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default NotificationPreferences;
