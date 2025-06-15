
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
