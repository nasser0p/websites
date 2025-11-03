import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Philosophy from '../components/Philosophy';
import ParallaxSection from '../components/ParallaxSection';
import { useContent } from '../contexts/ContentContext';

const HomePage: React.FC = () => {
  const { content } = useContent();

  return (
    <>
      <Hero />
      <div className="py-16 md:py-20"><About /></div>
      <ParallaxSection imageUrl={content.images.parallax.services}>
        <Services />
      </ParallaxSection>
      <div className="py-16 md:py-20"><Philosophy /></div>
      <ParallaxSection imageUrl={content.images.parallax.team}>
        <Team />
      </ParallaxSection>
      <div className="py-16 md:py-20"><Testimonials /></div>
      <ParallaxSection imageUrl={content.images.parallax.contact}>
        <Contact />
      </ParallaxSection>
    </>
  );
};

export default HomePage;
