import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { joinWaitlist, getReferralCodeFromUrl } from '@/lib/waitlist-api';

const HeroSection = () => {
  console.log('🔵 HeroSection component loaded!');

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('🟢 handleSubmit called!', { email });
    e.preventDefault();

    if (!email) {
      console.log('Email validation failed');
      toast({
        title: "Missing Information",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    console.log('Setting loading state to true');
    setIsLoading(true);

    try {
      const referralCode = getReferralCodeFromUrl();
      const requestData: any = { email };

      if (referralCode) {
        requestData['waitlist-ref'] = referralCode;
      }

      console.log('Calling joinWaitlist API...');
      const response = await joinWaitlist(requestData);

      console.log('API response:', response);

      // Store data in sessionStorage to pass to success page
      sessionStorage.setItem('waitlistData', JSON.stringify(response.data));

      toast({
        title: "Welcome to the Waitlist! 🎉",
        description: `You're #${response.data.position} on the list!`
      });

      // Navigate to waitlist page or show success
      navigate('/waitlist');
    } catch (error: any) {
      console.error('Error joining waitlist:', error);

      if (error.status === 0) {
        toast({
          title: "Connection Error",
          description: error.message || "Unable to connect to the server. Please check your connection and try again.",
          variant: "destructive"
        });
      } else if (error.status === 422) {
        const errorMessage = error.errors?.email?.[0] || error.message || "This email is already on the waitlist.";
        toast({
          title: "Unable to Join",
          description: errorMessage,
          variant: "destructive"
        });
      } else if (error.status === 429) {
        toast({
          title: "Too Many Requests",
          description: "Please wait a moment and try again.",
          variant: "destructive"
        });
      } else if (error.status === 403 || error.status === 401) {
        toast({
          title: "Access Denied",
          description: "Unable to access the waitlist service. Please try again later.",
          variant: "destructive"
        });
      } else {
        const errorMsg = error.message || error.text || "Please try again later or contact support.";
        toast({
          title: "Something went wrong",
          description: errorMsg,
          variant: "destructive"
        });
      }
    } finally {
      setIsLoading(false);
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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="h-14 text-lg bg-white/95 backdrop-blur-sm border-2 border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground w-full sm:w-96 rounded-xl shadow-lg"
                required
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="lg"
                className="btn-gold text-lg px-8 h-14 whitespace-nowrap w-full sm:w-auto rounded-xl shadow-lg hover:scale-105 transition-transform"
                disabled={isLoading}
                onClick={(e) => {
                  console.log('🔴 Button clicked!', e);
                }}
              >
                {isLoading ? 'Joining...' : 'Get Early Access'}
              </Button>
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