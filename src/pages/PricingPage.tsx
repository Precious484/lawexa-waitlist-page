import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
const PricingPage = () => {
  return <div className="min-h-screen bg-background animate-fade-in">
      <div className="bg-black min-h-[64px] flex items-center">
        <Header />
      </div>
      <div className="pt-16 bg-slate-950">
        <PricingSection />
      </div>
      <Footer />
    </div>;
};
export default PricingPage;