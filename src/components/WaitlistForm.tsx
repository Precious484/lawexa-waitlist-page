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
  const {
    toast
  } = useToast();
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
    return <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-card border-2 border-primary/20 rounded-3xl p-12 shadow-gold animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative">
                <CheckCircle className="w-24 h-24 text-primary mx-auto mb-6 animate-pulse" />
                <h3 className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
                  You're on the list!
                </h3>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  We'll send you an email at <span className="text-primary font-bold">{email}</span> when we launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-foreground">AI Legal Assistant that makes Law easy</span>
            </div>
            
            
            
            
            
            
            
            <div className="bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 rounded-3xl p-10 max-w-2xl mx-auto shadow-gold hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Sparkles className="w-7 h-7 text-primary animate-pulse" />
                <h3 className="text-3xl font-bold text-foreground">Public Launch Coming Soon</h3>
              </div>
              
              <p className="text-muted-foreground text-lg mb-8">
                Click below to join 1,247+ students already on early access.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input type="email" placeholder="📩 Enter your email address" value={email} onChange={e => setEmail(e.target.value)} className="h-16 text-lg bg-background/80 backdrop-blur-sm border-2 border-border focus:border-primary transition-all duration-300 rounded-xl" required />
                <Button type="submit" size="lg" className="w-full h-16 text-xl font-bold shadow-gold hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]" disabled={isLoading}>
                  {isLoading ? "Joining..." : <>
                      <Zap className="mr-2 h-6 w-6" />
                      Get Early Access
                    </>}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Love Lawexa */}
      <section className="py-24 bg-gradient-to-b from-muted/40 to-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Why Students Love Lawexa
            </h2>
            <p className="text-2xl text-muted-foreground mb-4 leading-relaxed">
              Lawexa isn't just another "legal app."<br />
              It's the <span className="text-primary font-bold">secret weapon</span> that turns struggling students into top performers.
            </p>
            <p className="text-xl text-primary font-bold mt-6 text-lg tracking-wide">
              Better tools. Better results.
            </p>
          </div>

          {/* Feature 1: Find Cases */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 shadow-sm">
                  <Scale className="w-10 h-10 text-primary" />
                  <h3 className="text-4xl font-bold text-foreground">Find Any Case Instantly</h3>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  <span className="text-primary font-bold">20,000+ cases</span>, statutes, and study notes. One search away.<br />
                  You can ask naturally:
                </p>
                <div className="space-y-4 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/10 rounded-2xl p-8 shadow-lg">
                  <p className="text-foreground text-lg italic">"Cases on breach of contract in employment law"</p>
                  <p className="text-foreground text-lg italic">"Explain the ratio in Donoghue v Stevenson"</p>
                  <p className="text-foreground text-lg italic">"Supreme Court decisions on locus standi"</p>
                </div>
                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
                  <p className="text-xl text-foreground font-bold mb-2">Get precise answers in 10 seconds.</p>
                  <p className="text-muted-foreground text-lg">
                    No dusty law reports. No wasted hours.<br />
                    Spend less time searching. Understand more.
                  </p>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <img src={caseLibraryInterface} alt="Case search interface" className="relative rounded-3xl shadow-2xl border-2 border-primary/20 hover:scale-[1.02] transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: AI Tutor */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <img src={caseLibraryInterface} alt="AI tutor chat interface" className="relative rounded-3xl shadow-2xl border-2 border-primary/20 hover:scale-[1.02] transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 shadow-sm">
                  <Lightbulb className="w-10 h-10 text-primary" />
                  <h3 className="text-4xl font-bold text-foreground">Understand the Law</h3>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Your <span className="text-primary font-bold">personal AI tutor.</span>
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 bg-gradient-to-br from-card to-muted/30 border border-primary/10 rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                    <CheckCircle className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">It explains tough concepts in plain English.</span>
                  </li>
                  <li className="flex items-start gap-4 bg-gradient-to-br from-card to-muted/30 border border-primary/10 rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                    <CheckCircle className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">Gives real examples you can relate to.</span>
                  </li>
                  <li className="flex items-start gap-4 bg-gradient-to-br from-card to-muted/30 border border-primary/10 rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                    <CheckCircle className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">Tests you with built-in flashcards and quizzes.</span>
                  </li>
                </ul>
                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
                  <p className="text-xl text-primary font-bold">
                    Stop memorizing. Start mastering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Community Folders */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 shadow-sm">
                  <Compass className="w-10 h-10 text-primary" />
                  <h3 className="text-4xl font-bold text-foreground">Study Notes for Your Classes</h3>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  With <span className="text-primary font-bold">Community study folders</span> curated by real students + Lawexa AI.<br />
                  Each folder includes:
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 bg-gradient-to-br from-card to-muted/30 border border-primary/10 rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                    <CheckCircle className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">All relevant cases for the topic</span>
                  </li>
                  <li className="flex items-start gap-4 bg-gradient-to-br from-card to-muted/30 border border-primary/10 rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                    <CheckCircle className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">Key statutory sections</span>
                  </li>
                  <li className="flex items-start gap-4 bg-gradient-to-br from-card to-muted/30 border border-primary/10 rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                    <CheckCircle className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">Notes from scholars</span>
                  </li>
                </ul>
                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 space-y-3">
                  <p className="text-muted-foreground text-lg">
                    It's like having the perfect study pack for every subject.
                  </p>
                  <p className="text-xl text-foreground font-bold">
                    The best part? Create and publish your own in seconds.
                  </p>
                  <p className="text-primary font-semibold text-lg">
                    Learn from others. Share what you know. Build your reputation.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 rounded-2xl p-8 shadow-lg">
                  <p className="text-foreground text-lg italic mb-4 leading-relaxed">
                    "Found a Constitutional Law folder with everything I needed. Saved me 10 hours of research."
                  </p>
                  <p className="text-muted-foreground font-semibold">— Ibrahim, 200L Unilag</p>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <img src={communityFoldersInterface} alt="Community folders interface" className="relative rounded-3xl shadow-2xl border-2 border-primary/20 hover:scale-[1.02] transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Trending */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <img src={communityFoldersInterface} alt="Trending feed interface" className="relative rounded-3xl shadow-2xl border-2 border-primary/20 hover:scale-[1.02] transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 shadow-sm">
                  <TrendingUp className="w-10 h-10 text-primary" />
                  <h3 className="text-4xl font-bold text-foreground">Stay Ahead</h3>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  See what your classmates are reading. <span className="text-primary font-bold">Right now</span> with:
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 bg-gradient-to-br from-card to-muted/30 border border-primary/10 rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-3xl">📊</span>
                    <span className="text-foreground text-lg font-semibold">Trending cases</span>
                  </li>
                  <li className="flex items-start gap-4 bg-gradient-to-br from-card to-muted/30 border border-primary/10 rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-3xl">🔥</span>
                    <span className="text-foreground text-lg font-semibold">Trending topics in your class</span>
                  </li>
                  <li className="flex items-start gap-4 bg-gradient-to-br from-card to-muted/30 border border-primary/10 rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-3xl">📚</span>
                    <span className="text-foreground text-lg font-semibold">Popular study folders</span>
                  </li>
                </ul>
                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 space-y-3">
                  <p className="text-xl text-foreground font-bold">
                    Always know what's important. Never miss what matters.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Perfect if you miss class sometimes. Lawexa's got you covered.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 rounded-2xl p-8 shadow-lg">
                  <p className="text-foreground text-lg italic mb-4 leading-relaxed">
                    "I open Lawexa and boom—the case we just covered is right there with explanations. Life saver."
                  </p>
                  <p className="text-muted-foreground font-semibold">— Kehinde, 300L UNILAG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shape What We Build */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center justify-center gap-4 bg-primary/10 border border-primary/20 rounded-2xl px-8 py-5 mb-8 shadow-sm">
              <Users className="w-12 h-12 text-primary" />
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
                Shape What We Build
              </h2>
            </div>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              As an early member, you're not just using Lawexa—<br />
              <span className="text-primary font-bold">you're building it with us.</span>
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 rounded-3xl p-10 text-center hover:scale-[1.05] transition-all duration-300 shadow-lg hover:shadow-gold">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Weekly Q&A With Founders</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ask questions. Share feedback. Get early feature previews.
              </p>
            </div>
            <div className="bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 rounded-3xl p-10 text-center hover:scale-[1.05] transition-all duration-300 shadow-lg hover:shadow-gold">
              <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Exclusive Lagos Launch Event</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Join the first Lawexa student community offline. Network with ambitious students.
              </p>
            </div>
            <div className="bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 rounded-3xl p-10 text-center hover:scale-[1.05] transition-all duration-300 shadow-lg hover:shadow-gold">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Vote On Features</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Your feedback shapes what we build next.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center bg-primary/5 border-l-4 border-primary rounded-r-xl p-8">
            <p className="text-2xl text-primary font-bold">
              Top students don't just use tools. They influence them.
            </p>
          </div>
        </div>
      </section>

      {/* What Early Members Get */}
      <section className="py-24 bg-gradient-to-b from-muted/40 to-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground text-center mb-16">
              What Early Members Get
            </h2>
            
            <div className="space-y-8 mb-16">
              <div className="bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 rounded-3xl p-10 flex items-start gap-8 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-gold">
                <span className="text-5xl font-bold text-primary min-w-[3rem]">1.</span>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">🎓 Free Access Until Launch</h3>
                  <p className="text-muted-foreground text-xl leading-relaxed">Full access to all features at no cost while we're in early access.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 rounded-3xl p-10 flex items-start gap-8 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-gold">
                <span className="text-5xl font-bold text-primary min-w-[3rem]">2.</span>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">🎟️ Lagos Launch Event Invitation</h3>
                  <p className="text-muted-foreground text-xl leading-relaxed">Meet the team. Network with top students. <span className="text-primary font-bold">Only top 100 early members</span> get invited.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 rounded-3xl p-10 flex items-start gap-8 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-gold">
                <span className="text-5xl font-bold text-primary min-w-[3rem]">3.</span>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">🎁 Referral Rewards</h3>
                  <p className="text-muted-foreground text-xl leading-relaxed">Share Lawexa. Win prizes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-card via-muted/50 to-card border-4 border-primary/30 rounded-[2.5rem] p-16 text-center shadow-2xl hover:shadow-gold transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse" />
              <div className="relative">
                <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                  Join <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">1,247 Students</span><br />
                  Already Inside
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input type="email" placeholder="📩 Enter your email address" value={email} onChange={e => setEmail(e.target.value)} className="h-16 text-xl bg-background/80 backdrop-blur-sm border-2 border-primary/30 focus:border-primary transition-all duration-300 rounded-xl shadow-lg" required />
                  <Button type="submit" size="lg" className="w-full h-16 text-xl font-bold shadow-gold hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]" disabled={isLoading}>
                    {isLoading ? "Joining..." : <>
                        <Zap className="mr-2 h-7 w-7" />
                        Get Early Access — Limited Spots
                      </>}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default WaitlistForm;