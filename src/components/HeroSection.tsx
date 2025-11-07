import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Missing Information",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to the Waitlist! 🎉",
        description: "We'll notify you when Lawexa launches.",
      });
      setEmail(''); // Clear the email field after successful submission
    }, 1000);
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
                <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="h-14 text-lg bg-white/95 backdrop-blur-sm border-2 border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground w-full sm:w-96 rounded-xl shadow-lg" required />
                <Button type="submit" size="lg" className="btn-gold text-lg px-8 h-14 whitespace-nowrap w-full sm:w-auto rounded-xl shadow-lg hover:scale-105 transition-transform" disabled={isLoading}>
                  {isLoading ? "Joining..." : "Get Early Access"}
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