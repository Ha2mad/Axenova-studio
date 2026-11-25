import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language } from './data/games';

const LanguageContext = createContext({
  language: 'en' as Language,
  setLanguage: (_language: Language) => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem('axenova-language') === 'zh-CN' ? 'zh-CN' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('axenova-language', language);
    } catch {
      // The language still works when storage is unavailable.
    }
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return { ...context, t: (en: string, zh: string) => context.language === 'zh-CN' ? zh : en };
}
