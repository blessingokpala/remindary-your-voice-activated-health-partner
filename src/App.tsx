import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

// Onboarding
import Splash from "./pages/onboarding/Splash";
import SplashLogo from "./pages/onboarding/SplashLogo";
import Welcome from "./pages/onboarding/Welcome";
import SignIn from "./pages/onboarding/SignIn";
import SignUp from "./pages/onboarding/SignUp";
import ProfileSetup from "./pages/onboarding/ProfileSetup";
import MainConcern from "./pages/onboarding/MainConcern";
import NotificationFrequency from "./pages/onboarding/NotificationFrequency";

// Main App
import Home from "./pages/Home";
import Medications from "./pages/Medications";
import AddMedication from "./pages/AddMedication";
import MedicationDetails from "./pages/MedicationDetails";
import Updates from "./pages/Updates";
import Family from "./pages/Family";
import Manage from "./pages/Manage";
import VoiceAssistant from "./pages/VoiceAssistant";
import CalendarView from "./pages/CalendarView";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="remindary-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Onboarding Flow */}
            <Route path="/" element={<Splash />} />
            <Route path="/splash-logo" element={<SplashLogo />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />
            <Route path="/main-concern" element={<MainConcern />} />
            <Route path="/notification-frequency" element={<NotificationFrequency />} />
            
            {/* Main App */}
            <Route path="/home" element={<Home />} />
            <Route path="/medications" element={<Medications />} />
            <Route path="/add-medication" element={<AddMedication />} />
            <Route path="/medication/:id" element={<MedicationDetails />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/family" element={<Family />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/voice-assistant" element={<VoiceAssistant />} />
            <Route path="/calendar" element={<CalendarView />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
