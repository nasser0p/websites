import React from 'react';
import Services from '../components/Services';
import { useContent } from '../contexts/ContentContext';
import ParallaxSection from '../components/ParallaxSection';


const ServicesPage: React.FC = () => {
  const { content } = useContent();
  return (
    <div className="pt-20 md:pt-24">
       <ParallaxSection imageUrl={content.images.parallax.services}>
        <Services />
      </ParallaxSection>
    </div>
  );
};

export default ServicesPage;