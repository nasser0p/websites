import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { WhyChooseUsItem } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { optimizeCloudinaryUrl } from '../utils/imageOptimizer';

interface WhyChooseUsProps {
  whyChooseUs: WhyChooseUsItem[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ whyChooseUs }) => {
  const langContext = useContext(LanguageContext);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  if (!langContext) return null;
  const { text, content } = langContext;

  return (
    <section ref={ref} id="why-us" className="relative py-20 md:py-28 section-divider-bottom overflow-hidden">
      {/* Parallax Background with Overlay */}
      {content.whyChooseUsBgUrl && (
         <div className="absolute inset-0 z-0">
            <div 
                className="w-full h-full parallax-bg" 
                style={{ backgroundImage: `url(${optimizeCloudinaryUrl(content.whyChooseUsBgUrl)})` }}
            ></div>
            {/* Marketing Upgrade: Frosted Glass Effect */}
            <div className="absolute inset-0 bg-gray-50/85 backdrop-blur-[2px]"></div>
         </div>
      )}
      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'} text-center max-w-3xl mx-auto`}>
          <h2 className="text-4xl font-serif font-bold sm:text-5xl bg-gradient-to-r from-brand-dark via-brand-teal to-gray-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">{text.whyChooseUsTitle}</h2>
          <p className="mt-4 text-lg text-gray-600">{text.whyChooseUsSubtitle}</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            return (
              <div 
                key={item.id} 
                className={`text-center p-8 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-brand-teal/20 tappable ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}
                style={{ transitionDelay: `${150 + index * 150}ms` }}
              >
                <h3 className="text-2xl font-bold text-brand-dark">{text[item.titleKey as keyof typeof text]}</h3>
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