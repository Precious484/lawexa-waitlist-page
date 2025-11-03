import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Briefcase, Users, ArrowRight, CheckCircle2, TrendingUp, Award, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import caseLibraryInterface from '@/assets/case-library-interface.png';
import statuteInterface1 from '@/assets/statute-interface-1.png';
import statuteInterface2 from '@/assets/statute-interface-2.png';
const UseCases = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userStories = [
    {
      icon: <GraduationCap className="w-16 h-16 text-primary" />,
      category: "Law Student",
      name: "Sarah's Journey to Top Grades",
      problem: "Sarah struggled with understanding complex case law and spent countless hours in the library, often feeling overwhelmed by dense legal texts and competing deadlines.",
      solution: "With Lawexa's AI tutor, Sarah now breaks down complex cases in minutes instead of hours. She uses the intelligent case summaries to grasp key principles quickly, then dives deeper with contextual explanations.",
      results: [
        "Improved grades from B+ to A- average",
        "Reduced study time by 40%",
        "Gained confidence in class discussions",
        "Built comprehensive case notes library"
      ],
      quote: "Lawexa didn't just help me pass my exams—it helped me truly understand the law. I went from struggling with case analysis to leading study groups.",
      image: caseLibraryInterface,
      stats: { value: "40%", label: "Time Saved" }
    },
    {
      icon: <Briefcase className="w-16 h-16 text-primary" />,
      category: "Legal Professional",
      name: "David's Practice Transformation",
      problem: "David, a young attorney, was drowning in billable hours spent on basic legal research and contract reviews, leaving little time for strategic client work.",
      solution: "Lawexa became David's research assistant—quickly finding relevant precedents, drafting initial contract clauses, and flagging potential legal issues for review.",
      results: [
        "Freed up 10+ hours weekly for client work",
        "Increased billable efficiency by 60%",
        "Improved client satisfaction scores",
        "Expanded practice to take on more cases"
      ],
      quote: "Lawexa handles the routine research while I focus on strategy and client relationships. My practice has grown 30% without hiring additional staff.",
      image: statuteInterface2,
      stats: { value: "10+", label: "Hours Saved Weekly" }
    },
    {
      icon: <Users className="w-16 h-16 text-primary" />,
      category: "Business Owner",
      name: "Michael's Confident Decisions",
      problem: "Michael was facing mounting legal costs every time he needed to review a vendor contract or understand employment obligations for his growing team.",
      solution: "Now Michael uses Lawexa to review contracts before meetings with his lawyer, understand his legal obligations, and make informed decisions quickly without racking up consultation fees.",
      results: [
        "Reduced legal consultation costs by 70%",
        "Faster contract negotiations",
        "Better understanding of business obligations",
        "Prevented costly legal mistakes"
      ],
      quote: "I used to be afraid of anything legal. Lawexa explained my lease agreement so clearly that I negotiated better terms and saved $15,000 annually.",
      image: statuteInterface1,
      stats: { value: "70%", label: "Cost Reduction" }
    }
  ];

  const impactMetrics = [
    { icon: <Clock className="w-8 h-8" />, value: "10M+", label: "Hours Saved" },
    { icon: <Award className="w-8 h-8" />, value: "95%", label: "User Satisfaction" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "40%", label: "Productivity Boost" },
    { icon: <CheckCircle2 className="w-8 h-8" />, value: "50K+", label: "Cases Analyzed" }
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-background via-background to-primary/10 overflow-hidden">
          <div className="absolute inset-0 hero-grid"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Real People. <span className="text-primary">Real Results.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how Lawexa is transforming legal work for students, professionals, and everyday people across Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-center mb-3 text-primary">
                    {metric.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Stories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Success Stories</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See how Lawexa creates meaningful impact in the lives of our users
              </p>
            </div>

            <div className="space-y-24">
              {userStories.map((story, index) => (
                <div key={index} className="fade-in grid lg:grid-cols-2 gap-12 items-center" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Story Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        {story.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary uppercase tracking-wide">{story.category}</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{story.name}</h3>
                      </div>
                    </div>

                    <Card className="p-6 mb-6 bg-destructive/5 border-l-4 border-destructive">
                      <p className="text-sm font-semibold text-destructive mb-2">The Challenge:</p>
                      <p className="text-foreground">{story.problem}</p>
                    </Card>

                    <Card className="p-6 mb-6 bg-primary/5 border-l-4 border-primary">
                      <p className="text-sm font-semibold text-primary mb-2">The Solution:</p>
                      <p className="text-foreground">{story.solution}</p>
                    </Card>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-3 text-foreground">Results Achieved:</h4>
                      <div className="space-y-2">
                        {story.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Card className="p-6 bg-card border-primary/20">
                      <p className="text-foreground italic mb-3">"{story.quote}"</p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-primary">— {story.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{story.stats.value}</div>
                          <div className="text-xs text-muted-foreground">{story.stats.label}</div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Story Image */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-float">
                      <img 
                        src={story.image} 
                        alt={`${story.name} - Lawexa interface showcase`}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="container mx-auto px-4 text-center fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Write Your Own Success Story</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands who are already transforming their legal work with Lawexa. Your journey starts here.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => {
                window.location.href = '/';
                setTimeout(() => {
                  const waitlistSection = document.querySelector('#waitlist') || document.querySelector('form');
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              Request Your Invitation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;