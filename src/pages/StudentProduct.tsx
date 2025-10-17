import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, BookOpen, Users, Award, Zap, Shield } from 'lucide-react';

const StudentProduct = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Legal Research Assistant",
      description: "AI-powered research that helps you find relevant cases, statutes, and legal precedents instantly."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Study Groups",
      description: "Connect with fellow law students and collaborate on assignments and case studies."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Mock Exams",
      description: "Practice with realistic bar exam questions and get detailed performance analytics."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Citations",
      description: "Generate proper legal citations automatically in multiple formats (Bluebook, APA, etc.)."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Learning Environment",
      description: "Your study materials and progress are protected with enterprise-grade security."
    }
  ];

  const benefits = [
    "Reduce research time by up to 70%",
    "Improve exam scores with targeted practice",
    "Access 24/7 AI tutoring support",
    "Stay updated with latest legal developments",
    "Build professional network early",
    "Track learning progress with analytics"
  ];

  const useCases = [
    {
      title: "Case Law Research",
      description: "Quickly find relevant precedents for your legal writing assignments and moot court competitions."
    },
    {
      title: "Bar Exam Preparation",
      description: "Comprehensive study materials and practice tests tailored to your jurisdiction's bar exam."
    },
    {
      title: "Legal Writing Support",
      description: "Get AI assistance with legal briefs, memoranda, and academic papers with proper citations."
    },
    {
      title: "Study Group Coordination",
      description: "Organize and manage study sessions with classmates, share notes and collaborate effectively."
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
              For Law Students
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lawexa Student
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your legal education with AI-powered research, study tools, and collaborative learning platform designed specifically for law students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gold">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
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
              Powerful Features for Law Students
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to excel in law school and prepare for your legal career.
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
                Why Choose Lawexa Student?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of law students who have transformed their academic experience.
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
              Real-World Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how Lawexa Student fits into your daily academic routine.
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
              Ready to Excel in Law School?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the future of legal education.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Started for Free
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentProduct;