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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    
    if (!context) return null;
    const { text, openWhatsAppModal } = context;

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

    const renderDesktopLink = (link: typeof navLinks[0]) => {
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

    const renderMobileLink = (link: typeof navLinks[0], index: number) => {
        const linkClasses = "text-3xl font-serif text-white opacity-0 animate-menu-link-slide hover:text-brand-teal transition-colors duration-300 tappable";
        const linkStyle = { animationDelay: `${150 + index * 75}ms` };

        if (link.href.startsWith('/#')) {
            return (
                <a 
                    key={link.id} 
                    href={`#${link.href.substring(2)}`}
                    onClick={(e) => handleNavClick(e, link.href)} 
                    className={linkClasses} 
                    style={linkStyle}
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
                className={linkClasses} 
                style={linkStyle}
            >
                {link.label}
            </Link>
        );
    };

    const phoneNumber = text.phone?.replace(/\s|\+/g, '') || '';
    const prefillText = text.whatsappPrefillGeneral || '';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefillText)}`;

    const handleWhatsAppClick = () => {
        openWhatsAppModal(prefillText, whatsappUrl);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" onClick={handleLinkClick} className="text-2xl font-serif font-bold text-white">
                            {text.clinicName}
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center space-x-6">
                            {navLinks.map(renderDesktopLink)}
                            <LanguageToggle />
                            {isScrolled && (
                                <button 
                                    onClick={handleWhatsAppClick}
                                    className="bg-brand-whatsapp text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-brand-whatsapp-dark transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-md hover:shadow-lg tappable"
                                >
                                    {text.whatsappLabel}
                                </button>
                            )}
                        </nav>

                        {/* Mobile Nav Toggle */}
                        <div className="lg:hidden flex items-center gap-2">
                            {isScrolled && !isOpen && (
                                <button 
                                    onClick={handleWhatsAppClick}
                                    className="bg-brand-whatsapp text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-brand-whatsapp-dark transition-all duration-300 transform hover:scale-105 tappable"
                                >
                                    {text.bookNow}
                                </button>
                            )}
                            <LanguageToggle />
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Menu Overlay */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 bg-brand-dark/95 backdrop-blur-sm z-40 animate-menu-fade-in">
                    <nav className="h-full flex flex-col items-center justify-center space-y-8">
                        {navLinks.map(renderMobileLink)}
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;