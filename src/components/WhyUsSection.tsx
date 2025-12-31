import image1 from "@/assets/Background+Overlay+Shadow+OverlayBlur (1).png";
import image2 from "@/assets/Background+Overlay+Shadow+OverlayBlur (2).png";
import image3 from "@/assets/Background+Overlay+Shadow+OverlayBlur (3).png";

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
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 
            style={{
              alignSelf: "stretch",
              color: "#FAFAFA",
              textAlign: "center",
              fontFamily: '"Public Sans", sans-serif',
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal"
            }}
            className="mb-4"
          >
            Why <span 
              style={{
                background: "linear-gradient(180deg, #FD5009 0%, #EF1005 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"Public Sans", sans-serif',
                fontSize: "48px",
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
              alignSelf: "stretch",
              color: "#777777",
              textAlign: "center",
              fontFamily: '"Public Sans", sans-serif',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal"
            }}
          >
            Our approach combines culture, ethics, and engineering to deliver practical AI
            solutions that scale responsibly across industries and communities.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img 
                src={image} 
                alt={`Feature ${index + 1}`}
                style={{ 
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
