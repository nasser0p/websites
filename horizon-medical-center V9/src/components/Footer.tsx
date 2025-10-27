import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import SchemaMarkup from './SchemaMarkup';

const Footer: React.FC = () => {
    const context = useContext(LanguageContext);
    if (!context) return null;
    const { text, content } = context;

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        const targetId = target.substring(1); // remove '#'
        const element = document.getElementById(targetId);
        if(target === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const callUrl = `tel:${text.phone?.replace(/\s/g, '') || ''}`;

    const dentistSchema = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": text.clinicName,
      "image": content.logoUrl,
      "url": "https://horizon-medical-center.com", // Replace with actual domain
      "telephone": text.phone,
      "email": text.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Flat 12, First Floor, Souq Al-Khoud, Al Khaudh A' Tijiary St, 3353 Way",
        "addressLocality": "Seeb",
        "postalCode": "132",
        "addressCountry": "OM"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.632237,
        "longitude": 58.198057
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "09:00",
          "closes": "21:00"
        }
      ],
      "priceRange": "$$"
    };

    return (
        <footer className="bg-brand-dark text-gray-300">
            <SchemaMarkup schema={dentistSchema} />
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left rtl:md:text-right">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-serif font-bold text-white mb-4">{text.clinicName}</h3>
                        <p className="text-gray-400">{text.footerAbout}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-serif font-bold text-white mb-4">{text.quickLinks}</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-brand-teal transition-colors">{text.navHome}</a></li>
                            <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-brand-teal transition-colors">{text.navServices}</a></li>
                            <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-brand-teal transition-colors">{text.navAbout}</a></li>
                            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-brand-teal transition-colors">{text.navContact}</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-serif font-bold text-white mb-4">{text.contactInfoTitle}</h3>
                        <address className="not-italic space-y-2 text-gray-400">
                           <p>{text.address}</p>
                           <p><a href={callUrl} className="hover:text-brand-teal transition-colors" dir="ltr">{text.phone}</a></p>
                           <p><a href={`mailto:${text.email || ''}`} className="hover:text-brand-teal transition-colors">{text.email}</a></p>
                        </address>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {text.clinicName}. {text.allRightsReserved}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;