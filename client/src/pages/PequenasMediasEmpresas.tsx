import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function PequenasMediasEmpresas() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-[#0A2540] mb-6">
                Cresça com eficiência operacional
              </h1>
              <p className="text-xl text-[#2563EB] font-semibold mb-4">
                Sua equipe está sobrecarregada com tarefas repetitivas?
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Automatize processos, integre sistemas e libere sua equipe para tarefas estratégicas. Cresça sem aumentar custos operacionais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#2563EB] to-[#00C2FF] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                  Agendar diagnóstico gratuito
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Ver case studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-12">
              Os desafios das pequenas e médias empresas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  titulo: 'Processos manuais',
                  descricao: 'Tarefas repetitivas consomem tempo e recursos da equipe',
                },
                {
                  titulo: 'Sistemas desintegrados',
                  descricao: 'Dados espalhados em múltiplas plataformas sem comunicação',
                },
                {
                  titulo: 'Crescimento limitado',
                  descricao: 'Dificuldade em escalar sem aumentar significativamente custos',
                },
              ].map((item, i) => (
                <div key={i} className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold text-[#0A2540] mb-2">{item.titulo}</h3>
                  <p className="text-gray-700">{item.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-12">
              Nossas soluções para PMEs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  titulo: 'Automação de Processos',
                  descricao: 'Elimine tarefas manuais e aumente produtividade da equipe',
                },
                {
                  titulo: 'Integração de Sistemas',
                  descricao: 'Conecte suas ferramentas e centralize dados',
                },
                {
                  titulo: 'Otimização Operacional',
                  descricao: 'Reduza custos e melhore eficiência em toda a empresa',
                },
                {
                  titulo: 'Escalabilidade',
                  descricao: 'Cresça sem aumentar proporcionalmente custos operacionais',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">{item.titulo}</h3>
                  <p className="text-gray-700">{item.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-12">
              Benefícios que você terá
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                'Redução de 60% em tarefas manuais',
                'Aumento de produtividade da equipe em até 200%',
                'Economia de custos operacionais significativa',
                'Dados centralizados e acessíveis em tempo real',
                'Crescimento escalável e previsível',
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-12">
              Como funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  numero: '1',
                  titulo: 'Auditoria',
                  descricao: 'Analisamos todos os processos',
                },
                {
                  numero: '2',
                  titulo: 'Planejamento',
                  descricao: 'Criamos roadmap de automação',
                },
                {
                  numero: '3',
                  titulo: 'Execução',
                  descricao: 'Implementamos fase por fase',
                },
                {
                  numero: '4',
                  titulo: 'Suporte',
                  descricao: 'Acompanhamento e otimização contínua',
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.numero}
                  </div>
                  <h3 className="font-bold text-[#0A2540] mb-2">{step.titulo}</h3>
                  <p className="text-gray-600 text-sm">{step.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#0A2540] to-[#1F2933] text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua empresa?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Solicite um diagnóstico gratuito e descubra oportunidades de crescimento
            </p>
            <button className="bg-gradient-to-r from-[#2563EB] to-[#00C2FF] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow inline-flex items-center gap-2">
              Agendar diagnóstico gratuito
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
