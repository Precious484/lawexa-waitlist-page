import { Button } from '@/components/ui/button';
import { Facebook, X, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import lawexaLogo from '@/assets/lawexa-logo.png';
const Footer = () => {
  const quickLinks = [{
    name: 'Blog',
    href: '/blog'
  }, {
    name: 'Pricing',
    href: '#pricing'
  }, {
    name: 'Features',
    href: '#features'
  }, {
    name: 'FAQs',
    href: '#faq'
  }];
  const socialLinks = [{
    icon: Facebook,
    href: 'https://www.facebook.com/lawexa',
    label: 'Facebook'
  }, {
    icon: X,
    href: 'https://x.com/LawexaAi',
    label: 'X'
  }, {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/lawexa',
    label: 'LinkedIn'
  }, {
    icon: Instagram,
    href: 'https://instagram.com/lawexaai',
    label: 'Instagram'
  }];
  return <footer className="bg-lawexa-dark text-white">
      <div className="container mx-auto px-4 py-16 bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={lawexaLogo} alt="Lawexa Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Legal intelligence for All. Skip the jargon, be fearless with smart legal tools for Study, life, and business
            </p>
            <Button 
              className="btn-gold"
              onClick={() => window.open('https://app.lawexa.com/register', '_blank')}
            >
              Try Lawexa
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+234(0)8163575622</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@lawexa.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-gray-300">Lagos State, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social media</h3>
            <div className="flex space-x-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">© 2026 Law Guide Technology Limited</p>
          <div className="flex space-x-6 text-sm">
            <a href="#terms" className="text-gray-400 hover:text-primary transition-colors duration-200">
              Terms & Conditions
            </a>
            <span className="text-gray-600">|</span>
            <a href="#privacy" className="text-gray-400 hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;