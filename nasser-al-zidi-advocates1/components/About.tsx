import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../contexts/ContentContext';

const About: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const { text } = useLanguage();
  const { content } = useContent();

  return (
    <section className="bg-brand-blue perspective-1000" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <img 
              src={content.images.about} 
              alt="Our dedicated team in a meeting" 
              className="rounded-lg shadow-2xl w-full"
              loading="lazy"
              width="800"
              height="533"
            />
          </div>
          <div className="md:w-1/2 w-full text-center md:text-left rtl:md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-6">{text.about.title}</h2>
            <p className="text-brand-light leading-relaxed mb-4">
              {text.about.p1}
            </p>
            <p className="text-brand-light leading-relaxed">
              {text.about.p2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;