import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Brain, Clock, FileText, Users, Shield } from 'lucide-react';

const AssistantProduct = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Legal Analysis",
      description: "Advanced AI that understands legal context and provides intelligent case analysis and recommendations."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Your AI legal assistant is always available to help with urgent legal research and document review."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Automation",
      description: "Generate contracts, legal briefs, and other documents with AI-powered templates and customization."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Communication",
      description: "Streamline client interactions with automated updates and intelligent response suggestions."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Monitoring",
      description: "Stay compliant with automatic updates on legal changes and regulatory requirements."
    }
  ];

  const benefits = [
    "Increase billable hours by 40%",
    "Reduce document preparation time by 60%",
    "Improve case research accuracy",
    "Enhance client satisfaction scores",
    "Streamline workflow automation",
    "Access real-time legal updates"
  ];

  const useCases = [
    {
      title: "Contract Review & Analysis",
      description: "Quickly analyze contracts for potential issues, missing clauses, and compliance requirements with AI-powered insights."
    },
    {
      title: "Legal Research Automation",
      description: "Automate comprehensive legal research across multiple jurisdictions and practice areas with intelligent summarization."
    },
    {
      title: "Document Generation",
      description: "Create professional legal documents using AI templates that adapt to your specific case requirements."
    },
    {
      title: "Case Management",
      description: "Organize and track cases with intelligent scheduling, deadline management, and progress monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              For Legal Professionals
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lawexa Assistant
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your intelligent AI legal assistant that enhances productivity, streamlines workflows, and delivers superior client outcomes for legal professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gold">
                Request Demo
              </Button>
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leverage cutting-edge AI technology designed specifically for legal practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-large transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Measurable Impact on Your Practice
              </h2>
              <p className="text-xl text-muted-foreground">
                See real results from day one with quantifiable improvements to your practice.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Legal Practice
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how Lawexa Assistant integrates seamlessly into your daily workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo and see how Lawexa Assistant can revolutionize your legal work.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AssistantProduct;