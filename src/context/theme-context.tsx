import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  themeToggle: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const storedTheme = localStorage.getItem('theme') as Theme;
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  const rootElement = document.documentElement;

  const [theme, setTheme] = useState<Theme>(storedTheme || 'system');

  const onWindowMatch = useCallback(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && prefersDarkMode.matches)
    ) {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  }, [prefersDarkMode.matches, rootElement.classList]);

  useEffect(() => {
    onWindowMatch();
  }, [onWindowMatch]);

  useEffect(() => {
    switch (theme) {
      case 'dark':
        rootElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        rootElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [onWindowMatch, rootElement.classList, theme]);

  const themeToggle = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    const listener = () => {
      if (!('theme' in localStorage)) {
        onWindowMatch();
      }
    };

    prefersDarkMode.addEventListener('change', listener);

    return () => {
      prefersDarkMode.removeEventListener('change', listener);
    };
  }, [onWindowMatch, prefersDarkMode]);

  const value = useMemo(() => {
    return { theme, themeToggle };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
