import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-teal-dark flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-cyan-bright/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-6xl font-display text-cyan-bright">?</span>
        </div>
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">404</h1>
        <p className="text-xl text-primary-foreground/80 mb-8">Oops! Page not found</p>
        <Link to="/home">
          <Button variant="default" size="lg" className="bg-cyan-bright text-teal-dark hover:bg-cyan-bright/90">
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
