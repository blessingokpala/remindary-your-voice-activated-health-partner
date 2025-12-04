import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, HelpCircle, MessageCircle, FileText, Video, ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BottomNav } from "@/components/layout/BottomNav";

const helpTopics = [
  { icon: HelpCircle, title: "Getting Started", description: "Learn the basics of Remindary" },
  { icon: FileText, title: "Managing Medications", description: "Add, edit, and track your meds" },
  { icon: Video, title: "Voice Commands Tutorial", description: "Master hands-free reminders" },
  { icon: MessageCircle, title: "FAQs", description: "Common questions answered" },
];

const HelpCenter: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-teal-dark px-4 pt-6 pb-8">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-primary-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-primary-foreground">Help Center</h1>
        </div>
        <p className="text-primary-foreground/80 text-sm mt-2 ml-11">
          How can we help you today?
        </p>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <Input placeholder="Search for help..." className="pl-10" />
          <HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>

        {/* Help Topics */}
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-2 px-2">Popular Topics</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {helpTopics.map((topic, index) => (
              <button
                key={topic.title}
                className={`w-full flex items-center justify-between p-4 hover:bg-muted transition-colors ${
                  index !== helpTopics.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <topic.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <span className="text-foreground font-medium">{topic.title}</span>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-card border border-border rounded-2xl p-4">
          <h3 className="font-medium text-foreground mb-2">Still need help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Our support team is here to assist you 24/7.
          </p>
          <div className="flex gap-3">
            <Button variant="teal-outline" className="flex-1" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Live Chat
            </Button>
            <Button variant="outline" className="flex-1" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>

        {/* App Version */}
        <p className="text-center text-sm text-muted-foreground">
          Remindary v1.0.0
        </p>
      </div>

      <BottomNav />
    </div>
  );
};

export default HelpCenter;
