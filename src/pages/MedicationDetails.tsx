import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, Bell, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/layout/BottomNav";

const MedicationDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - in real app would fetch based on id
  const medication = {
    id: id,
    name: "Asthma Inhaler",
    person: "Joy",
    dosage: "2 puffs",
    frequency: "Twice daily",
    times: ["8:00 AM", "5:00 PM"],
    startDate: "Jan 15, 2024",
    notes: "Use before physical activity",
    refillDate: "Feb 15, 2024",
    icon: "💨",
  };

  const recentHistory = [
    { date: "Today", time: "8:00 AM", status: "taken" },
    { date: "Yesterday", time: "5:00 PM", status: "taken" },
    { date: "Yesterday", time: "8:00 AM", status: "taken" },
    { date: "2 days ago", time: "5:00 PM", status: "missed" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => navigate(-1)} className="text-primary-foreground">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-primary-foreground">
              <Edit className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground">
              <Trash2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Medication Card */}
      <div className="px-4 -mt-12">
        <div className="bg-card rounded-2xl p-6 shadow-elevated">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-3xl">
              {medication.icon}
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">{medication.name}</h1>
              <p className="text-muted-foreground">{medication.dosage}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
              <User className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">For</p>
                <p className="text-sm font-medium text-foreground">{medication.person}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Frequency</p>
                <p className="text-sm font-medium text-foreground">{medication.frequency}</p>
              </div>
            </div>
          </div>

          {/* Times */}
          <div className="mt-4 p-3 bg-muted rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-primary" />
              <p className="text-sm font-medium text-foreground">Reminder Times</p>
            </div>
            <div className="flex gap-2">
              {medication.times.map((time) => (
                <span key={time} className="px-3 py-1 bg-card rounded-full text-sm text-foreground border border-border">
                  {time}
                </span>
              ))}
            </div>
          </div>

          {/* Notes */}
          {medication.notes && (
            <div className="mt-4 p-3 bg-warning/10 rounded-xl">
              <p className="text-sm text-foreground">📝 {medication.notes}</p>
            </div>
          )}

          {/* Refill Reminder */}
          <div className="mt-4 p-3 bg-secondary rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Next Refill</p>
                <p className="text-xs text-muted-foreground">{medication.refillDate}</p>
              </div>
            </div>
            <Button variant="teal" size="sm">
              Set Reminder
            </Button>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">Recent History</h2>
        <div className="space-y-2">
          {recentHistory.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-3 flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{item.date}</p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "taken"
                    ? "bg-success/20 text-success"
                    : "bg-destructive/20 text-destructive"
                }`}
              >
                {item.status === "taken" ? "Taken" : "Missed"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default MedicationDetails;
