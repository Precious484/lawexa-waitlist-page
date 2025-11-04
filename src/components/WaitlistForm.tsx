import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Zap, Scale, Lightbulb, Compass, TrendingUp, Sparkles, Users, Gift } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import caseLibraryInterface from '@/assets/case-library-interface.png';
import communityFoldersInterface from '@/assets/community-folders-interface.png';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Missing Information",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast({
        title: "Welcome to the Waitlist! 🎉",
        description: "We'll notify you when Lawexa launches."
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-3xl p-12">
            <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
            <h3 className="text-4xl font-bold text-foreground mb-4">You're on the list!</h3>
            <p className="text-muted-foreground text-lg">
              We'll send you an email at <span className="text-primary font-semibold">{email}</span> when we launch.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Your classmates aren't smarter than you.<br />
              <span className="text-primary">They're just using Lawexa.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
              The AI legal assistant that makes law easy.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Ask any legal question. Search any case or statute. Understand complex concepts and Crush exams.
            </p>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Public Launch Coming Soon</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Click below to join <span className="text-primary font-bold">1,247+ students</span> already on early access.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="📩 Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-lg bg-background border-border"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-bold"
                  disabled={isLoading}
                >
                  {isLoading ? "Joining..." : (
                    <>
                      <Zap className="mr-2 h-5 w-5" />
                      Get Early Access
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Love Lawexa */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Students Love Lawexa
            </h2>
            <p className="text-xl text-muted-foreground">
              Lawexa isn't just another "legal app."<br />
              It's the secret weapon that turns struggling students into top performers.
            </p>
            <p className="text-lg text-primary font-semibold mt-4">
              Better tools. Better results.
            </p>
          </div>

          {/* Feature 1: Find Cases */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-8 h-8 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">Find Any Case Instantly</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  20,000+ cases, statutes, and study notes. One search away.<br />
                  You can ask naturally:
                </p>
                <div className="space-y-3 mb-6 bg-card border border-border rounded-xl p-6">
                  <p className="text-foreground">"Cases on breach of contract in employment law"</p>
                  <p className="text-foreground">"Explain the ratio in Donoghue v Stevenson"</p>
                  <p className="text-foreground">"Supreme Court decisions on locus standi"</p>
                </div>
                <p className="text-lg text-foreground font-semibold mb-2">Get precise answers in 10 seconds.</p>
                <p className="text-muted-foreground mb-4">
                  No dusty law reports. No wasted hours.<br />
                  Spend less time searching. Understand more.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img 
                  src={caseLibraryInterface} 
                  alt="Case search interface" 
                  className="rounded-2xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: AI Tutor */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={caseLibraryInterface} 
                  alt="AI tutor chat interface" 
                  className="rounded-2xl shadow-2xl border border-border"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">Understand the Law</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Your personal AI tutor.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">It explains tough concepts in plain English.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">Gives real examples you can relate to.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">Tests you with built-in flashcards and quizzes.</span>
                  </li>
                </ul>
                <p className="text-lg text-primary font-semibold">
                  Stop memorizing. Start mastering.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Community Folders */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Compass className="w-8 h-8 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">Get Study Notes on Courses taught in class</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  With Community study folders curated by real students + Lawexa AI.<br />
                  Each folder includes:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">All relevant cases for the topic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">Key statutory sections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">Notes from scholars</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  It's like having the perfect study pack for every subject.
                </p>
                <p className="text-lg text-foreground font-semibold mb-4">
                  The best part? Create and publish your own in seconds.
                </p>
                <p className="text-primary">
                  Learn from others. Share what you know. Build your reputation.
                </p>
                
                <div className="mt-8 bg-card border border-border rounded-xl p-6">
                  <p className="text-foreground italic mb-3">
                    "Found a Constitutional Law folder with everything I needed. Saved me 10 hours of research."
                  </p>
                  <p className="text-muted-foreground">— Ibrahim, 200L Unilag</p>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <img 
                  src={communityFoldersInterface} 
                  alt="Community folders interface" 
                  className="rounded-2xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>

          {/* Feature 4: Trending */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={communityFoldersInterface} 
                  alt="Trending feed interface" 
                  className="rounded-2xl shadow-2xl border border-border"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">Stay Ahead of Everyone Else</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  See what your classmates are reading. Right now with:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <span className="text-foreground">Trending cases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🔥</span>
                    <span className="text-foreground">Trending topics in your class</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <span className="text-foreground">Popular study folders</span>
                  </li>
                </ul>
                <p className="text-lg text-foreground font-semibold mb-4">
                  Always know what's important. Never miss what matters.
                </p>
                <p className="text-muted-foreground mb-6">
                  Perfect if you miss class sometimes. Lawexa's got you covered.
                </p>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="text-foreground italic mb-3">
                    "I open Lawexa and boom—the case we just covered is right there with explanations. Life saver."
                  </p>
                  <p className="text-muted-foreground">— Kehinde, 300L UNILAG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shape What We Build */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-10 h-10 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Shape What We Build
              </h2>
            </div>
            <p className="text-xl text-muted-foreground">
              As an early member, you're not just using Lawexa—you're building it with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Weekly Q&A With Founders</h3>
              <p className="text-muted-foreground">
                Ask questions. Share feedback. Get early feature previews.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Exclusive Lagos Launch Event</h3>
              <p className="text-muted-foreground">
                Join the first Lawexa student community offline. Network with ambitious students.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Vote On Features</h3>
              <p className="text-muted-foreground">
                Your feedback shapes what we build next.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-primary font-semibold">
              Top students don't just use tools. They influence them.
            </p>
          </div>
        </div>
      </section>

      {/* What Early Members Get */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
              What Early Members Get
            </h2>
            
            <div className="space-y-6 mb-16">
              <div className="bg-card border border-border rounded-2xl p-8 flex items-start gap-6">
                <span className="text-4xl font-bold text-primary">1.</span>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">🎓 Free Access Until Launch</h3>
                  <p className="text-muted-foreground">Full access to all features at no cost while we're in early access.</p>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8 flex items-start gap-6">
                <span className="text-4xl font-bold text-primary">2.</span>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">🎟️ Lagos Launch Event Invitation</h3>
                  <p className="text-muted-foreground">Meet the team. Network with top students. Only top 100 early members get invited.</p>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8 flex items-start gap-6">
                <span className="text-4xl font-bold text-primary">3.</span>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">🎁 Referral Rewards</h3>
                  <p className="text-muted-foreground">Share Lawexa. Win prizes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Join 1,247 Students Already Inside
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="📩 Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-lg bg-background border-border"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-bold"
                  disabled={isLoading}
                >
                  {isLoading ? "Joining..." : (
                    <>
                      <Zap className="mr-2 h-5 w-5" />
                      Get Early Access — Limited Spots
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaitlistForm;