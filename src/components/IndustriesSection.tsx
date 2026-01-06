import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
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
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 5vw, 3rem)" }}>
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="glass-card overflow-hidden"
            >
              <div className={`grid lg:grid-cols-2 ${industry.reverse ? "lg:flex-row-reverse" : ""}`} style={{ gap: 0 }}>
                {/* Content */}
                <div 
                  className={`flex flex-col justify-center relative ${industry.reverse ? "lg:order-2" : ""}`}
                  style={{
                    padding: "clamp(1.5rem, 5vw, 3rem)",
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Black overlay with less opacity */}
                  <div className="absolute inset-0 bg-black/30" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center bg-primary/10 rounded-xl" style={{ width: "clamp(2.5rem, 5vw, 3rem)", height: "clamp(2.5rem, 5vw, 3rem)", marginBottom: "clamp(1rem, 2.5vw, 1.5rem)", borderRadius: "clamp(0.5rem, 1vw, 0.75rem)" }}>
                      <MessageSquare className="text-primary" style={{ width: "clamp(1.25rem, 2.5vw, 1.5rem)", height: "clamp(1.25rem, 2.5vw, 1.5rem)" }} />
                    </div>
                    <h3 
                      style={{
                        alignSelf: "stretch",
                        color: "#FAFAFA",
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
                      {industry.title}
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
                        marginBottom: "clamp(0.75rem, 2vw, 1rem)",
                        textShadow: "0 1px 4px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.6)",
                        letterSpacing: "0.01em"
                      }}
                      className="md:text-justify"
                    >
                      {industry.description}
                    </p>
                    <ul 
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "clamp(0.375rem, 1vw, 0.75rem)",
                        marginBottom: "clamp(1rem, 3vw, 1.75rem)",
                        color: "#777777",
                        fontFamily: '"Public Sans", sans-serif',
                        fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "1.6",
                        textShadow: "0 1px 4px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.6)",
                        letterSpacing: "0.01em"
                      }}
                    >
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-center" style={{ gap: "clamp(0.375rem, 1vw, 0.75rem)" }}>
                          <span className="bg-primary rounded-full" style={{ width: "clamp(0.375rem, 0.75vw, 0.5rem)", height: "clamp(0.375rem, 0.75vw, 0.5rem)", minWidth: "clamp(0.375rem, 0.75vw, 0.5rem)", minHeight: "clamp(0.375rem, 0.75vw, 0.5rem)" }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${industry.reverse ? "lg:order-1" : ""}`} style={{ minHeight: "clamp(18.75rem, 40vw, 25rem)", height: "100%", aspectRatio: "4 / 3" }}>
                  {/* Background images replacing gradient overlays */}
                  {index === 0 && (
                    <div 
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url(${industryImg1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />
                  )}
                  {index === 1 && (
                    <div 
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url(${industryImg2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />
                  )}
                  {index === 2 && (
                    <div 
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url(${industryImg3})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />
                  )}
                  {index !== 0 && index !== 1 && index !== 2 && (
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="absolute inset-0 w-full h-full object-cover"
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
