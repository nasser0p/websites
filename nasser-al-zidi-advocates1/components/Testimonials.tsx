import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const { text } = useLanguage();

  return (
    <section id="testimonials" className="bg-brand-blue perspective-1000" ref={ref}>
      <div className={`container mx-auto px-6 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">{text.testimonials.title}</h2>
        <p className="text-brand-light mb-12 max-w-2xl mx-auto">{text.testimonials.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {text.testimonials.items.map((testimonial, index) => (
            <div key={index} className="bg-brand-dark p-8 rounded-lg shadow-lg text-left rtl:text-right flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-brand-primary mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.5 2.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM3 5.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM12.5 2.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM10 5.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" clipRule="evenodd"></path><path d="M12.723 10.375a2.025 2.025 0 012.025 2.025v.198c0 .285-.11.558-.309.756L10.96 16.83a1.25 1.25 0 01-1.92 0l-3.478-3.478a1.025 1.025 0 01-.31-.756v-.198a2.025 2.025 0 012.025-2.025h5.45z"></path></svg>
              </div>
              <p className="text-brand-light italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div>
                <h4 className="text-lg font-bold text-brand-light">{testimonial.name}</h4>
                <p className="text-brand-primary text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;