import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Lawexa a replacement for a lawyer?",
      answer: "No. Lawexa provides step-by-step legal information to help you know the law and understand legal documents. It is not legal advice. For complex matters, formal representation, or court proceedings, Lawexa connects you with a qualified lawyer near you and within your budget."
    },
    {
      question: "How accurate is Lawexa?",
      answer: "Lawexa is built on comprehensive legal databases for high accuracy. However, law can be complex and jurisdiction-specific, so always verify important information and consult professionals for critical decisions."
    },
    {
      question: "What types of documents can I upload?",
      answer: "Contracts, tenancy agreement, employment agreements, NDAs and most other legal documents including class notes, materials, slides in PDF, PPT, Docx, Word or image format."
    },
    {
      question: "Can I cancel my subscription plan at any time?",
      answer: "Yes, you can cancel your subscription at any time through your account settings. Your access will continue until the end of your current billing period."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team for a full refund."
    },
    {
      question: "Is Lawexa available outside Nigeria?",
      answer: "Currently, Lawexa is optimized for Nigerian law and legal system. We're working on expanding to other African jurisdictions. Stay tuned for updates!"
    },
    {
      question: "Is my information secure and confidential?",
      answer: "Yes. We use enterprise-grade encryption, never share your documents or questions, and follow strict data protection protocols. Your privacy and confidentiality are our top priorities."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
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
                className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
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