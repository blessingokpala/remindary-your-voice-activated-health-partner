import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RemindaryLogo } from "@/components/shared/RemindaryLogo";

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/splash-logo");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-teal-dark flex items-center justify-center">
      <div className="animate-scale-in">
        <RemindaryLogo size="lg" animated />
      </div>
    </div>
  );
};

export default Splash;
