import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, Scale, Users, Shield, Zap, Clock, Globe, BookOpen } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "AI Study Companion",
      description: "Your 24/7 legal tutor that explains complex concepts, generates flashcards, and helps you understand Nigerian law with ease. Perfect for law students at any level.",
      category: "Study"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Smart Legal Research",
      description: "Instantly find relevant cases, statutes, and legal precedents from Nigerian courts. Get comprehensive research done in minutes, not hours.",
      category: "Study"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Contract Analysis & Generation",
      description: "Upload any legal document for instant analysis or generate professional contracts. Understand terms, identify risks, and ensure compliance with Nigerian law.",
      category: "Help"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Smart Lawyer Connect",
      description: "Get connected to verified Nigerian lawyers for complex matters. Our AI helps you prepare the right questions and understand the scope before consultation.",
      category: "Help"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Level Security",
      description: "Your legal data is protected with enterprise-grade encryption and security measures. All interactions are confidential and GDPR compliant.",
      category: "Security"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Legal Answers",
      description: "Ask any legal question in plain English and get accurate answers based on current Nigerian law. No more waiting days for simple legal clarifications.",
      category: "Help"
    }
  ];

  const categories = Array.from(new Set(features.map(f => f.category)));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              All-in-One Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Built for Nigerian Legal Needs
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From law students to professionals, Lawexa provides AI-powered legal intelligence tailored specifically for the Nigerian legal system.
            </p>
          </div>
        </div>
      </section>

      {/* Features by Category */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          {categories.map((category, categoryIndex) => (
            <div key={category} className={`mb-8 ${categoryIndex !== 0 ? 'pt-8' : ''}`}>
              <div className="text-center mb-6">
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                  For {category === 'Study' ? 'Study' : 'Legal Help'}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {category === 'Study' && 'Master Nigerian Law'}
                  {category === 'Help' && 'Get Legal Clarity'}
                  {category === 'Security' && 'Trust & Security'}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {features
                  .filter(feature => feature.category === category)
                  .map((feature, index) => (
                    <Card key={index} className="border-border enhanced-hover">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Try Lawexa
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Join 15,000+ Nigerians who trust Lawexa for their legal needs. Start free today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 h-auto">
                  Start Free
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 h-auto">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;