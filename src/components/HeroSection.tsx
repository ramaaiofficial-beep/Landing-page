import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero section bg.png";
import { Navbar } from "@/components/Navbar";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ width: "clamp(12rem, 30vw, 24rem)", height: "clamp(12rem, 30vw, 24rem)" }} />
        <div className="absolute bottom-1/4 right-1/4 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ width: "clamp(10rem, 25vw, 20rem)", height: "clamp(10rem, 25vw, 20rem)", animationDelay: "1s" }} />
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Gradient overlay to enhance the image gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/50" />

      <div 
        className="container-custom relative z-10 hero-container flex flex-col items-center justify-center" 
        style={{ 
          paddingTop: "0", 
          paddingBottom: "clamp(3rem, 6vw, 4.5rem)", 
          minHeight: "100vh",
          width: "100%",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* Fixed Navbar at top of hero section - will not move */}
        <Navbar />
        {/* Single container for all hero content elements */}
        <div 
          className="relative z-10 flex flex-col items-center justify-center text-center w-full mx-auto" 
          style={{ 
            gap: "clamp(0.75rem, 2vw, 1.5rem)",
            maxWidth: "100%",
            width: "100%",
            marginTop: "auto",
            marginBottom: "auto",
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }} 
          data-node-id="229:12452"
        >
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 rounded-full animate-fade-up relative overflow-hidden"
              style={{
                padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)",
                marginTop: "0",
                background: "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(42, 15, 8, 0.5) 50%, rgba(0, 0, 0, 0.6) 100%)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(253, 200, 100, 0.3)",
                boxShadow: `
                  0 8px 32px 0 rgba(0, 0, 0, 0.5),
                  0 0 0 1px rgba(253, 200, 100, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  0 0 20px rgba(253, 80, 9, 0.15)
                `
              }}
              data-node-id="229:12453"
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
              <Sparkles className="text-primary relative z-10" style={{ width: "clamp(0.875rem, 1.5vw, 1rem)", height: "clamp(0.875rem, 1.5vw, 1rem)" }} data-node-id="229:12454" />
              <span className="font-medium text-white relative z-10" style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)", textShadow: "0 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(255, 255, 255, 0.1)" }} data-node-id="229:12455">More than Product, A Promise</span>
            </div>

            {/* Main Headline */}
            <p 
              className="animate-fade-up text-center mx-auto whitespace-pre-wrap relative" 
              style={{ 
                animationDelay: "0.1s",
                color: "#FAFAFA",
                fontFamily: '"Spline Sans", sans-serif',
                fontSize: "clamp(2rem, 4vw + 0.5rem, 4rem)",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "clamp(2rem, 4vw + 0.5rem, 4rem)",
                width: "100%",
                maxWidth: "100%",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textRendering: "optimizeLegibility"
              }}
              data-node-id="229:12456"
            >
              <span 
                className="font-extralight"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 200,
                  fontVariationSettings: "'opsz' 14",
                  fontOpticalSizing: "auto",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "optimizeLegibility"
                }}
              >
                Building Practical Scalable
                <br />
                and Responsible
              </span>{" "}
              <span 
                className="italic"
                style={{
                  color: "#FD5009",
                  fontFamily: '"Instrument Serif", serif',
                  fontStyle: "italic",
                  fontWeight: 400,
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "optimizeLegibility"
                }}
              >
                AI System
              </span>
            </p>

            {/* Subheadline */}
            <div className="rounded-xl max-w-3xl mx-auto animate-fade-up w-full" style={{ animationDelay: "0.2s", marginTop: "0" }} data-node-id="229:12457">
              <p 
                className="text-center mx-auto"
                style={{
                  color: "#FAFAFA",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "clamp(0.875rem, 1.5vw + 0.25rem, 1.125rem)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "100%"
                }}
              >
                We design, deploy AI systems that think responsibly, speak naturally, and work reliably combining cultural intelligence, advanced engineering, and real-world deployment experience across multiple industries.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center animate-fade-up" style={{ animationDelay: "0.3s", gap: "clamp(0.75rem, 2vw, 1rem)", width: "100%" }} data-node-id="229:12458">
              <Button variant="hero" size="default" asChild className="w-full sm:w-auto" data-node-id="229:12459">
                <a 
                  href="#industries"
                  style={{
                    color: "#06071A",
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "110%"
                  }}
                  data-node-id="229:12460"
                >
                  Explore Our Solutions
                </a>
              </Button>
              <Button variant="heroOutline" size="default" asChild className="w-full sm:w-auto" data-node-id="229:12461">
                <a 
                  href="#contact"
                  style={{
                    color: "#FAFAFA",
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal"
                  }}
                  data-node-id="229:12462"
                >
                  Talk to Our Team
                </a>
              </Button>
            </div>
          </div>

      </div>
    </section>
  );
};
