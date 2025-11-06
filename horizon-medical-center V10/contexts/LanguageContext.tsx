import React, { createContext, useState, useContext, ReactNode, useLayoutEffect } from 'react';
import defaultTexts from '../lib/translations';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  text: typeof defaultTexts.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
    const storedLang = localStorage.getItem('language');
    if (storedLang === 'en' || storedLang === 'ar') {
        return storedLang;
    }
    // Default to 'en' if browser language is not 'ar'
    return navigator.language.startsWith('ar') ? 'ar' : 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage());

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  }, [language]);

  const text = defaultTexts[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, text }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
