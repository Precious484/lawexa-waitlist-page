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
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Products', href: '/products' }
  ];

  const productLinks = [
    { name: 'Lawexa Student', href: '/products/student' },
    { name: 'Lawexa Assistant', href: '/products/assistant' },
    { name: 'Lawexa API', href: '/products/api' }
  ];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-medium' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
            <img src={lawexaLogo} alt="Lawexa Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`transition-colors duration-300 relative ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-gray-300'
                } ${window.location.pathname === link.href ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary' : ''}`}
                onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-white' 
                  : 'bg-transparent border-white text-white hover:bg-white hover:text-black hover:border-white'
              }`}
              onClick={() => window.open('https://app.lawexa.com/login', '_blank')}
            >
              Log in
            </Button>
            <Button 
              className="btn-gold"
              onClick={() => window.open('https://app.lawexa.com/register', '_blank')}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-foreground hover:bg-gray-100' 
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => window.scrollTo(0, 0), 100);
                  }}
                >
                  {link.name}
                </Link>
              ))}
              
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full border-foreground text-foreground hover:bg-foreground hover:text-white"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open('https://app.lawexa.com/login', '_blank');
                  }}
                >
                  Log in
                </Button>
                <Button 
                  className="w-full btn-gold"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open('https://app.lawexa.com/register', '_blank');
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>;
};
export default Header;