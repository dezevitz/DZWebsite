import React, { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
);

export default ThemeProvider;