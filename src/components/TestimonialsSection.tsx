import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RollingNumber from './RollingNumber';
import UniversityCarousel from './UniversityCarousel';
import avatarLawyerFemale from '@/assets/avatar-lawyer-female.jpg';
import avatarStudentMale from '@/assets/avatar-student-male.jpg';
import avatarProfessionalFemale from '@/assets/avatar-professional-female.jpg';
import avatarStudentFemale from '@/assets/avatar-student-female.jpg';
import avatarProfessionalMale from '@/assets/avatar-professional-male.jpg';
import avatarLawyerMale from '@/assets/avatar-lawyer-male.jpg';
const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [{
    quote: "It feels like the app just understands what I need. I open it boom I see the case we treated in class in trending cases and recommended folder",
    name: "Kehinde",
    title: "Student, 300L Unilag",
    type: "Student",
    avatar: avatarStudentMale
  }, {
    quote: "I honestly didn't expect it to be this good. I use it for everything. I just open Lawexa AI and get what I need instantly",
    name: "Princess Anyanwu",
    title: "Associate, Midland Partners",
    type: "Lawyer",
    avatar: avatarLawyerFemale
  }, {
    quote: "It explained a legal notice I didn't understand. Lifesaver!",
    name: "Jesse Ezeag",
    title: "CEO, Cocoa Technologies Ltd",
    type: "Professional",
    avatar: avatarProfessionalMale
  }, {
    quote: "I use it to review agreements before I sign them. It has saved me from bad deals multiple times",
    name: "Anonymous User",
    title: "Business Owner",
    type: "Professional",
    avatar: avatarProfessionalFemale
  }, {
    quote: "As a final year student, Lawexa has been my secret weapon. The AI explains complex cases in simple terms and helps me understand legal principles better",
    name: "Adaora Okwu",
    title: "Student, 500L University of Nigeria",
    type: "Student",
    avatar: avatarStudentFemale
  }, {
    quote: "The contract analysis feature is phenomenal. It caught clauses in my partnership agreement that could have cost me millions",
    name: "David Chen",
    title: "Tech Entrepreneur",
    type: "Professional",
    avatar: avatarProfessionalMale
  }, {
    quote: "Lawexa's case database is incredible. I can find relevant precedents in seconds instead of hours of research",
    name: "Barrister Amina Hassan",
    title: "Senior Advocate, Supreme Court",
    type: "Lawyer",
    avatar: avatarLawyerMale
  }, {
    quote: "The AI tutor feature is like having a personal professor available 24/7. It's transformed how I study for my bar exams",
    name: "Michael Oduya",
    title: "Law School Graduate",
    type: "Student",
    avatar: avatarStudentMale
  }];
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 4000); // Continuous auto-scroll
    return () => clearInterval(interval);
  }, [isPaused]);
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Student':
        return 'bg-blue-100 text-blue-800';
      case 'Lawyer':
        return 'bg-primary/10 text-primary';
      case 'Professional':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            <RollingNumber value={15000} formatNumber={num => `${num.toLocaleString()}+`} /> Active Users
          </h2>
          
          
          {/* University Carousel */}
          <UniversityCarousel />
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${currentSlide * (100 / 3)}%)`
          }}>
              {testimonials.map((testimonial, index) => <div 
                  key={index} 
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="bg-white rounded-xl p-6 shadow-soft card-hover h-full">
                    {/* Type Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(testimonial.type)}`}>
                        {testimonial.type}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center space-x-3">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full bg-gray-200" />
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-medium hover:shadow-large transition-all duration-300">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-medium hover:shadow-large transition-all duration-300">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'}`} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;