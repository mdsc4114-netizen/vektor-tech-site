// i18n configuration for Vektor Tech landing page
// Supports Portuguese (PT-BR) and English (EN-US)

export type Language = 'pt-BR' | 'en-US';

export const translations = {
  'pt-BR': {
    // Header
    header: {
      inicio: 'Início',
      solucoes: 'Soluções',
      servicos: 'Serviços',
      sobre: 'Sobre',
      contato: 'Contato',
      faleConosco: 'Fale Conosco',
    },
    // Hero Section
    hero: {
      titulo: 'Tecnologia que impulsiona resultados.',
      subtitulo: 'Automatizamos processos e desenvolvemos soluções digitais para acelerar o crescimento da sua empresa.',
      btnDiagnostico: 'Solicitar Diagnóstico Gratuito',
      btnSolucoes: 'Conhecer Soluções',
    },
    // About Section
    about: {
      titulo: 'Sobre a Vektor Tech',
      descricao: 'Somos uma empresa especializada em tecnologia, automação e inteligência de dados. Nossa missão é transformar negócios através de soluções digitais inovadoras e escaláveis.',
      missao: 'Missão',
      missaoDesc: 'Impulsionar o crescimento de empresas através de tecnologia e automação inteligente.',
      visao: 'Visão',
      visaoDesc: 'Ser a parceira de transformação digital mais confiável do mercado.',
      valores: 'Valores',
      valoresDesc: 'Inovação, Qualidade, Confiabilidade e Foco em Resultados.',
    },
    // Services Section
    services: {
      titulo: 'Nossos Serviços',
      descricao: 'Oferecemos soluções completas para transformação digital e automação de processos.',
      servicos: [
        {
          titulo: 'Automação de Processos e Vendas',
          descricao: 'Otimize seus processos com automação inteligente e aumente sua produtividade.',
        },
        {
          titulo: 'Desenvolvimento de Software e SaaS',
          descricao: 'Desenvolvemos soluções customizadas e plataformas SaaS escaláveis.',
        },
        {
          titulo: 'Integração de Sistemas e APIs',
          descricao: 'Conecte seus sistemas e maximize a eficiência operacional.',
        },
        {
          titulo: 'Inteligência de Dados e Analytics',
          descricao: 'Extraia insights valiosos dos seus dados para tomar decisões melhores.',
        },
        {
          titulo: 'Consultoria em Transformação Digital',
          descricao: 'Guiamos sua empresa através da jornada de transformação digital.',
        },
      ],
    },
    // Segments Section
    segments: {
      titulo: 'Soluções por Segmento',
      descricao: 'Soluções especializadas para diferentes setores e necessidades.',
      segmentos: [
        {
          titulo: 'Clínicas Médicas',
          descricao: 'Automação de agendamentos, gestão de pacientes e integração com sistemas de saúde.',
        },
        {
          titulo: 'Escritórios de Advocacia',
          descricao: 'Gestão de processos jurídicos, automação de documentos e controle de prazos.',
        },
        {
          titulo: 'Corretores de Planos de Saúde',
          descricao: 'Plataforma de gestão de clientes, cotações automatizadas e integração com operadoras.',
        },
        {
          titulo: 'Pequenas e Médias Empresas',
          descricao: 'Soluções escaláveis para crescimento e otimização operacional.',
        },
      ],
    },
    // Differentials Section
    differentials: {
      titulo: 'Nossos Diferenciais',
      descricao: 'Por que escolher a Vektor Tech para sua transformação digital.',
      diferenciais: [
        {
          titulo: 'Tecnologia de Ponta',
          descricao: 'Utilizamos as tecnologias mais modernas e eficientes do mercado.',
        },
        {
          titulo: 'Soluções Escaláveis',
          descricao: 'Nossas soluções crescem com seu negócio, sem limitações.',
        },
        {
          titulo: 'Atendimento Consultivo',
          descricao: 'Atuamos como parceiros estratégicos, não apenas fornecedores.',
        },
        {
          titulo: 'Foco em Resultados',
          descricao: 'Cada projeto é orientado por métricas e resultados mensuráveis.',
        },
      ],
    },
    // CTA Section
    cta: {
      titulo: 'Pronto para transformar o seu negócio com tecnologia?',
      descricao: 'Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer.',
      botao: 'Solicitar Contato',
    },
    // Contact Form
    contact: {
      titulo: 'Entre em Contato',
      descricao: 'Preencha o formulário abaixo e nossa equipe entrará em contato em breve.',
      nome: 'Nome',
      email: 'E-mail',
      telefone: 'Telefone',
      empresa: 'Empresa',
      mensagem: 'Mensagem',
      enviar: 'Enviar',
      enviando: 'Enviando...',
      sucesso: 'Mensagem enviada com sucesso!',
      erro: 'Erro ao enviar mensagem. Tente novamente.',
    },
    // Footer
    footer: {
      sobre: 'Sobre',
      privacidade: 'Política de Privacidade',
      termos: 'Termos de Serviço',
      direitos: '© 2024 Vektor Tech. Todos os direitos reservados.',
      email: 'contato@vektortech.tech',
    },
  },
  'en-US': {
    // Header
    header: {
      inicio: 'Home',
      solucoes: 'Solutions',
      servicos: 'Services',
      sobre: 'About',
      contato: 'Contact',
      faleConosco: 'Get in Touch',
    },
    // Hero Section
    hero: {
      titulo: 'Technology that drives results.',
      subtitulo: 'We automate processes and develop digital solutions to accelerate your company\'s growth.',
      btnDiagnostico: 'Request Free Diagnosis',
      btnSolucoes: 'Explore Solutions',
    },
    // About Section
    about: {
      titulo: 'About Vektor Tech',
      descricao: 'We are a company specialized in technology, automation and data intelligence. Our mission is to transform businesses through innovative and scalable digital solutions.',
      missao: 'Mission',
      missaoDesc: 'Drive business growth through intelligent technology and automation.',
      visao: 'Vision',
      visaoDesc: 'Be the most trusted digital transformation partner in the market.',
      valores: 'Values',
      valoresDesc: 'Innovation, Quality, Reliability and Results-Driven Focus.',
    },
    // Services Section
    services: {
      titulo: 'Our Services',
      descricao: 'We offer complete solutions for digital transformation and process automation.',
      servicos: [
        {
          titulo: 'Process and Sales Automation',
          descricao: 'Optimize your processes with intelligent automation and increase productivity.',
        },
        {
          titulo: 'Software Development and SaaS',
          descricao: 'We develop custom solutions and scalable SaaS platforms.',
        },
        {
          titulo: 'Systems and APIs Integration',
          descricao: 'Connect your systems and maximize operational efficiency.',
        },
        {
          titulo: 'Data Intelligence and Analytics',
          descricao: 'Extract valuable insights from your data to make better decisions.',
        },
        {
          titulo: 'Digital Transformation Consulting',
          descricao: 'We guide your company through the digital transformation journey.',
        },
      ],
    },
    // Segments Section
    segments: {
      titulo: 'Solutions by Segment',
      descricao: 'Specialized solutions for different sectors and needs.',
      segmentos: [
        {
          titulo: 'Medical Clinics',
          descricao: 'Appointment automation, patient management and health systems integration.',
        },
        {
          titulo: 'Law Offices',
          descricao: 'Legal process management, document automation and deadline control.',
        },
        {
          titulo: 'Health Insurance Brokers',
          descricao: 'Client management platform, automated quotes and operator integration.',
        },
        {
          titulo: 'Small and Medium Enterprises',
          descricao: 'Scalable solutions for growth and operational optimization.',
        },
      ],
    },
    // Differentials Section
    differentials: {
      titulo: 'Our Differentials',
      descricao: 'Why choose Vektor Tech for your digital transformation.',
      diferenciais: [
        {
          titulo: 'Cutting-Edge Technology',
          descricao: 'We use the most modern and efficient technologies in the market.',
        },
        {
          titulo: 'Scalable Solutions',
          descricao: 'Our solutions grow with your business, without limitations.',
        },
        {
          titulo: 'Consultative Approach',
          descricao: 'We act as strategic partners, not just suppliers.',
        },
        {
          titulo: 'Results-Focused',
          descricao: 'Every project is guided by metrics and measurable results.',
        },
      ],
    },
    // CTA Section
    cta: {
      titulo: 'Ready to transform your business with technology?',
      descricao: 'Get in touch with us and discover how we can help your company grow.',
      botao: 'Request Contact',
    },
    // Contact Form
    contact: {
      titulo: 'Get in Touch',
      descricao: 'Fill out the form below and our team will contact you soon.',
      nome: 'Name',
      email: 'Email',
      telefone: 'Phone',
      empresa: 'Company',
      mensagem: 'Message',
      enviar: 'Send',
      enviando: 'Sending...',
      sucesso: 'Message sent successfully!',
      erro: 'Error sending message. Please try again.',
    },
    // Footer
    footer: {
      sobre: 'About',
      privacidade: 'Privacy Policy',
      termos: 'Terms of Service',
      direitos: '© 2024 Vektor Tech. All rights reserved.',
      email: 'contact@vektortech.tech',
    },
  },
};

export function getTranslation(lang: Language, path: string): string {
  const keys = path.split('.');
  let value: any = translations[lang];
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path;
    }
  }
  
  return typeof value === 'string' ? value : path;
}

export function getLanguageFromPath(): Language {
  const path = window.location.pathname;
  if (path.startsWith('/en')) {
    return 'en-US';
  }
  return 'pt-BR';
}

export function getLanguageFromBrowser(): Language {
  const lang = navigator.language || 'pt-BR';
  if (lang.startsWith('en')) {
    return 'en-US';
  }
  return 'pt-BR';
}
