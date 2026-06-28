import { HeroSection } from "@/components/hero-section";
import { BiographySection } from "@/components/biography-section";
import { SelectedWorksSection } from "@/components/selected-works-section";
import { GallerySection } from "@/components/gallery-section";
import { InstagramSection } from "@/components/instagram-section";
import { ProcessSection } from "@/components/process-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export default function HomePage() {
  return (
    <main className="relative bg-[#0a0a0a]">
      <SmoothScrollProvider />
      <HeroSection />
      <BiographySection />
      <SelectedWorksSection />
      <GallerySection />
      <InstagramSection />
      <ProcessSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
