import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast({
        title: "Welcome to the Waitlist! 🎉",
        description: "We'll notify you when Lawexa launches."
      });
    }, 1000);
  };
  if (isSubmitted) {
    return <div className="max-w-2xl mx-auto text-center fade-in bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
        <p className="text-gray-100">
          We'll send you an email at <span className="text-primary font-semibold">{email}</span> when we launch.
        </p>
      </div>;
  }
  return <div className="max-w-2xl mx-auto fade-in">
      <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-3">
            Join the Legal Revolution
          </h3>
          <p className="text-muted-foreground text-lg">
            Be among the first to experience AI-powered legal research built for Africa. 
            <span className="text-primary font-semibold"> Limited early access spots available.</span>
          </p>
        </div>
        
        <div className="space-y-4">
          <div>
            <Input type="text" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} className="h-12 bg-background/50 border-border text-foreground placeholder:text-muted-foreground" required />
          </div>
          
          <div>
            <Input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} className="h-12 bg-background/50 border-border text-foreground placeholder:text-muted-foreground" required />
          </div>
          
          <Button type="submit" className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90" disabled={isLoading}>
            {isLoading ? "Securing Your Spot..." : <>
                Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
              </>}
          </Button>
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-6">💎 Members get huge discounts • 🚀 Beta access to all features • 🎯 Exclusive Updates</p>
      </form>
    </div>;
};
export default WaitlistForm;