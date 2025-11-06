import React, { useState, useEffect, useCallback } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../contexts/ContentContext';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex justify-center text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-6 h-6 ${i < rating ? 'fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        ))}
    </div>
);


const Testimonials: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { text } = useLanguage();
  const { content } = useContent();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = text.testimonials.items;

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [goToNext]);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="perspective-1000" ref={ref}>
      <div className={`container mx-auto px-6 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-clinic-primary mb-4">{text.testimonials.title}</h2>
        <p className="text-clinic-gray mb-12 max-w-2xl mx-auto">{text.testimonials.subtitle}</p>
        
        <div className="relative max-w-3xl mx-auto h-80">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <img 
                        src={content.images.testimonials[index]} 
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
                    />
                    <StarRating rating={testimonial.rating} />
                    <p className="text-xl italic text-clinic-dark leading-relaxed">"{testimonial.quote}"</p>
                    <p className="mt-6 font-bold text-clinic-primary text-lg">- {testimonial.name}</p>
                    <p className="text-sm text-clinic-gray">{testimonial.location}</p>
                </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-clinic-primary' : 'bg-clinic-gray/50 hover:bg-clinic-primary/50'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
