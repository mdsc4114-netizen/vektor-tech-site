import { useLanguage } from '@/contexts/LanguageContext';
import { Stethoscope, Briefcase, Heart, TrendingUp } from 'lucide-react';

export default function SegmentsSection() {
  const { t } = useLanguage();

  const segmentIcons = [Stethoscope, Briefcase, Heart, TrendingUp];
  const segmentsData = (t('segments.segmentos') as unknown as Array<{ titulo: string; descricao: string }>);

  return (
    <section id="solucoes" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            {t('segments.titulo')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('segments.descricao')}
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {segmentsData.map((segment, index) => {
            const Icon = segmentIcons[index] || TrendingUp;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-xl border border-gray-200 hover:border-[#00C2FF] hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663203308141/mzbWExD2iPSfM7bHAnK5Dj/segments-pattern-8HuHS9dpjqBTztq2WGBCw2.webp)',
                      backgroundSize: '200px 200px',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#00C2FF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">{segment.titulo}</h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{segment.descricao}</p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center text-[#2563EB] font-semibold group-hover:gap-2 transition-all">
                    <span className="text-sm">Explorar solução</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent my-12" />

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
            Não encontrou seu segmento?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Desenvolvemos soluções customizadas para qualquer tipo de negócio. Entre em contato e conheça como podemos ajudar.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#2563EB] to-[#00C2FF] text-white font-semibold rounded-lg hover:shadow-lg transition-shadow">
            Solicitar Solução Customizada
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
