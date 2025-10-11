import React, { useEffect } from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import PriceList from '../components/PriceList';
import Contact from '../components/Contact';
import { OutletContextType } from '../App';
import Technology from '../components/Technology';

export default function HomePage() {
  const { fullData } = useOutletContext<OutletContextType>();
  const location = useLocation();

  useEffect(() => {
    document.title = "Horizon Medical Center | Gentle, Modern Dentistry";
  }, []);

  useEffect(() => {
    // Handles smooth scrolling when navigating from another page with a hash
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // A small timeout ensures the element is rendered before scrolling
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [location]);

  if (!fullData) {
    return null; // Loading is handled by App.tsx
  }

  const { content } = fullData;
  return (
    <>
        <Hero 
          locationImages={content.locationImages}
          googleMapsDirectionsUrl={content.googleMapsDirectionsUrl}
        />
        <Services services={content.services} />
        <About staff={content.staff} />
        {/* FIX: Render Technology component now that types are available */}
        {content.technology && <Technology technology={content.technology} />}
        <BeforeAfterGallery gallery={content.gallery} />
        <Testimonials testimonials={content.testimonials} googleReviews={content.googleReviews} />
        <PriceList prices={content.prices} />
        <Contact 
          googleMapsUrl={content.googleMapsUrl}
          googleMapsDirectionsUrl={content.googleMapsDirectionsUrl}
          locationImages={content.locationImages}
        />
    </>
  );
}