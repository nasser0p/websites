import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

const Careers: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { text } = useLanguage();

  return (
    <section className="bg-brand-dark perspective-1000" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">{text.careers.title}</h2>
          <p className="text-brand-light max-w-2xl mx-auto">{text.careers.subtitle}</p>
        </div>
        
        <div className="bg-brand-blue p-8 md:p-12 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-brand-light mb-6 text-center">{text.careers.whyJoin}</h3>
            <div className="grid md:grid-cols-2 gap-8 text-brand-light text-center md:text-left rtl:md:text-right">
                {text.careers.reasons.map((reason, index) => (
                    <div key={index}>
                        <h4 className="font-semibold text-brand-light text-lg mb-2">{reason.title}</h4>
                        <p>{reason.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-brand-light mb-8 text-center">{text.careers.openings}</h3>
          <div className="space-y-6">
            {text.careers.jobs.map((job, index) => (
              <div key={index} className="bg-brand-blue p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center text-center md:text-left rtl:md:text-right transform hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-xl font-semibold text-brand-light">{job.title}</h4>
                  <p className="text-brand-primary">{text.careers.location}</p>
                  <p className="text-brand-light mt-2 max-w-2xl">{job.description}</p>
                </div>
                <button className="bg-brand-primary text-brand-dark font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 whitespace-nowrap mt-4 md:mt-0 md:ms-6 rtl:md:ms-0 rtl:md:me-6">
                  {text.careers.apply}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;