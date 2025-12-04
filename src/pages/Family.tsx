import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, User, Pill, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BottomNav } from "@/components/layout/BottomNav";

interface FamilyMember {
  id: string;
  name: string;
  relationship: string;
  avatar: string;
  medicationCount: number;
}

const familyMembers: FamilyMember[] = [
  { id: "1", name: "Jordan Smith", relationship: "Self", avatar: "👩", medicationCount: 2 },
  { id: "2", name: "Joy Smith", relationship: "Daughter", avatar: "👧", medicationCount: 1 },
  { id: "3", name: "Dad", relationship: "Father", avatar: "👴", medicationCount: 1 },
  { id: "4", name: "Mom", relationship: "Mother", avatar: "👵", medicationCount: 2 },
];

const Family: React.FC = () => {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMember, setNewMember] = useState({ name: "", relationship: "" });

  const handleAddMember = () => {
    // Add member logic
    setShowAddForm(false);
    setNewMember({ name: "", relationship: "" });
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-primary-foreground">Family Profile</h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground"
            onClick={() => setShowAddForm(true)}
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>
        <p className="text-primary-foreground/80 text-sm mt-2">
          Manage medications for your family members
        </p>
      </div>

      {/* Family Members */}
      <div className="px-4 py-4 -mt-4 space-y-3">
        {familyMembers.map((member) => (
          <div
            key={member.id}
            className="bg-card border border-border rounded-2xl p-4 shadow-card"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-2xl">
                  {member.avatar}
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.relationship}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-primary">
                    <Pill className="w-3 h-3" />
                    <span>{member.medicationCount} medication{member.medicationCount !== 1 ? "s" : ""}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Member Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-foreground/50 flex items-end justify-center z-50">
          <div className="bg-card rounded-t-3xl w-full max-w-md p-6 animate-slide-up">
            <h2 className="text-xl font-semibold text-foreground mb-4">Add Family Member</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  placeholder="Enter name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="relationship">Relationship</Label>
                <Input
                  id="relationship"
                  value={newMember.relationship}
                  onChange={(e) => setNewMember({ ...newMember, relationship: e.target.value })}
                  placeholder="e.g., Son, Daughter, Parent"
                />
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="teal"
                  size="lg"
                  className="flex-1"
                  onClick={handleAddMember}
                >
                  Add Member
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Family;
