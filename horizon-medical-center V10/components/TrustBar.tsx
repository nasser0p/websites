// components/TrustBar.tsx
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

const TrustBar: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const { text } = useLanguage();

    const logos = [
        { name: "American Dental Association", svg: <svg viewBox="0 0 100 100"><path d="M50,5A45,45,0,1,1,5,50,45,45,0,0,1,50,5m0-5A50,50,0,1,0,100,50,50,50,0,0,0,50,0Z"/><path d="M50,22.5a2.5,2.5,0,0,0-2.5,2.5V47.38l-12,9.39a2.5,2.5,0,0,0,3.06,3.9l11-8.6,11,8.6a2.5,2.5,0,1,0,3.06-3.9l-12-9.39V25A2.5,2.5,0,0,0,50,22.5Z"/><path d="M50,60a2.5,2.5,0,0,0-1.77.73l-10,10a2.5,2.5,0,1,0,3.54,3.54L50,66.07l8.23,8.23a2.5,2.5,0,1,0,3.54-3.54l-10-10A2.5,2.5,0,0,0,50,60Z"/></svg> },
        { name: "Top Dentist Award", svg: <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> },
        { name: "Certified Orthodontics Specialist", svg: <svg viewBox="0 0 24 24"><path d="M9 11.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7.5 13.83 7.5 13s.67-1.5 1.5-1.5m6 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> },
        { name: "Advanced Technology Clinic", svg: <svg viewBox="0 0 24 24"><path d="M7 22h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 18H8v-1h8v1zm0-3H8V5h8v10z"/></svg> },
    ];

    return (
        <section ref={ref} className={`bg-clinic-light transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto px-6 py-8">
                <div className="text-center">
                    <h3 className="text-sm font-semibold text-clinic-gray uppercase tracking-wider">{text.trustBar.title}</h3>
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
                        {logos.map((logo, index) => (
                            <div key={index} className="flex justify-center" title={logo.name}>
                                <div className="h-12 w-auto text-clinic-gray/60 hover:text-clinic-gray transition-colors duration-300">
                                    {logo.svg}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
