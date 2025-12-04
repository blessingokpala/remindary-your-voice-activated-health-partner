import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BottomNav } from "@/components/layout/BottomNav";

const ProfileSettings: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Jordan Smith");
  const [email, setEmail] = useState("jordan@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-primary-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-primary-foreground">Profile Settings</h1>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="px-4 -mt-8 flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-secondary border-4 border-background flex items-center justify-center text-4xl shadow-card">
            👩
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-soft">
            <Camera className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 py-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Full Name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Email</label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Phone Number</label>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Date of Birth</label>
          <Input type="date" defaultValue="1985-06-15" />
        </div>

        <Button className="w-full mt-6" size="lg">
          Save Changes
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default ProfileSettings;
