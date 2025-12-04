import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MobileLayout } from "@/components/layout/MobileLayout";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/profile-setup");
  };

  return (
    <MobileLayout className="bg-background">
      <div className="min-h-screen flex flex-col py-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-foreground"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground font-display">
            Create Account
          </h1>
          <p className="text-muted-foreground mt-2">
            Join Remindary to manage your family's health
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignUp} className="flex-1 flex flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Jordan Smith"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jordan@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <Button variant="teal" size="lg" className="w-full mt-6" type="submit">
            Create Account
          </Button>

          <p className="text-center text-muted-foreground mt-4">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/sign-in")}
              className="text-primary font-medium"
            >
              Sign In
            </button>
          </p>
        </form>
      </div>
    </MobileLayout>
  );
};

export default SignUp;
