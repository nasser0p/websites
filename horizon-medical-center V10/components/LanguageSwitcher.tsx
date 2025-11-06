import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-16 h-8 flex items-center bg-clinic-deep-blue rounded-full p-1 cursor-pointer select-none transition-colors duration-300 border-2 border-clinic-primary focus:outline-none"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <span className={`absolute right-1 text-xs font-bold ${language === 'en' ? 'text-white' : 'text-clinic-gray'}`}>
        EN
      </span>
      <span className={`absolute left-1 text-xs font-bold ${language === 'ar' ? 'text-white' : 'text-clinic-gray'}`}>
        AR
      </span>
      <div
        className="w-6 h-6 bg-clinic-primary rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
        style={{ transform: language === 'en' ? 'translateX(28px)' : 'translateX(0px)' }}
      />
    </button>
  );
};

export default LanguageSwitcher;