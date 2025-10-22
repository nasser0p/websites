import React, { useState, useEffect, createContext, useRef } from 'react';
import type { AppProps } from 'next/app';
import { Language, TextContent, LanguageContextType, Data } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';

export const LanguageContext = createContext<LanguageContextType | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [fullData, setFullData] = useState<Data | null>(null);
  const [isStickyCtaVisible, setIsStickyCtaVisible] = useState(false);
  const [pulseTrigger, setPulseTrigger] = useState(0);
  const inactivityTimer = useRef<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/content.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Data = await response.json();
        setFullData(data);
      } catch (error) {
        console.error("Failed to fetch content:", error);
        // You could set an error state here and display an error message
      }
    };
    fetchData();
  }, []);
  
  // FIX: Added inactivity timer to trigger pulse animation on StickyCTA.
  useEffect(() => {
    const toggleVisibility = () => {
        const isVisible = window.scrollY > window.innerHeight * 0.8;
        setIsStickyCtaVisible(isVisible);
        
        // Clear previous timer on scroll
        if (inactivityTimer.current) {
            clearTimeout(inactivityTimer.current);
        }

        // Set a new timer to detect scroll stop
        inactivityTimer.current = window.setTimeout(() => {
            // Only trigger pulse if the CTA is visible and user is inactive
            if (window.scrollY > window.innerHeight * 0.8) {
                setPulseTrigger(prev => prev + 1);
            }
        }, 3000); // 3 seconds of inactivity
    };
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup on component unmount
    return () => {
        window.removeEventListener('scroll', toggleVisibility);
        if (inactivityTimer.current) {
            clearTimeout(inactivityTimer.current);
        }
    };
  }, []);

  const isRtl = lang === Language.AR;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [lang, isRtl]);

  const toggleLang = () => {
    setLang(prevLang => (prevLang === Language.EN ? Language.AR : Language.EN));
  };

  if (!fullData) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
            Loading...
        </div>
    );
  }

  const text = lang === Language.EN ? fullData.en : fullData.ar;
  // FIX: Add 'content' property to languageContextValue to match LanguageContextType.
  const languageContextValue = { lang, toggleLang, text, isRtl, content: fullData.content };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <Header />
      <main>
        <Component {...pageProps} fullData={fullData} />
      </main>
      <Footer />
      <StickyCTA isVisible={isStickyCtaVisible} pulseTrigger={pulseTrigger} />
    </LanguageContext.Provider>
  );
}

export default MyApp;
