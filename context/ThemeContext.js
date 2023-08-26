'use client';

import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const changeMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ changeMode, mode }}>
      <div className={`${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
