
import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TechSection from "@/components/sections/TechSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Alfredo Cortez - Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Portfólio de Alfredo Cortez, desenvolvedor Full Stack especializado em React, Node.js, TypeScript e mais. Construindo soluções web modernas e escaláveis."
        />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
