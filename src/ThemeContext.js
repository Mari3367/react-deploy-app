import React from 'react';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const value = {
    theme,
    toggleTheme
  }

  return(
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
