import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { text } = useLanguage();
  
  const navLinks = [
    { name: text.header.nav.home, href: '/' },
    { name: text.header.nav.about, href: '/about' },
    { name: text.header.nav.services, href: '/services' },
    { name: text.header.nav.careers, href: '/careers' },
    { name: text.header.nav.blog, href: '/blog' },
    { name: text.header.nav.healthTips, href: '/health-tips' },
    { name: text.header.nav.contact, href: '/contact' },
  ];

  return (
    <footer className="bg-clinic-deep-blue border-t border-clinic-primary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left rtl:md:text-right">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-serif text-clinic-primary mb-4">{text.header.clinicName}</h3>
            <p className="text-clinic-light max-w-md mx-auto md:mx-0">
              {text.footer.about}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">{text.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                 <li key={link.name}><Link to={link.href} className="text-clinic-light hover:text-clinic-primary transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">{text.footer.contact}</h4>
            <ul className="space-y-2 text-clinic-light">
              <li>{text.footer.location}</li>
              <li>+968 93205058</li>
              <li>contact@horizonclinic.om</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-clinic-dark py-4">
        <div className="container mx-auto px-6 text-center text-clinic-light text-sm">
          &copy; {new Date().getFullYear()} {text.header.clinicName}. {text.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;