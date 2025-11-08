import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

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

        </div>
      </div>
    </section>;
};
export default HeroSection;