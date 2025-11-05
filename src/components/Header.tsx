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
    const interval = setInterval(() => {
      setSlotsLeft(prev => Math.max(100, prev - 1));
    }, 8000); // Decrease every 8 seconds
    return () => clearInterval(interval);
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
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full opacity-30 blur group-hover:opacity-50 transition duration-300"></div>
              <div className="relative flex items-center gap-3 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 rounded-full px-8 py-3 shadow-gold hover:shadow-2xl transition-all duration-300">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-primary tabular-nums transition-all duration-500 animate-pulse">
                    {slotsLeft}
                  </span>
                  <span className="text-base text-muted-foreground font-medium">/ 1,500</span>
                </div>
                <span className="text-sm text-foreground/70 font-semibold tracking-wide">slots left</span>
              </div>
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
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-xl opacity-20 blur"></div>
                  <div className="relative bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20 rounded-xl px-4 py-4 text-center shadow-gold">
                    <div className="flex items-baseline justify-center gap-1.5">
                      <span className="text-3xl font-bold text-primary tabular-nums">
                        {slotsLeft}
                      </span>
                      <span className="text-base text-muted-foreground">/ 1,500</span>
                    </div>
                    <span className="text-xs text-foreground/70 font-semibold tracking-wide mt-1 block">slots left</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;