import React, { useState, useEffect, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Language, TextContent, LanguageContextType, Data, ContentData } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import StickyCTA from './components/StickyCTA';

export const LanguageContext = createContext<LanguageContextType | null>(null);

// We define this type here for the data passed down to child routes.
export type OutletContextType = {
  fullData: Data;
};

function App() {
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
    if (document.documentElement.lang !== lang) {
        document.documentElement.lang = lang;
    }
    if (document.documentElement.dir !== (isRtl ? 'rtl' : 'ltr')) {
        document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }
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
  const languageContextValue = { lang, toggleLang, text, isRtl, content: fullData.content };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <Header />
      <main>
        <Outlet context={{ fullData } satisfies OutletContextType} />
      </main>
      <Footer />
      <StickyCTA isVisible={isStickyCtaVisible} />
      <WhatsAppWidget isStickyCtaVisible={isStickyCtaVisible} />
    </LanguageContext.Provider>
  );
}

export default App;