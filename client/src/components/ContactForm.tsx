import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactForm() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t('contact.sucesso'));
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          empresa: '',
          mensagem: '',
        });
      } else {
        toast.error(t('contact.erro'));
      }
    } catch (error) {
      toast.error(t('contact.erro'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
            {t('contact.titulo')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('contact.descricao')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#00C2FF] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A2540] mb-1">E-mail</h3>
                  <p className="text-gray-600">contato@vektortech.tech</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#00C2FF] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A2540] mb-1">Telefone</h3>
                  <a href="https://wa.me/5521966482868?text=Olá!%20Vi%20o%20site%20da%20Vektor%20Tech%20e%20quero%20entender%20como%20posso%20conseguir%20mais%20clientes." target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2563EB] transition-colors">
                    +55 21 96648-2868
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#00C2FF] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A2540] mb-1">Localização</h3>
                  <p className="text-gray-600">Rio de Janeiro, RJ - Brasil</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-4" />

              {/* Response Time */}
              <div className="p-4 bg-[#00C2FF]/10 rounded-lg border border-[#00C2FF]/20">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-[#2563EB]">Tempo de resposta:</span> Respondemos em até 24 horas
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="nome" className="block text-sm font-semibold text-[#0A2540] mb-2">
                {t('contact.nome')} *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#0A2540] mb-2">
                {t('contact.email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                placeholder="seu.email@empresa.com"
              />
            </div>

            {/* Phone and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-[#0A2540] mb-2">
                  {t('contact.telefone')} *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                  placeholder="(11) 9999-9999"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-semibold text-[#0A2540] mb-2">
                  {t('contact.empresa')} *
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                  placeholder="Sua empresa"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="mensagem" className="block text-sm font-semibold text-[#0A2540] mb-2">
                {t('contact.mensagem')} *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all resize-none"
                placeholder="Descreva sua necessidade..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#2563EB] to-[#00C2FF] hover:shadow-lg transition-shadow font-bold py-3"
            >
              {isLoading ? t('contact.enviando') : t('contact.enviar')}
            </Button>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 text-center">
              Seus dados serão tratados de acordo com nossa Política de Privacidade
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
