import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [step, setStep] = useState(1); // 1 = email step, 2 = name step
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check for referral code in URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refCode = params.get('waitlist-ref');
    if (refCode) {
      setReferralCode(refCode);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      // Step 1: Validate email and move to step 2
      if (!email) {
        toast({
          title: "Missing Information",
          description: "Please enter your email address.",
          variant: "destructive",
        });
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        return;
      }

      setStep(2);
    } else {
      // Step 2: Validate name and submit to API
      if (!name) {
        toast({
          title: "Missing Information",
          description: "Please enter your name.",
          variant: "destructive",
        });
        return;
      }

      setIsLoading(true);

      try {
        const payload: any = {
          email: email,
          name: name,
        };

        // Add referral code if present
        if (referralCode) {
          payload['waitlist-ref'] = referralCode;
        }

        const response = await fetch('https://waitlistapi.lawexa.com/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          toast({
            title: "Welcome to the Waitlist! 🎉",
            description: `You're #${data.data.position} on the list! Check your email for your referral link.`,
          });

          // Reset form
          setEmail('');
          setName('');
          setStep(1);
        } else {
          // Handle validation errors
          const errorMessage = data.message || 'Something went wrong. Please try again.';
          toast({
            title: "Error",
            description: errorMessage,
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Waitlist API error:', error);
        toast({
          title: "Connection Error",
          description: "Unable to connect to the waitlist. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Simple play attempt when component mounts
    const playVideo = () => {
      video.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    };

    // Try to play when video can play
    video.addEventListener('canplay', playVideo);

    // Also try immediately
    playVideo();
    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-16">
      {/* Video Background with solid black background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <video ref={videoRef} autoPlay loop muted playsInline preload="auto" className="absolute top-0 left-0 w-full h-full object-cover" style={{
        filter: 'brightness(0.7)'
      }}>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg px-4">
            <span className="text-white">Your classmates aren't smarter than you.</span>
            <br />
            <span className="text-primary">They're just using Lawexa.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl mb-12 px-4 text-gray-400 md:text-xl font-semibold">Understand Law. Find any Case. Ace every Exam</p>

          {/* Email Signup Form */}
          <div className="max-w-2xl mx-auto mb-6 px-4">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                {step === 1 ? (
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="h-14 text-lg bg-white/95 backdrop-blur-sm border-2 border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground w-full sm:w-96 rounded-xl shadow-lg"
                    required
                  />
                ) : (
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="h-14 text-lg bg-white/95 backdrop-blur-sm border-2 border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground w-full sm:w-96 rounded-xl shadow-lg"
                    required
                  />
                )}
                <Button
                  type="submit"
                  size="lg"
                  className="btn-gold text-lg px-8 h-14 whitespace-nowrap w-full sm:w-auto rounded-xl shadow-lg hover:scale-105 transition-transform"
                  disabled={isLoading}
                >
                  {isLoading ? "Joining..." : step === 1 ? "Get Early Access" : "Complete"}
                </Button>
              </div>
            </form>
            <p className="text-sm text-gray-300 mt-4 text-center">
              Join <span className="font-bold text-primary">1,247+ law students</span> already on early access.
            </p>
          </div>

        </div>
      </div>
    </section>;
};
export default HeroSection;