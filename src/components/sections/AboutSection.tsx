
import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/SectionHeader";

const AboutSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="sobre"
      ref={ref}
      className={cn(
        "py-20 relative",
        isIntersecting ? "animate-fade-in" : "opacity-0"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Minha Jornada" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um desenvolvedor Full Stack apaixonado por criar soluções digitais que fazem a diferença. 
                Com mais de 5 anos de experiência, especializo-me em transformar ideias complexas em 
                aplicações web modernas e escaláveis.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha jornada começou com curiosidade sobre como os sites funcionam, e hoje trabalho 
                com as mais modernas tecnologias do mercado. Acredito que o código limpo e a experiência 
                do usuário são fundamentais para o sucesso de qualquer projeto.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Quando não estou programando, gosto de contribuir com a comunidade open source, 
                aprender novas tecnologias e compartilhar conhecimento através de artigos e palestras.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Disponível para projetos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Remoto ou presencial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Teresina, Brasil</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-effect rounded-2xl p-8 tech-glow">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Experiência & Valores
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                      2+
                    </div>
                    <div>
                      <h4 className="font-semibold">Anos de Experiência</h4>
                      <p className="text-sm text-muted-foreground">Desenvolvimento Full Stack</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                      10+
                    </div>
                    <div>
                      <h4 className="font-semibold">Projetos Entregues</h4>
                      <p className="text-sm text-muted-foreground">Aplicações web e mobile</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                      10+
                    </div>
                    <div>
                      <h4 className="font-semibold">Tecnologias</h4>
                      <p className="text-sm text-muted-foreground">Frontend e Backend</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
