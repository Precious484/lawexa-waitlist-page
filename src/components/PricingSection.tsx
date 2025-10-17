import { useState } from 'react';
import { Check, FileText, Users, Book, CreditCard } from 'lucide-react';
const PricingSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const plans = [{
    name: 'Free Plan',
    subtitle: 'Explore Lawexa Risk-Free',
    icon: FileText,
    prices: {
      monthly: '₦0',
      '6months': '₦0',
      '1year': '₦0'
    },
    period: {
      monthly: '/month • No credit card required',
      '6months': '/6 months • No credit card required',
      '1year': '/yearly • No credit card required'
    },
    perfectFor: 'Perfect for: First-time users wanting to test our platform',
    description: 'Get a generous taste of Lawexa\'s power with monthly usage limits designed to showcase our capabilities. Perfect for exploring before committing - 87% of our users started here first.',
    features: ['Access to Lawexa Student (10 queries/month)', 'Access to Lawexa Assistant (5 Documents/month)', 'Laws and Statutes', 'Knowledge Library Access'],
    buttonText: 'Start Free',
    buttonStyle: 'bg-lawexa-gold text-black hover:bg-lawexa-gold/90',
    popular: false,
    bottomText: 'Set up in under 60 seconds'
  }, {
    name: 'Student Plan',
    subtitle: 'Academic Excellence',
    icon: Book,
    prices: {
      monthly: '₦4,900',
      '6months': '₦26,460',
      '1year': '₦47,040'
    },
    originalPrices: {
      '6months': '₦29,400',
      '1year': '₦58,800'
    },
    period: {
      monthly: '/monthly',
      '6months': '/6 months',
      '1year': '/yearly'
    },
    perfectFor: 'Perfect for: Law students who want to excel and graduate top of their class',
    description: 'Transform your study experience with AI-powered tools designed specifically for academic success. Plus, get a taste of Lawexa Assistant features to prepare for your career.',
    features: ['Database Access & Smart Search', 'AI Tutor (Your 24/7 Study Companion)', 'Flashcard Generation & Picture-to-Note Conversion'],
    buttonText: 'Claim Student Discount',
    buttonStyle: 'bg-white text-black hover:bg-gray-100',
    popular: false,
    testimonial: {
      quote: '"Before lawexa, I spent 6 hours researching one case. Now I get comprehensive analysis in minutes. My GPA jumped from 3.2 to 4.1!"',
      author: '- Kemi A., Final Year Student, University of Lagos'
    },
    bottomText: 'Cancel anytime'
  }, {
    name: 'Assistant Plan',
    subtitle: 'Your Personal Legal AI',
    icon: Users,
    prices: {
      monthly: '₦25,000',
      '6months': '₦135,000',
      '1year': '₦240,000'
    },
    originalPrices: {
      '6months': '₦150,000',
      '1year': '₦300,000'
    },
    period: {
      monthly: '/monthly',
      '6months': '/6 months',
      '1year': '/yearly'
    },
    perfectFor: 'Perfect for: Professionals, entrepreneurs & everyday Nigerians who need legal clarity',
    description: 'Stop paying ₦50,000+ for simple legal consultations. Get unlimited access to Nigeria\'s most advanced legal AI that works 24/7 for a fraction of the cost of one lawyer visit.',
    features: ['Legal Contract Generation & Analysis', 'Smart Legal Assistant (Ask anything!)', 'Smart Lawyer Connect & Priority Support'],
    buttonText: 'Get Lawexa Assistant',
    buttonStyle: 'bg-lawexa-gold text-black hover:bg-lawexa-gold/90',
    popular: true,
    savings: 'Average User Saves: ₦180,000/month in legal fees',
    testimonial: {
      quote: '"As a small business owner, Lawexa is like having a lawyer on speed dial. I\'ve saved a lot in legal fees honestly!"',
      author: '- Kelvin Obimba, Freelance Graphic Designer'
    }
  }, {
    name: 'Corporate Plan',
    subtitle: 'Scale Your Legal Operations',
    icon: CreditCard,
    prices: {
      monthly: '₦100,000',
      '6months': '₦540,000',
      '1year': '₦960,000'
    },
    originalPrices: {
      '6months': '₦600,000',
      '1year': '₦1,200,000'
    },
    period: {
      monthly: '/monthly',
      '6months': '/6 months',
      '1year': '/yearly'
    },
    perfectFor: 'Perfect for: Growing teams who need collaborative legal intelligence',
    description: 'Equip your entire team with enterprise-grade legal AI. Perfect for startups, SMEs, and any business serious about legal compliance and efficiency.',
    features: ['Up to 5 User Accounts & Team Collaboration', 'Admin Dashboard & Usage Analytics', 'Dedicated Account Manager & API Access'],
    buttonText: 'Get Corporate Plan',
    buttonStyle: 'bg-white text-black hover:bg-gray-100',
    popular: false,
    testimonial: {
      quote: '"Our team replaced our ₦500,000/month legal retainer with lawexa. We get faster responses on quick legal questions we have concerning our operations and connects us directly to domain expert lawyers for a large fraction of the cost we spent on the retainer"',
      author: '- Jesse E., CEO, Codessy Technologies Limited'
    },
    bottomText: 'Free onboarding • Dedicated success manager'
  }];
  const periods = [{
    id: 'monthly',
    label: 'Monthly',
    saveLabel: null
  }, {
    id: '6months',
    label: '6 months',
    saveLabel: 'Save 10%'
  }, {
    id: '1year',
    label: 'Yearly',
    saveLabel: 'Save 20%'
  }];
  return <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground md:text-5xl">
            Unlock Your Legal Advantage
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Join 10,000+ professionals who save 15+ hours per week with AI-powered legal intelligence
          </p>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 flex items-center border border-slate-200 shadow-sm">
              {periods.map(period => <button key={period.id} onClick={() => setSelectedPeriod(period.id)} className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 relative ${selectedPeriod === period.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                  {period.label}
                   {period.saveLabel && selectedPeriod !== 'monthly' && <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      {period.saveLabel}
                    </span>}
                </button>)}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {plans.map(plan => {
          const IconComponent = plan.icon;
          return <div key={plan.name} className={`relative bg-white p-8 rounded-2xl border flex flex-col ${plan.popular ? 'border-2 border-primary shadow-xl' : 'border-slate-200'} hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:border-primary/50`}>
                {plan.popular && <div className="absolute top-0 right-0 -mt-6 mr-4 py-2 px-4 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg">
                    Most Popular
                  </div>}

                {/* Icon */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="font-bold text-2xl sm:text-3xl mb-2 text-foreground">
                    {plan.name}
                  </h3>
                  <p className="font-bold text-lg mb-4 text-muted-foreground">
                    {plan.subtitle}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-2">
                    {plan.originalPrices && plan.originalPrices[selectedPeriod] && selectedPeriod !== 'monthly' && <div className="text-sm text-muted-foreground line-through text-center mb-1">
                        {plan.originalPrices[selectedPeriod]}
                      </div>}
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-foreground break-words">
                      {plan.prices[selectedPeriod]}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.period[selectedPeriod]}
                  </p>

                  {/* Perfect For & Description */}
                  <p className="text-center font-semibold text-sm mb-4 text-foreground">
                    {plan.perfectFor}
                  </p>
                  <p className="text-center text-sm mb-6 text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="w-full flex-grow">
                  <h4 className="font-bold mb-2 text-foreground">
                    {plan.name === 'Free Plan' ? 'What You Get:' : 'Everything in Free, PLUS:'}
                  </h4>
                  <ul className="text-sm space-y-3 mb-6 text-muted-foreground">
                    {plan.features.map((feature, index) => <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                </div>

                {plan.testimonial && <div className="bg-slate-50 p-4 rounded-lg mb-6 w-full border border-slate-200">
                    <p className="italic text-sm text-muted-foreground mb-2">
                      {plan.testimonial.quote}
                    </p>
                    <p className="font-bold text-sm text-foreground">
                      {plan.testimonial.author}
                    </p>
                  </div>}

                {/* CTA Button */}
                <div className="w-full mt-auto">
                  <button className={`w-full px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>;
        })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            All plans include 24/7 customer support and regular feature updates
          </p>
        </div>
      </div>
    </section>;
};
export default PricingSection;