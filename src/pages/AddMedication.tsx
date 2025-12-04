import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Pill, Clock, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BottomNav } from "@/components/layout/BottomNav";

const commonMedications = [
  { name: "Paracetamol", icon: "💊" },
  { name: "Ibuprofen", icon: "💊" },
  { name: "Vitamin D", icon: "☀️" },
  { name: "Vitamin C", icon: "🍊" },
  { name: "Omega 3", icon: "🐟" },
  { name: "Antihistamine", icon: "🤧" },
  { name: "Asthma Inhaler", icon: "💨" },
  { name: "Eye Drops", icon: "💧" },
];

const AddMedication: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMed, setSelectedMed] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    frequency: "daily",
    time: "08:00",
    familyMember: "",
    startDate: "",
    notes: "",
  });

  const filteredMeds = commonMedications.filter((med) =>
    med.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectMedication = (name: string) => {
    setSelectedMed(name);
    setFormData({ ...formData, name });
    setStep(2);
  };

  const handleSave = () => {
    // Save medication logic
    navigate("/medications");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => step === 1 ? navigate(-1) : setStep(1)} className="text-primary-foreground">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full border-4 border-cyan-bright bg-teal-dark flex items-center justify-center">
            <span className="text-4xl">💊</span>
          </div>
        </div>
        
        <h1 className="text-xl font-semibold text-primary-foreground text-center">
          {step === 1 ? "What medication do you want to add?" : "Medication Details"}
        </h1>
      </div>

      {step === 1 ? (
        <div className="px-4 py-4 -mt-4">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search medication..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Common Medications */}
          <div className="space-y-2">
            {filteredMeds.map((med) => (
              <button
                key={med.name}
                onClick={() => handleSelectMedication(med.name)}
                className="w-full bg-card border border-border rounded-xl p-4 flex items-center gap-3 hover:bg-muted transition-colors"
              >
                <span className="text-2xl">{med.icon}</span>
                <span className="text-foreground font-medium">{med.name}</span>
              </button>
            ))}
          </div>

          {/* Custom medication */}
          {searchQuery && !filteredMeds.length && (
            <button
              onClick={() => handleSelectMedication(searchQuery)}
              className="w-full mt-4 bg-primary/10 border border-primary rounded-xl p-4 text-primary font-medium"
            >
              Add "{searchQuery}" as new medication
            </button>
          )}
        </div>
      ) : (
        <div className="px-4 py-4 -mt-4 space-y-4">
          {/* Medication Name */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Pill className="w-4 h-4" />
              Medication Name
            </Label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter medication name"
            />
          </div>

          {/* Dosage */}
          <div className="space-y-2">
            <Label>Dosage</Label>
            <Input
              value={formData.dosage}
              onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
              placeholder="e.g., 1 tablet, 2 puffs"
            />
          </div>

          {/* Frequency */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Frequency
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {["daily", "weekly", "as-needed"].map((freq) => (
                <button
                  key={freq}
                  onClick={() => setFormData({ ...formData, frequency: freq })}
                  className={`p-3 rounded-xl border text-sm capitalize transition-all ${
                    formData.frequency === freq
                      ? "bg-teal-dark text-primary-foreground border-teal-dark"
                      : "bg-card border-border text-foreground"
                  }`}
                >
                  {freq.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Time */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Reminder Time
            </Label>
            <Input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>

          {/* Family Member */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Family Member
            </Label>
            <Input
              value={formData.familyMember}
              onChange={(e) => setFormData({ ...formData, familyMember: e.target.value })}
              placeholder="Who is this medication for?"
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label>Notes (optional)</Label>
            <Input
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any special instructions..."
            />
          </div>

          <Button variant="teal" size="lg" className="w-full mt-6" onClick={handleSave}>
            Save Medication
          </Button>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default AddMedication;
