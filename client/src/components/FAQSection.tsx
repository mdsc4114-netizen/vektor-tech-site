import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = t('faq.perguntas');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4">
            {t('faq.titulo')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('faq.descricao')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {Array.isArray(faqs) && faqs.map((faq: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 md:px-8 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-semibold text-[#0A2540] pr-4">
                  {faq.pergunta}
                </span>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 text-[#2563EB] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 md:px-8 md:py-5 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.resposta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: Array.isArray(faqs) ? faqs.map((faq: any) => ({
              '@type': 'Question',
              name: faq.pergunta,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.resposta,
              },
            })) : [],
          })}
        </script>
      </div>
    </section>
  );
}
