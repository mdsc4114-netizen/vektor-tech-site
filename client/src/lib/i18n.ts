// Translations for Vektor Tech Landing Page
// Currently supports Portuguese (PT-BR) only
// Structure prepared for future internationalization (i18n)

export type Language = 'pt-BR';

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
      btnDiagnostico: 'Quero automatizar meu negócio',
      btnSolucoes: 'Receber diagnóstico gratuito',
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
      titulo: 'Pronto para transformar seu negócio com tecnologia?',
      descricao: 'Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer.',
      botao: 'Agendar diagnóstico gratuito',
      botaoWhatsApp: 'Falar no WhatsApp',
    },
    // Contact Form
    contact: {
      titulo: 'Fale Conosco',
      descricao: 'Preencha o formulário abaixo e nosso time entrará em contato em breve.',
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
};

export const getTranslation = (language: Language, key: string): any => {
  const keys = key.split('.');
  let value: any = translations[language];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return value;
};
