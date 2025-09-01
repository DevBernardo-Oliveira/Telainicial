import React, { createContext, useState, useContext } from 'react';
import { lightColors, darkColors } from '../theme/colors';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colors = lightColors;

  return (
    <ThemeContext.Provider value={{ colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);