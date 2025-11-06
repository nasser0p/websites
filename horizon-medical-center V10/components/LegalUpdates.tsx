import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

const HealthTips: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { text } = useLanguage();

  return (
    <section className="bg-clinic-light perspective-1000" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-clinic-primary mb-4">{text.healthTips.title}</h2>
          <p className="text-clinic-gray max-w-2xl mx-auto">{text.healthTips.subtitle}</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto border border-gray-200">
            <div className="space-y-6 text-left rtl:text-right">
            {text.healthTips.tips.map((tip, index) => (
                <div key={index} className={`py-6 ${index < text.healthTips.tips.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <p className="text-sm text-clinic-primary mb-1">{tip.date}</p>
                    <h3 className="text-2xl font-semibold font-serif text-clinic-deep-blue mb-2">{tip.title}</h3>
                    <p className="text-clinic-gray leading-relaxed">{tip.summary}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTips;