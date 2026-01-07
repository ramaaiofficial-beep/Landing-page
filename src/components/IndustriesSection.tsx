import { MessageSquare, GraduationCap, Heart, Users } from "lucide-react";
import educationImg from "@/assets/education.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import eldercareImg from "@/assets/eldercare.jpg";
import industryImg1 from "@/assets/WhatsApp Image 2025-12-30 at 1.50.11 PM.jpeg";
import industryImg2 from "@/assets/WhatsApp Image 2025-12-30 at 1.50.24 PM.jpeg";
import industryImg3 from "@/assets/WhatsApp Image 2025-12-30 at 1.50.56 PM.jpeg";
import heroBg from "@/assets/hero section bg.png";
import { typography, fontSizes, containers } from "@/lib/styles";

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
        <div className="text-center max-w-2xl mx-auto px-2" style={containers.sectionHeader}>
          <h2 
            style={{
              ...typography.sectionHeadingSpline,
              fontSize: fontSizes.sectionHeading,
            }}
          >
            Transforming Lives Across Industries
          </h2>
          <p 
            style={{
              ...typography.sectionParagraph,
              fontSize: fontSizes.sectionParagraph,
            }}
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
                        width: "58px", 
                        height: "58px", 
                        marginBottom: "clamp(0.25rem, 0.8vw, 0.5rem)",
                        background: "linear-gradient(180deg, rgba(253, 80, 9, 0.6) 0%, rgba(239, 16, 5, 0.6) 100%)",
                        borderRadius: "8px",
                        padding: "15px 16px"
                      }}
                    >
                      <industry.icon className="text-white" style={{ width: "24px", height: "24px", strokeWidth: 2 }} />
                    </div>
                    {/* Title - Large white bold text */}
                    <h3 
                      style={{
                        alignSelf: "stretch",
                        color: "#FAFAFA",
                        fontFamily: '"Public Sans", sans-serif',
                        fontSize: "clamp(1.75rem, 3.5vw, 2rem)",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        marginBottom: "clamp(0.25rem, 0.8vw, 0.5rem)"
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
                        fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        marginTop: 0,
                        marginBottom: "clamp(0.5rem, 1.5vw, 1rem)"
                      }}
                      className="md:text-justify"
                    >
                      {industry.description}
                    </p>
                    {/* Features - Lighter text with bullet points */}
                    <ul
                      style={{
                        display: "block",
                        marginBottom: "clamp(1.5rem, 3vw, 2rem)",
                        color: "#777777",
                        fontFamily: '"Public Sans", sans-serif',
                        fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: 0,
                        listStyle: "none",
                        padding: 0,
                        whiteSpace: "nowrap"
                      }}
                    >
                      {industry.features.map((feature, idx) => (
                        <li key={feature} style={{ 
                          marginBottom: idx < industry.features.length - 1 ? 0 : 0,
                          marginLeft: "30px"
                        }}>
                          <span style={{ lineHeight: "normal" }}>• {feature}</span>
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
