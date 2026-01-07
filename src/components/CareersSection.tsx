import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero section bg.png";
import { typography, fontSizes, containers } from "@/lib/styles";

const programs = [
  {
    icon: GraduationCap,
    title: "Internship Program",
    description: "Hands-on experience building next-generation AI solutions. For current students passionate about AI and human impact.",
    gradient: false,
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
        <div className="text-center max-w-2xl mx-auto px-2" style={containers.sectionHeader}>
          <h2 
            style={{
              ...typography.sectionHeadingSpline,
              fontSize: fontSizes.sectionHeading,
            }}
          >
            Internship & Graduate Programs
          </h2>
          <p 
            style={{
              ...typography.sectionParagraph,
              fontSize: fontSizes.sectionParagraph,
            }}
          >
            Join a team that's redefining the relationship between humans and AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2" style={{ gap: "clamp(2rem, 5vw, 3.5rem)" }}>
          {/* Programs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(0.5rem, 1.5vw, 1rem)" }}>
            {programs.map((program) => (
              <div
                key={program.title}
                className={`rounded-2xl border cursor-pointer ${
                  program.gradient
                    ? ""
                    : "p-8 bg-card border-border/50"
                }`}
                style={{
                  display: "flex",
                  padding: "24px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "12px",
                  alignSelf: "stretch",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "translateY(0) scale(1)"
                }}
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
                {/* Background with gradient and image */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: program.gradient ? "rgba(253, 80, 9, 0.8)" : "#040404",
                    borderRadius: "20px",
                    zIndex: 0,
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: program.gradient ? 1 : 0.2,
                    borderRadius: "20px",
                    zIndex: 0,
                  }}
                />
                <div 
                  style={{
                    display: "flex",
                    width: "58px",
                    height: "58px",
                    padding: "15px 16px",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    background: "#FFF",
                    boxShadow: "0px 0px 0px 1px rgba(41, 0, 41, 0.25), 0px 2px 2px 0px rgba(32, 0, 36, 0.05)",
                    backdropFilter: "blur(10px)",
                    marginBottom: "clamp(0.125rem, 0.5vw, 0.375rem)",
                    position: "relative",
                    zIndex: 1
                  }}
                >
                  <program.icon className="text-primary" style={{ width: "24px", height: "24px" }} />
                </div>
                <h3 
                  style={{
                    alignSelf: "stretch",
                    color: "#FFF",
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    marginTop: 0,
                    marginBottom: "0",
                    position: "relative",
                    zIndex: 1
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
                    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    marginTop: "0",
                    marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
                    position: "relative",
                    zIndex: 1
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
                    transition: "all 0.3s ease",
                    position: "relative",
                    zIndex: 1
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              gap: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            <h3 
              style={{
                color: "#FAFAFA",
                fontFamily: '"Public Sans", sans-serif',
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal"
              }}
            >
              Application Process
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "clamp(2rem, 4vw, 3.5rem)",
                alignSelf: "stretch"
              }}
            >
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  style={{
                    display: "flex",
                    gap: "24px",
                    alignItems: "flex-start",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    paddingLeft: 0,
                    paddingRight: 0,
                    width: "100%",
                    borderBottom: index === 0 
                      ? "1px solid #ccc" 
                      : index < steps.length - 1 
                        ? "1px solid rgba(204, 204, 204, 0.8)" 
                        : "none"
                  }}
                >
                  <div className="flex-shrink-0">
                    <span 
                      style={{
                        color: "#FD5009",
                        fontFamily: '"Public Sans", sans-serif',
                        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                        fontStyle: "normal",
                        fontWeight: 100,
                        lineHeight: "normal"
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h4 
                      style={{
                        color: "#FAFAFA",
                        fontFamily: '"Public Sans", sans-serif',
                        fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal"
                      }}
                    >
                      {step.title}
                    </h4>
                    <p 
                      style={{
                        color: "#F0F0F0",
                        textAlign: "left",
                        fontFamily: '"Public Sans", sans-serif',
                        fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal"
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
