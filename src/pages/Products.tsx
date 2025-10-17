import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RollingNumber from '@/components/RollingNumber';
import { BookOpen, MessageCircle, Scale, Users, Smartphone, Globe, ArrowRight, Check, Zap, Shield, Clock, Star, Code, FileText, Search, Users2, Lightbulb, Target } from 'lucide-react';
const Products = () => {
  useEffect(() => {
    document.title = 'Products & Features - Lawexa | AI-Powered Legal Solutions';
    window.scrollTo(0, 0);
  }, []);
  const products = [{
    icon: BookOpen,
    name: 'Lawexa Student',
    tagline: 'Your AI Study Companion',
    description: 'Transform your legal education with AI-powered study tools designed specifically for African law students.',
    features: ['AI Tutor for instant legal guidance', 'Case law database with 20,000+ Nigerian cases', 'Smart flashcard generation from your notes', 'Picture-to-note conversion with legal authorities', 'Exam practice modes with past questions', 'Course materials from top universities'],
    pricing: 'Starting at ₦4,900/month',
    cta: 'Start Learning',
    color: 'from-blue-600 to-blue-800',
    image: 'https://placehold.co/600x400/374151/FFD700?text=Student+Platform'
  }, {
    icon: MessageCircle,
    name: 'Lawexa Assistant',
    tagline: 'Your Personal Legal AI',
    description: 'Get instant legal guidance, contract analysis, and professional legal support 24/7 without the hefty legal fees.',
    features: ['Smart legal assistant for any question', 'Contract review and risk assessment', 'Legal document generation', 'Clause-by-clause contract analysis', 'Direct lawyer matching and connection', 'Priority support within 2 hours'],
    pricing: 'Starting at ₦25,000/month',
    cta: 'Get Assistant',
    color: 'from-purple-600 to-purple-800',
    image: 'https://placehold.co/600x400/374151/FFD700?text=AI+Assistant'
  }, {
    icon: Users,
    name: 'Lawexa API',
    tagline: 'Developer-First Legal Intelligence',
    description: 'Integrate powerful legal AI capabilities directly into your applications with our robust API platform.',
    features: ['RESTful API with comprehensive documentation', 'Real-time legal query processing', 'Webhook support for automated workflows', 'Enterprise-grade security and authentication', 'Scalable infrastructure with 99.9% uptime', 'Developer support and onboarding'],
    pricing: 'Starting at ₦75,000/month',
    cta: 'View API Docs',
    color: 'from-green-600 to-green-800',
    image: 'https://placehold.co/600x400/374151/FFD700?text=API+Platform'
  }];
  const platforms = [{
    icon: Smartphone,
    name: 'Mobile Apps',
    description: 'Access Lawexa on the go with our native iOS and Android applications.',
    availability: 'Available on App Store and Google Play'
  }, {
    icon: Globe,
    name: 'Web Platform',
    description: 'Full-featured web application accessible from any device with a browser.',
    availability: 'Access at app.lawexa.com'
  }, {
    icon: Scale,
    name: 'API Integration',
    description: 'Integrate Lawexa\'s legal intelligence into your existing workflows.',
    availability: 'Enterprise plans only'
  }];
  const stats = [{
    number: 20000,
    label: 'Legal Cases',
    suffix: '+'
  }, {
    number: 130,
    label: 'Universities',
    suffix: '+'
  }, {
    number: 15000,
    label: 'Active Users',
    suffix: '+'
  }, {
    number: 24,
    label: 'Hour AI Support',
    suffix: '/7'
  }];
  const features = [{
    category: "For Students",
    icon: BookOpen,
    color: "from-blue-500 to-blue-700",
    items: [{
      icon: Search,
      title: "AI-Powered Case Search",
      description: "Find relevant legal cases instantly with our intelligent search engine"
    }, {
      icon: FileText,
      title: "Smart Note Generation",
      description: "Convert pictures to organized legal notes with authorities and citations"
    }, {
      icon: Target,
      title: "Exam Preparation",
      description: "Practice with past questions and get personalized study recommendations"
    }, {
      icon: Lightbulb,
      title: "AI Tutor",
      description: "Get instant explanations for complex legal concepts and principles"
    }]
  }, {
    category: "For Professionals",
    icon: Users2,
    color: "from-purple-500 to-purple-700",
    items: [{
      icon: Shield,
      title: "Contract Analysis",
      description: "Comprehensive risk assessment and clause-by-clause review"
    }, {
      icon: Clock,
      title: "24/7 Legal Assistant",
      description: "Get instant legal guidance without waiting for lawyer appointments"
    }, {
      icon: Code,
      title: "API Integration",
      description: "Integrate legal intelligence directly into your business workflows"
    }, {
      icon: Star,
      title: "Expert Matching",
      description: "Connect with specialized lawyers for complex legal matters"
    }]
  }];
  return <div className="min-h-screen bg-background animate-fade-in">
      <div className="bg-black min-h-[64px] flex items-center">
        <Header />
      </div>
      
      <main>
        {/* Hero Section */}
        <section className="text-white py-20 pt-16 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-amber-400 md:text-6xl">
                All-in-One Platform
                
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Discover Lawexa's comprehensive suite of AI-powered legal tools designed for students, professionals, and businesses.
              </p>
              
            </div>
          </div>
        </section>

        {/* Stats Section */}
        

        {/* Features Section */}
        

        {/* Products Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Our Products
            </h2>
            <div className="space-y-20">
              {products.map((product, index) => {
              const IconComponent = product.icon;
              const isEven = index % 2 === 0;
              return <div key={index} id={product.name.toLowerCase().replace('lawexa ', '')} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 animate-fade-in`}>
                    {/* Content */}
                    <div className="lg:w-1/2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{product.name}</h3>
                          <p className="text-primary font-semibold">{product.tagline}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-foreground mb-4">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-3">
                              <Check className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>)}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <button className="btn-gold hover-scale flex items-center gap-2">
                          {product.cta} <ArrowRight className="w-4 h-4" />
                        </button>
                        
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="lg:w-1/2">
                      <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-large hover-scale" />
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Available Everywhere
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{platform.name}</h3>
                    <p className="text-muted-foreground mb-3">{platform.description}</p>
                    <p className="text-sm text-primary font-semibold">{platform.availability}</p>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-slate-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-amber-400">
                Seamless Integration
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Lawexa integrates with your existing workflow and tools to provide legal intelligence exactly where you need it.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 bg-slate-900 rounded-2xl animate-fade-in border border-slate-800">
                  <h3 className="text-xl font-bold mb-3 text-amber-400">API Access</h3>
                  <p className="text-gray-300">Integrate our legal AI into your applications with our robust RESTful API.</p>
                </div>
                <div className="p-6 bg-slate-900 rounded-2xl animate-fade-in border border-slate-800">
                  <h3 className="text-xl font-bold mb-3 text-amber-400">Webhooks</h3>
                  <p className="text-gray-300">Get real-time notifications and updates directly in your existing systems.</p>
                </div>
                <div className="p-6 bg-slate-900 rounded-2xl animate-fade-in border border-slate-800">
                  <h3 className="text-xl font-bold mb-3 text-amber-400">Single Sign-On</h3>
                  <p className="text-gray-300">Enterprise-grade security with SSO integration for seamless access control.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the Lawexa solution that fits your needs and start transforming how you work with legal information today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gold hover-scale">
                Start Free Trial
              </button>
              <button className="btn-outline hover-scale">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Products;