// context/DarkModeContext.js
"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);

    const handleChange = (e) => setIsDarkMode(e.matches);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', handleChange);

    return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
