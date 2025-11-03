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
import communityFoldersInterface from '@/assets/community-folders-interface.png';
import statuteInterface from '@/assets/statute-interface.png';
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
        <section className="py-20 bg-gradient-to-br from-lawexa-dark via-lawexa-dark to-lawexa-brown-glow text-white bg-zinc-900">
          <div className="container mx-auto px-4 bg-zinc-900">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">See Lawexa in Action</h2>
              <p className="text-gray-100 text-xl max-w-3xl mx-auto">
                The future of legal research is here. Explore what makes Lawexa different.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="fade-in animate-float group">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-primary/20">
                  <img src={caseLibraryInterface} alt="Legal Case Library - Browse landmark cases and precedents" className="w-full h-auto" />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Case Library</h3>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Dive into thousands of landmark cases at your fingertips. Every precedent, every ruling, searchable in seconds. 
                    <span className="text-primary font-semibold"> Your next breakthrough starts here.</span>
                  </p>
                </div>
              </div>
              
              <div className="fade-in animate-float group" style={{
              animationDelay: '0.15s'
            }}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-primary/20">
                  <img src={statuteInterface1} alt="AI-Powered Legal Tutor - Get instant answers to legal questions" className="w-full h-auto" />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">AI Legal Tutor</h3>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Ask anything. Get answers that matter. Trained on African legal systems, our AI understands context like never before. 
                    <span className="text-primary font-semibold"> It's like having a senior lawyer on speed dial.</span>
                  </p>
                </div>
              </div>
              
              <div className="fade-in animate-float group" style={{
              animationDelay: '0.3s'
            }}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-primary/20">
                  <img src={statuteInterface2} alt="Statute Browser - Access and search legal statutes" className="w-full h-auto" />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Statute Browser</h3>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Stop drowning in legal jargon. Navigate complex legislation with clarity and speed. 
                    <span className="text-primary font-semibold"> Find what you need, when you need it.</span>
                  </p>
                </div>
              </div>
              
              <div className="fade-in animate-float group" style={{
              animationDelay: '0.45s'
            }}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-primary/20">
                  <img src={communityFoldersInterface} alt="Community Folders - Share and discover legal research" className="w-full h-auto" />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Community Folders</h3>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Your peers are winning cases with insights you haven't seen yet. Discover shared research, collaborate on strategies. 
                    <span className="text-primary font-semibold"> Together, we're stronger.</span>
                  </p>
                </div>
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