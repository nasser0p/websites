import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

const Philosophy: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { text } = useLanguage();

  const icons = [
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-clinic-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-clinic-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-clinic-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ];

  return (
    <section className="perspective-1000" ref={ref}>
      <div className={`container mx-auto px-6 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-clinic-primary mb-4">{text.philosophy.title}</h2>
        <p className="text-clinic-gray mb-12 max-w-2xl mx-auto">{text.philosophy.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {text.philosophy.points.map((point, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">{icons[index]}</div>
              <h3 className="text-2xl font-semibold font-serif text-clinic-deep-blue mb-3">{point.title}</h3>
              <p className="text-clinic-gray">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
