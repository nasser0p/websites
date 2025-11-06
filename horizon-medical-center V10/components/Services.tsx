import React from 'react';
import { Link } from 'react-router-dom';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { text } = useLanguage();

  return (
    <section className="perspective-1000" ref={ref}>
      <div className={`container mx-auto px-6 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-clinic-primary mb-4">{text.services.title}</h2>
        <p className="text-white mb-12 max-w-2xl mx-auto">{text.services.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {text.services.items.map((service, index) => (
            <Link to={`/services/${service.id}`} key={index} className="group block">
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center transform-style-3d transform hover:-translate-y-2 hover:shadow-glow-primary transition-all duration-500 hover:rotate-x-[10deg] hover:rotate-y-[-5deg] h-full flex flex-col items-center border border-white/20">
                
                <h3 className="text-2xl font-semibold font-serif text-white mb-3">{service.title}</h3>
                <p className="text-clinic-light flex-grow">{service.description}</p>
                 <span className="mt-6 text-clinic-primary font-semibold group-hover:underline">{text.ui.readMore} &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;