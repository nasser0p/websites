import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { WhyChooseUsItem } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { TechnologyIcon, CertifiedDentistIcon, ComfortableAmbianceIcon } from './Icons';

interface WhyChooseUsProps {
  whyChooseUs: WhyChooseUsItem[];
}

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  TechnologyIcon,
  CertifiedDentistIcon,
  ComfortableAmbianceIcon,
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ whyChooseUs }) => {
  const langContext = useContext(LanguageContext);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  if (!langContext) return null;
  const { text } = langContext;

  return (
    <section ref={ref} id="why-us" className="bg-gray-50 py-20 md:py-28 section-divider-bottom">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'} text-center max-w-3xl mx-auto`}>
          <h2 className="text-4xl font-serif font-bold sm:text-5xl bg-gradient-to-r from-brand-dark via-brand-teal to-gray-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">{text.whyChooseUsTitle}</h2>
          <p className="mt-4 text-lg text-gray-600">{text.whyChooseUsSubtitle}</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div 
                key={item.id} 
                className={`text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-brand-teal/20 tappable ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}
                style={{ transitionDelay: `${150 + index * 150}ms` }}
              >
                <div className="inline-block p-5 bg-brand-teal/10 rounded-full">
                  {Icon && <Icon className="h-10 w-10 text-brand-teal" />}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-brand-dark">{text[item.titleKey as keyof typeof text]}</h3>
                <p className="mt-3 text-gray-600">{text[item.descriptionKey as keyof typeof text]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;