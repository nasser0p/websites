import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { MapPinIcon } from './Icons';

interface StickyCTAProps {
    isVisible: boolean;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ isVisible }) => {
    const context = useContext(LanguageContext);

    if (!context) return null;
    const { text, content } = context;

    return (
        <div
            className={`lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/90 backdrop-blur-sm shadow-[0_-2px_10px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-in-out ${
                isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}
            aria-hidden={!isVisible}
        >
            <a
                href={content.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-brand-teal text-white px-6 py-3 rounded-full font-bold text-base hover:bg-brand-teal-light transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                <MapPinIcon className="h-6 w-6" />
                <span>{text.getDirectionsButton}</span>
            </a>
        </div>
    );
};

export default StickyCTA;