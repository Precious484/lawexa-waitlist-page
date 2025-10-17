import { Button } from '@/components/ui/button';
const DownloadSection = () => {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Download The<br />Lawexa App
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Get legal cases and statutes, offline access, AI Tutor and many more at your fingertips
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-black text-white hover:bg-black/90 flex items-center space-x-3 px-6 py-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="font-semibold text-white text-base">App Store</div>
                </div>
              </Button>
              
              <Button className="bg-black text-white hover:bg-black/90 flex items-center space-x-3 px-6 py-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="font-semibold text-white text-base">Google Play</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-large hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
                  
                  {/* Screen Content */}
                  <div className="pt-8 px-4 h-full bg-gradient-to-b from-primary/10 to-white">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">Welcome to Lawexa</h3>
                      <p className="text-sm text-muted-foreground">Legal Intelligence at your fingertips</p>
                    </div>
                    
                    {/* Feature Cards */}
                    <div className="space-y-4">
                      <div className="bg-primary text-primary-foreground p-4 rounded-xl">
                        <div className="text-sm font-semibold">🤖 AI Legal Tutor</div>
                        <div className="text-xs opacity-90 mt-1">Ask any legal question</div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl shadow-soft">
                        <div className="text-sm font-semibold text-foreground">📚 Case Library</div>
                        <div className="text-xs text-muted-foreground mt-1">20,000+ cases available</div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl shadow-soft">
                        <div className="text-sm font-semibold text-foreground">📸 Note Scanner</div>
                        <div className="text-xs text-muted-foreground mt-1">Convert handwritten notes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DownloadSection;