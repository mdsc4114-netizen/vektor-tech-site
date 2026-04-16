import { ArrowRight, CheckCircle, MessageCircle, Play } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function CriadoresConteudo() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-[#0A2540] mb-6">
                Escale seu negócio de conteúdo com automação
              </h1>
              <p className="text-xl text-[#2563EB] font-semibold mb-4">
                Você dedica mais tempo em tarefas administrativas do que criando conteúdo?
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Automatize funis de vendas, gerencie sua audiência e monetize seu conteúdo de forma inteligente. Mais tempo criando, menos tempo gerenciando.
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
              Os desafios dos criadores de conteúdo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  titulo: 'Funis desorganizados',
                  descricao: 'Dificuldade em acompanhar leads e converter seguidores em clientes',
                },
                {
                  titulo: 'Tempo perdido em tarefas manuais',
                  descricao: 'Horas gastas em e-mails, agendamentos e organização de dados',
                },
                {
                  titulo: 'Monetização limitada',
                  descricao: 'Falta de estratégia para diversificar receitas e aumentar ganhos',
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
              Nossas soluções para criadores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  titulo: 'Automação de Funis de Vendas',
                  descricao: 'Converta seguidores em clientes com funis automatizados e personalizados',
                },
                {
                  titulo: 'Gestão de Audiência',
                  descricao: 'Organize, segmente e nutra sua audiência com automações inteligentes',
                },
                {
                  titulo: 'Integração com Plataformas',
                  descricao: 'Conecte suas ferramentas favoritas (Stripe, Hotmart, Kiwify, etc.)',
                },
                {
                  titulo: 'Monetização Digital',
                  descricao: 'Múltiplas estratégias para diversificar e aumentar sua receita',
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
                'Aumento de 300% no tempo disponível para criar conteúdo',
                'Conversão automática de seguidores em clientes',
                'Múltiplas fontes de receita ativas 24/7',
                'Relatórios detalhados de performance e ROI',
                'Suporte consultivo para otimizar resultados',
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
                  titulo: 'Diagnóstico',
                  descricao: 'Analisamos seu funil atual e oportunidades',
                },
                {
                  numero: '2',
                  titulo: 'Estratégia',
                  descricao: 'Desenhamos automações customizadas',
                },
                {
                  numero: '3',
                  titulo: 'Implementação',
                  descricao: 'Configuramos e testamos tudo',
                },
                {
                  numero: '4',
                  titulo: 'Otimização',
                  descricao: 'Monitoramos e melhoramos continuamente',
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
              Pronto para escalar seu negócio?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Solicite um diagnóstico gratuito e descubra como podemos ajudar
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
