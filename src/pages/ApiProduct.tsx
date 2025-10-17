import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Code, Zap, Globe, Lock, BarChart } from 'lucide-react';

const ApiProduct = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "RESTful API",
      description: "Clean, well-documented REST API with comprehensive endpoints for all legal AI functionalities."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Sub-second response times with 99.9% uptime SLA and global CDN for optimal performance."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Jurisdiction",
      description: "Support for legal systems across 50+ countries with localized legal knowledge bases."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption, OAuth 2.0 authentication, and GDPR compliance for data protection."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Usage Analytics",
      description: "Detailed analytics dashboard with usage metrics, performance monitoring, and billing insights."
    }
  ];

  const benefits = [
    "Integrate in under 30 minutes",
    "Scale to millions of requests",
    "99.9% uptime guarantee",
    "Comprehensive documentation",
    "24/7 developer support",
    "Flexible pricing models"
  ];

  const useCases = [
    {
      title: "LegalTech Applications",
      description: "Power your legal software with AI capabilities for contract analysis, legal research, and document automation."
    },
    {
      title: "Enterprise Integration",
      description: "Integrate legal AI into existing business systems for compliance monitoring and contract management."
    },
    {
      title: "Legal Research Platforms",
      description: "Enhance research platforms with intelligent case law analysis and precedent identification."
    },
    {
      title: "Document Processing",
      description: "Automate legal document review and analysis workflows with intelligent extraction and classification."
    }
  ];

  const codeExample = `// Example API call
const response = await fetch('https://api.lawexa.com/v1/analyze', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    document: 'Contract text here...',
    analysis_type: 'contract_review'
  })
});

const result = await response.json();
console.log(result.insights);`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              For Developers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lawexa API
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Powerful legal AI API that enables developers to integrate advanced legal intelligence into any application with simple, scalable endpoints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gold">
                Get API Key
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Get Started in Minutes
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple integration with just a few lines of code.
              </p>
            </div>
            
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Quick Start Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{codeExample}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade API
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for scale with the reliability and security your applications demand.
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
                Developer-First Experience
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to build powerful legal AI applications.
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
              Build the Future of Legal Tech
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how developers are using Lawexa API to create innovative legal solutions.
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
              Start Building Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get your free API key and start integrating legal AI into your applications in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Free API Key
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApiProduct;