'use client'

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
    });

    // Set initial theme
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

    return () => {
      observer.disconnect();
    };
  }, []);

  return theme;
}
