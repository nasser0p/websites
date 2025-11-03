import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../contexts/ContentContext';

const Blog: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { text } = useLanguage();
  const { content } = useContent();

  return (
    <section className="bg-brand-blue perspective-1000" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">{text.blog.title}</h2>
          <p className="text-brand-light max-w-2xl mx-auto">{text.blog.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {text.blog.posts.map((post, index) => (
            <div key={index} className="bg-brand-dark rounded-lg overflow-hidden shadow-lg group flex flex-col text-left rtl:text-right transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src={content.images.blog[index]} 
                alt={post.title} 
                className="w-full h-56 object-cover" 
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-serif text-brand-light mb-3 group-hover:text-brand-primary transition-colors duration-300">{post.title}</h3>
                <p className="text-brand-light flex-grow">{post.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-brand-light-blue/20">
                    <p className="text-sm text-brand-light-blue">{text.blog.authors[index]} - {text.blog.dates[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;