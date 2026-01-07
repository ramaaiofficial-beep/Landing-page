/**
 * Shared style utilities for consistent responsive design across all components
 */

// Common typography styles
export const typography = {
  // Section headings (h2)
  sectionHeading: {
    alignSelf: "stretch" as const,
    color: "#FAFAFA",
    textAlign: "center" as const,
    fontFamily: '"Public Sans", sans-serif',
    fontStyle: "normal" as const,
    fontWeight: 500,
    lineHeight: "normal" as const,
    marginBottom: "clamp(0.5rem, 1.2vw, 0.75rem)",
  },
  
  // Section heading with Spline Sans font
  sectionHeadingSpline: {
    alignSelf: "stretch" as const,
    color: "#FAFAFA",
    textAlign: "center" as const,
    fontFamily: '"Spline Sans", sans-serif',
    fontStyle: "normal" as const,
    fontWeight: 500,
    lineHeight: "normal" as const,
    marginBottom: "clamp(0.5rem, 1.2vw, 0.75rem)",
  },

  // Section paragraphs
  sectionParagraph: {
    alignSelf: "stretch" as const,
    color: "#777777",
    textAlign: "center" as const,
    fontFamily: '"Public Sans", sans-serif',
    fontStyle: "normal" as const,
    fontWeight: 400,
    lineHeight: "normal" as const,
    marginTop: 0,
  },

  // Card titles (h3)
  cardTitle: {
    color: "#FAFAFA",
    fontFamily: '"Public Sans", sans-serif',
    fontStyle: "normal" as const,
    fontWeight: 400,
    lineHeight: "normal" as const,
  },

  // Card descriptions
  cardDescription: {
    color: "#777777",
    fontFamily: '"Public Sans", sans-serif',
    fontStyle: "normal" as const,
    fontWeight: 400,
    lineHeight: "normal" as const,
  },
};

// Responsive font sizes
export const fontSizes = {
  sectionHeading: "clamp(1.5rem, 3.5vw, 2.5rem)",
  sectionHeadingLarge: "clamp(1.75rem, 4vw, 3rem)",
  sectionParagraph: "clamp(0.875rem, 1.6vw, 1.25rem)",
  cardTitle: "clamp(1.5rem, 3vw, 2rem)",
  cardDescription: "clamp(1rem, 1.5vw, 1.25rem)",
  bodyText: "clamp(0.875rem, 1.5vw, 1.125rem)",
};

// Common spacing
export const spacing = {
  sectionGap: "clamp(1.5rem, 4vw, 2.5rem)",
  cardGap: "clamp(1rem, 3vw, 2rem)",
  itemGap: "clamp(0.75rem, 2vw, 1.25rem)",
  smallGap: "clamp(0.5rem, 1.5vw, 1rem)",
};

// Common container styles
export const containers = {
  sectionHeader: {
    marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
  },
  sectionHeaderSmall: {
    marginBottom: "clamp(0.4rem, 1.2vw, 0.75rem)",
  },
};
