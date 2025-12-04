import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Fingerprint, Download, Trash2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { BottomNav } from "@/components/layout/BottomNav";

const securitySettings = [
  { icon: Fingerprint, label: "Biometric Login", description: "Use fingerprint or face ID", toggle: true, defaultChecked: true },
  { icon: Lock, label: "App Lock", description: "Require password to open app", toggle: true, defaultChecked: false },
  { icon: Eye, label: "Hide Medication Names", description: "Show generic names in notifications", toggle: true, defaultChecked: false },
];

const dataOptions = [
  { icon: Download, label: "Export My Data", description: "Download all your health data" },
  { icon: Trash2, label: "Delete Account", description: "Permanently delete your account", danger: true },
];

const PrivacySecurity: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-primary-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-primary-foreground">Privacy & Security</h1>
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Security */}
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-2 px-2">Security</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {securitySettings.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center justify-between p-4 ${
                  index !== securitySettings.length - 1 ? "border-b border-border" : ""
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
        </div>

        {/* Data Management */}
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-2 px-2">Data Management</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {dataOptions.map((item, index) => (
              <button
                key={item.label}
                className={`w-full flex items-center justify-between p-4 hover:bg-muted transition-colors ${
                  index !== dataOptions.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${item.danger ? "text-destructive" : "text-primary"}`} />
                  <div className="text-left">
                    <span className={`font-medium ${item.danger ? "text-destructive" : "text-foreground"}`}>
                      {item.label}
                    </span>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="bg-card border border-border rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="font-medium text-foreground">Your Privacy Matters</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Your health data is encrypted and never shared with third parties. 
            We comply with HIPAA regulations to protect your information.
          </p>
          <Button variant="link" className="px-0 mt-2">
            Read Privacy Policy
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default PrivacySecurity;
