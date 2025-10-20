import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Service } from '../types';

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  const langContext = useContext(LanguageContext);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  if (!langContext) return null;
  const { text } = langContext;

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50 section-divider-bottom" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <div 
          className={`text-center max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-4xl font-serif font-bold sm:text-5xl bg-gradient-to-r from-brand-dark via-brand-teal to-gray-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
            {text.ourServices}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{text.servicesIntro}</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`relative group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out hover:shadow-brand-teal/20 tappable ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${150 + index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-teal transition-all duration-300 ease-in-out group-hover:h-1"></div>
              <div className="overflow-hidden aspect-video">
                <img 
                  src={service.imageUrl} 
                  alt={text[service.titleKey as keyof typeof text]} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-brand-dark">
                  {text[service.titleKey as keyof typeof text]}
                </h3>
                <p className="mt-2 text-base text-gray-600 h-16">
                  {text[service.descriptionKey as keyof typeof text]}
                </p>
                <Link 
                  to={`/services/${service.id}`}
                  className="group/button mt-6 bg-brand-teal/10 text-brand-teal font-semibold px-5 py-2.5 rounded-full hover:bg-brand-teal hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>{text.viewDetails}</span>
                  <span className="opacity-0 -translate-x-2 group-hover/button:opacity-100 group-hover/button:translate-x-0 transition-all duration-300">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;