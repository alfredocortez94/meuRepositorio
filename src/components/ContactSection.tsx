
import { Github, Linkedin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Vamos Conversar?
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato para discutirmos como posso ajudar a transformar suas ideias em realidade.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12 tech-glow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 gradient-text">
                    Informações de Contato
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">E-mail</p>
                        <a href="mailto:joao@exemplo.com" className="text-primary hover:underline">
                          joao@exemplo.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Localização</p>
                        <p className="text-muted-foreground">São Paulo, Brasil</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <a href="https://wa.me/5511999999999" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                          +55 (11) 99999-9999
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-8 relative">
                  <div className="absolute inset-0 gradient-primary rounded-full animate-pulse opacity-30"></div>
                  <div className="absolute inset-4 glass-effect rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">💬</div>
                      <p className="text-lg font-semibold gradient-text">
                        Pronto para<br />
                        conversar?
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Escolha a melhor forma de entrar em contato e vamos discutir seu próximo projeto!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            © 2024 João Silva. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Desenvolvido com ❤️ e muito ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
