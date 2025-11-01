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
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
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
        description: "We'll notify you when Lawexa launches.",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center fade-in bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
        <p className="text-gray-100">
          We'll send you an email at <span className="text-primary font-semibold">{email}</span> when we launch.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto fade-in">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-large">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h3>
          <p className="text-gray-100">Be among the first to experience legal intelligence powered by AI.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 btn-gold text-lg group"
            disabled={isLoading}
          >
            {isLoading ? (
              'Joining...'
            ) : (
              <>
                <Mail className="mr-2 h-5 w-5" />
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
        
        <p className="text-xs text-gray-200 text-center mt-4">
          No spam, ever. We'll only notify you when Lawexa launches.
        </p>
      </div>
    </div>
  );
};

export default WaitlistForm;
