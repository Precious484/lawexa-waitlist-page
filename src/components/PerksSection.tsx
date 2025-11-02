import { Gift, Ticket, Percent, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PerksSection = () => {
  const perks = [
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "Free Exclusive Access",
      description: "Get unlimited access to the app completely free until launch"
    },
    {
      icon: <Ticket className="w-8 h-8 text-primary" />,
      title: "Launch Event Invitation",
      description: "Stand a chance to be invited to the exclusive Launch Event in Lagos, Nigeria"
    },
    {
      icon: <Percent className="w-8 h-8 text-primary" />,
      title: "Huge Launch Discount",
      description: "Get up to 1-year subscription at a massive discount when we launch"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Win Prizes by Sharing",
      description: "Get a chance to win amazing prizes just by sharing the invite link with your peers"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Perks for Early Access Members
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join the waitlist today and unlock exclusive benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {perks.map((perk, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-soft card-hover border border-border fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3">
                  {perk.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {perk.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Community CTA */}
        <div className="text-center bg-card rounded-2xl p-8 max-w-3xl mx-auto shadow-xl border border-border fade-in enhanced-hover">
          <Users className="w-12 h-12 text-primary mx-auto mb-4 animate-scale-in" />
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            Join the Lawexa Community
          </h3>
          <p className="text-muted-foreground mb-6">
            Stay updated on our announcements and connect with peers
          </p>
          <Button 
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white hover-scale"
            onClick={() => window.open('https://chat.whatsapp.com/CNDMnd0eWYp4Qiy7k4oVlL', '_blank', 'noopener,noreferrer')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Join WhatsApp Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PerksSection;
