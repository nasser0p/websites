
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { text, language } = useLanguage();
  
  const navLinks = [
    { name: text.header.nav.home, href: '/' },
    { name: text.header.nav.about, href: '/about' },
    { name: text.header.nav.services, href: '/services' },
    { name: text.header.nav.careers, href: '/careers' },
    { name: text.header.nav.blog, href: '/blog' },
    { name: text.header.nav.legalUpdates, href: '/legal-updates' },
    { name: text.header.nav.contact, href: '/contact' },
  ];

  return (
    <footer className="bg-brand-blue border-t border-brand-light-blue/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left rtl:md:text-right">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-serif text-brand-primary mb-4">{text.header.firmName}</h3>
            <p className="text-brand-light max-w-md mx-auto md:mx-0">
              {text.footer.about}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-brand-light mb-4">{text.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                 <li><Link to={link.href} className="text-brand-light hover:text-brand-primary transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-brand-light mb-4">{text.footer.contact}</h4>
            <ul className="space-y-2 text-brand-light">
              <li>{text.footer.location}</li>
              <li>+968 93205058</li>
              <li>contact@nasserlaw.om</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-brand-dark py-4">
        <div className="container mx-auto px-6 text-center text-brand-light text-sm">
          &copy; {new Date().getFullYear()} {text.header.firmName}. {text.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
