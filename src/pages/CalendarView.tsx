import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/layout/BottomNav";
import { cn } from "@/lib/utils";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface CalendarEvent {
  date: number;
  medications: { name: string; time: string; status: "taken" | "pending" | "missed" }[];
}

const mockEvents: CalendarEvent[] = [
  { date: 4, medications: [{ name: "Vitamin D", time: "8:00 AM", status: "taken" }, { name: "Inhaler", time: "5:00 PM", status: "pending" }] },
  { date: 5, medications: [{ name: "Vitamin D", time: "8:00 AM", status: "pending" }] },
  { date: 3, medications: [{ name: "Eye Drops", time: "7:00 PM", status: "missed" }] },
];

const CalendarView: React.FC = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getEventsForDate = (date: number) => {
    return mockEvents.find((e) => e.date === date);
  };

  const selectedEvents = getEventsForDate(selectedDate);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="text-primary-foreground">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-primary-foreground">Calendar</h1>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between">
          <button onClick={prevMonth} className="p-2 text-primary-foreground">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-medium text-primary-foreground">
            {months[month]} {year}
          </h2>
          <button onClick={nextMonth} className="p-2 text-primary-foreground">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="px-4 py-4">
        {/* Day Headers */}
        <div className="grid grid-cols-7 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-sm text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before the first day of the month */}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="aspect-square" />
          ))}

          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const date = index + 1;
            const events = getEventsForDate(date);
            const isSelected = date === selectedDate;
            const isToday = date === new Date().getDate() && month === new Date().getMonth();

            return (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={cn(
                  "aspect-square rounded-xl flex flex-col items-center justify-center relative transition-all",
                  isSelected
                    ? "bg-teal-dark text-primary-foreground"
                    : isToday
                    ? "bg-secondary text-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <span className={cn("text-sm font-medium", isSelected && "font-semibold")}>
                  {date}
                </span>
                {events && (
                  <div className="flex gap-0.5 mt-1">
                    {events.medications.map((med, i) => (
                      <span
                        key={i}
                        className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          med.status === "taken" && "bg-success",
                          med.status === "pending" && "bg-warning",
                          med.status === "missed" && "bg-destructive"
                        )}
                      />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Date Events */}
      <div className="px-4">
        <h3 className="font-semibold text-foreground mb-3">
          {selectedDate === new Date().getDate() ? "Today's" : `${months[month]} ${selectedDate}`} Schedule
        </h3>

        {selectedEvents ? (
          <div className="space-y-2">
            {selectedEvents.medications.map((med, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-4 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-medium text-foreground">{med.name}</h4>
                  <p className="text-sm text-muted-foreground">{med.time}</p>
                </div>
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium capitalize",
                    med.status === "taken" && "bg-success/20 text-success",
                    med.status === "pending" && "bg-warning/20 text-warning",
                    med.status === "missed" && "bg-destructive/20 text-destructive"
                  )}
                >
                  {med.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-muted rounded-xl p-8 text-center">
            <p className="text-muted-foreground">No medications scheduled</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default CalendarView;
