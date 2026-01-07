import { typography, fontSizes } from "@/lib/styles";

export const CTASection = () => {
  const buttonBaseStyle = {
    height: "40px",
    padding: "8px 24px",
    borderRadius: "8px",
    fontFamily: '"Public Sans", sans-serif',
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "normal",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "none"
  };

  return (
    <section className="section-padding cta-gradient noise-overlay relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(253, 80, 9, 0.15) 0%, rgba(253, 80, 9, 0.05) 50%, transparent 100%)"
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            style={{
              ...typography.sectionHeadingSpline,
              fontSize: fontSizes.sectionHeadingLarge,
              fontWeight: 600,
              padding: "0 clamp(0.5rem, 2vw, 1rem)",
              whiteSpace: "pre-wrap"
            }}
          >
            Experience the Future of{'\n'}Human-AI Interaction
          </h2>
          <div 
            style={{
              ...typography.sectionParagraph,
              fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
              marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
              maxWidth: "clamp(20rem, 80vw, 42rem)",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0 clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            <div style={{ display: "block", textAlign: "center", whiteSpace: "nowrap" }}>Our platform seamlessly integrates learning, wellness, and</div>
            <div style={{ display: "block", textAlign: "center", whiteSpace: "nowrap" }}>engagement into one intelligent companion that grows with you.</div>
          </div>
          <div className="flex items-center justify-center">
            <button
              style={{
                ...buttonBaseStyle,
                backgroundColor: "rgba(240, 240, 240, 0.05)",
                color: "#FAFAFA",
                border: "1px solid #FAFAFA"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(240, 240, 240, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(240, 240, 240, 0.05)";
              }}
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
