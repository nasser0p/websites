import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { ShieldCheckIcon, ClockIcon, HeartPulseIcon } from './Icons';

const TrustBar: React.FC = () => {
    const langContext = useContext(LanguageContext);
    if (!langContext) return null;
    const { text } = langContext;

    const features = [
        { icon: ShieldCheckIcon, label: text.trustQuality },
        { icon: HeartPulseIcon, label: text.trustComfort },
        { icon: ClockIcon, label: text.trustTech },
    ];

    return (
        <section className="bg-brand-teal text-white py-8 relative z-20 shadow-md -mt-1">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-around items-center gap-6 text-center sm:text-left rtl:sm:text-right">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                            <feature.icon className="w-8 h-8 text-brand-gold" />
                            <span className="font-semibold text-lg tracking-wide">{feature.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;