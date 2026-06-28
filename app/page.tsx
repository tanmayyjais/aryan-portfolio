import { BiographySection } from "@/components/biography-section";
import { CinematicLoader } from "@/components/cinematic-loader";
import { ContactSection } from "@/components/contact-section";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { FeaturedFilmSection } from "@/components/featured-film-section";
import { FilmGrain } from "@/components/film-grain";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { PhotographySection } from "@/components/photography-section";
import { ServicesSection } from "@/components/services-section";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { VisualNarrativesSection } from "@/components/visual-narratives-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <SmoothScrollProvider />
      <CinematicLoader />
      <CursorSpotlight />
      <FilmGrain />

      <div className="relative z-10">
        <HeroSection />
        <FeaturedFilmSection />
        <VisualNarrativesSection />
        <PhotographySection />
        <BiographySection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
