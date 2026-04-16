# Vektor Tech - Landing Page Institucional

Bem-vindo ao repositório da landing page institucional da **Vektor Tech**. Este projeto é uma landing page moderna, responsiva e otimizada para SEO, desenvolvida com as melhores práticas do mercado.

## 🎯 Visão Geral

A Vektor Tech é uma empresa especializada em **tecnologia, automação e inteligência de dados**. Esta landing page apresenta a empresa institucionalmente, destaca seus serviços e soluções, e funciona como um gerador de leads qualificados.

**Slogan:** Tecnologia que impulsiona resultados.

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** - Framework JavaScript para construção de interfaces
- **Vite** - Build tool moderno e rápido
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI acessíveis e customizáveis
- **Lucide React** - Ícones SVG de alta qualidade

### Internacionalização
- **i18n Customizado** - Suporte bilíngue (Português e Inglês)
- **Context API** - Gerenciamento de estado de idioma

### Otimização e Performance
- **Google Analytics** - Rastreamento de métricas
- **Google Tag Manager** - Gerenciamento de tags
- **Formspree** - Integração de formulário de contato
- **Responsive Design** - Mobile-first approach

### Deploy e Versionamento
- **Vercel** - Plataforma de deploy
- **GitHub** - Controle de versão

## 📋 Funcionalidades

### Seções Implementadas

1. **Header** - Navegação responsiva com seletor de idioma
2. **Hero Section** - Proposta de valor com CTA principal
3. **Sobre a Empresa** - Missão, Visão e Valores
4. **Serviços** - 5 serviços principais com ícones
5. **Soluções por Segmento** - 4 segmentos verticais
6. **Diferenciais Competitivos** - 4 diferenciais com estatísticas
7. **Call to Action** - Seção de conversão
8. **Formulário de Contato** - Integrado com Formspree
9. **Footer** - Links, redes sociais e informações de contato

### Características Técnicas

- ✅ **Responsividade Completa** - Desktop, Tablet e Mobile
- ✅ **SEO Otimizado** - Meta tags, Open Graph, Schema.org
- ✅ **Bilíngue** - Português (PT-BR) e Inglês (EN-US)
- ✅ **Acessibilidade** - WCAG 2.1 AA compliance
- ✅ **Performance** - Lighthouse score 90+
- ✅ **Dark Mode Ready** - Estrutura preparada para tema escuro
- ✅ **Análise de Dados** - Google Analytics e GTM integrados

## 🎨 Identidade Visual

### Paleta de Cores
- **Azul Escuro:** #0A2540 (Confiança e Profissionalismo)
- **Azul Vibrante:** #2563EB (Ação e Inovação)
- **Ciano Tecnológico:** #00C2FF (Tecnologia e Futuro)
- **Cinza Grafite:** #1F2933 (Neutralidade)
- **Branco:** #FFFFFF (Clareza)

### Tipografia
- **Títulos:** Poppins (700 - Bold)
- **Subtítulos:** Poppins (600 - SemiBold)
- **Corpo:** Inter (400 - Regular)
- **Destaque:** Inter (600 - SemiBold)

### Design System
- Minimalismo corporativo inspirado em Stripe, Vercel e IBM
- Espaço negativo abundante para clareza
- Transições suaves e micro-interações
- Componentes reutilizáveis e escaláveis

## 📁 Estrutura do Projeto

```
vektor-tech/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── SegmentsSection.tsx
│   │   │   ├── DifferentialsSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── ui/ (shadcn/ui components)
│   │   ├── contexts/
│   │   │   ├── ThemeContext.tsx
│   │   │   └── LanguageContext.tsx
│   │   ├── lib/
│   │   │   └── i18n.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
├── server/
│   └── index.ts
├── shared/
│   └── const.ts
└── README.md
```

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm como gerenciador de pacotes

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/vektor-tech.git
cd vektor-tech

# Instale as dependências
pnpm install
# ou
npm install

# Inicie o servidor de desenvolvimento
pnpm dev
# ou
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Build da aplicação
pnpm build
# ou
npm run build

# Preview da build
pnpm preview
# ou
npm run preview
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Google Analytics
VITE_ANALYTICS_ENDPOINT=https://your-analytics-endpoint
VITE_ANALYTICS_WEBSITE_ID=your-website-id

# Formspree (para formulário de contato)
VITE_FORMSPREE_ID=your-formspree-id

# Google Tag Manager
VITE_GTM_ID=GTM-XXXXXXX
```

### Customização

#### Alterar Cores da Marca
Edite as variáveis CSS em `client/src/index.css`:

```css
--vektor-dark-blue: #0A2540;
--vektor-vibrant-blue: #2563EB;
--vektor-cyan: #00C2FF;
```

#### Adicionar Novo Idioma
1. Adicione as traduções em `client/src/lib/i18n.ts`
2. Atualize o tipo `Language`
3. Use o hook `useLanguage()` nos componentes

#### Modificar Conteúdo
Todas as seções são componentes React em `client/src/components/`. Edite os arquivos correspondentes para alterar o conteúdo.

## 📊 SEO

O projeto inclui otimizações completas para SEO:

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph para compartilhamento social
- ✅ Twitter Card
- ✅ Canonical URL
- ✅ Sitemap (pode ser gerado automaticamente)
- ✅ robots.txt
- ✅ Heading hierarchy correto
- ✅ Alt text em imagens
- ✅ Structured Data (Schema.org)

## 🌐 Internacionalização

O site suporta dois idiomas:

- **Português (PT-BR)** - Idioma padrão
- **Inglês (EN-US)** - Alternativo

O idioma é detectado automaticamente pelo navegador e pode ser alterado manualmente através do botão de seleção de idioma no header.

## 📱 Responsividade

O design é totalmente responsivo com breakpoints:

- **Mobile:** 320px - 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px+

## ♿ Acessibilidade

O projeto segue as diretrizes WCAG 2.1 AA:

- ✅ Contraste de cores adequado
- ✅ Navegação por teclado
- ✅ ARIA labels
- ✅ Semantic HTML
- ✅ Focus indicators
- ✅ Alt text em imagens

## 🔗 Links Úteis

- **Site:** https://vektortech.io
- **Domínio Institucional:** https://vektortech.tech
- **E-mail:** contato@vektortech.tech

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Contribuição

Contribuições são bem-vindas! Por favor, siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato:

- **E-mail:** contato@vektortech.tech
- **LinkedIn:** [Vektor Tech](https://linkedin.com)
- **Twitter:** [@vektortech](https://twitter.com)

---

**Desenvolvido com ❤️ pela Vektor Tech**

Última atualização: 2024
