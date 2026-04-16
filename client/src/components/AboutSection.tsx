import { useLanguage } from '../contexts/LanguageContext';
import { Target, Eye, Heart } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.missao'),
      description: t('about.missaoDesc'),
    },
    {
      icon: Eye,
      title: t('about.visao'),
      description: t('about.visaoDesc'),
    },
    {
      icon: Heart,
      title: t('about.valores'),
      description: t('about.valoresDesc'),
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            {t('about.titulo')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('about.descricao')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-xl border border-gray-200 hover:border-[#2563EB] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#00C2FF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent my-12" />

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
              Por que escolher a Vektor Tech?
            </h3>
            <ul className="space-y-4">
              {[
                'Expertise em transformação digital',
                'Equipe altamente qualificada',
                'Soluções customizadas',
                'Suporte contínuo e dedicado',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00C2FF] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="h-96 rounded-xl overflow-hidden shadow-lg"
            style={{
              backgroundImage:
                'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663203308141/mzbWExD2iPSfM7bHAnK5Dj/services-section-bg-R29aHJj2FjwQSdoewB9RSm.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  );
}
