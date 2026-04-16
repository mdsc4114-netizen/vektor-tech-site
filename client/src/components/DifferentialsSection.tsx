import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Layers, Users, Target } from 'lucide-react';

interface Differential {
  titulo: string;
  descricao: string;
}

export default function DifferentialsSection() {
  const { t } = useLanguage();

  const differentialIcons = [Zap, Layers, Users, Target];
  
  // Get differentials data - handle both string and array returns
  const differentialsRaw = t('differentials.diferenciais');
  const differentialsData: Differential[] = Array.isArray(differentialsRaw)
    ? differentialsRaw
    : [
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
      ];

  // Institutional values replacing fake metrics
  const institutionalValues = [
    {
      titulo: 'Soluções sob medida',
      descricao: 'Projetos adaptados à realidade e aos objetivos de cada negócio.',
    },
    {
      titulo: 'Foco em resultados reais',
      descricao: 'Tecnologia aplicada com objetivo comercial, eficiência e crescimento.',
    },
    {
      titulo: 'Atendimento consultivo',
      descricao: 'Estratégia, implementação e evolução contínua para cada cliente.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            {t('differentials.titulo')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('differentials.descricao')}
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentialsData.map((differential, index) => {
            const Icon = differentialIcons[index] || Target;
            return (
              <div
                key={index}
                className="group flex gap-6 p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-[#00C2FF] hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#00C2FF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">{differential.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed">{differential.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent my-16" />

        {/* Institutional Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {institutionalValues.map((value, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-[#2563EB] hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">{value.titulo}</h3>
              <p className="text-gray-600 leading-relaxed text-base">{value.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
