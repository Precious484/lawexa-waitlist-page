import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Briefcase, Users, ArrowRight, CheckCircle2, TrendingUp, Award, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import caseLibraryInterface from '@/assets/case-library-interface.png';
import statuteInterface1 from '@/assets/statute-interface-1.png';
import statuteInterface2 from '@/assets/statute-interface-2.png';
const UseCases = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Trigger fade-in animations
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
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Make initial elements visible immediately
    setTimeout(() => {
      fadeElements.forEach(el => el.classList.add('visible'));
    }, 100);
    return () => observer.disconnect();
  }, []);
  const userStories = [{
    icon: <GraduationCap className="w-16 h-16 text-primary" />,
    category: "200L Student - UNILAG",
    name: "Ibrahim's Breakthrough",
    problem: "Ibrahim was struggling to keep up with Constitutional Law. Missing just two classes put him weeks behind, and he couldn't understand the complex Supreme Court decisions everyone was discussing.",
    solution: "With Lawexa's trending feed and community folders, Ibrahim caught up in days. He found a Constitutional Law folder with all the cases his class covered, plus AI explanations that made sense. The trending section showed him exactly what was important.",
    results: ["Caught up on 3 weeks of missed material in 4 days", "Went from failing to scoring B+ on midterm", "Now contributes actively in class discussions", "Created his own study folder that 50+ students use"],
    quote: "Found a Constitutional Law folder with everything I needed. Saved me 10 hours of research. I was lost before Lawexa—now I'm helping others.",
    image: caseLibraryInterface,
    stats: {
      value: "10hrs",
      label: "Research Saved"
    }
  }, {
    icon: <GraduationCap className="w-16 h-16 text-primary" />,
    category: "300L Student - UNILAG",
    name: "Kehinde's Class Edge",
    problem: "Kehinde would occasionally miss classes and struggled to know what was actually important. She spent hours searching for cases only to find out they weren't relevant to her exam.",
    solution: "Now Kehinde opens Lawexa's trending feed every morning. She sees exactly what cases her classmates are reading and what topics are hot. Even when she misses class, she's never behind because Lawexa shows her what matters.",
    results: ["Always knows what's trending in her class", "Reduced study time by 35%", "Improved from B to A- average", "Never misses important case law updates"],
    quote: "I open Lawexa and boom—the case we just covered is right there with explanations. Life saver. My classmates ask me for notes now.",
    image: statuteInterface2,
    stats: {
      value: "35%",
      label: "Time Saved"
    }
  }, {
    icon: <GraduationCap className="w-16 h-16 text-primary" />,
    category: "100L Student - Baze University",
    name: "Amara's Confidence Builder",
    problem: "Amara felt overwhelmed in her first year. The legal terminology was confusing, cases seemed impossible to understand, and she was afraid to ask 'stupid questions' in class.",
    solution: "Lawexa became Amara's private tutor. She could ask anything without judgment—'What does ratio decidendi mean?' or 'Explain Donoghue v Stevenson like I'm 5.' The AI broke down complex concepts into plain English with relatable examples.",
    results: ["Built confidence in legal reasoning", "Understands complex concepts without memorizing", "Actively participates in class now", "Scored highest in her tutorial group"],
    quote: "Stop memorizing. Start mastering. Lawexa explains tough concepts in plain English. I went from scared to confident in one semester.",
    image: statuteInterface1,
    stats: {
      value: "#1",
      label: "In Tutorial Group"
    }
  }];
  const impactMetrics = [{
    icon: <GraduationCap className="w-8 h-8" />,
    value: "1,247+",
    label: "Students Using Lawexa"
  }, {
    icon: <Award className="w-8 h-8" />,
    value: "A-",
    label: "Average Grade Boost"
  }, {
    icon: <Clock className="w-8 h-8" />,
    value: "35%",
    label: "Time Saved Studying"
  }, {
    icon: <CheckCircle2 className="w-8 h-8" />,
    value: "20K+",
    label: "Cases Searched Daily"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 text-white overflow-hidden">
          <div className="absolute inset-0 hero-grid"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Real Students. <span className="text-primary">Real Transformations.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">See how law students across Nigeria are using Lawexa to crush exams, save time, and actually understand the law.</p>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        

        {/* User Stories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            

            <div className="space-y-24">
              {userStories.map((story, index) => <div key={index} className="fade-in grid lg:grid-cols-2 gap-12 items-center" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  {/* Story Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        {story.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary uppercase tracking-wide">{story.category}</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{story.name}</h3>
                      </div>
                    </div>

                    <Card className="p-6 mb-6 bg-destructive/5 border-l-4 border-destructive">
                      <p className="text-sm font-semibold text-destructive mb-2">The Challenge:</p>
                      <p className="text-foreground">{story.problem}</p>
                    </Card>

                    <Card className="p-6 mb-6 bg-primary/5 border-l-4 border-primary">
                      <p className="text-sm font-semibold text-primary mb-2">The Solution:</p>
                      <p className="text-foreground">{story.solution}</p>
                    </Card>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-3 text-foreground">Results Achieved:</h4>
                      <div className="space-y-2">
                        {story.results.map((result, idx) => <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{result}</span>
                          </div>)}
                      </div>
                    </div>

                    <Card className="p-6 bg-card border-primary/20">
                      <p className="text-foreground italic mb-3">"{story.quote}"</p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-primary">— {story.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{story.stats.value}</div>
                          <div className="text-xs text-muted-foreground">{story.stats.label}</div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Story Image */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-float">
                      <img src={story.image} alt={`${story.name} - Lawexa interface showcase`} className="w-full h-auto" />
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join 1,247+ Top Students?</h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">Stop struggling alone. Start crushing exams with the AI legal assistant built for Nigerian law students.</p>
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => {
            window.location.href = '/';
            setTimeout(() => {
              const waitlistSection = document.querySelector('#waitlist') || document.querySelector('form');
              if (waitlistSection) {
                waitlistSection.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }, 100);
          }}>
              Request Your Invitation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default UseCases;