
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma completa de e-commerce com painel administrativo, pagamentos integrados e sistema de inventário.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e integração com calendário.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Dashboard financeiro com visualização de dados, relatórios personalizados e análise de tendências.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Angular", "Python", "FastAPI", "Charts.js"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Social Media API",
      description: "API REST para rede social com autenticação JWT, upload de mídia e sistema de notificações.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      technologies: ["Node.js", "TypeScript", "Redis", "AWS S3"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Real Estate Portal",
      description: "Portal imobiliário com busca avançada, tours virtuais e sistema de agentes.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      description: "Sistema de monitoramento IoT com dashboards em tempo real e alertas automáticos.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "InfluxDB", "MQTT"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, desde aplicações web complexas até APIs robustas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative hover-lift animate-fade-in ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-effect rounded-2xl overflow-hidden h-full">
                {/* Project Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Ver Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Destaque
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Ver Todos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
