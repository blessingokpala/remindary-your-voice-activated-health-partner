import React from "react";
import { Bell, Check, AlertCircle, Calendar, Pill } from "lucide-react";
import { BottomNav } from "@/components/layout/BottomNav";
import { cn } from "@/lib/utils";

interface Update {
  id: string;
  type: "reminder" | "refill" | "missed" | "taken";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const updates: Update[] = [
  {
    id: "1",
    type: "reminder",
    title: "Upcoming Reminder",
    message: "Vitamin D for Jordan at 6:00 PM",
    time: "5 min ago",
    read: false,
  },
  {
    id: "2",
    type: "taken",
    title: "Medication Taken",
    message: "Joy took Asthma Inhaler at 5:00 PM",
    time: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    type: "refill",
    title: "Refill Reminder",
    message: "Thealoz Eye drops needs refill in 5 days",
    time: "2 hours ago",
    read: true,
  },
  {
    id: "4",
    type: "missed",
    title: "Missed Dose",
    message: "Dad missed Allergy Medication yesterday",
    time: "Yesterday",
    read: true,
  },
  {
    id: "5",
    type: "taken",
    title: "Medication Taken",
    message: "Mom took Thealoz Eye drops at 7:00 PM",
    time: "Yesterday",
    read: true,
  },
];

const getUpdateIcon = (type: Update["type"]) => {
  switch (type) {
    case "reminder":
      return <Bell className="w-5 h-5" />;
    case "refill":
      return <Calendar className="w-5 h-5" />;
    case "missed":
      return <AlertCircle className="w-5 h-5" />;
    case "taken":
      return <Check className="w-5 h-5" />;
    default:
      return <Pill className="w-5 h-5" />;
  }
};

const getUpdateColors = (type: Update["type"]) => {
  switch (type) {
    case "reminder":
      return "bg-primary/10 text-primary";
    case "refill":
      return "bg-warning/10 text-warning";
    case "missed":
      return "bg-destructive/10 text-destructive";
    case "taken":
      return "bg-success/10 text-success";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Updates: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-primary-foreground">Updates</h1>
          <button className="text-primary-foreground text-sm">Mark all read</button>
        </div>
      </div>

      {/* Updates List */}
      <div className="px-4 py-4 -mt-4 space-y-3">
        {updates.map((update) => (
          <div
            key={update.id}
            className={cn(
              "bg-card border rounded-2xl p-4 flex items-start gap-3 transition-all",
              update.read ? "border-border" : "border-primary shadow-soft"
            )}
          >
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", getUpdateColors(update.type))}>
              {getUpdateIcon(update.type)}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <h3 className={cn("font-medium", update.read ? "text-foreground" : "text-foreground")}>
                  {update.title}
                </h3>
                <span className="text-xs text-muted-foreground">{update.time}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{update.message}</p>
            </div>
            {!update.read && (
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
            )}
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Updates;
