import { useEffect, useState } from 'react';
import unilagLogo from '@/assets/logos/unilag-logo.png';
import ibadanLogo from '@/assets/logos/ibadan-logo.png';
import templarsLogo from '@/assets/logos/templars-logo.png';
import molandLogo from '@/assets/logos/moland-logo.png';
import kennaLogo from '@/assets/logos/kenna-logo.png';
import knustLogo from '@/assets/logos/knust-logo.png';
import oauLogo from '@/assets/logos/oau-logo.png';
import bazeLogo from '@/assets/logos/baze-logo.png';
import alukoLogo from '@/assets/logos/aluko-logo.jpeg';
import colorfulLogo from '@/assets/logos/colorful-logo.png';

const UniversityCarousel = () => {
  const [currentOffset, setCurrentOffset] = useState(0);

  const organizations = [
    { name: 'University of Lagos', logo: unilagLogo },
    { name: 'University of Ibadan', logo: ibadanLogo },
    { name: 'Templars', logo: templarsLogo },
    { name: 'Moland Partners', logo: molandLogo },
    { name: 'Kenna Partners', logo: kennaLogo },
    { name: 'KNUST', logo: knustLogo },
    { name: 'Obafemi Awolowo University', logo: oauLogo },
    { name: 'Baze University', logo: bazeLogo },
    { name: 'Aluko & Oyebode', logo: alukoLogo },
    { name: 'Partner Organization', logo: colorfulLogo },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedOrganizations = [...organizations, ...organizations, ...organizations];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffset(prev => {
        const newOffset = prev - 0.1;
        // Reset when we've scrolled through the first set
        if (newOffset <= -50) {
          return 0;
        }
        return newOffset;
      });
    }, 80); // Slower, smoother movement

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-transparent py-4">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      
      <div 
        className="flex space-x-8 whitespace-nowrap transition-transform duration-75 ease-linear"
        style={{ transform: `translateX(${currentOffset}%)` }}
      >
        {duplicatedOrganizations.map((org, index) => (
          <div
            key={`${org.name}-${index}`}
            className="flex-shrink-0 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <img 
              src={org.logo} 
              alt={org.name}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityCarousel;