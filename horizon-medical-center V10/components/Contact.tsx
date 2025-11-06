import React, { useState, FormEvent } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const { text } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, we'll just assume success
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000); // Reset form status after 5 seconds
    }, 2000);
  };

  return (
    <section id="contact" className="perspective-1000" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-clinic-primary mb-4">{text.contact.title}</h2>
            <p className="text-white max-w-2xl mx-auto">{text.contact.subtitle}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="text-2xl font-semibold text-white">{text.contact.form.successTitle}</h3>
                <p className="text-clinic-light mt-2">{text.contact.form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="sr-only">{text.contact.form.name}</label>
                    <input type="text" id="name" name="name" placeholder={text.contact.form.name} value={formData.name} onChange={handleChange} required className="w-full bg-clinic-deep-blue/50 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-primary" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">{text.contact.form.email}</label>
                    <input type="email" id="email" name="email" placeholder={text.contact.form.email} value={formData.email} onChange={handleChange} required className="w-full bg-clinic-deep-blue/50 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-primary" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="sr-only">{text.contact.form.subject}</label>
                  <input type="text" id="subject" name="subject" placeholder={text.contact.form.subject} value={formData.subject} onChange={handleChange} required className="w-full bg-clinic-deep-blue/50 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-primary" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="sr-only">{text.contact.form.message}</label>
                  <textarea id="message" name="message" placeholder={text.contact.form.message} rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-clinic-deep-blue/50 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-primary"></textarea>
                </div>
                <div>
                  <button type="submit" disabled={status === 'loading'} className="w-full bg-clinic-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 disabled:bg-opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 rtl:ml-3 rtl:-mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {text.contact.form.sending}
                      </>
                    ) : text.contact.form.send}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 text-white space-y-8">
              <div className="flex items-start gap-4">
                  <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-clinic-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                      <h3 className="font-bold text-lg">{text.contact.info.address}</h3>
                      <p className="text-clinic-light">{text.contact.info.addressValue}</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-clinic-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                      <h3 className="font-bold text-lg">{text.contact.info.phone}</h3>
                      <p className="text-clinic-light">+968 93205058</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-clinic-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                      <h3 className="font-bold text-lg">{text.contact.info.email}</h3>
                      <p className="text-clinic-light">contact@horizonclinic.om</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;