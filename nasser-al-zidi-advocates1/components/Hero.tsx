import React, { useState, useEffect } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../contexts/ContentContext';

const Hero: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.3 });
  const { text } = useLanguage();
  const { content } = useContent();
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden" ref={ref}>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${content.images.hero}')`,
          transform: `translateY(${offsetY * 0.4}px) scale(1.1)`
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-brand-dark bg-opacity-60"></div>
      
      <div className={`relative z-10 p-6 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-serif text-brand-primary leading-tight mb-4">
          {text.hero.title}
        </h1>
        <p className="text-lg md:text-2xl text-brand-light mb-8 max-w-3xl mx-auto">
          {text.hero.subtitle}
        </p>
        <a 
          href="#contact" 
          className="bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300 text-lg animate-subtle-pulse"
        >
          {text.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;