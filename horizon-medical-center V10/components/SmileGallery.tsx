// components/SmileGallery.tsx
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../contexts/ContentContext';

const SmileGallery: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { text } = useLanguage();
  const { content } = useContent();

  return (
    <section className="perspective-1000" ref={ref}>
      <div className={`container mx-auto px-6 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-clinic-primary mb-4">{text.smileGallery.title}</h2>
        <p className="text-clinic-gray mb-12 max-w-2xl mx-auto">{text.smileGallery.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* FIX: Use `text` from `useLanguage` for language-specific content, not hardcoded `content.texts.en`. */}
          {text.smileGallery.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200">
              <div className="relative">
                <img 
                  src={content.images.smileGallery[index]?.after} 
                  alt={`${text.smileGallery.items[index].case} - After`}
                  className="w-full h-64 object-cover" 
                  loading="lazy"
                />
                 <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <img 
                      src={content.images.smileGallery[index]?.before} 
                      alt={`${text.smileGallery.items[index].case} - Before`}
                      className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute top-2 left-2 bg-white/80 text-clinic-dark px-2 py-1 text-xs font-bold rounded opacity-100 group-hover:opacity-0 transition-opacity duration-300">{text.smileGallery.after}</div>
                <div className="absolute top-2 left-2 bg-white/80 text-clinic-dark px-2 py-1 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">{text.smileGallery.before}</div>
              </div>
              <div className="p-6 text-left rtl:text-right">
                <h3 className="text-xl font-semibold text-clinic-deep-blue">{text.smileGallery.items[index].case}</h3>
                <p className="text-clinic-gray mt-2">{text.smileGallery.items[index].description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmileGallery;