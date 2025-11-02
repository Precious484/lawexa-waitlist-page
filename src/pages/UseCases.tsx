import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Briefcase, Users, FileText, Search, MessageSquare, Scale, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import caseLibraryInterface from '@/assets/case-library-interface.png';
import statuteInterface1 from '@/assets/statute-interface-1.png';
import statuteInterface2 from '@/assets/statute-interface-2.png';
const UseCases = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const useCases = [{
    icon: <GraduationCap className="w-12 h-12 text-primary" />,
    title: "For Students",
    description: "Master legal concepts with AI-powered learning assistance",
    features: ["Case law analysis and summaries", "Legal research made simple", "Study notes and exam prep", "Understanding complex legal terminology"],
    testimonial: {
      text: "Lawexa transformed how I study law. Complex cases that took hours to understand now take minutes.",
      author: "Sarah M., Law Student"
    }
  }, {
    icon: <Briefcase className="w-12 h-12 text-primary" />,
    title: "For Legal Professionals",
    description: "Enhance your practice with intelligent legal assistance",
    features: ["Contract drafting and review", "Legal precedent research", "Client communication drafts", "Case strategy analysis"],
    testimonial: {
      text: "As a practicing attorney, Lawexa saves me 10+ hours weekly on research and documentation.",
      author: "David K., Attorney"
    }
  }, {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "For Everyday People",
    description: "Navigate legal matters with confidence, no law degree required",
    features: ["Contract understanding (leases, employment)", "Legal rights and obligations", "Document interpretation", "Legal question answering"],
    testimonial: {
      text: "I understood my lease agreement completely before signing. Lawexa is like having a lawyer friend available 24/7.",
      author: "Michael T., Small Business Owner"
    }
  }];
  const scenarios = [{
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Contract Review",
    scenario: "Need to understand a rental agreement, employment contract, or NDA before signing?",
    solution: "Upload your contract to Lawexa and get instant explanations of clauses, potential risks, and key terms in plain English."
  }, {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Legal Research",
    scenario: "Researching case law or legal precedents for a paper or case?",
    solution: "Ask Lawexa to find relevant cases, summarize rulings, and explain how they apply to your situation."
  }, {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "Legal Questions",
    scenario: "Have a legal question but can't afford or don't need a full consultation?",
    solution: "Chat with Lawexa to get clear, accurate answers to common legal questions across various practice areas."
  }, {
    icon: <Scale className="w-8 h-8 text-primary" />,
    title: "Rights & Obligations",
    scenario: "Unsure about your legal rights in a situation?",
    solution: "Lawexa explains your rights and obligations in specific scenarios, helping you make informed decisions."
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-lawexa-dark via-lawexa-dark to-lawexa-brown-glow text-white overflow-hidden">
          <div className="absolute inset-0 hero-grid bg-gray-950"></div>
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Who Lawexa Is For</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover how Lawexa transforms legal work for different users
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {useCases.map((useCase, index) => <Card key={index} className="p-8 card-hover border-2 bg-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="mb-4">{useCase.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {useCase.features.map((feature, idx) => <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-foreground">{feature}</p>
                      </div>)}
                  </div>

                  <div className="pt-6 border-t">
                    <p className="text-sm italic text-muted-foreground mb-2">"{useCase.testimonial.text}"</p>
                    <p className="text-xs font-semibold text-primary">{useCase.testimonial.author}</p>
                  </div>
                </Card>)}
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
              {scenarios.map((scenario, index) => <Card key={index} className="p-6 bg-card card-hover border border-border fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{scenario.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{scenario.title}</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-1">The Scenario:</p>
                          <p className="text-sm text-foreground">{scenario.scenario}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-primary mb-1">How Lawexa Helps:</p>
                          <p className="text-sm text-foreground">{scenario.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Interface Showcase */}
        <section className="py-20 bg-gradient-to-br from-lawexa-dark via-lawexa-dark to-lawexa-brown-glow text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See Lawexa in Action</h2>
              <p className="text-gray-100 text-lg max-w-2xl mx-auto">
                Powerful features designed for legal excellence
              </p>
            </div>
            
            <div className="space-y-16 max-w-6xl mx-auto">
              {/* Case Library */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                  <img src={caseLibraryInterface} alt="Lawexa Case Library Interface" className="w-full" />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Comprehensive Case Library</h3>
                  <p className="text-gray-300 mb-6">
                    Access thousands of landmark cases from courts across the region. Filter by jurisdiction, topic, or trending cases relevant to your studies or practice.
                  </p>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Trending cases by institution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Bookmark important cases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Case summaries and analysis</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Statute Browser */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Advanced Statute Browser</h3>
                  <p className="text-gray-300 mb-6">
                    Navigate through statutes, constitutions, and legal documents with an intuitive interface. Bookmark sections, share with colleagues, and provide feedback.
                  </p>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Easy navigation by chapters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Bookmark and organize sections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Share with your network</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                  <img src={statuteInterface2} alt="Lawexa Statute Browser Interface" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Transform Your Legal Work?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join the waitlist and be among the first to experience the future of legal intelligence.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => window.location.href = '/#waitlist'}
            >
              Request Your Invitation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default UseCases;