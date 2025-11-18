import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../App';
import { WhatsAppIcon, PhoneIcon, StarIcon, GoogleIcon } from './Icons';
import { optimizeCloudinaryUrl } from '../utils/imageOptimizer';

interface HeroProps {
    heroImageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ heroImageUrl }) => {
    const langContext = useContext(LanguageContext);
    const [isLoaded, setIsLoaded] = useState(false);

    if (!langContext) return null;

    const { text, openWhatsappModal } = langContext;
    const optimizedImageUrl = optimizeCloudinaryUrl(heroImageUrl);
    const titleWords = text.heroTitle.split(' ');
    
    useEffect(() => {
        // This timer will trigger the animation for the subtitle and buttons after the title has revealed itself.
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, titleWords.length * 100); // Start animation slightly before title finishes for overlap
        return () => clearTimeout(timer);
    }, [titleWords.length]);

    const phoneNumberRaw = text.phone?.replace(/\s/g, '') || '';
    const prefillText = text.whatsappPrefillGeneral || '';
    const whatsappUrl = `https://wa.me/${phoneNumberRaw.replace('+', '')}?text=${encodeURIComponent(prefillText)}`;
    const callUrl = `tel:${phoneNumberRaw}`;

    const handleWhatsappClick = (e: React.MouseEvent) => {
        e.preventDefault();
        openWhatsappModal(prefillText, whatsappUrl);
    };

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="w-full h-full animate-ken-burns parallax-bg" 
                    style={{ backgroundImage: `url(${optimizedImageUrl})` }}
                    aria-label={text.altClinicExterior || 'Clinic exterior'}
                    role="img"
                ></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                {/* Social Proof Badge - Marketing Injection */}
                <div className={`mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <GoogleIcon className="w-5 h-5" />
                    <div className="flex text-brand-gold">
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold">4.7/5.0</span>
                </div>

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
                <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}>
                    <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
                        {text.heroSubtitle}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsappClick}
                            className="inline-flex items-center justify-center gap-3 bg-brand-whatsapp text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-whatsapp-dark transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-brand-whatsapp/40 animate-pulse-whatsapp tappable"
                        >
                            <WhatsAppIcon className="h-6 w-6" />
                            <span>{text.whatsappLabel}</span>
                        </button>
                        <a 
                            href={callUrl}
                            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/30 tappable"
                        >
                            <PhoneIcon className="h-6 w-6" />
                            <span>{text.heroCtaSecondary}</span>
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