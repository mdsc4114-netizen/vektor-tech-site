import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SegmentsSection from '@/components/SegmentsSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SegmentsSection />
        <DifferentialsSection />
        <CTASection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
