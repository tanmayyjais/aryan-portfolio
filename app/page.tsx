import { BiographySection } from "@/components/biography-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { MotionSection } from "@/components/motion-section";
import { SelectedWorksSection } from "@/components/selected-works-section";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { StillsSection } from "@/components/stills-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <SmoothScrollProvider />

      <div className="relative z-10">
        <HeroSection />
        <SelectedWorksSection />
        <MotionSection />
        <StillsSection />
        <BiographySection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
