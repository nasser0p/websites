import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import defaultTexts from '../lib/translations';
import { defaultImages } from '../lib/images';

const defaultContent = {
  texts: defaultTexts,
  images: defaultImages
};

const loadInitialContent = () => {
  try {
    const storedContent = localStorage.getItem('website-content');
    if (storedContent) {
      const parsed = JSON.parse(storedContent);
      // Basic merge to ensure new fields from defaults are included
      return {
        texts: { ...defaultTexts, ...parsed.texts },
        images: { ...defaultImages, ...parsed.images }
      };
    }
  } catch (error) {
    console.error("Failed to load content from localStorage", error);
  }
  return defaultContent;
};

interface ContentContextType {
  content: typeof defaultContent;
  updateContent: (path: string, value: any) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Helper to set a value in a nested object immutably
const setIn = (obj: any, path: string[], value: any): any => {
    const [key, ...restPath] = path;
    if (key === undefined) return value;
    
    const newObj = Array.isArray(obj) ? [...obj] : { ...obj };
    
    if (restPath.length > 0) {
        newObj[key] = setIn(obj[key] || {}, restPath, value);
    } else {
        newObj[key] = value;
    }
    return newObj;
};

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState(loadInitialContent());

  const updateContent = useCallback((path: string, value: any) => {
    setContent(prevContent => {
      const newContent = setIn(prevContent, path.split('.'), value);
      try {
        localStorage.setItem('website-content', JSON.stringify(newContent));
      } catch (error) {
        console.error("Failed to save content to localStorage", error);
      }
      return newContent;
    });
  }, []);

  const resetContent = () => {
    localStorage.removeItem('website-content');
    setContent(defaultContent);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
