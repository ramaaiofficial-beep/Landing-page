import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero section bg.png";

const programs = [
  {
    icon: GraduationCap,
    title: "Internship Program",
    description: "Hands-on experience building next-generation AI solutions. For current students passionate about AI and human impact.",
    gradient: true,
  },
  {
    icon: GraduationCap,
    title: "Graduate Program",
    description: "Fast-track your career in AI research and development. For recent graduates ready to make an impact.",
    gradient: false,
  },
];

const steps = [
  { number: "01", title: "Apply", description: "Submit your application and tell us your story." },
  { number: "02", title: "Review", description: "Our team reviews your background and passion." },
  { number: "03", title: "Interview", description: "Conversation-based interviews to understand your fit." },
  { number: "04", title: "Welcome", description: "Join the RAMA AI family and start your journey." },
];

export const CareersSection = () => {
  const navigate = useNavigate();
  
  return (
    <section id="careers" className="section-padding bg-background noise-overlay">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
          <h2 
            style={{
              alignSelf: "stretch",
              color: "#FAFAFA",
              textAlign: "center",
              fontFamily: '"Spline Sans", sans-serif',
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "1.2",
              marginBottom: "clamp(0.5rem, 1.2vw, 0.75rem)",
              paddingLeft: "clamp(0.5rem, 2vw, 1rem)",
              paddingRight: "clamp(0.5rem, 2vw, 1rem)"
            }}
          >
            Internship & Graduate Programs
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
              marginTop: 0
            }}
            className="px-2"
          >
            Join a team that's redefining the relationship between humans and AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2" style={{ gap: "clamp(2rem, 5vw, 3.5rem)" }}>
          {/* Programs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            {programs.map((program) => (
              <div
                key={program.title}
                className={`rounded-2xl border cursor-pointer ${
                  program.gradient
                    ? ""
                    : "p-8 bg-card border-border/50"
                }`}
                style={
                  program.gradient
                    ? {
                        display: "flex",
                        padding: "clamp(1.5rem, 4vw, 2.5rem)",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "clamp(0.5rem, 1.5vw, 1rem)",
                        alignSelf: "stretch",
                        borderRadius: "clamp(1rem, 2vw, 1.25rem)",
                        backgroundImage: `url(${heroBg}), linear-gradient(180deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 10, 10, 0.9) 100%)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: "translateY(0) scale(1)"
                      }
                    : {
                        display: "flex",
                        padding: "clamp(1.5rem, 4vw, 2.5rem)",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "clamp(0.5rem, 1.5vw, 1rem)",
                        alignSelf: "stretch",
                        borderRadius: "clamp(1rem, 2vw, 1.25rem)",
                        backgroundImage: `url(${heroBg}), linear-gradient(180deg, rgba(26, 26, 26, 0.9) 0%, rgba(26, 15, 15, 0.9) 100%)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: "translateY(0) scale(1)"
                      }
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = program.gradient
                    ? "0 20px 40px rgba(253, 80, 9, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)"
                    : "0 20px 40px rgba(253, 80, 9, 0.3), 0 0 0 1px rgba(253, 80, 9, 0.2)";
                  e.currentTarget.style.borderColor = program.gradient
                    ? "rgba(255, 255, 255, 0.3)"
                    : "rgba(253, 80, 9, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = program.gradient
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div 
                  style={{
                    display: "flex",
                    width: "clamp(3rem, 6vw, 3.625rem)",
                    height: "clamp(3rem, 6vw, 3.625rem)",
                    padding: "clamp(0.75rem, 1.5vw, 1rem)",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(0.5rem, 1vw, 0.625rem)",
                    borderRadius: "clamp(0.5rem, 1vw, 0.75rem)",
                    background: "#FFF",
                    boxShadow: "0 0 0 1px rgba(41, 0, 41, 0.1)",
                    backdropFilter: "blur(10px)",
                    marginBottom: "clamp(1rem, 2.5vw, 1.5rem)"
                  }}
                >
                  <program.icon className="text-primary" style={{ width: "clamp(1.25rem, 2.5vw, 1.5rem)", height: "clamp(1.25rem, 2.5vw, 1.5rem)" }} />
                </div>
                <h3 
                  style={{
                    alignSelf: "stretch",
                    color: "#FFF",
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.3",
                    marginBottom: "clamp(0.5rem, 1.2vw, 0.75rem)",
                    textShadow: "0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.8)",
                    letterSpacing: "0.01em"
                  }}
                >
                  {program.title}
                </h3>
                <p 
                  style={{
                    alignSelf: "stretch",
                    color: "#777777",
                    textAlign: "left",
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.6",
                    marginTop: 0,
                    marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
                    textShadow: "0 1px 4px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.6)",
                    letterSpacing: "0.01em"
                  }}
                  className="md:text-justify"
                >
                  {program.description}
                </p>
                <Button 
                  variant="glass" 
                  size="lg"
                  onClick={() => navigate("/apply")}
                  style={{
                    display: "flex",
                    minHeight: "clamp(2.5rem, 5vw, 3rem)",
                    paddingTop: "clamp(0.5rem, 1.5vw, 0.75rem)",
                    paddingBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                    paddingLeft: "clamp(1.5rem, 4vw, 2.5rem)",
                    paddingRight: "clamp(1.5rem, 4vw, 2.5rem)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "clamp(0.5rem, 1vw, 0.625rem)",
                    borderRadius: "clamp(0.5rem, 1vw, 0.75rem)",
                    border: "1px solid #FD5009",
                    background: "rgba(253, 80, 9, 0.2)",
                    color: "#FFF",
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    alignSelf: "flex-start",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(253, 80, 9, 0.3)";
                    e.currentTarget.style.borderColor = "rgba(253, 80, 9, 0.5)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(253, 80, 9, 0.2)";
                    e.currentTarget.style.borderColor = "#FD5009";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>

          {/* Application Process */}
          <div>
            <h3 
              style={{
                color: "#FFF",
                fontFamily: '"Public Sans", sans-serif',
                fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "1.3",
                marginBottom: "clamp(0.5rem, 1.2vw, 0.75rem)"
              }}
            >
              Application Process
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "clamp(2.5rem, 6vw, 3.5rem)",
                alignSelf: "stretch"
              }}
            >
              {steps.map((step, index) => (
                <div key={step.number}>
                  <div className="flex" style={{ gap: "clamp(1.5rem, 4vw, 2.5rem)" }}>
                    <div className="flex-shrink-0">
                      <span 
                        style={{
                          color: "#FD5009",
                          fontFamily: '"Public Sans", sans-serif',
                          fontSize: "clamp(1.5rem, 3vw, 1.75rem)",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "normal"
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h4 
                        style={{
                          color: "#FFF",
                          fontFamily: '"Public Sans", sans-serif',
                          fontSize: "clamp(1rem, 2vw, 1.25rem)",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "1.4",
                          marginBottom: "clamp(0.5rem, 1.2vw, 0.75rem)"
                        }}
                      >
                        {step.title}
                      </h4>
                      <p 
                        style={{
                          color: "#777777",
                          textAlign: "left",
                          fontFamily: '"Public Sans", sans-serif',
                          fontSize: "clamp(0.875rem, 1.3vw, 1rem)",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "1.6",
                          marginTop: 0,
                          marginBottom: "clamp(1.5rem, 4vw, 2.5rem)"
                        }}
                        className="md:text-justify"
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      style={{
                        marginTop: "clamp(1.5rem, 4vw, 2.5rem)",
                        marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
                        height: "1px",
                        background: "rgba(255, 255, 255, 0.1)",
                        width: "100%"
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
