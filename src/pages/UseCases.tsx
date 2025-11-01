import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Briefcase, Users, FileText, Search, MessageSquare, Scale, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const UseCases = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const useCases = [
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "For Students",
      description: "Master legal concepts with AI-powered learning assistance",
      features: [
        "Case law analysis and summaries",
        "Legal research made simple",
        "Study notes and exam prep",
        "Understanding complex legal terminology",
      ],
      testimonial: {
        text: "Lawexa transformed how I study law. Complex cases that took hours to understand now take minutes.",
        author: "Sarah M., Law Student"
      }
    },
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: "For Legal Professionals",
      description: "Enhance your practice with intelligent legal assistance",
      features: [
        "Contract drafting and review",
        "Legal precedent research",
        "Client communication drafts",
        "Case strategy analysis",
      ],
      testimonial: {
        text: "As a practicing attorney, Lawexa saves me 10+ hours weekly on research and documentation.",
        author: "David K., Attorney"
      }
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "For Everyday People",
      description: "Navigate legal matters with confidence, no law degree required",
      features: [
        "Contract understanding (leases, employment)",
        "Legal rights and obligations",
        "Document interpretation",
        "Legal question answering",
      ],
      testimonial: {
        text: "I understood my lease agreement completely before signing. Lawexa is like having a lawyer friend available 24/7.",
        author: "Michael T., Small Business Owner"
      }
    },
  ];

  const scenarios = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Contract Review",
      scenario: "Need to understand a rental agreement, employment contract, or NDA before signing?",
      solution: "Upload your contract to Lawexa and get instant explanations of clauses, potential risks, and key terms in plain English."
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Legal Research",
      scenario: "Researching case law or legal precedents for a paper or case?",
      solution: "Ask Lawexa to find relevant cases, summarize rulings, and explain how they apply to your situation."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Legal Questions",
      scenario: "Have a legal question but can't afford or don't need a full consultation?",
      solution: "Chat with Lawexa to get clear, accurate answers to common legal questions across various practice areas."
    },
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "Rights & Obligations",
      scenario: "Unsure about your legal rights in a situation?",
      solution: "Lawexa explains your rights and obligations in specific scenarios, helping you make informed decisions."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-lawexa-dark via-lawexa-dark to-lawexa-brown-glow text-white overflow-hidden">
          <div className="absolute inset-0 hero-grid"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-primary">Legal Intelligence</span> For Everyone
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Whether you're a student, professional, or everyday person, Lawexa makes legal knowledge accessible and actionable.
              </p>
            </div>
          </div>
        </section>

        {/* Main Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Lawexa Is For</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover how Lawexa transforms legal work for different users
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-8 card-hover border-2">
                  <div className="mb-4">{useCase.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t">
                    <p className="text-sm italic text-muted-foreground mb-2">"{useCase.testimonial.text}"</p>
                    <p className="text-xs font-semibold text-primary">{useCase.testimonial.author}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Scenarios */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Scenarios</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See how Lawexa helps in everyday legal situations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {scenarios.map((scenario, index) => (
                <Card key={index} className="p-6 bg-white card-hover">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{scenario.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-1">The Scenario:</p>
                          <p className="text-sm">{scenario.scenario}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-primary mb-1">How Lawexa Helps:</p>
                          <p className="text-sm">{scenario.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { number: "15,000+", label: "Active Users" },
                { number: "100k+", label: "Documents Analyzed" },
                { number: "50k+", label: "Legal Questions Answered" },
                { number: "95%", label: "User Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-lawexa-dark to-lawexa-brown-glow text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Legal Intelligence?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already making legal work simpler, faster, and more accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-gold text-lg"
                onClick={() => window.location.href = '/'}
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;
