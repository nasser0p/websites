import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l-3 3m6 0l-3 3m0 10l3 3m-6 0l3 3M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
]

const Philosophy: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    const { text } = useLanguage();

    return (
        <section className="bg-brand-dark perspective-1000" ref={ref}>
            <div className={`container mx-auto px-6 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">{text.philosophy.title}</h2>
                <p className="text-brand-light mb-12 max-w-2xl mx-auto">{text.philosophy.subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {text.philosophy.items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center transform transition-all duration-500 hover:-translate-y-2">
                            <div className="bg-brand-blue rounded-full p-5 mb-6 shadow-lg">
                                {icons[index]}
                            </div>
                            <h3 className="text-2xl font-semibold font-serif text-brand-light mb-3">{item.title}</h3>
                            <p className="text-brand-light">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;