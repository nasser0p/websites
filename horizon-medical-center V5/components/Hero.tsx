import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { LocationImage } from '../types';
import { WhatsAppIcon, MapPinIcon } from './Icons';

interface HeroProps {
    locationImages: LocationImage[];
    googleMapsDirectionsUrl: string;
}

const Hero: React.FC<HeroProps> = ({ locationImages, googleMapsDirectionsUrl }) => {
    const langContext = useContext(LanguageContext);

    if (!langContext) return null;

    const { text } = langContext;
    const clinicExteriorImageUrl = locationImages?.find(img => img.altKey === 'altClinicExterior')?.imageUrl || '';
    const titleWords = text.heroTitle.split(' ');

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={clinicExteriorImageUrl} alt={text.altClinicExterior || 'Clinic exterior'} className="w-full h-full object-cover animate-ken-burns" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                    {titleWords.map((word, index) => (
                        <span key={index} className="inline-block mr-2 sm:mr-3 md:mr-4">
                           <span 
                             className="inline-block opacity-0 animate-reveal-word bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent"
                             style={{ animationDelay: `${index * 100}ms`}}
                           >
                             {word}
                           </span>
                        </span>
                    ))}
                </h1>
                <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${titleWords.length * 100 + 100}ms` }}>
                    <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
                        {text.heroSubtitle}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href={`https://wa.me/${text.phone?.replace(/\s|\+/g, '') || ''}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-brand-whatsapp text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-whatsapp-dark transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-brand-whatsapp/40 animate-pulse-whatsapp tappable"
                        >
                            <WhatsAppIcon className="h-6 w-6" />
                            <span>{text.whatsappLabel}</span>
                        </a>
                        <a 
                            href={googleMapsDirectionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/30 tappable"
                        >
                            <MapPinIcon className="h-6 w-6" />
                            <span>{text.getDirectionsButton}</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;