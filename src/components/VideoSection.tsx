import { useState } from 'react';
import { Play, X } from 'lucide-react';
const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <section className="py-20 bg-lawexa-dark text-white bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Built By Lawyers. Powered By AI

        </h2>
          

          {/* Video Thumbnail */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-large cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => setIsModalOpen(true)}>
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80" alt="Lawexa team collaboration" className="w-full aspect-video object-cover" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="bg-primary rounded-full p-6 hover:scale-110 transition-transform duration-300 shadow-gold">
                  <Play className="w-12 h-12 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-black rounded-xl overflow-hidden max-w-4xl w-full">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 z-10 bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors duration-200">
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Video Player Placeholder */}
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-white text-lg">Video Player Placeholder</p>
                <p className="text-gray-400 text-sm mt-2">
                  Connect your video source here
                </p>
              </div>
            </div>
          </div>
        </div>}
    </section>;
};
export default VideoSection;