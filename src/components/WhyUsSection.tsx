import image1 from "@/assets/Tabpanel.png";
import image2 from "@/assets/Tabpanel (1).png";
import image3 from "@/assets/Tabpanel (2).png";
import { typography, fontSizes, containers } from "@/lib/styles";

const images = [
  image1,
  image2,
  image3,
];

export const WhyUsSection = () => {
  return (
    <section className="section-padding bg-background noise-overlay">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto px-2" style={containers.sectionHeaderSmall}>
          <h2 
            style={{
              ...typography.sectionHeading,
              fontSize: fontSizes.sectionHeadingLarge,
            }}
          >
            Why <span 
              style={{
                background: "linear-gradient(180deg, #FD5009 0%, #EF1005 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"Public Sans", sans-serif',
                fontSize: fontSizes.sectionHeadingLarge,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal"
              }}
            >
              RAMA AI
            </span>
          </h2>
          <p 
            style={{
              ...typography.sectionParagraph,
              fontSize: fontSizes.sectionParagraph,
            }}
          >
            Our approach combines culture, ethics, and engineering to deliver practical AI
            solutions that scale responsibly across industries and communities.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ gap: "clamp(1rem, 3vw, 1.5rem)" }}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                borderRadius: "clamp(1rem, 2vw, 1.25rem)",
                overflow: "hidden",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "1 / 1",
                minHeight: "clamp(12rem, 30vw, 20rem)"
              }}
            >
              {/* Images - same for desktop and mobile */}
              <img 
                src={image} 
                alt={`Feature ${index + 1}`}
                className="w-full h-full"
                style={{ 
                  objectFit: "contain"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
