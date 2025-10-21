import React, { useState, useEffect, createContext } from 'react';
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
  
  useEffect(() => {
    const toggleVisibility = () => {
        // Show CTA when user scrolls past 80% of the initial viewport height
        if (window.scrollY > window.innerHeight * 0.8) {
            setIsStickyCtaVisible(true);
        } else {
            setIsStickyCtaVisible(false);
        }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
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
      <StickyCTA isVisible={isStickyCtaVisible} />
    </LanguageContext.Provider>
  );
}

export default MyApp;