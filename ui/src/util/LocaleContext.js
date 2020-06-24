import React, { useState } from 'react';
import locales from '../locale';

const DEFAULT_LOCALE = localStorage.getItem('locale') || Object.keys(locales)[0];

export const LocaleContext = React.createContext(undefined);

export function LocaleContextProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  // if passed obj with multiple locales (e.g { ee: 'Tere', en: 'Hello' }) 
  // then choose the right translation
  const getLocaleValue = (localeObj) => {
    const value = localeObj[locale];

    if (value) return value;

    if (typeof localeObj === 'object') return null;

    return localeObj;
  };

  const setLocale = (_locale) => {
    setLocaleState(_locale);
    localStorage.setItem('locale', _locale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, translations: locales[locale], getLocaleValue }}>
      {children}
    </LocaleContext.Provider>
  );
}
