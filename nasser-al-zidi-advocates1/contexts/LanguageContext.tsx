import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useContent } from './ContentContext';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  text: any; // Using 'any' because the structure comes from translations.ts
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const { content } = useContent();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ar' : 'en'));
  };

  const text = content.texts[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, text }}>
      {children}
    {/* FIX: Corrected typo in closing tag from `Language-Context.Provider` to `LanguageContext.Provider`. */}
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