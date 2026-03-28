import { AboutSection } from "@/components/about-section";
import { CinematicLoader } from "@/components/cinematic-loader";
import { ContactSection } from "@/components/contact-section";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { FilmGrain } from "@/components/film-grain";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ShowreelSection } from "@/components/showreel-section";
import { SkillsSection } from "@/components/skills-section";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <SmoothScrollProvider />
      <CinematicLoader />
      <CursorSpotlight />
      <FilmGrain />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ShowreelSection />
        <SkillsSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
