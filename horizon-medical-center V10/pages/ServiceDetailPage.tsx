import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ServiceItem } from '../lib/translations';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { text } = useLanguage();

  const service = text.services.items.find((s: ServiceItem) => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-24 pb-20 container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold font-serif text-clinic-primary">Service Not Found</h1>
        <p className="text-clinic-gray mt-4">The service you are looking for does not exist.</p>
        <Link to="/services" className="mt-8 inline-block bg-clinic-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300">
          {text.ui.backToServices}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-20 bg-clinic-light">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 text-left rtl:text-right">
          <Link to="/services" className="text-clinic-primary hover:underline mb-4 inline-block">
            &larr; {text.ui.backToServices}
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-clinic-primary leading-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-xl text-clinic-gray max-w-3xl">
            {service.details.introduction}
          </p>
        </div>

        <div className="space-y-8">
            {service.details.points.map((point, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-left rtl:text-right border border-gray-200">
                    <h3 className="text-2xl font-semibold text-clinic-deep-blue mb-2">{point.title}</h3>
                    <p className="text-clinic-gray leading-relaxed">{point.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;