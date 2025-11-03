import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

const LegalUpdates: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { text } = useLanguage();

  return (
    <section className="bg-brand-dark perspective-1000" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">{text.legalUpdates.title}</h2>
          <p className="text-brand-light max-w-2xl mx-auto">{text.legalUpdates.subtitle}</p>
        </div>
        <div className="bg-brand-blue rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="space-y-6 text-left rtl:text-right">
            {text.legalUpdates.updates.map((update, index) => (
                <div key={index} className={`py-6 ${index < text.legalUpdates.updates.length - 1 ? 'border-b border-brand-light-blue/20' : ''}`}>
                    <p className="text-sm text-brand-primary mb-1">{update.date}</p>
                    <h3 className="text-2xl font-semibold font-serif text-brand-light mb-2">{update.title}</h3>
                    <p className="text-brand-light leading-relaxed">{update.summary}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default LegalUpdates;