import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Code, Plug, BarChart3, Lightbulb } from 'lucide-react';

interface Service {
  titulo: string;
  descricao: string;
}

export default function ServicesSection() {
  const { t } = useLanguage();

  const serviceIcons = [Zap, Code, Plug, BarChart3, Lightbulb];
  
  // Get services data - handle both string and array returns
  const servicesRaw = t('services.servicos');
  const servicesData: Service[] = Array.isArray(servicesRaw) 
    ? servicesRaw 
    : [
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
      ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            {t('services.titulo')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('services.descricao')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[index] || Zap;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-[#00C2FF] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#00C2FF] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">{service.titulo}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">{service.descricao}</p>

                {/* Link */}
                <div className="flex items-center text-[#2563EB] font-semibold group-hover:gap-2 transition-all">
                  <span>Saiba mais</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent my-16" />

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-700 mb-6">
            Quer conhecer mais sobre como podemos ajudar seu negócio?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#2563EB] to-[#00C2FF] text-white font-semibold rounded-lg hover:shadow-lg transition-shadow">
            Agendar Consultoria
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
