// FIX: Create Header component to resolve module import error.
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import { LanguageContext } from '../App';
import { View } from '../types';

const Header: React.FC = () => {
    const context = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    if (!context) return null;
    const { text } = context;

    const navLinks = [
        { id: View.Home, label: text.navHome, href: '/' },
        { id: View.Services, label: text.navServices, href: '/#services' },
        { id: View.About, label: text.navAbout, href: '/#about' },
        { id: View.Gallery, label: text.navGallery, href: '/#gallery' },
        { id: View.Treatments, label: text.navTreatments, href: '/#treatments' },
        { id: View.Contact, label: text.navContact, href: '/#contact' }
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        handleLinkClick();
        if (href.startsWith('/#')) {
            e.preventDefault();
            const targetId = href.substring(2); // Remove '/#'
            const element = document.getElementById(targetId);
            if(element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const renderLink = (link: typeof navLinks[0]) => {
        if (link.href.startsWith('/#')) {
            return (
                <a 
                    key={link.id}
                    href={`#${link.href.substring(2)}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white hover:text-brand-teal font-medium transition-colors duration-300"
                >
                    {link.label}
                </a>
            );
        }
        return (
            <Link 
                key={link.id} 
                to={link.href}
                onClick={handleLinkClick}
                className="text-white hover:text-brand-teal font-medium transition-colors duration-300"
            >
                {link.label}
            </Link>
        );
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" onClick={handleLinkClick} className="text-2xl font-serif font-bold text-white">
                          {text.clinicName}
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map(renderLink)}
                        <LanguageToggle />
                    </nav>

                    {/* Mobile Nav Toggle */}
                    <div className="lg:hidden flex items-center gap-4">
                         <LanguageToggle />
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <div className={`lg:hidden bg-brand-dark transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <nav className="px-6 pb-6 pt-2 flex flex-col space-y-4">
                    {navLinks.map(renderLink)}
                </nav>
            </div>
        </header>
    );
};

export default Header;