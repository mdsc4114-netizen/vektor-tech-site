import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = t('testimonials.depoimentos');

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4">
            {t('testimonials.titulo')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('testimonials.descricao')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Array.isArray(testimonials) && testimonials.map((testimonial: any, index: number) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#2563EB] text-[#2563EB]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.texto}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-300 pt-4">
                <p className="font-semibold text-[#0A2540] text-lg">
                  {testimonial.autor}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonial.cargo}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            Mais de <span className="font-bold text-[#2563EB]">100+ empresas</span> confiam na Vektor Tech
          </p>
        </div>
      </div>
    </section>
  );
}
