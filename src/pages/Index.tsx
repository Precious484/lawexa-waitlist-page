import { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import UniversityCarousel from '@/components/UniversityCarousel';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WaitlistForm from '@/components/WaitlistForm';
import PerksSection from '@/components/PerksSection';
import caseLibraryInterface from '@/assets/case-library-interface.png';
import statuteInterface1 from '@/assets/statute-interface-1.png';
import statuteInterface2 from '@/assets/statute-interface-2.png';
const Index = () => {
  useScrollAnimation();
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    // Add click listeners to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
      observer.disconnect();
    };
  }, []);
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        {/* Waitlist Form Section */}
        

        {/* Perks Section */}
        <PerksSection />

        {/* App Interface Showcase */}
        <section className="py-20 bg-gradient-to-br from-lawexa-dark via-lawexa-dark to-lawexa-brown-glow text-white bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Lawexa's Powerful Interface</h2>
              <p className="text-gray-100 text-lg max-w-2xl mx-auto">
                Intuitive design meets powerful legal intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="fade-in">
                <div className="rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                  <img src={caseLibraryInterface} alt="Legal Case Library - Browse landmark cases and precedents" className="w-full" />
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">Case Library</h3>
                <p className="text-gray-300">Explore landmark cases and legal precedents</p>
              </div>
              
              <div className="fade-in">
                <div className="rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                  <img src={statuteInterface2} alt="Statute Browser - Access and search legal statutes" className="w-full" />
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">Statute Browser</h3>
                <p className="text-gray-300">Navigate statutes and legal documents with ease</p>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        
        <section id="faq">
          <FAQSection />
        </section>
      </main>
      <Footer />
    </div>;
};
export default Index;