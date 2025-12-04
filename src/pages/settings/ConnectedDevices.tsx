import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Smartphone, Speaker, Watch, Plus, Check, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/layout/BottomNav";

const connectedDevices = [
  { icon: Speaker, name: "Amazon Echo", location: "Living Room", connected: true },
  { icon: Watch, name: "Apple Watch", location: "Jordan's Watch", connected: true },
];

const availableDevices = [
  { icon: Speaker, name: "Google Home Mini", location: "Kitchen" },
  { icon: Smartphone, name: "Samsung Galaxy", location: "Nearby" },
];

const ConnectedDevices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-primary-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-primary-foreground">Connected Devices</h1>
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Connected */}
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-2 px-2">Connected</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {connectedDevices.map((device, index) => (
              <div
                key={device.name}
                className={`flex items-center justify-between p-4 ${
                  index !== connectedDevices.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <device.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium">{device.name}</span>
                    <p className="text-sm text-muted-foreground">{device.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-status-success">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Connected</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Nearby */}
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-2 px-2">Available Nearby</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {availableDevices.map((device, index) => (
              <div
                key={device.name}
                className={`flex items-center justify-between p-4 ${
                  index !== availableDevices.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <device.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium">{device.name}</span>
                    <p className="text-sm text-muted-foreground">{device.location}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-1" />
                  Connect
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Scan for devices */}
        <Button variant="teal-outline" className="w-full" size="lg">
          <Wifi className="w-5 h-5 mr-2" />
          Scan for Devices
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default ConnectedDevices;
