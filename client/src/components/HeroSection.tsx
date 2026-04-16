import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663203308141/mzbWExD2iPSfM7bHAnK5Dj/hero-background-3Fk4tqj7AKJAaK6miohmGy.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">
            {t('hero.titulo')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
            {t('hero.subtitulo')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-[#2563EB] to-[#00C2FF] hover:shadow-lg transition-all duration-300 text-white font-semibold py-6 px-8 rounded-lg group"
            >
              {t('hero.btnDiagnostico')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={() => scrollToSection('contato')}
              variant="outline"
              className="border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/5 font-semibold py-6 px-8 rounded-lg"
            >
              {t('hero.btnSolucoes')}
            </Button>
          </div>


        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C2FF]/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl z-0 transform -translate-x-1/2" />
    </section>
  );
}
