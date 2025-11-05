import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import lawexaLogo from '@/assets/lawexa-logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [slotsLeft, setSlotsLeft] = useState(253);
  useEffect(() => {
    const scheduleNextDecrease = () => {
      const randomDelay = Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000; // Random delay between 5-12 seconds
      const timeout = setTimeout(() => {
        setSlotsLeft(prev => {
          const newValue = Math.max(100, prev - 1);
          if (newValue > 100) scheduleNextDecrease();
          return newValue;
        });
      }, randomDelay);
      return timeout;
    };
    
    const timeout = scheduleNextDecrease();
    return () => clearTimeout(timeout);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '/'
  }];
  const productLinks = [{
    name: 'Lawexa Student',
    href: '/products/student'
  }, {
    name: 'Lawexa Assistant',
    href: '/products/assistant'
  }, {
    name: 'Lawexa API',
    href: '/products/api'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card shadow-medium' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
            <img src={lawexaLogo} alt="Lawexa Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          

          {/* Desktop Counter */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2.5">
              <span key={slotsLeft} className="text-2xl font-bold text-primary tabular-nums animate-flip">
                {slotsLeft}
              </span>
              <span className="text-base text-muted-foreground font-medium">/ 1,500 slots left</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden bg-card border-t border-border">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map(link => <Link key={link.name} to={link.href} className="transition-colors duration-300 text-foreground hover:bg-secondary p-2 rounded-lg" onClick={() => {
            setIsMenuOpen(false);
            setTimeout(() => window.scrollTo(0, 0), 100);
          }}>
                  {link.name}
                </Link>)}
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span key={slotsLeft} className="text-2xl font-bold text-primary tabular-nums animate-flip">
                      {slotsLeft}
                    </span>
                    <span className="text-base text-muted-foreground font-medium">/ 1,500 slots left</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;