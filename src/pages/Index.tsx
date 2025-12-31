import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VisionMissionSection } from "@/components/VisionMissionSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { CTASection } from "@/components/CTASection";
import { CareersSection } from "@/components/CareersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <VisionMissionSection />
        <WhyUsSection />
        <CapabilitiesSection />
        <IndustriesSection />
        <CTASection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
