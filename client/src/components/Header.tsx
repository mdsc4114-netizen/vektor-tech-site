import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Olá! Visitei o site da Vektor Tech e gostaria de saber mais sobre as soluções de automação e tecnologia para empresas.'
  );
  const whatsappUrl = `https://wa.me/55?text=${whatsappMessage}`;

  const navItems = [
    { label: t('header.inicio'), id: 'inicio' },
    { label: t('header.solucoes'), id: 'solucoes' },
    { label: t('header.servicos'), id: 'servicos' },
    { label: t('header.sobre'), id: 'sobre' },
    { label: t('header.contato'), id: 'contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-[#0A2540] to-[#2563EB] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="hidden sm:inline font-bold text-lg text-[#0A2540]">Vektor Tech</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-[#2563EB] font-medium transition-colors text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-4">


          {/* CTA Button - Desktop */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:shadow-lg transition-shadow text-white font-semibold py-2 px-6 rounded-lg items-center gap-2 group"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-700 hover:text-[#2563EB] font-medium transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:shadow-lg transition-shadow text-white font-semibold py-2 px-6 rounded-lg flex items-center justify-center gap-2 mt-2"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
