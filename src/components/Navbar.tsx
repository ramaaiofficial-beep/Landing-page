import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero section bg.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Solutions", href: "#industries" },
  { label: "Careers", href: "#careers" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const isHomePage = location.pathname === "/";
    const targetId = href.replace("#", "");
    
    if (isHomePage) {
      // If on home page, just scroll to section
      const element = document.getElementById(targetId);
      if (element) {
        // Use scrollIntoView with block: 'start' and let CSS scroll-padding-top handle the offset
        element.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      // If on different page, navigate to home then scroll
      navigate("/", { state: { scrollTo: targetId } });
    }
    setIsMobileMenuOpen(false);
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          // Use scrollIntoView with block: 'start' and let CSS scroll-padding-top handle the offset
          element.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
        // Clear the state to prevent re-scrolling on re-renders
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        margin: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        transform: "none",
        willChange: "background-color, backdrop-filter, border-color, box-shadow",
        background: isScrolled 
          ? "rgba(0, 0, 0, 0.4)" 
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: isScrolled 
          ? "1px solid rgba(255, 255, 255, 0.1)" 
          : "none",
        boxShadow: isScrolled 
          ? "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1)" 
          : "none",
        paddingTop: "clamp(0.375rem, 1vw, 0.5rem)",
        paddingBottom: "clamp(0.375rem, 1vw, 0.5rem)",
        paddingLeft: 0,
        paddingRight: 0,
        zIndex: 9999,
        transition: "background-color 0.3s, backdrop-filter 0.3s, border-color 0.3s, box-shadow 0.3s"
      }}
    >
      {/* Background Image with 20% opacity - covers entire nav */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
          zIndex: 0
        }}
      />
      <div 
        className="container-custom flex items-center justify-between relative navbar-container" 
        style={{ 
          minHeight: "clamp(3.5rem, 8vw, 5rem)", 
          height: "auto",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* Logo */}
        <a 
          href="#home" 
          className="flex flex-wrap flex-shrink-0"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <img src={logo} alt="RAMA AI" className="w-auto navbar-logo" style={{ height: "clamp(1.5rem, 4vw, 3rem)", maxHeight: "80%", objectFit: "contain" }} />
        </a>

          {/* Desktop Navigation */}
          <div 
            className="hidden md:flex items-center gap-1 rounded-full px-2 py-1 relative z-10"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(42, 15, 8, 0.5) 50%, rgba(0, 0, 0, 0.6) 100%)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(253, 200, 100, 0.3)",
              boxShadow: `
                0 8px 32px 0 rgba(0, 0, 0, 0.5),
                0 0 0 1px rgba(253, 200, 100, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 0 20px rgba(253, 80, 9, 0.15)
              `,
              overflow: "hidden"
            }}
          >
            {/* Fine noise texture */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                mixBlendMode: "overlay",
                pointerEvents: "none"
              }}
            />
            {/* Golden-orange glow from bottom-left */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                background: "radial-gradient(ellipse 150% 150% at 0% 100%, rgba(253, 80, 9, 0.4) 0%, transparent 60%)",
                pointerEvents: "none"
              }}
            />
            {/* Glass highlight overlay */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 40%)",
                pointerEvents: "none"
              }}
            />
            <div className="relative z-10 flex items-center" style={{ gap: "clamp(0.125rem, 0.5vw, 0.5rem)" }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-medium text-white transition-all rounded-full hover:bg-white/5 relative z-10 whitespace-nowrap"
                  style={{
                    padding: "clamp(0.375rem, 1vw, 0.625rem) clamp(0.5rem, 1.5vw, 1rem)",
                    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                    textShadow: "0 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(255, 255, 255, 0.1)"
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" className="bg-primary text-primary-foreground border-primary hover:bg-primary/90" asChild style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)", paddingLeft: "clamp(0.75rem, 1.5vw, 1rem)", paddingRight: "clamp(0.75rem, 1.5vw, 1rem)" }}>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ padding: "clamp(0.375rem, 1vw, 0.5rem)", minWidth: "clamp(2.5rem, 6vw, 3rem)", minHeight: "clamp(2.5rem, 6vw, 3rem)" }}
          >
            {isMobileMenuOpen ? <X style={{ width: "clamp(1.25rem, 3vw, 1.5rem)", height: "clamp(1.25rem, 3vw, 1.5rem)" }} /> : <Menu style={{ width: "clamp(1.25rem, 3vw, 1.5rem)", height: "clamp(1.25rem, 3vw, 1.5rem)" }} />}
          </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl animate-fade-in" style={{ marginTop: "clamp(0.5rem, 1.5vw, 1rem)", padding: "clamp(1rem, 3vw, 1.5rem)" }}>
            <div className="flex flex-col" style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-foreground hover:bg-secondary rounded-xl transition-colors"
                  style={{ padding: "clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)", fontSize: "clamp(0.875rem, 1.5vw, 1rem)" }}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" className="bg-primary text-primary-foreground border-primary hover:bg-primary/90" asChild style={{ marginTop: "clamp(0.5rem, 1.5vw, 1rem)" }}>
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                  Contact
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
