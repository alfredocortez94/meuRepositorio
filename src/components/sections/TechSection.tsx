
import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/SectionHeader";

const TechSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const technologies = React.useMemo(() => [
    {
      category: "Frontend",
      techs: [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
        { name: "Vue.js", icon: "🔥", color: "from-green-400 to-emerald-400" },
        { name: "Angular", icon: "🅰️", color: "from-red-400 to-pink-400" },
        { name: "TypeScript", icon: "📘", color: "from-blue-500 to-indigo-500" },
        { name: "Next.js", icon: "▲", color: "from-gray-600 to-gray-800" },
        { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", icon: "💚", color: "from-green-500 to-emerald-600" },
        { name: "Python", icon: "🐍", color: "from-yellow-400 to-yellow-600" },
        { name: "Java", icon: "☕", color: "from-orange-500 to-red-500" },
        { name: "Express.js", icon: "🚀", color: "from-gray-500 to-gray-700" },
        { name: "NestJS", icon: "🦅", color: "from-red-500 to-pink-600" },
        { name: "GraphQL", icon: "🔗", color: "from-pink-500 to-purple-600" }
      ]
    },
    {
      category: "Database & Cloud",
      techs: [
        { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-700" },
        { name: "MongoDB", icon: "🍃", color: "from-green-600 to-emerald-700" },
        { name: "Redis", icon: "🔴", color: "from-red-500 to-red-700" },
        { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500" },
        { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-600" },
        { name: "Kubernetes", icon: "⚙️", color: "from-blue-600 to-purple-600" }
      ]
    }
  ], []);

  return (
    <section
      className={cn(
        "py-20 relative",
        isIntersecting ? "animate-fade-in" : "opacity-0"
      )}
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Tecnologias que Domino"
          description="Trabalho com as principais tecnologias do mercado para criar soluções completas e escaláveis"
        />

        <div className="space-y-16">
          {technologies.map((category, categoryIndex) => (
            <div key={category.category} style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="group relative hover-lift"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s` }}
                  >
                    <div className="glass-effect rounded-xl p-6 text-center h-full">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center text-2xl`}>
                        {tech.icon}
                      </div>
                      <h4 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                        {tech.name}
                      </h4>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
