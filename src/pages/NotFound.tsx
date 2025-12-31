import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background hero-gradient noise-overlay">
      <div className="text-center relative z-10">
        <h1 className="mb-4 text-6xl font-bold gradient-text">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
