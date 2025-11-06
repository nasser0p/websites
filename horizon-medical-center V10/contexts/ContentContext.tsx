import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
// Fix: Correctly import named export `Translations`
import defaultTexts, { Translations } from '../lib/translations';
import { defaultImages } from '../lib/images';
import { themes, ThemeName } from '../lib/themes';

// Define the shape of the content
interface ContentData {
  texts: { en: Translations, ar: Translations };
  images: typeof defaultImages;
  theme: ThemeName;
}

interface ContentContextType {
  content: ContentData;
  setContent: React.Dispatch<React.SetStateAction<ContentData>>;
  themeColors: Record<string, string>;
}

// Create the context
const ContentContext = createContext<ContentContextType | undefined>(undefined);

const getInitialContent = (): ContentData => {
    const savedContent = localStorage.getItem('websiteContent');
    if (savedContent) {
        try {
            const parsed = JSON.parse(savedContent);
            // Basic validation to ensure theme exists
            if (themes[parsed.theme]) {
                return parsed;
            }
        } catch (e) {
            console.error("Failed to parse content from localStorage", e);
        }
    }
    return {
        texts: defaultTexts,
        images: defaultImages,
        theme: 'sereneTrust',
    };
};


// The provider component
export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentData>(getInitialContent());

  useEffect(() => {
    try {
      localStorage.setItem('websiteContent', JSON.stringify(content));
    } catch (e) {
      console.error("Failed to save content to localStorage", e);
    }
  }, [content]);

  const themeColors = themes[content.theme];

  const value = {
    content,
    setContent,
    themeColors,
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};

// Custom hook to use the content context
export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
