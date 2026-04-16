import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Always use Portuguese (PT-BR) as default
    const stored = localStorage.getItem('language');
    return (stored as Language) || 'pt-BR';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = 'pt-BR';
  }, [language]);

  const setLanguage = (lang: Language) => {
    // Keep language as PT-BR only
    setLanguageState('pt-BR');
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations['pt-BR'];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
