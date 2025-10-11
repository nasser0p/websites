import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { PriceCategory } from '../types';

interface PriceListProps {
    prices: PriceCategory[];
}

const PriceList: React.FC<PriceListProps> = ({ prices }) => {
    const langContext = useContext(LanguageContext);
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    if (!langContext) return null;
    const { text } = langContext;

    return (
        <section id="prices" className="py-20 md:py-28 bg-white" ref={ref}>
            <div className="container mx-auto px-6">
                <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl font-serif font-bold sm:text-5xl bg-gradient-to-r from-brand-dark via-brand-teal to-gray-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">{text.pricesTitle}</h2>
                    <p className="mt-4 text-lg text-gray-600">{text.pricesSubtitle}</p>
                </div>
                <div className="mt-16 max-w-4xl mx-auto space-y-12">
                    {prices.map((category, index) => (
                        <div 
                            key={category.id}
                            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-dark mb-4 sm:mb-6 border-b-2 border-brand-teal pb-2 sm:pb-3">
                                {text[category.categoryKey as keyof typeof text]}
                            </h3>
                            <ul className="space-y-3 sm:space-y-4">
                                {category.items.map((item) => (
                                    <li key={item.id} className="flex justify-between items-start gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:ring-1 hover:ring-brand-teal/50 hover:shadow-brand-teal/10">
                                        <span className="flex-1 text-base sm:text-lg text-gray-800">{text[item.serviceKey as keyof typeof text]}</span>
                                        <span className="text-center whitespace-nowrap text-base sm:text-lg font-semibold text-brand-teal bg-brand-teal/10 px-2.5 py-1 sm:px-3 rounded-full">{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PriceList;