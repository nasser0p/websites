import React, { useState, useEffect } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../contexts/ContentContext';

const Hero: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.3 });
  const { text } = useLanguage();
  const { content } = useContent();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroParallaxOffset = offsetY * 0.4;
  const heroTransform = `translateY(${heroParallaxOffset}px) scale(1.1) translateZ(0)`;

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden" ref={ref}>
      <div 
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 overflow-hidden"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: isVisible ? `url('${content.images.hero}')` : 'none',
            transform: heroTransform
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-clinic-deep-blue bg-opacity-60"></div>
      
      <div className={`relative z-10 p-6 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-serif text-white leading-tight mb-4 text-shadow-md">
          {text.hero.title}
        </h1>
        <p className="text-lg md:text-2xl text-clinic-light mb-8 max-w-3xl mx-auto text-shadow-md">
          {text.hero.subtitle}
        </p>
        <a 
          href="#contact" 
          className="bg-clinic-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300 text-lg animate-subtle-pulse"
        >
          {text.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;