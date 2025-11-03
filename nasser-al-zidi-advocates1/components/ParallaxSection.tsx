import React, { useState, useEffect, useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface ParallaxSectionProps {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ imageUrl, children, className = '' }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.05 });
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleScroll = () => {
    if (isMobile) return;
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  const elementTop = ref.current?.offsetTop ?? 0;
  const parallaxTransform = isMobile ? 'none' : `translateY(${(offsetY - elementTop) * 0.2}px) scale(1.2)`;

  return (
    <section ref={ref} className={`relative w-full py-16 md:py-20 text-white overflow-hidden ${className}`}>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{ 
          backgroundImage: isVisible ? `url('${imageUrl}')` : 'none',
          opacity: isVisible ? 1 : 0,
          transform: parallaxTransform
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-brand-dark bg-opacity-75"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;