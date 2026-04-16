import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const footerLinks = [
    { label: t('footer.sobre'), href: '#sobre' },
    { label: t('footer.privacidade'), href: '#' },
    { label: t('footer.termos'), href: '#' },
  ];

  return (
    <footer className="bg-[#0A2540] text-white">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#00C2FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="font-bold text-lg">Vektor Tech</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando negócios através de tecnologia, automação e inteligência de dados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#00C2FF] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                'Automação',
                'Desenvolvimento',
                'Integração',
                'Consultoria',
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#00C2FF] transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[#00C2FF] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@vektortech.tech"
                  className="text-gray-300 hover:text-[#00C2FF] transition-colors text-sm break-all"
                >
                  contato@vektortech.tech
                </a>
              </div>
              <p className="text-gray-300 text-sm">
                São Paulo, SP - Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright and Tagline */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm font-semibold">
              © 2026 Vektor Tech. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Tecnologia que impulsiona resultados.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  title={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="border-t border-gray-700 py-4">
        <div className="container flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-[#00C2FF] transition-colors text-sm font-semibold"
          >
            ↑ Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
}
