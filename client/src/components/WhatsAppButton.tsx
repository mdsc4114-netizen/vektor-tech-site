import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = '55'; // Substitua com seu número real
  const whatsappMessage = encodeURIComponent(
    'Olá! Visitei o site da Vektor Tech e gostaria de saber mais sobre as soluções de automação e tecnologia para empresas.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group"
        title="Fale conosco no WhatsApp"
        aria-label="Abrir WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-20 right-0 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap animate-in fade-in duration-200">
            Fale com um especialista
            <div className="absolute bottom-0 right-4 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
          </div>
        )}

        {/* Button Background Circle */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-full transition-all duration-300 ${
            isHovered ? 'scale-110 shadow-2xl' : 'scale-100 shadow-lg'
          }`}
        />

        {/* Button Icon */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full opacity-0 animate-pulse" />
      </a>

      {/* Mobile Responsive Adjustment */}
      <style>{`
        @media (max-width: 640px) {
          .fixed.bottom-6.right-6 {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
}
