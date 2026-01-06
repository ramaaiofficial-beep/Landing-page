import { Eye, Target } from "lucide-react";

export const VisionMissionSection = () => {
  return (
    <section id="about" className="section-padding bg-background noise-overlay">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
          <h2 
            className="px-2"
            style={{
              alignSelf: "stretch",
              textAlign: "center",
              fontFamily: '"Public Sans", sans-serif',
              fontSize: "clamp(1.75rem, 4vw, 2.625rem)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "1.2",
              color: "#FAFAFA",
              marginBottom: "clamp(0.5rem, 1.2vw, 0.75rem)"
            }}
          >
            Building AI with Heart & Soul
          </h2>
          <p 
            style={{
              alignSelf: "stretch",
              color: "#777777",
              textAlign: "center",
              fontFamily: '"Public Sans", sans-serif',
              fontSize: "clamp(0.875rem, 1.6vw, 1.125rem)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.6",
              letterSpacing: "0%",
              marginTop: 0
            }}
            className="px-2"
          >
            RAMA AI is an emerging deep-tech company focused on creating AI
            solutions that truly understand and serve humanity.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 items-start vision-mission-grid" style={{ gap: "clamp(1.5rem, 4vw, 2.5rem)" }}>
          {/* Vision */}
          <div className="text-center">
            <div className="relative mx-auto mb-6" style={{ width: "clamp(4rem, 8vw, 6rem)", height: "clamp(4rem, 8vw, 6rem)" }}>
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="absolute inset-2 rounded-full border-2 border-primary/50 animate-ping" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
              <div className="absolute inset-4 rounded-full border-2 border-primary/70 animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary rounded-full animate-pulse" style={{ width: "clamp(2rem, 4vw, 2.5rem)", height: "clamp(2rem, 4vw, 2.5rem)" }} />
              </div>
            </div>
            <h3 
              style={{
                alignSelf: "stretch",
                color: "#FAFAFA",
                textAlign: "center",
                fontFamily: '"Public Sans", sans-serif',
                fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                fontStyle: "normal",
                fontWeight: 200,
                lineHeight: "1.3",
                marginBottom: "clamp(0.35rem, 1vw, 0.6rem)"
              }}
            >
              Our Vision
            </h3>
          <p 
            style={{
              alignSelf: "stretch",
              color: "#777777",
              textAlign: "center",
              fontFamily: '"Public Sans", sans-serif',
              fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.6",
              marginTop: 0
            }}
          >
              To redefine artificial intelligence as a trusted companion that enhances
              decision-making, productivity, and well-being while staying deeply
              aligned with human values and social responsibility.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center mission-section">
            <div className="relative mx-auto mb-6" style={{ width: "clamp(4rem, 8vw, 6rem)", height: "clamp(4rem, 8vw, 6rem)" }}>
              {/* Smooth floating animation for pyramid */}
              <div className="absolute inset-0 flex items-end justify-center animate-float">
                <div className="relative">
                  <div className="w-20 h-4 bg-primary/20 rounded-t-sm" />
                  <div className="w-16 h-4 bg-primary/30 rounded-t-sm mx-auto -mt-1" />
                  <div className="w-12 h-4 bg-primary/40 rounded-t-sm mx-auto -mt-1" />
                  <div className="w-8 h-4 bg-primary/50 rounded-t-sm mx-auto -mt-1" />
                  <div className="w-4 h-4 bg-primary/60 rounded-t-sm mx-auto -mt-1" />
                  {/* Flag with gentle sway */}
                  <div 
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                    style={{
                      animation: "sway 3s ease-in-out infinite"
                    }}
                  >
                    <div className="w-0.5 h-10 bg-primary" />
                    <div className="absolute top-0 left-0.5 w-4 h-3 bg-primary rounded-sm" />
                  </div>
                </div>
              </div>
              {/* Subtle glow effect */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(253, 80, 9, 0.15) 0%, transparent 70%)",
                  animation: "pulse-glow 2s ease-in-out infinite"
                }}
              />
            </div>
            <h3 
              style={{
                color: "#FAFAFA",
                textAlign: "center",
                fontFamily: '"Public Sans", sans-serif',
                fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                fontStyle: "normal",
                fontWeight: 200,
                lineHeight: "1.3",
                marginBottom: "clamp(0.35rem, 1vw, 0.6rem)",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              Our Mission
            </h3>
          <p 
            style={{
              alignSelf: "stretch",
              color: "#777777",
              textAlign: "center",
              fontFamily: '"Public Sans", sans-serif',
              fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.6",
              marginTop: 0
            }}
          >
              To continuously innovate human-centric AI systems through research,
              real-world deployment, and collaboration—ensuring technology remains
              trustworthy, inclusive, and beneficial to society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
