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

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '500+', label: 'Clientes Satisfeitos' },
            { number: '10+', label: 'Anos de Experiência' },
            { number: '98%', label: 'Taxa de Satisfação' },
            { number: '24/7', label: 'Suporte Dedicado' },
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-[#2563EB] mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
