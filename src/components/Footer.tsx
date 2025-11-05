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
      
    </footer>;
};
export default Footer;