import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BottomNav } from "@/components/layout/BottomNav";
import { cn } from "@/lib/utils";

interface Medication {
  id: string;
  name: string;
  person: string;
  frequency: string;
  nextDose: string;
  status: "active" | "refill-soon" | "inactive";
  icon: string;
}

const allMedications: Medication[] = [
  {
    id: "1",
    name: "Asthma Inhaler",
    person: "Joy",
    frequency: "Twice daily",
    nextDose: "5:00 PM",
    status: "active",
    icon: "💨",
  },
  {
    id: "2",
    name: "Vitamin D",
    person: "Jordan",
    frequency: "Once daily",
    nextDose: "6:00 PM",
    status: "active",
    icon: "💊",
  },
  {
    id: "3",
    name: "Thealoz Eye drops",
    person: "Mom",
    frequency: "3 times daily",
    nextDose: "7:00 PM",
    status: "refill-soon",
    icon: "💧",
  },
  {
    id: "4",
    name: "Allergy Medication",
    person: "Dad",
    frequency: "As needed",
    nextDose: "N/A",
    status: "inactive",
    icon: "🤧",
  },
];

const Medications: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filter, setFilter] = React.useState<"all" | "active" | "refill">("all");

  const filteredMeds = allMedications.filter((med) => {
    const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.person.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filter === "active") return matchesSearch && med.status === "active";
    if (filter === "refill") return matchesSearch && med.status === "refill-soon";
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-primary-foreground">Medications</h1>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-primary-foreground"
            onClick={() => navigate("/add-medication")}
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search medications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-3 flex gap-2 -mt-4">
        {[
          { label: "All", value: "all" as const },
          { label: "Active", value: "active" as const },
          { label: "Refill Soon", value: "refill" as const },
        ].map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              filter === f.value
                ? "bg-teal-dark text-primary-foreground"
                : "bg-card border border-border text-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Medications List */}
      <div className="px-4 space-y-3">
        {filteredMeds.map((med) => (
          <div
            key={med.id}
            className="bg-card border border-border rounded-2xl p-4 flex items-center justify-between shadow-card cursor-pointer hover:shadow-soft transition-all"
            onClick={() => navigate(`/medication/${med.id}`)}
          >
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-2xl">
                {med.icon}
              </div>
              <div>
                <h3 className="font-medium text-foreground">{med.name}</h3>
                <p className="text-sm text-muted-foreground">{med.person}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Clock className="w-3 h-3" />
                  {med.frequency} • Next: {med.nextDose}
                </div>
              </div>
            </div>
            {med.status === "refill-soon" && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-warning/20 text-warning">
                Refill Soon
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Add Button */}
      <div className="fixed bottom-24 right-4">
        <Button
          variant="teal"
          size="icon"
          className="w-14 h-14 rounded-full shadow-elevated"
          onClick={() => navigate("/add-medication")}
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Medications;
