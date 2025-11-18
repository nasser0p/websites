import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../App';
import { WhatsAppIcon } from './Icons';

interface StickyCTAProps {
    isVisible: boolean;
    pulseTrigger: number;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ isVisible, pulseTrigger }) => {
    const context = useContext(LanguageContext);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Don't animate on the initial trigger (value 0 or 1)
        if (pulseTrigger > 1) {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 2000); // Animation duration is 2s

            return () => clearTimeout(timer);
        }
    }, [pulseTrigger]);

    if (!context) return null;
    const { text, openWhatsappModal } = context;

    const phoneNumber = text.phone?.replace(/\s|\+/g, '') || '';
    const prefillText = text.whatsappPrefillGeneral || '';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefillText)}`;

    const handleWhatsappClick = (e: React.MouseEvent) => {
        e.preventDefault();
        openWhatsappModal(prefillText, whatsappUrl);
    };

    return (
        <div
            className={`lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/90 backdrop-blur-sm shadow-[0_-2px_10px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-in-out ${
                isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}
            aria-hidden={!isVisible}
        >
            <button
                onClick={handleWhatsappClick}
                className={`w-full inline-flex items-center justify-center gap-3 bg-brand-whatsapp text-white px-6 py-3 rounded-full font-bold text-base hover:bg-brand-whatsapp-dark transition-all duration-300 transform hover:scale-105 shadow-lg ${isAnimating ? 'animate-subtle-pulse-whatsapp' : ''}`}
            >
                <WhatsAppIcon className="h-6 w-6" />
                <span>{text.whatsappLabel}</span>
            </button>
        </div>
    );
};

export default StickyCTA;