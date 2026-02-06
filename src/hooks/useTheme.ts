import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

/**
 * Hook for managing light/dark theme
 * Persists preference to localStorage
 * Respects system preference as fallback
 */
export function useTheme(): {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
} {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get saved theme or system preference
    const saved = localStorage.getItem('theme') as Theme | null;
    const systemPreference = window.matchMedia('(prefers-color-scheme: light)')
      .matches
      ? 'light'
      : 'dark';

    const initialTheme = saved || systemPreference;
    setThemeState(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;

    // Remove both theme classes
    root.classList.remove('light-theme', 'dark-theme');

    // Add the new theme class
    root.classList.add(`${newTheme}-theme`);

    // Save preference
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  // Prevent rendering until mounted to avoid hydration mismatch
  return mounted
    ? { theme, toggleTheme, setTheme }
    : { theme: 'dark', toggleTheme: () => {}, setTheme: () => {} };
}

export default useTheme;
