import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "When will Lawexa officially launch?",
      answer: "We're planning to launch in the coming months! By joining the waitlist, you'll be among the first to know when we go live and get exclusive early access before the public launch."
    },
    {
      question: "What happens after I join the waitlist?",
      answer: "Once you join, you'll receive a confirmation email and regular updates about our progress. You'll also get exclusive perks like free access until launch, launch event invitations, and special discounts."
    },
    {
      question: "How many spots are available on the waitlist?",
      answer: "We're limiting early access to 1,000 members to ensure the best experience. With only 624 spots remaining, we encourage you to join now to secure your place!"
    },
    {
      question: "Is joining the waitlist free?",
      answer: "Yes! Joining the waitlist is completely free, and you'll get free exclusive access to the app until our official launch."
    },
    {
      question: "How can I move up the waitlist faster?",
      answer: "Share Lawexa on Twitter, Instagram, or LinkedIn and tag us! You'll automatically move up the waitlist and increase your chances of winning prizes."
    },
    {
      question: "What are the benefits of being an early access member?",
      answer: "Early members get free app access until launch, potential invitations to our Lagos launch event, huge subscription discounts (up to 1 year!), and chances to win prizes by sharing with peers."
    },
    {
      question: "Will my data be safe?",
      answer: "Absolutely. We use enterprise-grade encryption and follow strict data protection protocols. Your information is secure, confidential, and will never be shared with third parties."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Can't find your answer here?{' '}
              <a href="#contact" className="text-primary hover:text-primary/80 transition-colors duration-200">
                Contact us
              </a>
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 fade-in hover-scale border border-border"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openFAQ === index ? (
                      <Minus className="w-6 h-6 text-primary" />
                    ) : (
                      <Plus className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6 -mt-2">
                    <div className="h-px bg-gray-200 mb-4"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;