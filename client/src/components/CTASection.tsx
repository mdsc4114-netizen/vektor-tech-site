import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-[#0A2540] via-[#1a3a5c] to-[#2563EB] relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663203308141/mzbWExD2iPSfM7bHAnK5Dj/cta-background-24anerfqpt6spxhtrGUA2h.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('cta.titulo')}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            {t('cta.descricao')}
          </p>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('contato')}
            className="bg-white text-[#0A2540] hover:bg-gray-100 font-bold py-6 px-10 rounded-lg inline-flex items-center gap-2 group"
          >
            {t('cta.botao')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-200 text-sm">
              Ou entre em contato conosco: <span className="font-semibold text-white">contato@vektortech.tech</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
