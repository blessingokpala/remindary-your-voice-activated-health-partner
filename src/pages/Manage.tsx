import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, Bell, Moon, Volume2, Shield, HelpCircle, 
  LogOut, ChevronRight, Mic, Smartphone, Settings2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/layout/BottomNav";
import { useTheme } from "@/components/ThemeProvider";
import { Switch } from "@/components/ui/switch";

const settingsGroups = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Profile Settings", path: "/profile" },
      { icon: Bell, label: "Notification Preferences", path: "/notifications" },
    ],
  },
  {
    title: "Voice Assistant",
    items: [
      { icon: Mic, label: "Voice Commands", path: "/voice-settings" },
      { icon: Smartphone, label: "Connected Devices", path: "/devices" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Moon, label: "Dark Mode", toggle: true },
      { icon: Volume2, label: "Sound Settings", path: "/sound" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: Shield, label: "Privacy & Security", path: "/privacy" },
      { icon: HelpCircle, label: "Help Center", path: "/help" },
    ],
  },
];

const Manage: React.FC = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <h1 className="text-xl font-semibold text-primary-foreground">Settings</h1>
        <p className="text-primary-foreground/80 text-sm mt-2">
          Manage your app preferences
        </p>
      </div>

      {/* User Profile Card */}
      <div className="px-4 -mt-4">
        <div className="bg-card border border-border rounded-2xl p-4 shadow-card flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-3xl">
            👩
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">Jordan Smith</h3>
            <p className="text-sm text-muted-foreground">jordan@example.com</p>
          </div>
          <Button variant="ghost" size="icon">
            <Settings2 className="w-5 h-5 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* Settings Groups */}
      <div className="px-4 py-4 space-y-6">
        {settingsGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-medium text-muted-foreground mb-2 px-2">
              {group.title}
            </h2>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              {group.items.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => item.path && navigate(item.path)}
                  className={`w-full flex items-center justify-between p-4 hover:bg-muted transition-colors ${
                    index !== group.items.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item.label}</span>
                  </div>
                  {item.toggle ? (
                    <Switch
                      checked={theme === "dark"}
                      onCheckedChange={toggleTheme}
                    />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <Button
          variant="outline"
          size="lg"
          className="w-full text-destructive border-destructive/30 hover:bg-destructive/10"
          onClick={() => navigate("/")}
        >
          <LogOut className="w-5 h-5 mr-2" />
          Log Out
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Manage;
