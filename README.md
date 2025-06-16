
# 🚀 Portfólio Pessoal - Alfredo Cortez

Um portfólio moderno e responsivo para Desenvolvedor Full Stack, construído com React, TypeScript e Tailwind CSS.


## ✨ Características

- **Design Moderno**: Interface limpa e tecnológica inspirada no estilo Apple
- **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Performance Otimizada**: Carregamento rápido e experiência fluida
- **SEO Friendly**: Estrutura otimizada para mecanismos de busca
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Tema Dark**: Paleta de cores focada em tecnologia

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool moderna e rápida
- **Shadcn/UI** - Componentes UI acessíveis e customizáveis
- **Lucide React** - Ícones modernos e limpos
- **React Router** - Roteamento para aplicações React

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── HeroSection.tsx     # Seção principal/cabeçalho
│   ├── AboutSection.tsx    # Seção sobre mim
│   ├── TechSection.tsx     # Seção de tecnologias
│   ├── ProjectsSection.tsx # Seção de projetos
│   ├── ContactSection.tsx  # Seção de contato
│   └── ui/                 # Componentes base do Shadcn/UI
├── pages/              # Páginas da aplicação
│   ├── Index.tsx          # Página principal
│   └── NotFound.tsx       # Página 404
├── lib/                # Utilitários e configurações
├── hooks/              # Hooks customizados
├── index.css           # Estilos globais e variáveis CSS
└── main.tsx           # Ponto de entrada da aplicação
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/portfolio-joao-silva.git
cd portfolio-joao-silva
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em modo desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador:**
```
http://localhost:8080
```

### Comandos Disponíveis

```bash
# Executar em modo desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Visualizar build de produção
npm run preview

# Executar linter
npm run lint
```

## 🎨 Personalização

### Cores e Tema

As cores do sistema podem ser personalizadas no arquivo `src/index.css`:

```css
:root {
  --background: 222 84% 4.9%;      /* Fundo principal */
  --foreground: 210 40% 98%;       /* Texto principal */
  --primary: 210 40% 98%;          /* Cor primária */
  --accent: 217 32.6% 17.5%;       /* Cor de destaque */
  /* ... outras variáveis de cor */
}
```

### Gradientes

Os gradientes podem ser ajustados nas classes utilitárias:

```css
.gradient-primary {
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 50%, #006699 100%);
}
```

### Conteúdo

Para personalizar o conteúdo do portfólio, edite os seguintes arquivos:

- `src/components/HeroSection.tsx` - Nome, título e apresentação inicial
- `src/components/AboutSection.tsx` - Biografia e experiência
- `src/components/TechSection.tsx` - Tecnologias e habilidades
- `src/components/ProjectsSection.tsx` - Projetos realizados
- `src/components/ContactSection.tsx` - Informações de contato

## 🌐 Deploy

### Netlify
1. Conecte seu repositório no Netlify
2. Configure o comando de build: `npm run build`
3. Configure o diretório de publicação: `dist`

### Vercel
1. Conecte seu repositório no Vercel
2. O deploy será automático com as configurações padrão do Vite

### GitHub Pages
1. Instale o plugin: `npm install --save-dev gh-pages`
2. Adicione no `package.json`:
```json
{
  "homepage": "https://seu-usuario.github.io/portfolio-joao-silva",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Execute: `npm run deploy`

## 🔧 Configurações Adicionais

### SEO

As meta tags podem ser personalizadas no arquivo `index.html`:

```html
<title>João Silva - Desenvolvedor Full Stack</title>
<meta name="description" content="Sua descrição personalizada..." />
<meta property="og:title" content="Seu título personalizado..." />
```

### Analytics

Para adicionar Google Analytics, adicione o script no `index.html` ou use uma biblioteca como `react-ga4`.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato


---

⭐ **Se este projeto te ajudou, deixe uma estrela!**
