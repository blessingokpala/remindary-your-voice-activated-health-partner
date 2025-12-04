import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Plus, Clock, Calendar, Users, Phone, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/layout/BottomNav";
import { cn } from "@/lib/utils";

interface Medication {
  id: string;
  name: string;
  person: string;
  time: string;
  dosage: string;
  status: "taken" | "pending";
  icon: string;
}

const medications: Medication[] = [
  {
    id: "1",
    name: "Asthma Inhaler",
    person: "Joy",
    time: "5:00 pm",
    dosage: "2 puffs",
    status: "taken",
    icon: "💨",
  },
  {
    id: "2",
    name: "Vitamin D",
    person: "Jordan",
    time: "6:00 pm",
    dosage: "1 tablet",
    status: "pending",
    icon: "💊",
  },
  {
    id: "3",
    name: "Thealoz Eye drops",
    person: "Mom",
    time: "7:00 pm",
    dosage: "2 drops",
    status: "pending",
    icon: "💧",
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "2-digit",
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden flex items-center justify-center">
              <span className="text-2xl">👩</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Today, {today.toLocaleDateString("en-US", { month: "short", day: "2-digit" })}</p>
              <h1 className="text-lg font-semibold text-foreground">Jordan Smith</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2">
              <Bell className="w-6 h-6 text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </button>
            <button 
              onClick={() => navigate("/add-medication")}
              className="p-2"
            >
              <Plus className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Voice Assistant Card */}
      <div className="px-4 mb-4">
        <div 
          className="bg-card border border-border rounded-2xl p-4 flex items-center justify-between shadow-card cursor-pointer hover:shadow-soft transition-shadow"
          onClick={() => navigate("/voice-assistant")}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mic className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Voice Assistant</h3>
              <p className="text-sm text-muted-foreground">Say "Hey Remindary" to get started</p>
            </div>
          </div>
          <Button variant="teal" size="sm">
            Try Now
          </Button>
        </div>
      </div>

      {/* Today's Medications */}
      <div className="px-4">
        <div className="bg-secondary/50 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-foreground" />
              <h2 className="font-semibold text-foreground">Today's Medications</h2>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-primary"
              onClick={() => navigate("/add-medication")}
            >
              <Plus className="w-4 h-4 mr-1" />
              Add
            </Button>
          </div>

          <div className="space-y-3">
            {medications.map((med) => (
              <div
                key={med.id}
                className="bg-card rounded-xl p-4 flex items-center justify-between shadow-card cursor-pointer hover:shadow-soft transition-all"
                onClick={() => navigate(`/medication/${med.id}`)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                    {med.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{med.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {med.person} • {med.time}
                    </p>
                    <p className="text-xs text-muted-foreground">{med.dosage}</p>
                  </div>
                </div>
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium",
                    med.status === "taken"
                      ? "bg-success/20 text-success"
                      : "bg-pending/20 text-pending"
                  )}
                >
                  {med.status === "taken" ? "Taken" : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mt-4 grid grid-cols-2 gap-3">
        <div 
          className="bg-card border border-border rounded-2xl p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-soft transition-shadow"
          onClick={() => navigate("/calendar")}
        >
          <Calendar className="w-8 h-8 text-primary mb-2" />
          <h3 className="font-medium text-foreground">Calendar View</h3>
          <p className="text-xs text-muted-foreground">See weekly schedule</p>
        </div>
        <div 
          className="bg-card border border-border rounded-2xl p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-soft transition-shadow"
          onClick={() => navigate("/family")}
        >
          <Users className="w-8 h-8 text-primary mb-2" />
          <h3 className="font-medium text-foreground">Family Profile</h3>
          <p className="text-xs text-muted-foreground">Manage members</p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="px-4 mt-4">
        <div className="bg-card border border-border rounded-2xl p-4 flex items-center justify-between">
          <div>
            <h3 className="font-medium text-foreground">Emergency Contact</h3>
            <p className="text-sm text-muted-foreground">Dr Susan Wilson • Paediatrician</p>
          </div>
          <Button variant="teal" size="sm">
            <Phone className="w-4 h-4 mr-1" />
            Call Now
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
