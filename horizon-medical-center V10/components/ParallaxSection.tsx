import React, { useState, useEffect } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface ParallaxSectionProps {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ imageUrl, children, className = '' }) => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.05 });
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Only calculate if the element is in the viewport for performance
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setOffsetY(window.pageYOffset);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef]);

  const elementTop = sectionRef.current?.offsetTop ?? 0;
  const parallaxTransform = `translateY(${(offsetY - elementTop) * 0.2}px) scale(1.2) translateZ(0)`;

  return (
    <section ref={sectionRef} className={`relative w-full py-16 md:py-20 text-white overflow-hidden ${className}`}>
      <div 
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 overflow-hidden"
        style={{ 
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
            className="w-full h-full bg-cover bg-center"
            style={{
                backgroundImage: isVisible ? `url('${imageUrl}')` : 'none',
                transform: parallaxTransform,
            }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-clinic-deep-blue bg-opacity-75"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;