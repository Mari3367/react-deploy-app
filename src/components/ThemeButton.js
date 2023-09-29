import React from 'react';
import { ThemeContext } from '../ThemeContext';
import { useContext } from 'react';

export default function ThemeButton() {
    const {toggleTheme, theme} = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={theme}>Switch Theme</button>
  )
}
