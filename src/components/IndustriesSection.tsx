import { MessageSquare, GraduationCap, Heart, Users } from "lucide-react";
import educationImg from "@/assets/education.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import eldercareImg from "@/assets/eldercare.jpg";
import industryImg1 from "@/assets/WhatsApp Image 2025-12-30 at 1.50.11 PM.jpeg";
import industryImg2 from "@/assets/WhatsApp Image 2025-12-30 at 1.50.24 PM.jpeg";
import industryImg3 from "@/assets/WhatsApp Image 2025-12-30 at 1.50.56 PM.jpeg";
import heroBg from "@/assets/hero section bg.png";

const industries = [
  {
    title: "Education",
    description: "Transform education with AI that adapts to individual learning styles, cultural contexts, and personal goals.",
    image: educationImg,
    icon: GraduationCap,
    features: [
      "Personalized learning paths",
      "Cultural & linguistic adaptation",
      "Parent-teacher collaboration tools",
      "Real-time progress insights",
    ],
    reverse: false,
  },
  {
    title: "Wellness",
    description: "Holistic wellness support that combines modern psychology with ancient wisdom for complete wellbeing.",
    image: wellnessImg,
    icon: Heart,
    features: [
      "24/7 emotional support",
      "Mindfulness & meditation guidance",
      "Stress & anxiety management",
      "Connection to professional care",
    ],
    reverse: true,
  },
  {
    title: "Elder Care",
    description: "Compassionate AI companions that provide engagement, memory support, and connection for seniors.",
    image: eldercareImg,
    icon: Users,
    features: [
      "Cognitive stimulation activities",
      "Medication & appointment reminders",
      "Family connection facilitation",
      "Cultural storytelling & heritage",
    ],
    reverse: false,
  },
];

export const IndustriesSection = () => {
  return (
    <section id="industries" className="section-padding bg-background noise-overlay">
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
              marginBottom: "clamp(0.5rem, 1.2vw, 0.75rem)"
            }}
            className="px-2"
          >
            Transforming Lives Across Industries
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
            Our AI solutions address real human needs in the sectors that matter most.
          </p>
        </div>

        {/* Industry Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1rem, 3vw, 2rem)" }}>
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`relative flex flex-col lg:flex-row ${industry.reverse ? "lg:flex-row-reverse" : ""}`}
              style={{
                gap: "10px",
                padding: "24px",
                width: "100%",
                maxWidth: "1292px",
                minHeight: "400px",
                borderRadius: "24px",
                backgroundColor: "#111111",
                boxShadow: `
                  -1px 0px 0px 0px rgba(255, 255, 255, 0.12) inset,
                  0px -1px 0px 0px rgba(255, 255, 255, 0.12) inset,
                  -2px -2px 2px -3px rgba(255, 255, 255, 1) inset,
                  0px 1px 0px 0px rgba(255, 255, 255, 0.24) inset,
                  1px 0px 0px 0px rgba(255, 255, 255, 0.16) inset,
                  4px 4px 1px -5px rgba(255, 255, 255, 1) inset,
                  0px 0px 0px 2px rgba(0, 0, 0, 0.01) inset
                `,
                backdropFilter: "blur(16px)",
                backgroundColor: "#111111",
                position: "relative",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
                {/* Hero background image at 25% opacity */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "left center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.25,
                    borderRadius: "24px",
                    zIndex: 0,
                  }}
                />
                {/* Content */}
                <div
                  className="flex flex-col justify-center relative"
                  style={{
                    padding: "clamp(1.5rem, 5vw, 3rem)",
                    flex: "1 1 0%",
                    zIndex: 1,
                  }}
                >
                  <div className="relative z-10">
                    {/* Icon - Small reddish-orange square with white icon outline */}
                    <div 
                      className="inline-flex items-center justify-center" 
                      style={{ 
                        width: "clamp(2.5rem, 5vw, 3rem)", 
                        height: "clamp(2.5rem, 5vw, 3rem)", 
                        marginBottom: "clamp(0.25rem, 0.8vw, 0.5rem)",
                        backgroundColor: "#FD5009",
                        borderRadius: "clamp(0.25rem, 0.5vw, 0.5rem)"
                      }}
                    >
                      <industry.icon className="text-white" style={{ width: "clamp(1.25rem, 2.5vw, 1.5rem)", height: "clamp(1.25rem, 2.5vw, 1.5rem)", strokeWidth: 2 }} />
                    </div>
                    {/* Title - Large white bold text */}
                    <h3 
                      style={{
                        alignSelf: "stretch",
                        color: "#FAFAFA",
                        fontFamily: '"Public Sans", sans-serif',
                        fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "1.2",
                        marginBottom: "clamp(0.25rem, 0.8vw, 0.5rem)",
                        letterSpacing: "-0.01em",
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.8)"
                      }}
                    >
                      {industry.title}
                    </h3>
                    {/* Description - Lighter white text */}
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
                        marginBottom: "clamp(0.5rem, 1.5vw, 1rem)",
                        letterSpacing: "0.01em",
                        textShadow: "0 1px 4px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.6)"
                      }}
                      className="md:text-justify"
                    >
                      {industry.description}
                    </p>
                    {/* Features - Lighter text with bullet points */}
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "clamp(0.5rem, 1.2vw, 0.75rem)",
                        marginBottom: "clamp(1.5rem, 3vw, 2rem)",
                        color: "#777777",
                        fontFamily: '"Public Sans", sans-serif',
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        listStyle: "none",
                        padding: 0,
                        width: "347px",
                        height: "96px",
                        textShadow: "0 1px 4px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.6)"
                      }}
                    >
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-start" style={{ gap: "clamp(0.5rem, 1vw, 0.75rem)" }}>
                          <span style={{ 
                            color: "#777777",
                            marginTop: "0.25em",
                            fontSize: "0.75em"
                          }}>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image card */}
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    flex: "1 1 0%",
                    minHeight: "clamp(18.75rem, 40vw, 25rem)",
                    zIndex: 1,
                  }}
                >
                  <div
                    className="w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black/30 backdrop-blur-xl"
                    style={{
                      aspectRatio: "4 / 3",
                    }}
                  >
                    {/* Background images replacing gradient overlays as a card */}
                    {index === 0 && (
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url(${industryImg1})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    )}
                    {index === 1 && (
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url(${industryImg2})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    )}
                    {index === 2 && (
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url(${industryImg3})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    )}
                    {index !== 0 && index !== 1 && index !== 2 && (
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
