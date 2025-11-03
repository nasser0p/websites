import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { text } = useLanguage();

  const navLinks = [
    { name: text.header.nav.home, href: '/' },
    { name: text.header.nav.about, href: '/about' },
    { name: text.header.nav.services, href: '/services' },
    { name: text.header.nav.team, href: '/team' },
    { name: text.header.nav.careers, href: '/careers' },
    { name: text.header.nav.blog, href: '/blog' },
    { name: text.header.nav.legalUpdates, href: '/legal-updates' },
    { name: text.header.nav.contact, href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const linkClass = "text-brand-light hover:text-brand-primary transition-colors duration-300 whitespace-nowrap";
  const activeLinkClass = "text-brand-primary";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold font-serif text-brand-primary">
          {text.header.firmName}
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.href} 
                  className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <LanguageSwitcher />
        </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-brand-light focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsOpen(false)} 
                className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;